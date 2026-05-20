import { offices } from "@/data/offices";
import { services } from "@/data/services";

export const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Your Local Pergola Installer",
    url: "https://yourlocalpergolainstaller.com.au",
    telephone: "+61258496376",
    areaServed: "Sydney Metropolitan Area, NSW, Australia",
    location: Object.values(offices).map((office) => ({
      "@type": "Place",
      name: office.name,
      telephone: "+61258496376",
      address: {
        "@type": "PostalAddress",
        streetAddress: office.address,
        addressRegion: "NSW",
        addressCountry: "AU",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: office.lat,
        longitude: office.lng,
      },
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pergola Installation Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
        },
      })),
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
};
