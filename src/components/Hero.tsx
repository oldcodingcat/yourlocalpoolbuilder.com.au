import { ArrowRight, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[86vh] overflow-hidden bg-[#09233C] pt-24">
      <div className="absolute inset-0">
        <img
          src="/images/yourlocalpoolbuilder-01.webp"
          alt="Luxury swimming pool construction in Sydney"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-[#09233C]/65" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#09233C]/95 via-[#09233C]/65 to-[#09233C]/20" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <div className="container-custom relative z-10 flex min-h-[calc(86vh-6rem)] items-center py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="text-eyebrow mb-5 text-primary">Luxury pool builders Sydney</p>
          <h1 className="font-heading text-5xl font-semibold leading-tight md:text-6xl lg:text-7xl text-white">
            Your Local Experts in Building Luxury Swimming Pools
          </h1>
          <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-white md:text-lg">
            Bespoke pool design and construction for Sydney homes. We create elegant concrete pools, inground pools, plunge pools, spas and premium outdoor living spaces built around your property, lifestyle and long-term enjoyment.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#quote"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-2 bg-primary px-7 py-4 font-body text-sm font-semibold uppercase tracking-[0.18em] text-[#09233C] transition hover:bg-white"
            >
              Schedule an appointment <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="tel:+61253013397"
              className="inline-flex items-center justify-center gap-2 border border-white/25 px-7 py-4 font-body text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-primary hover:text-primary"
            >
              <Phone className="h-4 w-4" /> 02 5301 3397
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
