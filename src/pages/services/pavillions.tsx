import ServiceTemplate, { ServiceConfig } from "@/components/services/ServiceTemplate";

const config: ServiceConfig = {
  name: "Pavilions",
  slug: "pavillions",
  heroImage: "/images/pergolas-2.jpg",
  heroTagline:
    "Custom pavilion design and installation across Sydney, creating freestanding premium outdoor rooms for entertaining, relaxation, and poolside living.",
  aboutImage: "/images/pergolas-5.jpg",
  whyChooseImage: "/images/gazebos.jpg",
  materialsImage: "/images/carports.jpg",
  processImage: "/images/pergolas-3.jpg",
  aboutService: [
    "A pavilion is a freestanding outdoor structure designed as a destination space rather than a simple shade frame. Compared with many pergolas, pavilions are generally more substantial, often with fuller roof coverage and a stronger architectural presence in the landscape.",
    "They are commonly selected for poolside cabanas, dedicated entertaining zones, and stand-alone garden features where homeowners want an outdoor-room feel with clear spatial identity. In many projects, the pavilion becomes the visual anchor of the backyard.",
    "This service is best suited to clients wanting a premium, highly considered structure with long-term use in mind, including flexibility for furniture zoning, lighting, and staged upgrades.",
  ],
  whyChooseUsForThis: [
    "We have experience delivering larger-scale pavilion projects that need stronger planning discipline, from early concept layout through structural coordination and finish detailing. This is especially important when the pavilion must integrate cleanly with landscaping and hardscape.",
    "Our approach balances engineering practicality with high-finish outcomes so the completed structure feels intentional from every angle. We focus on proportion, material consistency, and construction quality that supports premium everyday use.",
    "If you are considering a pavilion as a major outdoor investment, call (02) 5849 6376. Early design alignment is critical for controlling scope, timeline, and finish quality.",
  ],
  materialsAndOptions: [
    "Roof pathways can include fully enclosed profiles, Colorbond-oriented options, and insulated systems for stronger thermal comfort, depending on intended use and site conditions. We compare these in terms of comfort, weather response, and upkeep.",
    "Side-treatment options range from fully open forms to partial screens and louvred elements where privacy, wind buffering, or visual framing is needed. These choices shape both aesthetics and practical day-to-day comfort.",
    "Material combinations often include feature timber framing, aluminium systems, or steel-oriented solutions depending on architectural goals and maintenance expectations. Final sizing is always matched to site context rather than template assumptions.",
  ],
  whatToExpect: [
    "Pavilion projects usually involve a longer planning cycle than a simple pergola because design refinement, structural coordination, and detailing are more extensive. We set this expectation early so the project stays realistic and organised.",
    "After concept confirmation, we define staged construction planning, key selections, and technical coordination requirements. Where approvals and engineering documents are relevant, we provide cautious guidance and recommend formal confirmation with council and qualified professionals.",
    "Build delivery then proceeds through sequenced phases including detailed finish work and final handover so the pavilion performs as a true long-term outdoor room.",
  ],
  benefits: [
    "Freestanding premium outdoor-room functionality",
    "Stronger architectural presence than standard shade frames",
    "Flexible roof and side-treatment configuration pathways",
    "Excellent for poolside and entertainment-focused layouts",
    "Scalable sizing for larger backyard programs",
    "High-detail finish quality for long-term appeal",
    "Clear staged coordination for complex builds",
    "Practical integration with landscaping and hardscape",
  ],
  typicalUses:
    "Poolside cabanas, outdoor dining rooms, garden feature structures, sheltered lounge zones, and stand-alone entertainment pavilions.",
  process: [
    {
      title: "Concept Consultation",
      description:
        "We define how the pavilion should function, where it should sit, and how it connects with the wider outdoor layout.",
    },
    {
      title: "Design & Structural Planning",
      description:
        "We refine roof form, materials, and side-treatment pathways with clear scope and technical direction.",
    },
    {
      title: "Approvals & Pre-Build Coordination",
      description:
        "Where relevant, we provide cautious approvals guidance and coordinate project staging before construction.",
    },
    {
      title: "Construction & Detailed Handover",
      description:
        "We deliver the pavilion in managed phases with finish-focused execution and practical final handover support.",
    },
  ],
  faqs: [
    {
      q: "How is a pavilion different from a pergola or gazebo?",
      a: "A pavilion is usually more substantial and room-like, often with fuller roof coverage and a stronger architectural footprint.",
    },
    {
      q: "Are pavilion projects suitable for pool areas?",
      a: "Yes. Poolside pavilions are a common use case, especially where clients want a defined lounge or entertaining structure.",
    },
    {
      q: "Can pavilions include partial side screens?",
      a: "Absolutely. We can plan open, partially screened, or louvred side treatments based on comfort and privacy goals.",
    },
    {
      q: "Do pavilion projects usually take longer than pergola installs?",
      a: "In many cases yes, because design, documentation, and detailing are typically more involved than standard shade structures.",
    },
    {
      q: "Will engineering or permits be required?",
      a: "This depends on project specifics. We provide cautious guidance and recommend formal confirmation with council and qualified professionals.",
    },
    {
      q: "How do I start planning a custom pavilion?",
      a: "Call (02) 5849 6376 and we can discuss concept direction, sizing, and practical next steps for your property.",
    },
  ],
  galleryImages: [
    { src: "/images/pergolas-2.jpg", alt: "Freestanding pavilion structure designed as an outdoor room" },
    { src: "/images/gazebos.jpg", alt: "Poolside pavilion-style entertaining shelter" },
    { src: "/images/carports.jpg", alt: "Larger-span roof form options for pavilion projects" },
    { src: "/images/pergolas-5.jpg", alt: "Premium pavilion finishes integrated with landscaping" },
  ],
  relatedServices: [
    { name: "Gazebos", slug: "gazebos" },
    { name: "Pergola Building & Installation", slug: "pergola-building-and-installation" },
    { name: "Insulated Roofs", slug: "insulated-roofs" },
    { name: "Patios", slug: "patios" },
  ],
};

const Pavillions = () => <ServiceTemplate config={config} />;

export default Pavillions;
