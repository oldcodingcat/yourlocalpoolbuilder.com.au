import { useMemo, useState } from "react";
import { Helmet } from "@/lib/helmet";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBanner from "@/components/FloatingBanner";
import { Button } from "@/components/ui/button";
import { areaLabels } from "@/data/service-areas";
import { ArrowRight, MapPin, Shield, FileText, Sparkles } from "lucide-react";

const SITE = "https://yourlocalpergolainstaller.com.au";
const CANONICAL = `${SITE}/about-us/`;

const AREA_HUB_ORDER = [
  "eastern-suburbs",
  "northern-beaches",
  "north-shore",
  "hills-district",
  "ryde",
  "inner-west",
  "western-sydney",
  "parramatta",
  "penrith",
  "hawkesbury",
  "north-west-sydney",
  "south-sydney",
  "sutherland-shire",
  "st-george",
] as const;

const heroSubtitle =
  "Custom pergolas, patios, outdoor roofing, decking, carports, and related outdoor structures across Greater Sydney — designed and installed with clear scope, practical detailing, and respect for how you actually use your backyard.";

const whoWeAreParagraphs = [
  "Your Local Pergola Installer is a Sydney-focused outdoor structure business built around pergolas and the systems that sit alongside them: covered patios, pavilion-style spaces, insulated and profiled roofing, sunroofs, gazebos, decking, and carports. We are not a general builder trying to cover every trade; we concentrate on outdoor rooms, shade, and weather protection so proportions, fixings, and finishes read as part of your home rather than an afterthought tacked onto the façade.",
  "Our work pairs measured design with disciplined installation. That means we think through roof direction, attachment to existing brick or weatherboard, drainage and edge details, and how you will move between indoors, lawn, and entertaining zones before we lock in materials. We coordinate projects from local offices across the metropolitan area, arrange site visits when they materially affect the quote, and keep communication plain-language so you know what is included before construction starts.",
  "We work with homeowners who want a serious outdoor upgrade without mystery pricing or vague handovers. If your priorities are usable shade, a better entertaining layout, vehicle cover, or a calmer connection between house and garden, we structure the project around those outcomes rather than pushing a single product line that happens to be easiest to sell.",
];

const whatWeDoParagraphs = [
  "We design and install custom pergolas and pergola-style covers, including attached runs along the house and freestanding outdoor rooms where the block suits. Roof forms span flat, gable, curved, and insulated panel systems depending on span, outlook, and thermal comfort. We also deliver patios and pavilion-style structures, sunroof installations, gazebos for garden focal points, and insulated roof solutions where you want outdoor living closer to indoor comfort levels.",
  "Decking is part of our toolkit when levels, thresholds, or entertaining flow need to be resolved together with cover above. Carports address vehicle protection and driveway geometry with the same attention to structure and finish. Where a project combines several elements — for example patio cover, integrated lighting intent, and steps down to a deck — we prefer to plan them as one coherent outdoor sequence rather than isolated quotes that fight each other on site.",
  "Each dedicated service page outlines typical scope and how we approach quoting so you can shortlist what matches your property before you call.",
];

const whatWeDoLinksIntro =
  "Explore our core services: pergola building and installation, patios, sunroofs, pavilions, insulated roofs, gazebos, gable, flat, and curved roof pergolas, decking, and carports — each with its own page.";

const howWeWorkIntro =
  "Every outdoor structure job follows a predictable path so expectations stay aligned from first conversation to handover. The steps below describe how we work on pergolas and related projects across Sydney.";

const howSteps = [
  {
    title: "Consultation",
    desc: "We listen to how you want to use the space, your timing, and rough budget bands, then outline realistic options for roof form, attachment, and materials.",
  },
  {
    title: "Site visit & quote",
    desc: "Where access, levels, or fixing details matter, we visit to measure and photograph key interfaces, then issue written scope and pricing without burying exclusions in fine print.",
  },
  {
    title: "Design / planning",
    desc: "We refine structure, finishes, and sequencing so the build integrates with your home and garden, including coordination points with other trades if you already have work underway.",
  },
  {
    title: "Installation & handover",
    desc: "We build in clear stages, communicate before disruptive phases, and walk through completed work with practical notes on care and what to watch seasonally.",
  },
];

const areaCoverageIntro =
  "Greater Sydney is not one uniform market — coastal exposure, block size, and council expectations vary by region. We publish region pages so you can see how we approach pergolas and outdoor structures in your part of the city before you request a quote.";

