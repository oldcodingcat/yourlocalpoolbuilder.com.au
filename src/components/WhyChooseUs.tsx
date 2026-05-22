import { Award, BadgeCheck, Clock, Gem, Handshake, MapPin } from "lucide-react";

const benefits = [
  {
    icon: Gem,
    title: "Luxury-first design approach",
    text: "We consider proportions, finishes, sightlines and outdoor living flow so the pool feels like a natural extension of your home.",
  },
  {
    icon: Award,
    title: "Experienced pool builders",
    text: "Our team understands the practical and aesthetic details involved in custom concrete pool construction across Sydney properties.",
  },
  {
    icon: MapPin,
    title: "Sydney-focused service",
    text: "We work with homeowners across Sydney and tailor recommendations around local site conditions, access and property style.",
  },
  {
    icon: BadgeCheck,
    title: "Quality materials and finishes",
    text: "From structural details to interior finishes, coping and surrounding areas, we focus on lasting quality and refined presentation.",
  },
  {
    icon: Handshake,
    title: "Clear communication",
    text: "You receive straightforward guidance from consultation through planning, build stages and final handover.",
  },
  {
    icon: Clock,
    title: "Reliable project process",
    text: "We plan each stage carefully to help minimise delays and keep your luxury pool project moving with confidence.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-light-bg py-18 md:py-24">
      <div className="container-custom">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-eyebrow mb-4 text-primary">Why choose us</p>
          <h2 className="font-heading text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            Why Choose Your Local Pool Builder
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative overflow-hidden rounded-sm shadow-elevated">
            <img src="/images/yourlocalpoolbuilder-02.webp" alt="Modern luxury pool and outdoor living area" className="h-[420px] w-full object-cover md:h-[560px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09233C]/55 to-transparent" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map(({ icon: Icon, title, text }) => (
              <article key={title} className="group border border-border bg-white p-6 shadow-subtle transition hover:-translate-y-1 hover:shadow-medium">
                <Icon className="mb-5 h-6 w-6 text-primary" />
                <h3 className="font-heading text-2xl font-semibold leading-tight text-foreground">{title}</h3>
                <p className="mt-3 font-body text-sm leading-6 text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
