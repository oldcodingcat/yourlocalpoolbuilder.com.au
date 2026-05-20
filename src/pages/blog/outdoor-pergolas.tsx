import BlogPostTemplate, { BlogPostConfig } from "@/components/blog/BlogPostTemplate";

const postConfig: BlogPostConfig = {
  slug: "outdoor-pergolas",
  title: "Outdoor Pergolas: Your Guide to Freestanding and Attached Options",
  metaDescription:
    "Everything you need to know about outdoor pergolas: freestanding vs attached, placement, materials, and how to choose the right one for your property.",
  heroImage: "/images/pergolas-4.jpg",
  heroImageAlt: "Outdoor pergola options across a Sydney property",
  category: "Ideas & Inspiration",
  publishedDate: "2026-04-20",
  modifiedDate: "2026-04-20",
  estimatedReadMinutes: 8,
  leadParagraph:
    "Outdoor pergolas are a broad category that includes attached and freestanding structures, each suited to different site conditions and goals. If you are deciding where a pergola should sit and how it should connect to your home, this planning-focused guide will help. We compare options, common placement zones, orientation strategies for Sydney sun, and practical approval considerations.",
  sections: [
    { id: "outdoor-pergola-definition", heading: "What Is an Outdoor Pergola?", level: 2, paragraphs: ["An outdoor pergola is a general term for a structured overhead zone designed for comfort and outdoor living. The term covers many forms, from simple open-beam frames to roofed systems with greater weather protection."] },
    { id: "freestanding-vs-attached", heading: "Freestanding vs Attached: Pros, Cons, and Best Use Cases", level: 2, paragraphs: ["Attached pergolas usually improve everyday flow and are ideal near kitchens or indoor living rooms. Freestanding pergolas can define destination zones, especially in larger yards or around pools."], list: { type: "bullet", items: ["Attached pros: convenient access, efficient circulation, strong indoor-outdoor linkage.", "Attached considerations: house interface and detailing must be handled carefully.", "Freestanding pros: flexible placement, stronger retreat feel, independent zoning.", "Freestanding considerations: services and access planning can be more complex."] } },
    { id: "placement-zones", heading: "Typical Pergola Placement Zones", level: 2, paragraphs: ["Most properties support multiple candidate locations. Choose placement by intended use and traffic flow rather than visual preference alone."], list: { type: "bullet", items: ["Back garden entertaining hub", "Pool edge relaxation zone", "Deck extension", "Entry accent zone", "Side-yard utility and shade zone"] }, image: { src: "/images/patios.jpg", alt: "Outdoor pergola placement options in a property" } },
    { id: "orientation-sydney", heading: "Orientation Tips for Sydney Conditions", level: 2, paragraphs: ["Orientation affects comfort more than most homeowners expect. Consider where afternoon heat loads are strongest and how breezes move through your site. Roof type and side screening options should be chosen together for better control."], callout: { type: "tip", text: "Map summer afternoon sun before finalizing pergola orientation and roof strategy." } },
    { id: "approvals-attached-freestanding", heading: "Approval Considerations: Attached vs Freestanding", level: 2, paragraphs: ["Approval pathways can differ depending on attachment method, size, setback, and site context. Some projects may be straightforward; others require more formal review. Check your specific requirements with local council and qualified professionals before construction."], callout: { type: "warning", text: "Project-specific approval outcomes vary. Always confirm details for your exact site and design." } },
  ],
  keyTakeaways: [
    "Outdoor pergolas include both attached and freestanding systems.",
    "Choose format based on routine, access, and property layout.",
    "Placement and orientation strongly influence comfort and usability.",
    "Approval considerations can vary by configuration and site context.",
  ],
  faqs: [
    { q: "Which is better: attached or freestanding pergola?", a: "Neither is universally better. Attached options usually support convenient daily use, while freestanding options are ideal for creating separate destination zones." },
    { q: "Where should I place an outdoor pergola?", a: "Place it where it supports your main use case, such as dining, relaxing, or poolside shade. Keep circulation and house access practical." },
    { q: "Can one property have more than one pergola?", a: "Yes, many larger properties benefit from multiple smaller pergola zones. This can improve flexibility and avoid one oversized structure." },
    { q: "Do outdoor pergolas need weatherproof roofs?", a: "Not always. Some households prefer filtered shade from open systems, while others need stronger all-weather coverage. Match roof type to usage pattern." },
    { q: "Will attached and freestanding pergolas have different approval needs?", a: "They can, depending on design and location details. Confirm requirements with your local council or certifier for your specific plan." },
  ],
  relatedPosts: [
    { slug: "pergola-attached-to-house", title: "Pergola Attached to House", category: "Pergolas & Outdoor Living", image: "/images/patios.jpg" },
    { slug: "outdoor-pergola-ideas", title: "Outdoor Pergola Ideas", category: "Ideas & Inspiration", image: "/images/pergolas-5.jpg" },
    { slug: "backyard-pergola", title: "Backyard Pergola", category: "Ideas & Inspiration", image: "/images/pergolas-2.jpg" },
  ],
};

const OutdoorPergolas = () => <BlogPostTemplate post={postConfig} />;
export default OutdoorPergolas;
