import { Helmet } from "@/lib/helmet";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBanner from "@/components/FloatingBanner";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { serviceAreas } from "@/data/service-areas";

const LocationsPage = () => (
  <>
    <Helmet>
      <title>Service Areas & Locations | Your Local Pergola Installer</title>
      <meta
        name="description"
        content="Your Local Pergola Installer covers Sydney Central, South, West, and St George. Find your suburb and book licensed local pergola installers."
      />
      <link rel="canonical" href="https://yourlocalpergolainstaller.com.au/service/" />
      <meta property="og:title" content="Service Areas & Locations | Your Local Pergola Installer" />
      <meta
        property="og:description"
        content="Licensed pergola installers across Sydney Metropolitan Area. Explore areas and suburbs we service."
      />
      <meta property="og:url" content="https://yourlocalpergolainstaller.com.au/service/" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://yourlocalpergolainstaller.com.au/images/pergolas-5.jpg" />
    </Helmet>
    <Header />
    <FloatingBanner />

    {/* Hero */}
    <section className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/pergolas-4.jpg"
          alt="Your Local Pergola Installer service areas across Sydney Metropolitan Area"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(5,5,5,0.92)] via-[rgba(5,5,5,0.72)] to-[rgba(5,5,5,0.45)]" />
      </div>
      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl pt-32 pb-20">
        <nav className="flex items-center gap-2 mb-6 font-body text-sm text-white/50">
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-primary font-medium">Locations</span>
        </nav>
        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl tracking-wide uppercase text-white mb-6">
          Areas We <span className="text-primary">Service</span>
        </h1>
        <p className="font-body font-light text-white/70 text-lg max-w-2xl">
          Three local offices and full coverage across the Shire and St George. Choose your area or suburb to learn
          more.
        </p>
      </div>
    </section>

    {/* Area cards — dark */}
    <section className="bg-[#050505] text-white py-20 md:py-28 border-t border-white/[0.06]">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <AnimatedSection className="text-center mb-14 md:mb-16">
          <p className="text-eyebrow text-primary mb-3">[ SERVICE AREAS ]</p>
          <h2 className="font-heading text-4xl md:text-5xl tracking-wide uppercase">
            Four <span className="text-primary">regions</span>
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {serviceAreas.map((area, index) => (
            <AnimatedSection key={area.slug} animation="fade-in" delay={index * 80}>
              <Link
                to={`/pergola-builders-${area.slug}/`}
                className="group relative block min-h-[280px] md:min-h-[320px] overflow-hidden rounded-sm border border-white/[0.08] shadow-elevated transition-all duration-500 hover:border-primary/50"
              >
                <img
                  src={area.cardImage}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/25 transition-opacity duration-500 group-hover:from-black/95" />
                <div className="relative z-10 flex h-full min-h-[280px] md:min-h-[320px] flex-col justify-end p-8 md:p-10">
                  <MapPin className="h-5 w-5 text-primary mb-3 opacity-90" />
                  <h3 className="font-heading text-3xl md:text-4xl tracking-wide uppercase text-white mb-2 group-hover:text-primary transition-colors">
                    {area.name}
                  </h3>
                  <p className="font-body text-sm text-white/60 mb-4">
                    {area.suburbCount} suburbs · Local pergola installers
                  </p>
                  <span className="inline-flex items-center gap-2 font-body text-sm font-medium text-primary">
                    View area
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Suburbs by area — light */}
    <section className="bg-[#f4f6f8] text-foreground py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <AnimatedSection className="mb-12 md:mb-16 text-center md:text-left">
          <p className="text-eyebrow text-primary mb-3">[ ALL SUBURBS ]</p>
          <h2 className="font-heading text-4xl md:text-5xl tracking-wide uppercase">
            Suburbs <span className="text-primary">by area</span>
          </h2>
          <p className="font-body text-muted-foreground text-sm mt-4 max-w-2xl mx-auto md:mx-0">
            Every suburb below links to a dedicated local page with services, FAQs, and contact options.
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {serviceAreas.map((area, index) => (
            <AnimatedSection key={area.slug} animation="slide-up" delay={index * 60}>
              <div className="rounded-sm border border-border/60 bg-white p-8 shadow-sm">
                <div className="flex flex-wrap items-baseline justify-between gap-3 mb-6 border-b border-border/80 pb-4">
                  <h3 className="font-heading text-2xl md:text-3xl tracking-wide uppercase">{area.name}</h3>
                  <Link
                    to={`/pergola-builders-${area.slug}/`}
                    className="font-body text-sm text-primary hover:underline"
                  >
                    Area overview
                  </Link>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {area.suburbs.map((sub) => (
                    <li key={sub.slug}>
                      <Link
                        to={`/pergola-installers-in-${sub.slug}/`}
                        className="font-body text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                      >
                        <span className="w-1 h-1 rounded-full bg-primary/60 group-hover:bg-primary" />
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA — primary */}
    <section className="bg-primary text-primary-foreground py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl text-center">
        <AnimatedSection>
          <h2 className="font-heading text-4xl md:text-5xl tracking-wide uppercase mb-4">
            Ready to book a pergola installer?
          </h2>
          <p className="font-body font-light text-primary-foreground/90 mb-8 max-w-xl mx-auto">
            Call for emergencies or send a message for a quote. Same-day service across our service areas when
            available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="font-body font-semibold uppercase tracking-wide rounded-sm"
              asChild
            >
              <a href="tel:+61258496376">Call (02) 5849 6376</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 font-body font-semibold uppercase tracking-wide rounded-sm"
              asChild
            >
              <Link to="/contact/">Get in touch</Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <Footer />
  </>
);

export default LocationsPage;
