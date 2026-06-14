/* =============================================================================
   AARNA ENERGIES — SITE CONTENT CONFIG
   -----------------------------------------------------------------------------
   👋 This is the ONLY file most edits need to touch.
   Everything visible on the website — headlines, copy, prices, phone numbers,
   the WhatsApp number, specs, FAQs — lives here. Change a value, save, done.

   Tips for editing:
   • Keep the quotes around text:  headline: "New text here",
   • A line ending in a comma stays in the list.
   • The WhatsApp number drives every "Chat on WhatsApp" button on the site.
   ============================================================================= */

export const site = {
  /* ---------------------------------------------------------------------------
     1. COMPANY  — core identity used across the whole site
     --------------------------------------------------------------------------- */
  company: {
    name: "Aarna Energies",
    legalName: "Shree Aarna Energies LLP",
    gst: "37AFPFS4704M1ZC",
    foundedNote: "Engineering-led rooftop solar EPC",
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
    // Default message pre-filled when a visitor opens WhatsApp:
    whatsappDefaultMessage:
      "Hi Aarna Energies 👋 I'd like a free rooftop solar consultation. Can you share details?",
    bank: {
      name: "Shree Aarna Energies LLP",
      accountNumber: "050111318180424",
      ifsc: "UBIN0805017",
      upiHint: "Pay via PhonePe / UPI",
    },
  },

  /* ---------------------------------------------------------------------------
     3. SEO META
     --------------------------------------------------------------------------- */
  meta: {
    url: "https://aarnaenergies.com",
    tagline: "Rooftop Solar, Engineered to Last 25 Years",
    description:
      "Aarna Energies is a quality-led, engineering-driven rooftop solar EPC. We design and build TOPCon, hybrid-ready solar systems for lifetime performance — not lowest upfront price. Channel partner for SolarEdge & S R Portables.",
    keywords: [
      "rooftop solar",
      "solar EPC",
      "Aarna Energies",
      "TOPCon solar",
      "SolarEdge",
      "solar Vizianagaram",
      "Andhra Pradesh solar",
      "on-grid solar",
      "hybrid solar",
      "solar installation India",
    ],
  },

  /* ---------------------------------------------------------------------------
     4. NAVIGATION
     --------------------------------------------------------------------------- */
  nav: {
    wordmark: "AARNA",
    links: [
      { label: "Approach", href: "#approach" },
      { label: "Technology", href: "#technology" },
      { label: "System", href: "#system" },
      { label: "Impact", href: "#impact" },
      { label: "Pricing", href: "#pricing" },
      { label: "Contact", href: "#contact" },
    ],
    cta: { label: "Chat on WhatsApp", href: "" }, // href is generated
  },

  /* ---------------------------------------------------------------------------
     5. HERO
     --------------------------------------------------------------------------- */
  hero: {
    eyebrow: "Shree Aarna Energies LLP · Rooftop Solar EPC",
    // Headline is split into lines for the staggered reveal animation:
    headline: ["HARNESS", "THE SUN."],
    headlineAccent: "OWN YOUR POWER.",
    lede: "We engineer rooftop solar as a 25-year infrastructure asset — TOPCon modules, smart electronics and hybrid-ready design, built for lifetime performance, not the lowest upfront price.",
    primaryCta: "Get a Free Solar Estimate",
    secondaryCta: "Explore the System",
    secondaryHref: "#system",
    scrollPrompt: "Scroll to continue",
    // Rotating proof points shown beneath the hero:
    stats: [
      { value: "25", suffix: "yr", label: "Performance-warranted design" },
      { value: "5,000", suffix: "+", label: "Clean units / year (3 kW)" },
      { value: "<1", suffix: "%", label: "Yr-1 power degradation" },
      { value: "2", suffix: "", label: "Global tech partnerships" },
    ],
  },

  /* ---------------------------------------------------------------------------
     6. MARQUEE  — the scrolling band of keywords
     --------------------------------------------------------------------------- */
  marquee: [
    "TOPCon N-Type",
    "SolarEdge Optimizers",
    "Hybrid-Ready",
    "Net Metering",
    "G12R High-Density",
    "Hot-Dip Galvanised",
    "25-Year Asset",
    "Engineering-Led EPC",
  ],

  /* ---------------------------------------------------------------------------
     7. POSITIONING  — the core belief statement
     --------------------------------------------------------------------------- */
  positioning: {
    eyebrow: "Our Belief",
    statement:
      "Solar is a 25-year infrastructure asset — not a short-term electrical purchase.",
    body: "While the industry optimises for cost and speed, Aarna Energies is deliberately quality-led and technology-driven, focused on lifetime system performance. We treat EPC as an engineering discipline: site-specific design, a real electrical safety philosophy, structured commissioning, and long-term maintainability.",
    signature: "— Vijay, Partner, Aarna Energies",
  },

  /* ---------------------------------------------------------------------------
     8. WHY AARNA  — three pillars
     --------------------------------------------------------------------------- */
  why: {
    eyebrow: "Why Aarna",
    title: "A new class of solar enterprise.",
    intro:
      "Engineering-led, technology-trusted, and positioned to win as the industry shifts from cost-driven adoption to performance-driven maturity.",
    pillars: [
      {
        no: "01",
        title: "Ahead of the Industry Curve",
        body: "Most of the rooftop market competes on upfront cost and speed. We chose a quality-first, engineering-led strategy — built for the next phase of the industry where performance, safety, compliance and serviceability become decisive.",
      },
      {
        no: "02",
        title: "A Trusted Ecosystem Partner",
        body: "Through disciplined execution and strong governance, Aarna has been selectively appointed as a distributor and channel partner for global and national leaders like SolarEdge and S R Portables — confidence in our ability to deploy advanced technology in demanding markets.",
      },
      {
        no: "03",
        title: "Technology With Accountability",
        body: "Our edge isn't access to technology alone — it's responsible deployment. Advanced module and system architectures aligned to Indian rooftop realities, with engineering discipline that converts product capability into bankable system performance.",
      },
    ],
  },

  /* ---------------------------------------------------------------------------
     9. TECHNOLOGY TRENDS  — what we deploy & why
     --------------------------------------------------------------------------- */
  technology: {
    eyebrow: "Technology With Engineering Intent",
    title: "We deploy technology as system-level solutions — not labels.",
    trends: [
      {
        tag: "A",
        title: "N-Type TOPCon Modules",
        body: "Moving beyond older PERC cells to N-type TOPCon — sourced for quality, degradation behaviour and real-world conditions. Higher efficiency, better temperature performance, longer-term output.",
        spec: "Higher efficiency · lower degradation",
      },
      {
        tag: "B",
        title: "G12R High-Density Formats",
        body: "Larger, rectangular wafer formats like G12R used to maximise rooftop yield — more watts per square metre and optimised balance-of-system, not just headline module wattage.",
        spec: "More W/m² · better rooftop use",
      },
      {
        tag: "C",
        title: "Smart & Distributed Electronics",
        body: "Optimizer / MLPE-based systems deployed to solve shading, monitoring and service challenges — engineered solutions, never add-ons. Panel-level visibility and safer DC.",
        spec: "Per-panel control · safer DC",
      },
      {
        tag: "D",
        title: "Hybrid & Storage-Ready",
        body: "Hybrid inverter architecture designed for reliability, backup and future battery expansion — built for grid unreliability, energy independence and future-proof investment.",
        spec: "Backup-ready · battery-expandable",
      },
    ],
  },

  /* ---------------------------------------------------------------------------
     10. INVERTER COMPARISON  — interactive table
     --------------------------------------------------------------------------- */
  inverters: {
    eyebrow: "Choose Your Architecture",
    title: "String, Micro or Optimizer — engineered to your roof.",
    note: "Quotation pricing is for a String inverter. SolarEdge Optimizer or Microinverter systems are available and finalised on discussion.",
    options: [
      {
        key: "string",
        name: "String (Grid) Inverter",
        glyph: "⚡",
        principle: "One inverter for a series (string) of panels",
        type: "Centralized",
        cost: "Lowest",
        bestFor: "Unshaded roofs seeking best value",
        brands: "Polycab · Solis · Solex · Feaston · Dye",
      },
      {
        key: "micro",
        name: "Microinverter",
        glyph: "🔌",
        principle: "One inverter per panel",
        type: "Fully distributed",
        cost: "Highest",
        bestFor: "Complex roofs, maximum reliability",
        brands: "Enphase · Dye · Feaston · Jio Sparq",
      },
      {
        key: "optimizer",
        name: "Power Optimizer",
        glyph: "🔋",
        principle: "Optimizer per panel + central inverter",
        type: "Hybrid control",
        cost: "Medium",
        bestFor: "Shaded roofs wanting panel-level control",
        brands: "SolarEdge Technologies",
      },
    ],
    // rows: each row rated per option — "high" | "mid" | "low"
    rows: [
      { label: "Efficiency (ideal)", values: { string: "high", micro: "mid", optimizer: "high" } },
      { label: "Performance in shading", values: { string: "low", micro: "high", optimizer: "high" } },
      { label: "Panel-level monitoring", values: { string: "low", micro: "high", optimizer: "high" } },
      { label: "Safety (DC voltage)", values: { string: "mid", micro: "high", optimizer: "high" } },
      { label: "Installation simplicity", values: { string: "high", micro: "mid", optimizer: "mid" } },
      { label: "Scalability", values: { string: "low", micro: "high", optimizer: "high" } },
      { label: "System reliability", values: { string: "mid", micro: "high", optimizer: "high" } },
      { label: "Initial cost", values: { string: "high", micro: "low", optimizer: "mid" } },
    ],
  },

  /* ---------------------------------------------------------------------------
     11. SYSTEM SPECS  — the product / technical annexure
     --------------------------------------------------------------------------- */
  system: {
    eyebrow: "The System",
    title: "A 3 kW rooftop power plant, engineered end-to-end.",
    intro:
      "Every component is specified for a 25-year service life — bankable modules, protected DC, hot-dip galvanised structure and a documented earthing & safety system.",
    headline: {
      capacity: "3 kW",
      capacityNote: "On-grid rooftop · scalable & hybrid-ready",
    },
    specGroups: [
      {
        title: "Solar PV Modules",
        items: [
          { k: "Make", v: "Adani / Renewsys / Rayzon / Reliance" },
          { k: "Technology", v: "Bifacial Glass-to-Glass TOPCon (DCR)" },
          { k: "Wattage", v: "540 Wp × 6 panels" },
          { k: "Product warranty", v: "8 years" },
          { k: "Performance warranty", v: "30 years · <1% yr-1, <0.4%/yr after" },
          { k: "Certifications", v: "IEC 61215 / 61730 / 61853 · BIS" },
        ],
      },
      {
        title: "Inverter",
        items: [
          { k: "Make", v: "Polycab / Feaston / Dye / SolarEdge" },
          { k: "Rating", v: "3 kW · single phase" },
          { k: "Quantity", v: "1 unit" },
          { k: "Warranty", v: "8 years" },
          { k: "Architecture", v: "String / Optimizer / Micro (on discussion)" },
          { k: "Monitoring", v: "App-based ecosystem monitoring" },
        ],
      },
      {
        title: "Structure & Balance of System",
        items: [
          { k: "Mounting", v: "Hot-dip / pre-galvanised MMS, up to 600 mm" },
          { k: "Leg height", v: "4–6 ft (finalised on site)" },
          { k: "Protection", v: "ACDB (MCCB 32A + SPD) · DCDB" },
          { k: "Earthing", v: "3 × Cu-bonded rods · backfill compound" },
          { k: "Lightning", v: "Conventional lightning arrester" },
          { k: "Cabling", v: "Polycab / Apar solar DC & AC cable" },
        ],
      },
    ],
    freeGift: {
      label: "Included Free",
      text: "Solar panel cleaning drip system + cleaning mop & wiper stick",
    },
  },

  /* ---------------------------------------------------------------------------
     12. IMPACT  — environmental counters
     --------------------------------------------------------------------------- */
  impact: {
    eyebrow: "Hey Green Champ 🌱",
    title: "Your roof becomes a mini power station.",
    body: "Every sunny day, your system turns sunlight into clean energy — no smoke, no noise, no guilt. Just pure sunshine doing its thing for the next 25 years.",
    counters: [
      { value: 5000, suffix: "+", label: "Clean units generated / year" },
      { value: 800, suffix: "", label: "Trees-worth of CO₂ absorbed" },
      { value: 4.5, suffix: "T", label: "CO₂ cut every year", decimals: 1 },
      { value: 25, suffix: "yr", label: "Of greener, cheaper power" },
    ],
    quote:
      "Switching to solar isn't just saving money — it's leaving a greener legacy for the next generation.",
  },

  /* ---------------------------------------------------------------------------
     13. SCOPE OF WORK  — who does what
     --------------------------------------------------------------------------- */
  scope: {
    eyebrow: "Scope of Work",
    title: "Clear ownership, start to commissioning.",
    intro:
      "We treat execution as a discipline. Here's exactly what Aarna delivers and what stays with you — no surprises.",
    aarna: [
      "Detailed design engineering",
      "Supply of all components per the DPR",
      "Civil works for structures (up to grouting)",
      "Installation of the solar system",
      "Earthing on non-concrete flooring",
      "Testing & commissioning, incl. net metering",
      "Removal of debris from site",
      "Warranty documentation",
    ],
    client: [
      "Name / category / phase change in electricity bill",
      "Access to site",
      "DPR approval & net-metering documents",
      "Supply of fire extinguisher",
      "Concrete cutting & repair for earthing",
      "Internet (min 1 Mbps) at inverter location",
      "Water pipeline to sprinkler / cleaning system",
      "Downloading the monitoring ecosystem apps",
    ],
  },

  /* ---------------------------------------------------------------------------
     14. PRICING
     --------------------------------------------------------------------------- */
  pricing: {
    eyebrow: "Investment",
    title: "One transparent price. A 25-year revenue engine.",
    plan: {
      name: "3 kW On-Grid Rooftop System",
      price: "₹1,85,000",
      priceNote: "Complete system, including GST",
      tagline: "A rooftop revenue engine, humming for 25 years.",
      includes: [
        "3 kW Adani or reputed-make panels",
        "Hot-dip galvanised mounting structure",
        "SolarEdge / reputed on-grid string inverter",
        "Complete BOS, earthing & safety system",
        "Free panel-cleaning drip system + kit",
      ],
      upgradesNote:
        "SolarEdge Optimizer or Microinverter architectures available — finalised on discussion.",
    },
    payment: [
      { stage: "On date of order", percent: "70%" },
      { stage: "On installation date", percent: "30%" },
    ],
    cta: "Reserve Your Site Survey",
  },

  /* ---------------------------------------------------------------------------
     15. PARTNERS
     --------------------------------------------------------------------------- */
  partners: {
    eyebrow: "Trusted To Represent",
    title: "Channel partner for industry leaders.",
    body: "Aarna has been selectively appointed to represent advanced technologies in demanding markets — a signal of confidence in our engineering and execution.",
    logos: [
      { name: "SolarEdge", role: "Optimizer & monitoring partner" },
      { name: "S R Portables", role: "Distribution & channel partner" },
      { name: "Adani Solar", role: "Tier-1 module supply" },
      { name: "Polycab", role: "Inverters & solar cable" },
    ],
  },

  /* ---------------------------------------------------------------------------
     16. FAQ
     --------------------------------------------------------------------------- */
  faq: {
    eyebrow: "Good Questions",
    title: "Everything you wanted to ask.",
    items: [
      {
        q: "How much does a rooftop system cost?",
        a: "Our 3 kW on-grid system is ₹1,85,000 including GST, complete with panels, hot-dip galvanised structure, inverter, full balance-of-system and a free cleaning kit. Larger and hybrid systems are quoted after a site survey.",
      },
      {
        q: "What's the payment schedule?",
        a: "70% on the date of order and 30% on the installation date. Bank and UPI details are shared on the proposal and during your WhatsApp chat.",
      },
      {
        q: "Which inverter should I choose?",
        a: "String inverters offer the best value on unshaded roofs. For shaded or complex roofs we recommend SolarEdge Optimizers or microinverters for panel-level monitoring and better shade performance. We'll advise based on your roof.",
      },
      {
        q: "How long does the system last?",
        a: "Modules carry an 8-year product warranty and a 30-year performance warranty (degradation under 1% in year one). We engineer the whole system as a 25-year asset.",
      },
      {
        q: "Do you handle net metering and subsidy paperwork?",
        a: "Yes — we handle design, DPR, testing, commissioning and net metering. You provide site access and the documents required for net-metering and subsidy applications.",
      },
      {
        q: "What areas do you serve?",
        a: "We're based in Vizianagaram, Andhra Pradesh and serve rooftop solar projects across the region. Message us on WhatsApp to confirm coverage for your location.",
      },
    ],
  },

  /* ---------------------------------------------------------------------------
     17. CONTACT / FINAL CTA
     --------------------------------------------------------------------------- */
  contact_section: {
    eyebrow: "Let's Talk",
    title: "Ready to turn your roof into a power plant?",
    body: "Send one message on WhatsApp. We'll review your roof, recommend the right architecture and share a transparent quote — no pressure, no jargon.",
    primaryCta: "Chat on WhatsApp",
    points: [
      "Free roof assessment & savings estimate",
      "Transparent, all-inclusive pricing",
      "Engineering-led design & lifetime support",
    ],
  },

  /* ---------------------------------------------------------------------------
     18. FOOTER
     --------------------------------------------------------------------------- */
  footer: {
    blurb:
      "Engineering-led rooftop solar. We build 25-year energy assets, not short-term electrical purchases.",
    closingLine: "Powered by good choices and pure sunshine.",
    columns: [
      {
        title: "Explore",
        links: [
          { label: "Our Approach", href: "#approach" },
          { label: "Technology", href: "#technology" },
          { label: "The System", href: "#system" },
          { label: "Pricing", href: "#pricing" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "Why Aarna", href: "#approach" },
          { label: "Environmental Impact", href: "#impact" },
          { label: "Scope of Work", href: "#scope" },
          { label: "FAQ", href: "#faq" },
        ],
      },
    ],
  },
} as const;

export type Site = typeof site;
