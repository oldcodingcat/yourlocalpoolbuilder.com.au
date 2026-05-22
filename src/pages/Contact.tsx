import { Helmet } from "@/lib/helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBanner from "@/components/FloatingBanner";
import FinalCTA from "@/components/FinalCTA";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const SITE = "https://yourlocalpoolbuilder.com.au";
const CANONICAL = `${SITE}/contact-us/`;

const contactCards = [
  {
    icon: Phone,
    label: "Call us",
    value: "02 5301 3397",
    href: "tel:0253013397",
  },
  {
    icon: Mail,
    label: "Email us",
    value: "info@yourlocalpoolbuilder.com.au",
    href: "mailto:info@yourlocalpoolbuilder.com.au",
  },
  {
    icon: MapPin,
    label: "Service area",
    value: "Sydney, NSW",
    href: null,
  },
];

const Contact = () => {
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
        name: "Contact Us",
        item: CANONICAL,
      },
    ],
  };

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Your Local Pool Builder",
    description:
      "Contact Your Local Pool Builder to request a quote for luxury pool construction, inground pools, concrete pools, plunge pools, spas and pool renovations in Sydney.",
    url: CANONICAL,
    isPartOf: {
      "@type": "WebSite",
      name: "Your Local Pool Builder",
      url: SITE,
    },
    mainEntity: {
      "@type": "LocalBusiness",
      name: "Your Local Pool Builder",
      telephone: "+61253013397",
      email: "info@yourlocalpoolbuilder.com.au",
      areaServed: {
        "@type": "City",
        name: "Sydney",
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Luxury Pool Builders Sydney</title>
        <meta
          name="description"
          content="Contact Your Local Pool Builder to request a quote for luxury pool construction, concrete pools, inground pools, plunge pools, spas and pool renovations in Sydney."
        />

        <meta
          property="og:title"
          content="Contact Us | Luxury Pool Builders Sydney"
        />
        <meta
          property="og:description"
          content="Request a quote from Your Local Pool Builder for luxury pool construction and pool renovations across Sydney."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={CANONICAL} />
        <meta
          property="og:image"
          content={`${SITE}/images/services-01-Luxury-Custom-Concrete-Pools.webp`}
        />
        <meta property="og:site_name" content="Your Local Pool Builder" />

        <link rel="canonical" href={CANONICAL} />

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(contactPageSchema)}
        </script>
      </Helmet>

      <Header />
      <FloatingBanner />

      <main>
        <section className="relative flex min-h-[64vh] items-center overflow-hidden pt-28 text-white">
          <div className="absolute inset-0">
            <img
              src="/images/services-01-Luxury-Custom-Concrete-Pools.webp"
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#09233C]/65" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#09233C]/95 via-[#09233C]/72 to-[#09233C]/25" />
          </div>

          <div className="container-custom relative z-10 py-20 md:py-28">
            <div className="max-w-3xl">
              <p className="text-eyebrow mb-5 text-primary">
                Contact Your Local Pool Builder
              </p>

              <h1 className="font-heading text-5xl font-semibold leading-tight md:text-6xl lg:text-7xl">
                Contact Us
              </h1>

              <p className="mt-6 max-w-2xl font-body text-base leading-8 text-white/78 md:text-lg">
                Ready to create a luxury pool, plunge pool, spa or pool
                renovation? Speak with our Sydney pool builders and tell us
                about your project.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:0253013397"
                  className="inline-flex items-center justify-center gap-3 bg-primary px-7 py-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#09233C] transition hover:bg-white"
                >
                  Call 02 5301 3397
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="mailto:info@yourlocalpoolbuilder.com.au"
                  className="inline-flex items-center justify-center border border-white/25 px-7 py-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:border-primary hover:text-primary"
                >
                  Email us
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#09233C] py-18 text-white md:py-24">
          <div className="container-custom">
            <div className="grid gap-5 md:grid-cols-3">
              {contactCards.map((card) => {
                const Icon = card.icon;

                const content = (
                  <div className="group flex h-full flex-col items-center justify-center border border-white/10 bg-white p-8 text-center text-[#09233C] shadow-soft transition hover:-translate-y-1 hover:shadow-medium">
                    <span className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-[#09233C]/20 text-[#09233C] transition group-hover:border-primary group-hover:bg-primary">
                      <Icon className="h-6 w-6" />
                    </span>

                    <p className="mt-6 font-body text-xs font-semibold uppercase tracking-[0.18em] text-[#09233C]/55">
                      {card.label}
                    </p>

                    <p className="mt-2 font-heading text-2xl font-semibold">
                      {card.value}
                    </p>
                  </div>
                );

                return card.href ? (
                  <a key={card.label} href={card.href}>
                    {content}
                  </a>
                ) : (
                  <div key={card.label}>{content}</div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-background py-18 md:py-24">
          <div className="container-custom">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-eyebrow mb-4 text-primary">
                  Request a quote
                </p>

                <h2 className="font-heading text-4xl font-semibold leading-tight text-foreground md:text-5xl">
                  Tell us about your pool project
                </h2>

                <div className="mt-7 space-y-5 font-body text-sm leading-7 text-muted-foreground md:text-base">
                  <p>
                    Whether you are planning a new luxury pool, custom concrete
                    pool, plunge pool, spa or a complete pool renovation, we can
                    help you understand the best next step for your Sydney home.
                  </p>

                  <p>
                    Share a few details about your property, design ideas and
                    timeline. Our team will review your enquiry and get back to
                    you to discuss your vision, site considerations and quote
                    options.
                  </p>
                </div>

                <div className="mt-9 bg-[#09233C] p-8 text-white">
                  <p className="font-heading text-3xl font-semibold">
                    Prefer to speak directly?
                  </p>

                  <p className="mt-4 font-body text-sm leading-7 text-white/70">
                    Call us on{" "}
                    <a
                      href="tel:0253013397"
                      className="font-semibold text-primary"
                    >
                      02 5301 3397
                    </a>{" "}
                    to discuss your pool construction or renovation project.
                  </p>
                </div>
              </div>

              <form
                name="contact"
                method="POST"
                data-netlify="true"
                className="border border-border bg-white p-6 shadow-medium md:p-8"
              >
                <input type="hidden" name="form-name" value="contact" />

                <div className="grid gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block font-body text-xs font-semibold uppercase tracking-[0.16em] text-[#09233C]/70"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full border border-border bg-background px-4 py-4 font-body text-sm outline-none transition focus:border-primary"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block font-body text-xs font-semibold uppercase tracking-[0.16em] text-[#09233C]/70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="w-full border border-border bg-background px-4 py-4 font-body text-sm outline-none transition focus:border-primary"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block font-body text-xs font-semibold uppercase tracking-[0.16em] text-[#09233C]/70"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Your phone number"
                      className="w-full border border-border bg-background px-4 py-4 font-body text-sm outline-none transition focus:border-primary"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="address"
                      className="mb-2 block font-body text-xs font-semibold uppercase tracking-[0.16em] text-[#09233C]/70"
                    >
                      Address / Suburb
                    </label>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      placeholder="Project address or suburb"
                      className="w-full border border-border bg-background px-4 py-4 font-body text-sm outline-none transition focus:border-primary"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block font-body text-xs font-semibold uppercase tracking-[0.16em] text-[#09233C]/70"
                    >
                      Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full border border-border bg-background px-4 py-4 font-body text-sm outline-none transition focus:border-primary"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option value="Concrete Pools">Concrete Pools</option>
                      <option value="Inground Pools">Inground Pools</option>
                      <option value="Plunge Pools">Plunge Pools</option>
                      <option value="Pool Renovations">Pool Renovations</option>
                      <option value="Spas">Spas</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block font-body text-xs font-semibold uppercase tracking-[0.16em] text-[#09233C]/70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      placeholder="Tell us about your pool project"
                      className="w-full resize-none border border-border bg-background px-4 py-4 font-body text-sm outline-none transition focus:border-primary"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-3 bg-primary px-7 py-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#09233C] transition hover:bg-[#09233C] hover:text-white"
                  >
                    Send enquiry
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="bg-white py-18 md:py-24">
          <div className="container-custom">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-eyebrow mb-4 text-primary">
                Sydney pool builders
              </p>

              <h2 className="font-heading text-4xl font-semibold leading-tight text-foreground md:text-5xl">
                Start with a conversation about your dream pool
              </h2>

              <p className="mt-6 font-body text-sm leading-7 text-muted-foreground md:text-base">
                The best pool projects start with a clear understanding of your
                home, lifestyle, budget, timeline and the feeling you want to
                create outdoors. Contact Your Local Pool Builder and we’ll help
                you move from idea to practical next steps.
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

export default Contact;