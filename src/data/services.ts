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
    slug: "roofing",
    name: "Roofing",
    shortDescription:
      "Expert roof installation, repair, and replacement to protect your home.",
    description:
      "Protect your biggest investment with professional roofing contractors matched through 709 Pros. From minor repairs and leak fixes to complete roof replacements, we connect you with certified roofers who use premium materials built to withstand Newfoundland's harsh weather.",
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
          "Signs include missing or curling shingles, granules in your gutters, daylight through the attic, and a roof older than 20–25 years. Submit your project and a local roofer will assess your roof's condition.",
      },
      {
        question: "What roofing materials work best in Newfoundland?",
        answer:
          "Architectural shingles and standing-seam metal roofing are popular for their durability in high-wind, heavy-snow conditions typical of Newfoundland weather.",
      },
      {
        question: "Do roofing contractors offer warranties?",
        answer:
          "Yes. Most contractors in our network include a workmanship warranty, and manufacturer warranties on materials can range from 25 years to lifetime depending on the product.",
      },
    ],
  },
  {
    slug: "heat-pump",
    name: "Heat Pump",
    shortDescription:
      "Heat pump installation and service for energy-efficient home heating and cooling.",
    description:
      "Save on energy costs with a heat pump installed by a qualified local contractor. 709 Pros matches you with certified heat pump installers across Newfoundland who can help you choose the right system, handle installation, and provide ongoing maintenance.",
    icon: "🌡️",
    features: [
      "Ductless mini-split installation",
      "Central heat pump systems",
      "Heat pump repair & maintenance",
      "Energy efficiency assessments",
      "Rebate & incentive guidance",
      "Year-round heating & cooling",
    ],
    faq: [
      {
        question: "How much can I save with a heat pump?",
        answer:
          "Homeowners in Newfoundland typically save 30–50% on heating costs after switching to a heat pump, depending on the system and home size. Many also qualify for provincial and federal rebates.",
      },
      {
        question: "Do heat pumps work in Newfoundland winters?",
        answer:
          "Yes. Modern cold-climate heat pumps are rated to operate efficiently down to -25°C or lower. They're well-suited for Newfoundland's climate and are increasingly popular across the province.",
      },
      {
        question: "How long does installation take?",
        answer:
          "A typical ductless mini-split installation takes 1 day. Central heat pump systems may take 2–3 days depending on ductwork requirements.",
      },
    ],
  },
  {
    slug: "siding",
    name: "Siding",
    shortDescription:
      "Premium siding installation and repair for lasting curb appeal and protection.",
    description:
      "Upgrade your home's exterior with professional siding contractors matched through 709 Pros. We connect you with installers experienced in vinyl, fiber cement, and engineered wood siding built to stand up to Newfoundland's demanding climate.",
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
          "Fiber cement and insulated vinyl siding are both excellent choices. They resist moisture, high winds, and temperature swings. Your matched contractor will recommend the best option for your home and budget.",
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
    slug: "decks",
    name: "Decks",
    shortDescription:
      "Custom deck design and construction to extend your outdoor living space.",
    description:
      "Extend your living space outdoors with a custom-built deck from a qualified local contractor. 709 Pros matches you with experienced deck builders who work with pressure-treated lumber, cedar, and composite materials for lasting beauty and durability.",
    icon: "🪵",
    features: [
      "Custom deck design & construction",
      "Composite & wood decking",
      "Multi-level deck builds",
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
        question: "Do I need a permit to build a deck?",
        answer:
          "In most municipalities, decks above a certain height require permits. Your matched contractor can handle permit applications as part of the project.",
      },
      {
        question: "How long will a new deck last?",
        answer:
          "A composite deck can last 25–30+ years. A pressure-treated wood deck lasts 15–20 years with regular maintenance including staining every 2–3 years.",
      },
    ],
  },
  {
    slug: "windows",
    name: "Windows",
    shortDescription:
      "Energy-efficient window installation to improve comfort and reduce heating costs.",
    description:
      "Upgrade your home's windows with a qualified local installer matched through 709 Pros. We connect you with contractors who supply and install top-rated, energy-efficient windows designed for the Newfoundland climate — from single replacements to whole-house upgrades.",
    icon: "🪟",
    features: [
      "Energy-efficient window installation",
      "Triple-pane glass options",
      "Custom window sizing",
      "Window capping & trim",
      "Storm window installation",
      "Full window replacement",
    ],
    faq: [
      {
        question: "How much can I save with energy-efficient windows?",
        answer:
          "Homeowners typically save 15–25% on heating costs after upgrading to modern energy-efficient windows. The savings are especially significant in Newfoundland's cold winters.",
      },
      {
        question: "Can I get custom-sized windows?",
        answer:
          "Yes. Contractors in our network measure and order custom windows to fit any opening, ensuring a proper seal with no drafts.",
      },
      {
        question: "How long does window replacement take?",
        answer:
          "Most window replacement projects take 1–3 days depending on the number of windows. Your matched contractor will provide a specific timeline.",
      },
    ],
  },
  {
    slug: "painting",
    name: "Painting",
    shortDescription:
      "Interior and exterior painting services for a flawless, lasting finish.",
    description:
      "Give your home a fresh look with a professional painter matched through 709 Pros. We connect you with experienced painters who deliver clean lines, smooth finishes, and lasting results — using premium paints rated for Newfoundland's climate.",
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
          "In Newfoundland's climate, exterior paint typically lasts 5–7 years. Factors like sun exposure, moisture, and paint quality all affect longevity.",
      },
      {
        question: "Is prep work included in painting quotes?",
        answer:
          "Yes. Professional painters include full prep — cleaning, scraping, sanding, patching, priming, and caulking. Proper preparation is the key to a finish that lasts.",
      },
      {
        question: "Can painting be done in winter?",
        answer:
          "Interior painting can be done year-round. Exterior painting requires temperatures above 10°C and is scheduled during the appropriate season.",
      },
    ],
  },
  {
    slug: "fence",
    name: "Fence",
    shortDescription:
      "New fence installation and fence repair for privacy, security, and curb appeal.",
    description:
      "Whether you need a brand new fence or repairs to an existing one, 709 Pros matches you with qualified local fence contractors. From privacy fences and picket fences to chain link and custom designs, get quotes from professionals who build to last in Newfoundland's weather.",
    icon: "🏘️",
    features: [
      "Privacy fence installation",
      "Picket & decorative fencing",
      "Chain link fencing",
      "Fence repair & post replacement",
      "Gate installation",
      "Custom fence designs",
    ],
    faq: [
      {
        question: "What type of fence is best for Newfoundland?",
        answer:
          "Pressure-treated wood and vinyl fencing are the most popular choices. Wood offers a classic look and is cost-effective, while vinyl requires less maintenance and resists moisture.",
      },
      {
        question: "Do I need a permit to build a fence?",
        answer:
          "Most municipalities have bylaws about fence height and placement. Your matched contractor can advise on local requirements and handle permits if needed.",
      },
      {
        question: "How long does fence installation take?",
        answer:
          "A standard residential fence can be installed in 1–3 days depending on the length, material, and terrain.",
      },
    ],
  },
  {
    slug: "yard",
    name: "Yard",
    shortDescription:
      "Lawn mowing, landscaping, and yard maintenance to keep your property looking its best.",
    description:
      "Keep your yard in top shape with qualified local landscapers matched through 709 Pros. Whether you need regular lawn mowing, seasonal cleanups, garden bed installation, or a full landscape overhaul, we connect you with professionals who know Newfoundland's growing conditions.",
    icon: "🌿",
    features: [
      "Lawn mowing & maintenance",
      "Spring & fall cleanups",
      "Garden bed installation",
      "Sod & seed installation",
      "Hedge & shrub trimming",
      "Landscape design",
    ],
    faq: [
      {
        question: "Do you match for one-time or recurring yard work?",
        answer:
          "Both. Whether you need a one-time cleanup or a contractor for weekly mowing throughout the season, we'll match you with the right pro.",
      },
      {
        question: "When does the mowing season start in Newfoundland?",
        answer:
          "The typical mowing season in Newfoundland runs from late May through October, depending on weather conditions in your area.",
      },
      {
        question: "Can I get landscaping and mowing from the same contractor?",
        answer:
          "Often, yes. Many contractors in our network offer both mowing and landscaping services. We'll match you based on your specific needs.",
      },
    ],
  },
];
