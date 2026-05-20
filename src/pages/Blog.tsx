import { Helmet } from "@/lib/helmet";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type BlogPost = {
  slug: string;
  title: string;
  description: string;
  image?: string;
};

type BlogCategory = {
  title: string;
  description: string;
  posts: BlogPost[];
};

const categories: BlogCategory[] = [
  {
    title: "Ideas & Inspiration",
    description: "Get inspired with stunning pergola designs and outdoor living ideas.",
    posts: [
      { slug: "pergolas-ideas", title: "Pergola Ideas", description: "Explore practical pergola concepts that improve shade, style, and flow so your backyard feels more usable every day.", image: "/images/pergolas.jpeg" },
      { slug: "backyard-pergola", title: "Backyard Pergola Inspiration", description: "See backyard pergola layouts that balance comfort and aesthetics, from compact courtyards to larger family entertaining zones.", image: "/images/pergolas-2.jpg" },
      { slug: "modern-pergola", title: "Modern Pergola Designs", description: "Discover clean modern pergola styles with minimalist lines, durable finishes, and design choices suited to contemporary Sydney homes.", image: "/images/flat-roof.jpg" },
      { slug: "modern-pergola-ideas", title: "Modern Pergola Ideas", description: "Compare modern pergola features like integrated lighting, slim posts, and roofing options that elevate day and night usability.", image: "/images/pergolas-3.jpg" },
      { slug: "outdoor-pergolas", title: "Outdoor Pergolas", description: "Understand how outdoor pergolas can define living zones, improve weather protection, and add long-term value to your property.", image: "/images/pergolas-5.jpg" },
      { slug: "outdoor-pergola", title: "Outdoor Pergola", description: "Learn key considerations for planning an outdoor pergola, including orientation, privacy, structural design, and maintenance.", image: "/images/pergolas-4.jpg" },
      { slug: "outdoor-pergola-ideas", title: "Outdoor Pergola Ideas", description: "Browse outdoor pergola ideas tailored to dining, poolside shade, and relaxed family spaces with durable material selections.", image: "/images/patios.jpg" },
      { slug: "pergola-roof-ideas", title: "Pergola Roof Ideas", description: "Review pergola roof concepts from insulated panels to open slat systems, with guidance on comfort, light, and weather resistance.", image: "/images/insulated-roofs.webp" },
      { slug: "pergola-shade-ideas", title: "Pergola Shade Ideas", description: "Compare pergola shade options that improve summer comfort while keeping your outdoor area bright, welcoming, and practical.", image: "/images/sunroof.jpg" },
      { slug: "pergola-design", title: "Pergola Design", description: "Get a clear framework for pergola design decisions, from layout and structure to finishing details that fit your home style.", image: "/images/curved-roofs.jpg" },
    ],
  },
  {
    title: "Materials & Types",
    description: "Explore different pergola materials and construction styles.",
    posts: [
      { slug: "aluminum-pergola", title: "Aluminum Pergola", description: "See why aluminum pergolas are popular for low maintenance, corrosion resistance, and sleek modern outdoor aesthetics.", image: "/images/flat-roof.jpg" },
      { slug: "aluminium-pergola", title: "Aluminium Pergola", description: "Compare aluminium pergola options by durability, color choices, and structural performance in Sydney weather conditions.", image: "/images/curved-roofs.jpg" },
      { slug: "steel-pergola", title: "Steel Pergola", description: "Understand the strengths of steel pergolas for larger spans, robust structural integrity, and long-term outdoor performance.", image: "/images/pergolas-3.jpg" },
      { slug: "wooden-pergola", title: "Wooden Pergola", description: "Learn how wooden pergolas deliver warmth and character, with practical guidance on timber selection and protective finishing.", image: "/images/decking.jpg" },
      { slug: "pergola-timber", title: "Pergola Timber", description: "Review common pergola timber choices, including durability, treatment requirements, and visual style for different homes.", image: "/images/decking.jpg" },
      { slug: "colorbond-pergola", title: "Colorbond Pergola", description: "Explore Colorbond pergola systems that combine clean lines, weather durability, and low upkeep for busy households.", image: "/images/insulated-roofs.webp" },
      { slug: "retractable-pergola", title: "Retractable Pergola", description: "Find out when retractable pergolas are worth it, and how flexible roof systems improve comfort throughout the year.", image: "/images/sunroof.jpg" },
      { slug: "retractable-roof-pergola", title: "Retractable Roof Pergola", description: "Compare retractable roof pergola setups for shading control, ventilation, and practical everyday outdoor use.", image: "/images/patios.jpg" },
      { slug: "cantilever-pergola", title: "Cantilever Pergola", description: "Understand cantilever pergola design, including structural planning and the visual benefits of unobstructed entertaining space.", image: "/images/pergolas-2.jpg" },
      { slug: "pergola-brackets", title: "Pergola Brackets", description: "Get a practical guide to pergola brackets, connection methods, and component quality that supports a safe long-lasting build.", image: "/images/pergolas.jpeg" },
    ],
  },
  {
    title: "How-To & Guides",
    description: "Practical guides to help you plan and build the perfect pergola.",
    posts: [
      { slug: "how-to-build-a-pergola-attached-to-the-house", title: "How to Build a Pergola Attached to the House", description: "Step through key stages for house-attached pergola projects, from planning and structure to weatherproof finishing details.", image: "/images/pergolas-5.jpg" },
      { slug: "how-to-attach-a-pergola-to-a-house-with-gutters", title: "How to Attach a Pergola to a House with Gutters", description: "Learn practical solutions for attaching pergolas where gutter lines and roof drainage need careful structural coordination.", image: "/images/pergolas-3.jpg" },
      { slug: "what-is-a-pergola", title: "What is a Pergola?", description: "Understand what defines a pergola, how it differs from patios and gazebos, and which type suits your outdoor goals.", image: "/images/pergolas.jpeg" },
      { slug: "pergola-builders-near-me", title: "Pergola Builders Near Me", description: "Use this guide to choose local pergola builders confidently, with checks for quality, licensing, communication, and value.", image: "/images/pergolas-4.jpg" },
    ],
  },
  {
    title: "Costs & Planning",
    description: "Understand pricing and plan your pergola investment.",
    posts: [
      { slug: "how-much-does-a-pergola-cost", title: "How Much Does a Pergola Cost?", description: "Break down pergola pricing factors including size, materials, roof type, and site complexity so you can budget accurately.", image: "/images/pergolas-2.jpg" },
    ],
  },
  {
    title: "Pergolas & Outdoor Living",
    description: "Combine pergolas with patios, decks, pools and more.",
    posts: [
      { slug: "pool-pergola", title: "Pool Pergola", description: "Plan poolside pergolas that improve comfort, create shade where you need it most, and keep outdoor areas visually cohesive.", image: "/images/pergolas-5.jpg" },
      { slug: "pergola-attached-to-house", title: "Pergola Attached to House", description: "See how attached pergolas can extend internal living areas and improve year-round connection between inside and outside.", image: "/images/patios.jpg" },
      { slug: "pergola-patio", title: "Pergola Patio", description: "Learn design strategies for combining pergola and patio spaces into a functional, attractive, and easy-to-maintain outdoor zone.", image: "/images/patios.jpg" },
      { slug: "pergola-with-roof", title: "Pergola with Roof", description: "Compare roofed pergola options for better weather protection and improved usability across Sydney seasons.", image: "/images/insulated-roofs.webp" },
      { slug: "pergola-roof", title: "Pergola Roof", description: "Understand pergola roof choices, structural implications, and which system best matches your property and lifestyle needs.", image: "/images/curved-roofs.jpg" },
      { slug: "decks-and-pergolas", title: "Decks and Pergolas", description: "Explore how decks and pergolas work together to create premium outdoor living areas with clearer zoning and stronger flow.", image: "/images/decking.jpg" },
      { slug: "patios-and-pergolas", title: "Patios and Pergolas", description: "Review practical combinations of patios and pergolas to increase comfort, coverage, and day-to-day backyard functionality.", image: "/images/patios.jpg" },
    ],
  },
];

