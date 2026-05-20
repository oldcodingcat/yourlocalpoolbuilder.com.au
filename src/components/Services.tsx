import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const services = [
  {
    id: "pergola",
    name: "Pergola Building & Installation",
    slug: "/pergola-building-and-installation/",
    tags: ["Custom Design", "Premium Build", "Full Install"],
    description:
      "Custom pergola design, building and installation across Sydney.",
    image: "/images/pergolas.jpeg",
  },
  {
    id: "sunroof",
    name: "Sunroof",
    slug: "/sunroof/",
    tags: ["Natural Light", "Modern", "Versatile"],
    description:
      "Premium sunroof installations for your outdoor living space.",
    image: "/images/sunroof.jpg",
  },
  {
    id: "pavillions",
    name: "Pavilions",
    slug: "/pavillions/",
    tags: ["Entertaining", "Spacious", "Elegant"],
    description:
      "Beautiful pavilion structures for entertaining and relaxation.",
    image: "/images/pergolas-2.jpg",
  },
  {
    id: "patios",
    name: "Patios",
    slug: "/patios/",
    tags: ["All-Weather", "Comfort", "Outdoor Living"],
    description:
      "Covered patio designs and installations for year-round comfort.",
    image: "/images/patios.jpg",
  },
  {
    id: "insulated-roofs",
    name: "Insulated Roofs",
    slug: "/insulated-roofs/",
    tags: ["Energy Efficient", "Cool in Summer", "Warm in Winter"],
    description:
      "Energy-efficient insulated roof solutions for outdoor areas.",
    image: "/images/insulated-roofs.webp",
  },
  {
    id: "gazebos",
    name: "Gazebos",
    slug: "/gazebos/",
    tags: ["Garden Feature", "Elegant", "Freestanding"],
    description:
      "Elegant gazebo installations for gardens and outdoor spaces.",
    image: "/images/gazebos.jpg",
  },
  {
    id: "gable-roof",
    name: "Gable Roof",
    slug: "/gable-roof/",
    tags: ["Classic", "Ventilation", "Timeless"],
    description:
      "Classic gable roof pergola designs with superior ventilation.",
    image: "/images/pergolas-3.jpg",
  },
  {
    id: "flat-roof",
    name: "Flat Roof",
    slug: "/flat-roof/",
    tags: ["Sleek", "Modern", "Minimalist"],
    description:
      "Sleek flat roof pergola installations for a modern look.",
    image: "/images/flat-roof.jpg",
  },
  {
    id: "decking",
    name: "Decking",
    slug: "/decking/",
    tags: ["Timber", "Composite", "Outdoor"],
    description:
      "Quality timber and composite decking to complement your pergola.",
    image: "/images/decking.jpg",
  },
  {
    id: "curved-roof",
    name: "Curved Roof",
    slug: "/curved-roof/",
    tags: ["Unique", "Architectural", "Stylish"],
    description:
      "Stylish curved roof pergolas for a unique architectural statement.",
    image: "/images/curved-roofs.jpg",
  },
  {
    id: "carpot",
    name: "Carport",
    slug: "/carpot/",
    tags: ["Vehicle Protection", "Durable", "Practical"],
    description:
      "Durable carport structures to protect your vehicles.",
    image: "/images/carports.jpg",
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState("pergola");
  const [scrollProgress, setScrollProgress] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    const maxScroll = scrollWidth - clientWidth;
    setScrollProgress(maxScroll > 0 ? scrollLeft / maxScroll : 0);
  };

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 400;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollToService = (serviceId: string) => {
    setActiveTab(serviceId);
    const serviceIndex = services.findIndex((s) => s.id === serviceId);
    if (carouselRef.current && serviceIndex !== -1) {
      const cardWidth = window.innerWidth >= 768 ? 384 : 320;
      const gap = 24;
      const scrollPosition = serviceIndex * (cardWidth + gap);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="services" className="bg-light-bg section-padding relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Header */}
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12">
            <div className="flex-1 max-w-3xl">
              <p className="text-eyebrow text-primary mb-4">[ WHAT WE OFFER ]</p>
              <h2 className="font-heading text-4xl md:text-5xl tracking-wide uppercase mb-4">
                <span className="text-foreground">Our Pergola Installation</span>{" "}
                <span className="text-gradient-primary">Services</span>
              </h2>
              <p className="text-base font-body font-light text-muted-foreground leading-relaxed max-w-xl">
                From custom pergolas to insulated roofs and decking, we deliver
                premium outdoor living solutions for your Sydney home.
              </p>
            </div>
            <div className="flex items-start justify-start md:items-end md:justify-end md:pt-8">
              <Link
                to="/service/"
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden border border-primary bg-white/10 px-6 text-foreground transition-colors hover:bg-primary/10 font-body font-medium"
              >
                View All Services
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => scrollToService(service.id)}
              className={cn(
                "px-4 py-2 text-sm font-body font-medium transition-all duration-300",
                activeTab === service.id
                  ? "bg-primary text-white"
                  : "bg-background text-foreground hover:bg-primary/10"
              )}
            >
              {service.name}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-3 bg-background shadow-lg hover:shadow-xl transition-all duration-300 hidden md:block"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>

          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 pt-8 snap-x snap-mandatory -mr-4 pr-4 md:-mr-8 md:pr-8"
            style={{ paddingLeft: "12px" }}
          >
            {services.map((service) => (
              <Link
                key={service.id}
                to={service.slug}
                className={cn(
                  "group flex-shrink-0 w-80 md:w-96 h-[450px] md:h-[550px] overflow-hidden relative cursor-pointer snap-start",
                  "transition-all duration-300 ease-out",
                  "hover:-translate-y-2 hover:shadow-2xl",
                  activeTab === service.id
                    ? "border-[3px] border-primary"
                    : "border-[3px] border-transparent"
                )}
              >
                {/* Background Image */}
                <img
                  src={service.image}
                  alt={service.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.7) 100%)",
                  }}
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                  <div>
                    <h3
                      className="font-heading text-2xl md:text-3xl lg:text-4xl text-white tracking-wide uppercase mb-3"
                      style={{ textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}
                    >
                      {service.name}
                    </h3>
                    <p
                      className="text-white/90 text-sm md:text-base font-body font-light leading-relaxed max-w-[85%]"
                      style={{ textShadow: "0 1px 4px rgba(0,0,0,0.3)" }}
                    >
                      {service.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className={cn(
                          "px-4 py-2 text-xs md:text-sm font-body font-medium text-white",
                          "bg-white/20 backdrop-blur-md border border-white/30",
                          "transition-all duration-300",
                          "group-hover:bg-primary/30 group-hover:border-primary/50"
                        )}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}

            {/* Spacer */}
            <div className="flex-shrink-0 w-4 md:w-8" />
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-3 bg-background shadow-lg hover:shadow-xl transition-all duration-300 hidden md:block"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

          {/* Custom Progress Bar */}
          <div className="mt-8 mx-auto max-w-xs">
            <div className="h-[2px] bg-border rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-150 ease-out"
                style={{ width: `${Math.max(10, scrollProgress * 100)}%` }}
              />
            </div>
          </div>
        </div>

        {/* CTA Box */}
        <div className="mt-24 bg-white shadow-medium p-6 md:p-8 text-center max-w-3xl mx-auto">
          <h3 className="font-heading text-2xl tracking-wide uppercase mb-3">
            Get a Free Pergola Installation Quote
          </h3>
          <p className="text-sm text-muted-foreground font-body font-light mb-6 max-w-xl mx-auto">
            Our licensed local pergola installers are ready to help with your
            next outdoor project.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href="#contact"
              className="btn-premium text-white text-sm font-body font-semibold uppercase tracking-wide group inline-flex items-center justify-center px-5 py-2.5"
            >
              Get Your Quote
            </a>
            <a
              href="tel:+61258496376"
              className="inline-flex items-center justify-center gap-2 bg-white text-foreground font-body font-semibold px-5 py-2.5 border-2 border-primary hover:bg-primary/5 transition-all duration-300"
            >
              Call Us Today
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;