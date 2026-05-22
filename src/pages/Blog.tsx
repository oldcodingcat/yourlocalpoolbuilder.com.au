import { Helmet } from "@/lib/helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBanner from "@/components/FloatingBanner";
import FinalCTA from "@/components/FinalCTA";
import { blogPosts } from "@/data/blog";
import { ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";

const SITE = "https://yourlocalpoolbuilder.com.au";
const CANONICAL = `${SITE}/blog/`;

const categories = Array.from(
  new Set(blogPosts.map((post) => post.category))
);

const Blog = () => {
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
        name: "Blog",
        item: CANONICAL,
      },
    ],
  };

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Your Local Pool Builder Blog",
    description:
      "Pool design, construction and renovation advice for Sydney homeowners.",
    url: CANONICAL,
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url: `${SITE}/blog/${post.slug}/`,
      image: `${SITE}${post.image}`,
      datePublished: post.date,
      author: {
        "@type": "Organization",
        name: "Your Local Pool Builder",
      },
    })),
  };

  return (
    <>
      <Helmet>
        <title>Blog | Luxury Pool Design & Construction Sydney</title>
        <meta
          name="description"
          content="Read pool design, construction and renovation advice from Your Local Pool Builder. Helpful guides for Sydney homeowners planning luxury pools, plunge pools, spas and outdoor living spaces."
        />

        <meta
          property="og:title"
          content="Blog | Luxury Pool Design & Construction Sydney"
        />
        <meta
          property="og:description"
          content="Pool design, construction and renovation advice for Sydney homeowners."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={CANONICAL} />
        <meta
          property="og:image"
          content={`${SITE}/images/yourlocalpoolbuilder-featured-works-02.webp`}
        />
        <meta property="og:site_name" content="Your Local Pool Builder" />

        <link rel="canonical" href={CANONICAL} />

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(blogSchema)}
        </script>
      </Helmet>

      <Header />
      <FloatingBanner />

      <main>
        <section className="relative flex min-h-[64vh] items-center overflow-hidden pt-28 text-white">
          <div className="absolute inset-0">
            <img
              src="/images/yourlocalpoolbuilder-featured-works-02.webp"
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#09233C]/65" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#09233C]/95 via-[#09233C]/72 to-[#09233C]/25" />
          </div>

          <div className="container-custom relative z-10 py-20 md:py-28">
            <div className="max-w-3xl">
              <p className="text-eyebrow mb-5 text-primary">
                Pool design insights
              </p>

              <h1 className="font-heading text-5xl font-semibold leading-tight md:text-6xl lg:text-7xl">
                Blog
              </h1>

              <p className="mt-6 max-w-2xl font-body text-base leading-8 text-white/78 md:text-lg">
                Expert advice, ideas and practical guides for Sydney homeowners
                planning custom pools, plunge pools, spas, renovations and
                luxury outdoor living spaces.
              </p>

              <div className="mt-9">
                <a
                  href="#posts"
                  className="inline-flex items-center justify-center gap-3 bg-primary px-7 py-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#09233C] transition hover:bg-white"
                >
                  Read articles
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-18 md:py-24">
          <div className="container-custom">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-eyebrow mb-4 text-primary">
                Guides for Sydney homeowners
              </p>

              <h2 className="font-heading text-4xl font-semibold leading-tight text-foreground md:text-5xl">
                Pool planning, design and construction advice
              </h2>

              <p className="mt-6 font-body text-sm leading-7 text-muted-foreground md:text-base">
                Explore practical articles created to help you understand pool
                design options, construction choices, renovation ideas and the
                details that make a luxury pool feel complete.
              </p>
            </div>
          </div>
        </section>

        <section id="posts" className="bg-white py-18 md:py-24">
          <div className="container-custom">
            <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
              <div>
                <div className="grid gap-8 md:grid-cols-2">
                  {blogPosts.map((post) => (
                    <article
                      key={post.slug}
                      className="group overflow-hidden border border-border bg-card shadow-soft transition hover:shadow-medium"
                    >
                      <Link to={`/blog/${post.slug}/`} className="block">
                        <div className="aspect-[16/10] overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.imageAlt}
                            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>

                        <div className="p-7">
                          <div className="mb-4 flex flex-wrap items-center gap-3 font-body text-xs uppercase tracking-[0.16em] text-primary">
                            <span>{post.category}</span>
                            <span className="text-muted-foreground">•</span>
                            <span className="text-muted-foreground">
                              {post.readTime}
                            </span>
                          </div>

                          <h2 className="font-heading text-3xl font-semibold leading-tight text-foreground transition group-hover:text-primary">
                            {post.title}
                          </h2>

                          <p className="mt-4 font-body text-sm leading-7 text-muted-foreground">
                            {post.excerpt}
                          </p>

                          <span className="mt-6 inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                            Read more
                            <ArrowRight className="h-4 w-4" />
                          </span>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              </div>

              <aside className="space-y-6">
                <div className="border border-border bg-card p-6 shadow-soft">
                  <label
                    htmlFor="blog-search"
                    className="mb-3 block font-heading text-xl font-semibold text-foreground"
                  >
                    Search
                  </label>

                  <div className="flex border border-border bg-white">
                    <input
                      id="blog-search"
                      type="search"
                      placeholder="Search articles"
                      className="min-w-0 flex-1 px-4 py-3 font-body text-sm outline-none"
                    />

                    <button
                      type="button"
                      className="inline-flex w-12 items-center justify-center bg-[#09233C] text-white"
                      aria-label="Search blog"
                    >
                      <Search className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="border border-border bg-card p-6 shadow-soft">
                  <h2 className="font-heading text-xl font-semibold text-foreground">
                    Categories
                  </h2>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <span
                        key={category}
                        className="bg-primary/20 px-3 py-2 font-body text-xs font-semibold uppercase tracking-[0.14em] text-[#09233C]"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-[#09233C] p-7 text-white shadow-medium">
                  <p className="font-heading text-2xl font-semibold">
                    Planning a pool?
                  </p>

                  <p className="mt-4 font-body text-sm leading-7 text-white/70">
                    Speak with Your Local Pool Builder about your vision,
                    property and the best construction approach for your Sydney
                    home.
                  </p>

                  <a
                    href="tel:+61253013397"
                    className="mt-6 inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.18em] text-primary"
                  >
                    Request a quote
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>

      <Footer />
    </>
  );
};

export default Blog;