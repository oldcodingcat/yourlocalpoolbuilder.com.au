import LocationTemplate, { LocationConfig } from "@/components/locations/LocationTemplate";
import { offices } from "@/data/offices";

const config: LocationConfig = {
  name: "Roseville",
  slug: "roseville",
  region: "North Shore",
  regionSlug: "north-shore",
  heroImage: "/images/pergolas-2.jpg",
  heroTagline:
    "Roseville pergolas for leafy family homes — everyday backyard comfort, durable materials, and layouts sized for real outdoor living rather than showpiece street frontage.",
  introImage: "/images/carports.jpg",
  whyChooseImage: "/images/sunroof.jpg",
  processImage: "/images/gazebos.jpg",
  aboutSuburb: [
    "Roseville reads as a quiet, leafy North Shore suburb where families stay long enough for gardens to mature and backyards to become the centre of weekend life. Pergolas here are usually about improving daily usability: shade for the lunch table, cover for the barbecue zone, and a dry path when weather turns quickly. The tone is less harbourside spectacle and more dependable family comfort with a high bar for workmanship.",
    "Street trees and side setbacks shape many blocks, which means pergola planning often intersects with shade patterns, neighbour fences, and side access that is only just wide enough for materials. Homeowners typically want a structure that feels generous without stealing lawn space from kids, pets, and weekend sport. That balance is where proportion matters more than picking the largest roof module available.",
    "Renovations and extensions are common, so pergolas frequently need to coordinate with new paving, refreshed decks, or updated rear façades. We treat those interfaces as part of the scope conversation early so finishes line up and the outdoor zone feels like one coherent project rather than two competing ideas.",
    "Basketball rings, trampolines, and cubby corners still matter in family yards. We note them during planning so posts and beam runs do not steal the last patch of usable lawn or create headroom conflicts where kids move quickly.",
  ],
  whyChooseUsHere: [
    "Established suburbs reward patient planning: measuring real use, not only dimensions on a plan. North Shore pergola work is coordinated from our Turramurra office at 99 Eastern Rd, which supports practical scheduling for Roseville site visits and clear updates while your household keeps living at home. To talk through options before you lock materials, call (02) 5849 6376.",
    "We focus on long-term value: sensible specification, tidy installation, and quoting that states what is included so you are not negotiating surprises mid-build. Roseville clients often care about how the pergola will look after a few seasons of weather and leaf drop, not only on handover day.",
    "If you are weighing attached versus freestanding, we compare both where your layout allows and explain maintenance and fixing implications in plain language. The right answer is usually the one that matches circulation, outlook, and how you want furniture to sit under cover.",
    "We also keep neighbour noise and access courtesy in mind during staging, especially on tighter side paths where deliveries can interrupt adjacent driveways. Predictable communication reduces friction while works are underway.",
  ],
  localConsiderations: [
    "Mature canopy can create beautiful shade but also uneven light, leaf load, and occasional branch movement in wind. We plan roof edges and any integrated guttering with those realities in mind and discuss cleaning expectations honestly. Where root protection or canopy work needs specialist input, we recommend involving qualified professionals before posts are finalised.",
    "Orientation varies street to street, so the same roof type can feel different on adjacent blocks. We review sun paths on site rather than guessing from aerial imagery alone, especially where you want afternoon shade without losing morning light on the kitchen windows.",
    "Some properties sit close enough to neighbours that roof height and post positions affect privacy and sightlines. We keep those interfaces in mind during layout so improved comfort does not create an avoidable neighbour tension. Requirements around approvals can vary; we recommend confirming project-specific obligations with council when in doubt.",
    "Larger furniture settings—outdoor lounges, long tables, and play equipment—often define the minimum workable footprint. We map those zones during planning so the finished pergola does not feel tight the first time you set the table for guests.",
    "Seasonal wind corridors can differ between front and rear yards on some blocks; a calm day at quoting time is not always representative. We discuss how exposed your seated area feels in a breeze so hardware and roof edge choices stay sensible year round.",
  ],
  ourProcess: [
    "Our first step is a backyard walkthrough: where shade matters at meal times, how you move from the kitchen to the yard, and what must remain untouched during construction. We measure access for materials and identify staging assumptions so the quote reflects real site conditions.",
    "We then propose a layout direction, refine roof and material choices, and document scope with staged milestones. If multiple options remain viable, we explain comfort and maintenance trade-offs without pushing a default. Once you approve, installation follows a clear sequence with communication before noisy stages.",
    "Handover includes a review of finished connections, notes on sensible upkeep for your chosen materials, and guidance on what to watch after heavy rain. The goal is a Roseville backyard that feels easier to use every week of the year.",
    "If you intend to add outdoor heating or ceiling fans later, we can flag sensible fixing assumptions during structure planning so upgrades do not require dismantling primary beams.",
  ],
  nearestOffice: offices.turramurra,
  coordinates: { lat: -33.787, lng: 151.178 },
  siblings: [
    { name: "Lindfield", slug: "lindfield" },
    { name: "Wahroonga", slug: "wahroonga" },
    { name: "Normanhurst", slug: "normanhurst" },
    { name: "Castlecrag", slug: "castlecrag" },
    { name: "Northbridge", slug: "northbridge" },
    { name: "Longueville", slug: "longueville" },
  ],
  faqs: [
    {
      q: "Can you design pergolas for leafy Roseville properties?",
      a: "Yes. We plan around canopy, side access, and everyday backyard use so the pergola improves comfort without fighting the garden. Proportion and post rhythm are usually central to a good outcome. We also think about how the structure reads from the kitchen sink window, because that is the view many Roseville owners see most often.",
    },
    {
      q: "Do mature trees affect pergola placement?",
      a: "Often yes. Trees influence shade, drip lines, and sometimes where posts can sit safely. We discuss those factors early and recommend specialist advice when arborist input is prudent. We also think about leaf load if you choose a fully sheeted roof, because cleaning access should stay practical.",
    },
    {
      q: "What pergola styles suit established Roseville homes?",
      a: "Calm roof profiles and finishes that match your existing palette usually suit established streetscapes. We compare options based on how you use the space and how much maintenance you want long term.",
    },
    {
      q: "Are attached pergolas common in Roseville?",
      a: "Many clients choose attached pergolas where the indoor living area opens strongly to the yard, but freestanding can suit some layouts better. We compare both where practical and explain fixing implications clearly.",
    },
    {
      q: "Is Turramurra your nearest office for Roseville jobs?",
      a: "Yes. Roseville pergola projects are coordinated from our Turramurra office for scheduling, site visits, and delivery communication through to handover.",
    },
  ],
  galleryImages: [
    { src: "/images/pergolas-5.jpg", alt: "Family backyard pergola with covered dining zone" },
    { src: "/images/patios.jpg", alt: "Patio and pergola combination in leafy Sydney suburb" },
    { src: "/images/flat-roof.jpg", alt: "Low-profile flat roof pergola over outdoor seating" },
  ],
};

const Roseville = () => <LocationTemplate config={config} />;

export default Roseville;
