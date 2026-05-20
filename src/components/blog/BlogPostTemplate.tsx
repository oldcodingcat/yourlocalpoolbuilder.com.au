import { Helmet } from "@/lib/helmet";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type BlogSection = {
  id: string;
  heading: string;
  level: 2 | 3;
  paragraphs: string[];
  image?: { src: string; alt: string; caption?: string };
  list?: { type: "bullet" | "numbered"; items: string[] };
  callout?: { type: "info" | "tip" | "warning"; text: string };
};

export interface BlogPostConfig {
  slug: string;
  title: string;
  metaDescription: string;
  heroImage: string;
  heroImageAlt: string;
  category: string;
  publishedDate: string;
  modifiedDate: string;
  estimatedReadMinutes: number;
  leadParagraph: string;
  sections: BlogSection[];
  keyTakeaways: string[];
  faqs: { q: string; a: string }[];
  relatedPosts: {
    slug: string;
    title: string;
    category: string;
    image?: string;
  }[];
}

const countWords = (text: string): number => text.trim().split(/\s+/).filter(Boolean).length;

const calculateReadMinutes = (config: BlogPostConfig): number => {
  const baseText = [
    config.title,
    config.leadParagraph,
    ...config.sections.flatMap((section) => [section.heading, ...section.paragraphs, ...(section.list?.items ?? []), section.callout?.text ?? ""]),
    ...config.keyTakeaways,
    ...config.faqs.flatMap((faq) => [faq.q, faq.a]),
  ].join(" ");
  return Math.max(1, Math.ceil(countWords(baseText) / 200));
};

const getCalloutClasses = (type: "info" | "tip" | "warning"): string => {
  if (type === "tip") return "border-l-4 border-primary bg-primary/5 text-foreground";
  if (type === "warning") return "border-l-4 border-amber-500 bg-amber-50 text-foreground";
  return "border-l-4 border-blue-500 bg-blue-50 text-foreground";
};

