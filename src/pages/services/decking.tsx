import ServiceTemplate, { ServiceConfig } from "@/components/services/ServiceTemplate";

const config: ServiceConfig = {
  name: "Decking",
  slug: "decking",
  heroImage: "/images/decking.jpg",
  heroTagline:
    "Professional decking design and installation in Sydney, creating durable outdoor foundations that transform how patios and pergolas are used.",
  aboutImage: "/images/patios.jpg",
  whyChooseImage: "/images/pergolas-5.jpg",
  materialsImage: "/images/pergolas-2.jpg",
  processImage: "/images/flat-roof.jpg",
  aboutService: [
    "Decking is the structural and visual floor foundation for outdoor living, and it plays a different role from roof-focused services like pergolas or patios. A well-built deck defines circulation, comfort, and furniture zoning, and often determines how usable the entire backyard feels day to day.",
    "In many Sydney homes, adding decking is the fastest way to transform an underused yard into a practical entertaining environment. It creates clean transitions between doors, lawn edges, and covered structures while improving overall cohesion across the outdoor space.",
    "Decking is especially powerful when integrated with pergolas, patios, or gazebos because it provides the stable platform that makes those structures function better in real household use.",
  ],
  whyChooseUsForThis: [
    "We approach decking as part of a complete outdoor system, not an isolated carpentry task. That means careful planning of subframe design, transitions, and level management so the finished space feels intentional and performs reliably over time.",
    "Our team is experienced in integrating decks with covered structures, steps, retaining edges, and mixed-surface zones. We focus on practical detail quality, from board alignment and spacing to clean edge finishing and movement pathways.",
    "If you want to discuss timber versus composite pathways and how decking can support your broader outdoor plans, call (02) 5849 6376 and we can map options before final scope is set.",
  ],
  materialsAndOptions: [
    "Common decking pathways include hardwood timber for natural character, treated pine options where value and versatility are priorities, and composite systems for clients seeking lower maintenance. Each has different behaviour for appearance, lifecycle upkeep, and long-term weather exposure.",
    "Design options include board width and direction choices, colour tone pathways, steps and level changes, edge detailing, and optional balustrade integration where needed. These decisions have a major impact on usability as well as visual finish.",
    "Material and layout selection should be driven by practical use patterns, sun exposure, drainage context, and how the deck connects to pergolas, patios, and adjacent landscaping elements.",
  ],
  whatToExpect: [
    "Projects begin with site preparation review and structural planning, including subframe approach, levels, and drainage behaviour. This foundational stage is critical to long-term deck stability and finish quality.",
    "After confirming materials and detailing pathway, installation proceeds in staged sequence from base works through board laying, edge finishing, and transition treatments. Where approvals are relevant, we provide cautious guidance and recommend confirming project-specific obligations with council and qualified professionals.",
    "Handover includes practical guidance on sealing and maintenance expectations based on the selected material system, so you can preserve appearance and performance over time.",
  ],
  benefits: [
    "Defines practical outdoor living zones clearly",
    "Improves circulation and usable backyard floor area",
    "Strong integration with patios and pergola structures",
    "Material pathways for natural, value, or low-maintenance goals",
    "Clean transitions across levels and mixed surfaces",
    "Better furniture usability and entertaining comfort",
    "Durable subframe-focused construction approach",
    "Professional finish and long-term outdoor appeal",
  ],
  typicalUses:
    "Outdoor entertaining floors, pergola bases, patio transitions, pool-adjacent seating zones, stepped level changes, and full backyard resurfacing upgrades.",
  process: [
    {
      title: "Site Prep & Subframe Planning",
      description:
        "We assess levels, drainage, and connection points to define a durable structural base pathway.",
    },
    {
      title: "Material & Layout Confirmation",
      description:
        "We confirm board type, orientation, edge details, and transitions so scope and finish direction are clear.",
    },
    {
      title: "Deck Installation",
      description:
        "Our team completes staged deck construction including structural base, board fixing, and detail finishing.",
    },
    {
      title: "Final Finish & Maintenance Brief",
      description:
        "We perform final checks, clean-up, and provide practical guidance for sealing and ongoing care.",
    },
  ],
  faqs: [
    {
      q: "How is decking different from patio or pergola services?",
      a: "Decking is the floor foundation of the outdoor area, while patios and pergolas are generally roof or structure-focused solutions.",
    },
    {
      q: "Should I choose timber or composite decking?",
      a: "It depends on style preference, maintenance expectations, and budget priorities. We compare both pathways based on your practical goals.",
    },
    {
      q: "Can decking be installed with existing pergolas or patios?",
      a: "Yes. We regularly integrate decking with existing covered structures and plan transitions for clean, functional flow.",
    },
    {
      q: "Do decking projects need approvals?",
      a: "Requirements vary by project specifics and location. We provide cautious guidance and recommend confirming obligations with council and qualified professionals.",
    },
    {
      q: "What affects long-term deck durability most?",
      a: "Subframe quality, drainage planning, material suitability, and correct maintenance all have major impact on long-term performance.",
    },
    {
      q: "How do I begin a decking consultation?",
      a: "Call (02) 5849 6376 and we can review your site and outline practical decking pathways for your outdoor plans.",
    },
  ],
  galleryImages: [
    { src: "/images/decking.jpg", alt: "Custom decking installation for Sydney outdoor living" },
    { src: "/images/patios.jpg", alt: "Decking integrated with covered patio entertaining zone" },
    { src: "/images/pergolas-5.jpg", alt: "Decking and pergola combination with clean transitions" },
    { src: "/images/flat-roof.jpg", alt: "Decked outdoor space aligned with modern roofed structure" },
  ],
  relatedServices: [
    { name: "Patios", slug: "patios" },
    { name: "Pergola Building & Installation", slug: "pergola-building-and-installation" },
    { name: "Gazebos", slug: "gazebos" },
    { name: "Flat Roof Pergolas", slug: "flat-roof" },
  ],
};

const Decking = () => <ServiceTemplate config={config} />;

export default Decking;
