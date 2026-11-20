#!/usr/bin/env node
/* ============================================================
   Marimeo — Controlli di coerenza del sito (zero dipendenze)

   Verifica cio' che i validatori generici non possono sapere:
   1. Ogni blocco JSON-LD e' JSON valido.
   2. Il blocco FAQPage della home coincide con le FAQ visibili.
   3. Le traduzioni hanno le stesse chiavi in it / en / fr.
   4. Ogni data-i18n usato nell'HTML esiste nelle traduzioni.
   5. <title> e meta description nell'HTML coincidono con il testo
      italiano di i18n.js (che li sovrascrive al caricamento: se
      divergono, Google indicizza la versione di i18n.js).

   Uso: node scripts/check-site.mjs   (exit 1 se qualcosa non va)
   ============================================================ */
import { readFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const LANGS = ["it", "en", "fr"];
const errors = [];
const fail = (file, msg) => errors.push(`${file}: ${msg}`);

const read = (f) => readFileSync(join(ROOT, f), "utf8");
const htmlFiles = readdirSync(ROOT).filter((f) => f.endsWith(".html")).sort();

/* Decodifica le entita' piu' comuni e normalizza gli spazi,
   cosi' il confronto riguarda il testo, non la sua scrittura. */
function text(s) {
  return s
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

/* ---- Traduzioni: estrae l'oggetto letterale e lo valuta isolato ---- */
function loadTranslations() {
  const src = read("js/i18n.js");
  const start = src.indexOf("const translations = {");
  const end = src.indexOf("\n  };", start);
  if (start < 0 || end < 0) {
    fail("js/i18n.js", "oggetto `translations` non trovato (struttura cambiata?)");
    return null;
  }
  const literal = src.slice(start + "const translations = ".length, end + "\n  }".length);
  return vm.runInNewContext(`(${literal})`, Object.create(null), { timeout: 1000 });
}

const tr = loadTranslations();

if (tr) {
  // 3. Stesse chiavi in tutte le lingue.
  const base = new Set(Object.keys(tr.it || {}));
  for (const lang of LANGS) {
    if (!tr[lang]) { fail("js/i18n.js", `lingua "${lang}" mancante`); continue; }
    const keys = new Set(Object.keys(tr[lang]));
    for (const k of base) if (!keys.has(k)) fail("js/i18n.js", `chiave "${k}" mancante in "${lang}"`);
    for (const k of keys) if (!base.has(k)) fail("js/i18n.js", `chiave "${k}" presente in "${lang}" ma non in "it"`);
  }
}

for (const file of htmlFiles) {
  const html = read(file);

  // 1. JSON-LD valido.
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  const graph = [];
  for (const [, json] of blocks) {
    try {
      const data = JSON.parse(json);
      graph.push(...(data["@graph"] || [data]));
    } catch (e) {
      fail(file, `JSON-LD non valido: ${e.message}`);
    }
  }

  // 2. FAQPage == FAQ visibili (Google richiede che coincidano).
  const visible = [...html.matchAll(
    /<summary[^>]*>([\s\S]*?)<\/summary>\s*<div class="faq-a">([\s\S]*?)<\/div>/g
  )].map(([, q, a]) => ({ q: text(q), a: text(a) }));
  const faqPage = graph.find((n) => n["@type"] === "FAQPage");
  if (faqPage) {
    const ld = (faqPage.mainEntity || []).map((e) => ({ q: e.name, a: e.acceptedAnswer?.text }));
    if (ld.length !== visible.length) {
      fail(file, `FAQPage ha ${ld.length} domande, la pagina ne mostra ${visible.length}`);
    }
    ld.forEach((item, i) => {
      const v = visible[i];
      if (!v) return;
      if (item.q !== v.q) fail(file, `FAQ #${i + 1}: domanda diversa\n    JSON-LD: ${item.q}\n    pagina:  ${v.q}`);
      if (item.a !== v.a) fail(file, `FAQ #${i + 1}: risposta diversa\n    JSON-LD: ${item.a}\n    pagina:  ${v.a}`);
    });
  } else if (visible.length) {
    fail(file, "la pagina ha delle FAQ ma nessun blocco FAQPage nel JSON-LD");
  }

  if (!tr) continue;

  // 4. Ogni data-i18n esiste nelle traduzioni.
  for (const [, key] of html.matchAll(/data-i18n="([^"]+)"/g)) {
    if (!(key in tr.it)) fail(file, `data-i18n="${key}" non esiste in i18n.js`);
  }

  // 5. Title e description coincidono con l'italiano di i18n.js.
  const title = html.match(/<title data-i18n="([^"]+)">([\s\S]*?)<\/title>/);
  if (title && title[1] in tr.it && text(title[2]) !== tr.it[title[1]]) {
    fail(file, `<title> diverso da i18n.js (${title[1]})\n    HTML:    ${text(title[2])}\n    i18n.js: ${tr.it[title[1]]}`);
  }
  const desc = html.match(/<meta name="description" data-i18n="([^"]+)" content="([^"]*)"/);
  if (desc && desc[1] in tr.it && text(desc[2]) !== tr.it[desc[1]]) {
    fail(file, `meta description diversa da i18n.js (${desc[1]})\n    HTML:    ${text(desc[2])}\n    i18n.js: ${tr.it[desc[1]]}`);
  }
}

if (errors.length) {
  console.error(`✗ ${errors.length} problemi trovati:\n`);
  for (const e of errors) console.error(`  • ${e}`);
  process.exit(1);
}
console.log(`✓ Controlli superati su ${htmlFiles.length} pagine HTML e js/i18n.js`);
