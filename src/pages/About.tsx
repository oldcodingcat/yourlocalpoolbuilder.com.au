import { Helmet } from "@/lib/helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBanner from "@/components/FloatingBanner";
import FinalCTA from "@/components/FinalCTA";
import ServicesGrid from "@/components/Services";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const SITE = "https://yourlocalpoolbuilder.com.au";
const CANONICAL = `${SITE}/about-us/`;

const values = [
  {
    title: "Luxury pool craftsmanship",
    text: "We focus on refined finishes, considered details and pool designs that feel integrated with the home rather than added on.",
  },
  {
    title: "Sydney-focused experience",
    text: "Our approach is shaped around the needs of Sydney homeowners, from compact blocks and sloping sites to premium outdoor living spaces.",
  },
  {
    title: "Clear communication",
    text: "From the first consultation to the final handover, we keep the process practical, transparent and easy to understand.",
  },
  {
    title: "Tailored design thinking",
    text: "Every project starts with your property, lifestyle, family needs and vision for how the space should feel and function.",
  },
];

const serviceLinks = [
  {
    name: "Concrete Pools",
    href: "/concrete-pools/",
  },
  {
    name: "Inground Pools",
    href: "/inground-pools/",
  },
  {
    name: "Plunge Pools",
    href: "/plunge-pools/",
  },
  {
    name: "Pool Renovations",
    href: "/pool-renovations/",
  },
  {
    name: "Spas",
    href: "/spas/",
  },
];

