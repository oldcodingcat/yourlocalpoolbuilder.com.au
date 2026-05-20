import AreaTemplate, { AreaConfig } from "@/components/locations/AreaTemplate";
import { offices } from "@/data/offices";

const config: AreaConfig = {
  area: "Penrith",
  slug: "penrith",
  heroImage: "/images/insulated-roofs.webp",
  heroTagline:
    "Pergola installation across Penrith — serving Penrith city, Kingswood, Glenmore Park and surrounding suburbs from our Kenthurst office.",
  introImage: "/images/pergolas-4.jpg",
  whyChooseImage: "/images/decking.jpg",
  processImage: "/images/flat-roof.jpg",
  aboutArea: [
    "Penrith sits on Sydney's far western edge near the Blue Mountains foothills, with a suburban scale that is generally more generous than inner-city districts. Properties often include wider backyards, family-focused outdoor zones, and practical layouts where covered space can be used daily. This local context is why heat performance and practical usability are treated as primary design drivers in Penrith.",
    "The area blends long-established suburbs with newer housing estates, so pergola design needs to adapt to both renovation contexts and cleaner modern streetscapes. Homeowners here usually prioritise real comfort outcomes over decorative features, especially when outdoor areas are used by families through long summer periods. This local context is why heat performance and practical usability are treated as primary design drivers in Penrith.",
    "Because Penrith experiences hotter inland conditions than most coastal parts of Sydney, a pergola in this region is typically expected to deliver serious shade and heat management. That climate reality shapes decisions around roof type, orientation, and ventilation from the very first planning discussion. This local context is why heat performance and practical usability are treated as primary design drivers in Penrith.",
  ],
  whyChooseUsHere: [
    "Penrith projects are coordinated from our Kenthurst office, giving us a practical operating base for planning, scheduling, and communication across the western growth corridor. Even with distance from the CBD, our workflow is structured to provide consistent service windows and clear milestone updates. This Kenthurst-linked service model keeps planning and delivery consistent across Penrith suburbs.",
    "We work regularly with family homes in this region and understand how homeowners balance heat relief, entertaining space, and durability when investing in outdoor upgrades. That local experience helps us recommend solutions that perform in real Penrith conditions rather than relying on generic metro assumptions. This Kenthurst-linked service model keeps planning and delivery consistent across Penrith suburbs.",
    "If you want to compare insulated roof pathways, airflow strategies, and realistic scope options before final design decisions, call (02) 5849 6376. Early alignment usually saves time and avoids costly revisions later in the project. This Kenthurst-linked service model keeps planning and delivery consistent across Penrith suburbs.",
  ],
  localChallenges: [
    "The biggest local challenge is extreme inland summer heat, which can make under-designed pergolas feel hot and underused. We address this by balancing roof performance, shade depth, and ventilation so the covered zone remains practical during high-temperature weeks. Addressing these points early usually improves comfort outcomes and reduces expensive redesign later.",
    "Another challenge is scaling structures correctly on larger blocks. Bigger yards can support larger spans, but comfort and circulation still depend on zoning and proportion rather than simply building the biggest possible cover. Addressing these points early usually improves comfort outcomes and reduces expensive redesign later.",
    "Material behaviour in heat is also important. We guide selections toward systems that handle strong UV and sustained temperature exposure, while keeping maintenance expectations realistic for busy households. Addressing these points early usually improves comfort outcomes and reduces expensive redesign later.",
  ],
  ourProcess: [
    "Our process begins with an on-site consultation focused on orientation, daily usage patterns, and where heat load is likely to build through the afternoon. This allows us to define a practical brief before narrowing product and material options. Clear milestones and practical communication help homeowners plan each phase with confidence.",
    "We then develop design direction, roof strategy, and scope detail with staged planning for delivery and installation. Where approvals questions are relevant, we provide cautious guidance and recommend confirming project-specific requirements with council and qualified professionals. Clear milestones and practical communication help homeowners plan each phase with confidence.",
    "Construction is delivered through clear milestones with regular communication so households can plan around each phase confidently. This structured approach is especially useful in Penrith where climate-driven decisions have a major impact on long-term comfort. Clear milestones and practical communication help homeowners plan each phase with confidence.",
  ],
  nearestOffice: offices.kenthurst,
  suburbs: [
    { name: "Penrith", slug: "penrith" },
    { name: "Kingswood", slug: "kingswood" },
    { name: "Glenmore Park", slug: "glenmore-park" },
    { name: "South Penrith", slug: "south-penrith" },
    { name: "Cranebrook", slug: "cranebrook" },
    { name: "Werrington", slug: "werrington" },
    { name: "Jamisontown", slug: "jamisontown" },
  ],
  faqs: [
    {
      q: "How do you design pergolas for Penrith's hot summers?",
      a: "We design for heat performance first, combining shade depth, roof strategy, and airflow so the space remains usable through high-temperature periods.",
    },
    {
      q: "Are insulated roofs worth it for Penrith conditions?",
      a: "In many cases they are, especially where summer heat is intense and homeowners want stronger thermal comfort and reduced radiant load under cover.",
    },
    {
      q: "Do you travel out to Penrith from your offices?",
      a: "Yes. Penrith work is coordinated from our Kenthurst office with structured scheduling across the wider western region.",
    },
    {
      q: "What materials cope best with extreme inland heat?",
      a: "The best option depends on full system design, but we compare materials based on heat behaviour, durability, and practical maintenance in inland conditions.",
    },
    {
      q: "Can we discuss options before formal quoting?",
      a: "Absolutely. Call (02) 5849 6376 and we can map practical priorities for your property before final scope is locked in.",
    },
  ],
};

const Penrith = () => <AreaTemplate config={config} />;

export default Penrith;
