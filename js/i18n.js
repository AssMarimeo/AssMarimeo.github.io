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
      page_title: "Marimeo — Associazione giovanile · Casetta dell'acqua a Scauri",
      meta_desc: "Marimeo, associazione giovanile ambientale: gestiamo la casetta dell'acqua a Scauri di Minturno (LT). Acqua da 5 cent/L, meno plastica, risparmio di CO2.",

      nav_about: "Chi siamo",
      nav_impact: "Impatto",
      nav_water: "Casetta",
      nav_join_us: "Associarsi",
      nav_faq: "FAQ",
      nav_join: "Diventa socio",
      nav_join_short: "Socio",
      donate_cta: "Dona ora",
      skip_link: "Salta al contenuto",
      new_window: "(si apre in una nuova scheda)",

      hero_eyebrow: "Associazione Giovanile Marimeo",
      hero_title: "Combattiamo il consumo di plastica e le emissioni di CO₂, un litro d'acqua alla volta.",
      hero_lead: "Marimeo è un'associazione giovanile ambientale che aiuta il territorio a consumare meno plastica grazie alla casetta dell'acqua di Scauri, a Minturno (LT).",
      hero_cta1: "Diventa socio",
      hero_cta2: "Scopri i progetti",
      hero_badge1: "Acqua da 5 cent/L",
      hero_badge2: "Aperta 24/7",
      hero_badge3: "Meno plastica, meno CO₂",

      /* Il separatore fa parte della stringa: e' un <i> perche' i18n scrive
         innerHTML, e va ripetuto anche in coda per chiudere il ciclo. */
      marquee_text: "MENO PLASTICA <i class=\"marquee-sep\">✦</i> MENO CO₂ <i class=\"marquee-sep\">✦</i> UN LITRO ALLA VOLTA <i class=\"marquee-sep\">✦</i> CASETTA DELL'ACQUA <i class=\"marquee-sep\">✦</i> DIVENTA SOCIO <i class=\"marquee-sep\">✦</i>",

      about_eyebrow: "Chi siamo",
      about_title: "Un'associazione di giovani per un territorio con meno plastica",
      about_p1: "Marimeo è un'associazione giovanile senza scopo di lucro. Crediamo che i piccoli gesti di ogni giorno, messi insieme, possano ridurre davvero l'inquinamento del nostro territorio.",
      about_p2: "Per questo gestiamo la casetta dell'acqua di Scauri: un modo semplice per bere acqua buona, spendere meno e tagliare migliaia di bottiglie di plastica ogni anno. Meno plastica monouso, meno camion che trasportano acqua, meno CO₂.",
      about_p3: "Non serve essere ambientalisti esperti: basta riempire la propria borraccia. Il resto lo facciamo insieme.",
      about_more: "Scopri di più su di noi",
      close: "Chiudi",
      footer_about_title: "Associazione",
      about_page_title: "Chi siamo — Marimeo",
      about_meta_desc: "La missione, la visione, i valori e il comitato direttivo dell'Associazione Giovanile Marimeo, che gestisce la casetta dell'acqua di Scauri (Minturno, LT).",

      mission_title: "La nostra missione",
      mission_text: "Ridurre la plastica monouso sul nostro territorio partendo dai gesti di ogni giorno. Gestiamo la casetta dell'acqua di Scauri e promuoviamo iniziative che rendono facile, conveniente e normale scegliere alternative sostenibili.",
      vision_title: "La nostra visione",
      vision_text: "Un territorio dove bere acqua buona senza produrre rifiuti sia la scelta più semplice per tutti — e una comunità di giovani che se ne prende cura, un litro alla volta.",
      values_title: "I nostri valori",
      value1_title: "Ambiente prima di tutto",
      value1_text: "Ogni scelta parte dall'impatto sul territorio: meno plastica, meno CO₂, più attenzione a ciò che ci circonda.",
      value2_title: "Comunità",
      value2_text: "Cresciamo insieme alle persone: soci, volontari e cittadini che condividono lo stesso obiettivo.",
      value3_title: "Concretezza",
      value3_text: "Niente proclami: gesti semplici e misurabili, come riempire una borraccia invece di comprare una bottiglia.",
      value4_title: "Trasparenza",
      value4_text: "Conti chiari e obiettivi verificabili: raccontiamo quello che facciamo e i risultati che otteniamo.",
      committee_title: "Il comitato direttivo",
      committee_intro: "L'associazione è guidata da un comitato direttivo di volontari. Tre di loro sono anche tra i soci fondatori di Marimeo.",
      founder_badge: "Socio fondatore",
      founder_badge_f: "Socia fondatrice",
      role_president: "Presidente",
      role_vicepresident: "Vicepresidente",
      role_boardmember_f: "Consigliera",

      impact_eyebrow: "Il nostro impatto",
      impact_title: "Numeri che fanno la differenza",
      impact_intro: "Ogni borraccia riempita alla casetta è plastica in meno e CO₂ risparmiata. Ecco la plastica evitata e il risparmio di CO2 ottenuti insieme nel 2025 a Scauri di Minturno.",
      impact_water_label: "litri d'acqua erogati",
      impact_bottles_label: "bottiglie di plastica evitate",
      impact_co2_label: "di CO₂ risparmiata",
      impact_note: "Dati stimati relativi al 2025.",

      water_eyebrow: "Cosa facciamo",
      projects_title: "I nostri progetti",
      projects_intro: "Oggi gestiamo la casetta dell'acqua di Scauri. Domani, molto altro.",
      project_status_active: "Attivo",
      project_status_soon: "In arrivo",
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
      why_title: "Molto più di uno sconto sull'acqua",
      why_intro: "Associarti alla casetta vuol dire bere meglio spendendo meno — ma soprattutto entrare in una comunità che ogni giorno sceglie meno plastica e più attenzione all'ambiente.",
      community_card_title: "Una comunità più green",
      community_card_b1: "Meno bottiglie di plastica sul territorio",
      community_card_b2: "Ogni litro erogato evita circa 50 g di CO₂",
      community_card_b3: "Fai parte di un progetto locale e partecipativo",
      drink_card_title: "Bevi meglio",
      drink_card_b1: "Acqua controllata due volte: alla fonte e all'erogazione",
      drink_card_b2: "Filtrata: meno cloro, impurità e batteri, anche in caso di torbidità",
      drink_card_b3: "Naturale o frizzante fredda, quando vuoi",
      save_card_title: "Risparmi davvero",
      save_card_intro: "Con il prezzo riservato ai soci (fino al −37%), una famiglia di 3-4 persone risparmia:",
      save_card_b1: "fino a 80 € l'anno rispetto ai prezzi standard",
      save_card_b2: "fino a 1.000 € rispetto all'acqua in bottiglia di plastica!",
      how_eyebrow: "Come associarsi",
      how_title: "Diventa socio in pochi passi e usufruisci dei benefici",
      how_intro: "La quota associativa 2026 è di 10 € l'anno. Puoi associarti comodamente da casa o di persona: in entrambi i casi la tessera si ritira su appuntamento.",
      enroll_title: "Scegli come associarti",
      enroll_online_title: "Online, da casa",
      enroll_online_text: "Compila il modulo di iscrizione e paga la quota comodamente con PayPal o bonifico bancario, senza spostarti da casa.",
      enroll_online_btn: "Compila il modulo",
      enroll_office_title: "Di persona, su appuntamento",
      enroll_office_text: "Ci vediamo allo studio del presidente, Ing. Salvatore Pirolozzi (Via Castagna 38 — Scauri), e sistemiamo tutto insieme: iscrizione, quota e tessera.",
      enroll_office_btn: "Prendi appuntamento via email",
      step2_title: "Ritira la tessera",
      step2_text: "Anche se ti iscrivi online, la tessera si ritira di persona su appuntamento, presso lo studio del Presidente.",
      step3_title: "Ricarica e usa la casetta",
      step3_text: "Ricarichi la tessera direttamente alla casetta e riempi la borraccia quando vuoi, 24/7. Il resto resta sempre sulla tessera.",
      how_note: "La tessera funziona solo da socio: la quota associativa vale per l'anno solare in corso e scade il 31 dicembre. Per continuare a usarla basta riassociarsi.",

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
      faq_a1: "Per il 2026 la quota associativa è di 10 € l'anno. Include la tessera ricaricabile che ti dà l'acqua a prezzo scontato. La quota vale per l'anno solare in corso e scade il 31 dicembre.",
      faq_q6: "La tessera scade? Come si rinnova?",
      faq_a6: "La tessera funziona solo da socio e la quota vale per l'anno solare in corso: scade il 31 dicembre. Per continuare a usarla ti basta riassociarti l'anno successivo, rinnovando la quota da 10 €.",
      faq_q2: "Dove si trova la casetta dell'acqua?",
      faq_a2: "A Scauri, nel comune di Minturno (LT). È aperta a tutti 24 ore su 24, 7 giorni su 7. Trovi la posizione esatta nella mappa qui sopra.",
      faq_q3: "Posso usare la casetta anche se non sono associato?",
      faq_a3: "Sì, la casetta è aperta a tutti. Gli associati, però, pagano meno: 5 cent/L invece di 8 per l'acqua naturale e 7 invece di 10 per la frizzante.",
      faq_q4: "Come posso ricaricare la tessera?",
      faq_a4: "La tessera si ricarica direttamente alla casetta dell'acqua, in modo semplice e veloce.",
      faq_q5: "Come posso aiutare Marimeo?",
      faq_a5: "Associandoti, usando la casetta con la tua borraccia, partecipando alle iniziative e seguendoci sui social. Ogni gesto conta!",

      final_cta_title: "Aiutaci a crescere, diventa socio Marimeo",
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
      footer_privacy: "Privacy policy",
      footer_copy: "Associazione Giovanile Marimeo",
      footer_credit: "Sito web realizzato da Filippo Fresilli",
      back_top: "Torna su"
    },

    /* ---------------- ENGLISH ---------------- */
    en: {
      page_title: "Marimeo — Youth association · Water house in Scauri, Italy",
      meta_desc: "Marimeo, a youth environmental association: we run the water house in Scauri, Minturno (LT), Italy. Water from 5 cents/L, less plastic, CO2 savings.",

      nav_about: "About",
      nav_impact: "Impact",
      nav_water: "Water house",
      nav_join_us: "Membership",
      nav_faq: "FAQ",
      nav_join: "Become a member",
      nav_join_short: "Join",
      donate_cta: "Donate now",
      skip_link: "Skip to content",
      new_window: "(opens in a new tab)",

      hero_eyebrow: "Marimeo Youth Association",
      hero_title: "We fight plastic use and CO₂ emissions, one litre of water at a time.",
      hero_lead: "Marimeo is a youth environmental association helping the local community use less plastic thanks to the Scauri water house, in Minturno (LT), Italy.",
      hero_cta1: "Become a member",
      hero_cta2: "Discover the projects",
      hero_badge1: "Water from €0.05/L",
      hero_badge2: "Open 24/7",
      hero_badge3: "Less plastic, less CO₂",

      marquee_text: "LESS PLASTIC <i class=\"marquee-sep\">✦</i> LESS CO₂ <i class=\"marquee-sep\">✦</i> ONE LITRE AT A TIME <i class=\"marquee-sep\">✦</i> WATER HOUSE <i class=\"marquee-sep\">✦</i> BECOME A MEMBER <i class=\"marquee-sep\">✦</i>",

      about_eyebrow: "About us",
      about_title: "A group of young people for a community with less plastic",
      about_p1: "Marimeo is a non-profit youth association. We believe that the small daily actions of many people, put together, can really reduce pollution in our area.",
      about_p2: "That's why we run the Scauri water house: a simple way to drink good water, spend less and cut thousands of plastic bottles every year. Less single-use plastic, fewer trucks carrying water, less CO₂.",
      about_p3: "You don't need to be an environmental expert: just refill your bottle. We'll do the rest together.",
      about_more: "Find out more about us",
      close: "Close",
      footer_about_title: "Association",
      about_page_title: "About us — Marimeo",
      about_meta_desc: "The mission, vision, values and steering committee of the Marimeo youth association, which runs the Scauri water house in Minturno (LT, Italy).",

      mission_title: "Our mission",
      mission_text: "To reduce single-use plastic in our area, starting from everyday actions. We run the Scauri water house and promote initiatives that make choosing sustainable alternatives easy, affordable and normal.",
      vision_title: "Our vision",
      vision_text: "A community where drinking good water without producing waste is the simplest choice for everyone — and a group of young people who take care of it, one litre at a time.",
      values_title: "Our values",
      value1_title: "Environment first",
      value1_text: "Every choice starts from its impact on the area: less plastic, less CO₂, more care for what surrounds us.",
      value2_title: "Community",
      value2_text: "We grow together with people: members, volunteers and citizens who share the same goal.",
      value3_title: "Concreteness",
      value3_text: "No grand statements: simple, measurable actions, like refilling a bottle instead of buying a new one.",
      value4_title: "Transparency",
      value4_text: "Clear accounts and verifiable goals: we share what we do and the results we achieve.",
      committee_title: "The steering committee",
      committee_intro: "The association is led by a steering committee of volunteers. Three of them are also among Marimeo's founding members.",
      founder_badge: "Founding member",
      founder_badge_f: "Founding member",
      role_president: "President",
      role_vicepresident: "Vice-president",
      role_boardmember_f: "Board member",

      impact_eyebrow: "Our impact",
      impact_title: "Numbers that make a difference",
      impact_intro: "Every bottle refilled at the water house is less plastic and saved CO₂. Here's what we achieved together in 2025.",
      impact_water_label: "litres of water dispensed",
      impact_bottles_label: "plastic bottles avoided",
      impact_co2_label: "of CO₂ saved",
      impact_note: "Estimated figures for 2025.",

      water_eyebrow: "What we do",
      projects_title: "Our projects",
      projects_intro: "Today we run the Scauri water house. Tomorrow, much more.",
      project_status_active: "Active",
      project_status_soon: "Coming soon",
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
      why_title: "Much more than cheaper water",
      why_intro: "Joining the water house means drinking better while spending less — but above all becoming part of a community that chooses less plastic and more care for the environment, every day.",
      community_card_title: "A greener community",
      community_card_b1: "Fewer plastic bottles in our area",
      community_card_b2: "Every litre dispensed avoids about 50 g of CO₂",
      community_card_b3: "Be part of a local, participatory project",
      drink_card_title: "Drink better",
      drink_card_b1: "Water checked twice: at the source and at the dispensing point",
      drink_card_b2: "Filtered: less chlorine, impurities and bacteria, even when the water is cloudy",
      drink_card_b3: "Still or chilled sparkling, whenever you like",
      save_card_title: "Real savings",
      save_card_intro: "With the members' price (up to -37%), a family of 3-4 people saves:",
      save_card_b1: "up to €80 a year compared with standard prices",
      save_card_b2: "up to €1,000 compared with bottled plastic water!",
      how_eyebrow: "How to join",
      how_title: "Become a member in a few steps and enjoy the benefits",
      how_intro: "The 2026 membership fee is €10 per year. You can join from home or in person: in both cases the card is collected by appointment.",
      enroll_title: "Choose how to join",
      enroll_online_title: "Online, from home",
      enroll_online_text: "Fill in the membership form and pay the fee conveniently by PayPal or bank transfer, without leaving home.",
      enroll_online_btn: "Fill in the form",
      enroll_office_title: "In person, by appointment",
      enroll_office_text: "We'll meet at the office of our president, Ing. Salvatore Pirolozzi (Via Castagna 38 — Scauri), and sort everything out together: membership, fee and card.",
      enroll_office_btn: "Book an appointment via email",
      step2_title: "Collect your card",
      step2_text: "Even if you sign up online, the card is collected in person by appointment, at the President's office.",
      step3_title: "Top up and use the water house",
      step3_text: "Top up the card directly at the water house and refill your bottle whenever you like, 24/7. Your change always stays on the card.",
      how_note: "The card only works while you're a member: the membership fee is valid for the current calendar year and expires on 31 December. To keep using it, simply renew your membership.",

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
      faq_a1: "For 2026 the membership fee is €10 per year. It includes the rechargeable card that gives you water at a discounted price. The fee is valid for the current calendar year and expires on 31 December.",
      faq_q6: "Does the card expire? How do I renew it?",
      faq_a6: "The card only works while you're a member and the fee is valid for the current calendar year: it expires on 31 December. To keep using it, simply renew your membership the following year by paying the €10 fee again.",
      faq_q2: "Where is the water house?",
      faq_a2: "In Scauri, in the municipality of Minturno (LT), Italy. It's open to everyone 24 hours a day, 7 days a week. You'll find the exact location on the map above.",
      faq_q3: "Can I use the water house even if I'm not a member?",
      faq_a3: "Yes, the water house is open to everyone. Members, however, pay less: €0.05/L instead of €0.08 for still water and €0.07 instead of €0.10 for sparkling.",
      faq_q4: "How can I recharge the card?",
      faq_a4: "The card is topped up directly at the water house, quickly and easily.",
      faq_q5: "How can I help Marimeo?",
      faq_a5: "By joining, using the water house with your own bottle, taking part in our initiatives and following us on social media. Every action counts!",

      final_cta_title: "Help us grow, become a Marimeo member",
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
      footer_privacy: "Privacy policy",
      footer_copy: "Marimeo Youth Association",
      footer_credit: "Website by Filippo Fresilli",
      back_top: "Back to top"
    },

    /* ---------------- FRANÇAIS ---------------- */
    fr: {
      page_title: "Marimeo — Association de jeunesse · Maison de l'eau à Scauri, Italie",
      meta_desc: "Marimeo, association de jeunesse écologiste : nous gérons la maison de l'eau de Scauri, à Minturno (LT), en Italie. Eau dès 5 cts/L, moins de plastique, moins de CO2.",

      nav_about: "À propos",
      nav_impact: "Impact",
      nav_water: "Maison de l'eau",
      nav_join_us: "Adhésion",
      nav_faq: "FAQ",
      nav_join: "Devenir membre",
      nav_join_short: "Adhérer",
      donate_cta: "Faire un don",
      skip_link: "Aller au contenu",
      new_window: "(s'ouvre dans un nouvel onglet)",

      hero_eyebrow: "Association de Jeunesse Marimeo",
      hero_title: "Nous combattons la consommation de plastique et les émissions de CO₂, un litre d'eau à la fois.",
      hero_lead: "Marimeo est une association de jeunesse écologiste qui aide le territoire à consommer moins de plastique grâce à la maison de l'eau de Scauri, à Minturno (LT), en Italie.",
      hero_cta1: "Devenir membre",
      hero_cta2: "Découvrir les projets",
      hero_badge1: "Eau dès 0,05 €/L",
      hero_badge2: "Ouverte 24h/24",
      hero_badge3: "Moins de plastique, moins de CO₂",

      marquee_text: "MOINS DE PLASTIQUE <i class=\"marquee-sep\">✦</i> MOINS DE CO₂ <i class=\"marquee-sep\">✦</i> UN LITRE À LA FOIS <i class=\"marquee-sep\">✦</i> MAISON DE L'EAU <i class=\"marquee-sep\">✦</i> DEVENIR MEMBRE <i class=\"marquee-sep\">✦</i>",

      about_eyebrow: "À propos",
      about_title: "Une association de jeunes pour un territoire avec moins de plastique",
      about_p1: "Marimeo est une association de jeunesse à but non lucratif. Nous croyons que les petits gestes quotidiens, additionnés, peuvent vraiment réduire la pollution de notre territoire.",
      about_p2: "C'est pourquoi nous gérons la maison de l'eau de Scauri : une façon simple de boire une bonne eau, de dépenser moins et d'éviter des milliers de bouteilles en plastique chaque année. Moins de plastique jetable, moins de camions transportant de l'eau, moins de CO₂.",
      about_p3: "Pas besoin d'être un expert de l'environnement : il suffit de remplir sa gourde. Le reste, on le fait ensemble.",
      about_more: "En savoir plus sur nous",
      close: "Fermer",
      footer_about_title: "Association",
      about_page_title: "À propos — Marimeo",
      about_meta_desc: "La mission, la vision, les valeurs et le comité directeur de l'association de jeunesse Marimeo, qui gère la maison de l'eau de Scauri (Minturno, LT).",

      mission_title: "Notre mission",
      mission_text: "Réduire le plastique à usage unique sur notre territoire, en partant des gestes de tous les jours. Nous gérons la maison de l'eau de Scauri et menons des initiatives qui rendent le choix d'alternatives durables simple, économique et normal.",
      vision_title: "Notre vision",
      vision_text: "Un territoire où boire une bonne eau sans produire de déchets est le choix le plus simple pour tous — et une communauté de jeunes qui en prend soin, un litre à la fois.",
      values_title: "Nos valeurs",
      value1_title: "L'environnement d'abord",
      value1_text: "Chaque choix part de son impact sur le territoire : moins de plastique, moins de CO₂, plus d'attention à ce qui nous entoure.",
      value2_title: "Communauté",
      value2_text: "Nous grandissons avec les gens : membres, bénévoles et citoyens qui partagent le même objectif.",
      value3_title: "Concret",
      value3_text: "Pas de grands discours : des gestes simples et mesurables, comme remplir une gourde au lieu d'acheter une bouteille.",
      value4_title: "Transparence",
      value4_text: "Des comptes clairs et des objectifs vérifiables : nous racontons ce que nous faisons et les résultats obtenus.",
      committee_title: "Le comité directeur",
      committee_intro: "L'association est dirigée par un comité directeur de bénévoles. Trois d'entre eux comptent aussi parmi les membres fondateurs de Marimeo.",
      founder_badge: "Membre fondateur",
      founder_badge_f: "Membre fondatrice",
      role_president: "Président",
      role_vicepresident: "Vice-président",
      role_boardmember_f: "Conseillère",

      impact_eyebrow: "Notre impact",
      impact_title: "Des chiffres qui font la différence",
      impact_intro: "Chaque gourde remplie à la maison de l'eau, c'est moins de plastique et du CO₂ économisé. Voici ce que nous avons accompli ensemble en 2025.",
      impact_water_label: "litres d'eau distribués",
      impact_bottles_label: "bouteilles en plastique évitées",
      impact_co2_label: "de CO₂ économisé",
      impact_note: "Chiffres estimés pour 2025.",

      water_eyebrow: "Ce que nous faisons",
      projects_title: "Nos projets",
      projects_intro: "Aujourd'hui nous gérons la maison de l'eau de Scauri. Demain, bien plus.",
      project_status_active: "Actif",
      project_status_soon: "Bientôt",
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
      why_title: "Bien plus qu'une eau moins chère",
      why_intro: "Adhérer à la maison de l'eau, c'est boire mieux en dépensant moins — mais surtout rejoindre une communauté qui choisit chaque jour moins de plastique et plus d'attention à l'environnement.",
      community_card_title: "Une communauté plus verte",
      community_card_b1: "Moins de bouteilles en plastique sur le territoire",
      community_card_b2: "Chaque litre distribué évite environ 50 g de CO₂",
      community_card_b3: "Faites partie d'un projet local et participatif",
      drink_card_title: "Buvez mieux",
      drink_card_b1: "Eau contrôlée deux fois : à la source et au point de distribution",
      drink_card_b2: "Filtrée : moins de chlore, d'impuretés et de bactéries, même en cas de turbidité",
      drink_card_b3: "Plate ou pétillante fraîche, quand vous voulez",
      save_card_title: "De vraies économies",
      save_card_intro: "Avec le prix réservé aux membres (jusqu'à -37 %), une famille de 3 à 4 personnes économise :",
      save_card_b1: "jusqu'à 80 € par an par rapport aux prix standard",
      save_card_b2: "jusqu'à 1 000 € par rapport à l'eau en bouteille plastique !",
      how_eyebrow: "Comment adhérer",
      how_title: "Devenez membre en quelques étapes et profitez des avantages",
      how_intro: "La cotisation 2026 est de 10 € par an. Vous pouvez adhérer confortablement depuis chez vous ou en personne : dans les deux cas, la carte se retire sur rendez-vous.",
      enroll_title: "Choisissez comment adhérer",
      enroll_online_title: "En ligne, depuis chez vous",
      enroll_online_text: "Remplissez le formulaire d'adhésion et réglez la cotisation facilement par PayPal ou virement bancaire, sans vous déplacer.",
      enroll_online_btn: "Remplir le formulaire",
      enroll_office_title: "En personne, sur rendez-vous",
      enroll_office_text: "Nous nous retrouvons au cabinet de notre président, Ing. Salvatore Pirolozzi (Via Castagna 38 — Scauri), et nous réglons tout ensemble : adhésion, cotisation et carte.",
      enroll_office_btn: "Prendre rendez-vous par e-mail",
      step2_title: "Retirez la carte",
      step2_text: "Même si vous vous inscrivez en ligne, la carte se retire en personne sur rendez-vous, au cabinet du Président.",
      step3_title: "Rechargez et utilisez la maison de l'eau",
      step3_text: "Vous rechargez la carte directement à la maison de l'eau et remplissez votre gourde quand vous voulez, 24h/24. Votre monnaie reste toujours sur la carte.",
      how_note: "La carte ne fonctionne que si vous êtes membre : la cotisation est valable pour l'année civile en cours et expire le 31 décembre. Pour continuer à l'utiliser, il suffit de réadhérer.",

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
      faq_a1: "Pour 2026, la cotisation est de 10 € par an. Elle comprend la carte rechargeable qui vous donne l'eau à prix réduit. La cotisation est valable pour l'année civile en cours et expire le 31 décembre.",
      faq_q6: "La carte expire-t-elle ? Comment la renouveler ?",
      faq_a6: "La carte ne fonctionne que si vous êtes membre et la cotisation est valable pour l'année civile en cours : elle expire le 31 décembre. Pour continuer à l'utiliser, il vous suffit de réadhérer l'année suivante en réglant à nouveau la cotisation de 10 €.",
      faq_q2: "Où se trouve la maison de l'eau ?",
      faq_a2: "À Scauri, dans la commune de Minturno (LT), en Italie. Elle est ouverte à tous 24h/24, 7j/7. Vous trouverez l'emplacement exact sur la carte ci-dessus.",
      faq_q3: "Puis-je utiliser la maison de l'eau même sans être membre ?",
      faq_a3: "Oui, la maison de l'eau est ouverte à tous. Les membres paient cependant moins : 0,05 €/L au lieu de 0,08 pour l'eau plate et 0,07 au lieu de 0,10 pour la pétillante.",
      faq_q4: "Comment recharger la carte ?",
      faq_a4: "La carte se recharge directement à la maison de l'eau, simplement et rapidement.",
      faq_q5: "Comment puis-je aider Marimeo ?",
      faq_a5: "En adhérant, en utilisant la maison de l'eau avec votre gourde, en participant aux initiatives et en nous suivant sur les réseaux sociaux. Chaque geste compte !",

      final_cta_title: "Aidez-nous à grandir, devenez membre de Marimeo",
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
      footer_privacy: "Politique de confidentialité",
      footer_copy: "Association de Jeunesse Marimeo",
      footer_credit: "Site web réalisé par Filippo Fresilli",
      back_top: "Retour en haut"
    }
  };

  /* ---------- Stato ---------- */
  function normalize(lang) {
    if (!lang) return null;
    const short = String(lang).toLowerCase().slice(0, 2);
    return SUPPORTED.includes(short) ? short : null;
  }

  /* Chi ha gia' scelto una lingua se la ritrova; agli altri il sito parla nella
     lingua del browser, se e' fra quelle supportate. */
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

    // Segnala ai lettori di schermo i link che aprono una nuova scheda, nella
    // lingua attiva. Va dopo il loop dei testi: si basa sul testo gia' tradotto.
    const newTab = t("new_window");
    document.querySelectorAll('a[target="_blank"]').forEach((link) => {
      const label = (link.textContent || "").replace(/\s+/g, " ").trim();
      link.setAttribute("aria-label", label ? label + " " + newTab : newTab);
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
