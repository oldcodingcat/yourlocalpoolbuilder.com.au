import BlogPostTemplate, { BlogPostConfig } from "@/components/blog/BlogPostTemplate";

const postConfig: BlogPostConfig = {
  slug: "pergola-timber",
  title: "Pergola Timber: Choosing the Right Wood for Australian Conditions",
  metaDescription:
    "Compare pergola timber options for Australian climates - hardwoods, softwoods, treated pine and merbau. Find the best timber choice for your pergola project.",
  heroImage: "/images/decking.jpg",
  heroImageAlt: "Pergola timber samples and structure comparison",
  category: "Materials & Types",
  publishedDate: "2026-04-21",
  modifiedDate: "2026-04-21",
  estimatedReadMinutes: 11,
  leadParagraph:
    "Choosing pergola timber is a technical decision with long-term consequences. Species, durability class, treatment method, and location exposure all influence how the structure performs over time. This guide compares the most relevant timber pathways for Australian projects so you can choose with confidence.",
  sections: [
    { id: "hardwood-vs-softwood", heading: "Hardwood vs Softwood: Which Is Better?", level: 2, paragraphs: ["Hardwoods generally offer higher natural density and durability. Softwoods can be cost-effective and practical when treatment and detailing are done correctly. The better option depends on project priorities: budget, lifespan, finish expectations, and maintenance tolerance.", "Neither category is automatically right for every project."] },
    { id: "australian-species", heading: "Popular Timber Species in Australia", level: 2, paragraphs: ["Frequently considered options include Merbau, Spotted Gum, Blackbutt, Ironbark, and Jarrah. Each has different visual tone, working characteristics, and durability profile.", "Selection should balance aesthetics with structural and environmental suitability."], list: { type: "bullet", items: ["Merbau: rich tone, commonly used in outdoor applications", "Spotted Gum: popular hardwood with strong visual character", "Blackbutt: versatile appearance and broad use", "Ironbark: high density and robust reputation", "Jarrah: distinctive color and durability appeal"] } },
    { id: "treated-pine", heading: "When Treated Pine Makes Sense", level: 2, paragraphs: ["Treated pine can be a practical option for budget-conscious builds and painted finishes. It may suit projects where cost control is important and maintenance planning is realistic.", "Limitations can include movement behavior and aesthetic preferences depending on design intent."], callout: { type: "tip", text: "Treated pine can be strong value when specification and finishing strategy are aligned." } },
    { id: "durability-ratings", heading: "Understanding Durability Classes", level: 2, paragraphs: ["Durability class systems help indicate expected performance in external conditions. Class interpretation should be used alongside treatment method, detailing quality, and exposure context.", "Do not select timber on class number alone; project context still matters."], list: { type: "bullet", items: ["Class 1 and 2 often preferred for higher durability expectations", "Class 3 and 4 may suit selected applications with proper treatment", "Design detailing can significantly influence real performance"] } },
    { id: "termites-fungi-coastal", heading: "Termites, Fungi, and Coastal Exposure", level: 2, paragraphs: ["Biological and environmental risks vary by location. Termite-prone regions and moisture-heavy conditions require stronger preventive strategy in both species and treatment selection.", "Coastal exposure can intensify wear factors, so timber pathways should be chosen conservatively in high-risk settings."] },
    { id: "price-comparison", heading: "Relative Cost Comparison (Without False Precision)", level: 2, paragraphs: ["In broad terms, treated pine often sits in lower-cost pathways, while many premium hardwoods can be higher-cost options. Cost should be assessed with lifecycle performance and maintenance in mind, not just upfront price.", "A lower initial cost can become less attractive if maintenance demand is high for the intended exposure."] },
    { id: "sustainability", heading: "Sustainability and Certified Timber", level: 2, paragraphs: ["Sustainability-conscious projects can prioritize certified timber pathways such as FSC or PEFC options where available. Local sourcing can also support reduced transport impact and better specification transparency.", "Certification does not remove the need for durability and maintenance planning; it complements it."] },
    { id: "choose-by-location", heading: "Choosing Timber by Location: Inland vs Coastal", level: 2, paragraphs: ["Inland projects may support a wider range of timber options depending on microclimate. Coastal and high-exposure zones usually benefit from more conservative species and treatment choices.", "A project-specific recommendation from qualified local professionals is often the safest route."], image: { src: "/images/pergolas.jpeg", alt: "Timber pergola in different environmental settings" }, callout: { type: "warning", text: "Local exposure risks vary by suburb and site. Confirm final timber specification with qualified experts." } },
  ],
  keyTakeaways: [
    "Timber choice should be based on exposure, maintenance, and design goals.",
    "Hardwood vs softwood is a project-fit decision, not a universal ranking.",
    "Durability class helps, but detailing and treatment remain critical.",
    "Coastal and termite-risk contexts need conservative specification strategy.",
    "Certified timber pathways can support sustainability goals without compromising quality.",
  ],
  faqs: [
    { q: "Is hardwood always better than treated pine for pergolas?", a: "Not always. Hardwood can offer durability and character, but treated pine may be suitable for budget-focused projects with good detailing and maintenance planning." },
    { q: "What is the most popular pergola timber in Australia?", a: "Several species are common, including Merbau and native hardwoods such as Spotted Gum and Blackbutt. Suitability depends on your location and project intent." },
    { q: "Do durability classes guarantee lifespan?", a: "They are useful indicators but not guarantees. Real lifespan depends on treatment, exposure, detailing, and maintenance quality." },
    { q: "Is certified timber worth considering?", a: "Yes, especially for sustainability-focused projects. Certification can improve supply transparency and environmental confidence." },
    { q: "How do I pick timber for coastal NSW?", a: "Use conservative specification with attention to durability, treatment, and maintenance plan. Local expert advice is strongly recommended for high-exposure zones." },
  ],
  relatedPosts: [
    { slug: "wooden-pergola", title: "Wooden Pergola", category: "Materials & Types", image: "/images/decking.jpg" },
    { slug: "pergola-brackets", title: "Pergola Brackets", category: "Materials & Types", image: "/images/pergolas.jpeg" },
    { slug: "backyard-pergola", title: "Backyard Pergola", category: "Ideas & Inspiration", image: "/images/pergolas-2.jpg" },
  ],
};

const PergolaTimber = () => <BlogPostTemplate post={postConfig} />;
export default PergolaTimber;
