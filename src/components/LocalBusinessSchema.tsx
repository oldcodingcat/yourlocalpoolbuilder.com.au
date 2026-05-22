const poolServices = [
  {
    name: "Inground Pools",
    description: "Inground pool design and construction for Sydney homes.",
  },
  {
    name: "Concrete Pools",
    description: "Luxury custom concrete pool construction across Sydney.",
  },
  {
    name: "Plunge Pools",
    description: "Compact plunge pool design and construction for premium outdoor spaces.",
  },
  {
    name: "Pool Renovations",
    description: "Pool renovations, resurfacing, upgrades and modernisation.",
  },
  {
    name: "Spas",
    description: "Custom spa construction and integrated pool wellness features.",
  },
];

export const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Your Local Pool Builder",
    url: "https://yourlocalpoolbuilder.com.au",
    telephone: "+61253013397",
    image: "https://yourlocalpoolbuilder.com.au/yourlocalpoolbuilder.webp",
    areaServed: "Sydney, NSW, Australia",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sydney",
      addressRegion: "NSW",
      addressCountry: "AU",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Luxury Pool Building Services",
      itemListElement: poolServices.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
          areaServed: "Sydney, NSW, Australia",
        },
      })),
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
};
