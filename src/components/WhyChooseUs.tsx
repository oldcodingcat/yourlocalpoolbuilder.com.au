import {
    Shield,
    Clock,
    DollarSign,
    MapPin,
    Wrench,
    BadgeCheck,
    Phone,
    Star,
  } from "lucide-react";
  import { useState, useEffect, useRef } from "react";
  
  const AnimatedSection = ({
    children,
    className = "",
    delay = 0,
  }: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
  }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), delay);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, [delay]);
  
    return (
      <div
        ref={ref}
        className={`transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        } ${className}`}
      >
        {children}
      </div>
    );
  };
  
  const WhyChooseUs = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  
    const benefits = [
      {
        icon: Shield,
        title: "Licensed & Insured",
        description:
          "Qualified professionals with compliant and safe pergola installation practices.",
        image: "/images/sunroof.jpg",
      },
      {
        icon: Phone,
        title: "Clear Communication",
        description:
          "Straightforward updates and practical advice from consultation through handover.",
        image: "/images/gazebos.jpg",
      },
      {
        icon: DollarSign,
        title: "Upfront Pricing",
        description: "Clear quotes with no hidden surprises.",
        image: "/images/insulated-roofs.webp",
      },
      {
        icon: MapPin,
        title: "Local Coverage",
        description:
          "Quick attendance across Sydney Metropolitan Area.",
        image: "/images/flat-roof.jpg",
      },
      {
        icon: Wrench,
        title: "Quality Work",
        description:
          "Repairs and installations done properly the first time.",
        image: "/images/patios.jpg",
      },
      {
        icon: BadgeCheck,
        title: "Reliable Service",
        description:
          "On-time attendance and professional communication.",
        image: "/images/curved-roofs.jpg",
      },
      {
        icon: Clock,
        title: "Fast Turnarounds",
        description: "Efficient diagnosis and practical solutions.",
        image: "/images/pergolas-2.jpg",
      },
      {
        icon: Star,
        title: "Trusted Locally",
        description:
          "Consistent outcomes and friendly customer service.",
        image: "/images/carports.jpg",
      },
    ];
  
    return (
      <section className="bg-[#111111] py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl relative z-10">
          <AnimatedSection className="text-center mb-20">
            <p className="text-eyebrow text-primary mb-4">
              [ WHY WORK WITH US ]
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-wide uppercase mb-4">
              <span className="text-white">Why Choose </span>
              <span className="text-primary">Your Local Pergola Installer</span>
            </h2>
          </AnimatedSection>
  
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left — Image */}
            <AnimatedSection delay={100} className="hidden lg:block">
              <div className="relative h-full min-h-[600px] overflow-hidden">
                {benefits.map((b, i) => (
                  <img
                    key={i}
                    src={b.image}
                    alt={b.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                      activeIndex === i
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-105"
                    }`}
                  />
                ))}
                {/* Overlay gradients */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#111111]/90" />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#111111] to-transparent" />
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#111111] to-transparent" />
  
                {/* Active benefit title watermark */}
                <div className="absolute bottom-8 left-8 right-8">
                  <span className="font-heading text-[80px] leading-none text-white/[0.06] uppercase select-none transition-all duration-500">
                    {benefits[activeIndex].title}
                  </span>
                </div>
              </div>
            </AnimatedSection>
  
            {/* Right — Benefits grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {benefits.map((b, i) => {
                const Icon = b.icon;
                const isActive = activeIndex === i;
                return (
                  <AnimatedSection key={i} delay={i * 60}>
                    <div
                      className={`group relative p-6 md:p-8 h-full border-b border-r border-white/[0.06] cursor-default transition-all duration-500 ${
                        isActive
                          ? "bg-white/[0.04]"
                          : "hover:bg-white/[0.02]"
                      }`}
                      onMouseEnter={() => setActiveIndex(i)}
                    >
                      {/* Top accent line */}
                      <div
                        className={`absolute top-0 left-0 h-[2px] transition-all duration-500 ${
                          isActive ? "w-full bg-primary" : "w-0 bg-transparent"
                        }`}
                      />
  
                      {/* Icon */}
                      <div className="mb-5">
                        <Icon
                          className={`h-5 w-5 transition-colors duration-300 ${
                            isActive
                              ? "text-primary"
                              : "text-white/20 group-hover:text-white/40"
                          }`}
                        />
                      </div>
  
                      {/* Title */}
                      <h3 className="font-heading text-xl tracking-wide uppercase text-white mb-2">
                        {b.title}
                      </h3>
  
                      {/* Description */}
                      <p
                        className={`font-body font-light text-sm leading-relaxed transition-colors duration-300 ${
                          isActive ? "text-white/55" : "text-white/30"
                        }`}
                      >
                        {b.description}
                      </p>
  
                      {/* Mobile image — inline below text */}
                      <div
                        className={`lg:hidden mt-4 overflow-hidden rounded-sm transition-all duration-500 ${
                          isActive
                            ? "max-h-48 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <img
                          src={b.image}
                          alt={b.title}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default WhyChooseUs;