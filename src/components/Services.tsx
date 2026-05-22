import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    name: "Luxury Custom Concrete Pools",
    href: "/concrete-pools/",
    image: "/images/services-01-Luxury-Custom-Concrete-Pools.webp",
    text: "Bespoke concrete pool construction designed around your Sydney home, lifestyle and outdoor space.",
  },
  {
    name: "Plunge Pools",
    href: "/plunge-pools/",
    image: "/images/services-02-Plunge-Pools.webp",
    text: "Compact, elegant plunge pools for smaller backyards, courtyards and premium relaxation zones.",
  },
  {
    name: "Inground Pools",
    href: "/inground-pools/",
    image: "/images/services-03-Inground-Pools.webp",
    text: "Premium inground pool builds with clean lines, refined finishes and long-term structural performance.",
  },
  {
    name: "Pool Renovations",
    href: "/pool-renovations/",
    image: "/images/services-04-Pool-Renovations.webp",
    text: "Transform tired pools with resurfacing, modern finishes, new surrounds and practical upgrades.",
  },
  {
    name: "Spas",
    href: "/spas/",
    image: "/images/services-05-Spas.webp",
    text: "Custom spa additions and integrated wellness features for resort-style living at home.",
  },
  {
    name: "Request Quote Today",
    href: "#quote",
    image: "/images/yourlocalpoolbuilder-02.webp",
    text: "Speak with our Sydney pool building team about your vision, budget and project timeline.",
    cta: true,
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-background py-18 md:py-24">
      <div className="container-custom">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-eyebrow mb-4 text-primary">Our services</p>
          <h2 className="font-heading text-4xl font-semibold leading-tight text-foreground md:text-5xl">Luxury Pool Building Services</h2>
          <p className="mt-4 font-body text-sm leading-7 text-muted-foreground md:text-base">
            From new pool construction to renovations and integrated spas, we deliver carefully designed swimming pool solutions for Sydney homeowners.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const content = (
              <>
                <img src={service.image} alt={service.name} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[#09233C]/55 transition group-hover:bg-[#09233C]/42" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#09233C]/95 to-transparent p-6 text-white">
                  <h3 className="font-heading text-3xl font-semibold leading-tight">{service.name}</h3>
                  <p className="mt-3 font-body text-sm leading-6 text-white/78">{service.text}</p>
                  <span className="mt-4 inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </>
            );

            return service.href.startsWith("#") ? (
              <a key={service.name} href={service.href} className="group relative block min-h-[280px] overflow-hidden shadow-medium">
                {content}
              </a>
            ) : (
              <Link key={service.name} to={service.href} className="group relative block min-h-[280px] overflow-hidden shadow-medium">
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
