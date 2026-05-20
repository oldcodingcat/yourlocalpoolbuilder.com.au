import LocationTemplate, { LocationConfig } from "@/components/locations/LocationTemplate";
import { offices } from "@/data/offices";

const config: LocationConfig = {
  name: "Wahroonga",
  slug: "wahroonga",
  region: "North Shore",
  regionSlug: "north-shore",
  heroImage: "/images/curved-roofs.jpg",
  heroTagline:
    "Upper North Shore pergolas in Wahroonga — larger outdoor living, premium finishes, and structures planned for generous gardens, tree canopy, and long-term family use.",
  introImage: "/images/pergolas-5.jpg",
  whyChooseImage: "/images/patios.jpg",
  processImage: "/images/insulated-roofs.webp",
  aboutSuburb: [
    "Wahroonga sits in the Upper North Shore band where blocks are often wide, gardens are deep, and homes are built for long family chapters rather than short renovation cycles. Outdoor projects here can be more ambitious: multiple zones under one roof line, integrated outdoor kitchens, or a covered area that genuinely behaves like an extra room. That scale pushes pergola decisions toward proportion, roof performance, and finish quality rather than minimum viable shade.",
    "Tree canopy and established landscaping are part of the setting, not optional decoration. Pergolas frequently need to respect root zones, drip lines, and the visual rhythm of mature planting while still delivering reliable cover. Homeowners usually want a result that feels premium without looking fussy: clean lines, consistent materials, and transitions that read intentional from both the lawn and upper-level windows.",
    "Because properties can be set well back from the street, access and staging deserve early thought. Long runs of materials, careful protection of driveways, and sequencing that avoids trapping other trades are normal parts of delivery planning on larger blocks.",
    "Integrated outdoor kitchens, long dining settings, and lounge groupings are common; the pergola footprint often needs to follow furniture intent rather than the other way around. We prefer to confirm those zones early so beam lines and posts do not land where you planned a bench or fridge run.",
    "Sport screens, speakers, and ceiling fans are frequent add-ons; mentioning them during structure planning helps keep fixing routes sensible before roof sheets close in the layout.",
  ],
  whyChooseUsHere: [
    "Larger projects benefit from a team comfortable with scope discipline: clear milestones, staged communication, and quoting that reflects real access assumptions. North Shore pergola work is coordinated from our Turramurra office at 99 Eastern Rd, which is operationally coherent for Wahroonga scheduling and site follow-up. To discuss priorities before you lock finishes, call (02) 5849 6376.",
    "We help you compare roof strategies and material palettes with long-term maintenance in mind, not only first-cost. Upper North Shore clients often care about how surfaces age, how gutters behave under leaf load, and how the pergola reads in winter light as well as summer glare.",
    "Premium does not have to mean complicated. We aim for solutions that are buildable, serviceable, and easy to explain—so expectations stay aligned from deposit through handover.",
    "If your project includes upgraded lighting, heaters, or audio, coordinating fixing assumptions during structure planning usually avoids costly retrofitting through roof sheets after fix-off.",
    "Where you expect frequent entertaining, we discuss durable floor finishes at transitions and sensible paths for trolleys and bins so the pergola supports real routines, not only styled photos.",
  ],
  localConsiderations: [
    "Wide spans can influence beam depth, post spacing, and footing intent. We keep structural guidance conservative and recommend involving qualified engineers when a proposal steps outside typical pergola assumptions. We avoid definitive claims because every lot differs.",
    "Leaf load and canopy debris can change maintenance routines for fully sheeted roofs. We discuss realistic cleaning intervals and gutter behaviour so you are not surprised after the first heavy storm season. Where canopy management needs specialist input, we recommend it early.",
    "Orientation across a large yard can create multiple microclimates. We review where shade matters at different times of day so the pergola improves the zones you actually use, rather than covering the least useful corner because it was easiest to draw.",
    "Planning questions may arise depending on visibility, height, and what is already built. Requirements vary, so we recommend confirming project-specific obligations with council and qualified professionals when there is any uncertainty.",
    "Large lawns can change wind behaviour compared with compact courtyards; we discuss how exposed your seated area feels so roof edge and screening choices stay realistic through the year.",
  ],
  ourProcess: [
    "We begin with a consultation that maps zones: dining, lounge, circulation, and any future additions you already have in mind. We measure access for materials, note retaining levels, and photograph key interfaces at the house. That visit anchors the layout in real use rather than generic dimensions.",
    "We then refine roof options, structural intent, and finishes, and document scope with staged delivery assumptions. If you are choosing between two viable premium pathways, we spell out upkeep and comfort differences plainly. Once approved, installation proceeds with predictable communication before disruptive stages.",
    "Handover includes a walkthrough of finished edges, guidance on sensible maintenance for your chosen materials, and notes on drainage intent where relevant. The aim is a Wahroonga outdoor space that feels complete and proportionate to the property.",
    "Where phased landscaping follows construction, we note edge protection and drip expectations so new beds do not undermine post bases or create unintended water paths toward thresholds.",
  ],
  nearestOffice: offices.turramurra,
  coordinates: { lat: -33.718, lng: 151.116 },
  siblings: [
    { name: "Normanhurst", slug: "normanhurst" },
    { name: "Lindfield", slug: "lindfield" },
    { name: "Roseville", slug: "roseville" },
    { name: "Castlecrag", slug: "castlecrag" },
    { name: "Northbridge", slug: "northbridge" },
    { name: "Turramurra", slug: "turramurra" },
  ],
  faqs: [
    {
      q: "Do you build larger pergolas for Wahroonga homes?",
      a: "Yes, where the layout supports it. Larger structures need disciplined proportion and sensible structural intent. We plan post rhythm and roof edges so the result feels generous without becoming visually heavy. We also think about long material runs and crane-free access assumptions so staging stays realistic on deep blocks.",
    },
    {
      q: "What pergola styles suit Upper North Shore properties?",
      a: "Styles vary with architecture and comfort goals. We commonly compare insulated outdoor rooms, cleaner aluminium profiles, and lighter roof strategies depending on shade priorities and maintenance appetite.",
    },
    {
      q: "Can you design around mature gardens and larger blocks?",
      a: "Yes. We plan around canopy, access paths, and existing features so the build sequence stays practical and the finished layout respects the garden context. On large blocks, we also think about how workers move materials without repeatedly crossing the same lawn strips.",
    },
    {
      q: "Are premium finishes common in Wahroonga projects?",
      a: "Many clients choose upgraded finishes where they will be seen daily and touched often. We help you decide where premium spend adds durability and where standard specification is enough. We also discuss coating expectations when outdoor metals will be touched often by wet hands near pools or spas.",
    },
    {
      q: "Is Turramurra your nearest office for Wahroonga?",
      a: "Yes. Wahroonga pergola projects are coordinated from our Turramurra office for scheduling, site visits, and delivery communication through to handover. That local coordination helps when weather windows shift and staging needs a quick decision.",
    },
  ],
  galleryImages: [
    { src: "/images/pergolas-3.jpg", alt: "Wide backyard pergola with premium outdoor living layout" },
    { src: "/images/gazebos.jpg", alt: "Garden gazebo and covered outdoor entertaining" },
    { src: "/images/flat-roof.jpg", alt: "Flat roof pergola spanning large rear terrace" },
  ],
};

const Wahroonga = () => <LocationTemplate config={config} />;

export default Wahroonga;
