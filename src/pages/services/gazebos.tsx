import ServiceTemplate, { ServiceConfig } from "@/components/services/ServiceTemplate";

const config: ServiceConfig = {
  name: "Gazebos",
  slug: "gazebos",
  heroImage: "/images/gazebos.jpg",
  heroTagline:
    "Custom gazebo builders in Sydney delivering freestanding garden shelters that combine practical comfort with strong visual character.",
  aboutImage: "/images/pergolas-5.jpg",
  whyChooseImage: "/images/decking.jpg",
  materialsImage: "/images/pergolas-3.jpg",
  processImage: "/images/patios.jpg",
  aboutService: [
    "A gazebo is a freestanding outdoor shelter designed to create a compact destination zone in the landscape. Compared with many pergolas, gazebos are usually more ornamental and self-contained, and compared with larger pavilions they are typically more compact in scale and lighter in visual weight.",
    "Gazebos are a strong choice when the goal is to create a focal point for seating, reading, poolside relaxation, or a quiet garden retreat without dominating the entire backyard. They can also support spa corners and small entertaining areas where a defined protected structure is more practical than open shade.",
    "In residential Sydney projects, a gazebo works best when proportions, placement, and access paths are resolved early. The structure should feel intentional within the garden layout and support how the household actually uses the space during weekdays and weekends.",
  ],
  whyChooseUsForThis: [
    "We design and build gazebos with close attention to site context, not just structure size. That includes selecting the right location, balancing sightlines from the home, and making sure the final gazebo complements existing landscaping rather than competing with it.",
    "Our build approach focuses on reliable footings, durable framing, and clean finishing details so gazebos remain stable and attractive over time. We also help clients plan practical transitions to nearby paving, pathways, and decks so movement around the structure feels natural.",
    "If you want to discuss the best gazebo configuration for your property, call (02) 5849 6376 and we can map practical options before final scope decisions are locked in.",
  ],
  materialsAndOptions: [
    "Common gazebo material pathways include feature timber for natural warmth, aluminium for lower maintenance, and steel-oriented structures where robust performance is a priority. Selection should be based on style expectations, upkeep tolerance, and long-term exposure conditions.",
    "Roof forms can vary from classic pitched and hip profiles to cleaner contemporary interpretations depending on architectural context. We also discuss open-sided layouts versus partial screening where privacy, wind control, or visual enclosure is needed.",
    "Shape and size decisions are critical. A gazebo should be proportionate to surrounding garden space and furniture use, with enough coverage for comfort while preserving airflow and visual balance in the broader outdoor design.",
  ],
  whatToExpect: [
    "Projects start with site selection and concept planning so the gazebo location works with orientation, circulation, and existing landscape features. This early step often has more impact on final satisfaction than any single material choice.",
    "After concept confirmation, we define scope, footing strategy, and installation sequence in a staged workflow. Where approvals questions are relevant, we provide cautious guidance and recommend confirming project-specific requirements with council and qualified professionals.",
    "Installation is completed in clear phases with practical communication and final clean-up. We finish with handover guidance so you understand ongoing care and how to keep the gazebo looking and performing at its best.",
  ],
  benefits: [
    "Freestanding focal-point structure for outdoor living",
    "Strong visual character in garden settings",
    "Flexible use for seating, spa zones, or poolside retreat",
    "Multiple material and roof-style pathways",
    "Practical weather shelter with open-air feel",
    "Scalable sizing for compact and mid-size yards",
    "Can integrate cleanly with nearby decks and paving",
    "Durable installation with long-term usability in mind",
  ],
  typicalUses:
    "Garden seating shelters, poolside retreats, spa corners, compact entertaining spaces, and decorative focal-point structures.",
  process: [
    {
      title: "Site Selection & Brief",
      description:
        "We review orientation, access, and garden layout to identify the most suitable gazebo location and use profile.",
    },
    {
      title: "Design & Material Pathway",
      description:
        "We confirm proportions, roof style, and material options so the structure aligns with the property and lifestyle goals.",
    },
    {
      title: "Footings & Installation",
      description:
        "Our team completes footing preparation and staged construction with focus on stability, finish quality, and clean site execution.",
    },
    {
      title: "Handover & Care Guidance",
      description:
        "We complete final checks and provide maintenance guidance to preserve appearance and long-term outdoor performance.",
    },
  ],
  faqs: [
    {
      q: "How is a gazebo different from a pavilion?",
      a: "Gazebos are generally more compact and ornamental, while pavilions are often larger, more room-like structures with a stronger premium footprint.",
    },
    {
      q: "Can a gazebo be used near pools or spas?",
      a: "Yes. Gazebos are commonly used as poolside or spa-adjacent shelters when site spacing and access are planned carefully.",
    },
    {
      q: "What gazebo materials are best for Sydney conditions?",
      a: "Timber, aluminium, and steel pathways can all perform well. The best choice depends on style goals, maintenance preferences, and site exposure.",
    },
    {
      q: "Do gazebos require council approvals?",
      a: "Requirements vary by location and project specifics. We provide cautious guidance and recommend confirming obligations with council and qualified professionals.",
    },
    {
      q: "Can gazebos integrate with existing decking or paving?",
      a: "Absolutely. We plan transitions and levels so the gazebo connects cleanly with nearby outdoor surfaces and movement paths.",
    },
    {
      q: "How do we start planning a custom gazebo?",
      a: "Call (02) 5849 6376 and we can discuss site options, likely configurations, and staged next steps for your project.",
    },
  ],
  galleryImages: [
    { src: "/images/gazebos.jpg", alt: "Custom freestanding gazebo installation in Sydney garden" },
    { src: "/images/pergolas-5.jpg", alt: "Gazebo positioned as a backyard focal-point shelter" },
    { src: "/images/decking.jpg", alt: "Gazebo integration with nearby decking and circulation zones" },
    { src: "/images/patios.jpg", alt: "Compact outdoor relaxation structure with practical weather cover" },
  ],
  relatedServices: [
    { name: "Pavilions", slug: "pavillions" },
    { name: "Pergola Building & Installation", slug: "pergola-building-and-installation" },
    { name: "Decking", slug: "decking" },
    { name: "Patios", slug: "patios" },
  ],
};

const Gazebos = () => <ServiceTemplate config={config} />;

export default Gazebos;
