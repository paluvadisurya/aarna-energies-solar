/* =============================================================================
   AARNA ENERGIES — SITE CONTENT CONFIG
   -----------------------------------------------------------------------------
   This is the ONLY file most edits need to touch.
   Everything visible on the website (text, prices, phone numbers, the WhatsApp
   number, specs, FAQs) lives here. Change a value, save, and you are done.

   Tips for editing:
   - Keep the quotes around text:  headline: "New text here",
   - A line ending in a comma stays in the list.
   - The WhatsApp number drives every "Chat on WhatsApp" button on the site.
   - "icon" values are names from a fixed set (see components/ui/iconMap.tsx).
   ============================================================================= */

export const site = {
  /* ---------------------------------------------------------------------------
     1. COMPANY  — core identity used across the whole site
     --------------------------------------------------------------------------- */
  company: {
    name: "Aarna Energies",
    fullName: "Aarna Energies",
    legalName: "Shree Aarna Energies LLP",
    descriptor: "Rooftop Solar",
    brandTagline: "Rooftop solar that lasts 25 years",
    gst: "37AFPFS4704M1ZC",
    foundedNote: "Quality-first rooftop solar company",
    location: {
      city: "Vizianagaram",
      state: "Andhra Pradesh",
      country: "India",
    },
  },

  /* ---------------------------------------------------------------------------
     2. CONTACT  — phone, email, WhatsApp, bank. Edit the WhatsApp number to
        re-route every chat button on the site.
     --------------------------------------------------------------------------- */
  contact: {
    phone: "+91 86868 83329",
    phoneRaw: "918686883329",
    // WhatsApp Business number in international format, no "+", no spaces:
    whatsapp: "918686883329",
    email: "sriaarnaenergies@gmail.com",
    // Default message filled in when a visitor opens WhatsApp:
    whatsappDefaultMessage:
      "Hi Aarna Energies, I want a free rooftop solar quote for my home. Please share the details.",
    bank: {
      name: "Shree Aarna Energies LLP",
      accountNumber: "050111318180424",
      ifsc: "UBIN0805017",
      upiHint: "Pay easily with PhonePe or any UPI app",
    },
  },

  /* ---------------------------------------------------------------------------
     3. SEO META
     --------------------------------------------------------------------------- */
  meta: {
    url: "https://aarnaenergies.com",
    tagline: "Rooftop Solar That Lasts 25 Years",
    description:
      "Aarna Energies builds strong rooftop solar systems for homes. Good quality parts, careful fitting, full paperwork support and 25 years of savings. Trusted partner of SolarEdge and S R Portables.",
    keywords: [
      "rooftop solar",
      "solar panels for home",
      "Aarna Energies",
      "TOPCon solar",
      "SolarEdge",
      "solar Vizianagaram",
      "Andhra Pradesh solar",
      "on grid solar",
      "hybrid solar",
      "solar installation India",
    ],
  },

  /* ---------------------------------------------------------------------------
     4. NAVIGATION
     --------------------------------------------------------------------------- */
  nav: {
    wordmark: "AARNA ENERGIES",
    links: [
      { label: "What We Do", href: "#offer" },
      { label: "Why Aarna", href: "#approach" },
      { label: "System", href: "#system" },
      { label: "Savings", href: "#impact" },
      { label: "Price", href: "#pricing" },
      { label: "Contact", href: "#contact" },
    ],
    cta: { label: "Chat on WhatsApp", href: "" }, // href is generated
  },

  /* ---------------------------------------------------------------------------
     5. HERO
     --------------------------------------------------------------------------- */
  hero: {
    eyebrow: "Aarna Energies · Rooftop Solar for Homes",
    // Headline is split into lines for the staggered reveal animation:
    headline: ["SOLAR POWER", "FOR YOUR HOME."],
    headlineAccent: "SAVE FROM DAY ONE.",
    lede: "Aarna Energies builds strong rooftop solar systems that keep working well for 25 years. Good quality parts, careful fitting and full support after the sale, so your power bill stays low for a long time.",
    primaryCta: "Get a Free Quote",
    secondaryCta: "See What We Do",
    secondaryHref: "#offer",
    scrollPrompt: "Scroll to see more",
    // Short proof points shown beneath the hero:
    stats: [
      { value: "25", suffix: " yr", label: "Built to last" },
      { value: "5,000", suffix: "+", label: "Free units a year" },
      { value: "30", suffix: " yr", label: "Performance warranty" },
      { value: "2", suffix: "", label: "Trusted brand partners" },
    ],
  },

  /* ---------------------------------------------------------------------------
     6. MARQUEE  — the scrolling band of keywords
     --------------------------------------------------------------------------- */
  marquee: [
    "Rooftop Solar",
    "Free Site Survey",
    "Net Metering Help",
    "25-Year Build",
    "TOPCon Panels",
    "SolarEdge Partner",
    "Full Installation",
    "After-Sales Care",
  ],

  /* ---------------------------------------------------------------------------
     7. WHAT WE DO  — clear list of services (NEW)
     --------------------------------------------------------------------------- */
  offer: {
    eyebrow: "What We Do",
    title: "Everything for your rooftop solar, in one place.",
    intro:
      "From the first visit to years of support, we take care of the whole job. One trusted team, one point of contact.",
    services: [
      {
        icon: "survey",
        title: "Free Site Survey & Design",
        desc: "We visit your home, check your roof and sunlight, and design the right system for you.",
      },
      {
        icon: "panel",
        title: "Quality Solar Parts",
        desc: "We supply trusted panels, inverters and a strong galvanised frame that lasts for years.",
      },
      {
        icon: "install",
        title: "Safe Installation",
        desc: "Our trained team fits, wires and tests the full system with proper care and safety.",
      },
      {
        icon: "document",
        title: "Net Metering & Paperwork",
        desc: "We handle the design report, testing and net metering, so you do not have to run around.",
      },
      {
        icon: "monitor",
        title: "Watch It On Your Phone",
        desc: "See how much power your roof makes any time, right from a simple phone app.",
      },
      {
        icon: "support",
        title: "After-Sales Support",
        desc: "We stay with you after the sale, with service help and a free panel cleaning kit.",
      },
    ],
  },

  /* ---------------------------------------------------------------------------
     8. POSITIONING  — the core belief statement
     --------------------------------------------------------------------------- */
  positioning: {
    eyebrow: "Our Promise",
    statement:
      "Solar is a 25-year asset for your home, not a quick electrical job.",
    body: "Many companies rush to give the lowest price and finish fast. We do it differently. We focus on quality and good engineering, so your system keeps saving money for many years. We plan each system for your roof, fit it safely, test it fully, and stay with you for support.",
    signature: "Vijay, Partner, Aarna Energies",
  },

  /* ---------------------------------------------------------------------------
     9. WHY AARNA  — three pillars
     --------------------------------------------------------------------------- */
  why: {
    eyebrow: "Why Aarna",
    title: "A new kind of solar company.",
    intro:
      "We lead with good engineering and trusted technology. As solar grows up, what matters most is how long your system lasts and how well it is looked after. That is exactly what we do best.",
    pillars: [
      {
        no: "01",
        title: "Ahead Of The Curve",
        body: "Most companies sell on low price and speed. We chose quality and careful work, so your system runs well and stays safe for years to come.",
      },
      {
        no: "02",
        title: "A Trusted Partner",
        body: "Big names like SolarEdge and S R Portables have chosen Aarna as their partner. That shows real trust in our team and the way we work.",
      },
      {
        no: "03",
        title: "Technology You Can Trust",
        body: "We do not just buy good parts. We fit and set them up the right way, so you get the full benefit and real savings every month.",
      },
    ],
  },

  /* ---------------------------------------------------------------------------
     10. TECHNOLOGY  — what we use & why
     --------------------------------------------------------------------------- */
  technology: {
    eyebrow: "The Technology We Use",
    title: "Better parts, set up the right way.",
    trends: [
      {
        tag: "01",
        icon: "panel",
        title: "N-Type TOPCon Panels",
        body: "Newer panels that make more power and last longer than older types. They also work better in the heat, so you get more savings.",
        spec: "More power, longer life",
      },
      {
        tag: "02",
        icon: "grid",
        title: "High-Density Panels",
        body: "Larger, smart-shaped panels that fit more power on your roof. You get more units from the same roof space.",
        spec: "More power per square foot",
      },
      {
        tag: "03",
        icon: "chip",
        title: "Smart Panel Electronics",
        body: "Optimizers let each panel work on its own. You get better output when there is shade, plus easy checking of each panel.",
        spec: "Works well even with shade",
      },
      {
        tag: "04",
        icon: "battery",
        title: "Battery-Ready Design",
        body: "A hybrid setup that gives backup power and can take a battery later. Your system is ready for the future.",
        spec: "Backup now, battery later",
      },
    ],
  },

  /* ---------------------------------------------------------------------------
     11. INVERTER COMPARISON  — interactive table
     --------------------------------------------------------------------------- */
  inverters: {
    eyebrow: "Pick Your Setup",
    title: "String, Micro or Optimizer, chosen for your roof.",
    note: "The quote price is for a String inverter. SolarEdge Optimizer or Micro setups are also available. We can choose the best one together on a call.",
    options: [
      {
        key: "string",
        name: "String Inverter",
        icon: "bolt",
        principle: "One inverter for a full row of panels",
        type: "Central setup",
        cost: "Lowest",
        bestFor: "Open roofs with no shade",
        brands: "Polycab, Solis, Solex, Feaston, Dye",
      },
      {
        key: "micro",
        name: "Microinverter",
        icon: "plug",
        principle: "One small inverter on each panel",
        type: "Spread out",
        cost: "Highest",
        bestFor: "Tricky roofs, top reliability",
        brands: "Enphase, Dye, Feaston, Jio Sparq",
      },
      {
        key: "optimizer",
        name: "Power Optimizer",
        icon: "chip",
        principle: "A smart unit on each panel plus a central inverter",
        type: "Smart mix",
        cost: "Medium",
        bestFor: "Shaded roofs, panel-by-panel control",
        brands: "SolarEdge",
      },
    ],
    // rows: each row rated per option — "high" | "mid" | "low"
    rows: [
      { label: "Power on a clear day", values: { string: "high", micro: "mid", optimizer: "high" } },
      { label: "Works well in shade", values: { string: "low", micro: "high", optimizer: "high" } },
      { label: "Check each panel", values: { string: "low", micro: "high", optimizer: "high" } },
      { label: "Safety", values: { string: "mid", micro: "high", optimizer: "high" } },
      { label: "Easy to install", values: { string: "high", micro: "mid", optimizer: "mid" } },
      { label: "Easy to add more later", values: { string: "low", micro: "high", optimizer: "high" } },
      { label: "How reliable", values: { string: "mid", micro: "high", optimizer: "high" } },
      { label: "Starting cost", values: { string: "high", micro: "low", optimizer: "mid" } },
    ],
  },

  /* ---------------------------------------------------------------------------
     12. SYSTEM SPECS  — the product / technical details
     --------------------------------------------------------------------------- */
  system: {
    eyebrow: "The System",
    title: "A 3 kW rooftop power plant, done fully.",
    intro:
      "Every part is picked to last 25 years: trusted panels, safe wiring, a strong galvanised frame, and a full earthing and safety setup.",
    headline: {
      capacity: "3 kW",
      capacityNote: "On-grid rooftop · can grow · battery-ready",
    },
    specGroups: [
      {
        title: "Solar Panels",
        items: [
          { k: "Make", v: "Adani / Renewsys / Rayzon / Reliance" },
          { k: "Type", v: "Bifacial Glass-to-Glass TOPCon (DCR)" },
          { k: "Power", v: "540 Wp x 6 panels" },
          { k: "Product warranty", v: "8 years" },
          { k: "Performance warranty", v: "30 years, under 1% loss in year 1" },
          { k: "Certified", v: "IEC 61215 / 61730 / 61853 and BIS" },
        ],
      },
      {
        title: "Inverter",
        items: [
          { k: "Make", v: "Polycab / Feaston / Dye / SolarEdge" },
          { k: "Rating", v: "3 kW, single phase" },
          { k: "Quantity", v: "1 unit" },
          { k: "Warranty", v: "8 years" },
          { k: "Setup", v: "String / Optimizer / Micro (your choice)" },
          { k: "Monitoring", v: "Simple phone app" },
        ],
      },
      {
        title: "Frame & Safety",
        items: [
          { k: "Frame", v: "Hot-dip galvanised, up to 600 mm" },
          { k: "Leg height", v: "4 to 6 ft (set at your site)" },
          { k: "Protection", v: "ACDB (MCCB 32A and SPD) and DCDB" },
          { k: "Earthing", v: "3 copper-bonded rods with compound" },
          { k: "Lightning", v: "Lightning arrester included" },
          { k: "Cabling", v: "Polycab / Apar solar DC and AC cable" },
        ],
      },
    ],
    freeGift: {
      icon: "gift",
      label: "Free With Your System",
      text: "Solar panel cleaning kit: drip system, mop and wiper stick",
    },
  },

  /* ---------------------------------------------------------------------------
     13. IMPACT  — environmental counters
     --------------------------------------------------------------------------- */
  impact: {
    eyebrow: "Good For The Planet",
    title: "Your roof becomes a small power station.",
    body: "On every sunny day, your roof turns sunlight into clean power. No smoke, no noise. Just steady savings and a cleaner planet for the next 25 years.",
    counters: [
      { value: 5000, suffix: "+", label: "Clean units made each year" },
      { value: 800, suffix: "", label: "Trees worth of CO2 saved" },
      { value: 4.5, suffix: "T", label: "CO2 cut every single year", decimals: 1 },
      { value: 25, suffix: " yr", label: "Of cleaner, cheaper power" },
    ],
    quote:
      "Going solar is not just about saving money. It is about leaving a cleaner world for our children.",
  },

  /* ---------------------------------------------------------------------------
     14. SCOPE OF WORK  — who does what
     --------------------------------------------------------------------------- */
  scope: {
    eyebrow: "Who Does What",
    title: "Clear roles, from start to finish.",
    intro:
      "We believe in doing the job right. Here is exactly what Aarna takes care of, and the few things we need from you.",
    aarna: [
      "Full system design",
      "Supply of all solar parts",
      "Civil work for the frame (up to grouting)",
      "Installation of the solar system",
      "Earthing on non-concrete floors",
      "Testing, switch-on and net metering",
      "Cleaning up and removing waste",
      "All warranty papers",
    ],
    client: [
      "Name or category change in the power bill",
      "Access to your roof and site",
      "Approval of the design report",
      "A fire extinguisher",
      "Concrete cutting and repair for earthing",
      "Internet (at least 1 Mbps) near the inverter",
      "Water line to the cleaning system",
      "Installing the monitoring app",
    ],
  },

  /* ---------------------------------------------------------------------------
     15. PRICING
     --------------------------------------------------------------------------- */
  pricing: {
    eyebrow: "Price",
    title: "One clear price. Savings for 25 years.",
    plan: {
      name: "3 kW On-Grid Rooftop System",
      price: "₹1,85,000",
      priceNote: "Full system, including GST",
      tagline: "A money-saving machine on your roof for 25 years.",
      includes: [
        "3 kW Adani or reputed-make panels",
        "Hot-dip galvanised mounting frame",
        "SolarEdge or reputed on-grid inverter",
        "Full wiring, earthing and safety setup",
        "Free panel cleaning kit",
      ],
      upgradesNote:
        "Want SolarEdge Optimizer or Micro setup? That is also available. We will decide together on a call.",
    },
    payment: [
      { stage: "When you place the order", percent: "70%" },
      { stage: "On installation day", percent: "30%" },
    ],
    cta: "Book a Free Site Visit",
  },

  /* ---------------------------------------------------------------------------
     16. PARTNERS
     --------------------------------------------------------------------------- */
  partners: {
    eyebrow: "Trusted Partners",
    title: "We work with top brands.",
    body: "Leading companies have chosen Aarna to bring their technology to homes here. It is a clear sign of trust in how we work.",
    logos: [
      { name: "SolarEdge", role: "Optimizer and monitoring partner" },
      { name: "S R Portables", role: "Distribution and channel partner" },
      { name: "Adani Solar", role: "Top-grade panel supply" },
      { name: "Polycab", role: "Inverters and solar cable" },
    ],
  },

  /* ---------------------------------------------------------------------------
     17. FAQ
     --------------------------------------------------------------------------- */
  faq: {
    eyebrow: "Common Questions",
    title: "Everything you want to ask.",
    items: [
      {
        q: "How much does a rooftop system cost?",
        a: "Our 3 kW on-grid system is ₹1,85,000 including GST. This covers panels, the galvanised frame, the inverter, full wiring and a free cleaning kit. Bigger systems are quoted after a free site visit.",
      },
      {
        q: "How do I pay?",
        a: "You pay 70% when you place the order and 30% on installation day. Bank and UPI details are shared on your quote and on WhatsApp.",
      },
      {
        q: "Which inverter should I choose?",
        a: "String inverters give the best value on open roofs with no shade. For shaded or tricky roofs we suggest SolarEdge Optimizers or microinverters, so each panel is checked and works on its own. We will guide you based on your roof.",
      },
      {
        q: "How long will the system last?",
        a: "Panels carry an 8-year product warranty and a 30-year performance warranty, with under 1% power loss in the first year. We build the whole system to last 25 years.",
      },
      {
        q: "Do you handle net metering and subsidy papers?",
        a: "Yes. We take care of the design, the report, testing, switch-on and net metering. You only provide site access and the documents needed for net metering and subsidy.",
      },
      {
        q: "Which areas do you cover?",
        a: "We are based in Vizianagaram, Andhra Pradesh and work across the region. Message us on WhatsApp to confirm we cover your area.",
      },
    ],
  },

  /* ---------------------------------------------------------------------------
     18. CONTACT / FINAL CTA
     --------------------------------------------------------------------------- */
  contact_section: {
    eyebrow: "Talk To Us",
    title: "Ready to lower your power bill?",
    body: "Send us one message on WhatsApp. We will look at your roof, suggest the best setup and share a clear price. No pressure, and no hard-to-understand words.",
    primaryCta: "Chat on WhatsApp",
    points: [
      "Free roof check and savings estimate",
      "One clear, all-in price",
      "Careful work and long-term support",
    ],
  },

  /* ---------------------------------------------------------------------------
     19. FOOTER
     --------------------------------------------------------------------------- */
  footer: {
    blurb:
      "Quality-first rooftop solar. We build 25-year power systems for your home, not quick electrical jobs.",
    closingLine: "Powered by good choices and bright sunshine.",
    columns: [
      {
        title: "Explore",
        links: [
          { label: "What We Do", href: "#offer" },
          { label: "Why Aarna", href: "#approach" },
          { label: "The System", href: "#system" },
          { label: "Price", href: "#pricing" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "The Technology", href: "#technology" },
          { label: "Your Savings", href: "#impact" },
          { label: "Who Does What", href: "#scope" },
          { label: "FAQ", href: "#faq" },
        ],
      },
    ],
  },
} as const;

export type Site = typeof site;
