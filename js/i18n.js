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
      meta_desc: "Marimeo è un'associazione giovanile che aiuta il territorio a consumare meno plastica grazie alla casetta dell'acqua di Scauri. Associati da 10 €.",

      nav_about: "Chi siamo",
      nav_impact: "Impatto",
      nav_water: "Casetta",
      nav_join_us: "Associarsi",
      nav_faq: "FAQ",
      nav_join: "Diventa socio",
      nav_join_short: "Socio",

      hero_eyebrow: "Associazione giovanile · Ambiente",
      hero_title: "Bevi meglio.<br />Risparmia plastica.<br />Riduci CO₂.",
      hero_lead: "Marimeo è un'associazione giovanile che aiuta il territorio a consumare meno plastica grazie alla casetta dell'acqua.",
      hero_cta1: "Diventa socio",
      hero_cta2: "Scopri il progetto",
      hero_badge1: "Acqua da 5 cent/L",
      hero_badge2: "Aperta 24/7",
      hero_badge3: "Meno plastica, meno CO₂",

      about_eyebrow: "Chi siamo",
      about_title: "Un'associazione di giovani per un territorio con meno plastica",
      about_p1: "Marimeo è un'associazione giovanile senza scopo di lucro. Crediamo che i piccoli gesti di ogni giorno, messi insieme, possano ridurre davvero l'inquinamento del nostro territorio.",
      about_p2: "Per questo gestiamo la casetta dell'acqua di Scauri: un modo semplice per bere acqua buona, spendere meno e tagliare migliaia di bottiglie di plastica ogni anno. Meno plastica monouso, meno camion che trasportano acqua, meno CO₂.",
      about_p3: "Non serve essere ambientalisti esperti: basta riempire la propria borraccia. Il resto lo facciamo insieme.",

      impact_eyebrow: "Il nostro impatto",
      impact_title: "Numeri che fanno la differenza",
      impact_intro: "Ogni borraccia riempita alla casetta è plastica in meno e CO₂ risparmiata. Ecco cosa abbiamo ottenuto insieme nel 2025.",
      impact_water_label: "litri d'acqua erogati",
      impact_bottles_label: "bottiglie di plastica evitate",
      impact_co2_label: "di CO₂ risparmiata",
      impact_note: "Dati stimati relativi al 2025.",

      water_eyebrow: "Il nostro progetto",
      water_title: "La casetta dell'acqua di Scauri",
      water_desc: "Acqua buona, controllata e a chilometro zero, aperta a tutti. Naturale o frizzante, a temperatura ambiente o fredda: porti la tua borraccia e la riempi.",
      water_where_label: "Dove si trova",
      water_where_value: "Scauri — Minturno (LT) ·\nAperta h24, 7 giorni su 7",
      water_directions: "Come arrivarci",
      water_analysis_link: "Analisi dell'acqua aggiornate (PDF) ↗",

      price_title: "Quanto costa l'acqua",
      price_type_head: "Tipo",
      price_non_head: "Non associati",
      price_mem_head: "Associati",
      price_row1: "Naturale (ambiente o fredda)",
      price_row2: "Frizzante fredda",
      price_note: "Con la tessera da socio l'acqua ti costa meno ogni giorno.",

      why_eyebrow: "Perché associarsi",
      why_title: "Diventa socio Marimeo",
      join_card_title: "Diventa socio",
      join_card_intro: "La quota associativa annuale è di 10 €. Ricevi la tessera che ti permette di:",
      join_card_b1: "Non perdere il tuo resto",
      join_card_b2: "Prezzo di erogazione vantaggioso (fino al -37%)",
      join_card_b3: "Ricaricare facilmente alla casetta",
      drink_card_title: "BIVI",
      drink_card_b1: "Ogni litro erogato evita circa 50 g di CO₂ rispetto alle bottiglie di plastica.",
      drink_card_b2: "Acqua controllata due volte: alla fonte e al punto di erogazione.",
      drink_card_b3: "Il filtro rimuove impurità, riduce il cloro e limita i batteri, efficace anche in caso di torbidità.",
      drink_card_b4: "Disponibile anche acqua frizzante fredda!",
      save_card_title: "Risparmia",
      save_card_intro: "Con lo sconto riservato agli associati, una famiglia di 3-4 persone può risparmiare:",
      save_card_b1: "fino a 80 € l'anno rispetto ai prezzi standard",
      save_card_b2: "fino a 1.000 € rispetto all'acqua in bottiglia di plastica!",
      how_eyebrow: "Come funziona",
      how_title: "Associarsi è semplice",
      step1_title: "Versa la quota",
      step1_text: "La quota associativa 2026 è di 10 € l'anno.",
      step2_title: "Ricevi la tessera",
      step2_text: "Ottieni la tessera ricaricabile, da ricaricare direttamente alla casetta.",
      step3_title: "Usa la casetta",
      step3_text: "Riempi la borraccia quando vuoi e risparmia acqua e plastica ogni giorno.",
      enroll_title: "Come associarsi",
      enroll_online_title: "Online",
      enroll_online_text: "Compila il modulo di iscrizione: sarai ricontattato per la consegna della tessera socio e l'erogazione dell'acqua.",
      enroll_online_btn: "Compila il modulo",
      enroll_office_title: "Di persona",
      enroll_office_text: "Oppure presso lo studio del nostro presidente, Ing. Salvatore Pirolozzi, in Via Castagna 38 — Scauri, previo appuntamento via email o sui canali social.",
      enroll_office_btn: "Prendi appuntamento via email",

      future_eyebrow: "Progetti futuri",
      future_title: "Un'associazione viva e in crescita",
      future_text: "La casetta dell'acqua è solo l'inizio. Vogliamo far crescere nuove iniziative per l'ambiente, i giovani e la comunità: educazione ambientale, qualità dell'aria, spazi di incontro e molto altro.",
      future_tag1: "Ambiente",
      future_tag2: "Giovani",
      future_tag3: "Territorio",
      future_tag4: "Qualità dell'aria",
      future_tag5: "Educazione ambientale",
      future_tag6: "Comunità",

      faq_eyebrow: "Domande frequenti",
      faq_title: "Le risposte alle domande più comuni",
      faq_q1: "Quanto costa associarsi?",
      faq_a1: "Per il 2026 la quota associativa è di 10 € l'anno. Include la tessera ricaricabile che ti dà l'acqua a prezzo scontato.",
      faq_q2: "Dove si trova la casetta dell'acqua?",
      faq_a2: "A Scauri, nel comune di Minturno (LT). È aperta a tutti 24 ore su 24, 7 giorni su 7. Trovi la posizione esatta nella mappa qui sopra.",
      faq_q3: "Posso usare la casetta anche se non sono associato?",
      faq_a3: "Sì, la casetta è aperta a tutti. Gli associati, però, pagano meno: 5 cent/L invece di 8 per l'acqua naturale e 7 invece di 10 per la frizzante.",
      faq_q4: "Come posso ricaricare la tessera?",
      faq_a4: "La tessera si ricarica direttamente alla casetta dell'acqua, in modo semplice e veloce.",
      faq_q5: "Come posso aiutare Marimeo?",
      faq_a5: "Associandoti, usando la casetta con la tua borraccia, partecipando alle iniziative e seguendoci sui social. Ogni gesto conta!",

      final_cta_title: "Entra anche tu in Marimeo",
      final_cta_text: "Associati per il 2026 con soli 10 €: acqua scontata e un territorio con meno plastica.",
      final_cta_btn: "Compila il modulo di iscrizione",
      final_cta_note: "Campagna associativa 2026",

      funding_eyebrow: "Con il sostegno di",
      funding_support: "con il sostegno di",
      funding_within: "nell'ambito di",
      funding_title: "Progetto finanziato dalla Regione Lazio",
      funding_text: "Progetto realizzato con il contributo della Regione Lazio, avviso pubblico «Vitamina G» 2022.",

      footer_tagline: "Associazione giovanile per un territorio con meno plastica.",
      footer_contact_title: "Contatti",
      footer_social_title: "Social",
      footer_links_title: "Documenti",
      footer_statute: "Statuto (PDF)",
      footer_analysis: "Analisi dell'acqua (PDF)",
      footer_copy: "Associazione Giovanile Marimeo",
      back_top: "Torna su ↑"
    },

    /* ---------------- ENGLISH ---------------- */
    en: {
      meta_desc: "Marimeo is a youth association helping the local community use less plastic thanks to the Scauri water house. Join from €10.",

      nav_about: "About",
      nav_impact: "Impact",
      nav_water: "Water house",
      nav_join_us: "Membership",
      nav_faq: "FAQ",
      nav_join: "Become a member",
      nav_join_short: "Join",

      hero_eyebrow: "Youth association · Environment",
      hero_title: "Drink better.<br />Save plastic.<br />Cut CO₂.",
      hero_lead: "Marimeo is a youth association helping the local community use less plastic thanks to the water house.",
      hero_cta1: "Become a member",
      hero_cta2: "Discover the project",
      hero_badge1: "Water from €0.05/L",
      hero_badge2: "Open 24/7",
      hero_badge3: "Less plastic, less CO₂",

      about_eyebrow: "About us",
      about_title: "A group of young people for a community with less plastic",
      about_p1: "Marimeo is a non-profit youth association. We believe that the small daily actions of many people, put together, can really reduce pollution in our area.",
      about_p2: "That's why we run the Scauri water house: a simple way to drink good water, spend less and cut thousands of plastic bottles every year. Less single-use plastic, fewer trucks carrying water, less CO₂.",
      about_p3: "You don't need to be an environmental expert: just refill your bottle. We'll do the rest together.",

      impact_eyebrow: "Our impact",
      impact_title: "Numbers that make a difference",
      impact_intro: "Every bottle refilled at the water house is less plastic and saved CO₂. Here's what we achieved together in 2025.",
      impact_water_label: "litres of water dispensed",
      impact_bottles_label: "plastic bottles avoided",
      impact_co2_label: "of CO₂ saved",
      impact_note: "Estimated figures for 2025.",

      water_eyebrow: "Our project",
      water_title: "The Scauri water house",
      water_desc: "Good, tested, zero-kilometre water, open to everyone. Still or sparkling, room temperature or chilled: bring your bottle and fill it up.",
      water_where_label: "Where it is",
      water_where_value: "Scauri — Minturno (LT), Italy ·\nOpen 24 hours a day, 7 days a week",
      water_directions: "Get directions",
      water_analysis_link: "Latest water analysis (PDF) ↗",

      price_title: "How much the water costs",
      price_type_head: "Type",
      price_non_head: "Non-members",
      price_mem_head: "Members",
      price_row1: "Still (room temp. or chilled)",
      price_row2: "Sparkling, chilled",
      price_note: "With the membership card, water costs you less every day.",

      why_eyebrow: "Why join",
      why_title: "Become a Marimeo member",
      join_card_title: "Become a member",
      join_card_intro: "The annual membership fee is €10. You receive the card that lets you:",
      join_card_b1: "Never lose your change",
      join_card_b2: "Get a discounted price per litre (up to -37%)",
      join_card_b3: "Top up easily at the water house",
      drink_card_title: "BIVI",
      drink_card_b1: "Every litre dispensed avoids about 50 g of CO₂ compared with plastic bottles.",
      drink_card_b2: "Water checked twice: at the source and at the dispensing point.",
      drink_card_b3: "The filter removes impurities, reduces chlorine and limits bacteria, staying effective even when the water is cloudy.",
      drink_card_b4: "Chilled sparkling water is available too!",
      save_card_title: "Save",
      save_card_intro: "With the members' discount, a family of 3-4 people can save:",
      save_card_b1: "up to €80 a year compared with standard prices",
      save_card_b2: "up to €1,000 compared with bottled plastic water!",
      how_eyebrow: "How it works",
      how_title: "Joining is simple",
      step1_title: "Pay the fee",
      step1_text: "The 2026 membership fee is €10 per year.",
      step2_title: "Get your card",
      step2_text: "Receive the rechargeable card, to top up directly at the water house.",
      step3_title: "Use the water house",
      step3_text: "Refill your bottle whenever you like and save water and plastic every day.",
      enroll_title: "How to sign up",
      enroll_online_title: "Online",
      enroll_online_text: "Fill in the membership form: we'll contact you to hand over your member card and set up water dispensing.",
      enroll_online_btn: "Fill in the form",
      enroll_office_title: "In person",
      enroll_office_text: "Or at the office of our president, Ing. Salvatore Pirolozzi, at Via Castagna 38 — Scauri, by appointment via email or on social media.",
      enroll_office_btn: "Book an appointment via email",

      future_eyebrow: "Future projects",
      future_title: "A living, growing association",
      future_text: "The water house is only the beginning. We want to grow new initiatives for the environment, young people and the community: environmental education, air quality, meeting spaces and much more.",
      future_tag1: "Environment",
      future_tag2: "Youth",
      future_tag3: "Local area",
      future_tag4: "Air quality",
      future_tag5: "Environmental education",
      future_tag6: "Community",

      faq_eyebrow: "Frequently asked questions",
      faq_title: "Answers to the most common questions",
      faq_q1: "How much does membership cost?",
      faq_a1: "For 2026 the membership fee is €10 per year. It includes the rechargeable card that gives you water at a discounted price.",
      faq_q2: "Where is the water house?",
      faq_a2: "In Scauri, in the municipality of Minturno (LT), Italy. It's open to everyone 24 hours a day, 7 days a week. You'll find the exact location on the map above.",
      faq_q3: "Can I use the water house even if I'm not a member?",
      faq_a3: "Yes, the water house is open to everyone. Members, however, pay less: €0.05/L instead of €0.08 for still water and €0.07 instead of €0.10 for sparkling.",
      faq_q4: "How can I recharge the card?",
      faq_a4: "The card is topped up directly at the water house, quickly and easily.",
      faq_q5: "How can I help Marimeo?",
      faq_a5: "By joining, using the water house with your own bottle, taking part in our initiatives and following us on social media. Every action counts!",

      final_cta_title: "Join Marimeo too",
      final_cta_text: "Become a member for 2026 for just €10: discounted water and a community with less plastic.",
      final_cta_btn: "Fill in the membership form",
      final_cta_note: "2026 membership campaign",

      funding_eyebrow: "With the support of",
      funding_support: "with the support of",
      funding_within: "as part of",
      funding_title: "Project funded by the Lazio Region",
      funding_text: "Project carried out with the contribution of the Lazio Region, public call «Vitamina G» 2022.",

      footer_tagline: "Youth association for a community with less plastic.",
      footer_contact_title: "Contact",
      footer_social_title: "Social",
      footer_links_title: "Documents",
      footer_statute: "Statute (PDF)",
      footer_analysis: "Water analysis (PDF)",
      footer_copy: "Marimeo Youth Association",
      back_top: "Back to top ↑"
    },

    /* ---------------- FRANÇAIS ---------------- */
    fr: {
      meta_desc: "Marimeo est une association de jeunesse qui aide le territoire à consommer moins de plastique grâce à la maison de l'eau de Scauri. Adhésion dès 10 €.",

      nav_about: "À propos",
      nav_impact: "Impact",
      nav_water: "Maison de l'eau",
      nav_join_us: "Adhésion",
      nav_faq: "FAQ",
      nav_join: "Devenir membre",
      nav_join_short: "Adhérer",

      hero_eyebrow: "Association de jeunesse · Environnement",
      hero_title: "Buvez mieux.<br />Économisez le plastique.<br />Réduisez le CO₂.",
      hero_lead: "Marimeo est une association de jeunesse qui aide le territoire à consommer moins de plastique grâce à la maison de l'eau.",
      hero_cta1: "Devenir membre",
      hero_cta2: "Découvrir le projet",
      hero_badge1: "Eau dès 0,05 €/L",
      hero_badge2: "Ouverte 24h/24",
      hero_badge3: "Moins de plastique, moins de CO₂",

      about_eyebrow: "À propos",
      about_title: "Une association de jeunes pour un territoire avec moins de plastique",
      about_p1: "Marimeo est une association de jeunesse à but non lucratif. Nous croyons que les petits gestes quotidiens, additionnés, peuvent vraiment réduire la pollution de notre territoire.",
      about_p2: "C'est pourquoi nous gérons la maison de l'eau de Scauri : une façon simple de boire une bonne eau, de dépenser moins et d'éviter des milliers de bouteilles en plastique chaque année. Moins de plastique jetable, moins de camions transportant de l'eau, moins de CO₂.",
      about_p3: "Pas besoin d'être un expert de l'environnement : il suffit de remplir sa gourde. Le reste, on le fait ensemble.",

      impact_eyebrow: "Notre impact",
      impact_title: "Des chiffres qui font la différence",
      impact_intro: "Chaque gourde remplie à la maison de l'eau, c'est moins de plastique et du CO₂ économisé. Voici ce que nous avons accompli ensemble en 2025.",
      impact_water_label: "litres d'eau distribués",
      impact_bottles_label: "bouteilles en plastique évitées",
      impact_co2_label: "de CO₂ économisé",
      impact_note: "Chiffres estimés pour 2025.",

      water_eyebrow: "Notre projet",
      water_title: "La maison de l'eau de Scauri",
      water_desc: "Une eau bonne, contrôlée et de proximité, ouverte à tous. Plate ou pétillante, à température ambiante ou fraîche : apportez votre gourde et remplissez-la.",
      water_where_label: "Où se trouve-t-elle",
      water_where_value: "Scauri — Minturno (LT), Italie ·\nOuverte 24h/24, 7j/7",
      water_directions: "Itinéraire",
      water_analysis_link: "Analyses de l'eau à jour (PDF) ↗",

      price_title: "Combien coûte l'eau",
      price_type_head: "Type",
      price_non_head: "Non-membres",
      price_mem_head: "Membres",
      price_row1: "Plate (ambiante ou fraîche)",
      price_row2: "Pétillante, fraîche",
      price_note: "Avec la carte de membre, l'eau vous coûte moins cher chaque jour.",

      why_eyebrow: "Pourquoi adhérer",
      why_title: "Devenez membre de Marimeo",
      join_card_title: "Devenir membre",
      join_card_intro: "La cotisation annuelle est de 10 €. Vous recevez la carte qui vous permet de :",
      join_card_b1: "Ne jamais perdre votre monnaie",
      join_card_b2: "Bénéficier d'un prix de distribution avantageux (jusqu'à -37 %)",
      join_card_b3: "Recharger facilement à la maison de l'eau",
      drink_card_title: "BIVI",
      drink_card_b1: "Chaque litre distribué évite environ 50 g de CO₂ par rapport aux bouteilles en plastique.",
      drink_card_b2: "Eau contrôlée deux fois : à la source et au point de distribution.",
      drink_card_b3: "Le filtre élimine les impuretés, réduit le chlore et limite les bactéries, restant efficace même en cas de turbidité.",
      drink_card_b4: "De l'eau pétillante fraîche est aussi disponible !",
      save_card_title: "Économisez",
      save_card_intro: "Avec la réduction réservée aux membres, une famille de 3 à 4 personnes peut économiser :",
      save_card_b1: "jusqu'à 80 € par an par rapport aux prix standard",
      save_card_b2: "jusqu'à 1 000 € par rapport à l'eau en bouteille plastique !",
      how_eyebrow: "Comment ça marche",
      how_title: "Adhérer, c'est simple",
      step1_title: "Réglez la cotisation",
      step1_text: "La cotisation 2026 est de 10 € par an.",
      step2_title: "Recevez la carte",
      step2_text: "Obtenez la carte rechargeable, à recharger directement à la maison de l'eau.",
      step3_title: "Utilisez la maison de l'eau",
      step3_text: "Remplissez votre gourde quand vous voulez et économisez eau et plastique chaque jour.",
      enroll_title: "Comment adhérer",
      enroll_online_title: "En ligne",
      enroll_online_text: "Remplissez le formulaire d'adhésion : nous vous recontacterons pour la remise de votre carte de membre et la distribution de l'eau.",
      enroll_online_btn: "Remplir le formulaire",
      enroll_office_title: "En personne",
      enroll_office_text: "Ou au cabinet de notre président, Ing. Salvatore Pirolozzi, Via Castagna 38 — Scauri, sur rendez-vous par e-mail ou sur les réseaux sociaux.",
      enroll_office_btn: "Prendre rendez-vous par e-mail",

      future_eyebrow: "Projets futurs",
      future_title: "Une association vivante et en croissance",
      future_text: "La maison de l'eau n'est qu'un début. Nous voulons développer de nouvelles initiatives pour l'environnement, les jeunes et la communauté : éducation à l'environnement, qualité de l'air, espaces de rencontre et bien plus encore.",
      future_tag1: "Environnement",
      future_tag2: "Jeunes",
      future_tag3: "Territoire",
      future_tag4: "Qualité de l'air",
      future_tag5: "Éducation à l'environnement",
      future_tag6: "Communauté",

      faq_eyebrow: "Questions fréquentes",
      faq_title: "Les réponses aux questions les plus courantes",
      faq_q1: "Combien coûte l'adhésion ?",
      faq_a1: "Pour 2026, la cotisation est de 10 € par an. Elle comprend la carte rechargeable qui vous donne l'eau à prix réduit.",
      faq_q2: "Où se trouve la maison de l'eau ?",
      faq_a2: "À Scauri, dans la commune de Minturno (LT), en Italie. Elle est ouverte à tous 24h/24, 7j/7. Vous trouverez l'emplacement exact sur la carte ci-dessus.",
      faq_q3: "Puis-je utiliser la maison de l'eau même sans être membre ?",
      faq_a3: "Oui, la maison de l'eau est ouverte à tous. Les membres paient cependant moins : 0,05 €/L au lieu de 0,08 pour l'eau plate et 0,07 au lieu de 0,10 pour la pétillante.",
      faq_q4: "Comment recharger la carte ?",
      faq_a4: "La carte se recharge directement à la maison de l'eau, simplement et rapidement.",
      faq_q5: "Comment puis-je aider Marimeo ?",
      faq_a5: "En adhérant, en utilisant la maison de l'eau avec votre gourde, en participant aux initiatives et en nous suivant sur les réseaux sociaux. Chaque geste compte !",

      final_cta_title: "Rejoignez Marimeo, vous aussi",
      final_cta_text: "Adhérez pour 2026 pour seulement 10 € : eau à prix réduit et un territoire avec moins de plastique.",
      final_cta_btn: "Remplir le formulaire d'adhésion",
      final_cta_note: "Campagne d'adhésion 2026",

      funding_eyebrow: "Avec le soutien de",
      funding_support: "avec le soutien de",
      funding_within: "dans le cadre de",
      funding_title: "Projet financé par la Région du Latium",
      funding_text: "Projet réalisé avec le soutien de la Région du Latium, appel public «Vitamina G» 2022.",

      footer_tagline: "Association de jeunesse pour un territoire avec moins de plastique.",
      footer_contact_title: "Contact",
      footer_social_title: "Réseaux",
      footer_links_title: "Documents",
      footer_statute: "Statuts (PDF)",
      footer_analysis: "Analyses de l'eau (PDF)",
      footer_copy: "Association de Jeunesse Marimeo",
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
    let saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    return normalize(saved) || normalize(navigator.language) || DEFAULT_LANG;
  }

  let currentLang = detectInitialLang();

  function t(key) {
    const dict = translations[currentLang] || translations[DEFAULT_LANG];
    return (key in dict) ? dict[key] : (translations[DEFAULT_LANG][key] || "");
  }

  function applyTranslations(lang) {
    const chosen = normalize(lang) || DEFAULT_LANG;
    currentLang = chosen;
    document.documentElement.lang = chosen;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = t(key);
      if (value === "") return;
      if (el.hasAttribute("data-i18n-html")) {
        el.innerHTML = value;
      } else if (el.tagName === "META") {
        el.setAttribute("content", value);
      } else {
        el.textContent = value;
      }
    });

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const isActive = btn.getAttribute("data-lang") === chosen;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });

    // Etichetta del pulsante dropdown (codice lingua)
    const current = document.querySelector(".lang-current");
    if (current) current.textContent = chosen.toUpperCase();

    try { localStorage.setItem(STORAGE_KEY, chosen); } catch (e) {}

    document.dispatchEvent(new CustomEvent("marimeo:langchange", { detail: { lang: chosen } }));
  }

  function initSwitcher() {
    const trigger = document.querySelector(".lang-trigger");
    const menu = document.querySelector(".lang-menu");

    const closeMenu = () => {
      if (!menu) return;
      menu.classList.remove("open");
      if (trigger) trigger.setAttribute("aria-expanded", "false");
    };

    if (trigger && menu) {
      trigger.addEventListener("click", (e) => {
        e.stopPropagation();
        const open = menu.classList.toggle("open");
        trigger.setAttribute("aria-expanded", String(open));
      });
      // Chiudi cliccando fuori o con Esc
      document.addEventListener("click", (e) => {
        if (!e.target.closest(".lang-switch")) closeMenu();
      });
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeMenu();
      });
    }

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        applyTranslations(btn.getAttribute("data-lang"));
        closeMenu();
      });
    });

    applyTranslations(currentLang);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSwitcher);
  } else {
    initSwitcher();
  }

  window.i18n = {
    t: t,
    get lang() { return currentLang; },
    set: applyTranslations,
    supported: SUPPORTED
  };
})();