const Blog = () => (
  <>
    <Helmet>
      <script
        type="application/ld+json"
      >{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Pergola Blog & Guides",
        description: "Browse pergola ideas, material guides, planning advice and outdoor living inspiration for Sydney homes in our expert blog and guides hub.",
        url: "https://yourlocalpergolainstaller.com.au/blog/",
      })}</script>
      <script
        type="application/ld+json"
      >{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://yourlocalpergolainstaller.com.au/" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://yourlocalpergolainstaller.com.au/blog/" },
        ],
      })}</script>
      <title>Pergola Blog & Guides | Your Local Pergola Installer</title>
      <meta
        name="description"
        content="Browse pergola ideas, material guides, planning advice and outdoor living inspiration for Sydney homes in our expert blog and guides hub."
      />
      <meta property="og:title" content="Pergola Blog & Guides | Your Local Pergola Installer" />
      <meta
        property="og:description"
        content="Explore pergola ideas, material comparisons, costs, and practical outdoor living guides for Sydney homeowners."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://yourlocalpergolainstaller.com.au/blog/" />
      <meta property="og:image" content="https://yourlocalpergolainstaller.com.au/images/pergolas-5.jpg" />
      <meta property="og:site_name" content="Your Local Pergola Installer" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Pergola Blog & Guides | Your Local Pergola Installer" />
      <meta
        name="twitter:description"
        content="Explore pergola ideas, material comparisons, costs, and practical outdoor living guides for Sydney homeowners."
      />
      <meta name="twitter:image" content="https://yourlocalpergolainstaller.com.au/images/pergolas-5.jpg" />
      <link rel="canonical" href="https://yourlocalpergolainstaller.com.au/blog/" />
    </Helmet>
    <Header />
    <section className="pt-44 pb-20 bg-dark border-b border-border">
      <div className="container-custom">
        <h1 className="font-heading text-5xl md:text-6xl text-white mb-4 tracking-wide uppercase">Blog & Guides</h1>
        <p className="text-secondary max-w-3xl">
          Discover ideas, practical guides, and expert advice to help you plan, design, and build a better pergola for your Sydney home.
        </p>
      </div>
    </section>

    <section className="bg-background py-16 md:py-20">
      <div className="container-custom space-y-16">
        {categories.map((category) => (
          <section key={category.title}>
            <h2 className="font-heading text-4xl md:text-5xl tracking-wide uppercase text-foreground mb-3">{category.title}</h2>
            <p className="text-muted-foreground mb-8">{category.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.posts.map((post) => (
                <article key={post.slug} className="bg-white border border-border/60 rounded-sm overflow-hidden shadow-sm">
                  {post.image ? (
                    <Link to={`/${post.slug}/`} className="block">
                      <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                    </Link>
                  ) : null}
                  <div className="p-6">
                    <h3 className="font-heading text-3xl tracking-wide uppercase text-foreground mb-3">{post.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{post.description}</p>
                    <Link to={`/${post.slug}/`} className="text-primary font-medium text-sm hover:underline">
                      Read more
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>

    <section className="bg-primary text-white py-14">
      <div className="container-custom text-center">
        <h2 className="font-heading text-4xl md:text-5xl tracking-wide uppercase mb-4">Need Help Planning Your Pergola?</h2>
        <p className="text-white/85 max-w-2xl mx-auto mb-6">
          Talk to our team for practical design advice and a tailored quote for your property, lifestyle, and budget.
        </p>
        <Link to="/contact/" className="inline-flex items-center justify-center border border-white/60 px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-white hover:text-primary transition-colors">
          Get a Free Quote
        </Link>
      </div>
    </section>
    <Footer />
  </>
);

export default Blog;
