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
      "As Newfoundland's capital and largest city, St. John's is home to a diverse mix of heritage properties and modern builds. From the colourful rowhouses of downtown to the growing suburbs, 709 Pros matches St. John's homeowners with qualified local contractors.",
    nearby: ["Mount Pearl", "Paradise", "Torbay", "Portugal Cove"],
  },
  {
    slug: "mount-pearl",
    name: "Mount Pearl",
    region: "Avalon Peninsula",
    description:
      "Mount Pearl is one of Newfoundland's most established residential communities, known for well-maintained family homes and active neighbourhood pride. 709 Pros connects Mount Pearl homeowners with trusted local contractors for any project.",
    nearby: ["St. John's", "Paradise", "Conception Bay South"],
  },
  {
    slug: "paradise",
    name: "Paradise",
    region: "Avalon Peninsula",
    description:
      "Paradise is one of the fastest-growing towns in Newfoundland, with new subdivisions and growing families. Whether your home is brand new or a few decades old, 709 Pros matches Paradise homeowners with the right contractors.",
    nearby: ["St. John's", "Mount Pearl", "Conception Bay South", "Portugal Cove"],
  },
  {
    slug: "torbay",
    name: "Torbay",
    region: "Avalon Peninsula",
    description:
      "Torbay is a growing community just north of St. John's, offering a rural feel with easy city access. 709 Pros connects Torbay homeowners with qualified contractors for roofing, siding, heat pumps, and more.",
    nearby: ["St. John's", "Portugal Cove"],
  },
  {
    slug: "conception-bay-south",
    name: "Conception Bay South",
    region: "Avalon Peninsula",
    description:
      "Conception Bay South (CBS) stretches along the scenic coastline and offers a mix of newer developments and established homes. 709 Pros matches CBS homeowners with local contractors ready to handle any project.",
    nearby: ["Paradise", "Mount Pearl", "St. John's"],
  },
  {
    slug: "portugal-cove",
    name: "Portugal Cove",
    region: "Avalon Peninsula",
    description:
      "Nestled between St. John's and Conception Bay, Portugal Cove is a scenic community with homes ranging from historic to newly built. 709 Pros connects Portugal Cove homeowners with qualified local contractors.",
    nearby: ["St. John's", "Paradise", "Torbay"],
  },
];
