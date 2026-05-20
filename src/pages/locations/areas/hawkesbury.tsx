import AreaTemplate, { AreaConfig } from "@/components/locations/AreaTemplate";
import { offices } from "@/data/offices";

const config: AreaConfig = {
  area: "Hawkesbury",
  slug: "hawkesbury",
  heroImage: "/images/pergolas-5.jpg",
  heroTagline:
    "Pergola builders for the Hawkesbury — covering Richmond, Windsor, Pitt Town and rural-residential properties from our nearby Kenthurst base.",
  introImage: "/images/carports.jpg",
  whyChooseImage: "/images/gazebos.jpg",
  processImage: "/images/pergolas-2.jpg",
  aboutArea: [
    "Hawkesbury has a semi-rural to rural-residential character that is very different from denser metropolitan Sydney, with larger parcels, wider setbacks, and homes that sit within broader landscape context. Pergola planning here often involves generous outdoor footprints and long-view integration with gardens, paddocks, or open surrounds. That broader property context requires decisions that suit long-term use rather than quick, generic solutions.",
    "Across Richmond, Windsor, and nearby localities, property types range from town-centered homes to acreage blocks where scale and logistics influence every project phase. Homeowners in this region typically value practicality, durability, and structures that suit long-term lifestyle use. That broader property context requires decisions that suit long-term use rather than quick, generic solutions.",
    "Because sites can be larger and more varied, standard suburban assumptions rarely work. Successful Hawkesbury outcomes come from site-specific planning that considers exposure, access, and how the pergola should function within a broader rural-residential setting. That broader property context requires decisions that suit long-term use rather than quick, generic solutions.",
  ],
  whyChooseUsHere: [
    "Hawkesbury projects are coordinated from our Kenthurst office, which provides practical proximity for planning, site visits, and clear project management across north-west corridors. This local base supports efficient communication even when properties are spread further apart than typical suburban jobs. Our nearby Kenthurst base helps keep rural-residential scheduling and project communication reliable.",
    "We have experience with larger custom structures and understand the trade-offs involved in balancing coverage, visual scale, and day-to-day usability on acreage-style blocks. That context helps us avoid under-designing spaces that need to perform across larger outdoor programs. Our nearby Kenthurst base helps keep rural-residential scheduling and project communication reliable.",
    "If you want to discuss a rural-residential project, custom sizing pathway, or delivery planning for your location, call (02) 5849 6376. Early conversations help align practical scope before fabrication decisions are made. Our nearby Kenthurst base helps keep rural-residential scheduling and project communication reliable.",
  ],
  localChallenges: [
    "A key Hawkesbury challenge is project scale. Larger sites can invite larger structures, but layout success still depends on proportion, circulation, and weather response rather than raw footprint alone. We manage these variables through planning discipline and site-specific decision-making from day one.",
    "Another consideration can be bushland context in selected areas. We approach these discussions cautiously, provide practical design guidance, and recommend confirming project-specific obligations with council and qualified professionals where relevant. We manage these variables through planning discipline and site-specific decision-making from day one.",
    "Delivery and installation logistics may also be more complex on semi-rural properties with longer access routes or varied ground conditions. We plan staging carefully so works proceed efficiently and predictably. We manage these variables through planning discipline and site-specific decision-making from day one.",
  ],
  ourProcess: [
    "Our process starts with a consultation that maps how the property is used day to day, where sheltered zones are needed most, and how the pergola should sit within the wider site. This planning-first step is important for larger blocks where layout decisions have long-term consequences. This approach keeps larger Hawkesbury projects organised from concept to completion.",
    "We then refine structure options, roof strategy, and scope detail, with clear sequencing for delivery and installation. If approvals questions are relevant, we offer cautious guidance and recommend formal confirmation through council and qualified professionals. This approach keeps larger Hawkesbury projects organised from concept to completion.",
    "Construction is delivered in staged milestones with regular communication checkpoints, so property owners can coordinate around each phase confidently. This framework keeps larger Hawkesbury projects orderly from concept through completion. This approach keeps larger Hawkesbury projects organised from concept to completion.",
  ],
  nearestOffice: offices.kenthurst,
  suburbs: [
    { name: "Richmond", slug: "richmond" },
    { name: "Windsor", slug: "windsor" },
    { name: "Pitt Town", slug: "pitt-town" },
    { name: "North Richmond", slug: "north-richmond" },
    { name: "Bligh Park", slug: "bligh-park" },
    { name: "McGraths Hill", slug: "mcgraths-hill" },
    { name: "South Windsor", slug: "south-windsor" },
  ],
  faqs: [
    {
      q: "Do you build pergolas for rural and acreage properties?",
      a: "Yes. We regularly plan and install structures for larger rural-residential blocks, with attention to scale, access, and practical long-term use.",
    },
    {
      q: "Are bushfire considerations part of your design discussion?",
      a: "Where relevant, yes. We discuss practical implications and recommend confirming project-specific requirements with council and qualified professionals.",
    },
    {
      q: "Can you handle larger custom pergola structures?",
      a: "Absolutely. We design custom layouts for broader outdoor programs while keeping circulation, comfort, and visual proportion in balance.",
    },
    {
      q: "How do you manage delivery to Hawkesbury locations?",
      a: "We use staged logistics planning suited to semi-rural access conditions, so installation can proceed efficiently and with clearer timing expectations.",
    },
    {
      q: "Can we start with an early planning call?",
      a: "Yes. Call (02) 5849 6376 and we can discuss your property, priorities, and likely next steps before detailed scope is fixed.",
    },
  ],
};

const Hawkesbury = () => <AreaTemplate config={config} />;

export default Hawkesbury;
