import { Helmet } from "@/lib/helmet";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  ArrowRight,
  Shield,
  DollarSign,
  Wrench,
  Flame,
  Droplets,
  ShowerHead,
  Search,
  CloudRain,
  AlertTriangle,
  Home,
} from "lucide-react";
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
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export interface LocationConfig {
  name: string;
  slug: string;
  region: string;
  regionSlug: string;
  heroImage: string;
  heroTagline: string;
  intro?: string[];
  introImage: string;
  aboutSuburb?: string[];
  whyChooseUsHere?: string[];
  localConsiderations?: string[];
  ourProcess?: string[];
  whyChooseImage?: string;
  processImage?: string;
  nearestOffice: {
    name: string;
    address: string;
    lat: number;
    lng: number;
    mapEmbed: string;
  };
  coordinates: { lat: number; lng: number };
  siblings: { name: string; slug: string }[];
  testimonial?: { quote: string; name: string; suburb: string };
  faqs: { q: string; a: string }[];
  galleryImages: { src: string; alt: string }[];
}

const serviceLinks = [
  {
    name: "Pergola Building & Installation",
    slug: "pergola-building-and-installation",
    icon: Wrench,
  },
  { name: "Sunroof", slug: "sunroof", icon: Flame },
  { name: "Pavilions", slug: "pavillions", icon: ShowerHead },
  { name: "Patios", slug: "patios", icon: Droplets },
  { name: "Insulated Roofs", slug: "insulated-roofs", icon: Search },
  { name: "Gazebos", slug: "gazebos", icon: CloudRain },
  { name: "Gable Roof", slug: "gable-roof", icon: AlertTriangle },
  { name: "Flat Roof", slug: "flat-roof", icon: DollarSign },
  { name: "Curved Roof", slug: "curved-roof", icon: Home },
  { name: "Decking", slug: "decking", icon: MapPin },
  { name: "Carports", slug: "carpot", icon: Shield },
];

type SplitBlocks = {
  aboutSuburb: string[];
  whyChooseUsHere: string[];
  localConsiderations: string[];
  ourProcess: string[];
};

const splitLegacyIntro = (legacy?: string[]): SplitBlocks => {
  if (!legacy || legacy.length === 0) {
    return {
      aboutSuburb: [],
      whyChooseUsHere: [],
      localConsiderations: [],
      ourProcess: [],
    };
  }

  if (legacy.length <= 3) {
    return {
      aboutSuburb: legacy,
      whyChooseUsHere: [],
      localConsiderations: [],
      ourProcess: [],
    };
  }

  const chunk = Math.ceil(legacy.length / 4);
  return {
    aboutSuburb: legacy.slice(0, chunk),
    whyChooseUsHere: legacy.slice(chunk, chunk * 2),
    localConsiderations: legacy.slice(chunk * 2, chunk * 3),
    ourProcess: legacy.slice(chunk * 3),
  };
};

