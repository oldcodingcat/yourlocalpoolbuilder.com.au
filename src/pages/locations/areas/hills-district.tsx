import AreaTemplate, { AreaConfig } from "@/components/locations/AreaTemplate";
import { offices } from "@/data/offices";

const config: AreaConfig = {
  area: "Hills District",
  slug: "hills-district",
  heroImage: "/images/pergolas-2.jpg",
  heroTagline:
    "Pergola installation across the Hills District - serving Castle Hill, Baulkham Hills, Kellyville and beyond from our Kenthurst office.",
  introImage: "/images/pergolas-5.jpg",
  whyChooseImage: "/images/decking.jpg",
  processImage: "/images/flat-roof.jpg",
  aboutArea: [
    "The Hills District is known for larger residential blocks, family-oriented suburbs, and properties that can support substantial outdoor living zones. Pergola projects here often involve broader footprints and multi-purpose layouts for dining, lounging, and entertaining. Larger backyards here often allow more ambitious layouts, but they still benefit from disciplined planning and zoning.",
    "Across both newer developments and semi-rural pockets, homeowners typically seek structures that are practical year-round and compatible with contemporary home designs or acreage-style settings. We therefore focus on creating covered areas that feel generous without becoming oversized or disconnected from the home.",
    "Because lot sizes and exposure conditions vary significantly across the district, successful outcomes depend on site-specific planning rather than copy-paste assumptions. This balance is especially useful for families who want spaces that support both daily use and weekend entertaining.",
  ],
  whyChooseUsHere: [
    "Hills District projects are coordinated from our Kenthurst office, which gives us a practical local base for site access, scheduling, and responsive communication across surrounding suburbs. Kenthurst coordination helps us manage site visits and logistics efficiently across suburban and semi-rural pockets.",
    "We have strong experience delivering larger outdoor configurations in this area, including layouts designed for family use and frequent hosting. That experience helps us balance coverage, circulation, and visual proportion. We also bring practical insight into sequencing projects when clients are upgrading multiple outdoor elements over time.",
    "If you want to discuss options for a larger backyard or acreage-style property, call (02) 5849 6376 and we can map out practical priorities before formal quoting. That planning support helps households avoid expensive changes once fabrication has started.",
  ],
  localChallenges: [
    "A common challenge in the Hills is deciding how much structure is enough. Bigger blocks can support larger spans, but oversized design without zoning can reduce comfort and visual cohesion. We address this with use-based layout planning. Inland exposure patterns can shift comfort outcomes, so orientation and roof decisions are reviewed carefully before build.",
    "Inland wind and seasonal heat also influence roof and orientation choices. We account for these conditions so spaces remain usable rather than overexposed in peak weather. For acreage properties, delivery access and installation staging are planned to keep works efficient and predictable.",
    "For semi-rural sites, logistics and staging can be more complex than standard suburban jobs. We plan delivery and sequencing accordingly to keep construction efficient. These practical steps usually improve both build flow and final usability.",
  ],
  ourProcess: [
    "We start with a consultation focused on block context, usage goals, and how the pergola should connect to existing indoor-outdoor movement. This establishes a clear design brief before material decisions are finalised. Our consultation phase also maps how family routines and guest hosting should function across different weather conditions.",
    "Next, we compare design pathways and prepare practical scope detail, including cautious guidance around any approvals discussions where relevant. Requirements can vary, so formal confirmation should be made with council and qualified professionals. Where approvals discussions arise, we provide careful guidance and recommend formal checks through the right channels.",
    "Installation proceeds through staged milestones with clear communication checkpoints. This approach helps Hills District homeowners keep the project predictable, especially when coordinating with other outdoor upgrades. Construction updates are structured around clear milestones so clients can coordinate other trades with less friction.",
  ],
  nearestOffice: offices.kenthurst,
  suburbs: [
    { name: "Castle Hill", slug: "castle-hill" },
    { name: "Baulkham Hills", slug: "baulkham-hills" },
    { name: "Kellyville", slug: "kellyville" },
    { name: "Kenthurst", slug: "kenthurst" },
    { name: "Dural", slug: "dural" },
    { name: "West Pennant Hills", slug: "west-pennant-hills" },
    { name: "Glenhaven", slug: "glenhaven" },
  ],
  faqs: [
    {
      q: "Can you build larger pergolas for generous Hills backyards?",
      a: "Yes. We frequently design larger covered zones and balance scale with practical zoning so the space remains comfortable and functional. This reflects how Hills District families use larger blocks and evolving outdoor zones over time.",
    },
    {
      q: "Do you work with new-build homes?",
      a: "Absolutely. We regularly integrate pergolas with newer homes and modern outdoor layouts across the district. This reflects how Hills District families use larger blocks and evolving outdoor zones over time.",
    },
    {
      q: "How do you handle acreage or rural-residential properties?",
      a: "We tailor staging, access planning, and structure strategy to site conditions common in acreage and semi-rural settings. This reflects how Hills District families use larger blocks and evolving outdoor zones over time.",
    },
    {
      q: "What is typical for outdoor entertaining zones in the Hills?",
      a: "Many clients request combined dining and lounge coverage with flexible layouts for family use and weekend hosting. This reflects how Hills District families use larger blocks and evolving outdoor zones over time.",
    },
    {
      q: "Can you help with staged long-term planning?",
      a: "Yes. Call (02) 5849 6376 and we can discuss a staged approach that supports current needs and future upgrades. This reflects how Hills District families use larger blocks and evolving outdoor zones over time.",
    },
  ],
};

const HillsDistrict = () => <AreaTemplate config={config} />;

export default HillsDistrict;
