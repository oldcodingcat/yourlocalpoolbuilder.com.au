import { Helmet } from "@/lib/helmet";
import { Link } from "react-router-dom";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBanner from "@/components/FloatingBanner";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";

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
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
};

export interface ServiceConfig {
  name: string;
  slug: string;
  heroImage: string;
  heroTagline: string;
  intro?: string[];
  aboutService?: string[];
  whyChooseUsForThis?: string[];
  materialsAndOptions?: string[];
  whatToExpect?: string[];
  aboutImage?: string;
  whyChooseImage?: string;
  materialsImage?: string;
  processImage?: string;
  benefits: string[];
  typicalUses: string;
  process: { title: string; description: string }[];
  faqs: { q: string; a: string }[];
  galleryImages: { src: string; alt: string }[];
  relatedServices: { name: string; slug: string }[];
}

const ServiceTemplate = ({ config }: { config: ServiceConfig }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const overviewContent =
    config.aboutService && config.aboutService.length > 0
      ? config.aboutService
      : config.intro ?? [];
  const whyChooseContent = config.whyChooseUsForThis ?? [];
  const materialsContent = config.materialsAndOptions ?? [];
  const whatToExpectContent = config.whatToExpect ?? [];
  const primaryDescription = overviewContent[0] ?? config.heroTagline;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: config.name,
    description: primaryDescription,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Your Local Pergola Installer",
      telephone: "+61258496376",
      url: "https://yourlocalpergolainstaller.com.au",
    },
    areaServed: [{ "@type": "City", name: "Sydney" }],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://yourlocalpergolainstaller.com.au/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://yourlocalpergolainstaller.com.au/service/" },
      { "@type": "ListItem", position: 3, name: config.name, item: `https://yourlocalpergolainstaller.com.au/${config.slug}/` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <Helmet>
        <title>{config.name} | Your Local Pergola Installer - Sydney Metropolitan Area</title>
        <meta name="description" content={`${primaryDescription} Serving Sydney Metropolitan Area. Call (02) 5849 6376.`} />
        <link rel="canonical" href={`https://yourlocalpergolainstaller.com.au/${config.slug}/`} />
        <meta property="og:title" content={`${config.name} | Your Local Pergola Installer`} />
        <meta property="og:description" content={primaryDescription} />
        <meta property="og:url" content={`https://yourlocalpergolainstaller.com.au/${config.slug}/`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={config.heroImage || "https://yourlocalpergolainstaller.com.au/images/pergolas.jpeg"} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Header />
      <FloatingBanner />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={config.heroImage} alt={config.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(5,5,5,0.88)] via-[rgba(5,5,5,0.65)] to-[rgba(5,5,5,0.40)]" />
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl pt-32 pb-20">
          <nav className="flex items-center gap-2 mb-6 font-body text-sm text-white/50">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/service/" className="hover:text-primary transition-colors">Services</Link>
            <span>/</span>
            <span className="text-primary font-medium">{config.name}</span>
          </nav>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl tracking-wide uppercase text-white mb-6">
            {config.name.split(" ").map((word, i, arr) =>
              i === arr.length - 1 ? (
                <span key={i} className="text-primary">{word}</span>
              ) : (
                <span key={i}>{word} </span>
              )
            )}
          </h1>
          <p className="font-body font-light text-white/70 text-lg max-w-2xl">{config.heroTagline}</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white text-sm font-body font-semibold uppercase tracking-wide px-6 py-3 rounded-sm transition-all"
            >
              Get a Free Quote <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="tel:+61258496376"
              className="inline-flex items-center gap-2 border border-white/20 text-white/80 hover:border-primary hover:text-primary text-sm font-body font-semibold uppercase tracking-wide px-6 py-3 rounded-sm transition-all"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-eyebrow text-primary mb-4">[ OVERVIEW ]</p>
              <h2 className="font-heading text-4xl md:text-5xl tracking-wide uppercase text-foreground mb-6">
                {config.name}
              </h2>
              <div className="space-y-4">
                {overviewContent.map((p, i) => (
                  <p key={i} className="font-body font-light text-muted-foreground text-sm leading-relaxed">{p}</p>
                ))}
              </div>
              <p className="font-body font-light text-muted-foreground text-sm mt-6">
                <span className="font-medium text-foreground">Typical Uses: </span>
                {config.typicalUses}
              </p>
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <div className="relative">
                <img
                  src={config.aboutImage || config.galleryImages[0]?.src || config.heroImage}
                  alt={config.galleryImages[0]?.alt || `${config.name} overview`}
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute top-0 left-0 w-16 h-[2px] bg-primary" />
                <div className="absolute top-0 left-0 w-[2px] h-16 bg-primary" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Local Expertise */}
      {whyChooseContent.length > 0 && (
        <section className="bg-muted/30 py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection>
                <div className="relative">
                  <img
                    src={config.whyChooseImage || config.galleryImages[1]?.src || config.heroImage}
                    alt={`${config.name} local expertise`}
                    className="w-full h-[480px] object-cover"
                  />
                  <div className="absolute top-0 left-0 w-16 h-[2px] bg-primary" />
                  <div className="absolute top-0 left-0 w-[2px] h-16 bg-primary" />
                </div>
              </AnimatedSection>
              <AnimatedSection delay={150}>
                <p className="text-eyebrow text-primary mb-4">[ LOCAL EXPERTISE ]</p>
                <h2 className="font-heading text-4xl md:text-5xl tracking-wide uppercase text-foreground mb-6">
                  Why Choose Us for <span className="text-primary">{config.name}</span>
                </h2>
                <div className="space-y-4">
                  {whyChooseContent.map((p, i) => (
                    <p key={i} className="font-body font-light text-muted-foreground text-sm leading-relaxed">{p}</p>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      )}

      {/* Benefits */}
      <section className="bg-[#111111] py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
          <AnimatedSection className="text-center mb-16">
            <p className="text-eyebrow text-primary mb-4">[ WHAT WE OFFER ]</p>
            <h2 className="font-heading text-4xl md:text-5xl tracking-wide uppercase text-white">
              Key <span className="text-primary">Benefits</span>
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04]">
            {config.benefits.map((benefit, i) => (
              <AnimatedSection key={i} delay={i * 60}>
                <div className="group bg-[#111111] p-8 h-full hover:bg-white/[0.02] transition-all duration-500 relative">
                  <div className="absolute top-0 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-500" />
                  <CheckCircle className="h-5 w-5 text-white/20 group-hover:text-primary transition-colors duration-300 mb-4" />
                  <p className="font-body font-light text-white/50 text-sm">{benefit}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Materials and Options */}
      {materialsContent.length > 0 && (
        <section className="bg-background py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection>
                <p className="text-eyebrow text-primary mb-4">[ MATERIALS & OPTIONS ]</p>
                <h2 className="font-heading text-4xl md:text-5xl tracking-wide uppercase text-foreground mb-6">
                  Materials and Options for <span className="text-primary">{config.name}</span>
                </h2>
                <div className="space-y-4">
                  {materialsContent.map((p, i) => (
                    <p key={i} className="font-body font-light text-muted-foreground text-sm leading-relaxed">{p}</p>
                  ))}
                </div>
              </AnimatedSection>
              <AnimatedSection delay={150}>
                <div className="relative">
                  <img
                    src={config.materialsImage || config.galleryImages[2]?.src || config.heroImage}
                    alt={`${config.name} materials and options`}
                    className="w-full h-[480px] object-cover"
                  />
                  <div className="absolute top-0 left-0 w-16 h-[2px] bg-primary" />
                  <div className="absolute top-0 left-0 w-[2px] h-16 bg-primary" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
          <AnimatedSection className="text-center mb-16">
            <p className="text-eyebrow text-primary mb-4">[ HOW IT WORKS ]</p>
            <h2 className="font-heading text-4xl md:text-5xl tracking-wide uppercase text-foreground">
              Our <span className="text-primary">Process</span>
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {config.process.map((step, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="relative p-8 border border-border hover:border-primary/30 transition-all duration-300 h-full">
                  <span className="font-heading text-6xl text-foreground/[0.06] absolute top-4 right-6 select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading text-2xl tracking-wide uppercase text-foreground mb-3 relative">
                    {step.title}
                  </h3>
                  <p className="font-body font-light text-muted-foreground text-sm leading-relaxed relative">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      {whatToExpectContent.length > 0 && (
        <section className="bg-[#111111] py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
            <AnimatedSection className="text-center mb-10">
              <p className="text-eyebrow text-primary mb-4">[ WHAT TO EXPECT ]</p>
              <h2 className="font-heading text-4xl md:text-5xl tracking-wide uppercase text-white">
                What to Expect with <span className="text-primary">{config.name}</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection>
              <div className="max-w-3xl mx-auto space-y-4 text-center">
                {whatToExpectContent.map((p, i) => (
                  <p key={i} className="font-body font-light text-white/70 text-sm md:text-base leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Gallery */}
      {config.galleryImages.length > 1 && (
        <section className="bg-[#111111] py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
            <AnimatedSection className="text-center mb-16">
              <p className="text-eyebrow text-primary mb-4">[ OUR WORK ]</p>
              <h2 className="font-heading text-4xl md:text-5xl tracking-wide uppercase text-white">
                Project <span className="text-primary">Gallery</span>
              </h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-3 gap-4">
              {config.galleryImages.map((img, i) => (
                <AnimatedSection key={i} delay={i * 80}>
                  <div className="relative overflow-hidden group">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/60 via-transparent to-transparent" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
          <AnimatedSection className="text-center mb-16">
            <p className="text-eyebrow text-primary mb-4">[ FAQs ]</p>
            <h2 className="font-heading text-4xl md:text-5xl tracking-wide uppercase text-foreground">
              Common <span className="text-primary">Questions</span>
            </h2>
          </AnimatedSection>
          <div className="max-w-3xl mx-auto space-y-3">
            {config.faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 60}>
                <div
                  className="border border-border hover:border-primary/30 transition-all duration-300 cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <div className="flex items-center justify-between p-6">
                    <p className="font-body font-medium text-sm text-foreground pr-4">{faq.q}</p>
                    <span
                      className={`text-primary text-xl transition-transform duration-300 flex-shrink-0 ${
                        openFaq === i ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="px-6 pb-6 font-body font-light text-sm text-muted-foreground leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-[#111111] py-16 border-t border-white/[0.06]">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
          <p className="text-eyebrow text-primary mb-6 text-center">[ OTHER SERVICES ]</p>
          <div className="flex flex-wrap justify-center gap-3">
            {config.relatedServices.map((s) => (
              <Link
                key={s.slug}
                to={`/${s.slug}/`}
                className="px-5 py-2.5 border border-white/[0.08] text-white/50 font-body font-light text-sm hover:border-primary/40 hover:text-primary transition-all duration-300"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl text-center">
          <h2 className="font-heading text-4xl md:text-5xl tracking-wide uppercase text-white mb-4">
            Need {config.name}?
          </h2>
          <p className="font-body font-light text-white/80 text-base mb-8 max-w-xl mx-auto">
            Get in touch for a free quote. Licensed pergola installers ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              style={{ background: "#ffffff", color: "#111111" }}
              className="text-sm font-body font-semibold uppercase tracking-wide rounded-sm hover:opacity-90"
              onClick={() => (window.location.href = "/contact/")}
            >
              GET A QUOTE
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white bg-transparent hover:bg-white hover:text-primary text-white text-sm font-body font-semibold uppercase tracking-wide rounded-sm"
              onClick={() => (window.location.href = "tel:+61258496376")}
            >
              CALL (02) 5849 6376
            </Button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <Contact />
      <Footer />
    </>
  );
};

export default ServiceTemplate;
