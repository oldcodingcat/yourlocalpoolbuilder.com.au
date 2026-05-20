import ServiceTemplate, { ServiceConfig } from "@/components/services/ServiceTemplate";

const config: ServiceConfig = {
  name: "Sunroof",
  slug: "sunroof",
  heroImage: "/images/sunroof.jpg",
  heroTagline:
    "Sunroof and translucent roofing installation across Sydney, combining UV protection with natural light for practical outdoor comfort.",
  aboutImage: "/images/pergolas-2.jpg",
  whyChooseImage: "/images/pergolas-3.jpg",
  materialsImage: "/images/curved-roofs.jpg",
  processImage: "/images/insulated-roofs.webp",
  aboutService: [
    "A sunroof system in outdoor construction generally refers to translucent roofing that allows controlled daylight while protecting the space from rain and harsh weather. It is commonly used in pergolas, patios, entry overhangs, selected carport integrations, and poolside areas where natural light matters.",
    "Unlike solid roof systems designed for maximum shade, sunroof pathways balance light transmission and practical comfort. With the right panel grade and tint choice, homeowners can keep outdoor zones bright and usable without exposing the area to full UV intensity.",
    "That makes sunroof installation a strong option for properties where preserving daylight quality is as important as weather protection and clean architectural finish.",
  ],
  whyChooseUsForThis: [
    "We install translucent roofing with a focus on long-term performance, including disciplined framing alignment, practical drainage detailing, and finish quality suited to the existing structure. These technical details are what make the system durable over time.",
    "Our team helps you compare polycarbonate grades, tint pathways, and support structures based on actual site conditions rather than generic assumptions. We also make sure the selected system stays compatible with timber, aluminium, or steel framing contexts.",
    "If you want guidance on UV-light balance and panel options for your property, call (02) 5849 6376 and we can walk through suitable pathways before final scope is set.",
  ],
  materialsAndOptions: [
    "Common panel categories include multiwall systems, corrugated profiles, and solid sheet variants, each with different behaviour for light diffusion, durability, and visual finish. Selection should align with both performance goals and architecture.",
    "Tint and colour pathways usually include clear, opal, bronze, and darker solar-control options. We discuss how each affects brightness, glare, and heat perception so you can select a practical day-to-day balance.",
    "Thickness and support spacing are equally important for long-term reliability. We plan these together with framing compatibility so performance holds through Sydney weather cycles.",
  ],
  whatToExpect: [
    "Sunroof projects can be faster than heavier solid-roof builds, but they still begin with a structured site assessment covering orientation, runoff behaviour, and integration with existing structures. This planning step reduces avoidable issues later.",
    "After confirming panel pathway, tint choice, and support strategy, we stage installation in a clear sequence with practical communication at each step. Where approvals considerations apply, we provide cautious guidance and recommend formal confirmation with council and qualified professionals.",
    "Handover includes cleaning and maintenance guidance so the roof keeps light quality, finish clarity, and weather performance over the long term.",
  ],
  benefits: [
    "Natural daylight with practical weather protection",
    "UV-aware panel pathways for outdoor comfort",
    "Multiple tint options for glare control",
    "Compatible with timber, aluminium, and steel frames",
    "Efficient installation compared with heavy roof systems",
    "Clean visual integration with modern and classic homes",
    "Drainage-focused detailing for durability",
    "Low-maintenance ongoing care requirements",
  ],
  typicalUses:
    "Patio light roofs, pergola upgrades, entry cover extensions, carport light solutions, poolside weather cover, and bright outdoor transition zones.",
  process: [
    {
      title: "Site Assessment & Light Planning",
      description:
        "We review orientation, shading, and runoff behaviour to identify the most suitable translucent roof pathway.",
    },
    {
      title: "Panel & Tint Selection",
      description:
        "We compare panel types and colour options so light, comfort, and appearance align with your goals.",
    },
    {
      title: "Installation & Drainage Detailing",
      description:
        "Our team installs framing interfaces, sheets, and water-management details in a controlled sequence.",
    },
    {
      title: "Handover & Care Guidance",
      description:
        "We complete final checks and provide maintenance advice to preserve clarity and long-term performance.",
    },
  ],
  faqs: [
    {
      q: "What is the main benefit of sunroof panels for outdoor spaces?",
      a: "They provide weather protection while preserving natural daylight, helping outdoor zones feel open and usable without full exposure.",
    },
    {
      q: "Which polycarbonate type is best for my project?",
      a: "It depends on your light, heat, and durability priorities. We compare multiwall, corrugated, and solid options based on your site needs.",
    },
    {
      q: "Can sunroof systems filter UV while letting in light?",
      a: "Yes. Many panel pathways are designed to reduce harmful UV while still delivering comfortable daylight levels.",
    },
    {
      q: "Are sunroof installations quicker than solid roof builds?",
      a: "Often yes, though timing still depends on scope, framing context, and site constraints. We provide clear staged expectations upfront.",
    },
    {
      q: "Do these projects require approvals?",
      a: "Requirements vary by project specifics. We provide cautious guidance and recommend confirming obligations with council and qualified professionals.",
    },
    {
      q: "How do I start a sunroof project consultation?",
      a: "Call (02) 5849 6376 and we can discuss panel and tint pathways that best suit your property.",
    },
  ],
  galleryImages: [
    { src: "/images/sunroof.jpg", alt: "Translucent sunroof installation with UV-aware daylight control" },
    { src: "/images/pergolas-3.jpg", alt: "Polycarbonate roofing integrated with custom pergola framing" },
    { src: "/images/curved-roofs.jpg", alt: "Curved translucent roof option for soft light diffusion" },
    { src: "/images/insulated-roofs.webp", alt: "Comparison of translucent and insulated roof pathways" },
  ],
  relatedServices: [
    { name: "Insulated Roofs", slug: "insulated-roofs" },
    { name: "Flat Roof", slug: "flat-roof" },
    { name: "Pergola Building & Installation", slug: "pergola-building-and-installation" },
  ],
};

const Sunroof = () => <ServiceTemplate config={config} />;

export default Sunroof;
