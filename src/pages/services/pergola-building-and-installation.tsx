import ServiceTemplate, { ServiceConfig } from "@/components/services/ServiceTemplate";

const config: ServiceConfig = {
  name: "Pergola Building & Installation",
  slug: "pergola-building-and-installation",
  heroImage: "/images/pergolas.jpeg",
  heroTagline:
    "Custom pergola design, engineering, and installation across Sydney Metro, delivered as a complete end-to-end service from concept to handover.",
  aboutImage: "/images/pergolas-5.jpg",
  whyChooseImage: "/images/pergolas-2.jpg",
  materialsImage: "/images/pergolas-3.jpg",
  processImage: "/images/pergolas-4.jpg",
  aboutService: [
    "Pergola Building & Installation is our core service hub, covering the full pathway from early consultation through custom design, structural planning, and final build delivery. It is the broad umbrella service under which more specific offerings like Sunroof, Pavilions, and roof-style variants sit.",
    "This service is ideal when you need a complete custom pergola solution rather than a single component upgrade. We define structure type, layout, roof direction, and finish pathway around your property, your household routines, and how you want to use the space every day.",
    "Because each home and block is different, we treat pergola construction as a tailored project rather than a package install. That approach improves long-term performance and architectural fit.",
  ],
  whyChooseUsForThis: [
    "Our team manages pergola projects end to end, so clients are not left coordinating fragmented trades or inconsistent decisions. You get one workflow from planning through handover, with clear accountability at each phase.",
    "We are focused on practical quality: accurate set-out, disciplined structural work, dependable roof detailing, and clean execution on occupied homes. The result is a pergola that feels permanent, performs reliably, and integrates with the house.",
    "For a direct conversation about scope, style, and likely pathways for your project, call (02) 5849 6376. Early technical clarity usually saves time and cost before commitments are made.",
  ],
  materialsAndOptions: [
    "Material options typically include timber for natural warmth, aluminium for low-maintenance durability, steel for robust structural outcomes, and Colorbond-oriented roof systems for weather resilience. We compare each pathway in terms of appearance, maintenance, and long-term performance.",
    "Style directions can range from modern minimal forms to more traditional or Mediterranean-influenced detailing depending on your home architecture. We also help compare attached and freestanding configurations based on circulation and site use.",
    "Roof pathways include open-beam concepts, louvered and partially open solutions, and covered systems where stronger weather protection is required. Selection is guided by real usage needs, not just visual preference.",
  ],
  whatToExpect: [
    "Projects usually move through defined stages: consultation, design development, approvals guidance where relevant, construction, and final handover. This keeps decisions organised and reduces uncertainty as the project progresses.",
    "At each phase, we provide practical communication around what is happening next, what selections are needed, and what timing to expect. Where approvals are relevant, we provide cautious guidance and recommend confirming project-specific requirements with council and qualified professionals.",
    "Construction is completed in a controlled sequence with final checks, clean-up, and maintenance guidance so the pergola stays high-performing and visually consistent over time.",
  ],
  benefits: [
    "Complete custom pergola design and construction delivery",
    "Single-team coordination from concept to handover",
    "Flexible material pathways for style and performance goals",
    "Attached or freestanding options based on your site",
    "Roof pathways from open-beam to fully covered",
    "Clear staged communication throughout the project",
    "Strong architectural integration with existing home design",
    "Build quality focused on long-term durability",
  ],
  typicalUses:
    "Custom backyard shade structures, outdoor dining zones, entertainment spaces, poolside coverage, and integrated indoor-outdoor living upgrades.",
  process: [
    {
      title: "Discovery Consultation",
      description:
        "We review your property, usage goals, and style direction to establish a practical project brief.",
    },
    {
      title: "Design & Technical Planning",
      description:
        "We define structure type, materials, and roof strategy, then confirm staged scope for delivery.",
    },
    {
      title: "Approvals & Pre-Construction",
      description:
        "Where relevant, we provide cautious approvals guidance and prepare the project for efficient build sequencing.",
    },
    {
      title: "Construction & Handover",
      description:
        "We complete installation with regular updates, final quality checks, and practical maintenance guidance.",
    },
  ],
  faqs: [
    {
      q: "What does your full pergola building service include?",
      a: "It includes consultation, custom design direction, material and roof planning, construction delivery, and final handover support in one coordinated workflow.",
    },
    {
      q: "How is this different from your other service pages?",
      a: "This is the core umbrella service for complete pergola projects, while other pages focus on specific roof types or structure variants.",
    },
    {
      q: "Can you build both attached and freestanding pergolas?",
      a: "Yes. We assess circulation, site constraints, and architectural fit to recommend the right configuration for your property.",
    },
    {
      q: "Do you handle permits and approvals?",
      a: "We provide cautious guidance where relevant and recommend confirming project-specific obligations with council and qualified professionals.",
    },
    {
      q: "How long does a custom pergola project usually take?",
      a: "Timing varies by scope and complexity, but we provide staged milestones so you know what to expect at each phase.",
    },
    {
      q: "Can we start with a planning call?",
      a: "Absolutely. Call (02) 5849 6376 and we can discuss practical options before final scope decisions.",
    },
  ],
  galleryImages: [
    { src: "/images/pergolas.jpeg", alt: "Custom pergola construction for Sydney outdoor living" },
    { src: "/images/pergolas-2.jpg", alt: "Freestanding pergola with integrated entertaining zone" },
    { src: "/images/pergolas-3.jpg", alt: "Attached pergola design aligned with existing home roof lines" },
    { src: "/images/pergolas-4.jpg", alt: "Finished pergola installation with weather-protective roofing" },
  ],
  relatedServices: [
    { name: "Patios", slug: "patios" },
    { name: "Gazebos", slug: "gazebos" },
    { name: "Gable Roof", slug: "gable-roof" },
    { name: "Flat Roof", slug: "flat-roof" },
  ],
};

const PergolaBuildingAndInstallation = () => <ServiceTemplate config={config} />;

export default PergolaBuildingAndInstallation;