const BlogPostTemplate = ({ post }: { post: BlogPostConfig }) => {
  const readMinutes = calculateReadMinutes(post);
  const sectionHeadings = post.sections.filter((section) => section.level === 2);
  const canonicalUrl = `https://yourlocalpergolainstaller.com.au/${post.slug}/`;
  const publishedIso = new Date(post.publishedDate).toISOString();
  const modifiedIso = new Date(post.modifiedDate).toISOString();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: [`https://yourlocalpergolainstaller.com.au${post.heroImage}`],
    author: {
      "@type": "Organization",
      name: "Your Local Pergola Installer",
      url: "https://yourlocalpergolainstaller.com.au/",
    },
    publisher: {
      "@type": "Organization",
      name: "Your Local Pergola Installer",
      logo: {
        "@type": "ImageObject",
        url: "https://yourlocalpergolainstaller.com.au/images/logo.svg",
      },
    },
    datePublished: publishedIso,
    dateModified: modifiedIso,
    mainEntityOfPage: canonicalUrl,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://yourlocalpergolainstaller.com.au/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://yourlocalpergolainstaller.com.au/blog/" },
      { "@type": "ListItem", position: 3, name: post.title, item: canonicalUrl },
    ],
  };

  const faqSchema = post.faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      }
    : null;

  return (
    <>
      <Helmet>
        <title>{post.title} | Your Local Pergola Installer</title>
        <meta name="description" content={post.metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={`${post.title} | Your Local Pergola Installer`} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={`https://yourlocalpergolainstaller.com.au${post.heroImage}`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="article:published_time" content={publishedIso} />
        <meta property="article:modified_time" content={modifiedIso} />
        <meta property="article:author" content="Your Local Pergola Installer" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${post.title} | Your Local Pergola Installer`} />
        <meta name="twitter:description" content={post.metaDescription} />
        <meta name="twitter:image" content={`https://yourlocalpergolainstaller.com.au${post.heroImage}`} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        {faqSchema ? <script type="application/ld+json">{JSON.stringify(faqSchema)}</script> : null}
      </Helmet>

      <Header />

      <section className="relative min-h-[520px] flex items-end overflow-hidden pt-28">
        <img src={post.heroImage} alt={post.heroImageAlt} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/50" />
        <div className="container-custom relative z-10 pb-16 md:pb-20">
          <nav className="text-sm text-white/80 mb-6">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/blog/" className="hover:text-primary">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-primary">{post.title}</span>
          </nav>
          <h1 className="font-heading text-4xl md:text-6xl tracking-wide uppercase text-white max-w-4xl mb-5">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-white/85">
            <span>{new Date(post.publishedDate).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })}</span>
            <span>•</span>
            <span>{readMinutes} min read</span>
            <span>•</span>
            <span>{post.category}</span>
          </div>
        </div>
      </section>

      <section className="bg-background py-12 md:py-16">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-3 gap-10">
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-28 space-y-6">
              <details className="border border-border bg-white p-5 open:shadow-sm" open>
                <summary className="font-heading text-2xl uppercase tracking-wide cursor-pointer">On this page</summary>
                <nav className="mt-4 space-y-2 text-sm">
                  {sectionHeadings.map((section) => (
                    <a key={section.id} href={`#${section.id}`} className="block text-muted-foreground hover:text-primary transition-colors">
                      {section.heading}
                    </a>
                  ))}
                </nav>
              </details>
              <div className="border border-border bg-dark text-white p-5">
                <h3 className="font-heading text-2xl uppercase tracking-wide mb-2">Need help with your pergola?</h3>
                <p className="text-sm text-white/75 mb-4">Talk to our team for practical advice and tailored recommendations for your property.</p>
                <a href="tel:+61258496376" className="block text-primary font-semibold mb-3">(02) 5849 6376</a>
                <Link to="/contact/" className="inline-flex border border-white/30 px-4 py-2 text-xs font-semibold uppercase tracking-wide hover:bg-white hover:text-dark transition-colors">
                  Contact us
                </Link>
              </div>
            </div>
          </aside>

          <main className="lg:col-span-2 bg-white border border-border/60 p-6 md:p-10">
            <p className="text-[17px] md:text-[18px] leading-[1.7] text-foreground mb-10">{post.leadParagraph}</p>

            <div className="space-y-10">
              {post.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-28">
                  {section.level === 2 ? (
                    <h2 className="font-heading text-3xl md:text-4xl tracking-wide uppercase text-foreground mb-4">{section.heading}</h2>
                  ) : (
                    <h3 className="font-heading text-2xl md:text-3xl tracking-wide uppercase text-foreground mb-4">{section.heading}</h3>
                  )}
                  <div className="space-y-4">
                    {section.paragraphs.map((paragraph, idx) => (
                      <p key={idx} className="text-[17px] leading-[1.7] text-muted-foreground">{paragraph}</p>
                    ))}
                  </div>
                  {section.image ? (
                    <figure className="mt-6">
                      <img src={section.image.src} alt={section.image.alt} className="w-full h-auto object-cover" />
                      {section.image.caption ? <figcaption className="text-sm text-muted-foreground mt-2">{section.image.caption}</figcaption> : null}
                    </figure>
                  ) : null}
                  {section.list ? (
                    section.list.type === "numbered" ? (
                      <ol className="list-decimal pl-6 mt-5 space-y-2 text-[17px] leading-[1.7] text-muted-foreground">
                        {section.list.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ol>
                    ) : (
                      <ul className="list-disc pl-6 mt-5 space-y-2 text-[17px] leading-[1.7] text-muted-foreground">
                        {section.list.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    )
                  ) : null}
                  {section.callout ? (
                    <blockquote className={`mt-6 p-4 text-[16px] leading-[1.7] ${getCalloutClasses(section.callout.type)}`}>
                      {section.callout.text}
                    </blockquote>
                  ) : null}
                </section>
              ))}
            </div>

            <section className="mt-12 border-t border-border pt-8">
              <h2 className="font-heading text-3xl md:text-4xl tracking-wide uppercase mb-4">Key Takeaways</h2>
              <ul className="list-disc pl-6 space-y-2 text-[17px] leading-[1.7] text-muted-foreground">
                {post.keyTakeaways.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mt-12 border-t border-border pt-8">
              <h2 className="font-heading text-3xl md:text-4xl tracking-wide uppercase mb-4">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {post.faqs.map((faq, idx) => (
                  <AccordionItem key={faq.q} value={`faq-${idx}`}>
                    <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-[16px] leading-[1.7] text-muted-foreground">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            <section className="mt-12 border-t border-border pt-8">
              <div className="bg-primary text-white p-6 md:p-8">
                <h2 className="font-heading text-3xl md:text-4xl tracking-wide uppercase mb-3">Ready for your pergola project?</h2>
                <p className="text-white/90 mb-5">Get a free quote and practical guidance from experienced pergola builders serving Sydney.</p>
                <Link to="/contact/" className="inline-flex border border-white/60 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide hover:bg-white hover:text-primary transition-colors">
                  Get a free quote
                </Link>
              </div>
            </section>

            <section className="mt-12 border-t border-border pt-8">
              <h2 className="font-heading text-3xl md:text-4xl tracking-wide uppercase mb-5">Related Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {post.relatedPosts.map((related) => (
                  <article key={related.slug} className="border border-border/70 bg-white">
                    {related.image ? (
                      <Link to={`/${related.slug}/`} className="block">
                        <img src={related.image} alt={related.title} className="w-full h-36 object-cover" />
                      </Link>
                    ) : null}
                    <div className="p-4">
                      <p className="text-xs uppercase tracking-wide text-primary mb-2">{related.category}</p>
                      <h3 className="font-heading text-2xl uppercase tracking-wide mb-2">{related.title}</h3>
                      <Link to={`/${related.slug}/`} className="text-sm text-primary hover:underline">Read article</Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </main>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BlogPostTemplate;
