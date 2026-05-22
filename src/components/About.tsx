import { ArrowRight, CheckCircle2 } from "lucide-react";

const projectTypes = [
  "Luxury concrete pools",
  "Inground swimming pools",
  "Plunge pools and spas",
  "Pool renovations and upgrades",
];

const About = () => {
  return (
    <section id="quote" className="bg-background py-18 md:py-24">
      <div className="container-custom grid gap-10 lg:grid-cols-[1fr_0.86fr] lg:items-stretch">
        <div className="rounded-sm bg-white p-8 shadow-subtle md:p-12">
          <p className="text-eyebrow mb-4 text-primary">Custom pool construction</p>
          <h2 className="font-heading text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            Luxury Custom Pool Builders in Sydney
          </h2>
          <div className="mt-6 space-y-4 font-body text-sm leading-7 text-muted-foreground md:text-base">
            <p>
              At Your Local Pool Builders, we specialise in refined residential pool construction for homeowners who want more than a standard swimming pool. Our team plans and builds custom pools that feel considered, architectural and easy to enjoy every day.
            </p>
            <p>
              From first consultation through design, approvals, excavation, construction and finishing details, we focus on clear communication, quality workmanship and a pool that complements your home, landscape and lifestyle.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {projectTypes.map((item) => (
              <div key={item} className="flex items-center gap-3 font-body text-sm font-medium text-foreground">
                <CheckCircle2 className="h-5 w-5 flex-none text-primary" />
                {item}
              </div>
            ))}
          </div>
          <a href="/about-us/" className="mt-8 inline-flex items-center gap-2 font-body text-sm font-semibold uppercase tracking-[0.18em] text-foreground hover:text-primary">
            Read more <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="bg-[#09233C] p-7 text-white shadow-elevated md:p-10">
          <p className="text-eyebrow text-center text-primary">Request a quote</p>
          <div className="mx-auto my-4 h-[1px] w-40 bg-primary/70" />
          <form className="space-y-3" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/thank-you/">
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden"><label>Don&apos;t fill this out:<input name="bot-field" /></label></p>
            <input name="name" required placeholder="Name" className="h-12 w-full border border-white/20 bg-white px-4 font-body text-sm text-[#09233C] outline-none focus:border-primary" />
            <input name="email" type="email" required placeholder="Email" className="h-12 w-full border border-white/20 bg-white px-4 font-body text-sm text-[#09233C] outline-none focus:border-primary" />
            <input name="phone" type="tel" required placeholder="Phone" className="h-12 w-full border border-white/20 bg-white px-4 font-body text-sm text-[#09233C] outline-none focus:border-primary" />
            <input name="address" required placeholder="Suburb / Project location" className="h-12 w-full border border-white/20 bg-white px-4 font-body text-sm text-[#09233C] outline-none focus:border-primary" />
            <select name="service" required className="h-12 w-full border border-white/20 bg-white px-4 font-body text-sm text-[#09233C] outline-none focus:border-primary">
              <option value="">Project type</option>
              <option value="inground-pools">Inground Pool</option>
              <option value="concrete-pools">Concrete Pool</option>
              <option value="plunge-pools">Plunge Pool</option>
              <option value="pool-renovations">Pool Renovation</option>
              <option value="spas">Spa</option>
            </select>
            <textarea name="message" required placeholder="Tell us about your pool project" rows={5} className="w-full border border-white/20 bg-white px-4 py-3 font-body text-sm text-[#09233C] outline-none focus:border-primary" />
            <button type="submit" className="w-full bg-primary px-5 py-4 font-body text-xs font-bold uppercase tracking-[0.2em] text-[#09233C] transition hover:bg-white">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default About;
