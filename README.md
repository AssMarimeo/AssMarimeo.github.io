# Marimeo — Sito Associazione Giovanile

Sito web statico e responsive dell'associazione giovanile **Marimeo**.

## Struttura

```
AGMarimeo/
├── index.html        # Pagina principale (Chi siamo, Attività, Contatti/Iscriviti)
├── css/style.css     # Stili + regole responsive
├── js/main.js        # Menu mobile, anno footer, validazione form
├── assets/img/       # Immagini e logo
└── README.md
```

## Come vederlo in locale

Apri `index.html` in un browser, oppure avvia un piccolo server:

```bash
python3 -m http.server 8000
# poi apri http://localhost:8000
```

## Personalizzazione

I punti da completare sono marcati nel codice con `SEGNAPOSTO`:

- **Testi**: `index.html` (Chi siamo, attività, contatti).
- **Colori del brand**: variabili `--color-*` in cima a `css/style.css`.
- **Logo**: sostituisci il quadratino `.brand-mark` con un'immagine in `assets/img/`.
- **Invio del form**: in `js/main.js` collega un servizio reale (es. Formspree).

## Pubblicazione

Il sito è statico e può essere pubblicato gratis su **GitHub Pages**,
Netlify o Cloudflare Pages.

## Controlli automatici

Ogni PR verso `main` esegue i controlli in `.github/workflows/controlli.yml`:

- **SEO, JSON-LD e traduzioni** (`scripts/check-site.mjs`): JSON-LD valido, blocco
  FAQPage identico alle FAQ visibili, stesse chiavi in it/en/fr, `<title>` e meta
  description dell'HTML identici al testo italiano di `js/i18n.js`.
- **Validazione HTML** (html-validate, regole in `.htmlvalidate.json`).
- **Link**: quelli interni bloccano la PR; quelli esterni danno solo un avviso
  (esclusioni in `lychee.toml`).

Per eseguirli in locale prima di aprire una PR:

```bash
node scripts/check-site.mjs
npx html-validate@9.4.1 *.html
```
