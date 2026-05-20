import AreaTemplate, { AreaConfig } from "@/components/locations/AreaTemplate";
import { offices } from "@/data/offices";

const config: AreaConfig = {
  area: "Sutherland Shire",
  slug: "sutherland-shire",
  heroImage: "/images/pergolas-5.jpg",
  heroTagline:
    "Pergola installers for the Sutherland Shire — Cronulla, Caringbah, Sutherland and beyond, with reliable service from our Gladesville office.",
  introImage: "/images/pergolas-3.jpg",
  whyChooseImage: "/images/decking.jpg",
  processImage: "/images/sunroof.jpg",
  aboutArea: [
    "The Sutherland Shire blends coastal and inland suburban lifestyles, with property types ranging from beach-adjacent homes near Cronulla to family-focused streets deeper inland. Outdoor living is a strong part of daily life, so pergolas are usually expected to support frequent entertaining and year-round use. This Shire lifestyle context places strong value on durable, practical outdoor spaces used throughout the year.",
    "This area has a distinct community identity and a practical, lifestyle-driven approach to home improvements. Many households want structures that feel durable, relaxed, and consistent with the Shire's outdoor culture. This Shire lifestyle context places strong value on durable, practical outdoor spaces used throughout the year, especially for family gatherings.",
    "Because conditions vary between salt-influenced coastal pockets and more sheltered interior suburbs, design strategy should respond to local context rather than applying a single template across the whole region. This Shire lifestyle context places strong value on durable, practical outdoor spaces used throughout the year.",
  ],
  whyChooseUsHere: [
    "Sutherland Shire projects are coordinated from our Gladesville office with structured scheduling designed to keep communication clear from planning through installation. This helps maintain consistency across a geographically varied service area. Consistent communication from our Gladesville team helps projects run smoothly across varied suburbs.",
    "We have experience delivering pergola solutions for both coastal-style and inland suburban homes in the Shire, and we tailor detailing, material pathways, and layout decisions to suit those differences. Consistent communication from our Gladesville team helps projects run smoothly across varied suburbs.",
    "If you are planning an upgrade and want to compare options for your exact suburb, call (02) 5849 6376. Early planning helps align scope with lifestyle goals before detailed decisions are finalised. Consistent communication from our Gladesville team helps projects run smoothly across varied suburbs.",
  ],
  localChallenges: [
    "One local challenge is balancing performance across mixed conditions. Coastal suburbs may require stronger attention to salt exposure, while inland streets can prioritise different maintenance and weather-response considerations. We handle these differences with cautious, site-aware planning rather than one-size-fits-all assumptions.",
    "Another challenge is matching pergola scale to highly outdoor-focused usage without overloading existing yard flow. We address this through proportionate zoning and circulation-first planning. We handle these differences with cautious, site-aware planning rather than one-size-fits-all assumptions.",
    "Planning pathways can also vary by project context. We provide cautious guidance during early discussions and recommend confirming project-specific requirements with council and qualified professionals where relevant. We handle these differences with cautious, site-aware planning rather than one-size-fits-all assumptions.",
  ],
  ourProcess: [
    "Our process starts with a consultation focused on lifestyle use, site orientation, and how the structure should support entertaining, family routines, and seasonal weather changes. This creates a clear brief before system choices are narrowed. Regular updates and staged delivery help homeowners stay in control at every milestone.",
    "We then refine design direction, material options, and staged scope detail so the project can move through delivery in an organised way. If approvals questions apply, we outline likely considerations and recommend formal confirmation through the proper channels. Regular updates and staged delivery help homeowners stay in control at every milestone.",
    "Installation is managed through clear milestones and regular updates, helping homeowners coordinate confidently at each phase. This framework supports predictable delivery across the diverse conditions found throughout the Shire. Regular updates and staged delivery help homeowners stay in control at every milestone.",
  ],
  nearestOffice: offices.gladesville,
  suburbs: [
    { name: "Cronulla", slug: "cronulla" },
    { name: "Caringbah", slug: "caringbah" },
    { name: "Sutherland", slug: "sutherland" },
    { name: "Miranda", slug: "miranda" },
    { name: "Engadine", slug: "engadine" },
    { name: "Gymea", slug: "gymea" },
    { name: "Sylvania", slug: "sylvania" },
  ],
  faqs: [
    {
      q: "Do you handle coastal Cronulla properties differently?",
      a: "Yes. Where salt exposure is relevant, we discuss material and detailing options suited to coastal durability and realistic maintenance.",
    },
    {
      q: "Can pergolas integrate with the Shire outdoor lifestyle?",
      a: "Absolutely. We design for practical everyday use, including entertaining, family dining, and flexible sheltered zones.",
    },
    {
      q: "Are you familiar with Sutherland Shire Council requirements?",
      a: "We provide cautious guidance and recommend confirming project-specific requirements directly with council and qualified professionals.",
    },
    {
      q: "What materials suit Cronulla salt exposure?",
      a: "In many cases, corrosion-suitable systems with appropriate hardware perform strongly, though final selection depends on site-specific exposure.",
    },
    {
      q: "Can we speak before locking in the design?",
      a: "Yes. Call (02) 5849 6376 and we can discuss your suburb, priorities, and likely pathway before formal scope is set.",
    },
  ],
};

const SutherlandShire = () => <AreaTemplate config={config} />;

export default SutherlandShire;
