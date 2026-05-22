import { Phone } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="relative overflow-hidden bg-primary text-[#09233C]">
      <div className="container-custom">
        <div className="grid min-h-[520px] items-stretch lg:grid-cols-[1fr_0.9fr]">
          <div className="relative z-10 flex flex-col justify-center py-20 pr-0 md:py-24 lg:pr-16">
            <p className="text-eyebrow mb-5 text-[#09233C]/70">
              Let’s start building your dream pool
            </p>

            <h2 className="max-w-3xl font-heading text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
              Ready to Create a Luxury Pool at Home?
            </h2>

            <p className="mt-6 max-w-2xl font-body text-lg leading-8 text-[#09233C]/80">
              Call Your Local Pool Builder to discuss your new pool, plunge
              pool, spa or renovation project anywhere across Sydney.
            </p>

            <div className="mt-9">
              <a
                href="tel:0253013397"
                className="inline-flex items-center justify-center gap-3 bg-[#09233C] px-8 py-4 font-body text-sm font-semibold uppercase tracking-[0.22em] text-white transition-all hover:bg-[#061a2d]"
              >
                Request a Quote
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative min-h-[340px] lg:min-h-full">
            <div
              className="absolute inset-0 bg-cover bg-center lg:clip-final-cta"
              style={{
                backgroundImage:
                  "url('/images/yourlocalpoolbuilder-featured-works-01.webp')",
              }}
              aria-hidden="true"
            />

            <div className="absolute inset-0 bg-[#09233C]/15 lg:clip-final-cta" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;