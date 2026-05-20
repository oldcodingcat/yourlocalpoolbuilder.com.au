import AreaTemplate, { AreaConfig } from "@/components/locations/AreaTemplate";
import { offices } from "@/data/offices";

const config: AreaConfig = {
  area: "Western Sydney",
  slug: "western-sydney",
  heroImage: "/images/sunroof.jpg",
  heroTagline:
    "Pergola installation across Western Sydney - serving Blacktown, Castle Hill, Quakers Hill and the wider west from our Kenthurst office.",
  introImage: "/images/pergolas-4.jpg",
  whyChooseImage: "/images/pergolas-2.jpg",
  processImage: "/images/insulated-roofs.webp",
  aboutArea: [
    "Western Sydney is a large and rapidly growing region with diverse residential typologies, family-oriented suburbs, and strong demand for practical outdoor living improvements. Many homeowners prioritise comfort and functionality over purely decorative solutions. In many suburbs, homeowners prioritise robust comfort outcomes that hold up through long periods of hot weather.",
    "Compared with coastal areas, inland heat intensity often plays a bigger role in pergola design decisions. This makes orientation, roof strategy, and ventilation planning central to long-term usability. We therefore evaluate shade depth, orientation, and roof behaviour together rather than treating each decision separately.",
    "Across newer developments and established suburbs, clients typically want durable structures that support frequent everyday use through long summer periods. This performance-first mindset supports everyday usability across both new estates and established neighbourhoods.",
  ],
  whyChooseUsHere: [
    "Western Sydney projects are coordinated from our Kenthurst office, giving us practical regional coverage and structured scheduling across a broad set of suburbs. Our Kenthurst office provides practical coverage for regional scheduling and coordinated site management.",
    "We focus on design pathways that are performance-led, helping households choose coverage and airflow strategies that match real local conditions and family routines. We also guide households through option comparisons with a focus on real comfort and maintenance outcomes.",
    "If you want to review options for your suburb and block, call (02) 5849 6376 and we can discuss the most practical direction before detailed scope is fixed. That local planning structure helps projects stay predictable across a broad geographic footprint.",
  ],
  localChallenges: [
    "The primary challenge in Western Sydney is managing heat without creating stagnant, uncomfortable covered zones. We solve this by balancing shade depth, roof type, and ventilation pathways as a combined system. Heat and airflow must be balanced carefully so covered zones remain comfortable instead of becoming trapped hot pockets.",
    "Another challenge is regional spread and varied site conditions, which can affect logistics and staging. We plan delivery structure carefully so projects remain efficient across longer travel and coordination demands. Longer travel distances and varied block conditions also require stronger logistics planning before installation begins.",
    "Homes in growth corridors may also be staged alongside future outdoor upgrades. We account for this by recommending layouts that can evolve without major structural rework. These decisions are especially relevant for families using outdoor areas regularly through summer.",
  ],
  ourProcess: [
    "Our process starts with a consultation focused on climate performance, site orientation, and intended household use. This establishes clear priorities before material and roof options are narrowed. Consultation starts with climate and usage priorities so technical choices support daily routines from the outset.",
    "Next, we refine scope and system selection, with cautious guidance where approvals conversations may be relevant. Requirements can vary, so formal confirmation should come from council and qualified professionals. If approvals are relevant, we explain likely pathways and encourage formal confirmation through council and professionals.",
    "Installation is delivered through clear milestones and communication checkpoints, helping households plan confidently around each stage and expected timeline. Staged updates during construction keep households informed and make timeline coordination much easier.",
  ],
  nearestOffice: offices.kenthurst,
  suburbs: [
    { name: "Blacktown", slug: "blacktown" },
    { name: "Quakers Hill", slug: "quakers-hill" },
    { name: "Seven Hills", slug: "seven-hills" },
    { name: "Riverstone", slug: "riverstone" },
    { name: "Kellyville Ridge", slug: "kellyville-ridge" },
    { name: "Rouse Hill", slug: "rouse-hill" },
    { name: "Schofields", slug: "schofields" },
  ],
  faqs: [
    {
      q: "How do you design for Western Sydney's hot summers?",
      a: "We design for shade performance and airflow together, so the pergola remains comfortable through prolonged high-temperature periods. This recommendation prioritises Western Sydney climate comfort and practical durability for everyday household use.",
    },
    {
      q: "Which materials handle extreme heat best?",
      a: "Suitability depends on full system design. We compare options based on heat behaviour, durability, and maintenance for your specific site. This recommendation prioritises Western Sydney climate comfort and practical durability for everyday household use.",
    },
    {
      q: "Do you travel to Western Sydney suburbs from your offices?",
      a: "Yes. Western Sydney is coordinated from our Kenthurst office with structured coverage across a wide area. This recommendation prioritises Western Sydney climate comfort and practical durability for everyday household use.",
    },
    {
      q: "What is typical timing for installations in the west?",
      a: "Timing varies by scope and complexity, but we provide staged planning so each phase is clear and predictable. This recommendation prioritises Western Sydney climate comfort and practical durability for everyday household use.",
    },
    {
      q: "Can we plan before requesting a full quote?",
      a: "Absolutely. Call (02) 5849 6376 and we can discuss priorities and practical options before final scope decisions. This recommendation prioritises Western Sydney climate comfort and practical durability for everyday household use.",
    },
  ],
};

const WesternSydney = () => <AreaTemplate config={config} />;

export default WesternSydney;
