import ServiceTemplate, { ServiceConfig } from "@/components/services/ServiceTemplate";

const config: ServiceConfig = {
  name: "Patios",
  slug: "patios",
  heroImage: "/images/patios.jpg",
  heroTagline:
    "Custom covered patio installation across Sydney, creating comfortable outdoor living zones that work in summer heat, wet weather, and everyday family routines.",
  aboutImage: "/images/pergolas-2.jpg",
  whyChooseImage: "/images/decking.jpg",
  materialsImage: "/images/insulated-roofs.webp",
  processImage: "/images/flat-roof.jpg",
  aboutService: [
    "In the Australian context, a covered patio is a practical extension of the home that creates a protected outdoor room for daily living, not just occasional entertaining. Compared with an open pergola that may prioritise filtered light and visual framing, a patio usually focuses on stronger weather protection, thermal comfort, and year-round usability.",
    "Many Sydney households choose patio installation because it improves lifestyle immediately without the disruption of a major internal renovation. A well-planned patio gives you reliable outdoor dining, family space, and hosting flexibility while also improving how indoor and outdoor areas connect.",
    "Done properly, a patio feels integrated rather than added later. The structure, roof pathway, and detailing need to align with the existing home so the new outdoor zone performs well and still looks intentional after years of use.",
  ],
  whyChooseUsForThis: [
    "We deliver covered patio projects with an end-to-end workflow, from first consultation and design direction through to final installation and handover. That single-team approach keeps communication clear and avoids the confusion that often happens when planning and construction are split between different contractors.",
    "Our focus is practical build quality: accurate set-out, disciplined framing, dependable roof detailing, and clean site execution on occupied homes. We also prioritise usability outcomes so the patio is comfortable in real conditions, not just visually attractive on completion day.",
    "If you want to compare pathways before committing to final scope, call (02) 5849 6376. Early planning usually saves time, reduces rework risk, and helps align budget with long-term goals.",
  ],
  materialsAndOptions: [
    "Patio roof options commonly include insulated panel systems for stronger thermal comfort, Colorbond-oriented pathways for weather durability, and selected translucent panel zones where controlled natural light is important. The right option depends on orientation, afternoon heat load, and how the space is used day to day.",
    "Style directions usually include flat roof layouts for modern homes, gable profiles where additional height and ventilation are useful, and curved options for softer architectural lines. We also help clients compare attached patio solutions versus stand-alone structures based on access, facade integration, and yard zoning.",
    "Material decisions are discussed in practical terms: performance, maintenance, long-term appearance, and compatibility with surrounding paving, decking, and landscaping. This is what turns a patio from a short-term project into a durable lifestyle upgrade.",
  ],
  whatToExpect: [
    "Projects start with a site consultation to map usage priorities, block constraints, and visual direction. Where suitable, concept development can include clearer layout studies so you can compare options before finalising scope.",
    "Next, we confirm roof pathway, materials, and staged construction planning. If approvals are relevant, we provide cautious guidance and recommend confirming project-specific requirements with council and qualified professionals before works begin.",
    "Installation is delivered in clear phases with regular updates, then finished with site clean-up and handover guidance so you understand care requirements and long-term maintenance expectations.",
  ],
  benefits: [
    "Year-round sheltered outdoor living for family and guests",
    "Improved UV and rain protection in Sydney conditions",
    "Stronger indoor-outdoor flow from key living zones",
    "Flexible roof pathways matched to site performance goals",
    "Clean integration with decking, paving, and landscaping",
    "Low-maintenance options for busy households",
    "Higher day-to-day usability and property appeal",
    "Structured delivery with practical communication",
  ],
  typicalUses:
    "Covered dining areas, family entertaining zones, poolside seating, weather-protected BBQ spaces, and practical backyard living extensions.",
  process: [
    {
      title: "Consultation & Site Planning",
      description:
        "We assess your block, usage priorities, and key constraints like drainage, access, and integration with existing outdoor elements.",
    },
    {
      title: "Design & Scope",
      description:
        "We confirm roof style, materials, layout pathway, and staged scope so expectations are clear before construction begins.",
    },
    {
      title: "Build & Install",
      description:
        "Our team completes structural works and roofing details in a controlled sequence with attention to quality and occupied-home site care.",
    },
    {
      title: "Final Handover",
      description:
        "We complete final checks, walk through the finished patio with you, and provide practical maintenance guidance for long-term performance.",
    },
  ],
  faqs: [
    {
      q: "What is the difference between a patio and an open pergola?",
      a: "A covered patio is generally designed for stronger weather protection and year-round function, while many open pergolas focus more on filtered shade and architectural framing.",
    },
    {
      q: "Are insulated patio roofs worth it in Sydney conditions?",
      a: "For many homes, yes. Insulated roof systems can improve qualitative comfort significantly, especially on blocks with strong afternoon heat exposure.",
    },
    {
      q: "Can you match the patio to my existing house style?",
      a: "Absolutely. We align roof form, post profile, finish tone, and detailing with existing architecture so the patio looks integrated rather than added as an afterthought.",
    },
    {
      q: "Do patio projects require council approval?",
      a: "Requirements vary by project specifics. We provide cautious guidance during planning and recommend confirming obligations with council and qualified professionals.",
    },
    {
      q: "How long does patio installation usually take?",
      a: "Timing depends on size, complexity, and site constraints, but we provide staged milestones so each phase is clear before construction starts.",
    },
    {
      q: "Can we discuss options before requesting a full quote?",
      a: "Yes. Call (02) 5849 6376 and we can map practical pathways first, which usually improves scope clarity and quote accuracy.",
    },
  ],
  galleryImages: [
    { src: "/images/patios.jpg", alt: "Covered patio installation for everyday outdoor living in Sydney" },
    { src: "/images/decking.jpg", alt: "Patio and deck integration with practical circulation planning" },
    { src: "/images/insulated-roofs.webp", alt: "Insulated patio roofing solution for summer comfort" },
    { src: "/images/flat-roof.jpg", alt: "Modern flat roof patio design with clean durable finishes" },
  ],
  relatedServices: [
    { name: "Insulated Roofs", slug: "insulated-roofs" },
    { name: "Flat Roof", slug: "flat-roof" },
    { name: "Pergola Building & Installation", slug: "pergola-building-and-installation" },
    { name: "Decking", slug: "decking" },
  ],
};

const Patios = () => <ServiceTemplate config={config} />;

export default Patios;