const ctaSupportParagraph =
  "Photos, rough dimensions, and inspiration images help us respond faster on the first pass. We focus on whether the structure we can deliver genuinely improves how you use your outdoor space for the years you plan to stay in the home, rather than pushing a quick sale that ignores your priorities.";

const whyCards = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    desc: "Qualified professionals with compliant and safe pergola installation practices.",
  },
  {
    icon: Sparkles,
    title: "Custom Solutions",
    desc: "Outdoor structures tailored to your block, roof line, and how you entertain or relax outside.",
  },
  {
    icon: MapPin,
    title: "Sydney Coverage",
    desc: "Metropolitan coverage coordinated from Mona Vale, Turramurra, Epping, Gladesville, and Kenthurst offices.",
  },
  {
    icon: FileText,
    title: "Clear Quotes & Communication",
    desc: "Written scope, staged assumptions where helpful, and direct phone access when decisions need a quick answer.",
  },
];

const aboutFaqs = [
  {
    q: "What types of outdoor structures do you build?",
    a: "We focus on pergolas and closely related work: patios, pavilion-style covers, insulated and profiled outdoor roofs, sunroofs, gazebos, gable, flat, and curved roof forms, decking, and carports. If you are unsure which category fits your sketch, send photos with your enquiry and we will steer the conversation.",
  },
  {
    q: "Do you service all of Sydney?",
    a: "We work across Greater Sydney through the regions linked below. If your suburb sits near a boundary, call (02) 5849 6376 with your address and we will confirm scheduling and which office coordinates your area.",
  },
  {
    q: "Can you help with custom pergola designs?",
    a: "Yes. Most residential projects are bespoke to roof height, aspect, and existing paving or lawn. We adjust span, post positions, and roof profile so the structure suits your architecture rather than forcing a catalogue module that ignores your context.",
  },
  {
    q: "Do you work on both attached and freestanding projects?",
    a: "We regularly deliver attached pergolas tied to the house and freestanding outdoor rooms. The better option depends on outlook, privacy, services locations, and how you want circulation from doors to the yard.",
  },
  {
    q: "How do I get a quote?",
    a: "Use the contact form on our contact page or phone (02) 5849 6376 with your suburb and a short description of the outdoor upgrade you want. We follow up with targeted questions, then provide a written quote when scope is clear enough to price fairly.",
  },
  {
    q: "Do you also build patios, decking, and carports?",
    a: "Yes. Those services sit alongside pergola work and are often combined when homeowners want one coordinated outdoor upgrade. Dedicated service pages describe typical inclusions for each type.",
  },
];

function countWords(chunks: readonly string[]): number {
  return chunks
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 0).length;
}

/** Visible editorial copy on this page (paragraphs, cards, steps, FAQs, hero subtitle, area intro). Excludes H1/H2 labels, eyebrows, buttons, and phone number digits-only artifacts. */
export const ABOUT_US_EDITORIAL_WORD_COUNT = countWords([
  heroSubtitle,
  ...whoWeAreParagraphs,
  ...whatWeDoParagraphs,
  whatWeDoLinksIntro,
  howWeWorkIntro,
  ...howSteps.flatMap((s) => [s.title, s.desc]),
  areaCoverageIntro,
  ctaSupportParagraph,
  ...whyCards.flatMap((c) => [c.title, c.desc]),
  ...aboutFaqs.flatMap((f) => [f.q, f.a]),
]);

