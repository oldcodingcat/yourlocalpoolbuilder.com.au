import ServiceTemplate, { ServiceConfig } from "@/components/services/ServiceTemplate";

const config: ServiceConfig = {
  name: "Flat Roof Pergolas",
  slug: "flat-roof",
  heroImage: "/images/flat-roof.jpg",
  heroTagline:
    "Flat roof pergola installation in Sydney, delivering clean low-profile outdoor structures with modern architectural lines and practical weather protection.",
  aboutImage: "/images/pergolas-4.jpg",
  whyChooseImage: "/images/pergolas-2.jpg",
  materialsImage: "/images/insulated-roofs.webp",
  processImage: "/images/decking.jpg",
  aboutService: [
    "A flat roof pergola is a low-profile roofing solution designed to create a clean, contemporary outdoor extension without dominant roof volume. It is one of the most popular styles for modern Sydney homes where minimal lines and restrained architectural expression are preferred.",
    "Compared with gable roof systems, flat roof structures typically feel calmer and more discreet, making them ideal when you want coverage that blends with the home rather than becoming the visual centerpiece. They also differ from insulated-roof services, where performance categories are the main focus rather than roof geometry.",
    "For many projects, flat roof pathways strike the best balance between aesthetics, practicality, and day-to-day usability in compact to mid-size outdoor spaces.",
  ],
  whyChooseUsForThis: [
    "We design flat roof projects with careful attention to proportion, drainage strategy, and integration detail so the finished structure looks precise and performs reliably over time. Small errors in pitch or fascia detailing can compromise both appearance and water behaviour, so execution discipline matters.",
    "Our team focuses on clean architectural outcomes that align with existing facades, openings, and outdoor circulation. We plan for practical use from the start, so the roof does not just look minimal, it also functions effectively through changing weather.",
    "If you are deciding between flat and pitched roof pathways, call (02) 5849 6376 and we can compare options in practical terms before you lock the project scope.",
  ],
  materialsAndOptions: [
    "Flat roof systems can include Colorbond-oriented roof sheets, insulated panel pathways for stronger comfort, and refined fascia and gutter detailing to maintain a clean visual edge. Material selection should reflect both performance priorities and desired finish language.",
    "Attached and freestanding flat roof configurations are both possible depending on site constraints, access routes, and how you want the structure to connect with the home. We evaluate those factors early so design direction stays coherent.",
    "Styling options range from simple minimalist profiles to more layered finish approaches with ceiling-like undersides and integrated lighting pathways where clients want a more resolved architectural feel.",
  ],
  whatToExpect: [
    "Projects begin with site measurement and planning focused on levels, drainage direction, and practical roof fall requirements. Even low-profile systems need accurately resolved pitch to perform reliably.",
    "We then confirm materials, detailing pathway, and staged installation plan. If approvals considerations apply, we provide cautious guidance and recommend confirming project-specific obligations with council and qualified professionals.",
    "Construction follows a defined sequence from structural framing through roof and finishing details, with clear communication at each milestone and final care guidance on completion.",
  ],
  benefits: [
    "Clean low-profile architectural appearance",
    "Excellent fit for modern residential facades",
    "Practical weather protection without heavy roof volume",
    "Flexible integration with patios and decking zones",
    "Can incorporate insulated comfort-focused pathways",
    "Refined fascia and gutter detailing options",
    "Suitable for attached and freestanding applications",
    "Structured build process with clear communication",
  ],
  typicalUses:
    "Modern alfresco areas, compact backyard entertaining zones, side-return coverage, and clean-lined outdoor living extensions.",
  process: [
    {
      title: "Measure & Drainage Planning",
      description:
        "We assess levels, runoff direction, and site constraints to establish a reliable flat-roof strategy.",
    },
    {
      title: "Design & Detailing Direction",
      description:
        "We confirm material pathway, fascia and gutter details, and full project scope before build starts.",
    },
    {
      title: "Construction & Roof Works",
      description:
        "Our team installs structure and roof elements in a managed sequence focused on precision and long-term performance.",
    },
    {
      title: "Completion & Handover",
      description:
        "We complete final checks, clean-up, and provide practical maintenance guidance for ongoing reliability.",
    },
  ],
  faqs: [
    {
      q: "Are flat roof pergolas actually flat?",
      a: "They are low-profile, but still include a slight fall for drainage. Correct pitch planning is essential for reliable performance.",
    },
    {
      q: "How does flat roof style differ from gable roof style?",
      a: "Flat roofs are cleaner and more minimal, while gable roofs provide more vertical volume and a stronger pitched architectural expression.",
    },
    {
      q: "Can flat roofs include insulated panel options?",
      a: "Yes. Insulated pathways can be integrated where thermal comfort is a key objective for the outdoor area.",
    },
    {
      q: "Do flat roof pergola projects need approvals?",
      a: "Requirements vary by project specifics and location. We provide cautious guidance and recommend confirming obligations with council and qualified professionals.",
    },
    {
      q: "Will flat roofs suit smaller backyards?",
      a: "In many cases yes. Their low-profile form can work especially well in tighter spaces where visual bulk needs to be controlled.",
    },
    {
      q: "How do I start a flat roof pergola consultation?",
      a: "Call (02) 5849 6376 and we can review your site and outline practical options before final scope decisions.",
    },
  ],
  galleryImages: [
    { src: "/images/flat-roof.jpg", alt: "Flat roof pergola installation with clean contemporary profile" },
    { src: "/images/pergolas-4.jpg", alt: "Low-profile outdoor roof extension integrated with home facade" },
    { src: "/images/insulated-roofs.webp", alt: "Flat roof option with insulated panel configuration" },
    { src: "/images/decking.jpg", alt: "Flat roof pergola paired with decking for modern outdoor living" },
  ],
  relatedServices: [
    { name: "Insulated Roofs", slug: "insulated-roofs" },
    { name: "Gable Roof Pergolas", slug: "gable-roof" },
    { name: "Curved Roof Pergolas", slug: "curved-roof" },
    { name: "Patios", slug: "patios" },
  ],
};

const FlatRoof = () => <ServiceTemplate config={config} />;

export default FlatRoof;
