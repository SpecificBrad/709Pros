export interface Location {
  slug: string;
  name: string;
  region: string;
  description: string;
  nearby: string[];
}

export const locations: Location[] = [
  {
    slug: "st-johns",
    name: "St. John's",
    region: "Avalon Peninsula",
    description:
      "As Newfoundland's capital and largest city, St. John's is home to a diverse mix of heritage properties and modern builds. From the colourful rowhouses of downtown to the growing suburbs, 709 Pros serves homeowners across the entire St. John's metro area.",
    nearby: ["Mount Pearl", "Paradise", "Conception Bay South", "Torbay"],
  },
  {
    slug: "mount-pearl",
    name: "Mount Pearl",
    region: "Avalon Peninsula",
    description:
      "Mount Pearl is one of Newfoundland's most established residential communities, known for well-maintained family homes and active neighbourhood pride. 709 Pros helps Mount Pearl homeowners maintain and upgrade their properties with reliable, professional service.",
    nearby: ["St. John's", "Paradise", "Conception Bay South"],
  },
  {
    slug: "paradise",
    name: "Paradise",
    region: "Avalon Peninsula",
    description:
      "Paradise is one of the fastest-growing towns in Newfoundland, with new subdivisions and growing families. Whether your home is brand new or a few decades old, 709 Pros provides the renovation and improvement services Paradise homeowners need.",
    nearby: ["St. John's", "Mount Pearl", "Conception Bay South", "Topsail"],
  },
  {
    slug: "conception-bay-south",
    name: "Conception Bay South",
    region: "Avalon Peninsula",
    description:
      "Conception Bay South (CBS) stretches along the scenic coastline and offers a mix of newer developments and established homes. 709 Pros serves CBS homeowners with quality renovations, roofing, siding, and more — built to handle the coastal climate.",
    nearby: ["Paradise", "Holyrood", "Mount Pearl", "St. John's"],
  },
  {
    slug: "torbay",
    name: "Torbay",
    region: "Avalon Peninsula",
    description:
      "Torbay is a growing community just north of St. John's, offering a rural feel with easy city access. 709 Pros serves Torbay homeowners with everything from roof repairs to complete renovations, built to withstand the exposed coastal weather.",
    nearby: ["St. John's", "Flatrock", "Pouch Cove", "Logy Bay"],
  },
  {
    slug: "portugal-cove-st-philips",
    name: "Portugal Cove-St. Philip's",
    region: "Avalon Peninsula",
    description:
      "Nestled between St. John's and Conception Bay, Portugal Cove-St. Philip's is a scenic community with homes ranging from historic to newly built. 709 Pros delivers professional renovation and exterior services to homeowners throughout the area.",
    nearby: ["St. John's", "Paradise", "Torbay"],
  },
  {
    slug: "holyrood",
    name: "Holyrood",
    region: "Avalon Peninsula",
    description:
      "Located at the head of Conception Bay, Holyrood offers waterfront living and a tight-knit community. 709 Pros provides Holyrood homeowners with professional home improvements from roofing and siding to decks and interior renovations.",
    nearby: [
      "Conception Bay South",
      "Harbour Main",
      "Avondale",
      "Bay Roberts",
    ],
  },
  {
    slug: "bay-roberts",
    name: "Bay Roberts",
    region: "Avalon Peninsula",
    description:
      "Bay Roberts is a hub community on the western shore of Conception Bay, serving the surrounding towns. 709 Pros extends our quality renovation and exterior services to Bay Roberts and area homeowners who deserve top-tier workmanship.",
    nearby: ["Spaniards Bay", "Harbour Grace", "Holyrood", "Clarke's Beach"],
  },
  {
    slug: "harbour-grace",
    name: "Harbour Grace",
    region: "Avalon Peninsula",
    description:
      "Rich in history and character, Harbour Grace is home to many heritage and established residential properties. 709 Pros understands the unique needs of older and newer homes alike, providing professional services throughout Harbour Grace.",
    nearby: ["Carbonear", "Bay Roberts", "Spaniards Bay"],
  },
  {
    slug: "carbonear",
    name: "Carbonear",
    region: "Avalon Peninsula",
    description:
      "Carbonear is a regional service centre on the north shore of Conception Bay with a mix of residential, commercial, and heritage properties. 709 Pros serves Carbonear homeowners with the full range of renovation and exterior improvement services.",
    nearby: ["Harbour Grace", "Victoria", "Bay Roberts"],
  },
  {
    slug: "clarenville",
    name: "Clarenville",
    region: "Eastern Newfoundland",
    description:
      "Clarenville is the gateway to the Bonavista and Burin Peninsulas and a growing regional centre. 709 Pros serves Clarenville homeowners with professional renovation, roofing, siding, and more — quality workmanship backed by our reputation.",
    nearby: ["Random Island", "Shoal Harbour", "Milton"],
  },
  {
    slug: "gander",
    name: "Gander",
    region: "Central Newfoundland",
    description:
      "Known worldwide for its hospitality, Gander is a vibrant central Newfoundland community. 709 Pros proudly serves Gander homeowners with reliable renovation and home improvement services built for the region's climate.",
    nearby: ["Glenwood", "Appleton", "Gambo"],
  },
];
