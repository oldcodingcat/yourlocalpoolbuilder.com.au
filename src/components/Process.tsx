import { MessageSquare, Ruler, Hammer, CheckCircle2 } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const AnimatedSection = ({ children, className = "", delay = 0 }: any) => {
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
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
};

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Call & Describe",
      description:
        "Tell us your pergola installation issue and we will guide you on the best next step.",
      image: "/images/pergolas.jpeg",
    },
    {
      number: "02",
      icon: Ruler,
      title: "Assessment & Quote",
      description:
        "We inspect the issue and provide a clear upfront quote before starting.",
      image: "/images/pergolas-3.jpg",
    },
    {
      number: "03",
      icon: Hammer,
      title: "Professional Service",
      description:
        "Our licensed pergola installer completes the work safely and efficiently.",
      image: "/images/patios.jpg",
    },
    {
      number: "04",
      icon: CheckCircle2,
      title: "Quality Guarantee",
      description:
        "We test everything and make sure the job is done right.",
      image: "/images/decking.jpg",
    },
  ];

  return (
    <section className="bg-[#111111] py-20 md:py-32 relative overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(74,144,164,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(74,144,164,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl relative z-10">
        <AnimatedSection className="text-center mb-20">
          <p className="text-eyebrow text-primary mb-4">[ HOW IT WORKS ]</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-wide uppercase mb-4">
            <span className="text-white">See How We </span>
            <span className="text-primary">Complete The Work</span>
          </h2>
          <p className="text-white/50 font-body font-light text-base max-w-2xl mx-auto">
            A transparent pergola installation process from first call to final quality
            check.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-0">
          {/* Left — Steps */}
          <div className="relative">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isActive = activeStep === i;
              return (
                <AnimatedSection key={i} delay={i * 120}>
                  <div
                    className={`group relative flex gap-6 p-6 md:p-8 border-b border-white/[0.06] cursor-pointer transition-all duration-500 ${
                      isActive
                        ? "bg-white/[0.04]"
                        : "hover:bg-white/[0.02]"
                    }`}
                    onMouseEnter={() => setActiveStep(i)}
                  >
                    {/* Active indicator */}
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-[2px] transition-all duration-500 ${
                        isActive ? "bg-primary" : "bg-transparent"
                      }`}
                    />

                    {/* Icon */}
                    <div className="flex-shrink-0 mt-1">
                      <div
                        className={`w-12 h-12 border rounded-sm flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? "border-primary bg-primary/10"
                            : "border-white/10 group-hover:border-white/20"
                        }`}
                      >
                        <Icon
                          className={`h-5 w-5 transition-colors duration-300 ${
                            isActive ? "text-primary" : "text-white/30 group-hover:text-white/50"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <span
                        className={`font-body text-xs font-medium tracking-widest uppercase transition-colors duration-300 ${
                          isActive ? "text-primary" : "text-white/20"
                        }`}
                      >
                        Step {step.number}
                      </span>
                      <h3 className="font-heading text-2xl tracking-wide uppercase text-white mt-1 mb-2">
                        {step.title}
                      </h3>
                      <p
                        className={`font-body font-light text-sm leading-relaxed transition-colors duration-300 ${
                          isActive ? "text-white/60" : "text-white/30"
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Right — Image */}
          <AnimatedSection delay={200} className="hidden lg:block">
            <div className="relative h-full min-h-[500px] overflow-hidden">
              {steps.map((step, i) => (
                <img
                  key={i}
                  src={step.image}
                  alt={step.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                    activeStep === i
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-105"
                  }`}
                />
              ))}
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#111111]/80" />
              {/* Bottom gradient */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#111111] to-transparent" />

              {/* Step number watermark */}
              <span className="absolute bottom-6 right-8 font-heading text-[120px] leading-none text-white/[0.06] select-none transition-all duration-500">
                {steps[activeStep].number}
              </span>
            </div>
          </AnimatedSection>

          {/* Mobile image — shown below steps */}
          <div className="lg:hidden mt-6">
            <div className="relative h-64 overflow-hidden">
              {steps.map((step, i) => (
                <img
                  key={i}
                  src={step.image}
                  alt={step.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                    activeStep === i
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-105"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;