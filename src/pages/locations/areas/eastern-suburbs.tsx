import AreaTemplate, { AreaConfig } from "@/components/locations/AreaTemplate";
import { offices } from "@/data/offices";

const config: AreaConfig = {
  area: "Eastern Suburbs",
  slug: "eastern-suburbs",
  heroImage: "/images/pergolas-5.jpg",
  heroTagline:
    "Premium pergola and patio installation across Sydney's Eastern Suburbs, delivered with practical design guidance and high build quality.",
  introImage: "/images/pergolas-3.jpg",
  whyChooseImage: "/images/patios.jpg",
  processImage: "/images/flat-roof.jpg",
  aboutArea: [
    "Sydney's Eastern Suburbs combines premium coastal living with high-value renovations, compact blocks, and architecture-led upgrades where outdoor design quality is closely scrutinised. Homes here range from terrace-style footprints to larger family properties, but in most cases every square meter has to work hard. In practice, this means planning each pergola as part of an overall property presentation strategy, not as an isolated add-on.",
    "Because the area spans both ocean-exposed pockets and denser residential streets, pergola planning typically balances visual refinement with practical weather response. Clients usually want outdoor spaces that feel polished, integrated, and genuinely usable for daily dining and entertaining, not just occasional summer use. We also account for premium expectations around detailing, alignment, and finish consistency so the structure feels architecturally intentional.",
    "We also see strong demand for outdoor additions that align with established landscaping and premium interior finishes. In this market, proportion, material selection, and detailing discipline are often as important as the structure itself. That local context is why design choices here are usually evaluated against both daily function and long-term property appeal.",
  ],
  whyChooseUsHere: [
    "Eastern Suburbs projects are coordinated from our Gladesville office, giving us practical coverage for site visits, scheduling, and responsive communication across coastal and near-city suburbs. Local coordination is especially valuable where access windows and staged delivery need to be tightly managed. Our Gladesville team keeps site communication tight so homeowners can make decisions quickly without losing project momentum.",
    "Homeowners in this region typically expect high finish consistency and clear project structure. We focus on pre-construction clarity, realistic options, and tidy delivery practices suited to occupied homes where quality and predictability are both non-negotiable. Clients in this market also value clear guidance on material longevity, especially where visual standards remain high year after year.",
    "If you want to discuss style direction, material strategy, and likely scope before formal quoting, call (02) 5849 6376. Early alignment helps avoid expensive changes once fabrication and installation are underway. Early phone or site discussions often save time by clarifying priorities before detailed pricing and fabrication begin.",
  ],
  localChallenges: [
    "The biggest local challenge is environmental contrast: some properties face stronger salt influence and coastal wind, while others are more sheltered but constrained by compact site geometry. We address this by matching hardware, coatings, and roof strategy to each site's true exposure level. We frequently tailor connection details and hardware specification to account for coastal influence without overengineering sheltered sites.",
    "Another challenge is balancing premium aesthetics with practical maintenance. We help clients choose systems that stay visually sharp without committing to unrealistic upkeep routines, particularly where sea air and UV can accelerate weathering on the wrong specification. Where homes are close together, we also consider privacy angles and neighbour interface so coverage improves comfort without visual bulk.",
    "In tighter terrace or semi-detached settings, access and neighbour interface can be just as important as structure size. We plan logistics and staging to minimise disruption while preserving build quality. These measures help reduce maintenance surprises and preserve presentation in one of Sydney's most design-sensitive markets.",
  ],
  ourProcess: [
    "Our process starts with an on-site consultation focused on usage patterns, orientation, and architectural fit. Rather than jumping to product choices, we first define how the outdoor area should perform through weekdays, weekends, and changing weather. Consultation includes mapping how furniture zones and circulation should work in daily life, not only for occasional entertaining.",
    "From there, we refine design direction, material pathways, and scope detail, including cautious guidance around any planning or approvals conversations where relevant. Requirements can vary, so we always recommend confirming project-specific obligations with council and qualified professionals. We document scope decisions in practical terms so expectations remain aligned before installation starts.",
    "Installation is delivered in clear stages with regular communication checkpoints, so you know what to expect before each milestone. This structured approach helps Eastern Suburbs clients maintain confidence and control throughout the project. During construction, staged updates keep homeowners informed and make it easier to coordinate around occupied living conditions.",
  ],
  nearestOffice: offices.gladesville,
  suburbs: [
    { name: "Bondi", slug: "bondi" },
    { name: "Bondi Junction", slug: "bondi-junction" },
    { name: "Coogee", slug: "coogee" },
    { name: "Maroubra", slug: "maroubra" },
    { name: "Randwick", slug: "randwick" },
    { name: "Vaucluse", slug: "vaucluse" },
    { name: "Double Bay", slug: "double-bay" },
  ],
  faqs: [
    {
      q: "Do you build pergolas suited to coastal conditions in the East?",
      a: "Yes. We specify materials and finishes for salt air exposure and strong UV where needed, so the structure maintains performance and appearance over time.",
    },
    {
      q: "Can you work on tight blocks and limited side access?",
      a: "Absolutely. Many Eastern Suburbs projects involve constrained access, and we plan staging and material handling around those constraints.",
    },
    {
      q: "Do you provide design guidance for premium home renovations?",
      a: "Yes. We help align roof form, post profiles, and finishes with existing architecture so the outdoor addition feels intentional and cohesive.",
    },
    {
      q: "Can pergola and patio projects be integrated with existing decks or pools?",
      a: "Yes. We regularly coordinate integrated outdoor zones combining covered areas, decking transitions, and poolside shade requirements.",
    },
    {
      q: "How is scheduling handled for occupied homes?",
      a: "We provide a clear project sequence and communication points, with site practices focused on tidy execution and minimal disruption.",
    },
  ],
};

const EasternSuburbs = () => <AreaTemplate config={config} />;

export default EasternSuburbs;