const LocationTemplate = ({ config }: { config: LocationConfig }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const legacySplit = splitLegacyIntro(config.intro);
  const aboutSuburbContent =
    config.aboutSuburb && config.aboutSuburb.length > 0
      ? config.aboutSuburb
      : legacySplit.aboutSuburb;
  const whyChooseContent =
    config.whyChooseUsHere && config.whyChooseUsHere.length > 0
      ? config.whyChooseUsHere
      : legacySplit.whyChooseUsHere;
  const localConsiderationsContent =
    config.localConsiderations && config.localConsiderations.length > 0
      ? config.localConsiderations
      : legacySplit.localConsiderations;
  const ourProcessContent =
    config.ourProcess && config.ourProcess.length > 0
      ? config.ourProcess
      : legacySplit.ourProcess;

  const descriptionSource =
    aboutSuburbContent[0] ||
    config.heroTagline ||
    `Professional pergola installation services in ${config.name}.`;

  const isOfficeSuburb = ["jannali", "woronora", "caringbah-south"].includes(
    config.slug
  );

  const schemaGeo = isOfficeSuburb
    ? { latitude: config.nearestOffice.lat, longitude: config.nearestOffice.lng }
    : { latitude: config.coordinates.lat, longitude: config.coordinates.lng };

  const addressParts = config.nearestOffice.address.split(",");

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://yourlocalpergolainstaller.com.au/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Areas",
        item: "https://yourlocalpergolainstaller.com.au/service/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: config.region,
        item: `https://yourlocalpergolainstaller.com.au/pergola-builders-${config.regionSlug}/`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: `Pergola Installer ${config.name}`,
        item: `https://yourlocalpergolainstaller.com.au/pergola-installers-in-${config.slug}/`,
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: `Your Local Pergola Installer ${config.name}`,
    telephone: "+61258496376",
    url: `https://yourlocalpergolainstaller.com.au/pergola-installers-in-${config.slug}/`,
    address: {
      "@type": "PostalAddress",
      streetAddress: addressParts[0]?.trim(),
      addressLocality: isOfficeSuburb
        ? config.name
        : addressParts[1]?.trim().split(" ")[0],
      addressRegion: "NSW",
      addressCountry: "AU",
    },
    geo: { "@type": "GeoCoordinates", ...schemaGeo },
    areaServed: { "@type": "City", name: config.name },
    priceRange: "$",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Pergola Installation Services ${config.name}`,
    description: descriptionSource,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Your Local Pergola Installer",
      telephone: "+61258496376",
      url: "https://yourlocalpergolainstaller.com.au",
    },
    areaServed: { "@type": "City", name: config.name },
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
        <title>
          Pergola Installer {config.name} | Your Local Pergola Installer - Licensed Local Pergola Installers
        </title>
        <meta
          name="description"
          content={`Professional pergola installation services in ${config.name}. Licensed local pergola installers for custom pergolas, patios, roofs and outdoor structures. Call (02) 5849 6376.`}
        />
        <link
          rel="canonical"
          href={`https://yourlocalpergolainstaller.com.au/pergola-installers-in-${config.slug}/`}
        />
        <meta
          property="og:title"
          content={`Pergola Installer ${config.name} | Your Local Pergola Installer`}
        />
        <meta property="og:description" content={descriptionSource} />
        <meta
          property="og:url"
          content={`https://yourlocalpergolainstaller.com.au/pergola-installers-in-${config.slug}/`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={config.heroImage || "https://yourlocalpergolainstaller.com.au/images/pergolas.jpeg"} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Header />
      <FloatingBanner />

      <section className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={config.heroImage}
            alt={`Pergola Installer in ${config.name}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(5,5,5,0.88)] via-[rgba(5,5,5,0.65)] to-[rgba(5,5,5,0.40)]" />
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl pt-32 pb-20">
          <nav className="flex items-center gap-2 mb-6 font-body text-sm text-white/50">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/service/" className="hover:text-primary transition-colors">
              Areas
            </Link>
            <span>/</span>
            <Link
              to={`/pergola-builders-${config.regionSlug}/`}
              className="hover:text-primary transition-colors"
            >
              {config.region}
            </Link>
            <span>/</span>
            <span className="text-primary font-medium">{config.name}</span>
          </nav>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl tracking-wide uppercase text-white mb-6">
            Pergola Installer <span className="text-primary">{config.name}</span>
          </h1>
          <p className="font-body font-light text-white/70 text-lg max-w-2xl">
            {config.heroTagline}
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
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

      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-eyebrow text-primary mb-4">[ ABOUT THE SUBURB ]</p>
              <h2 className="font-heading text-4xl md:text-5xl tracking-wide uppercase text-foreground mb-6">
                Pergola Installation in <span className="text-primary">{config.name}</span>
              </h2>
              <div className="space-y-4">
                {aboutSuburbContent.map((p, i) => (
                  <p key={i} className="font-body font-light text-muted-foreground text-sm leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <div className="relative">
                <img
                  src={config.introImage}
                  alt={`Pergola installation in ${config.name}`}
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute top-0 left-0 w-16 h-[2px] bg-primary" />
                <div className="absolute top-0 left-0 w-[2px] h-16 bg-primary" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {whyChooseContent.length > 0 && (
        <section className="bg-muted/30 py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection>
                <div className="relative">
                  <img
                    src={config.whyChooseImage || config.introImage}
                    alt={`Local pergola expertise in ${config.name}`}
                    className="w-full h-[480px] object-cover"
                  />
                  <div className="absolute top-0 left-0 w-16 h-[2px] bg-primary" />
                  <div className="absolute top-0 left-0 w-[2px] h-16 bg-primary" />
                </div>
              </AnimatedSection>
              <AnimatedSection delay={150}>
                <p className="text-eyebrow text-primary mb-4">[ LOCAL EXPERTISE ]</p>
                <h2 className="font-heading text-4xl md:text-5xl tracking-wide uppercase text-foreground mb-6">
                  Why Homeowners in <span className="text-primary">{config.name}</span> Choose Us
                </h2>
                <div className="space-y-4">
                  {whyChooseContent.map((p, i) => (
                    <p key={i} className="font-body font-light text-muted-foreground text-sm leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      )}

      <section className="bg-[#111111] py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
          <AnimatedSection className="text-center mb-16">
            <p className="text-eyebrow text-primary mb-4">[ OUR SERVICES IN {config.name.toUpperCase()} ]</p>
            <h2 className="font-heading text-4xl md:text-5xl tracking-wide uppercase text-white">
              Pergola Installation Services in <span className="text-primary">{config.name}</span>
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04]">
            {serviceLinks.map((s, i) => {
              const Icon = s.icon;
              return (
                <AnimatedSection key={i} delay={i * 60}>
                  <Link
                    to={`/${s.slug}/`}
                    className="group bg-[#111111] p-8 h-full hover:bg-white/[0.02] transition-all duration-500 relative block"
                  >
                    <div className="absolute top-0 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-500" />
                    <Icon className="h-5 w-5 text-white/20 group-hover:text-primary transition-colors duration-300 mb-4" />
                    <h3 className="font-heading text-xl tracking-wide uppercase text-white mb-2">
                      {s.name}
                    </h3>
                    <span className="font-body font-light text-white/30 text-sm group-hover:text-primary transition-colors duration-300 inline-flex items-center gap-1">
                      Learn more <ArrowRight className="h-3 w-3" />
                    </span>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {localConsiderationsContent.length > 0 && (
        <section className="bg-[#111111] py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-5xl">
            <AnimatedSection className="text-center mb-10">
              <p className="text-eyebrow text-primary mb-4">[ LOCAL CONSIDERATIONS ]</p>
              <h2 className="font-heading text-4xl md:text-5xl tracking-wide uppercase text-white">
                Built for <span className="text-primary">{config.name}</span> Conditions
              </h2>
            </AnimatedSection>
            <AnimatedSection>
              <div className="space-y-4 text-center">
                {localConsiderationsContent.map((p, i) => (
                  <p key={i} className="font-body font-light text-white/70 text-sm md:text-base leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      <section className="bg-[#111111] py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
          <AnimatedSection className="text-center mb-16">
            <p className="text-eyebrow text-primary mb-4">[ NEARBY SUBURBS ]</p>
            <h2 className="font-heading text-4xl md:text-5xl tracking-wide uppercase text-white">
              Also Serving <span className="text-primary">Nearby</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {config.siblings.map((s, i) => (
              <AnimatedSection key={i} delay={i * 50}>
                <Link
                  to={`/pergola-installers-in-${s.slug}/`}
                  className="group flex items-center gap-3 p-5 border border-white/[0.06] hover:border-primary/40 transition-all duration-300"
                >
                  <MapPin className="h-4 w-4 text-white/30 group-hover:text-primary transition-colors flex-shrink-0" />
                  <span className="font-body font-light text-sm text-white/60 group-hover:text-primary transition-colors">
                    {s.name}
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to={`/pergola-builders-${config.regionSlug}/`}
              className="font-body font-light text-sm text-primary hover:underline inline-flex items-center gap-2"
            >
              View all {config.region} suburbs <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {ourProcessContent.length > 0 && (
        <section className="bg-background py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection>
                <p className="text-eyebrow text-primary mb-4">[ HOW WE WORK ]</p>
                <h2 className="font-heading text-4xl md:text-5xl tracking-wide uppercase text-foreground mb-6">
                  Our Pergola Installation Process in <span className="text-primary">{config.name}</span>
                </h2>
                <div className="space-y-4">
                  {ourProcessContent.map((p, i) => (
                    <p key={i} className="font-body font-light text-muted-foreground text-sm leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </AnimatedSection>
              <AnimatedSection delay={150}>
                <div className="relative">
                  <img
                    src={config.processImage || config.introImage}
                    alt={`Pergola installation process in ${config.name}`}
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

      <section className="bg-[#111111] py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
          <AnimatedSection className="text-center mb-16">
            <p className="text-eyebrow text-primary mb-4">[ WHY YOUR LOCAL PERGOLA INSTALLER ]</p>
            <h2 className="font-heading text-4xl md:text-5xl tracking-wide uppercase text-white">
              Why Choose <span className="text-primary">Your Local Pergola Installer</span>
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04]">
            {[
              {
                icon: Shield,
                title: "Licensed & Insured",
                desc: "Fully qualified pergola installers with current licences and insurance.",
              },
              {
                icon: MapPin,
                title: "Local Knowledge",
                desc: `Our ${config.nearestOffice.name} team understands homes and site conditions around ${config.name}.`,
              },
              {
                icon: Phone,
                title: "Clear Communication",
                desc: "Consistent updates and practical advice at every stage of your pergola project.",
              },
              {
                icon: DollarSign,
                title: "Upfront Quotes",
                desc: "Clear scope and pricing before work begins so expectations stay aligned.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={i} delay={i * 80}>
                  <div className="group bg-[#111111] p-8 h-full hover:bg-white/[0.02] transition-all duration-500 relative">
                    <div className="absolute top-0 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-500" />
                    <Icon className="h-5 w-5 text-white/20 group-hover:text-primary transition-colors duration-300 mb-4" />
                    <h3 className="font-heading text-xl tracking-wide uppercase text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body font-light text-white/40 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {config.galleryImages.length > 0 && (
        <section className="bg-[#111111] py-20 md:py-28 border-t border-white/[0.06]">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
            <AnimatedSection className="text-center mb-16">
              <p className="text-eyebrow text-primary mb-4">[ OUR WORK ]</p>
              <h2 className="font-heading text-4xl md:text-5xl tracking-wide uppercase text-white">
                Pergola Installation in <span className="text-primary">{config.name}</span>
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

      {config.testimonial && (
        <section className="bg-background py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
            <div className="max-w-3xl mx-auto text-center">
              <AnimatedSection>
                <p className="text-eyebrow text-primary mb-6">[ TESTIMONIAL ]</p>
                <p className="font-body font-light text-muted-foreground text-lg leading-relaxed mb-8 italic">
                  &ldquo;{config.testimonial.quote}&rdquo;
                </p>
                <p className="font-body font-medium text-foreground text-sm">
                  {config.testimonial.name}
                </p>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  <span className="font-body font-light text-sm text-muted-foreground">
                    {config.testimonial.suburb}
                  </span>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      )}

      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
          <AnimatedSection className="text-center mb-16">
            <p className="text-eyebrow text-primary mb-4">[ FAQs ]</p>
            <h2 className="font-heading text-4xl md:text-5xl tracking-wide uppercase text-foreground">
              Pergola Installer {config.name} <span className="text-primary">FAQs</span>
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

      <section className="bg-[#111111]">
        <div className="w-full h-[400px]">
          <iframe
            src={config.nearestOffice.mapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`${config.nearestOffice.name} - Your Local Pergola Installer`}
          />
        </div>
      </section>

      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl text-center">
          <h2 className="font-heading text-4xl md:text-5xl tracking-wide uppercase text-white mb-4">
            Need a Pergola Installer in {config.name}?
          </h2>
          <p className="font-body font-light text-white/80 text-base mb-8 max-w-xl mx-auto">
            Get in touch for a free quote. Licensed pergola installers ready to help in {config.name} and surrounding suburbs.
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

      <Contact />
      <Footer />
    </>
  );
};

export default LocationTemplate;
