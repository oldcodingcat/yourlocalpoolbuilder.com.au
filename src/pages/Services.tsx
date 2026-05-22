import { Helmet } from "@/lib/helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBanner from "@/components/FloatingBanner";
import ServicesGrid from "@/components/Services";
import FinalCTA from "@/components/FinalCTA";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const SITE = "https://yourlocalpoolbuilder.com.au";
const CANONICAL = `${SITE}/services/`;

const serviceLinks = [
  {
    name: "Inground Pools",
    href: "/inground-pools/",
    description:
      "Premium inground pool construction for Sydney homes, designed around your block, architecture and outdoor living goals.",
  },
  {
    name: "Concrete Pools",
    href: "/concrete-pools/",
    description:
      "Luxury custom concrete pools with refined finishes, flexible shapes and long-term structural performance.",
  },
  {
    name: "Plunge Pools",
    href: "/plunge-pools/",
    description:
      "Compact plunge pool solutions for courtyards, smaller backyards and elegant relaxation spaces.",
  },
  {
    name: "Pool Renovations",
    href: "/pool-renovations/",
    description:
      "Pool renovation services including resurfacing, modern finishes, coping, surrounds and practical upgrades.",
  },
  {
    name: "Spas",
    href: "/spas/",
    description:
      "Custom spa additions and integrated wellness features for resort-style living at home.",
  },
];

const processItems = [
  {
    title: "Consultation",
    text: "We start with your vision, site conditions, lifestyle needs and budget expectations so the project direction is clear from the beginning.",
  },
  {
    title: "Design Direction",
    text: "Our team helps shape the pool layout, proportions, finishes and outdoor integration to suit your Sydney property.",
  },
  {
    title: "Quote & Planning",
    text: "You receive a clear project scope with practical next steps before construction begins.",
  },
  {
    title: "Build & Handover",
    text: "We coordinate the construction process with attention to detail, communication and a polished final result.",
  },
];

const Services = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: CANONICAL,
      },
    ],
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Luxury pool building services in Sydney",
    itemListElement: serviceLinks.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.name,
      description: service.description,
      url: `${SITE}${service.href}`,
    })),
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Luxury Pool Building Services Sydney",
    description:
      "Explore luxury pool building services in Sydney, including inground pools, concrete pools, plunge pools, pool renovations and spas.",
    url: CANONICAL,
    isPartOf: {
      "@type": "WebSite",
      name: "Your Local Pool Builder",
      url: SITE,
    },
  };

  return (
    <>
      <Helmet>
        <title>
          Luxury Pool Building Services Sydney | Your Local Pool Builder
        </title>
        <meta
          name="description"
          content="Explore luxury pool building services in Sydney, including inground pools, concrete pools, plunge pools, pool renovations and spas. Request a quote from Your Local Pool Builder."
        />
        <meta
          property="og:title"
          content="Luxury Pool Building Services Sydney | Your Local Pool Builder"
        />
        <meta
          property="og:description"
          content="Custom pool construction, pool renovations, plunge pools, concrete pools and spas for Sydney homeowners."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={CANONICAL} />
        <meta
          property="og:image"
          content={`${SITE}/images/services-hero.webp`}
        />
        <meta property="og:site_name" content="Your Local Pool Builder" />
        <link rel="canonical" href={CANONICAL} />

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(webPageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(servicesSchema)}
        </script>
      </Helmet>

      <Header />
      <FloatingBanner />

      <main>
        <section className="relative flex min-h-[64vh] items-center overflow-hidden pt-28 text-white">
          <div className="absolute inset-0">
            <img
              src="/images/services-hero.webp"
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#09233C]/62" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#09233C]/95 via-[#09233C]/72 to-[#09233C]/30" />
          </div>

          <div className="container-custom relative z-10 py-20 md:py-28">
            <div className="max-w-3xl">
              <p className="text-eyebrow mb-5 text-primary">
                Luxury pool building services
              </p>

              <h1 className="font-heading text-5xl font-semibold leading-tight md:text-6xl lg:text-7xl">
                Services
              </h1>

              <p className="mt-6 max-w-2xl font-body text-base leading-8 text-white/78 md:text-lg">
                Your Local Pool Builder creates refined swimming pools, plunge
                pools, spas and pool renovations for Sydney homeowners who want
                a premium outdoor living experience.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:+61253013397"
                  className="inline-flex items-center justify-center gap-3 bg-primary px-7 py-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#09233C] transition hover:bg-white"
                >
                  Request a quote
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="#services"
                  className="inline-flex items-center justify-center border border-white/25 px-7 py-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:border-primary hover:text-primary"
                >
                  View services
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-18 md:py-24">
          <div className="container-custom">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-eyebrow mb-4 text-primary">
                  Sydney pool specialists
                </p>

                <h2 className="font-heading text-4xl font-semibold leading-tight text-foreground md:text-5xl">
                  Pool construction services designed around the way you live
                </h2>
              </div>

              <div className="space-y-5 font-body text-sm leading-7 text-muted-foreground md:text-base">
                <p>
                  A luxury pool should feel like a natural extension of your
                  home. We help Sydney homeowners plan and build pools that
                  balance design, proportion, durability and everyday use.
                </p>

                <p>
                  Whether you are planning a new inground concrete pool, a
                  compact plunge pool, a spa, or a complete pool renovation, our
                  approach focuses on clear communication, considered finishes
                  and a result that improves the value and lifestyle of your
                  property.
                </p>

                <div className="grid gap-3 pt-3 sm:grid-cols-2">
                  {[
                    "Custom pool design direction",
                    "Concrete pool construction",
                    "Plunge pools and spas",
                    "Pool renovation solutions",
                    "Sydney-focused project advice",
                    "Premium outdoor living finishes",
                  ].map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id="services">
          <ServicesGrid />
        </div>

        <section className="bg-[#09233C] py-18 text-white md:py-24">
          <div className="container-custom">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="text-eyebrow mb-4 text-primary">
                How we approach your project
              </p>

              <h2 className="font-heading text-4xl font-semibold leading-tight md:text-5xl">
                From first conversation to finished pool
              </h2>

              <p className="mt-4 font-body text-sm leading-7 text-white/70 md:text-base">
                We keep the process clear and practical so you understand the
                design direction, construction approach and next steps before
                work begins.
              </p>
            </div>

            <div className="grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-4">
              {processItems.map((item, index) => (
                <div key={item.title} className="bg-[#09233C] p-8">
                  <span className="font-heading text-5xl text-primary/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-5 font-heading text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-4 font-body text-sm leading-7 text-white/65">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background py-18 md:py-24">
          <div className="container-custom">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-eyebrow mb-4 text-primary">
                Explore our services
              </p>

              <h2 className="font-heading text-4xl font-semibold leading-tight text-foreground md:text-5xl">
                Choose the right pool solution for your home
              </h2>

              <p className="mt-4 font-body text-sm leading-7 text-muted-foreground md:text-base">
                Each service is tailored to your property, outdoor space and
                long-term lifestyle goals.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {serviceLinks.map((service) => (
                <Link
                  key={service.href}
                  to={service.href}
                  className="group border border-border bg-card p-7 transition hover:border-primary/60 hover:shadow-medium"
                >
                  <h3 className="font-heading text-2xl font-semibold text-foreground transition group-hover:text-primary">
                    {service.name}
                  </h3>

                  <p className="mt-3 font-body text-sm leading-7 text-muted-foreground">
                    {service.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>

      <Footer />
    </>
  );
};

export default Services;