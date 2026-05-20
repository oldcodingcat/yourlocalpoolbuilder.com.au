import AreaTemplate, { AreaConfig } from "@/components/locations/AreaTemplate";
import { offices } from "@/data/offices";

const config: AreaConfig = {
  area: "Inner West",
  slug: "inner-west",
  heroImage: "/images/patios.jpg",
  heroTagline:
    "Pergola installers for Sydney's Inner West - compact terraces, Federation homes, and modern renovations from our Gladesville base.",
  introImage: "/images/pergolas-3.jpg",
  whyChooseImage: "/images/pergolas-2.jpg",
  processImage: "/images/decking.jpg",
  aboutArea: [
    "The Inner West combines dense urban character with highly varied housing stock, from terraces and semis to Federation homes and modern renovations. Outdoor upgrades here usually happen on compact blocks where every design move affects circulation and usability. Because block sizes are often tight, layout efficiency and visual restraint are critical to successful outcomes.",
    "In this region, pergola success is less about large spans and more about intelligent proportion, careful post placement, and preserving daylight while adding practical shelter. We design with this in mind so covered zones add comfort without overwhelming outdoor circulation.",
    "Many homeowners want outdoor areas that feel refined and local to the home's character, rather than generic structures that ignore streetscape context. This neighbourhood-sensitive approach is especially important in streets with strong heritage character.",
  ],
  whyChooseUsHere: [
    "Inner West projects are coordinated from our Gladesville office, giving us practical proximity for site planning and the communication discipline needed for occupied, access-constrained properties. Gladesville coordination supports frequent communication for projects where logistics and sequencing require close attention.",
    "We work regularly with compact backyards and architecture-sensitive homes, helping clients choose layouts and finishes that maximise function without overwhelming limited space. We help clients make proportion-led choices that protect daylight and maintain architectural coherence.",
    "If you want guidance on what will work best on a tighter block, call (02) 5849 6376 and we can discuss realistic options before formal scope is set. That practical guidance is valuable when decisions must be made quickly on constrained renovation timelines.",
  ],
  localChallenges: [
    "The biggest Inner West challenge is often space efficiency. Narrow access, small yards, and close neighbour interfaces require meticulous planning so installation remains practical and the final layout still breathes. Narrow access and close neighbour boundaries can shape how installation is staged from day one.",
    "Heritage overlays or character controls may be relevant in some suburbs. We approach these cases cautiously and recommend early confirmation of project-specific requirements with council and qualified professionals. We also consider the balance between shade gain and interior light retention, which is a common Inner West concern.",
    "Another challenge is balancing shade with interior light. On compact sites, roof depth and orientation need to be tuned so outdoor comfort improves without unnecessarily darkening internal rooms. Addressing these factors early tends to prevent late-stage compromises in compact yards.",
  ],
  ourProcess: [
    "We begin with a site consultation focused on movement paths, access constraints, and how the pergola should support daily routines in limited space. This creates a design brief grounded in practical use. Our process begins with a detailed site walk that maps movement paths and service access realities.",
    "Then we develop scope and material options, including cautious guidance around approvals discussions where needed. Because constraints can be tight, clear pre-construction planning is essential. Where approvals questions apply, we provide cautious direction and recommend formal checks through council channels.",
    "Installation is staged with close communication so households can manage logistics and maintain liveability while works progress. This structure helps reduce disruption on compact Inner West sites. Clear communication milestones help maintain liveability while works proceed on tightly configured properties.",
  ],
  nearestOffice: offices.gladesville,
  suburbs: [
    { name: "Balmain", slug: "balmain" },
    { name: "Leichhardt", slug: "leichhardt" },
    { name: "Rozelle", slug: "rozelle" },
    { name: "Newtown", slug: "newtown" },
    { name: "Marrickville", slug: "marrickville" },
    { name: "Ashfield", slug: "ashfield" },
    { name: "Haberfield", slug: "haberfield" },
  ],
  faqs: [
    {
      q: "How do you work with small Inner West backyards?",
      a: "We prioritise circulation and usability first, then shape structure and roof coverage around those priorities so compact sites remain functional. This guidance is tailored to compact Inner West properties where access, light, and circulation are closely linked.",
    },
    {
      q: "Are you experienced with heritage overlay considerations?",
      a: "Yes. We take a cautious approach and recommend confirming project-specific requirements with council and qualified professionals. This guidance is tailored to compact Inner West properties where access, light, and circulation are closely linked.",
    },
    {
      q: "Can pergolas work for terrace house layouts?",
      a: "Absolutely. Terrace properties can perform very well with proportionate design that preserves light and improves day-to-day outdoor use. This guidance is tailored to compact Inner West properties where access, light, and circulation are closely linked.",
    },
    {
      q: "What is the process for narrow access sites?",
      a: "We plan staged delivery and installation logistics around access limitations to keep works efficient and manageable. This guidance is tailored to compact Inner West properties where access, light, and circulation are closely linked.",
    },
    {
      q: "Can we discuss direction before detailed quoting?",
      a: "Yes. Call (02) 5849 6376 and we can review practical options for your property before final scope decisions. This guidance is tailored to compact Inner West properties where access, light, and circulation are closely linked.",
    },
  ],
};

const InnerWest = () => <AreaTemplate config={config} />;

export default InnerWest;
