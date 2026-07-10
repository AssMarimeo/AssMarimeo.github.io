/* ============================================================
   Marimeo — Overlay "Chi siamo"
   Modale su desktop, bottom sheet su mobile. Il contenuto NON e'
   duplicato: viene preso al volo da chi-siamo.html (fonte unica) e
   iniettato nel dialog. Se il JS non c'e' o il fetch fallisce, il
   pulsante resta un normale link a chi-siamo.html (fallback).
   ============================================================ */
(function () {
  "use strict";

  var HASH = "#chi-siamo-overlay";
  var PAGE_URL = "chi-siamo.html";
  // Sezioni intere (con i loro sfondi colorati) da mostrare nell'overlay:
  // Missione/Visione, Valori, Comitato. L'intro resta fuori (gia' nel teaser).
  var SECTION_SELECTORS = [".about-mv", ".section-cyan", ".section-yellow"];

  // Tutti i link che puntano alla pagina Chi siamo aprono l'overlay:
  // il pulsante "Scopri di piu'" del teaser e il link nel footer.
  var triggers = document.querySelectorAll('a[href="' + PAGE_URL + '"]');
  var dialog = document.getElementById("about-dialog");
  var body = dialog && document.getElementById("about-dialog-body");

  // Enhancement progressivo: senza i pezzi necessari i link funzionano da soli.
  if (!triggers.length || !dialog || !body || typeof dialog.showModal !== "function") return;

  var closeBtn = dialog.querySelector("[data-close]");
  var lastFocus = null;
  var contentPromise = null; // memoizza il caricamento: un solo fetch condiviso

  /* Traduce l'aria-label del pulsante chiudi nella lingua attiva. */
  function syncCloseLabel() {
    if (closeBtn && window.i18n && typeof window.i18n.t === "function") {
      closeBtn.setAttribute("aria-label", window.i18n.t("close") || "Chiudi");
    }
  }

  /* Carica UNA sola volta le sezioni da chi-siamo.html e le inietta.
     La promise e' memoizzata: click ravvicinati condividono lo stesso
     fetch (niente doppia iniezione). In caso di errore si azzera, cosi'
     un tentativo successivo puo' riprovare. */
  function ensureContent() {
    if (contentPromise) return contentPromise;
    contentPromise = fetch(PAGE_URL, { credentials: "same-origin" })
      .then(function (res) {
        if (!res.ok) throw new Error("HTTP " + res.status);
        return res.text();
      })
      .then(function (html) {
        var doc = new DOMParser().parseFromString(html, "text/html");
        var frag = document.createDocumentFragment();
        SECTION_SELECTORS.forEach(function (sel) {
          var node = doc.querySelector(sel);
          if (node) frag.appendChild(node.cloneNode(true));
        });
        body.appendChild(frag);
        // Ri-applica le traduzioni: applyTranslations riscansiona il documento,
        // quindi tradurra' anche i nodi appena inseriti nella lingua corrente.
        if (window.i18n && typeof window.i18n.set === "function") {
          window.i18n.set(window.i18n.lang);
        }
      })
      .catch(function (err) {
        contentPromise = null; // permette un nuovo tentativo dopo un errore
        throw err;
      });
    return contentPromise;
  }

  function open() {
    if (dialog.open) return;
    lastFocus = document.activeElement;
    ensureContent()
      .then(function () {
        syncCloseLabel();
        if (!dialog.open) dialog.showModal();
        document.body.classList.add("has-modal");
        if (location.hash !== HASH) {
          history.replaceState(null, "", location.pathname + location.search + HASH);
        }
      })
      .catch(function () {
        // Fetch fallito: comportati da link normale.
        window.location.href = PAGE_URL;
      });
  }

  function close() {
    if (dialog.open) dialog.close();
  }

  /* Apertura da uno qualsiasi dei link a Chi siamo (teaser + footer),
     lasciando intatti i click con modificatori (apertura in nuova scheda). */
  Array.prototype.forEach.call(triggers, function (trigger) {
    trigger.addEventListener("click", function (e) {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
      e.preventDefault();
      open();
    });
  });

  /* Chiusura: pulsante, oppure click sul backdrop (fuori dal riquadro). */
  dialog.addEventListener("click", function (e) {
    if (e.target.closest("[data-close]")) { close(); return; }
    var r = dialog.getBoundingClientRect();
    var inside = e.clientX >= r.left && e.clientX <= r.right &&
                 e.clientY >= r.top && e.clientY <= r.bottom;
    if (!inside) close(); // click sul ::backdrop
  });

  /* Pulizia alla chiusura (ESC nativo incluso): sblocca lo scroll,
     ripulisce l'hash e ripristina il focus. */
  dialog.addEventListener("close", function () {
    document.body.classList.remove("has-modal");
    if (location.hash === HASH) {
      history.replaceState(null, "", location.pathname + location.search);
    }
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  });

  /* Aggiorna l'aria-label del pulsante chiudi al cambio lingua. */
  document.addEventListener("marimeo:langchange", syncCloseLabel);

  /* Link condivisibile: index.html#chi-siamo-overlay apre direttamente l'overlay. */
  if (location.hash === HASH) open();
})();
