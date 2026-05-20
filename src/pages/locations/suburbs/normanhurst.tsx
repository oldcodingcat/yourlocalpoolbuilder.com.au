import LocationTemplate, { LocationConfig } from "@/components/locations/LocationTemplate";
import { offices } from "@/data/offices";

const config: LocationConfig = {
  name: "Normanhurst",
  slug: "normanhurst",
  region: "North Shore",
  regionSlug: "north-shore",
  heroImage: "/images/flat-roof.jpg",
  heroTagline:
    "Normanhurst pergolas built for real family life — clear quotes, practical roof choices, and outdoor cover that improves everyday comfort without overspending on the wrong details.",
  introImage: "/images/pergolas-4.jpg",
  whyChooseImage: "/images/sunroof.jpg",
  processImage: "/images/decking.jpg",
  aboutSuburb: [
    "Normanhurst is a leafy Upper North Shore suburb where families renovate in stages and expect outdoor upgrades to earn their keep through weekly use. Pergolas here are often motivated by straightforward goals: shade for the table, cover for the barbecue, and a drier path when weather turns quickly. The tone is practical: homeowners want a structure that works, lasts, and fits the house without turning the backyard into a construction statement.",
    "Blocks can still be sloped, tree-lined, and shaped by side access that is only just workable for materials. That means good outcomes depend on early decisions about post positions, roof height, and how water moves across paving or lawn after rain. We treat those items as standard planning work, not optional extras discovered on install day.",
    "Many homes combine older roof lines with newer extensions, so the pergola interface at the house wall needs careful thought. We measure what is actually built rather than assuming plans are current, then propose transitions that look intentional and remain serviceable.",
    "Weeknight routines still dominate: quick dinners outside, kids moving through gates, and washing brought under cover when drizzle arrives. A Normanhurst pergola should make those ordinary moments easier, not only impress on inspection day.",
  ],
  whyChooseUsHere: [
    "Normanhurst suits a realistic process: compare a small set of viable options, lock scope clearly, and deliver without drama. North Shore pergola work is coordinated from our Turramurra office at 99 Eastern Rd, which keeps scheduling and communication straightforward for local families. If you want help prioritising spend, call (02) 5849 6376.",
    "We focus on value decisions: where a slightly better specification saves maintenance later, and where a standard detail is perfectly adequate. That approach tends to suit households balancing school-term logistics, renovation budgets, and a desire for a finished outdoor area that actually gets used.",
    "Quotes are written to be understood—what is included, what access we assumed, and what still needs your selection—so you can compare apples to apples and proceed with confidence.",
    "We are straightforward about sequencing when you are living on site: when noise peaks, when access will be tight, and when fix-off needs clear bench space. Predictable communication reduces stress for busy households.",
  ],
  localConsiderations: [
    "Sloping lawns and stepped paths can change footing intent and how roof runoff behaves. We review levels on site and keep hydraulic expectations scoped to typical pergola work, recommending qualified professionals when something needs detailed stormwater design beyond standard installation.",
    "Tree shade and leaf drop influence how often you will clean gutters or channels if you choose a fully sheeted roof. We discuss those routines honestly so expectations stay realistic after the first autumn cycle.",
    "Tighter renovation budgets sometimes mean phasing: pergola first, paving or deck later—or the reverse. We can note sequencing assumptions in scope so later trades are not boxed in by early decisions you did not intend to be permanent.",
    "Approvals questions can appear on some lots depending on visibility and what is already built. Requirements vary, so we recommend confirming obligations with council and qualified professionals when there is any uncertainty.",
    "Dog runs, clotheslines, and narrow side gates still matter; we note them during planning so the pergola does not remove a convenience your household relies on every week.",
    "Garage access and bin night routes are small but real; we keep them visible in layout discussions so the finished pergola does not accidentally pinch a path you still need weekly.",
    "Older drainage patterns sometimes show up only after heavy rain; if you have known trouble spots, telling us early helps weathertight intent stay aligned with what you already observe on site.",
  ],
  ourProcess: [
    "We start with a visit focused on how you use the yard through the week, where shade matters at meal times, and what access path makes sense for materials. We note retaining walls, services locations, and any features that must be protected during work. That visit produces a layout direction grounded in real routines.",
    "Next we refine roof type and finishes, then document scope with staged milestones. If two options are close in price, we explain maintenance and comfort differences in plain language. Once approved, installation proceeds with predictable communication before disruptive stages.",
    "At handover we review finished edges, discuss sensible cleaning routines, and confirm drainage intent where relevant. The aim is a Normanhurst backyard that feels easier to use immediately, without hidden upkeep surprises.",
    "If you plan to extend paving later, we can note edge clearances so future work does not undermine post footings or trap water against thresholds.",
  ],
  nearestOffice: offices.turramurra,
  coordinates: { lat: -33.704, lng: 151.095 },
  siblings: [
    { name: "Wahroonga", slug: "wahroonga" },
    { name: "Lindfield", slug: "lindfield" },
    { name: "Roseville", slug: "roseville" },
    { name: "Castlecrag", slug: "castlecrag" },
    { name: "Northbridge", slug: "northbridge" },
    { name: "Turramurra", slug: "turramurra" },
  ],
  faqs: [
    {
      q: "What pergola options work well for Normanhurst family homes?",
      a: "Practical roof strategies that match daily use—shade for dining, cover near the barbecue, and sensible materials for leaf load and weather—usually perform best. We help you choose based on your priorities rather than a single default style. If school-term noise matters, we can also discuss sequencing so disruptive stages land outside key exam weeks when you tell us your constraints.",
    },
    {
      q: "Can you help balance budget, function and appearance?",
      a: "Yes. We identify where upgraded specification pays off in durability and where standard details are enough. The goal is a result you are happy to live with, not a quote padded with items you will not notice. We can also stage scope if you want the core shelter first and optional finishes later.",
    },
    {
      q: "Do trees and sloping sites affect design in Normanhurst?",
      a: "Often yes. Trees influence shade and maintenance, while slopes influence levels and runoff. We measure on site and plan transitions as part of the layout rather than treating them as afterthoughts. If your lawn pitches toward the house, we pay extra attention to drip and threshold behaviour during planning.",
    },
    {
      q: "Are attached pergolas popular in Normanhurst?",
      a: "Many clients choose attached pergolas where the living area opens strongly to the yard, but freestanding suits some layouts better. We compare both where practical and explain fixing implications clearly.",
    },
    {
      q: "Is Turramurra your nearest office for Normanhurst projects?",
      a: "Yes. Normanhurst pergola work is coordinated from our Turramurra office for scheduling, site visits, and delivery communication through to handover. The same office supports neighbouring Upper North Shore suburbs for consistent scheduling.",
    },
  ],
  galleryImages: [
    { src: "/images/gazebos.jpg", alt: "Outdoor gazebo and pergola in family backyard" },
    { src: "/images/patios.jpg", alt: "Covered patio area with pergola structure" },
    { src: "/images/pergolas-2.jpg", alt: "Pergola installation over outdoor dining space" },
  ],
};

const Normanhurst = () => <LocationTemplate config={config} />;

export default Normanhurst;
