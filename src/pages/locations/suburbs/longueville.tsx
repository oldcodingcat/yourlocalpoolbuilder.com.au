import LocationTemplate, { LocationConfig } from "@/components/locations/LocationTemplate";
import { offices } from "@/data/offices";

const config: LocationConfig = {
  name: "Longueville",
  slug: "longueville",
  region: "North Shore",
  regionSlug: "north-shore",
  heroImage: "/images/pergolas-3.jpg",
  heroTagline:
    "Quiet harbourside pergolas in Longueville — balanced proportions, respectful integration with mature gardens, and outdoor rooms that feel calm year-round.",
  introImage: "/images/patios.jpg",
  whyChooseImage: "/images/gazebos.jpg",
  processImage: "/images/pergolas-2.jpg",
  aboutSuburb: [
    "Longueville is a leafy, established harbourside suburb where homes often sit behind mature trees, generous setbacks, and gardens that have been cultivated over many years. Outdoor living here tends to be more private than in denser pockets: family dining, weekend gatherings, and quiet weekday use rather than showpiece street frontage. A pergola in Longueville usually needs to feel like a natural extension of the house and garden, not a loud new object dropped into a settled landscape.",
    "Street character is generally restrained, so visual discipline matters. Homeowners frequently ask for structures that provide shade and weather protection while keeping roof lines and post rhythm sympathetic to the existing architecture. That often means spending time on proportion before choosing a product name, because the right answer is usually about scale and placement as much as material brand.",
    "Access can be via side paths and gentle slopes, which influences how materials are brought in and how staging is planned. We treat those practical realities as part of the design conversation from the start so the build sequence stays predictable for households that remain in residence during work.",
    "Many Longueville properties combine brick, render, and timber exterior elements that have aged together over time. Matching new outdoor structure colours and textures to that palette usually produces a calmer outcome than introducing a sharply contrasting frame that draws the eye away from the house.",
  ],
  whyChooseUsHere: [
    "Longueville projects benefit from a team that will not oversize a roof footprint just because it is easier to quote. We work with North Shore homeowners to align coverage with real furniture layouts, circulation, and how sun moves across the yard. Coordination runs through our Turramurra office at 99 Eastern Rd, which supports local scheduling and clear updates while your job is in progress.",
    "We also emphasise tidy site practices and careful protection of landscaping edges, paved paths, and established beds. In suburbs where gardens are part of the property’s value story, respectful delivery matters as much as the finished pergola profile. If you want to discuss layout options before committing, call (02) 5849 6376.",
    "Our quotes aim to be readable: what is included, what is excluded, and what decisions still need your sign-off. That clarity tends to suit established-home suburbs where owners expect predictable process and professional communication.",
    "Where you are unsure between a fully roofed outdoor room and a lighter cover, we walk through how each option will feel in winter drizzle versus midsummer heat, because the right comfort answer is not always the heavier roof.",
  ],
  localConsiderations: [
    "Mature trees and deep shade can change how a roof performs and how often gutters or channels need attention if you choose a fully roofed system. We discuss those interactions honestly so you are not surprised by leaf load or drip lines after installation. Where root zones or canopy protection matter, we keep recommendations practical and recommend specialist input when arborist or structural advice is appropriate.",
    "Privacy from neighbours is often a quiet driver of pergola placement, especially on side paths and rear corners. We plan post positions and roof edges with sightlines in mind so improved comfort does not come at the cost of an awkward bulkhead against a boundary fence.",
    "Planning questions can arise on some lots depending on what is already built and how close you are to sensitive interfaces. Controls vary, so we keep language cautious and recommend confirming obligations with council and qualified professionals for your specific property before locking a final design.",
    "Sound travel can matter when entertaining outdoors near neighbouring bedrooms. While a pergola is not a soundproofing solution, roof form and partial screening choices can soften noise directionally; we discuss practical expectations rather than implying outcomes a structure cannot deliver.",
  ],
  ourProcess: [
    "The opening visit focuses on how you use the garden through the seasons, where you want shade at midday versus late afternoon, and what existing features must stay untouched. We measure practical constraints like side access, step levels, and services locations, then translate that into a layout proposal you can picture furnishing.",
    "After direction is agreed, we refine materials and roof type, then provide a written quote with staged milestones. If you are weighing attached versus freestanding, we explain the trade-offs for your block rather than pushing a default. Installation follows a clear sequence with communication before noisy stages and before fix-off.",
    "Handover includes a walkthrough of finished edges, drainage intent where relevant, and guidance on simple maintenance for your chosen materials. The goal is a calm, well-integrated outdoor space that matches how Longueville homes are actually lived in.",
    "If you plan to add outdoor heating or fans later, we can note sensible fixing assumptions in scope so future upgrades do not require undoing primary structure work.",
  ],
  nearestOffice: offices.turramurra,
  coordinates: { lat: -33.834, lng: 151.166 },
  siblings: [
    { name: "Northbridge", slug: "northbridge" },
    { name: "Castlecrag", slug: "castlecrag" },
    { name: "Hunters Hill", slug: "hunters-hill" },
    { name: "Roseville", slug: "roseville" },
    { name: "Lindfield", slug: "lindfield" },
    { name: "Mosman", slug: "mosman" },
  ],
  faqs: [
    {
      q: "Can you design pergolas that suit established Longueville homes?",
      a: "Yes. We prioritise proportion, roof form, and finishes that sit comfortably with older homes and mature gardens. The aim is an outdoor structure that feels like it belongs with the house rather than competing with it.",
    },
    {
      q: "Do you work around gardens and landscaped backyards?",
      a: "Yes. We plan access routes, staging, and protection of garden edges from the beginning. If a feature is fragile or hard to replace, we call it out early so the build sequence stays respectful.",
    },
    {
      q: "What pergola styles suit quiet residential streetscapes?",
      a: "Usually calmer roof profiles and disciplined post spacing suit Longueville’s established character. The best style is the one that matches your architecture and your maintenance preferences, not the trendiest option in a brochure.",
    },
    {
      q: "Can you help with attached and freestanding options?",
      a: "Yes. We compare both where your block allows, including implications for fixing to the house, footing needs, and long-term maintenance. The right choice depends on your layout, outlook, and how you want the outdoor room to relate to indoor living spaces.",
    },
    {
      q: "How do you keep the design visually balanced?",
      a: "We start with footprint discipline and roof edge height relative to windows and fences, then refine details like beam depth and colour direction. Balance is usually the result of repeated small decisions rather than a single dramatic feature.",
    },
  ],
  galleryImages: [
    { src: "/images/pergolas-4.jpg", alt: "Timber-style pergola in established Sydney garden" },
    { src: "/images/decking.jpg", alt: "Outdoor deck adjoining pergola-covered dining space" },
    { src: "/images/sunroof.jpg", alt: "Translucent roofing over outdoor living zone" },
  ],
};

const Longueville = () => <LocationTemplate config={config} />;

export default Longueville;
