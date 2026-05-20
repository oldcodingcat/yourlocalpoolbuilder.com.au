import AreaTemplate, { AreaConfig } from "@/components/locations/AreaTemplate";
import { offices } from "@/data/offices";

const config: AreaConfig = {
  area: "North Shore",
  slug: "north-shore",
  heroImage: "/images/pergolas-3.jpg",
  heroTagline:
    "Licensed pergola installers across Sydney's North Shore - established suburbs, quality craftsmanship, Turramurra-based team.",
  introImage: "/images/pergolas-5.jpg",
  whyChooseImage: "/images/curved-roofs.jpg",
  processImage: "/images/patios.jpg",
  aboutArea: [
    "Sydney's North Shore combines established residential streets, mature gardens, and homes with strong architectural identity. Outdoor additions here are usually expected to feel permanent, refined, and consistent with existing built character. Homeowners in this region usually prioritise design restraint and enduring quality over short-term style trends.",
    "The area includes both Upper and Lower North Shore contexts, with varied lot sizes and streetscapes, but common client priorities include quality workmanship, architectural fit, and practical everyday use. As a result, we spend time refining proportion and finish choices so the pergola reads as part of the original property.",
    "Tree coverage and long-term property ownership patterns also influence project decisions, especially where homeowners want structures that age well and remain visually appropriate over many years. That long-view mindset is common in North Shore suburbs with established gardens and legacy housing stock.",
  ],
  whyChooseUsHere: [
    "Projects in this region are coordinated from our Turramurra office, giving us practical proximity to North Shore suburbs and a workflow suited to occupied homes where communication and cleanliness are important. Our Turramurra base also supports practical scheduling for projects where site presentation and neighbour considerations are important.",
    "We work with a wide range of property types in this area, from character homes to modern updates, and focus on pergola solutions that integrate with existing roof lines, openings, and landscape context. We help clients compare options with a focus on lifecycle value, not just upfront construction cost.",
    "For a direct conversation about your property and design options, call (02) 5849 6376. We can help define a realistic direction before detailed scope decisions are locked in. This local experience is useful when balancing architectural sensitivity with daily usability requirements.",
  ],
  localChallenges: [
    "A key challenge on the North Shore is integrating new structures with character-rich homes without creating a mismatched visual outcome. We address this through proportion, roof form discipline, and material compatibility. Character-home integration often requires disciplined detailing so new work supports, rather than competes with, existing features.",
    "Mature trees and bush-adjacent settings can affect shading, gutter loads, and maintenance access. We account for these factors early so long-term performance is not compromised. Tree coverage can influence gutter behaviour and maintenance planning more than homeowners expect at the concept stage.",
    "Heritage-adjacent considerations may also influence planning pathways in selected locations. We provide cautious guidance and recommend confirming project-specific obligations with council and qualified professionals. Addressing these factors early generally avoids rework and improves long-term performance.",
  ],
  ourProcess: [
    "Our process starts with an on-site planning session focused on architectural context, site constraints, and intended daily use. This helps establish a design brief that is both practical and visually coherent. Our process includes staged design checks so roof direction, support placement, and visual weight stay balanced.",
    "We then refine options, compare material pathways, and prepare scope detail with staged delivery planning. If approvals questions are relevant, we outline likely considerations and advise confirming requirements through formal channels. We also outline likely planning considerations in cautious terms whenever heritage context may be relevant.",
    "Construction is managed through clear milestones and communication checkpoints, so homeowners remain informed at each stage and the project runs predictably from start to finish. Throughout delivery, communication checkpoints keep decision-making clear and reduce uncertainty for occupied households.",
  ],
  nearestOffice: offices.turramurra,
  suburbs: [
    { name: "Mosman", slug: "mosman" },
    { name: "Turramurra", slug: "turramurra" },
    { name: "Wahroonga", slug: "wahroonga" },
    { name: "Pymble", slug: "pymble" },
    { name: "Lindfield", slug: "lindfield" },
    { name: "Roseville", slug: "roseville" },
    { name: "Chatswood", slug: "chatswood" },
  ],
  faqs: [
    {
      q: "How do you design pergolas that complement character homes?",
      a: "We align roof form, scale, and finishes with the existing architecture so the pergola feels integrated rather than added as an afterthought. This guidance is based on practical delivery experience across North Shore streetscapes and established home types.",
    },
    {
      q: "Can you work around mature trees and bush settings?",
      a: "Yes. We plan around canopy, root zones, and practical maintenance access to keep long-term performance reliable. This guidance is based on practical delivery experience across North Shore streetscapes and established home types.",
    },
    {
      q: "Are there heritage considerations we should discuss?",
      a: "Potentially, yes. Requirements vary by property and location, so we recommend confirming specifics with council and relevant professionals. This guidance is based on practical delivery experience across North Shore streetscapes and established home types.",
    },
    {
      q: "What materials work best for established North Shore homes?",
      a: "It depends on style and maintenance goals. We compare options based on long-term practicality as well as architectural fit. This guidance is based on practical delivery experience across North Shore streetscapes and established home types.",
    },
    {
      q: "Do you service both Upper and Lower North Shore suburbs?",
      a: "Yes. Call (02) 5849 6376 and we can confirm scheduling and next steps for your exact suburb. This guidance is based on practical delivery experience across North Shore streetscapes and established home types.",
    },
  ],
};

const NorthShore = () => <AreaTemplate config={config} />;

export default NorthShore;
