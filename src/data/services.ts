export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: string;
  features: string[];
  faq: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: "home-renovations",
    name: "Home Renovations",
    shortDescription:
      "Complete home renovation services from kitchen remodels to full-house transformations.",
    description:
      "Transform your home with professional renovation services from 709 Pros. Whether you need a kitchen remodel, bathroom upgrade, basement finishing, or a complete home transformation, our experienced team delivers quality craftsmanship on time and on budget. We handle everything from design consultation to final walkthrough.",
    icon: "🏠",
    features: [
      "Kitchen & bathroom remodels",
      "Basement finishing",
      "Open-concept conversions",
      "Flooring & tiling",
      "Custom cabinetry & millwork",
      "Full project management",
    ],
    faq: [
      {
        question: "How long does a typical home renovation take?",
        answer:
          "Timelines vary by scope. A bathroom remodel typically takes 2–4 weeks, a kitchen renovation 4–8 weeks, and a full home renovation 2–4 months. We provide a detailed timeline during your free consultation.",
      },
      {
        question: "Do I need permits for a home renovation?",
        answer:
          "Most structural, electrical, and plumbing work requires permits. 709 Pros handles all permit applications and inspections on your behalf so you never have to worry about compliance.",
      },
      {
        question: "Can I live in my home during renovations?",
        answer:
          "In many cases, yes. We plan renovations in phases to minimize disruption. For larger projects, we'll discuss the best approach during your consultation.",
      },
    ],
  },
  {
    slug: "roofing",
    name: "Roofing",
    shortDescription:
      "Expert roof installation, repair, and replacement to protect your home.",
    description:
      "Protect your biggest investment with professional roofing services from 709 Pros. From minor repairs and leak fixes to complete roof replacements, our certified roofers use premium materials built to withstand Newfoundland's harsh weather. We offer free inspections and honest assessments so you know exactly what your roof needs.",
    icon: "🏗️",
    features: [
      "Shingle & metal roof installation",
      "Roof repair & leak detection",
      "Flat roof systems",
      "Soffit & fascia replacement",
      "Roof ventilation upgrades",
      "Free roof inspections",
    ],
    faq: [
      {
        question: "How do I know if my roof needs replacement?",
        answer:
          "Signs include missing or curling shingles, granules in your gutters, daylight through the attic, and a roof older than 20–25 years. We offer free inspections to assess your roof's condition.",
      },
      {
        question: "What roofing materials do you recommend for Newfoundland?",
        answer:
          "We recommend architectural shingles or standing-seam metal roofing for their durability in high-wind, heavy-snow conditions typical of Newfoundland weather.",
      },
      {
        question: "Do you offer warranties on roofing work?",
        answer:
          "Yes. All our roofing work includes a workmanship warranty, and manufacturer warranties on materials can range from 25 years to lifetime depending on the product selected.",
      },
    ],
  },
  {
    slug: "siding",
    name: "Siding",
    shortDescription:
      "Premium siding installation and repair for lasting curb appeal and protection.",
    description:
      "Upgrade your home's exterior with professional siding services from 709 Pros. We install and repair vinyl, fiber cement, and engineered wood siding that stands up to Newfoundland's demanding climate. New siding improves curb appeal, energy efficiency, and property value — all backed by our quality workmanship guarantee.",
    icon: "🏡",
    features: [
      "Vinyl siding installation",
      "Fiber cement siding",
      "Engineered wood siding",
      "Siding repair & replacement",
      "Insulated siding options",
      "Trim & accent work",
    ],
    faq: [
      {
        question: "What type of siding is best for Newfoundland weather?",
        answer:
          "Fiber cement and insulated vinyl siding are both excellent choices. They resist moisture, high winds, and temperature swings. We'll recommend the best option based on your home and budget.",
      },
      {
        question: "Will new siding improve my home's energy efficiency?",
        answer:
          "Absolutely. Insulated siding adds an extra layer of thermal protection, which can reduce heating costs — an important benefit during Newfoundland winters.",
      },
      {
        question: "How long does siding installation take?",
        answer:
          "Most homes can be fully sided in 1–2 weeks depending on the size of the home and weather conditions.",
      },
    ],
  },
  {
    slug: "windows-and-doors",
    name: "Windows & Doors",
    shortDescription:
      "Energy-efficient window and door installation to improve comfort and reduce costs.",
    description:
      "Upgrade your home's windows and doors with 709 Pros for better comfort, security, and energy savings. We supply and install top-rated, energy-efficient windows and entry doors designed for the Newfoundland climate. From single window replacements to whole-house upgrades, we ensure a perfect fit and professional finish every time.",
    icon: "🪟",
    features: [
      "Energy-efficient window installation",
      "Entry & patio door replacement",
      "Triple-pane glass options",
      "Custom window sizing",
      "Storm door installation",
      "Window capping & trim",
    ],
    faq: [
      {
        question: "How much can I save with energy-efficient windows?",
        answer:
          "Homeowners typically save 15–25% on heating costs after upgrading to modern energy-efficient windows. The savings are especially significant in Newfoundland's cold winters.",
      },
      {
        question: "Do you install custom-sized windows?",
        answer:
          "Yes. We measure and order custom windows to fit any opening. This ensures a proper seal with no drafts — critical for energy efficiency in our climate.",
      },
      {
        question: "What brands do you carry?",
        answer:
          "We work with leading manufacturers known for quality and energy performance. During your consultation, we'll recommend options that match your style preferences and budget.",
      },
    ],
  },
  {
    slug: "decks-and-fences",
    name: "Decks & Fences",
    shortDescription:
      "Custom deck and fence construction to enhance your outdoor living space.",
    description:
      "Extend your living space outdoors with custom-built decks and fences from 709 Pros. We design and build using pressure-treated lumber, cedar, and composite materials for lasting beauty and durability. Whether you want a multi-level entertainment deck or a privacy fence, our team brings your vision to life.",
    icon: "🪵",
    features: [
      "Custom deck design & construction",
      "Composite & wood decking",
      "Privacy & picket fences",
      "Deck staining & restoration",
      "Railing systems",
      "Pergolas & gazebos",
    ],
    faq: [
      {
        question: "What decking material is most durable?",
        answer:
          "Composite decking offers the best long-term durability with minimal maintenance. It resists rot, warping, and fading. Pressure-treated wood is a more budget-friendly option that performs well when properly maintained.",
      },
      {
        question: "Do I need a permit to build a deck or fence?",
        answer:
          "In most municipalities, decks above a certain height and fences in certain locations require permits. 709 Pros handles permit applications as part of our service.",
      },
      {
        question: "How long will a new deck last?",
        answer:
          "A composite deck can last 25–30+ years. A pressure-treated wood deck lasts 15–20 years with regular maintenance including staining every 2–3 years.",
      },
    ],
  },
  {
    slug: "painting",
    name: "Painting",
    shortDescription:
      "Interior and exterior painting services for a flawless, lasting finish.",
    description:
      "Give your home a fresh look with professional painting services from 709 Pros. Our painters deliver clean lines, smooth finishes, and lasting results for both interior and exterior projects. We use premium paints rated for Newfoundland's climate and take care of all prep work — scraping, sanding, priming, and caulking — so the finish lasts for years.",
    icon: "🎨",
    features: [
      "Interior painting",
      "Exterior painting",
      "Cabinet refinishing",
      "Deck & fence staining",
      "Wallpaper removal",
      "Colour consultation",
    ],
    faq: [
      {
        question: "How often should I repaint my home's exterior?",
        answer:
          "In Newfoundland's climate, exterior paint typically lasts 5–7 years. Factors like sun exposure, moisture, and paint quality all affect longevity. We use premium products to maximize lifespan.",
      },
      {
        question: "Do you include prep work in your painting quote?",
        answer:
          "Yes. All our painting quotes include full prep — cleaning, scraping, sanding, patching, priming, and caulking. Proper preparation is the key to a finish that lasts.",
      },
      {
        question: "Can you paint in winter?",
        answer:
          "Interior painting can be done year-round. Exterior painting requires temperatures above 10°C. We schedule exterior projects during the appropriate season for the best results.",
      },
    ],
  },
];
