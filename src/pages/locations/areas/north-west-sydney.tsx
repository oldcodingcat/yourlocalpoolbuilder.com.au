import AreaTemplate, { AreaConfig } from "@/components/locations/AreaTemplate";
import { offices } from "@/data/offices";

const config: AreaConfig = {
  area: "North West Sydney",
  slug: "north-west-sydney",
  heroImage: "/images/pergolas-3.jpg",
  heroTagline:
    "Pergola installation across North West Sydney — Rouse Hill, Kellyville, The Ponds and the wider growth corridor, served from our Kenthurst office.",
  introImage: "/images/pergolas.jpeg",
  whyChooseImage: "/images/curved-roofs.jpg",
  processImage: "/images/insulated-roofs.webp",
  aboutArea: [
    "North West Sydney is a major growth corridor shaped by newer estates, modern streetscapes, and family-oriented communities developed over the past decade-plus. Homes in this region often feature contemporary architecture and outdoor areas planned as part of broader lifestyle design. This growth-corridor context rewards planning that integrates architecture, function, and future outdoor upgrades.",
    "Compared with older renovation-heavy areas, many properties here allow pergola planning to happen earlier in the life of the home. That creates an opportunity to integrate structure, hardscape, and landscaping more coherently from the beginning. This growth-corridor context rewards planning that integrates architecture, function, and future outdoor upgrades.",
    "Backyard sizes are typically moderate rather than oversized, so layout efficiency still matters. The best outcomes usually come from balancing coverage, circulation, and visual alignment with contemporary facades and open-plan living zones. This growth-corridor context rewards planning that integrates architecture, function, and future outdoor upgrades.",
  ],
  whyChooseUsHere: [
    "North West Sydney work is coordinated from our Kenthurst office, giving us practical local coverage across Rouse Hill, Kellyville, and surrounding suburbs. Proximity helps us maintain consistent communication and responsive scheduling in a fast-growing region. Local corridor experience helps us align pergola design with newer home typologies and family routines.",
    "We understand the design language of newer homes and help clients choose pergola styles that complement contemporary roof lines, facade materials, and outdoor entertaining layouts. This avoids the mismatch that can happen when legacy styles are applied to modern builds. Local corridor experience helps us align pergola design with newer home typologies and family routines.",
    "If you are planning a pergola for a newer property or a staged outdoor upgrade, call (02) 5849 6376. We can help map options before final scope and timeline decisions are made. Local corridor experience helps us align pergola design with newer home typologies and family routines.",
  ],
  localChallenges: [
    "A common challenge is integrating pergolas cleanly with modern architecture without overcomplicating the structure. We solve this through proportion-led design, disciplined detailing, and material selections that suit contemporary finishes. We address these risks through early coordination, proportion-led design, and staged planning clarity.",
    "Another challenge involves timing. Many households are still completing landscaping or other post-handover improvements, so pergola planning must fit into staged upgrade pathways without forcing rework later. We address these risks through early coordination, proportion-led design, and staged planning clarity.",
    "Some communities may also have development controls or estate-level constraints to consider. We provide cautious guidance and recommend confirming project-specific requirements with council and qualified professionals where applicable. We address these risks through early coordination, proportion-led design, and staged planning clarity.",
  ],
  ourProcess: [
    "Our process starts with a consultation focused on how the home and backyard are currently used, and how that usage is likely to evolve as the household grows. This gives us a clear functional brief before narrowing style and system choices. Structured delivery checkpoints keep modern estate projects predictable and well coordinated.",
    "We then refine design direction, roof option pathways, and staged scope detail to align with current and future outdoor plans. If approvals questions arise, we explain likely considerations and recommend formal confirmation through the appropriate channels. Structured delivery checkpoints keep modern estate projects predictable and well coordinated.",
    "Installation is delivered through transparent milestones with regular updates, helping homeowners coordinate pergola works alongside landscaping or other upgrades. This structure keeps modern growth-corridor projects predictable from start to finish. Structured delivery checkpoints keep modern estate projects predictable and well coordinated.",
  ],
  nearestOffice: offices.kenthurst,
  suburbs: [
    { name: "Rouse Hill", slug: "rouse-hill" },
    { name: "Kellyville", slug: "kellyville" },
    { name: "The Ponds", slug: "the-ponds" },
    { name: "Stanhope Gardens", slug: "stanhope-gardens" },
    { name: "Beaumont Hills", slug: "beaumont-hills" },
    { name: "North Kellyville", slug: "north-kellyville" },
    { name: "Bella Vista", slug: "bella-vista" },
  ],
  faqs: [
    {
      q: "Do you work with master-planned community properties?",
      a: "Yes. We regularly design pergolas for homes in master-planned areas and align solutions with modern layout and streetscape expectations.",
    },
    {
      q: "Can pergolas be planned during home construction?",
      a: "They can. Early planning often improves integration and helps future landscaping and outdoor features fit together more efficiently.",
    },
    {
      q: "What styles work best for modern North West homes?",
      a: "Clean, proportionate designs with contemporary material palettes usually perform best, but final style should match your facade and usage goals.",
    },
    {
      q: "Are there community covenants we should consider?",
      a: "Potentially. We provide cautious guidance and recommend confirming project-specific obligations with developers, council, and qualified professionals.",
    },
    {
      q: "Can we discuss staged outdoor planning first?",
      a: "Absolutely. Call (02) 5849 6376 and we can map a staged approach before finalising structure scope.",
    },
  ],
};

const NorthWestSydney = () => <AreaTemplate config={config} />;

export default NorthWestSydney;
