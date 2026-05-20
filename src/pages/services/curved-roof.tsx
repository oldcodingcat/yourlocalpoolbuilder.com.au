import ServiceTemplate, { ServiceConfig } from "@/components/services/ServiceTemplate";

const config: ServiceConfig = {
  name: "Curved Roof Pergolas",
  slug: "curved-roof",
  heroImage: "/images/curved-roofs.jpg",
  heroTagline:
    "Curved roof pergola installation in Sydney, delivering soft architectural lines and distinctive outdoor structures with practical weather performance.",
  aboutImage: "/images/pergolas-4.jpg",
  whyChooseImage: "/images/pergolas-2.jpg",
  materialsImage: "/images/sunroof.jpg",
  processImage: "/images/pergolas-5.jpg",
  aboutService: [
    "A curved roof pergola uses a smooth arched roof profile to create a softer architectural expression than flatter or pitched alternatives. It is often chosen by homeowners who want a more fluid visual language and a structure that feels distinctive without becoming visually heavy.",
    "Compared with gable roofs, curved forms are less angular and less traditional in silhouette. Compared with flat roofs, they introduce more sculptural character and movement. They are also different from Sunroof and Insulated Roof services, where material category or thermal performance is the main focus rather than roof shape itself.",
    "Curved roofs can be particularly effective in contemporary and transitional outdoor settings where the goal is to combine comfort coverage with an elegant, recognisable design statement.",
  ],
  whyChooseUsForThis: [
    "We design curved roof projects with close attention to proportion, structure behaviour, and water-shedding detail so the finished form is both visually refined and practically reliable. Curved forms can look effortless, but they require accurate planning and clean execution.",
    "Our team focuses on integrating the curved profile with existing architecture and landscape context, making sure the new structure feels intentional rather than stylistically disconnected from the property.",
    "If you are weighing curved, flat, and gable pathways for your site, call (02) 5849 6376 and we can compare options based on design goals, usage needs, and practical construction outcomes.",
  ],
  materialsAndOptions: [
    "Curved roof pathways can incorporate compatible metal roofing systems and selected panel options depending on desired finish, structural requirements, and weather performance goals. We compare these based on lifecycle practicality as well as aesthetics.",
    "Both attached and freestanding curved applications are possible depending on layout and architectural context. Early design work focuses on getting the curvature and span proportions right so the roof reads cleanly from multiple viewpoints.",
    "Colour and finish matching are also important. We help clients align roof tone, frame detailing, and surrounding materials so the curved structure feels cohesive with the wider outdoor environment.",
  ],
  whatToExpect: [
    "Projects begin with site assessment and concept development to confirm where a curved profile will perform best visually and functionally. This includes reviewing access, runoff direction, and integration with existing outdoor zones.",
    "Design and fabrication planning for curved systems can be more involved than straightforward flat profiles, so we set clear expectations on sequencing and key decisions. Where approvals are relevant, we provide cautious guidance and recommend confirming project-specific requirements with council and qualified professionals.",
    "Installation then follows staged construction with practical communication at each milestone, finishing with detail checks and handover guidance for long-term care.",
  ],
  benefits: [
    "Distinctive soft architectural roof expression",
    "Less angular visual profile than pitched alternatives",
    "Strong design identity in modern outdoor settings",
    "Flexible attached and freestanding application pathways",
    "Balanced weather protection with refined form",
    "Can complement both contemporary and transitional homes",
    "Professional proportion-led design and execution",
    "Clear staged project communication and delivery",
  ],
  typicalUses:
    "Architectural outdoor entertaining zones, distinctive pergola upgrades, feature roofed alfresco spaces, and design-led backyard transformations.",
  process: [
    {
      title: "Site Assessment & Concept Fit",
      description:
        "We evaluate layout, architecture, and practical site constraints to confirm whether a curved profile is the right fit.",
    },
    {
      title: "Design & Fabrication Planning",
      description:
        "We define curvature, materials, and detailing pathway with clear scope so build expectations are aligned.",
    },
    {
      title: "Installation & Structural Detailing",
      description:
        "Our team completes staged installation with focus on finish consistency, water management, and structural integrity.",
    },
    {
      title: "Final Review & Handover",
      description:
        "We perform final checks and provide maintenance guidance to preserve both form quality and long-term performance.",
    },
  ],
  faqs: [
    {
      q: "How does a curved roof differ from gable and flat roof options?",
      a: "Curved roofs offer a softer, flowing profile; gable roofs are more angular and pitched, while flat roofs are cleaner and lower-profile.",
    },
    {
      q: "Are curved roofs mainly aesthetic or also practical?",
      a: "They are both. Curved systems can deliver strong visual character while still providing practical weather protection when detailed correctly.",
    },
    {
      q: "Can curved roofs use translucent or insulated materials?",
      a: "In some configurations, yes. We assess compatibility based on structure, performance goals, and desired finish outcome.",
    },
    {
      q: "Do curved roof projects take longer than flat roof projects?",
      a: "They can involve more design and fabrication coordination, so timelines may differ by scope and site complexity.",
    },
    {
      q: "Will curved roof pergolas require approvals?",
      a: "Requirements vary by project specifics. We provide cautious guidance and recommend confirming obligations with council and qualified professionals.",
    },
    {
      q: "How can I start comparing roof-shape options?",
      a: "Call (02) 5849 6376 and we can map curved, flat, and gable pathways against your site and design priorities.",
    },
  ],
  galleryImages: [
    { src: "/images/curved-roofs.jpg", alt: "Curved roof pergola with soft architectural profile" },
    { src: "/images/pergolas-4.jpg", alt: "Arched pergola roof integrated with outdoor entertaining zone" },
    { src: "/images/sunroof.jpg", alt: "Curved roof material pathway with light-focused options" },
    { src: "/images/pergolas-5.jpg", alt: "Completed curved pergola installation with clean finishing" },
  ],
  relatedServices: [
    { name: "Flat Roof Pergolas", slug: "flat-roof" },
    { name: "Gable Roof Pergolas", slug: "gable-roof" },
    { name: "Sunroof", slug: "sunroof" },
    { name: "Pergola Building & Installation", slug: "pergola-building-and-installation" },
  ],
};

const CurvedRoof = () => <ServiceTemplate config={config} />;

export default CurvedRoof;
