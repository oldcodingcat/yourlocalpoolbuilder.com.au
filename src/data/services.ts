export type ServicePageData = {
  slug: string;
  title: string;
  eyebrow: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  introTitle: string;
  introEyebrow: string;
  introParagraphs: string[];
  primaryImage: string;
  primaryImageAlt: string;
  reasonsTitle: string;
  reasonsEyebrow: string;
  reasons: string[];
  benefits: {
    title: string;
    text: string;
  }[];
  secondaryImage: string;
  secondaryImageAlt: string;
  helpEyebrow: string;
  helpTitle: string;
  helpParagraphs: string[];
  ctaLabel: string;
};

export const services: ServicePageData[] = [
  {
    slug: "inground-pools",
    title: "Inground Pools",
    eyebrow: "Luxury inground pool builders Sydney",
    metaTitle: "Inground Pools Sydney | Luxury Pool Builders",
    metaDescription:
      "Custom inground pools in Sydney by Your Local Pool Builder. Premium concrete pool construction, luxury finishes and tailored outdoor living solutions.",
    heroImage: "/images/yourlocalpoolbuilder-featured-works-02.webp",

    introEyebrow: "Custom inground pool construction",
    introTitle: "Top-Quality Inground Pools for Sydney Homes",
    introParagraphs: [
      "An inground pool is one of the most elegant ways to transform a backyard into a private outdoor retreat. Unlike above-ground options, a custom inground pool is integrated into the landscape, creating a polished and permanent feature that complements the architecture of your home.",
      "At Your Local Pool Builder, we specialise in premium inground pool construction across Sydney. Whether you want a clean modern pool, a family-friendly swimming space, a compact courtyard pool or a luxury outdoor entertaining zone, we help shape the design around your property and lifestyle.",
      "Our approach focuses on quality construction, considered design details and clear communication from the first conversation through to completion.",
    ],

    primaryImage: "/images/services-03-Inground-Pools.webp",
    primaryImageAlt: "Luxury inground pool beside a modern Sydney home",

    reasonsEyebrow: "Why build an inground pool?",
    reasonsTitle:
      "A permanent outdoor feature designed for lifestyle, value and daily enjoyment",
    reasons: [
      "Create a refined pool design that complements your home’s architecture.",
      "Add value, lifestyle appeal and long-term enjoyment to your property.",
      "Build a private space for entertaining, swimming, relaxing and family time.",
      "Choose custom finishes, coping, surrounds, steps, benches and waterline details.",
      "Integrate your pool with landscaping, alfresco zones, spas or outdoor living areas.",
    ],

    benefits: [
      {
        title: "Designed for your property",
        text: "Every inground pool is planned around your home, block shape, landscaping, lifestyle and long-term outdoor living goals.",
      },
      {
        title: "Premium concrete construction",
        text: "A custom concrete inground pool gives you flexibility in shape, depth, finishes and architectural detailing.",
      },
      {
        title: "Luxury outdoor living",
        text: "Create a private space for relaxing, entertaining, family time and resort-style living at home.",
      },
      {
        title: "Sydney-focused advice",
        text: "We help you understand design direction, site considerations and practical next steps for your Sydney pool project.",
      },
    ],

    secondaryImage: "/images/yourlocalpoolbuilder-featured-works-04.webp",
    secondaryImageAlt: "Custom inground pool and luxury outdoor living area",

    helpEyebrow: "How we can help",
    helpTitle: "From concept to a finished pool that elevates your home",
    helpParagraphs: [
      "We are more than pool installers. We help you understand the best construction approach, design direction and practical options for your backyard.",
      "From pool shape and placement to finishes, surrounds, steps, benches, spa integration and outdoor living areas, our team works with you to create an inground pool that is both functional and visually refined.",
      "The result is a high-quality pool built to suit your home, improve your lifestyle and create a space you can enjoy for years to come.",
    ],

    ctaLabel: "Discuss your inground pool",
  },
];

export const getServiceBySlug = (slug?: string) => {
  return services.find((service) => service.slug === slug);
};