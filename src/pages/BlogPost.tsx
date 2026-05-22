import { Helmet } from "@/lib/helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBanner from "@/components/FloatingBanner";
import FinalCTA from "@/components/FinalCTA";
import { getBlogPostBySlug } from "@/data/blog";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";

const SITE = "https://yourlocalpoolbuilder.com.au";

const BlogPost = () => {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return <Navigate to="/blog/" replace />;
  }

  const canonical = `${SITE}/blog/${post.slug}/`;

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
        item: `${SITE}/blog/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: canonical,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: `${SITE}${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Your Local Pool Builder",
    },
    publisher: {
      "@type": "Organization",
      name: "Your Local Pool Builder",
      logo: {
        "@type": "ImageObject",
        url: `${SITE}/yourlocalpoolbuilder.webp`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
  };

  return (
    <>
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />

        <meta property="og:title" content={post.metaTitle} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={`${SITE}${post.image}`} />
        <meta property="og:site_name" content="Your Local Pool Builder" />

        <link rel="canonical" href={canonical} />

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      <Header />
      <FloatingBanner />

      <main>
        <article>
          <section className="relative flex min-h-[64vh] items-end overflow-hidden pt-28 text-white">
            <div className="absolute inset-0">
              <img
                src={post.image}
                alt=""
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[#09233C]/68" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#09233C]/95 via-[#09233C]/72 to-[#09233C]/30" />
            </div>

            <div className="container-custom relative z-10 py-20 md:py-28">
              <div className="max-w-4xl">
                <Link
                  to="/blog/"
                  className="mb-8 inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.18em] text-primary"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to blog
                </Link>

                <p className="text-eyebrow mb-5 text-primary">
                  {post.category}
                </p>

                <h1 className="font-heading text-5xl font-semibold leading-tight md:text-6xl lg:text-7xl">
                  {post.title}
                </h1>

                <div className="mt-6 flex flex-wrap gap-5 font-body text-sm text-white/70">
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    {post.date}
                  </span>

                  <span className="inline-flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-background py-18 md:py-24">
            <div className="container-custom">
              <div className="mx-auto max-w-3xl">
                <p className="font-body text-xl leading-9 text-muted-foreground">
                  {post.excerpt}
                </p>

                <div className="mt-12 space-y-12">
                  {post.content.map((section) => (
                    <section key={section.heading}>
                      <h2 className="font-heading text-4xl font-semibold leading-tight text-foreground">
                        {section.heading}
                      </h2>

                      <div className="mt-5 space-y-5 font-body text-sm leading-7 text-muted-foreground md:text-base">
                        {section.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </article>

        <FinalCTA />
      </main>

      <Footer />
    </>
  );
};

export default BlogPost;