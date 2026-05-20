import LocationTemplate, { LocationConfig } from "@/components/locations/LocationTemplate";
import { offices } from "@/data/offices";

const config: LocationConfig = {
  name: "Castlecrag",
  slug: "castlecrag",
  region: "North Shore",
  regionSlug: "north-shore",
  heroImage: "/images/curved-roofs.jpg",
  heroTagline:
    "Design-sensitive pergolas in Castlecrag — bushland context, complex levels, and outdoor structures that respect architecture, views, and the natural setting.",
  introImage: "/images/pergolas-5.jpg",
  whyChooseImage: "/images/pergolas.jpeg",
  processImage: "/images/pergolas-3.jpg",
  aboutSuburb: [
    "Castlecrag is known for its strong design identity, sandstone outcrops, and blocks that step with the landscape rather than sitting flat like a textbook site plan. Homes here are often carefully composed, with outdoor areas treated as part of the overall architectural idea. A pergola in Castlecrag is rarely just shade: it is a structure that must sit quietly within views, rock, and established planting without looking like a generic kit dropped onto a sensitive setting.",
    "Outdoor living still needs to work practically—dining, seating, circulation, and weather protection—but the visual bar is high. Homeowners typically care about post rhythm, roof profile, and how the structure reads against sandstone, timber decks, and native canopy. That means early decisions about footprint and height matter more than last-minute trim details.",
    "Access can be constrained by driveways, levels, and retained walls, which affects how materials arrive and how staging is sequenced. We treat access and protection of existing finishes as part of the project plan from day one, not as improvisation on the day materials arrive.",
    "Many Castlecrag homes already include considered landscape architecture. A pergola should respect those lines: where paths curve, where focal planting sits, and where the eye naturally rests when you step outside. That respect is part of making the structure feel native to the block.",
  ],
  whyChooseUsHere: [
    "Castlecrag suits a team that is comfortable slowing down enough to align structure with context: proportion first, product labels second. North Shore pergola projects are coordinated from our Turramurra office at 99 Eastern Rd, supporting site visits and clear decision checkpoints while design direction is still flexible. For an initial conversation about your site, call (02) 5849 6376.",
    "We focus on disciplined detailing at the house connection, at changes in level, and at roof perimeters where the structure meets sky and landscape. Those junctions are where design-sensitive suburbs reward careful work—and where rushed work becomes obvious quickly.",
    "Our quoting reflects complexity honestly: if your site needs additional coordination, we say so early. The goal is fewer surprises and a delivery tone that matches the expectations of architecturally aware homeowners.",
    "If you are working with a designer or architect, we can align shop drawings and site tolerances with their intent so the built pergola matches the agreed concept. Clear correspondence reduces rework when lines on paper meet real rock and real levels.",
  ],
  localConsiderations: [
    "Topography and rock can influence footing positions, post heights, and how beams run relative to natural ground. We assess what is visible on site and recommend involving qualified structural or geotechnical professionals when something sits outside typical pergola installation assumptions. We keep that guidance cautious because every block differs.",
    "Bushland adjacency can raise questions about materials, ember awareness in general terms, and maintenance access along steep paths. We discuss practical finish choices and sensible housekeeping routines without inventing property-specific rules. Where local controls may apply, we recommend confirming requirements through formal channels.",
    "Visual sensitivity often means lighter-looking structures outperform heavy bulk, even when both are structurally valid. We compare roof profiles and support layouts with your outlook lines and neighbour sightlines in mind, aiming for comfort without a dominating silhouette.",
    "Night-time lighting can change how a pergola reads from the street and from internal living spaces. We can discuss discreet lighting approaches that support usability without turning the roof plane into a bright billboard after dark.",
    "Seasonal leaf drop and bark shed from native canopy can influence gutter behaviour if you choose a fully sheeted roof. We discuss realistic cleaning intervals so you are not surprised by maintenance after the first autumn storm cycle.",
  ],
  ourProcess: [
    "We open with a site walk that prioritises levels, access, key views from living areas, and how you want to furnish the outdoor zone. We photograph critical interfaces and discuss roof strategies that suit both comfort and context. The outcome is a direction you can evaluate before detailed pricing is fixed.",
    "We then refine structure type, material finishes, and written scope, including staging assumptions for tight access. If multiple options remain viable, we spell out trade-offs in plain language. Once approved, installation follows a careful sequence with communication before disruptive stages.",
    "Handover focuses on precision at edges, clean weathertight intent where the pergola meets the house or freestanding posts meet paving, and guidance on maintenance that matches your material choices. The aim is a finished structure that feels at home in Castlecrag’s design context.",
    "If your project timeline includes other exterior upgrades, we can align pergola milestones with scaffold windows, painter access, or new paving pours so the sequence stays efficient and finishes are not damaged by rework.",
  ],
  nearestOffice: offices.turramurra,
  coordinates: { lat: -33.805, lng: 151.228 },
  siblings: [
    { name: "Northbridge", slug: "northbridge" },
    { name: "Longueville", slug: "longueville" },
    { name: "Roseville", slug: "roseville" },
    { name: "Mosman", slug: "mosman" },
    { name: "Lindfield", slug: "lindfield" },
    { name: "Hunters Hill", slug: "hunters-hill" },
  ],
  faqs: [
    {
      q: "Do you design pergolas for architecturally sensitive Castlecrag homes?",
      a: "Yes. We prioritise proportion, roof profile, and junction detailing so the pergola reads as part of the property’s design language. We can compare options with you based on your architecture, levels, and how you plan to use the outdoor space, including how the structure reads from key internal viewpoints.",
    },
    {
      q: "Can you work with challenging topography?",
      a: "Often yes, within normal pergola scope. Steep or stepped sites usually need careful planning for post positions, beam runs, and safe staging. Where engineering input is advisable, we recommend involving qualified professionals early. We also think about how workers will move materials safely without damaging finished surfaces that are expensive to repair.",
    },
    {
      q: "What pergola styles best suit Castlecrag properties?",
      a: "The best style is the one that matches your home’s lines and the block’s levels while delivering the shade and weather cover you need. We frequently compare low-profile roofs, integrated insulated panels, and lighter freestanding layouts depending on outlook and access.",
    },
    {
      q: "Are lightweight structures sometimes better visually?",
      a: "Sometimes, yes. In visually sensitive settings, a slimmer roof edge and disciplined post spacing can achieve comfort without a heavy presence. We discuss those trade-offs on site with your priorities in mind.",
    },
    {
      q: "How early should design planning begin?",
      a: "Earlier planning usually reduces costly changes later, especially on complex blocks. If you are renovating concurrently, aligning pergola decisions with other trades also saves time. A phone call to (02) 5849 6376 can be enough to map sensible next steps before you lock other finishes, particularly when roof lines, paving levels, and services routes are still flexible.",
    },
  ],
  galleryImages: [
    { src: "/images/insulated-roofs.webp", alt: "Insulated roof pergola with clean fascia lines" },
    { src: "/images/patios.jpg", alt: "Covered patio structure adjoining residence" },
    { src: "/images/carports.jpg", alt: "Carport and outdoor structure steel framing example" },
  ],
};

const Castlecrag = () => <LocationTemplate config={config} />;

export default Castlecrag;
