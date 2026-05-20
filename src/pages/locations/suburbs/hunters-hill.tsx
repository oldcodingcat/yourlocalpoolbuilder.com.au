import LocationTemplate, { LocationConfig } from "@/components/locations/LocationTemplate";
import { offices } from "@/data/offices";

const config: LocationConfig = {
  name: "Hunters Hill",
  slug: "hunters-hill",
  region: "Inner West",
  regionSlug: "inner-west",
  heroImage: "/images/pergolas-4.jpg",
  heroTagline:
    "Pergola builders in Hunters Hill for established peninsula homes — respectful proportions, refined materials, and outdoor rooms that honour streetscape character.",
  introImage: "/images/insulated-roofs.webp",
  whyChooseImage: "/images/curved-roofs.jpg",
  processImage: "/images/flat-roof.jpg",
  aboutSuburb: [
    "Hunters Hill carries a strong residential identity: established homes, generous gardens, and a peninsula setting where outdoor areas are part of daily prestige rather than an afterthought. Pergolas here are usually expected to read as considered architecture, aligned with fencing, paving, and the rhythm of the house itself. Homeowners often want shade and weather cover without introducing a structure that feels bolted on or visually heavy beside carefully maintained landscaping.",
    "Outdoor entertaining is common, but so is quiet weekday use: morning coffee, homework at the outdoor table, and family meals when the weather allows. That mix means the pergola has to work as a practical room, not only a weekend party backdrop. Layout decisions tend to favour calm roof lines, disciplined post spacing, and finishes that suit older brick, render, and timber palettes typical of long-held properties.",
    "Access can follow side paths, stepped gardens, or tight side clearances between houses. Those conditions reward early planning for material handling and protection of existing surfaces. We treat Hunters Hill as a detail-sensitive suburb where small decisions about height, edge position, and colour direction have an outsized effect on the final impression.",
    "Pool edges, glass balustrades, and stepped terraces appear frequently enough that interface planning matters. We discuss how posts land relative to coping, where drips should fall in rain, and how circulation stays safe when the deck is wet. Those practical threads are part of making the pergola feel settled in a real Hunters Hill backyard, not only correct on paper.",
  ],
  whyChooseUsHere: [
    "Hunters Hill projects benefit from installers who can discuss proportion before product names, and who understand that finish quality is part of the brief. We coordinate Inner West pergola work from our Gladesville office at 10 Linsley St, which is a short practical run for site visits, measurements, and follow-up during construction. If you want to sense-check a direction before committing to a full quote, call (02) 5849 6376.",
    "We prioritise clear written scope, tidy staging, and communication that respects occupied homes. In streets where presentation matters, predictable delivery and careful protection of driveways and paths are part of the service, not optional extras. We also keep guidance cautious wherever heritage or character controls may be relevant, and we recommend confirming specifics with council and qualified professionals.",
    "Material conversations here are usually about longevity and compatibility: powder-coated systems, insulated roof panels where comfort matters, and transitions that look intentional at the house wall. The goal is a pergola that still looks appropriate years after handover, not only on completion photos.",
    "We are comfortable working alongside other trades when you are mid-renovation—painters, landscapers, electricians—so pergola milestones do not fight the wider schedule. Clear handoff points reduce rework and help keep finishes intact.",
  ],
  localConsiderations: [
    "Heritage and character sensitivity can matter on some streets depending on what is already built and what is visible from the public domain. Requirements vary by property, so we avoid definitive claims and recommend early checks through formal channels when controls might apply. That cautious approach reduces the risk of late surprises once construction sequencing has begun.",
    "Mature trees, deep shade, and established planting beds influence where posts can sit without damaging roots or creating maintenance headaches. We map drip lines and canopy edges during planning so roof choices stay realistic for leaf load and cleaning access. Where specialist arborist advice is prudent, we say so plainly.",
    "Peninsula blocks can combine slope, retaining walls, and tight neighbour interfaces. A pergola should improve usability without crowding sightlines or dominating a shared boundary view. We discuss roof height and post rhythm with those constraints in mind, aiming for subtle coverage rather than a bulky silhouette.",
    "Drainage intent around paved terraces and thresholds still matters even when the project is primarily about shade. We keep hydraulic expectations scoped to typical pergola work and recommend qualified professionals when detailed stormwater design sits outside standard installation.",
    "Evening lighting and heating are common add-ons; if you already know you want them, mentioning it during structure planning usually avoids expensive retrofitting through beams after fix-off.",
  ],
  ourProcess: [
    "We start with a walkthrough focused on how you use the rear and side yards, where sun is uncomfortable at the times you care about, and what views you want to preserve from key windows. We note access constraints, services locations, and any features that must remain untouched. That visit produces a layout direction you can evaluate with real furniture placement in mind.",
    "Next we refine roof type, structural intent, and finishes, then document scope in a quote with clear staging. If two options are close in price but different in upkeep, we spell out the trade-offs in everyday language. Once approved, installation proceeds with predictable milestones and communication before disruptive stages.",
    "At handover we review finished edges, discuss sensible cleaning routines for your chosen materials, and confirm how water is intended to behave along the roof perimeter in heavy rain. The aim is a settled outdoor room that matches Hunters Hill expectations for orderliness and finish quality.",
    "If you plan phased landscaping after the pergola is complete, we can note edge details and protection assumptions so later planting does not undermine drainage intent at post bases.",
  ],
  nearestOffice: offices.gladesville,
  coordinates: { lat: -33.832, lng: 151.142 },
  siblings: [
    { name: "Mosman", slug: "mosman" },
    { name: "Longueville", slug: "longueville" },
    { name: "Northbridge", slug: "northbridge" },
    { name: "Roseville", slug: "roseville" },
    { name: "Lindfield", slug: "lindfield" },
    { name: "Castlecrag", slug: "castlecrag" },
  ],
  faqs: [
    {
      q: "Do you design pergolas to suit established Hunters Hill homes?",
      a: "Yes. We focus on proportion, roof profile, and finishes that sit comfortably with established architecture and mature gardens. The aim is an outdoor structure that feels native to the property rather than visually dominant.",
    },
    {
      q: "Are heritage considerations sometimes relevant in Hunters Hill?",
      a: "They can be, depending on the property and what is proposed. Controls vary, so we keep guidance cautious and recommend confirming requirements with council and relevant professionals. We can still help you shape a sensible design direction while checks are underway.",
    },
    {
      q: "What pergola styles work best for elegant peninsula properties?",
      a: "Often restrained roof forms and disciplined post spacing suit the streetscape. The best style is the one that matches your house lines, your maintenance appetite, and how you plan to furnish the space—not a one-size template. We can sketch sensible furniture zones on site so footprint decisions stay grounded in real use.",
    },
    {
      q: "Can you keep the structure visually subtle?",
      a: "Yes, where that is the priority. We work with roof depth, colour direction, and post placement so coverage improves comfort without a heavy presence against the garden or neighbouring sightlines.",
    },
    {
      q: "Is Gladesville your nearest office for Hunters Hill projects?",
      a: "Yes. Hunters Hill pergola work is coordinated from our Gladesville office for practical site visit coverage and responsive communication through delivery.",
    },
  ],
  galleryImages: [
    { src: "/images/pergolas-3.jpg", alt: "Pergola roof detail adjoining established brick home" },
    { src: "/images/patios.jpg", alt: "Covered outdoor dining in landscaped Sydney garden" },
    { src: "/images/decking.jpg", alt: "Timber deck transition to pergola-covered area" },
  ],
};

const HuntersHill = () => <LocationTemplate config={config} />;

export default HuntersHill;
