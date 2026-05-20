import LocationTemplate, { LocationConfig } from "@/components/locations/LocationTemplate";
import { offices } from "@/data/offices";

const config: LocationConfig = {
  name: "Lindfield",
  slug: "lindfield",
  region: "North Shore",
  regionSlug: "north-shore",
  heroImage: "/images/pergolas-5.jpg",
  heroTagline:
    "Lindfield pergolas sized for generous blocks — outdoor rooms with real span, sensible roof profiles, and integration with established homes and deep backyards.",
  introImage: "/images/patios.jpg",
  whyChooseImage: "/images/decking.jpg",
  processImage: "/images/pergolas.jpeg",
  aboutSuburb: [
    "Lindfield is known for established family homes on relatively generous blocks compared with tighter inner-ring suburbs. That extra space is an opportunity: you can design a pergola that genuinely supports a full outdoor dining setting, a lounge zone, and circulation without everything feeling squeezed. It is also a responsibility, because an oversized roof can look empty or heavy if proportion is not disciplined.",
    "Outdoor living here is often daily rather than occasional—homework outside, weekend barbecues, and year-round drying areas when rain arrives fast. Pergolas tend to be chosen for comfort across seasons, which pushes conversations toward roof performance, edge detailing, and how the covered zone connects to indoor living. Materials are usually selected with a long ownership horizon in mind.",
    "Deep setbacks and side gardens mean access routes can be long, and staging sometimes needs a clear plan so turf, irrigation, and paving edges are protected. We treat those logistics as part of the brief from the first visit so installation stays predictable for households that remain on site during work.",
    "Double-storey rear façades can make roof height decisions more sensitive than on single-storey streetscapes. We think about how the pergola reads from upstairs windows and balconies, not only from ground level on the lawn.",
  ],
  whyChooseUsHere: [
    "Generous blocks need installers who can dimension structures for real furniture layouts, not generic footprints copied from smaller yards. North Shore pergola projects are coordinated from our Turramurra office at 99 Eastern Rd, which supports practical scheduling for Lindfield measurements and follow-up. For an early conversation about layout priorities, call (02) 5849 6376.",
    "We emphasise readable quotes: what is included, what assumptions we made about access, and where your selections still need confirmation. That clarity helps when you are comparing multiple roof types or thinking about staged upgrades alongside decking or paving.",
    "Finish discipline matters on larger properties because mistakes scale visually. We focus on tidy junctions at the house wall, consistent colour direction, and roof edges that read cleanly from both the garden and upper-storey windows.",
    "If you are comparing two similar quotes, we can help you interpret scope differences so you are not paying for hidden exclusions or accepting a footprint that will feel undersized once furniture arrives.",
  ],
  localConsiderations: [
    "Tree cover and changing sun angles across a wide backyard can make one corner feel different from another by mid-afternoon. We map how you actually sit, cook, and circulate so the pergola improves the zones you use most, rather than shading the wrong half of the lawn.",
    "Larger spans can raise questions about support rhythm and beam depth. We keep structural intent conservative and recommend involving qualified engineers when something sits outside typical pergola assumptions. We phrase that cautiously because every site differs.",
    "Where homes have been extended over time, roof heights and fascia lines may not be perfectly uniform. We measure those interfaces carefully so the pergola meets the house cleanly rather than looking like a later patchwork add-on.",
    "Approvals questions can appear depending on what is already built and how visible the structure is. Requirements vary, so we recommend confirming obligations with council and qualified professionals when there is any uncertainty before fabrication begins.",
    "Outdoor kitchens and long furniture runs are common on generous blocks; mentioning appliance depths and bench runs early helps us reserve sensible post positions before structure choices harden.",
    "Swimming pools and glass fencing introduce circulation and safety considerations; we discuss post placement and drip paths so wet feet moving between zones stay predictable after rain.",
  ],
  ourProcess: [
    "We open with a site review focused on intended use zones, outlook lines, and how you want furniture to sit under cover. We measure access for long materials and identify any steps or retaining walls that will influence the build sequence. That visit produces a footprint proposal you can evaluate with real chairs and table positions in mind.",
    "We then refine roof type and material palette, document scope, and agree milestones. If you are comparing insulated panels against a lighter roof strategy, we explain comfort and maintenance trade-offs plainly. Once approved, installation proceeds with predictable communication before disruptive stages.",
    "Handover includes a walkthrough of finished edges, notes on cleaning routines suited to your materials, and guidance on what to monitor after heavy rain. The aim is a Lindfield outdoor area that feels proportionate to the block and easy to live with long term.",
    "Where you plan future paving or pool work, we can note edge clearances and protection assumptions so later trades do not compromise the pergola footings or drainage intent.",
  ],
  nearestOffice: offices.turramurra,
  coordinates: { lat: -33.775, lng: 151.169 },
  siblings: [
    { name: "Roseville", slug: "roseville" },
    { name: "Wahroonga", slug: "wahroonga" },
    { name: "Normanhurst", slug: "normanhurst" },
    { name: "Castlecrag", slug: "castlecrag" },
    { name: "Northbridge", slug: "northbridge" },
    { name: "Longueville", slug: "longueville" },
  ],
  faqs: [
    {
      q: "Are larger pergolas common for Lindfield backyards?",
      a: "Yes, many Lindfield blocks support a genuinely generous outdoor room. The key is sizing for real furniture and circulation while keeping roof profile disciplined so the structure does not dominate the garden. We often tape out footprint ideas on site so you can feel the size before fabrication locks in.",
    },
    {
      q: "What roof profiles suit established Lindfield homes?",
      a: "It depends on architecture and comfort goals. Insulated panels suit year-round outdoor rooms, while lighter profiles suit different shade priorities. We match the roof strategy to how you use the space and how much maintenance you want. On generous blocks, we also compare how roof depth reads against two-storey rear façades so the outcome stays visually calm.",
    },
    {
      q: "Can you help with both attached and freestanding designs?",
      a: "Yes. We compare both where your layout allows and explain fixing, footing, and maintenance implications in plain terms. The right choice is usually driven by how you want indoor and outdoor zones to connect.",
    },
    {
      q: "Do trees and shade affect the final layout?",
      a: "Often yes. Canopy and shade patterns influence where cover adds the most value and where posts can sit without creating long-term maintenance headaches. We discuss those factors on site rather than assuming from plans alone. If one corner of the yard is always damp, we also factor that into footing and paving interface decisions.",
    },
    {
      q: "Is Turramurra the closest office for Lindfield projects?",
      a: "Yes. Lindfield pergola work is coordinated from our Turramurra office for practical site visit coverage and clear communication through delivery.",
    },
  ],
  galleryImages: [
    { src: "/images/insulated-roofs.webp", alt: "Insulated roof outdoor room on generous Sydney block" },
    { src: "/images/sunroof.jpg", alt: "Translucent roof pergola over wide rear terrace" },
    { src: "/images/curved-roofs.jpg", alt: "Curved roof outdoor structure detail" },
  ],
};

const Lindfield = () => <LocationTemplate config={config} />;

export default Lindfield;
