import { Helmet } from "@/lib/helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBanner from "@/components/FloatingBanner";
import Projects from "@/components/Projects";
import FinalCTA from "@/components/FinalCTA";
import { ArrowRight } from "lucide-react";

const SITE = "https://yourlocalpoolbuilder.com.au";
const CANONICAL = `${SITE}/gallery/`;

const Gallery = () => {
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
        name: "Gallery",
        item: CANONICAL,
      },
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Luxury Pool Gallery Sydney",
    description:
      "View recent luxury pool projects by Your Local Pool Builder, including custom concrete pools, inground pools, plunge pools, spas and pool renovations in Sydney.",
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
        <title>Luxury Pool Gallery Sydney | Your Local Pool Builder</title>
        <meta
          name="description"
          content="Explore recent luxury pool projects in Sydney by Your Local Pool Builder. View custom concrete pools, inground pools, plunge pools, spas and outdoor living spaces."
        />

        <meta
          property="og:title"
          content="Luxury Pool Gallery Sydney | Your Local Pool Builder"
        />
        <meta
          property="og:description"
          content="View recent custom pool builds, luxury pool renovations and outdoor living projects across Sydney."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={CANONICAL} />
        <meta
          property="og:image"
          content={`${SITE}/images/yourlocalpoolbuilder-featured-works-01.webp`}
        />
        <meta property="og:site_name" content="Your Local Pool Builder" />

        <link rel="canonical" href={CANONICAL} />

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(webPageSchema)}
        </script>
      </Helmet>

      <Header />
      <FloatingBanner />

      <main>
        <section className="relative flex min-h-[64vh] items-center overflow-hidden pt-28 text-white">
          <div className="absolute inset-0">
            <img
              src="/images/yourlocalpoolbuilder-featured-works-01.webp"
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#09233C]/62" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#09233C]/95 via-[#09233C]/72 to-[#09233C]/30" />
          </div>

          <div className="container-custom relative z-10 py-20 md:py-28">
            <div className="max-w-3xl">
              <p className="text-eyebrow mb-5 text-primary">
                Luxury pool project gallery
              </p>

              <h1 className="font-heading text-5xl font-semibold leading-tight md:text-6xl lg:text-7xl">
                Gallery
              </h1>

              <p className="mt-6 max-w-2xl font-body text-base leading-8 text-white/78 md:text-lg">
                Explore a selection of recent luxury pool projects, custom pool
                builds, renovations and outdoor living spaces designed for
                premium Sydney homes.
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
                  href="#projects"
                  className="inline-flex items-center justify-center border border-white/25 px-7 py-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:border-primary hover:text-primary"
                >
                  View projects
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-18 md:py-24">
          <div className="container-custom">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-eyebrow mb-4 text-primary">
                Sydney luxury pool inspiration
              </p>

              <h2 className="font-heading text-4xl font-semibold leading-tight text-foreground md:text-5xl">
                Custom pool builds designed around lifestyle, architecture and
                outdoor living
              </h2>

              <p className="mt-6 font-body text-sm leading-7 text-muted-foreground md:text-base">
                Every pool project is different. From refined concrete pools and
                compact plunge pools to integrated spas and complete backyard
                transformations, our gallery highlights the kind of premium
                outdoor spaces we help Sydney homeowners create.
              </p>
            </div>
          </div>
        </section>

        <Projects />

        <FinalCTA />
      </main>

      <Footer />
    </>
  );
};

export default Gallery;