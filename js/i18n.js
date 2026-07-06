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
      meta_desc: "Marimeo è un'associazione giovanile: attività, eventi e occasioni per crescere insieme. Scopri chi siamo e come partecipare.",
      nav_about: "Chi siamo",
      nav_activities: "Attività",
      nav_contact: "Contatti",
      nav_join: "Iscriviti",

      hero_eyebrow: "Associazione giovanile",
      hero_title: "Crescere insieme,<br />un'attività alla volta.",
      hero_lead: "Marimeo è il punto di ritrovo dei giovani del territorio: organizziamo attività, eventi e progetti per stare insieme, imparare e lasciare il segno.",
      hero_cta1: "Unisciti a noi",
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

      contact_eyebrow: "Contatti",
      contact_title: "Parla con noi",
      contact_address: "Via Esempio 1, Città",

      signup_title: "Iscriviti a Marimeo",
      signup_intro: "Compila il modulo: ti ricontatteremo per darti il benvenuto!",
      field_name: "Nome e cognome",
      field_email: "Email",
      field_message: "Messaggio (facoltativo)",
      signup_submit: "Invia richiesta",
      form_error: "Controlla nome ed email prima di inviare.",
      form_success: "Grazie {name}! Ti ricontatteremo presto. 🎉",

      footer_copy: "Associazione Giovanile Marimeo. Tutti i diritti riservati.",
      back_top: "Torna su ↑"
    },

    /* ---------------- ENGLISH ---------------- */
    en: {
      meta_desc: "Marimeo is a youth association: activities, events and chances to grow together. Discover who we are and how to take part.",
      nav_about: "About us",
      nav_activities: "Activities",
      nav_contact: "Contact",
      nav_join: "Join us",

      hero_eyebrow: "Youth association",
      hero_title: "Growing together,<br />one activity at a time.",
      hero_lead: "Marimeo is the meeting point for young people in our area: we organise activities, events and projects to spend time together, learn and make a difference.",
      hero_cta1: "Join us",
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

      contact_eyebrow: "Contact",
      contact_title: "Get in touch",
      contact_address: "1 Example Street, City",

      signup_title: "Join Marimeo",
      signup_intro: "Fill in the form: we'll get back to you to welcome you!",
      field_name: "Full name",
      field_email: "Email",
      field_message: "Message (optional)",
      signup_submit: "Send request",
      form_error: "Please check your name and email before sending.",
      form_success: "Thank you {name}! We'll be in touch soon. 🎉",

      footer_copy: "Marimeo Youth Association. All rights reserved.",
      back_top: "Back to top ↑"
    },

    /* ---------------- FRANÇAIS ---------------- */
    fr: {
      meta_desc: "Marimeo est une association de jeunesse : activités, événements et occasions de grandir ensemble. Découvrez qui nous sommes et comment participer.",
      nav_about: "À propos",
      nav_activities: "Activités",
      nav_contact: "Contact",
      nav_join: "Nous rejoindre",

      hero_eyebrow: "Association de jeunesse",
      hero_title: "Grandir ensemble,<br />une activité à la fois.",
      hero_lead: "Marimeo est le point de rencontre des jeunes du territoire : nous organisons des activités, des événements et des projets pour être ensemble, apprendre et laisser une trace.",
      hero_cta1: "Nous rejoindre",
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

      contact_eyebrow: "Contact",
      contact_title: "Parlez avec nous",
      contact_address: "1 rue de l'Exemple, Ville",

      signup_title: "Rejoindre Marimeo",
      signup_intro: "Remplissez le formulaire : nous vous recontacterons pour vous accueillir !",
      field_name: "Nom et prénom",
      field_email: "E-mail",
      field_message: "Message (facultatif)",
      signup_submit: "Envoyer la demande",
      form_error: "Vérifiez votre nom et votre e-mail avant d'envoyer.",
      form_success: "Merci {name} ! Nous vous recontacterons bientôt. 🎉",

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
