import AreaTemplate, { AreaConfig } from "@/components/locations/AreaTemplate";
import { offices } from "@/data/offices";

const config: AreaConfig = {
  area: "South Sydney",
  slug: "south-sydney",
  heroImage: "/images/patios.jpg",
  heroTagline:
    "Pergola installation across South Sydney — Mascot, Botany, Rosebery and surrounding suburbs covered by our Gladesville-based team.",
  introImage: "/images/pergolas-2.jpg",
  whyChooseImage: "/images/sunroof.jpg",
  processImage: "/images/pergolas-4.jpg",
  aboutArea: [
    "South Sydney combines compact urban streets, mixed industrial-residential pockets, and a broad range of housing forms from terraces and semis to newer apartment-adjacent courtyards. That diversity means pergola planning here is rarely one-size-fits-all. In South Sydney, smart spatial planning usually makes the biggest difference to long-term everyday comfort.",
    "Many properties have tighter outdoor footprints, so every design decision must protect circulation while still delivering useful shade and shelter. Homeowners often want spaces that feel calm, practical, and efficient rather than oversized. In South Sydney, smart spatial planning usually makes the biggest difference to long-term everyday comfort.",
    "The area's architectural mix also requires flexible design language. A successful pergola in South Sydney should respond to each home's context, whether it is a renovated terrace, a modern townhouse, or a compact courtyard setting. In South Sydney, smart spatial planning usually makes the biggest difference to long-term everyday comfort.",
  ],
  whyChooseUsHere: [
    "South Sydney projects are coordinated from our Gladesville office, with structured scheduling and communication designed for dense urban workflows. This helps keep projects predictable where access windows and delivery coordination can be tight. Our Gladesville-based coordination supports efficient delivery in dense and access-sensitive neighbourhoods.",
    "We have practical experience working across varied property types in this corridor and can adapt design pathways to suit compact layouts without sacrificing visual quality. That flexibility is especially important in neighbourhoods with mixed building eras and lot shapes. Our Gladesville-based coordination supports efficient delivery in dense and access-sensitive neighbourhoods.",
    "If you are planning a pergola for a terrace, semi, or smaller courtyard space, call (02) 5849 6376 and we can discuss practical options before committing to final scope. Our Gladesville-based coordination supports efficient delivery in dense and access-sensitive neighbourhoods.",
  ],
  localChallenges: [
    "The main South Sydney challenge is maximising function in limited space. We address this through careful footprint planning, disciplined post placement, and roof choices that improve comfort without crowding the yard. Careful sequencing and practical layout decisions help maintain function throughout installation and beyond.",
    "Access and logistics can be another issue in denser streets, particularly where deliveries and staging must be tightly managed. We plan sequencing carefully to reduce disruption and keep installation flow efficient. Careful sequencing and practical layout decisions help maintain function throughout installation and beyond.",
    "Given the area's proximity to airport corridors, some clients also ask about comfort in noisy environments. While pergolas are not acoustic barriers, we consider practical layout and usage strategies so outdoor zones still support day-to-day living. Careful sequencing and practical layout decisions help maintain function throughout installation and beyond.",
  ],
  ourProcess: [
    "Our process begins with a site consultation that maps movement paths, access constraints, and how the outdoor space should function across weekdays and weekends. This creates a practical brief grounded in real household use. This method is designed to keep compact-property projects practical, clear, and low-disruption.",
    "Next, we refine design and material pathways, then document clear scope detail and staged delivery sequencing. Where approvals questions are relevant, we provide cautious guidance and recommend confirming project-specific obligations with council and qualified professionals. This method is designed to keep compact-property projects practical, clear, and low-disruption.",
    "Installation proceeds through defined milestones with communication checkpoints at each phase, so homeowners can coordinate around occupied living conditions. This structured approach works well for compact South Sydney properties. This method is designed to keep compact-property projects practical, clear, and low-disruption.",
  ],
  nearestOffice: offices.gladesville,
  suburbs: [
    { name: "Mascot", slug: "mascot" },
    { name: "Botany", slug: "botany" },
    { name: "Rosebery", slug: "rosebery" },
    { name: "Eastlakes", slug: "eastlakes" },
    { name: "Pagewood", slug: "pagewood" },
    { name: "Hillsdale", slug: "hillsdale" },
    { name: "Daceyville", slug: "daceyville" },
  ],
  faqs: [
    {
      q: "Can you design for compact South Sydney terraces?",
      a: "Yes. We regularly design for tighter terrace and semi layouts, focusing on circulation, comfort, and proportionate structure sizing.",
    },
    {
      q: "Are noise considerations part of your design near airport areas?",
      a: "Yes, in a practical sense. We discuss how layout and usage planning can support comfort, while noting pergolas are not dedicated acoustic systems.",
    },
    {
      q: "Do you work with apartment courtyard installations?",
      a: "We do, where project conditions are suitable. Compact courtyard spaces can benefit significantly from careful shade and layout planning.",
    },
    {
      q: "How do you handle South Sydney access constraints?",
      a: "We stage logistics and installation around site-specific access limits to keep works efficient and minimise disruption.",
    },
    {
      q: "Can we review options before detailed quoting?",
      a: "Absolutely. Call (02) 5849 6376 and we can map the most practical direction for your property first.",
    },
  ],
};

const SouthSydney = () => <AreaTemplate config={config} />;

export default SouthSydney;
