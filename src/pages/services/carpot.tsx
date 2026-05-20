import ServiceTemplate, { ServiceConfig } from "@/components/services/ServiceTemplate";

const config: ServiceConfig = {
  name: "Carports",
  slug: "carpot",
  heroImage: "/images/carports.jpg",
  heroTagline:
    "Custom carport builders in Sydney delivering practical vehicle protection structures with clean residential integration and strong day-to-day usability.",
  aboutImage: "/images/pergolas-3.jpg",
  whyChooseImage: "/images/flat-roof.jpg",
  materialsImage: "/images/gazebos.jpg",
  processImage: "/images/sunroof.jpg",
  aboutService: [
    "A carport is a roofed vehicle protection structure designed to provide everyday shelter from sun, rain, and weather exposure while maintaining practical access. For many properties, it offers a more flexible and cost-effective pathway than a full enclosed garage conversion.",
    "Carports are commonly configured as single or double bays, and can be attached to the home or freestanding depending on driveway layout, frontage constraints, and usage needs. The best approach depends on clearance requirements, turning movement, and how the structure should relate to the existing façade.",
    "This service is function-first but still design-sensitive: a well-planned carport protects vehicles daily and improves street presentation when proportions, roof form, and finishing details are resolved properly.",
  ],
  whyChooseUsForThis: [
    "We design carports with practical operation as the top priority, including entry geometry, clearance planning, and roof coverage that suits real vehicle use patterns. At the same time, we ensure the structure integrates visually with the home rather than looking like an afterthought.",
    "Our team has experience across attached and freestanding carport pathways and focuses on tidy structural detailing, clean edges, and durable materials that handle Sydney weather conditions with manageable upkeep.",
    "If you want to assess the right configuration for your property before committing to final scope, call (02) 5849 6376 and we can map practical options clearly.",
  ],
  materialsAndOptions: [
    "Carport roof forms can include flat, gable, or curved pathways depending on style goals and site geometry. We compare these options in terms of appearance, drainage behaviour, and compatibility with the home's existing roof language.",
    "Material pathways often include Colorbond-oriented roofing, steel or aluminium frame systems, and in selected cases insulated panel options where comfort under cover is desired for multi-use driveway zones.",
    "Most residential layouts are open-sided for easy access and ventilation, but detailing and edge treatment still matter for durability and visual finish. We align structure depth, column placement, and roof line to keep the result both practical and cohesive.",
  ],
  whatToExpect: [
    "Projects begin with site measurement and vehicle-clearance planning, including approach paths, turning requirements, and roof projection coverage. This practical step ensures daily use is smooth before design decisions are finalised.",
    "We then confirm roof form, materials, and staged installation sequence. Where approvals considerations apply, we provide cautious guidance and recommend confirming project-specific requirements with council and qualified professionals.",
    "Construction is completed in managed phases with final checks and handover guidance so you understand expected maintenance, practical use limits, and long-term care for the completed carport.",
  ],
  benefits: [
    "Reliable daily protection for parked vehicles",
    "Practical alternative to full enclosed garage builds",
    "Flexible single, double, attached, or freestanding layouts",
    "Roof-style options to match home architecture",
    "Improved driveway usability in wet and hot conditions",
    "Clean street-facing integration with existing property",
    "Durable low-maintenance structural pathways",
    "Structured planning and installation delivery",
  ],
  typicalUses:
    "Single and double vehicle shelters, driveway weather cover, side-access parking protection, and multi-use roofed entry zones.",
  process: [
    {
      title: "Measure & Vehicle Clearance Planning",
      description:
        "We assess driveway layout, access movement, and required clearances to define a practical carport footprint.",
    },
    {
      title: "Design & Material Confirmation",
      description:
        "We select roof form, frame pathway, and detailing approach to align with function and house presentation goals.",
    },
    {
      title: "Construction & Installation",
      description:
        "Our team completes staged build works with focus on structural accuracy, drainage reliability, and clean finishing.",
    },
    {
      title: "Final Practical Handover",
      description:
        "We complete final checks and provide guidance on maintenance and day-to-day use expectations.",
    },
  ],
  faqs: [
    {
      q: "Is a carport a good alternative to building a full garage?",
      a: "For many homes, yes. Carports provide practical vehicle weather protection with less complexity and often lower project impact.",
    },
    {
      q: "Can carports be attached to existing homes?",
      a: "Absolutely. Attached and freestanding pathways are both possible depending on site geometry and access priorities.",
    },
    {
      q: "What roof style is best for a custom carport?",
      a: "It depends on your property architecture and practical goals. Flat, gable, and curved options can all work when proportioned correctly.",
    },
    {
      q: "Do carport projects require approvals?",
      a: "Requirements vary by project specifics and location. We provide cautious guidance and recommend confirming obligations with council and qualified professionals.",
    },
    {
      q: "Can insulated roof options be used on carports?",
      a: "In selected cases, yes. We assess suitability based on structure type, intended use, and site conditions.",
    },
    {
      q: "How do I start planning a custom carport?",
      a: "Call (02) 5849 6376 and we can review your driveway layout and discuss practical configuration options.",
    },
  ],
  galleryImages: [
    { src: "/images/carports.jpg", alt: "Custom carport installation for residential vehicle protection" },
    { src: "/images/pergolas-3.jpg", alt: "Attached carport integrated with existing home architecture" },
    { src: "/images/flat-roof.jpg", alt: "Flat roof carport pathway for clean modern frontage" },
    { src: "/images/sunroof.jpg", alt: "Light-focused roof option context for custom carport planning" },
  ],
  relatedServices: [
    { name: "Flat Roof Pergolas", slug: "flat-roof" },
    { name: "Gable Roof Pergolas", slug: "gable-roof" },
    { name: "Sunroof", slug: "sunroof" },
    { name: "Pergola Building & Installation", slug: "pergola-building-and-installation" },
  ],
};

const Carpot = () => <ServiceTemplate config={config} />;

export default Carpot;
