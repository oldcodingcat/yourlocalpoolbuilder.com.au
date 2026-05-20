import { Shield, CheckCircle, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useState, useEffect } from "react";

const marqueeImages1 = [
  "/images/pergolas-4.jpg",
  "/images/pergolas-5.jpg",
  "/images/pergolas.jpeg",
  "/images/sunroof.jpg",
];

const marqueeImages2 = [
  "/images/pergolas-2.jpg",
  "/images/patios.jpg",
  "/images/gazebos.jpg",
  "/images/flat-roof.jpg",
];

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const duration1 = isMobile ? 15 : 30;
  const duration2 = isMobile ? 17.5 : 35;

  return (
    <section id="about" className="bg-background section-padding relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Scrolling Images — Left */}
          <div className="h-[500px] md:h-[600px] relative overflow-hidden">
            <div className="flex gap-4 h-full">
              {/* Column 1 — Scroll Up */}
              <div className="flex-1 overflow-hidden">
                <div
                  style={{
                    animation: `marqueeUp ${duration1}s linear infinite`,
                  }}
                >
                  <div className="flex flex-col gap-3">
                    {[...marqueeImages1, ...marqueeImages1].map((img, index) => (
                      <div key={index} className="aspect-[4/5] overflow-hidden rounded-sm">
                        <img
                          src={img}
                          alt="Pergola installation project"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Column 2 — Scroll Down */}
              <div className="flex-1 overflow-hidden">
                <div
                  style={{
                    animation: `marqueeDown ${duration2}s linear infinite`,
                  }}
                >
                  <div className="flex flex-col gap-3">
                    {[...marqueeImages2, ...marqueeImages2].map((img, index) => (
                      <div key={index} className="aspect-[4/5] overflow-hidden rounded-sm">
                        <img
                          src={img}
                          alt="Pergola installation project"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Gradient Overlays — Desktop */}
            <div className="hidden md:block absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />
            <div className="hidden md:block absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
            {/* Gradient Overlays — Mobile */}
            <div className="md:hidden absolute top-0 left-0 right-0 h-[50px] bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />
            <div className="md:hidden absolute bottom-0 left-0 right-0 h-[50px] bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
          </div>

          {/* Text Content — Right */}
          <AnimatedSection animation="slide-in-right" className="space-y-6">
            <p className="text-eyebrow text-primary">[ ABOUT US ]</p>
            <h2 className="font-heading text-4xl md:text-5xl tracking-wide uppercase leading-tight">
              <span className="text-foreground">Your Trusted Local</span>{" "}
              <span className="text-gradient-primary">Pergola Installation Team</span>
            </h2>
            <div className="space-y-4 text-sm text-muted-foreground font-body font-light leading-relaxed">
              <p>
                Your Local Pergola Installer is a family-owned business delivering
                dependable pergola installation services across Sydney Metropolitan
                Area. We handle everything from everyday repairs to complex
                installations.
              </p>
              <p>
                Our licensed and insured pergola installers focus on quality
                workmanship, clear communication, and practical solutions that last.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 pt-6">
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-primary" />
                <div>
                  <div className="font-body font-semibold text-sm">Licensed & Insured</div>
                  <div className="font-body text-xs">Qualified local team</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-primary" />
                <div>
                  <div className="font-body font-semibold text-sm">Locally Trusted</div>
                  <div className="font-body text-xs">Sydney Metropolitan Area</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-6 w-6 text-primary" />
                <div>
                  <div className="font-body font-semibold text-sm">Fast Response</div>
                  <div className="font-body text-xs">Prompt bookings and call-outs</div>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <Button
                size="lg"
                className="btn-premium text-white text-sm font-body font-semibold uppercase tracking-wide rounded group"
                onClick={() => (window.location.href = "/about-us")}
              >
                LEARN MORE ABOUT US
                <Award className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <style>{`
        @keyframes marqueeUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes marqueeDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default About;