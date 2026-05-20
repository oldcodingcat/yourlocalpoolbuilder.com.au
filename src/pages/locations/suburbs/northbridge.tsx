import LocationTemplate, { LocationConfig } from "@/components/locations/LocationTemplate";
import { offices } from "@/data/offices";

const config: LocationConfig = {
  name: "Northbridge",
  slug: "northbridge",
  region: "North Shore",
  regionSlug: "north-shore",
  heroImage: "/images/pergolas-2.jpg",
  heroTagline:
    "Family-backyard pergolas in Northbridge — leafy blocks, sloping sites, and outdoor structures planned around real use, trees, and access.",
  introImage: "/images/pergolas-4.jpg",
  whyChooseImage: "/images/decking.jpg",
  processImage: "/images/pergolas-5.jpg",
  aboutSuburb: [
    "Northbridge is a well-established Lower North Shore suburb where family homes, renovated classics, and generous rear gardens are common. Outdoor areas often serve as the everyday dining room, kids’ play zone, and weekend entertaining space rolled into one. A pergola here is usually less about street spectacle and more about making the backyard work harder through summer heat, sudden rain, and the rhythm of school-week evenings.",
    "Leafy canopy and side access paths shape many properties as much as the house façade does. That means pergola planning frequently intersects with shade patterns from mature trees, boundary fences, and sloping lawns that already carry visual structure. Homeowners typically want a solution that feels grounded in the block: practical, durable, and visually calm next to established planting.",
    "Because Northbridge sits within easy reach of harbourside suburbs but retains a quieter residential feel, projects often balance budget discipline with long-term quality. We approach those priorities by clarifying scope early and avoiding oversized structures that solve shade briefly but feel wrong in the garden within a season.",
    "Basketball hoops, trampolines, and shed corners are everyday realities in family backyards, and they influence where posts can sit without stealing usable lawn. We map those obstacles during the first walk so the pergola layout respects how the yard actually functions on Saturday afternoons.",
  ],
  whyChooseUsHere: [
    "Established suburbs need installers who are comfortable adapting to real sites, not forcing template layouts. We coordinate North Shore pergola work from our Turramurra office at 99 Eastern Rd, which helps with scheduling and clear communication when you are living at home during construction. If you want to talk through layout ideas before quoting, call (02) 5849 6376.",
    "We spend time on the items that matter on leafy blocks: post positions relative to roots and paving, how roof runoff behaves across sloping ground, and how the structure reads from the kitchen window. Those details are often what separates a pergola that feels settled from one that feels awkward after install.",
    "Quotes are written to be understood: inclusions, exclusions, and practical assumptions about access and staging. That transparency tends to suit families who want predictable timing and a professional tone throughout delivery.",
    "If you are planning a deck upgrade at the same time, we can discuss sequencing so posts, bearer lines, and roof connections stay coherent. Parallel scopes are easier when the pergola team and decking scope are aligned before concrete or footings are poured.",
  ],
  localConsiderations: [
    "Mature trees can create beautiful shade but also variable drip lines, leaf load, and occasional branch movement in wind. We plan roof edges and drainage intent with those realities in mind and discuss what maintenance you are comfortable with. Where specialist arborist advice is prudent, we say so plainly rather than guessing.",
    "Sloping blocks can change footing expectations, step heights, and how water moves across paved areas after rain. We review levels on site and keep hydraulic and structural questions scoped to what a pergola project typically covers, recommending qualified professionals when something sits outside standard installation work.",
    "Neighbour interfaces along side fences matter in tighter pockets. We think about sightlines, noise during construction, and how the finished roof reads from adjoining yards. The goal is a neighbour-respectful outcome that still delivers the comfort your household wants.",
    "Dog runs, clotheslines, and narrow side passages are small details that can decide whether a layout is livable. We note them during planning so the finished pergola does not accidentally remove a daily convenience your household still relies on.",
  ],
  ourProcess: [
    "The first visit reviews how you use the backyard, where sun sits at the times you care about, and what access path makes sense for materials. We also identify any features that must be protected during work, from irrigation lines to established beds. That visit produces a layout direction you can evaluate with real furniture zones in mind.",
    "We then refine roof type and material direction, document scope, and agree staging. If you are choosing between two viable options, we explain comfort and maintenance trade-offs in everyday language. Once approved, installation proceeds with predictable milestones and communication before disruptive stages.",
    "Handover includes a walkthrough of finished connections, guidance on sensible cleaning routines, and notes on what to watch after heavy rain. The aim is a pergola that fits Northbridge family life without creating a new maintenance burden you did not expect.",
    "Where children or pets use the yard daily, we also discuss safe edges, clear headroom under beams, and sensible gate swing clearances so the finished layout stays practical after the builders leave.",
  ],
  nearestOffice: offices.turramurra,
  coordinates: { lat: -33.8115, lng: 151.211 },
  siblings: [
    { name: "Castlecrag", slug: "castlecrag" },
    { name: "Longueville", slug: "longueville" },
    { name: "Mosman", slug: "mosman" },
    { name: "Roseville", slug: "roseville" },
    { name: "Lindfield", slug: "lindfield" },
    { name: "Hunters Hill", slug: "hunters-hill" },
  ],
  faqs: [
    {
      q: "Can you work around mature trees in Northbridge?",
      a: "Yes, within normal pergola scope. We plan post positions and roof edges with canopy, drip lines, and practical maintenance in mind. If a tree raises specialist questions, we recommend getting qualified advice before locking structural positions.",
    },
    {
      q: "What roof styles suit family backyards in Northbridge?",
      a: "Flat, skillion, and gable-style roofs each suit different layouts and comfort goals. Insulated panels can help when you want a cooler outdoor room, while open rafter designs suit different shade priorities. We match the roof style to how you use the space, not a one-size template.",
    },
    {
      q: "Do sloping blocks affect pergola design?",
      a: "Often yes. Slopes can change post heights, step transitions, and how runoff behaves across pavers or lawn. We measure levels on site and plan those transitions as part of the layout rather than treating them as afterthoughts.",
    },
    {
      q: "Are attached pergolas popular in Northbridge homes?",
      a: "Many clients choose attached pergolas where the indoor living area connects strongly to the rear yard, but freestanding can suit some layouts better. We compare both where practical and explain fixing and maintenance implications in plain terms.",
    },
    {
      q: "How do you approach drainage and runoff?",
      a: "We discuss where water should go in heavy rain relative to your paving, lawn, and thresholds. Where detailed hydraulic design is required beyond typical pergola scope, we recommend involving qualified professionals so the solution stays reliable long term. On sloping lawns, small changes in drip line placement can matter, so we prefer to confirm intent on site rather than assume from aerial imagery alone.",
    },
  ],
  galleryImages: [
    { src: "/images/gazebos.jpg", alt: "Outdoor gazebo and pergola structure in leafy Sydney yard" },
    { src: "/images/flat-roof.jpg", alt: "Flat roof pergola over family patio area" },
    { src: "/images/curved-roofs.jpg", alt: "Curved roof outdoor shelter design" },
  ],
};

const Northbridge = () => <LocationTemplate config={config} />;

export default Northbridge;
