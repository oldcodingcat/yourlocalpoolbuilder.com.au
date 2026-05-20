import ServiceTemplate, { ServiceConfig } from "@/components/services/ServiceTemplate";

const config: ServiceConfig = {
  name: "Insulated Roofs",
  slug: "insulated-roofs",
  heroImage: "/images/insulated-roofs.webp",
  heroTagline:
    "Insulated roof panel installation across Sydney for patios and pergolas, delivering stronger thermal comfort, weather protection, and acoustic control.",
  aboutImage: "/images/pergolas-3.jpg",
  whyChooseImage: "/images/patios.jpg",
  materialsImage: "/images/flat-roof.jpg",
  processImage: "/images/pergolas-4.jpg",
  aboutService: [
    "An insulated roof system typically uses sandwich-style panels with an insulating core between durable outer layers, creating a roof that performs better thermally than many single-skin alternatives. In Australian conditions, this can make a major comfort difference in both heat and rain.",
    "For patios and pergolas exposed to strong summer sun, insulated panels can reduce harsh radiant load under cover, making outdoor spaces more usable through longer parts of the day. During wet weather, they can also soften roof noise compared with thinner roof pathways.",
    "This service is specifically focused on thermal and acoustic performance outcomes, not just visual roofing finish. It is ideal for homeowners prioritising year-round comfort.",
  ],
  whyChooseUsForThis: [
    "We install insulated roof systems with attention to full-system performance, including panel pathway selection, support planning, and detail quality at joints and flashings. These details are critical to achieving the comfort gains clients expect.",
    "Our team helps compare panel categories, thickness pathways, and finish options in practical terms so decisions are based on site conditions and usage goals, not exaggerated claims. We focus on realistic outcomes and long-term durability.",
    "If you want guidance on insulated patio roof options for your property, call (02) 5849 6376 and we can map the best pathway before scope is finalised.",
  ],
  materialsAndOptions: [
    "Panel thickness pathways commonly include around 50 mm, 75 mm, and 100 mm options depending on desired performance and structural context. We explain how thickness selection affects comfort expectations, profile depth, and integration planning.",
    "Finish options usually include a broad Colorbond-style colour range across external and internal faces, allowing alignment with both exterior roof language and interior outdoor aesthetics. This helps the structure feel cohesive with the home.",
    "Insulated roof systems can be integrated with new pergola or patio structures, and in some cases with existing frames where suitability allows. We assess compatibility early to avoid compromise during installation.",
  ],
  whatToExpect: [
    "Projects begin with a site assessment focused on orientation, heat exposure, and how the space is currently used. This allows us to recommend a panel strategy that matches practical comfort goals instead of a one-size-fits-all specification.",
    "Once thickness and finish pathways are confirmed, we define staged installation sequencing and key milestones. Where approvals considerations apply, we provide cautious guidance and recommend confirming project-specific obligations with council and qualified professionals.",
    "Installation is completed with final checks and handover guidance so you understand cleaning, care, and performance expectations. Most clients notice a clear qualitative lift in comfort without changing how they use the area.",
  ],
  benefits: [
    "Improved thermal comfort in high-sun conditions",
    "Reduced roof-noise perception during heavy rain",
    "Durable weather-protective roofing performance",
    "Multiple panel thickness pathways for tailored outcomes",
    "Broad colour and finish compatibility options",
    "Suitable for many patio and pergola applications",
    "Low-maintenance long-term roof solution",
    "Stronger year-round usability of outdoor areas",
  ],
  typicalUses:
    "Thermally improved patios, insulated pergola roofs, entertainment zones, alfresco living upgrades, and weather-protected family outdoor spaces.",
  process: [
    {
      title: "Site Assessment & Performance Brief",
      description:
        "We review orientation, heat exposure, and usage goals to define the right insulated roof pathway.",
    },
    {
      title: "Panel Selection & Integration",
      description:
        "We compare thickness and finish options, then align the system with your structure and aesthetic direction.",
    },
    {
      title: "Installation & Detailing",
      description:
        "Our team installs panels, flashings, and interfaces in a controlled sequence focused on reliable long-term performance.",
    },
    {
      title: "Handover & Maintenance Guidance",
      description:
        "We complete final checks and provide practical care advice so comfort and finish quality are preserved.",
    },
  ],
  faqs: [
    {
      q: "What is an insulated roof panel system?",
      a: "It is a sandwich-style roof panel with an insulating core designed to improve thermal comfort and reduce weather-related noise under cover.",
    },
    {
      q: "Do insulated roofs really improve outdoor comfort?",
      a: "For many properties, yes. They often provide a noticeable qualitative comfort lift in high heat and wet-weather use compared with basic roof systems.",
    },
    {
      q: "What panel thickness should I choose?",
      a: "It depends on site conditions and comfort priorities. We compare thickness pathways and recommend a practical fit for your project.",
    },
    {
      q: "Can insulated panels be fitted to existing structures?",
      a: "Sometimes, yes. We assess structural suitability first and confirm whether retrofit integration is practical and reliable.",
    },
    {
      q: "Are approvals required for insulated roof projects?",
      a: "Requirements vary by project specifics. We provide cautious guidance and recommend confirming obligations with council and qualified professionals.",
    },
    {
      q: "How can I start an insulated roof consultation?",
      a: "Call (02) 5849 6376 and we can discuss your site, comfort goals, and suitable panel pathways.",
    },
  ],
  galleryImages: [
    { src: "/images/insulated-roofs.webp", alt: "Insulated roof panel installation for thermal outdoor comfort" },
    { src: "/images/patios.jpg", alt: "Insulated patio roof integrated with entertaining layout" },
    { src: "/images/flat-roof.jpg", alt: "Flat-profile insulated roofing option with clean lines" },
    { src: "/images/pergolas-4.jpg", alt: "Completed insulated roof project for year-round usability" },
  ],
  relatedServices: [
    { name: "Patios", slug: "patios" },
    { name: "Sunroof", slug: "sunroof" },
    { name: "Pergola Building & Installation", slug: "pergola-building-and-installation" },
    { name: "Flat Roof", slug: "flat-roof" },
  ],
};

const InsulatedRoofs = () => <ServiceTemplate config={config} />;

export default InsulatedRoofs;