const About = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const orderedAreas = useMemo(
    () => AREA_HUB_ORDER.map((slug) => ({ slug, label: areaLabels[slug] })).filter((a) => a.label),
    []
  );

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "About us", item: CANONICAL },
    ],
  };

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Your Local Pergola Installer",
    description:
      "Learn who we are, what outdoor structure services we offer across Sydney, how we work, and how to request a quote for pergolas, patios, roofing, decking, and carports.",
    url: CANONICAL,
    isPartOf: {
      "@type": "WebSite",
      name: "Your Local Pergola Installer",
      url: SITE,
    },
    mainEntity: {
      "@type": "Organization",
      name: "Your Local Pergola Installer",
      url: SITE,
      telephone: "+61258496376",
      areaServed: "Greater Sydney, NSW, Australia",
    },
  };

  return (
    <>
      <Helmet>
        <title>About Us | Your Local Pergola Installer</title>
        <meta
          name="description"
          content="Meet Your Local Pergola Installer: custom pergolas, patios, outdoor roofs, decking, and carports across Greater Sydney. Learn how we work and explore our service regions."
        />
        <meta property="og:title" content="About Us | Your Local Pergola Installer" />
        <meta
          property="og:description"
          content="Sydney outdoor structure specialists for pergolas, patios, roofing, decking, and carports — clear quotes and metropolitan coverage."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:image" content="https://yourlocalpergolainstaller.com.au/images/pergolas.jpeg" />
        <meta property="og:site_name" content="Your Local Pergola Installer" />
        <link rel="canonical" href={CANONICAL} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(aboutPageSchema)}</script>
      </Helmet>
      <Header />
      <FloatingBanner />

      <section className="relative min-h-[58vh] flex items-center overflow-hidden pt-28">
        <div className="absolute inset-0">
          <img src="/images/pergolas.jpeg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(5,5,5,0.88)] via-[rgba(5,5,5,0.7)] to-[rgba(5,5,5,0.4)]" />
        </div>
        <div className="relative z-10 container-custom max-w-7xl py-24 md:py-28">
          <p className="text-eyebrow text-primary mb-4">[ ABOUT ]</p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl tracking-wide uppercase text-white mb-6 max-w-4xl">
            About Your Local <span className="text-primary">Pergola Installer</span>
          </h1>
          <p className="font-body font-light text-white/80 text-base md:text-lg max-w-2xl mb-10 leading-relaxed">{heroSubtitle}</p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white text-sm font-body font-semibold uppercase tracking-wide rounded-sm">
              <Link to="/contact/">
                Contact us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white/30 bg-transparent text-white hover:bg-white/10 text-sm font-body font-semibold uppercase tracking-wide rounded-sm">
              <Link to="/service/">Services &amp; coverage</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="container-custom max-w-7xl">
          <p className="text-eyebrow text-primary mb-4">[ WHO WE ARE ]</p>
          <h2 className="font-heading text-3xl md:text-5xl tracking-wide uppercase text-foreground mb-8 max-w-3xl">
            Outdoor specialists, <span className="text-primary">Sydney-first</span>
          </h2>
          <div className="max-w-3xl space-y-5 font-body font-light text-muted-foreground text-sm md:text-base leading-relaxed">
            {whoWeAreParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111111] py-20 md:py-28">
        <div className="container-custom max-w-7xl">
          <p className="text-eyebrow text-primary mb-4">[ WHAT WE DO ]</p>
          <h2 className="font-heading text-3xl md:text-5xl tracking-wide uppercase text-white mb-8 max-w-3xl">
            Structures you <span className="text-primary">live under</span>
          </h2>
          <div className="max-w-3xl space-y-5 font-body font-light text-white/65 text-sm md:text-base leading-relaxed mb-8">
            {whatWeDoParagraphs.slice(0, 2).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <p className="max-w-3xl font-body font-light text-white/55 text-sm mb-4">{whatWeDoLinksIntro}</p>
          <p className="max-w-3xl font-body font-light text-white/65 text-sm md:text-base leading-relaxed flex flex-wrap gap-x-1 gap-y-2 items-baseline">
            <Link to="/pergola-building-and-installation/" className="text-primary hover:underline">
              Pergola building &amp; installation
            </Link>
            <span className="text-white/30">·</span>
            <Link to="/patios/" className="text-primary hover:underline">
              Patios
            </Link>
            <span className="text-white/30">·</span>
            <Link to="/sunroof/" className="text-primary hover:underline">
              Sunroof
            </Link>
            <span className="text-white/30">·</span>
            <Link to="/pavillions/" className="text-primary hover:underline">
              Pavilions
            </Link>
            <span className="text-white/30">·</span>
            <Link to="/insulated-roofs/" className="text-primary hover:underline">
              Insulated roofs
            </Link>
            <span className="text-white/30">·</span>
            <Link to="/gazebos/" className="text-primary hover:underline">
              Gazebos
            </Link>
            <span className="text-white/30">·</span>
            <Link to="/gable-roof/" className="text-primary hover:underline">
              Gable roof
            </Link>
            <span className="text-white/30">·</span>
            <Link to="/flat-roof/" className="text-primary hover:underline">
              Flat roof
            </Link>
            <span className="text-white/30">·</span>
            <Link to="/curved-roof/" className="text-primary hover:underline">
              Curved roof
            </Link>
            <span className="text-white/30">·</span>
            <Link to="/decking/" className="text-primary hover:underline">
              Decking
            </Link>
            <span className="text-white/30">·</span>
            <Link to="/carpot/" className="text-primary hover:underline">
              Carports
            </Link>
          </p>
          <p className="max-w-3xl font-body font-light text-white/65 text-sm md:text-base leading-relaxed mt-6">{whatWeDoParagraphs[2]}</p>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="container-custom max-w-7xl">
          <div className="text-center mb-14">
            <p className="text-eyebrow text-primary mb-4">[ WHY CHOOSE US ]</p>
            <h2 className="font-heading text-3xl md:text-5xl tracking-wide uppercase text-foreground">
              Built on <span className="text-primary">trust &amp; clarity</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {whyCards.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-background p-8 border border-border">
                  <Icon className="h-5 w-5 text-primary/80 mb-4" />
                  <h3 className="font-heading text-lg tracking-wide uppercase text-foreground mb-2">{item.title}</h3>
                  <p className="font-body font-light text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container-custom max-w-7xl">
          <p className="text-eyebrow text-primary mb-4">[ HOW WE WORK ]</p>
          <h2 className="font-heading text-3xl md:text-5xl tracking-wide uppercase text-foreground mb-6 max-w-3xl">
            From idea to <span className="text-primary">handover</span>
          </h2>
          <p className="font-body font-light text-muted-foreground text-sm md:text-base max-w-3xl leading-relaxed mb-12">{howWeWorkIntro}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {howSteps.map((row, i) => (
              <div key={row.title} className="relative border border-border bg-background p-8 rounded-sm">
                <span className="font-heading text-5xl text-foreground/[0.08] absolute top-4 right-4 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-xl tracking-wide uppercase text-foreground mb-3 relative">{row.title}</h3>
                <p className="font-body font-light text-muted-foreground text-sm leading-relaxed relative">{row.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111111] py-20 md:py-28">
        <div className="container-custom max-w-7xl">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <p className="text-eyebrow text-primary mb-4">[ SYDNEY COVERAGE ]</p>
            <h2 className="font-heading text-3xl md:text-5xl tracking-wide uppercase text-white mb-4">
              Regions <span className="text-primary">we serve</span>
            </h2>
            <p className="font-body font-light text-white/55 text-sm leading-relaxed">{areaCoverageIntro}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {orderedAreas.map((a) => (
              <Link
                key={a.slug}
                to={`/pergola-builders-${a.slug}/`}
                className="group p-5 border border-white/10 bg-white/[0.03] hover:border-primary/40 transition-all rounded-sm flex items-center gap-3"
              >
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                <span className="font-heading text-sm tracking-wide uppercase text-white group-hover:text-primary transition-colors">{a.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28 border-t border-border">
        <div className="container-custom max-w-7xl">
          <div className="text-center mb-12">
            <p className="text-eyebrow text-primary mb-4">[ FAQs ]</p>
            <h2 className="font-heading text-3xl md:text-5xl tracking-wide uppercase text-foreground">
              Common <span className="text-primary">questions</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {aboutFaqs.map((faq, i) => (
              <div
                key={i}
                className="border border-border hover:border-primary/30 transition-all duration-300 cursor-pointer rounded-sm"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="flex items-center justify-between p-5 md:p-6">
                  <p className="font-body font-medium text-sm text-foreground pr-4 text-left">{faq.q}</p>
                  <span className={`text-primary text-xl transition-transform shrink-0 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                  <p className="px-5 md:px-6 pb-5 md:pb-6 font-body font-light text-sm text-muted-foreground leading-relaxed text-left">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16">
        <div className="container-custom max-w-7xl text-center">
          <p className="text-eyebrow text-white/80 mb-3">[ NEXT STEP ]</p>
          <h2 className="font-heading text-3xl md:text-5xl tracking-wide uppercase text-white mb-4">Plan your outdoor upgrade</h2>
          <p className="font-body font-light text-white/85 text-base mb-4 max-w-xl mx-auto">
            Tell us your suburb and what you want to achieve. Visit our contact page or call{" "}
            <a href="tel:+61258496376" className="underline underline-offset-2 hover:text-white">
              (02) 5849 6376
            </a>{" "}
            for a conversation about scope and timing.
          </p>
          <p className="font-body font-light text-white/75 text-sm mb-8 max-w-xl mx-auto leading-relaxed">{ctaSupportParagraph}</p>
          <Button asChild size="lg" style={{ background: "#ffffff", color: "#111111" }} className="text-sm font-body font-semibold uppercase tracking-wide rounded-sm hover:opacity-90">
            <Link to="/contact/">Go to contact</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
