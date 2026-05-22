import { Helmet } from "@/lib/helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBanner from "@/components/FloatingBanner";
import FinalCTA from "@/components/FinalCTA";
import { getServiceBySlug } from "@/data/services";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Navigate, useParams } from "react-router-dom";

const SITE = "https://yourlocalpoolbuilder.com.au";

const ServicePage = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/services/" replace />;
  }

  const canonical = `${SITE}/${service.slug}/`;

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
        item: `${SITE}/services/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: canonical,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: "Your Local Pool Builder",
      url: SITE,
      telephone: "+61253013397",
      areaServed: {
        "@type": "City",
        name: "Sydney",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Sydney",
    },
    url: canonical,
  };

  return (
    <>
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />

        <meta property="og:title" content={service.metaTitle} />
        <meta property="og:description" content={service.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={`${SITE}${service.heroImage}`} />
        <meta property="og:site_name" content="Your Local Pool Builder" />

        <link rel="canonical" href={canonical} />

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>

      <Header />
      <FloatingBanner />

      <main>
        <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-28 text-white">
          <div className="absolute inset-0">
            <img
              src={service.heroImage}
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#09233C]/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#09233C]/95 via-[#09233C]/72 to-[#09233C]/25" />
          </div>

          <div className="container-custom relative z-10 py-20 md:py-28">
            <div className="max-w-3xl">
              <p className="text-eyebrow mb-5 text-primary">
                {service.eyebrow}
              </p>

              <h1 className="font-heading text-5xl font-semibold leading-tight md:text-6xl lg:text-7xl">
                {service.title}
              </h1>

              <p className="mt-6 max-w-2xl font-body text-base leading-8 text-white/78 md:text-lg">
                {service.metaDescription}
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
                  View all services
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-18 md:py-24">
          <div className="container-custom">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-eyebrow mb-4 text-primary">
                {service.introEyebrow}
              </p>

              <h2 className="font-heading text-4xl font-semibold leading-tight text-foreground md:text-5xl">
                {service.introTitle}
              </h2>

              <div className="mt-7 space-y-5 font-body text-sm leading-7 text-muted-foreground md:text-base">
                {service.introParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-18 md:py-24">
          <div className="container-custom">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-eyebrow mb-4 text-primary">
                  {service.reasonsEyebrow}
                </p>

                <h2 className="font-heading text-4xl font-semibold leading-tight text-foreground md:text-5xl">
                  {service.reasonsTitle}
                </h2>

                <div className="mt-8 space-y-4">
                  {service.reasons.map((reason) => (
                    <div key={reason} className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                      <p className="font-body text-sm leading-7 text-muted-foreground md:text-base">
                        {reason}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <img
                  src={service.primaryImage}
                  alt={service.primaryImageAlt}
                  className="h-[420px] w-full object-cover shadow-medium"
                  loading="lazy"
                />

                <div className="absolute -bottom-6 -left-6 hidden max-w-xs bg-[#09233C] p-7 text-white shadow-strong md:block">
                  <p className="font-heading text-2xl font-semibold">
                    Built around your home
                  </p>

                  <p className="mt-3 font-body text-sm leading-6 text-white/70">
                    Every pool is planned to suit your site, architecture,
                    lifestyle and preferred outdoor finish.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-18 md:py-24">
          <div className="container-custom">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {service.benefits.map((item) => (
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

        <section className="bg-white py-18 md:py-24">
          <div className="container-custom">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="order-2 lg:order-1">
                <img
                  src={service.secondaryImage}
                  alt={service.secondaryImageAlt}
                  className="h-[430px] w-full object-cover shadow-medium"
                  loading="lazy"
                />
              </div>

              <div className="order-1 lg:order-2">
                <p className="text-eyebrow mb-4 text-primary">
                  {service.helpEyebrow}
                </p>

                <h2 className="font-heading text-4xl font-semibold leading-tight text-foreground md:text-5xl">
                  {service.helpTitle}
                </h2>

                <div className="mt-7 space-y-5 font-body text-sm leading-7 text-muted-foreground md:text-base">
                  {service.helpParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-8">
                  <a
                    href="tel:0253013397"
                    className="inline-flex items-center justify-center gap-3 bg-[#09233C] px-7 py-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-primary hover:text-[#09233C]"
                  >
                    {service.ctaLabel}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>

      <Footer />
    </>
  );
};

export default ServicePage;