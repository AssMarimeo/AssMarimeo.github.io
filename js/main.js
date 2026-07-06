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
})();
