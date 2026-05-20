import AreaTemplate, { AreaConfig } from "@/components/locations/AreaTemplate";
import { offices } from "@/data/offices";

const config: AreaConfig = {
  area: "Northern Beaches",
  slug: "northern-beaches",
  heroImage: "/images/pergolas-5.jpg",
  heroTagline:
    "Licensed pergola installers serving the Northern Beaches - from Manly to Palm Beach, built for coastal Sydney living.",
  introImage: "/images/pergolas-4.jpg",
  whyChooseImage: "/images/sunroof.jpg",
  processImage: "/images/patios.jpg",
  aboutArea: [
    "The Northern Beaches is a distinctly coastal region where lifestyle and climate directly shape outdoor construction decisions. From peninsula villages to family suburbs, homeowners prioritise structures that support daily outdoor living while handling salt, wind, and strong sunlight. That coastal lifestyle focus means structures are expected to feel comfortable in everyday conditions, not just on mild weather days.",
    "Property styles vary from beach-adjacent homes to larger inland blocks, but most projects share a common requirement: pergolas must be both durable and visually appropriate to the relaxed coastal character of the area. We therefore prioritise practical weather resilience while keeping proportions and finishes aligned to relaxed local architecture.",
    "Because this corridor stretches across multiple local conditions, practical planning is essential. A structure that performs in a sheltered pocket may require different detailing near exposed beachfront streets. This is especially important across suburbs where microclimate can shift significantly over short distances.",
  ],
  whyChooseUsHere: [
    "Northern Beaches work is coordinated through our Mona Vale office, which gives us genuine local operating coverage across key suburbs. That local base helps with efficient scheduling, practical logistics, and familiarity with the way coastal projects are typically staged. The Mona Vale office also helps us stay responsive when scheduling around weather windows common in exposed coastal areas.",
    "We have strong experience with family-focused outdoor zones in this area, including lounge, dining, and poolside layouts that need to remain usable through changing weather windows and high summer demand. Our local project experience means we can flag practical trade-offs early, before clients commit to unsuitable detail choices.",
    "If you are comparing options for a coastal block, call (02) 5849 6376 and we can walk through the most important early decisions before final scope is set. That early clarity is often the difference between a smooth project and avoidable redesign midstream.",
  ],
  localChallenges: [
    "Salt spray and airborne moisture can accelerate corrosion where hardware and coatings are under-specified. We address this by selecting marine-suitable fixings and material systems aligned to real exposure, not default assumptions. For exposed sites, we often review fixing strategy and roof detailing in more depth to protect reliability over time.",
    "Wind behaviour is another coastal challenge, particularly on open lots or elevated sites. We account for this in structural planning, roof strategy, and detailing so comfort and reliability are maintained over time. We also discuss sensible cleaning and inspection routines that match genuine coastal maintenance demands.",
    "Maintenance expectations also need to match reality. We provide practical guidance on upkeep intervals so homeowners can protect long-term appearance and avoid preventable deterioration. These coastal-specific decisions help preserve both performance and appearance through repeated seasonal cycles.",
  ],
  ourProcess: [
    "We begin with a site-specific consultation to understand exposure, usage priorities, and preferred visual direction. This includes discussing shade behaviour, airflow, and how the structure will integrate with existing hardscape and landscaping. Our initial planning stage maps comfort goals, airflow preferences, and shade requirements for real family use.",
    "Next, we define design and material pathways, then provide clear scope detail and staged delivery planning. Where approvals questions apply, we provide cautious guidance and recommend confirming current requirements with local council and qualified professionals. Where approvals are relevant, we explain the process in plain language so clients can move forward with confidence.",
    "Installation is delivered with transparent milestones and communication points so households can plan around each stage confidently. Coastal projects benefit from this structured process because detail quality matters from day one. Installation milestones are communicated clearly, which is particularly useful when weather conditions require flexible sequencing.",
  ],
  nearestOffice: offices.monaVale,
  suburbs: [
    { name: "Manly", slug: "manly" },
    { name: "Dee Why", slug: "dee-why" },
    { name: "Mona Vale", slug: "mona-vale" },
    { name: "Avalon Beach", slug: "avalon-beach" },
    { name: "Narrabeen", slug: "narrabeen" },
    { name: "Newport", slug: "newport" },
    { name: "Freshwater", slug: "freshwater" },
  ],
  faqs: [
    {
      q: "Do you handle salt spray and coastal exposure considerations?",
      a: "Yes. Northern Beaches projects are planned with coastal exposure in mind, including material choice, fixing strategy, and maintenance expectations.",
    },
    {
      q: "Which pergola materials perform best near the beach?",
      a: "For many sites, aluminium with corrosion-suitable hardware performs strongly because it is durable and lower-maintenance in coastal environments.",
    },
    {
      q: "Do Northern Beaches properties need special council approvals?",
      a: "Approval pathways depend on project specifics and local requirements. We always recommend confirming current obligations with your council and qualified professionals before finalising scope.",
    },
    {
      q: "Can you access sites with narrow peninsula roads?",
      a: "Yes. We regularly plan projects in areas with tighter access or delivery constraints. Early site planning helps keep installation efficient and reduces disruption.",
    },
    {
      q: "How do we start a project in this area?",
      a: "Call (02) 5849 6376 and we can review your suburb, site conditions, and design priorities first.",
    },
  ],
};

const NorthernBeaches = () => <AreaTemplate config={config} />;

export default NorthernBeaches;
