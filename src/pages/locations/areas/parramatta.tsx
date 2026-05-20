import AreaTemplate, { AreaConfig } from "@/components/locations/AreaTemplate";
import { offices } from "@/data/offices";

const config: AreaConfig = {
  area: "Parramatta",
  slug: "parramatta",
  heroImage: "/images/pergolas-5.jpg",
  heroTagline:
    "Pergola installers serving the Parramatta area - from our Epping office, we cover Parramatta CBD, Westmead, Rydalmere and surrounds.",
  introImage: "/images/flat-roof.jpg",
  whyChooseImage: "/images/patios.jpg",
  processImage: "/images/pergolas-3.jpg",
  aboutArea: [
    "Parramatta is Sydney's second CBD corridor, with a fast-changing mix of established homes, townhouses, and compact urban residential developments. This diversity creates strong demand for pergolas that improve daily outdoor use without overloading limited site space. This mixed urban-residential context often rewards disciplined design that improves comfort without consuming limited open space.",
    "Many homeowners in the area are looking to create a calmer, more functional backyard environment within denser streetscapes. Practical coverage and proportion are often more valuable than oversized structures. We therefore focus on practical proportions and clean integration with the existing home footprint.",
    "Because property types vary widely across nearby suburbs, site-specific design remains essential for achieving both usability and visual cohesion. That approach works well across both established houses and newer courtyard-oriented developments.",
  ],
  whyChooseUsHere: [
    "Parramatta-area work is coordinated from our Epping office, which supports efficient local scheduling and responsive communication through each phase of the project. Epping-based coordination helps us maintain responsive communication and realistic staging across nearby suburbs.",
    "We regularly deliver pergolas for both family homes and more compact courtyard-style properties, helping clients choose options that suit real spatial limits while maintaining strong design quality. We regularly support clients who need clarity on options before committing to a full construction scope.",
    "If you are planning an upgrade and want practical guidance first, call (02) 5849 6376 and we can discuss suitable pathways before final scope is confirmed. Early alignment usually reduces changes later and improves confidence in final design decisions.",
  ],
  localChallenges: [
    "Urban access and staging can be a key challenge in Parramatta projects, especially where parking, delivery timing, and neighbour interface need careful management. We plan logistics early to keep installation orderly. Urban access conditions, delivery timing, and neighbour proximity can all influence installation efficiency.",
    "Another challenge is delivering meaningful shade and comfort on smaller lots without visually crowding the backyard. We address this through proportionate design and disciplined layout planning. We plan these logistics carefully so the build remains orderly and disruption stays manageable.",
    "In mixed residential contexts, project requirements and constraints can vary. We use a cautious planning approach and encourage confirmation of any approvals obligations with council and qualified professionals. This is particularly important where lot sizes are compact and outdoor movement needs to remain functional.",
  ],
  ourProcess: [
    "We start with a consultation focused on block conditions, household routines, and desired level of coverage. This helps build a clear project brief grounded in daily practical use. Our process starts with practical goal setting around coverage, circulation, and how the space should be used daily.",
    "Then we refine options and final scope, including material pathways, roof direction, and staged delivery planning. Where approvals are relevant, we provide guidance and recommend formal verification through appropriate channels. Where approvals questions arise, we provide cautious guidance and recommend formal verification with the relevant authorities.",
    "Installation follows defined milestones with communication at each step, so homeowners can coordinate around works confidently and maintain visibility from planning to completion. Construction milestones are communicated clearly so homeowners can track progress and plan confidently throughout delivery.",
  ],
  nearestOffice: offices.epping,
  suburbs: [
    { name: "Parramatta", slug: "parramatta" },
    { name: "Westmead", slug: "westmead" },
    { name: "North Parramatta", slug: "north-parramatta" },
    { name: "Rydalmere", slug: "rydalmere" },
    { name: "Oatlands", slug: "oatlands" },
    { name: "Winston Hills", slug: "winston-hills" },
    { name: "Northmead", slug: "northmead" },
  ],
  faqs: [
    {
      q: "Do you work with townhouse and courtyard installations?",
      a: "Yes. We regularly design pergolas for compact urban lots and tailor layouts to preserve movement and comfort in tighter spaces. This reflects practical Parramatta project delivery where compact lots and urban logistics shape design choices.",
    },
    {
      q: "Can pergolas work for smaller Parramatta backyards?",
      a: "Absolutely. With proportionate planning and disciplined post placement, smaller sites can gain major usability improvements. This reflects practical Parramatta project delivery where compact lots and urban logistics shape design choices.",
    },
    {
      q: "Are you familiar with Parramatta Council approvals?",
      a: "Yes, and we recommend confirming project-specific requirements with council and qualified professionals as part of early planning. This reflects practical Parramatta project delivery where compact lots and urban logistics shape design choices.",
    },
    {
      q: "How do you handle urban access and parking during install?",
      a: "We stage delivery and installation around local access realities so the build remains efficient and minimally disruptive. This reflects practical Parramatta project delivery where compact lots and urban logistics shape design choices.",
    },
    {
      q: "Can we speak before finalising design?",
      a: "Yes. Call (02) 5849 6376 and we can review your site and practical options before moving to final scope. This reflects practical Parramatta project delivery where compact lots and urban logistics shape design choices.",
    },
  ],
};

const Parramatta = () => <AreaTemplate config={config} />;

export default Parramatta;
