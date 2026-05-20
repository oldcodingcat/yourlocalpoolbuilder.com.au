import LocationTemplate, { LocationConfig } from "@/components/locations/LocationTemplate";
import { offices } from "@/data/offices";

const config: LocationConfig = {
  name: "Turramurra",
  slug: "turramurra",
  region: "North Shore",
  regionSlug: "north-shore",
  heroImage: "/images/pergolas-5.jpg",
  heroTagline:
    "Licensed pergola installers in Turramurra for pergolas, patios, roofs, and urgent repairs. Fast local response from our Princes St office.",
  intro: [
    "Turramurra combines established family homes, leafy streets, and multi-level properties that need practical outdoor building solutions built to last.",
    "Our 18 Princes St office is dedicated to Turramurra call-outs, making it easy to schedule prompt site visits for design advice, installation, and repairs.",
  ],
  introImage: "/images/sunroof.jpg",
  nearestOffice: offices.turramurraPrinces,
  coordinates: { lat: -33.7243, lng: 151.132 },
  siblings: [
    { name: "Wahroonga", slug: "wahroonga" },
    { name: "Lindfield", slug: "lindfield" },
    { name: "Roseville", slug: "roseville" },
    { name: "Normanhurst", slug: "normanhurst" },
  ],
  testimonial: {
    quote:
      "Great communication and quality workmanship. The team redesigned our old patio into a modern covered outdoor space that we now use every day.",
    name: "M. Harper",
    suburb: "Turramurra",
  },
  faqs: [
    {
      q: "Do you service all of Turramurra from the Princes St office?",
      a: "Yes. Turramurra jobs are dispatched from our Princes St office so we can cover all nearby streets quickly and consistently.",
    },
    {
      q: "Can you handle both new pergolas and upgrades?",
      a: "Yes. We design and install new pergolas and also upgrade existing structures with new roofing, posts, and decking integration.",
    },
    {
      q: "Do you provide written quotes before work starts?",
      a: "Absolutely. Every project is scoped first and you receive a clear written quote before installation starts.",
    },
  ],
  galleryImages: [
    { src: "/images/pergolas.jpeg", alt: "Pergola installation project in Turramurra backyard" },
    { src: "/images/insulated-roofs.webp", alt: "Insulated pergola roof installation in Turramurra" },
    { src: "/images/decking.jpg", alt: "Deck and pergola integration in Turramurra home" },
  ],
};

const Turramurra = () => <LocationTemplate config={config} />;

export default Turramurra;
