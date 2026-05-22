import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  {
    title: "Personalised Design",
    text: "Custom pools are tailored to the homeowner’s unique preferences, allowing them to create a pool that perfectly matches their vision and complements their property’s architecture and landscaping.",
  },
  {
    title: "Increased Property Value",
    text: "A well-designed custom pool can significantly increase the value of a home, making it a wise financial investment in addition to being a source of enjoyment. When it comes time to sell a home, a well-designed custom luxury pool can attract potential buyers and set the property apart from others on the market.",
  },
  {
    title: "Entertainment and Recreation",
    text: "Luxury pools provide an ideal setting for hosting gatherings, parties, and events, turning your backyard into an entertainment hub for family and friends.",
  },
  {
    title: "Enhanced Aesthetics",
    text: "Luxury pools are designed with aesthetics in mind, often incorporating stunning features such as infinity edges, waterfalls, intricate tile work, and premium materials that elevate the visual appeal of the space.",
  },
  {
    title: "Outdoor Living",
    text: "Custom luxury pools can be integrated into broader outdoor living spaces, including outdoor kitchens, lounging areas, fire pits, and entertainment zones, creating a complete outdoor oasis for relaxation and socializing.",
  },
  {
    title: "Wellness and Health",
    text: "Swimming is an excellent form of exercise and relaxation. A custom pool provides a private space for homeowners to stay active, relieve stress, and promote overall well-being.",
  },
];

const Process = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-background py-18 md:py-24">
      <div className="container-custom">
        <div className="mx-auto max-w-5xl">
          <p className="text-eyebrow mb-4 text-primary">Custom pool benefits</p>
          <h2 className="font-heading text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            Why Build a Custom Luxury Pool?
          </h2>
          <p className="mt-4 max-w-3xl font-body text-sm leading-7 text-muted-foreground md:text-base">
            Building a custom pool is about more than adding water to your backyard. The right design can improve how you relax, entertain, exercise and experience your Sydney home year-round.
          </p>

          <div className="mt-10 divide-y divide-border border border-border bg-white shadow-subtle">
            {items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={item.title}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left transition hover:bg-light-bg md:px-7"
                    aria-expanded={isOpen}
                  >
                    <span className="font-body text-sm font-semibold text-foreground md:text-base">{item.title}</span>
                    <ChevronDown className={`h-5 w-5 flex-none text-primary transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-6 md:px-7">
                      <p className="max-w-4xl font-body text-sm leading-7 text-muted-foreground">{item.text}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-5xl overflow-hidden bg-primary shadow-elevated">
          <div className="grid lg:min-h-[340px] lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative z-10 flex flex-col justify-center p-8 text-[#09233C] md:p-10 lg:pr-16">
              <p className="text-eyebrow mb-3 text-[#09233C]/70">Ready to dive in?</p>
              <h3 className="font-heading text-4xl font-semibold leading-tight md:text-5xl">Let’s shape your dream pool</h3>
              <p className="mt-4 max-w-xl font-body text-sm leading-7 text-[#09233C]/78 md:text-base">
                Share your vision with our Sydney pool builders and we’ll help you understand the best design direction, construction approach and next steps.
              </p>
              <a href="#quote" className="mt-6 inline-flex w-fit bg-[#09233C] px-6 py-3 font-body text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-[#09233C]">
                Start a quote
              </a>
            </div>

            <div className="relative min-h-[260px] overflow-hidden lg:min-h-full lg:[clip-path:polygon(16%_0,100%_0,100%_100%,0_100%)]">
              <img
                src="/images/yourlocalpoolbuilder-02.webp"
                alt="Modern custom swimming pool beside a luxury home"
                className="absolute inset-0 h-full w-full object-cover object-center lg:scale-105"
              />
              <div className="absolute inset-0 bg-[#09233C]/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
