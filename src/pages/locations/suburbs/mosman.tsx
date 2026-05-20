import LocationTemplate, { LocationConfig } from "@/components/locations/LocationTemplate";
import { offices } from "@/data/offices";

const config: LocationConfig = {
  name: "Mosman",
  slug: "mosman",
  region: "North Shore",
  regionSlug: "north-shore",
  heroImage: "/images/pergolas.jpeg",
  heroTagline:
    "Pergola installation in Mosman for premium harbourside homes — disciplined proportions, refined finishes, and outdoor spaces that read as part of the architecture.",
  introImage: "/images/pergolas-3.jpg",
  whyChooseImage: "/images/insulated-roofs.webp",
  processImage: "/images/patios.jpg",
  aboutSuburb: [
    "Mosman is one of Sydney’s most established harbourside suburbs, where street presentation, garden quality, and interior finish standards tend to sit noticeably higher than typical suburban averages. Outdoor areas are used for regular entertaining, family dining, and quiet weekday use, so pergolas are rarely treated as a temporary shade add-on. Homeowners here usually expect a structure that feels deliberate: aligned with roof lines, sympathetic to existing materials, and calm in visual weight.",
    "Premium living in Mosman also means outdoor spaces are judged alongside landscaping, pool zones, and boundary interfaces where neighbours are close enough for sightlines to matter. That combination pushes decisions toward cleaner profiles, careful post placement, and roof strategies that support comfort without dominating the garden. A pergola in this context is as much about presentation as it is about shade.",
    "Because blocks can combine elevation change with harbour breezes and strong sun, practical performance still matters alongside aesthetics. The most successful Mosman projects balance both: a refined look on day one, and detailing that remains sensible to live with across seasons. If you are comparing options, it helps to start with how you actually use the space before locking in roof type or footprint.",
  ],
  whyChooseUsHere: [
    "Mosman work suits a detail-driven team: one that can talk through proportion, material transitions, and fixing strategies without defaulting to oversized standard kits. We coordinate North Shore pergola projects from our Turramurra office at 99 Eastern Rd, which supports practical scheduling for site visits and staged delivery when access is tight. Clear communication matters in premium suburbs because small scope shifts are easier to resolve early than after fabrication begins.",
    "We focus on helping you compare realistic pathways—attached versus freestanding, insulated versus open roof profiles, and finishes that suit your existing palette—rather than rushing a single generic recommendation. That approach tends to suit Mosman homes where the outdoor structure needs to sit quietly within a high-value composition. For a direct conversation about your property, call (02) 5849 6376 and we can outline sensible next steps.",
    "Execution discipline is also part of the value: tidy site practices, predictable milestones, and handover that leaves the outdoor area ready to use. In suburbs where finish quality is closely observed, predictable delivery is often as important as the headline design idea.",
  ],
  localConsiderations: [
    "Many Mosman sites combine sloping land, retained walls, and outdoor levels that already carry a lot of visual structure. A pergola should not compete with those layers. We pay attention to sightlines from key living windows, how posts land relative to paving and garden beds, and how roof edges read against the house fascia. Where views are part of the property’s appeal, the goal is usually coverage and comfort without a bulky silhouette.",
    "Harbour-adjacent conditions can increase wind exposure and salt-laden air in pockets of the suburb, even when a property is not directly waterfront. That can influence sensible hardware choices, coating expectations, and maintenance planning. We match specification to the real microclimate of the site rather than assuming a one-size-fits-all coastal package for every street.",
    "Planning and design-control questions can appear on some properties depending on location, lot features, and what is already built. Requirements vary, so we keep guidance cautious and recommend confirming project-specific obligations with council and qualified professionals before committing to a final design. Early clarity here reduces the risk of rework once construction is underway.",
    "Outdoor lighting, fan locations, and future screening are also easier to coordinate when they are considered alongside roof structure rather than after fix-off. If you already know you want downlights, heaters, or blinds, mentioning it early helps us reserve sensible routing and fixing assumptions in the quote.",
  ],
  ourProcess: [
    "An on-site discussion opens the process: how you use the outdoor area through the week, how you entertain, and what you want the finished space to feel like when viewed from the house and the garden. That conversation also captures practical constraints: access paths, pool proximity, services locations, and any features you want to retain. The outcome is a brief that is grounded in real use, not only a sketch dimension.",
    "From there we refine roof strategy, support layout, and finish direction, then prepare a written quote with clear scope boundaries. If multiple options are close in price but different in long-term maintenance, we spell out the trade-offs in plain language. When you are ready to proceed, installation is staged with predictable communication so you know what is happening before materials arrive and before fix-off begins.",
    "Handover includes a walkthrough of the completed pergola, a check on drainage intent around posts and edges where relevant, and guidance on sensible maintenance routines for the materials you selected. The aim is a clean finish and a space that feels immediately usable, with expectations aligned to what was quoted.",
  ],
  nearestOffice: offices.turramurra,
  coordinates: { lat: -33.829, lng: 151.244 },
  siblings: [
    { name: "Northbridge", slug: "northbridge" },
    { name: "Castlecrag", slug: "castlecrag" },
    { name: "Roseville", slug: "roseville" },
    { name: "Hunters Hill", slug: "hunters-hill" },
    { name: "Lindfield", slug: "lindfield" },
    { name: "Longueville", slug: "longueville" },
  ],
  faqs: [
    {
      q: "Do you design pergolas to suit premium Mosman homes?",
      a: "Yes. We prioritise architectural fit, proportion, and finish consistency so the pergola reads as part of the property rather than a bolted-on structure. We can compare options with you based on your existing roof lines, materials palette, and how you plan to furnish the space.",
    },
    {
      q: "Can you work with sloping or view-sensitive blocks?",
      a: "Yes. Slopes and retained levels are common in Mosman, and we plan post positions, beam runs, and roof edges with both stability and sightlines in mind. If preserving a key view is important, we discuss roof height and post placement early so the structure supports comfort without dominating the outlook.",
    },
    {
      q: "What materials suit established Mosman properties?",
      a: "It depends on your home’s style and how much maintenance you want long term. We commonly compare powder-coated aluminium systems, timber accents, and insulated roof panels where year-round comfort matters. The right choice is the one that matches your architecture and your practical upkeep expectations.",
    },
    {
      q: "Are approvals sometimes needed for pergolas in Mosman?",
      a: "Sometimes, depending on the property and what is proposed. Controls can vary, so we recommend confirming requirements with council and relevant professionals for your specific site. We can still help you shape a design direction while those checks are underway.",
    },
    {
      q: "How do you keep the structure looking integrated with the house?",
      a: "We align roof form, fascia transitions, and colour direction with the existing building where possible, and we avoid oversized sections that read heavy at the boundary. Integration is usually a combination of proportion discipline, sensible post rhythm, and careful finishing at connection points.",
    },
  ],
  galleryImages: [
    { src: "/images/pergolas-5.jpg", alt: "Premium pergola installation in Mosman outdoor entertaining area" },
    { src: "/images/sunroof.jpg", alt: "Translucent roof pergola detail in Mosman backyard" },
    { src: "/images/decking.jpg", alt: "Deck and pergola integration near landscaped garden in Mosman" },
  ],
};

const Mosman = () => <LocationTemplate config={config} />;

export default Mosman;
