import AreaTemplate, { AreaConfig } from "@/components/locations/AreaTemplate";
import { offices } from "@/data/offices";

const config: AreaConfig = {
  area: "Ryde",
  slug: "ryde",
  heroImage: "/images/pergolas-3.jpg",
  heroTagline:
    "Pergola installers serving the Ryde area - from our Epping office, we cover Top Ryde, Eastwood, Meadowbank and surrounding suburbs.",
  introImage: "/images/pergolas-2.jpg",
  whyChooseImage: "/images/patios.jpg",
  processImage: "/images/decking.jpg",
  aboutArea: [
    "Ryde is a diverse central-north Sydney area with a strong mix of older homes being renovated, newer infill developments, and family properties upgrading outdoor functionality. This mix creates broad demand for pergolas that modernise usability without clashing with existing architecture. The area's renovation activity means pergola planning is often connected to wider improvements already underway.",
    "Many Ryde clients are already partway through broader renovation programs, so pergola work often needs to align with paving, landscaping, or interior-outdoor transition improvements. We support that context by aligning structure decisions with likely future landscaping and hardscape changes.",
    "The area also includes pockets influenced by river proximity and varied site levels, which can make drainage planning an important part of successful project delivery. This approach helps projects feel cohesive instead of pieced together across separate upgrade stages.",
  ],
  whyChooseUsHere: [
    "Ryde projects are coordinated from our Epping office, giving us local scheduling coverage and practical familiarity with the area's common housing patterns and access conditions. Our Epping-based coordination makes local scheduling and communication more predictable throughout the project.",
    "We focus on solutions that fit renovation contexts, helping homeowners choose pergola designs that improve day-to-day use now while still integrating with planned future upgrades. We also help homeowners compare options based on practical outcomes rather than purely visual preferences.",
    "To talk through your project and likely options, call (02) 5849 6376. Early planning conversations are especially valuable when multiple renovation decisions are happening at once. A clear early brief is particularly useful where multiple renovation decisions are moving in parallel.",
  ],
  localChallenges: [
    "A key Ryde challenge is balancing modern outdoor expectations with existing home envelopes from earlier construction eras. We solve this through proportionate design and thoughtful material pairing. Drainage pathways are reviewed early so roof water behaviour supports the existing site instead of creating new issues.",
    "Drainage can also be complex in selected streets, particularly where existing hardscape and roof water paths do not naturally align. We address this early so performance remains reliable after installation. Where access is constrained, we plan delivery and staging carefully to minimise disruption during installation.",
    "Access constraints vary widely across the area, from tighter suburban entries to busier urban streets. We plan logistics and staging to keep installations efficient and manageable. These details matter in Ryde because site conditions can vary significantly street by street.",
  ],
  ourProcess: [
    "Our process begins with a site consultation that prioritises layout function, movement paths, and architectural fit. This creates a practical design brief before product-level decisions are finalised. The process begins with practical layout mapping to improve movement, comfort, and day-to-day functionality.",
    "We then develop scope detail and material options, with cautious guidance on any approvals discussions where relevant. Because requirements can differ by project, formal confirmation should be made with council and qualified professionals. When planning requirements are relevant, we explain likely pathways carefully and recommend formal confirmation.",
    "Construction is delivered in clear stages with communication at each milestone, helping homeowners coordinate pergola installation alongside any parallel renovation activity. Staged communication during construction helps households coordinate timelines and maintain confidence from start to finish.",
  ],
  nearestOffice: offices.epping,
  suburbs: [
    { name: "Top Ryde", slug: "top-ryde" },
    { name: "West Ryde", slug: "west-ryde" },
    { name: "East Ryde", slug: "east-ryde" },
    { name: "North Ryde", slug: "north-ryde" },
    { name: "Eastwood", slug: "eastwood" },
    { name: "Meadowbank", slug: "meadowbank" },
    { name: "Denistone", slug: "denistone" },
  ],
  faqs: [
    {
      q: "Can you design pergolas that update older homes?",
      a: "Yes. We frequently work with older Ryde homes and focus on solutions that improve outdoor function while respecting existing architectural character. This advice reflects common Ryde renovation patterns and the need to coordinate with existing site conditions.",
    },
    {
      q: "Do you handle riverside properties with specific drainage needs?",
      a: "Yes. We assess drainage pathways early and tailor detailing so roof water management performs well in real site conditions. This advice reflects common Ryde renovation patterns and the need to coordinate with existing site conditions.",
    },
    {
      q: "How long does a typical Ryde installation take?",
      a: "Timing depends on scope and complexity, but we provide clear staged timelines so you know what to expect throughout delivery. This advice reflects common Ryde renovation patterns and the need to coordinate with existing site conditions.",
    },
    {
      q: "What permits apply in Ryde Council area?",
      a: "Requirements vary by project specifics. We recommend confirming obligations with council and relevant professionals before construction. This advice reflects common Ryde renovation patterns and the need to coordinate with existing site conditions.",
    },
    {
      q: "Can we discuss options before final scope?",
      a: "Absolutely. Call (02) 5849 6376 and we can review practical options before design direction is locked in. This advice reflects common Ryde renovation patterns and the need to coordinate with existing site conditions.",
    },
  ],
};

const Ryde = () => <AreaTemplate config={config} />;

export default Ryde;
