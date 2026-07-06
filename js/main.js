/* ============================================================
   Marimeo — script del sito
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Menu mobile ---------- */
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("nav-menu");

  if (toggle && menu) {
    const closeMenu = () => {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Apri il menu");
    };

    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Chiudi il menu" : "Apri il menu");
    });

    // Chiudi il menu quando si clicca una voce
    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    // Chiudi con Esc
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* ---------- Anno corrente nel footer ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- Validazione form iscrizione ---------- */
  const form = document.querySelector(".signup-form");
  if (form) {
    const note = form.querySelector(".form-note");
    // Fallback nel caso i18n non sia disponibile
    const tr = (key) => (window.i18n ? window.i18n.t(key) : "");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nome = form.nome.value.trim();
      const email = form.email.value.trim();
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!nome || !emailOk) {
        note.textContent = tr("form_error") || "Controlla nome ed email.";
        note.className = "form-note err";
        return;
      }

      // SEGNAPOSTO: qui va collegato l'invio reale (es. servizio email/Formspree)
      const msg = tr("form_success") || "Grazie {name}!";
      note.textContent = msg.replace("{name}", nome);
      note.className = "form-note ok";
      form.reset();
    });
  }
})();
