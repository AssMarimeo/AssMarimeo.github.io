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

    menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });
  }

  /* ---------- Anno corrente nel footer ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- Contatori animati (dati d'impatto) ---------- */
  const counters = document.querySelectorAll(".stat-num[data-target]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const formatNumber = (n) => {
    const lang = (window.i18n && window.i18n.lang) || "it";
    const locale = lang === "en" ? "en-US" : lang === "fr" ? "fr-FR" : "it-IT";
    try {
      return Math.round(n).toLocaleString(locale, { useGrouping: "always" });
    } catch (e) {
      return Math.round(n).toLocaleString(locale);
    }
  };

  const renderCounter = (el, value) => {
    el.textContent = formatNumber(value) + (el.dataset.suffix || "");
  };

  const animateCounter = (el) => {
    const target = parseFloat(el.dataset.target) || 0;
    if (reduceMotion) { renderCounter(el, target); return; }

    const duration = 1600;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      renderCounter(el, target * eased);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  if (counters.length) {
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.4 });
      counters.forEach((el) => observer.observe(el));
    } else {
      counters.forEach((el) => renderCounter(el, parseFloat(el.dataset.target) || 0));
    }

    // Riformatta i numeri già mostrati quando cambia lingua
    document.addEventListener("marimeo:langchange", () => {
      counters.forEach((el) => {
        if (el.textContent.trim() !== "0") renderCounter(el, parseFloat(el.dataset.target) || 0);
      });
    });
  }
})();