const About = () => {
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
        name: "About Us",
        item: CANONICAL,
      },
    ],
  };

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Your Local Pool Builder",
    description:
      "Learn about Your Local Pool Builder, a luxury pool building company creating custom concrete pools, inground pools, plunge pools, spas and pool renovations across Sydney.",
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
        <title>About Your Local Pool Builder | Luxury Pool Builders Sydney</title>
        <meta
          name="description"
          content="Learn about Your Local Pool Builder, a Sydney luxury pool building company specialising in custom concrete pools, inground pools, plunge pools, spas and pool renovations."
        />

        <meta
          property="og:title"
          content="About Your Local Pool Builder | Luxury Pool Builders Sydney"
        />
        <meta
          property="og:description"
          content="Sydney luxury pool builders creating custom swimming pools, plunge pools, spas and premium outdoor living spaces."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={CANONICAL} />
        <meta
          property="og:image"
          content={`${SITE}/images/yourlocalpoolbuilder-featured-works-04.webp`}
        />
        <meta property="og:site_name" content="Your Local Pool Builder" />

        <link rel="canonical" href={CANONICAL} />

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(aboutPageSchema)}
        </script>
      </Helmet>

      <Header />
      <FloatingBanner />

      <main>
        <section className="relative flex min-h-[64vh] items-center overflow-hidden pt-28 text-white">
          <div className="absolute inset-0">
            <img
              src="/images/yourlocalpoolbuilder-featured-works-04.webp"
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#09233C]/62" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#09233C]/95 via-[#09233C]/72 to-[#09233C]/30" />
          </div>

          <div className="container-custom relative z-10 py-20 md:py-28">
            <div className="max-w-3xl">
              <p className="text-eyebrow mb-5 text-primary">
                About Your Local Pool Builder
              </p>

              <h1 className="font-heading text-5xl font-semibold leading-tight md:text-6xl lg:text-7xl">
                Luxury Pool Builders for Sydney Homes
              </h1>

              <p className="mt-6 max-w-2xl font-body text-base leading-8 text-white/78 md:text-lg">
                We help Sydney homeowners create refined swimming pools, plunge
                pools, spas and outdoor living spaces designed around lifestyle,
                architecture and long-term value.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:0253013397"
                  className="inline-flex items-center justify-center gap-3 bg-primary px-7 py-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#09233C] transition hover:bg-white"
                >
                  Request a quote
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="/services/"
                  className="inline-flex items-center justify-center border border-white/25 px-7 py-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:border-primary hover:text-primary"
                >
                  View our services
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
                  Who we are
                </p>

                <h2 className="font-heading text-4xl font-semibold leading-tight text-foreground md:text-5xl">
                  A Sydney pool building team focused on design, quality and
                  lifestyle
                </h2>
              </div>

              <div className="space-y-5 font-body text-sm leading-7 text-muted-foreground md:text-base">
                <p>
                  Your Local Pool Builder creates custom swimming pools for
                  homeowners who want more than a standard backyard addition. We
                  design and build pool spaces that feel connected to the home,
                  the landscape and the way each family wants to live outdoors.
                </p>

                <p>
                  Our work includes luxury concrete pools, inground pools,
                  plunge pools, spas and pool renovations across Sydney. Every
                  project is approached with attention to proportion, finishes,
                  durability and the practical details that make the pool easy
                  to enjoy for years to come.
                </p>

                <p>
                  From the initial conversation through to construction and
                  handover, our goal is to make the process clear, considered
                  and focused on a result that improves both the look and
                  lifestyle value of your property.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-18 md:py-24">
          <div className="container-custom">
            <div className="grid gap-12 lg:grid-cols-3">
              <div>
                <p className="text-eyebrow mb-4 text-primary">Our vision</p>

                <h2 className="font-heading text-4xl font-semibold leading-tight text-foreground">
                  To create outdoor spaces that feel calm, refined and made for
                  everyday living
                </h2>
              </div>

              <div className="space-y-5 font-body text-sm leading-7 text-muted-foreground md:text-base lg:col-span-2">
                <p>
                  Our vision is to help Sydney homeowners turn unused or
                  underutilised outdoor areas into elegant pool spaces that feel
                  like a natural extension of the home.
                </p>

                <p>
                  We believe a luxury pool should be beautiful, practical and
                  deeply personal. It should suit the architecture, work with
                  the landscape, support entertaining and create a private place
                  to unwind.
                </p>
              </div>
            </div>

            <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {values.map((item) => (
                <div
                  key={item.title}
                  className="border border-border bg-card p-7 shadow-soft"
                >
                  <h3 className="font-heading text-2xl font-semibold text-foreground">
                    {item.title}
                  </h3>

                  <p className="mt-4 font-body text-sm leading-7 text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#09233C] py-18 text-white md:py-24">
          <div className="container-custom">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
              <div>
                <p className="text-eyebrow mb-4 text-primary">Our mission</p>

                <h2 className="font-heading text-4xl font-semibold leading-tight md:text-5xl">
                  Building pools that elevate the home and improve the way
                  people live outdoors
                </h2>

                <div className="mt-7 space-y-5 font-body text-sm leading-7 text-white/70 md:text-base">
                  <p>
                    Our mission is to deliver high-quality pool building
                    services with a strong focus on design, workmanship and
                    client experience. We want every project to feel carefully
                    planned, well communicated and built with purpose.
                  </p>

                  <p>
                    Whether the brief is a family pool, compact plunge pool,
                    resort-style spa or a complete pool renovation, we aim to
                    create a finished space that is functional, polished and
                    enjoyable every day.
                  </p>
                </div>
              </div>

              <div className="bg-white/5 p-8 md:p-10">
                <p className="font-heading text-3xl font-semibold text-primary">
                  Our goals
                </p>

                <div className="mt-7 space-y-5">
                  {[
                    "Create custom pool spaces that suit each property, not generic templates.",
                    "Use premium finishes and practical design details that support long-term use.",
                    "Make the process easier to understand from concept to construction.",
                    "Help Sydney homeowners increase lifestyle appeal and property value.",
                  ].map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                      <p className="font-body text-sm leading-7 text-white/70">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServicesGrid />

        <section className="bg-background py-18 md:py-24">
          <div className="container-custom">
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <p className="text-eyebrow mb-4 text-primary">
                  Our services
                </p>

                <h2 className="font-heading text-4xl font-semibold leading-tight text-foreground md:text-5xl">
                  Pool building services tailored to your home
                </h2>

                <p className="mt-6 font-body text-sm leading-7 text-muted-foreground md:text-base">
                  We offer a focused range of pool construction and renovation
                  services for Sydney homeowners looking for a premium result.
                </p>
              </div>

              <div className="grid gap-4">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.href}
                    to={service.href}
                    className="group flex items-center justify-between border border-border bg-card p-5 transition hover:border-primary/60 hover:shadow-medium"
                  >
                    <span className="font-heading text-2xl font-semibold text-foreground transition group-hover:text-primary">
                      {service.name}
                    </span>

                    <ArrowRight className="h-5 w-5 text-primary transition group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-18 md:py-24">
          <div className="container-custom">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-eyebrow mb-4 text-primary">Our team</p>

              <h2 className="font-heading text-4xl font-semibold leading-tight text-foreground md:text-5xl">
                Experienced pool specialists with a client-first approach
              </h2>

              <p className="mt-6 font-body text-sm leading-7 text-muted-foreground md:text-base">
                Our team brings together practical construction knowledge,
                design awareness and customer-focused service. We work closely
                with each client to understand their goals, explain the options
                clearly and create a pool that feels right for the home.
              </p>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>

      <Footer />
    </>
  );
};

export default About;