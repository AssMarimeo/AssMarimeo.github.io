/* ============================================================
   Marimeo — Internazionalizzazione (i18n)
   Lingue: it (default), en, fr
   ============================================================ */
(function () {
  "use strict";

  const DEFAULT_LANG = "it";
  const SUPPORTED = ["it", "en", "fr"];
  const STORAGE_KEY = "marimeo-lang";

  const translations = {
    /* ---------------- ITALIANO (default) ---------------- */
    it: {
      meta_desc: "Associazione Giovanile Marimeo: attività, eventi, la casetta dell'acqua di Scauri e occasioni per crescere insieme. Scopri chi siamo e diventa socio.",
      nav_about: "Chi siamo",
      nav_activities: "Attività",
      nav_water: "Casetta dell'acqua",
      nav_contact: "Contatti",
      nav_join: "Diventa socio",

      hero_eyebrow: "Associazione giovanile",
      hero_title: "Crescere insieme,<br />un'attività alla volta.",
      hero_lead: "Marimeo è il punto di ritrovo dei giovani del territorio: organizziamo attività, eventi e progetti per stare insieme, imparare e lasciare il segno.",
      hero_cta1: "Diventa socio",
      hero_cta2: "Scopri le attività",

      about_eyebrow: "Chi siamo",
      about_title: "Una comunità di giovani con tante idee",
      about_p1: "Marimeo nasce dalla voglia di un gruppo di ragazzi e ragazze di creare uno spazio aperto, inclusivo e pieno di energia. Crediamo che i giovani possano essere protagonisti del cambiamento nella propria comunità.",
      about_p2: "Attraverso attività culturali, sociali e ricreative offriamo occasioni per conoscersi, mettersi in gioco e trasformare le idee in progetti concreti.",
      value1_title: "Inclusione",
      value1_text: "Uno spazio per tutti, dove ognuno può sentirsi a casa.",
      value2_title: "Partecipazione",
      value2_text: "Le idee di ognuno contano e diventano azione.",
      value3_title: "Comunità",
      value3_text: "Insieme si cresce, si impara e ci si diverte.",

      act_eyebrow: "Attività & Eventi",
      act_title: "Cosa facciamo",
      act_intro: "Alcune delle attività e degli eventi che organizziamo durante l'anno.",
      card1_tag: "Evento",
      card1_title: "Serate a tema",
      card1_meta: "📅 Ogni mese · 📍 Sede Marimeo",
      card1_text: "Musica, giochi e momenti di condivisione aperti a tutti i giovani.",
      card2_tag: "Progetto",
      card2_title: "Laboratori creativi",
      card2_meta: "📅 Autunno · 📍 Da definire",
      card2_text: "Percorsi di arte, musica e volontariato per esprimere i propri talenti.",
      card3_tag: "Community",
      card3_title: "Volontariato locale",
      card3_meta: "📅 Tutto l'anno · 📍 Territorio",
      card3_text: "Iniziative sul territorio per dare una mano a chi ne ha bisogno.",

      water_eyebrow: "Il nostro progetto",
      water_title: "La casetta dell'acqua di Scauri",
      water_desc: "Gestiamo la casetta dell'acqua di Scauri: acqua buona, controllata e a chilometro zero per tutta la comunità. Le analisi vengono aggiornate periodicamente e sono liberamente consultabili.",
      water_address_label: "Dove si trova",
      water_address: "Casetta dell'acqua di Scauri — Minturno (LT)",
      water_analysis_label: "Analisi dell'acqua",
      water_analysis_period: "Aggiornate — I semestre 2026",
      water_directions: "Come arrivare",
      water_analysis_link: "Scarica le analisi (PDF)",

      contact_eyebrow: "Contatti",
      contact_title: "Parla con noi",
      legal_name: "Associazione Giovanile Marimeo",

      join_title: "Diventa socio",
      join_intro: "Unisciti a Marimeo! Compila il modulo della campagna associativa 2026: ti ricontatteremo per darti il benvenuto.",
      join_button: "Compila il modulo",
      join_note: "Campagna associativa 2026",

      footer_statute: "Statuto (PDF)",
      footer_copy: "Associazione Giovanile Marimeo. Tutti i diritti riservati.",
      back_top: "Torna su ↑"
    },

    /* ---------------- ENGLISH ---------------- */
    en: {
      meta_desc: "Marimeo Youth Association: activities, events, the Scauri water house and chances to grow together. Discover who we are and become a member.",
      nav_about: "About us",
      nav_activities: "Activities",
      nav_water: "Water house",
      nav_contact: "Contact",
      nav_join: "Become a member",

      hero_eyebrow: "Youth association",
      hero_title: "Growing together,<br />one activity at a time.",
      hero_lead: "Marimeo is the meeting point for young people in our area: we organise activities, events and projects to spend time together, learn and make a difference.",
      hero_cta1: "Become a member",
      hero_cta2: "Explore activities",

      about_eyebrow: "About us",
      about_title: "A community of young people full of ideas",
      about_p1: "Marimeo was born from the desire of a group of young people to create an open, inclusive and energetic space. We believe that young people can be protagonists of change in their community.",
      about_p2: "Through cultural, social and recreational activities we offer chances to meet, get involved and turn ideas into real projects.",
      value1_title: "Inclusion",
      value1_text: "A space for everyone, where each person can feel at home.",
      value2_title: "Participation",
      value2_text: "Everyone's ideas matter and turn into action.",
      value3_title: "Community",
      value3_text: "Together we grow, we learn and we have fun.",

      act_eyebrow: "Activities & Events",
      act_title: "What we do",
      act_intro: "Some of the activities and events we organise throughout the year.",
      card1_tag: "Event",
      card1_title: "Themed evenings",
      card1_meta: "📅 Every month · 📍 Marimeo venue",
      card1_text: "Music, games and moments to share, open to all young people.",
      card2_tag: "Project",
      card2_title: "Creative workshops",
      card2_meta: "📅 Autumn · 📍 To be defined",
      card2_text: "Art, music and volunteering paths to express your talents.",
      card3_tag: "Community",
      card3_title: "Local volunteering",
      card3_meta: "📅 All year round · 📍 Our area",
      card3_text: "Local initiatives to give a hand to those in need.",

      water_eyebrow: "Our project",
      water_title: "The Scauri water house",
      water_desc: "We run the Scauri water house: good, tested, zero-kilometre water for the whole community. The analyses are updated regularly and freely available to consult.",
      water_address_label: "Where it is",
      water_address: "Scauri water house — Minturno (LT), Italy",
      water_analysis_label: "Water analysis",
      water_analysis_period: "Updated — 1st half of 2026",
      water_directions: "Get directions",
      water_analysis_link: "Download the analysis (PDF)",

      contact_eyebrow: "Contact",
      contact_title: "Get in touch",
      legal_name: "Marimeo Youth Association",

      join_title: "Become a member",
      join_intro: "Join Marimeo! Fill in the 2026 membership campaign form: we'll get back to you to welcome you.",
      join_button: "Fill in the form",
      join_note: "2026 membership campaign",

      footer_statute: "Statute (PDF)",
      footer_copy: "Marimeo Youth Association. All rights reserved.",
      back_top: "Back to top ↑"
    },

    /* ---------------- FRANÇAIS ---------------- */
    fr: {
      meta_desc: "Association de Jeunesse Marimeo : activités, événements, la maison de l'eau de Scauri et occasions de grandir ensemble. Découvrez qui nous sommes et devenez membre.",
      nav_about: "À propos",
      nav_activities: "Activités",
      nav_water: "Maison de l'eau",
      nav_contact: "Contact",
      nav_join: "Devenir membre",

      hero_eyebrow: "Association de jeunesse",
      hero_title: "Grandir ensemble,<br />une activité à la fois.",
      hero_lead: "Marimeo est le point de rencontre des jeunes du territoire : nous organisons des activités, des événements et des projets pour être ensemble, apprendre et laisser une trace.",
      hero_cta1: "Devenir membre",
      hero_cta2: "Découvrir les activités",

      about_eyebrow: "À propos",
      about_title: "Une communauté de jeunes pleine d'idées",
      about_p1: "Marimeo est né de l'envie d'un groupe de jeunes de créer un espace ouvert, inclusif et plein d'énergie. Nous croyons que les jeunes peuvent être les protagonistes du changement dans leur communauté.",
      about_p2: "À travers des activités culturelles, sociales et récréatives, nous offrons des occasions de se rencontrer, de s'impliquer et de transformer les idées en projets concrets.",
      value1_title: "Inclusion",
      value1_text: "Un espace pour tous, où chacun peut se sentir chez soi.",
      value2_title: "Participation",
      value2_text: "Les idées de chacun comptent et deviennent action.",
      value3_title: "Communauté",
      value3_text: "Ensemble, on grandit, on apprend et on s'amuse.",

      act_eyebrow: "Activités & Événements",
      act_title: "Ce que nous faisons",
      act_intro: "Quelques activités et événements que nous organisons tout au long de l'année.",
      card1_tag: "Événement",
      card1_title: "Soirées à thème",
      card1_meta: "📅 Chaque mois · 📍 Siège Marimeo",
      card1_text: "Musique, jeux et moments de partage ouverts à tous les jeunes.",
      card2_tag: "Projet",
      card2_title: "Ateliers créatifs",
      card2_meta: "📅 Automne · 📍 À définir",
      card2_text: "Des parcours d'art, de musique et de bénévolat pour exprimer ses talents.",
      card3_tag: "Communauté",
      card3_title: "Bénévolat local",
      card3_meta: "📅 Toute l'année · 📍 Le territoire",
      card3_text: "Des initiatives locales pour donner un coup de main à ceux qui en ont besoin.",

      water_eyebrow: "Notre projet",
      water_title: "La maison de l'eau de Scauri",
      water_desc: "Nous gérons la maison de l'eau de Scauri : une eau bonne, contrôlée et de proximité pour toute la communauté. Les analyses sont mises à jour régulièrement et librement consultables.",
      water_address_label: "Où se trouve-t-elle",
      water_address: "Maison de l'eau de Scauri — Minturno (LT), Italie",
      water_analysis_label: "Analyses de l'eau",
      water_analysis_period: "À jour — 1er semestre 2026",
      water_directions: "Itinéraire",
      water_analysis_link: "Télécharger les analyses (PDF)",

      contact_eyebrow: "Contact",
      contact_title: "Parlez avec nous",
      legal_name: "Association de Jeunesse Marimeo",

      join_title: "Devenir membre",
      join_intro: "Rejoignez Marimeo ! Remplissez le formulaire de la campagne d'adhésion 2026 : nous vous recontacterons pour vous accueillir.",
      join_button: "Remplir le formulaire",
      join_note: "Campagne d'adhésion 2026",

      footer_statute: "Statuts (PDF)",
      footer_copy: "Association de Jeunesse Marimeo. Tous droits réservés.",
      back_top: "Retour en haut ↑"
    }
  };

  /* ---------- Stato ---------- */
  function normalize(lang) {
    if (!lang) return null;
    const short = String(lang).toLowerCase().slice(0, 2);
    return SUPPORTED.includes(short) ? short : null;
  }

  function detectInitialLang() {
    // 1) preferenza salvata  2) lingua del browser  3) default
    let saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    return normalize(saved) || normalize(navigator.language) || DEFAULT_LANG;
  }

  let currentLang = detectInitialLang();

  /* ---------- Applicazione delle traduzioni ---------- */
  function t(key) {
    const dict = translations[currentLang] || translations[DEFAULT_LANG];
    return (key in dict) ? dict[key] : (translations[DEFAULT_LANG][key] || "");
  }

  function applyTranslations(lang) {
    const chosen = normalize(lang) || DEFAULT_LANG;
    currentLang = chosen;
    document.documentElement.lang = chosen;

    // Testo degli elementi con data-i18n
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = t(key);
      if (value === "") return;
      if (el.hasAttribute("data-i18n-html")) {
        el.innerHTML = value;             // solo per contenuti interni fidati (es. <br>)
      } else if (el.tagName === "META") {
        el.setAttribute("content", value);
      } else {
        el.textContent = value;
      }
    });

    // Stato dei pulsanti lingua
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const isActive = btn.getAttribute("data-lang") === chosen;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });

    // Salva preferenza
    try { localStorage.setItem(STORAGE_KEY, chosen); } catch (e) {}

    // Notifica altri script (es. main.js) del cambio lingua
    document.dispatchEvent(new CustomEvent("marimeo:langchange", { detail: { lang: chosen } }));
  }

  /* ---------- Collega i pulsanti ---------- */
  function initSwitcher() {
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => applyTranslations(btn.getAttribute("data-lang")));
    });
    applyTranslations(currentLang);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSwitcher);
  } else {
    initSwitcher();
  }

  /* ---------- API pubblica ---------- */
  window.i18n = {
    t: t,
    get lang() { return currentLang; },
    set: applyTranslations,
    supported: SUPPORTED
  };
})();
