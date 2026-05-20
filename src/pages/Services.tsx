import { useMemo, useState } from "react";
import { Helmet } from "@/lib/helmet";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBanner from "@/components/FloatingBanner";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { areaLabels } from "@/data/service-areas";
import { ArrowRight, MapPin, Phone, Shield, FileText, Layers } from "lucide-react";

const SITE = "https://yourlocalpergolainstaller.com.au";
const CANONICAL = `${SITE}/service/`;

const SERVICE_HUB_ORDER = [
  "pergola-building-and-installation",
  "patios",
  "sunroof",
  "pavillions",
  "insulated-roofs",
  "gazebos",
  "gable-roof",
  "flat-roof",
  "curved-roof",
  "decking",
  "carpot",
] as const;

const AREA_HUB_ORDER = [
  "eastern-suburbs",
  "northern-beaches",
  "north-shore",
  "hills-district",
  "ryde",
  "inner-west",
  "western-sydney",
  "parramatta",
  "penrith",
  "hawkesbury",
  "north-west-sydney",
  "south-sydney",
  "sutherland-shire",
  "st-george",
] as const;

const areaOneLine: Record<string, string> = {
  "eastern-suburbs": "Premium outdoor living from coast to near-city suburbs.",
  "northern-beaches": "Salt-air aware pergolas, patios, and outdoor rooms.",
  "north-shore": "Established homes, leafy blocks, and design-led outdoor upgrades.",
  "hills-district": "Rural-urban mix, larger blocks, and practical outdoor structures.",
  ryde: "Family suburbs with strong demand for usable covered outdoor zones.",
  "inner-west": "Compact blocks, terraces, and architecture-sensitive outdoor work.",
  "western-sydney": "Growing suburbs and value-focused outdoor structure delivery.",
  parramatta: "Central-west coverage for patios, roofs, and pergola installations.",
  penrith: "Western growth corridors and established family outdoor upgrades.",
  hawkesbury: "Semi-rural blocks and weather-aware outdoor structure planning.",
  "north-west-sydney": "Newer estates and established streets across the north-west.",
  "south-sydney": "Dense residential pockets and practical shade solutions.",
  "sutherland-shire": "Shire-wide pergola, patio, and outdoor structure coverage.",
  "st-george": "St George area homes, units, and outdoor entertaining upgrades.",
};

const hubFaqs = [
  {
    q: "What pergola and outdoor structure services do you offer?",
    a: "We design and install custom pergolas, patios, pavilions, insulated and profiled roofing, sunroofs, gazebos, gable, flat, and curved roof structures, decking, and carports. Each service page outlines typical scope and how we approach quoting and delivery.",
  },
  {
    q: "Which parts of Sydney do you service?",
    a: "We work across Greater Sydney through the regions listed on this page, coordinated from our local offices. If you are unsure whether your suburb sits inside a region boundary, call (02) 5849 6376 and we will confirm scheduling and next steps.",
  },
  {
    q: "Do you handle custom pergola projects?",
    a: "Yes. Most projects are tailored to your block, roof direction, and how you plan to use the space. We focus on proportion, materials, and integration with existing architecture rather than one-size-fits-all kits.",
  },
  {
    q: "Can you help with attached and freestanding structures?",
    a: "Yes. We regularly deliver both attached pergolas tied to the house and freestanding outdoor rooms where the layout suits. The right option depends on access, outlook, and how you want circulation to work from indoors to outdoors.",
  },
  {
    q: "How do I get a quote?",
    a: "Use the contact form or call (02) 5849 6376 with your suburb and a short description of what you want to achieve. We typically follow up with questions about access, timing, and priorities before preparing a written quote.",
  },
  {
    q: "Do you also cover patios, roofs, decking, and carports?",
    a: "Yes. Those services are part of our core offering and are linked below. Many projects combine a covered patio or roof system with decking or a carport when the site and budget support a coordinated outcome.",
  },
];

const ServicesPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const orderedServices = useMemo(() => {
    const bySlug = new Map(services.map((s) => [s.slug, s]));
    return SERVICE_HUB_ORDER.map((slug) => bySlug.get(slug)).filter(Boolean) as typeof services;
  }, []);

  const orderedAreas = useMemo(
    () => AREA_HUB_ORDER.map((slug) => ({ slug, label: areaLabels[slug], line: areaOneLine[slug] })).filter((a) => a.label),
    []
  );

  const servicesItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Pergola and outdoor installation services",
    itemListElement: orderedServices.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.name,
      item: `${SITE}/${s.slug}/`,
    })),
  };

  const areasItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Sydney regions served",
    itemListElement: orderedAreas.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `Pergola builders ${a.label}`,
      item: `${SITE}/pergola-builders-${a.slug}/`,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Services & coverage", item: CANONICAL },
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Pergola installation services and Sydney coverage",
    description:
      "Hub for pergola installation, patios, outdoor roofs, decking, and carports across Greater Sydney, with links to all service and area pages.",
    url: CANONICAL,
    isPartOf: {
      "@type": "WebSite",
      name: "Your Local Pergola Installer",
      url: SITE,
    },
  };

  return (
    <>
      <Helmet>
        <title>Pergola Services & Sydney Coverage | Your Local Pergola Installer</title>
        <meta
          name="description"
          content="Explore pergola installation, patios, outdoor roofs, decking, and carports across Greater Sydney. Browse all services and regions, then request a free quote. Call (02) 5849 6376."
        />
        <meta property="og:title" content="Pergola Services & Sydney Coverage | Your Local Pergola Installer" />
        <meta
          property="og:description"
          content="Your hub for outdoor structures across Sydney: services, regions we cover, and how to request a quote."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:image" content="https://yourlocalpergolainstaller.com.au/images/pergolas.jpeg" />
        <meta property="og:site_name" content="Your Local Pergola Installer" />
        <link rel="canonical" href={CANONICAL} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(servicesItemList)}</script>
        <script type="application/ld+json">{JSON.stringify(areasItemList)}</script>
      </Helmet>
      <Header />
      <FloatingBanner />

      <section className="relative min-h-[62vh] flex items-center overflow-hidden pt-28">
        <div className="absolute inset-0">
          <img src="/images/pergolas-5.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(5,5,5,0.9)] via-[rgba(5,5,5,0.72)] to-[rgba(5,5,5,0.45)]" />
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl py-24 md:py-32">
          <p className="text-eyebrow text-primary mb-4">[ SERVICES & COVERAGE ]</p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl tracking-wide uppercase text-white mb-6 max-w-4xl">
            Pergola Installation Services <span className="text-primary">Across Sydney</span>
          </h1>
          <p className="font-body font-light text-white/75 text-base md:text-lg max-w-2xl mb-10 leading-relaxed">
            Custom pergolas, patios, insulated and profiled outdoor roofs, decking, carports, and related outdoor structures—designed and installed for Greater Sydney homes with clear communication and practical build quality.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white text-sm font-body font-semibold uppercase tracking-wide rounded-sm"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get a free quote <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 bg-transparent text-white hover:bg-white/10 text-sm font-body font-semibold uppercase tracking-wide rounded-sm"
              onClick={() => document.getElementById("services-grid")?.scrollIntoView({ behavior: "smooth" })}
            >
              Browse services
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 bg-transparent text-white hover:bg-white/10 text-sm font-body font-semibold uppercase tracking-wide rounded-sm"
              onClick={() => document.getElementById("areas-grid")?.scrollIntoView({ behavior: "smooth" })}
            >
              Areas we service
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
          <p className="text-eyebrow text-primary mb-4">[ OUR SERVICES ]</p>
          <h2 className="font-heading text-3xl md:text-5xl tracking-wide uppercase text-foreground mb-8 max-w-3xl">
            Outdoor structures, <span className="text-primary">built for real use</span>
          </h2>
          <div className="max-w-3xl space-y-5 font-body font-light text-muted-foreground text-sm md:text-base leading-relaxed">
            <p>
              Your Local Pergola Installer focuses on outdoor structures that improve how you live outside: shade when you need it, cover when weather turns, and layouts that respect how you move between indoors, lawn, and entertaining zones. We combine measured design thinking with installation discipline so the finished work looks intentional next to your home—not like a temporary add-on that fights your façade or garden.
            </p>
            <p>
              Our work spans custom pergolas and pergola-style covers, patios and pavilion-style spaces, insulated and profiled roofing options, sunroofs, gazebos, gable, flat, and curved roof forms, decking that ties outdoor levels together, and carports where vehicle protection is the priority. Projects are coordinated across Greater Sydney from our local offices, with site visits where they matter and written scope so expectations stay clear before construction begins.
            </p>
            <p>
              Whether you are upgrading a compact courtyard or planning a larger backyard room, we prioritise integration, durability, and practical detailing at connections and edges. For a direct conversation about your property, call <span className="text-foreground font-medium">(02) 5849 6376</span>. Use the sections below to jump into each service page or explore the regions we cover across Sydney.
            </p>
          </div>
        </div>
      </section>

      <section id="services-grid" className="bg-[#111111] py-20 md:py-28 scroll-mt-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
          <div className="text-center mb-14">
            <p className="text-eyebrow text-primary mb-4">[ WHAT WE BUILD ]</p>
            <h2 className="font-heading text-3xl md:text-5xl tracking-wide uppercase text-white">
              Our <span className="text-primary">services</span>
            </h2>
            <p className="font-body font-light text-white/50 text-sm mt-4 max-w-2xl mx-auto">
              Each link opens a dedicated page with scope guidance, typical uses, and how to request a tailored quote.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-white/[0.06]">
            {orderedServices.map((s) => (
              <Link
                key={s.slug}
                to={`/${s.slug}/`}
                className="group bg-[#111111] p-8 min-h-[160px] hover:bg-white/[0.03] transition-all duration-300 border border-transparent hover:border-primary/25"
              >
                <h3 className="font-heading text-lg md:text-xl tracking-wide uppercase text-white mb-2 group-hover:text-primary transition-colors">
                  {s.name}
                </h3>
                <p className="font-body font-light text-white/45 text-sm leading-relaxed mb-4">{s.description}</p>
                <span className="font-body text-xs uppercase tracking-wide text-primary inline-flex items-center gap-1">
                  View service <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="areas-grid" className="bg-background py-20 md:py-28 scroll-mt-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
          <div className="text-center mb-14">
            <p className="text-eyebrow text-primary mb-4">[ AREAS WE SERVICE ]</p>
            <h2 className="font-heading text-3xl md:text-5xl tracking-wide uppercase text-foreground">
              Sydney <span className="text-primary">coverage</span>
            </h2>
            <p className="font-body font-light text-muted-foreground text-sm mt-4 max-w-2xl mx-auto">
              Select your region for local context, typical project considerations, and suburb-level links where available.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {orderedAreas.map((a) => (
              <Link
                key={a.slug}
                to={`/pergola-builders-${a.slug}/`}
                className="group p-6 border border-border bg-card hover:border-primary/40 transition-all duration-300 rounded-sm"
              >
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary/70 group-hover:text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading text-lg tracking-wide uppercase text-foreground group-hover:text-primary transition-colors mb-1">
                      {a.label}
                    </h3>
                    <p className="font-body font-light text-muted-foreground text-sm leading-relaxed">{a.line}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111111] py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
          <div className="text-center mb-14">
            <p className="text-eyebrow text-primary mb-4">[ WHY HOMEOWNERS CHOOSE US ]</p>
            <h2 className="font-heading text-3xl md:text-5xl tracking-wide uppercase text-white">
              Built on <span className="text-primary">clarity & craft</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06]">
            {[
              {
                icon: Shield,
                title: "Licensed & Insured",
                desc: "Qualified professionals with compliant and safe pergola installation practices.",
              },
              {
                icon: MapPin,
                title: "Sydney Coverage",
                desc: "Greater Sydney regions coordinated from local offices for practical site visits and scheduling.",
              },
              {
                icon: FileText,
                title: "Clear Quotes",
                desc: "Written scope and plain-language explanations so you know what is included before work starts.",
              },
              {
                icon: Layers,
                title: "Custom Outdoor Solutions",
                desc: "Pergolas, patios, roofs, decking, and carports tailored to your block and how you use the space.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-[#111111] p-8 border border-white/[0.04]">
                  <Icon className="h-5 w-5 text-primary/80 mb-4" />
                  <h3 className="font-heading text-lg tracking-wide uppercase text-white mb-2">{item.title}</h3>
                  <p className="font-body font-light text-white/45 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
          <div className="text-center mb-14">
            <p className="text-eyebrow text-primary mb-4">[ HOW WE WORK ]</p>
            <h2 className="font-heading text-3xl md:text-5xl tracking-wide uppercase text-foreground">
              From first call to <span className="text-primary">handover</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: "01", title: "Consultation", desc: "We clarify goals, budget bands, and timing so the project direction matches how you want to use the outdoor space." },
              { step: "02", title: "Site visit & quote", desc: "We measure access and key interfaces, then prepare a written quote with clear scope and staged delivery assumptions." },
              { step: "03", title: "Design / planning", desc: "We refine roof form, materials, and fixing intent so the structure integrates with your home and garden context." },
              { step: "04", title: "Installation & handover", desc: "We build in clear stages, communicate before disruptive work, and walk through finishes and maintenance at completion." },
            ].map((row) => (
              <div key={row.step} className="relative border border-border bg-background p-8 rounded-sm">
                <span className="font-heading text-5xl text-foreground/[0.08] absolute top-4 right-4 select-none">{row.step}</span>
                <h3 className="font-heading text-xl tracking-wide uppercase text-foreground mb-3 relative">{row.title}</h3>
                <p className="font-body font-light text-muted-foreground text-sm leading-relaxed relative">{row.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28 border-t border-border">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
          <div className="text-center mb-12">
            <p className="text-eyebrow text-primary mb-4">[ FAQs ]</p>
            <h2 className="font-heading text-3xl md:text-5xl tracking-wide uppercase text-foreground">
              Hub <span className="text-primary">questions</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {hubFaqs.map((faq, i) => (
              <div
                key={i}
                className="border border-border hover:border-primary/30 transition-all duration-300 cursor-pointer rounded-sm"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="flex items-center justify-between p-5 md:p-6">
                  <p className="font-body font-medium text-sm text-foreground pr-4 text-left">{faq.q}</p>
                  <span className={`text-primary text-xl transition-transform shrink-0 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
                  <p className="px-5 md:px-6 pb-5 md:pb-6 font-body font-light text-sm text-muted-foreground leading-relaxed text-left">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl text-center">
          <h2 className="font-heading text-3xl md:text-5xl tracking-wide uppercase text-white mb-4">
            Ready to plan your outdoor project?
          </h2>
          <p className="font-body font-light text-white/85 text-base mb-8 max-w-xl mx-auto">
            Tell us your suburb and what you want to achieve—pergola, patio, roof upgrade, decking, or carport. We cover Greater Sydney and provide free quotes for qualifying enquiries. Call{" "}
            <a href="tel:+61258496376" className="underline underline-offset-2 hover:text-white">
              (02) 5849 6376
            </a>
            .
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              style={{ background: "#ffffff", color: "#111111" }}
              className="text-sm font-body font-semibold uppercase tracking-wide rounded-sm hover:opacity-90"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white bg-transparent hover:bg-white hover:text-primary text-white text-sm font-body font-semibold uppercase tracking-wide rounded-sm"
              onClick={() => (window.location.href = "tel:+61258496376")}
            >
              <Phone className="mr-2 h-4 w-4" /> Call now
            </Button>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </>
  );
};

export default ServicesPage;
