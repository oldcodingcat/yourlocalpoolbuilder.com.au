import AreaTemplate, { AreaConfig } from "@/components/locations/AreaTemplate";
import { offices } from "@/data/offices";

const config: AreaConfig = {
  area: "St George",
  slug: "st-george",
  heroImage: "/images/pergolas-4.jpg",
  heroTagline:
    "Pergola installation across St George — Hurstville, Kogarah, Rockdale and the Bay area, served by our Gladesville-based pergola team.",
  introImage: "/images/pergolas-2.jpg",
  whyChooseImage: "/images/patios.jpg",
  processImage: "/images/curved-roofs.jpg",
  aboutArea: [
    "St George is one of Sydney's most diverse urban-suburban regions, spanning dense multicultural centres, established family streets, and bay-adjacent pockets with distinct micro-environments. Property styles include post-war homes, updated townhouses, and newer developments, often within short distances of each other. That diversity makes context-driven planning essential for achieving strong design and everyday functionality.",
    "This architectural and demographic variety means pergola projects here need flexible thinking rather than fixed formulas. Homeowners may prioritise family gatherings, multi-generational use, or practical daily shade depending on household patterns. That diversity makes context-driven planning essential for achieving strong design and everyday functionality.",
    "Across suburbs from Hurstville to Rockdale, successful outcomes usually come from tailoring proportion, material tone, and layout to the specific home context while preserving long-term usability. That diversity makes context-driven planning essential for achieving strong design and everyday functionality.",
  ],
  whyChooseUsHere: [
    "St George projects are coordinated from our Gladesville office, supporting responsive communication and structured scheduling across this busy south-side corridor. A clear workflow is especially useful where properties, access conditions, and project priorities vary significantly. Our local workflow is built to manage varied housing types and different household priorities effectively.",
    "We regularly work with a broad mix of housing forms in the area and help clients select pergola strategies that suit both architecture and lifestyle, whether the focus is compact courtyard function or larger family entertaining coverage. Our local workflow is built to manage varied housing types and different household priorities effectively.",
    "If you want practical guidance for your suburb before committing to final scope, call (02) 5849 6376. Early planning helps align design decisions with long-term household needs. Our local workflow is built to manage varied housing types and different household priorities effectively.",
  ],
  localChallenges: [
    "A key challenge in St George is responding to highly varied site contexts without over-standardising design. We solve this by building each concept around usage, movement, and architectural fit rather than using a generic template. Early planning and site-specific detailing are key to balancing performance, appearance, and practicality.",
    "Bay-adjacent locations may introduce additional weather and durability considerations compared with more sheltered inland streets. We account for those differences through site-aware material and detailing recommendations. Early planning and site-specific detailing are key to balancing performance, appearance, and practicality.",
    "Urban access, neighbour interface, and project staging can also affect delivery timelines. We plan logistics carefully to keep installation efficient and communication transparent throughout construction. Early planning and site-specific detailing are key to balancing performance, appearance, and practicality.",
  ],
  ourProcess: [
    "Our process begins with an on-site consultation to define how the space should function for your household, including everyday use, hosting patterns, and preferred visual direction. This creates a practical brief before detailed specification. Transparent staging and communication help households coordinate confidently from start to finish.",
    "We then refine design pathways, roof options, and staged scope documentation so project expectations are clear before works begin. Where approvals discussions are relevant, we provide cautious guidance and recommend confirming project-specific requirements with council and qualified professionals. Transparent staging and communication help households coordinate confidently from start to finish.",
    "Installation is delivered in clear phases with regular updates at each milestone, helping households coordinate confidently around site activity. This method works well in St George where project contexts can differ significantly suburb to suburb. Transparent staging and communication help households coordinate confidently from start to finish.",
  ],
  nearestOffice: offices.gladesville,
  suburbs: [
    { name: "Hurstville", slug: "hurstville" },
    { name: "Kogarah", slug: "kogarah" },
    { name: "Rockdale", slug: "rockdale" },
    { name: "Carlton", slug: "carlton" },
    { name: "Bexley", slug: "bexley" },
    { name: "Penshurst", slug: "penshurst" },
    { name: "Beverly Hills", slug: "beverly-hills" },
  ],
  faqs: [
    {
      q: "Can you design pergolas suited to diverse architectural styles?",
      a: "Yes. We tailor structure form, material palette, and detailing to match each property type, from older homes to contemporary builds.",
    },
    {
      q: "Do you handle bay-adjacent properties differently?",
      a: "Where relevant, yes. We discuss exposure-aware material and detailing choices suited to local weather and maintenance realities.",
    },
    {
      q: "Are you experienced with multi-generational household needs?",
      a: "Absolutely. We regularly plan layouts that support flexible use for larger or multi-generational families.",
    },
    {
      q: "What's typical for St George Council pergola approvals?",
      a: "Requirements vary by project specifics. We provide cautious guidance and recommend confirming details with council and qualified professionals.",
    },
    {
      q: "Can we start with a planning conversation first?",
      a: "Yes. Call (02) 5849 6376 and we can discuss your property and practical options before finalising scope.",
    },
  ],
};

const StGeorge = () => <AreaTemplate config={config} />;

export default StGeorge;
