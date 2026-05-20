import LocationTemplate, { LocationConfig } from "@/components/locations/LocationTemplate";
import { offices } from "@/data/offices";

const config: LocationConfig = {
  name: "Dover Heights",
  slug: "dover-heights",
  region: "Eastern Suburbs",
  regionSlug: "eastern-suburbs",
  heroImage: "/images/pergolas-5.jpg",
  heroTagline:
    "Coastal-exposed pergolas and patio roofs in Dover Heights — materials, fixings, and roof strategy chosen for salt air, wind, and strong UV.",
  introImage: "/images/sunroof.jpg",
  whyChooseImage: "/images/flat-roof.jpg",
  processImage: "/images/insulated-roofs.webp",
  aboutSuburb: [
    "Dover Heights sits on the eastern cliffline where ocean exposure, wind, and glare are part of daily outdoor life more than in sheltered inland suburbs. Homeowners here often want pergolas that improve shade and usability without turning the backyard into a heavy structure that fights the view. That usually means careful roof selection, disciplined post placement, and finishes that can tolerate harsh air without constant cosmetic rework.",
    "Outdoor living in Dover Heights is closely tied to entertaining, weekend family use, and making the most of elevated outlooks. A pergola is frequently the piece that makes a terrace or rear garden usable across more hours of the day, especially when the sun is strong and reflected light is noticeable. The best outcomes read as intentional additions: enough cover to be comfortable, without clumsy bulk at the fence line or along the rear façade.",
    "Because properties can vary from tightly planned rear courts to larger split-level gardens, each project needs a layout that respects existing paving, drainage paths, and how people move between indoors and outdoors. We treat those site realities as part of the design brief from the first visit, not as surprises discovered mid-build.",
    "Evening use is common in cliff-top suburbs, so lighting quality and glare control under the roof can matter as much as daytime shade. We can discuss practical options for downlights, warmer colour temperatures, and switching locations while the structure is being planned so you are not retrofitting decisions later at higher cost.",
  ],
  whyChooseUsHere: [
    "Coastal cliff suburbs reward practical experience: recommending hardware grades, coating expectations, and roof systems suited to real exposure rather than inland defaults. Eastern Suburbs pergola work is coordinated from our Gladesville office at 10 Linsley St, which supports responsive scheduling for site visits and clear communication while decisions are still flexible. If you want to talk through exposure and material trade-offs early, call (02) 5849 6376.",
    "We also focus on view preservation and neighbour interface. In Dover Heights, a few centimetres of height or a change in post position can materially change how a structure reads from the living room windows and from neighbouring decks. We work through those details on site rather than relying on generic drawings that ignore orientation.",
    "Our quoting style is deliberately plain-language: scope boundaries, staging assumptions, and what is included in fix-off. That tends to suit premium coastal projects where expectations are high and surprises are costly.",
    "We are comfortable coordinating with other trades when a renovation is running in parallel—such as paving resets, pool fencing interfaces, or new doors opening onto the deck—so pergola decisions do not fight the wider project timeline.",
  ],
  localConsiderations: [
    "Salt spray and strong winds can accelerate wear on the wrong specification, particularly at fixings, cut edges, and junctions that are hard to inspect later. We plan those junctions with long-term performance in mind and discuss sensible maintenance routines so you know what to expect after handover. The goal is durability that still looks appropriate for a high-quality streetscape.",
    "UV intensity and reflected light can influence comfort under the roof as much as rain protection. Depending on how you use the space, we may compare translucent panels, insulated panels, or open rafter strategies, always tied to how hot the zone feels in midsummer and how much glare you want to cut.",
    "Drainage and runoff behaviour matter on sloping blocks and paved terraces where water needs a controlled path away from door thresholds and retaining walls. We keep those conversations practical and recommend involving qualified professionals where structural or hydraulic detail is outside standard pergola scope.",
    "Wind uplift loads can vary with height and openness, so we take a conservative approach to connections and bracing intent where the pergola is exposed on multiple sides. That is separate from council approval questions, but it is part of delivering a structure that feels solid in real weather, not only on a calm site visit day.",
  ],
  ourProcess: [
    "The first visit prioritises orientation, prevailing wind, and how sun moves across your outdoor area through the day. That visit also checks access for materials, existing levels, and any interfaces with balustrades, pools, or boundary conditions that will affect the build sequence. The point is to choose a roof strategy and footprint that matches the real microclimate, not a catalogue default.",
    "Next we refine options, confirm scope in writing, and agree staging so you know when noise and access peaks will occur. If you are comparing two viable roof types, we explain the maintenance and comfort differences in practical terms. When you approve, we proceed to installation with predictable milestones.",
    "During construction we focus on clean transitions at the house connection, tidy edge details, and a handover walkthrough that covers how water is intended to behave in heavy rain. The aim is a finished pergola that feels settled into the property and is straightforward to live with long term.",
  ],
  nearestOffice: offices.gladesville,
  coordinates: { lat: -33.861, lng: 151.281 },
  siblings: [
    { name: "Mosman", slug: "mosman" },
    { name: "Hunters Hill", slug: "hunters-hill" },
    { name: "Longueville", slug: "longueville" },
    { name: "Roseville", slug: "roseville" },
    { name: "Northbridge", slug: "northbridge" },
    { name: "Turramurra", slug: "turramurra" },
  ],
  faqs: [
    {
      q: "Which pergola materials work best in Dover Heights coastal conditions?",
      a: "It depends on exposure at your specific address. We commonly compare powder-coated aluminium framing, durable roof panel options, and hardware suited to coastal air. The right specification is the one that matches your home’s style and the true wind and salt load on site.",
    },
    {
      q: "Do you account for salt air and strong winds?",
      a: "Yes. We review exposure during the site visit and specify fixings and finishes with that context in mind. We also discuss sensible maintenance so expectations stay realistic after handover.",
    },
    {
      q: "Can you design pergolas that preserve views?",
      a: "Yes. We plan post positions, beam depths, and roof height with your key sightlines in mind. Often the answer is a slimmer profile or a roof strategy that provides shade without a heavy edge along the outlook.",
    },
    {
      q: "Are coastal properties more demanding structurally?",
      a: "They can be more demanding on detailing and corrosion resistance even when the structure itself is straightforward. Wind uplift and fixing quality matter, and we treat those items as part of standard good practice rather than optional extras.",
    },
    {
      q: "What maintenance is sensible near the ocean?",
      a: "A light routine schedule for washing down exposed surfaces and checking gutters or channels where fitted usually helps finishes stay presentable. We outline what makes sense for your chosen materials so upkeep stays practical.",
    },
  ],
  galleryImages: [
    { src: "/images/curved-roofs.jpg", alt: "Curved roof outdoor structure near coastal Eastern Suburbs home" },
    { src: "/images/patios.jpg", alt: "Covered patio and pergola in premium Sydney eastern suburb" },
    { src: "/images/gazebos.jpg", alt: "Garden gazebo and outdoor shelter inspiration" },
  ],
};

const DoverHeights = () => <LocationTemplate config={config} />;

export default DoverHeights;
