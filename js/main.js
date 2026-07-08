/* ============================================================
   Marimeo — script del sito
   ============================================================ */
(function () {
  "use strict";

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

  /* ---------- FAQ: apertura/chiusura animata ---------- */
  if (!reduceMotion) {
    document.querySelectorAll(".faq-item").forEach((item) => {
      const summary = item.querySelector("summary");
      const content = item.querySelector(".faq-a");
      if (!summary || !content) return;

      summary.addEventListener("click", (e) => {
        if (item.classList.contains("is-animating")) { e.preventDefault(); return; }
        e.preventDefault();

        const closing = item.open;
        const from = closing ? content.getBoundingClientRect().height : 0;

        // Il contenuto di un <details> chiuso non e' sottoposto a layout: va aperto
        // e va forzato un reflow, altrimenti scrollHeight puo' restituire 0.
        if (!closing) item.open = true;
        void content.offsetHeight;
        const to = closing ? 0 : content.scrollHeight;

        if (from === to) { // niente da animare: evita di restare bloccati in attesa di transitionend
          if (closing) item.open = false;
          content.style.height = "";
          return;
        }

        item.classList.add("is-animating");
        content.style.height = from + "px";
        void content.offsetHeight; // committa l'altezza di partenza: senza, la transizione non parte

        const finish = () => {
          clearTimeout(timer);
          content.removeEventListener("transitionend", onEnd);
          content.style.height = "";
          item.classList.remove("is-animating");
          if (closing) item.open = false;
        };
        const onEnd = (ev) => { if (ev.propertyName === "height") finish(); };
        content.addEventListener("transitionend", onEnd);
        // Rete di sicurezza: se transitionend non arriva, non lasciare l'item bloccato.
        const timer = setTimeout(finish, 400);

        content.style.height = to + "px";
      });
    });
  }
})();
