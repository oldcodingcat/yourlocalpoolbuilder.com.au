import ServiceTemplate, { ServiceConfig } from "@/components/services/ServiceTemplate";

const config: ServiceConfig = {
  name: "Gable Roof Pergolas",
  slug: "gable-roof",
  heroImage: "/images/pergolas-3.jpg",
  heroTagline:
    "Gable roof pergola installation across Sydney, creating elevated outdoor spaces with stronger visual volume and architectural presence.",
  aboutImage: "/images/curved-roofs.jpg",
  whyChooseImage: "/images/pergolas-4.jpg",
  materialsImage: "/images/insulated-roofs.webp",
  processImage: "/images/flat-roof.jpg",
  aboutService: [
    "A gable roof pergola uses a pitched two-sided roof profile that creates vertical volume and a stronger architectural silhouette than low-profile alternatives. In Sydney homes, this style is often chosen when clients want the outdoor area to feel taller, lighter, and more open while still maintaining useful weather coverage.",
    "Compared with flat roof systems, gable forms usually produce a more pronounced sense of space and a traditional roof rhythm that can align well with many established house styles. They also differ from curved roofs, which deliver softer visual flow, and from insulated-roof services where the key focus is thermal performance rather than roof geometry.",
    "Gable roof structures are especially popular for entertaining zones where visual height, perceived openness, and design presence are priorities alongside practical protection.",
  ],
  whyChooseUsForThis: [
    "We plan gable roof projects with close attention to roofline integration, proportion, and buildability. The objective is to create a structure that feels like it belongs to the house rather than sitting awkwardly against existing architecture.",
    "Our team focuses on practical details that strongly affect long-term results, including structural alignment, drainage planning, and clean finishing around fascia, flashings, and connection points. These are the elements that separate a polished gable outcome from a visually heavy one.",
    "If you are comparing gable and flat roof options for your property, call (02) 5849 6376 and we can help define the most suitable pathway before final design decisions are made.",
  ],
  materialsAndOptions: [
    "Gable roof pathways can incorporate Colorbond-oriented roof systems, insulated panel options for comfort-focused outcomes, and selective translucent inserts where extra daylight is desired. Material selection should match both appearance goals and practical weather performance.",
    "Design options include more exposed rafter expressions for architectural character or cleaner finished undersides for a refined modern look. We also compare attached and freestanding applications depending on yard layout and desired relationship to the main home.",
    "Proportion is critical. A gable roof should be scaled to the house and outdoor footprint so the structure feels balanced in elevation as well as comfortable in use at ground level.",
  ],
  whatToExpect: [
    "Projects begin with a site consultation to assess layout, target coverage, and how the gable profile can align with existing roof language. This early alignment step is one of the biggest factors in achieving a coherent final result.",
    "We then refine the design pathway, materials, and staged scope. Where approvals or engineering considerations apply, we provide cautious guidance and recommend confirming project-specific requirements with council and qualified professionals.",
    "Installation proceeds through clear phases with regular communication, from set-out and structural framing through roof completion and final detail finishing.",
  ],
  benefits: [
    "Higher perceived volume in outdoor living zones",
    "Stronger architectural presence than low-profile roofs",
    "Flexible material pathways for style and performance",
    "Can integrate with many traditional and transitional homes",
    "Useful weather protection with open spatial feel",
    "Scalable for attached and freestanding configurations",
    "Clear design identity compared with flatter roof forms",
    "Professional staged delivery with practical communication",
  ],
  typicalUses:
    "Elevated entertaining areas, alfresco dining zones, family outdoor rooms, and pergola upgrades where architectural roof presence is a priority.",
  process: [
    {
      title: "Site Review & Roofline Study",
      description:
        "We assess orientation, existing architecture, and desired coverage to determine the right gable profile and placement.",
    },
    {
      title: "Design & Option Selection",
      description:
        "We confirm materials, roof detailing direction, and structural scope so all key decisions are aligned before construction.",
    },
    {
      title: "Construction & Roof Installation",
      description:
        "Our team completes framing, roof works, and weatherproof detailing in a managed sequence focused on quality and accuracy.",
    },
    {
      title: "Final Checks & Handover",
      description:
        "We complete final quality reviews and provide practical care guidance for long-term performance and presentation.",
    },
  ],
  faqs: [
    {
      q: "How is a gable roof pergola different from a flat roof pergola?",
      a: "Gable roofs create more vertical volume and a stronger pitched silhouette, while flat roofs are generally cleaner, lower-profile, and more minimal.",
    },
    {
      q: "Can gable roofs include insulated panel options?",
      a: "Yes. Insulated panel pathways can be integrated where comfort performance is a key priority for the space.",
    },
    {
      q: "Do gable roof projects require engineering or approvals?",
      a: "Some projects do. Requirements vary by location and scope, so we provide cautious guidance and recommend formal confirmation with council and qualified professionals.",
    },
    {
      q: "Are gable roofs suitable for attached and freestanding layouts?",
      a: "Absolutely. We evaluate your site and architecture to recommend the most practical and visually balanced configuration.",
    },
    {
      q: "Can I compare gable, flat, and curved options before deciding?",
      a: "Yes. We regularly guide clients through those trade-offs so selection is based on both design goals and practical use.",
    },
    {
      q: "How do I get started with a gable roof consultation?",
      a: "Call (02) 5849 6376 and we can review your site and map realistic next steps before final scope is set.",
    },
  ],
  galleryImages: [
    { src: "/images/pergolas-3.jpg", alt: "Gable roof pergola installation with elevated roof profile" },
    { src: "/images/pergolas-4.jpg", alt: "Pitched pergola roof aligned with existing home character" },
    { src: "/images/insulated-roofs.webp", alt: "Gable roof option with insulated panel pathway" },
    { src: "/images/flat-roof.jpg", alt: "Comparison context between flat and pitched pergola roof forms" },
  ],
  relatedServices: [
    { name: "Flat Roof", slug: "flat-roof" },
    { name: "Curved Roof", slug: "curved-roof" },
    { name: "Insulated Roofs", slug: "insulated-roofs" },
    { name: "Pergola Building & Installation", slug: "pergola-building-and-installation" },
  ],
};

const GableRoof = () => <ServiceTemplate config={config} />;

export default GableRoof;
