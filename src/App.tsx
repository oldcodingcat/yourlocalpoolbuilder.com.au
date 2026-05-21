import { useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import About from "./pages/About";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import Legal from "./pages/Legal";
import Blog from "./pages/Blog";
import GenericLanding from "./pages/GenericLanding";
import WhatIsAPergola from "./pages/blog/what-is-a-pergola";
import PergolasIdeas from "./pages/blog/pergolas-ideas";
import BackyardPergola from "./pages/blog/backyard-pergola";
import ModernPergola from "./pages/blog/modern-pergola";
import ModernPergolaIdeas from "./pages/blog/modern-pergola-ideas";
import OutdoorPergolas from "./pages/blog/outdoor-pergolas";
import OutdoorPergolaIdeas from "./pages/blog/outdoor-pergola-ideas";
import PergolaRoofIdeas from "./pages/blog/pergola-roof-ideas";
import PergolaShadeIdeas from "./pages/blog/pergola-shade-ideas";
import OutdoorPergola from "./pages/blog/outdoor-pergola";
import PergolaDesign from "./pages/blog/pergola-design";
import AluminumPergola from "./pages/blog/aluminum-pergola";
import AluminiumPergolaSydney from "./pages/blog/aluminium-pergola";
import SteelPergola from "./pages/blog/steel-pergola";
import WoodenPergola from "./pages/blog/wooden-pergola";
import PergolaTimber from "./pages/blog/pergola-timber";
import ColorbondPergola from "./pages/blog/colorbond-pergola";
import RetractablePergola from "./pages/blog/retractable-pergola";
import RetractableRoofPergola from "./pages/blog/retractable-roof-pergola";
import CantileverPergola from "./pages/blog/cantilever-pergola";
import PergolaBrackets from "./pages/blog/pergola-brackets";
import HowToBuildAttachedPergola from "./pages/blog/how-to-build-a-pergola-attached-to-the-house";
import AttachPergolaWithGutters from "./pages/blog/how-to-attach-a-pergola-to-a-house-with-gutters";
import PergolaBuildersNearMe from "./pages/blog/pergola-builders-near-me";
import HowMuchDoesPergolaCost from "./pages/blog/how-much-does-a-pergola-cost";
import PoolPergola from "./pages/blog/pool-pergola";
import PergolaAttachedToHouse from "./pages/blog/pergola-attached-to-house";
import PergolaPatio from "./pages/blog/pergola-patio";
import PergolaWithRoof from "./pages/blog/pergola-with-roof";
import PergolaRoof from "./pages/blog/pergola-roof";
import DecksAndPergolas from "./pages/blog/decks-and-pergolas";
import PatiosAndPergolas from "./pages/blog/patios-and-pergolas";
import Turramurra from "./pages/locations/turramurra";
import Patios from "./pages/services/patios";
import PergolaBuildingAndInstallation from "./pages/services/pergola-building-and-installation";
import Sunroof from "./pages/services/sunroof";
import Pavillions from "./pages/services/pavillions";
import InsulatedRoofs from "./pages/services/insulated-roofs";
import Gazebos from "./pages/services/gazebos";
import GableRoof from "./pages/services/gable-roof";
import FlatRoof from "./pages/services/flat-roof";
import Decking from "./pages/services/decking";
import CurvedRoof from "./pages/services/curved-roof";
import Carpot from "./pages/services/carpot";
import EasternSuburbs from "./pages/locations/areas/eastern-suburbs";
import NorthernBeaches from "./pages/locations/areas/northern-beaches";
import NorthShore from "./pages/locations/areas/north-shore";
import HillsDistrict from "./pages/locations/areas/hills-district";
import Ryde from "./pages/locations/areas/ryde";
import InnerWest from "./pages/locations/areas/inner-west";
import WesternSydney from "./pages/locations/areas/western-sydney";
import Parramatta from "./pages/locations/areas/parramatta";
import Penrith from "./pages/locations/areas/penrith";
import Hawkesbury from "./pages/locations/areas/hawkesbury";
import NorthWestSydney from "./pages/locations/areas/north-west-sydney";
import SouthSydney from "./pages/locations/areas/south-sydney";
import SutherlandShire from "./pages/locations/areas/sutherland-shire";
import StGeorge from "./pages/locations/areas/st-george";
import Mosman from "./pages/locations/suburbs/mosman";
import DoverHeights from "./pages/locations/suburbs/dover-heights";
import Longueville from "./pages/locations/suburbs/longueville";
import Northbridge from "./pages/locations/suburbs/northbridge";
import Castlecrag from "./pages/locations/suburbs/castlecrag";
import HuntersHill from "./pages/locations/suburbs/hunters-hill";
import Roseville from "./pages/locations/suburbs/roseville";
import Lindfield from "./pages/locations/suburbs/lindfield";
import Wahroonga from "./pages/locations/suburbs/wahroonga";
import Normanhurst from "./pages/locations/suburbs/normanhurst";
import { services } from "@/data/services";
import { areaLabels, suburbSlugs } from "@/data/service-areas";
import { blogSlugs } from "@/data/route-catalog";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (typeof window !== "undefined") window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const queryClient = new QueryClient();
const manualServiceSlugs = new Set([
  "patios",
  "pergola-building-and-installation",
  "sunroof",
  "pavillions",
  "insulated-roofs",
  "gazebos",
  "gable-roof",
  "flat-roof",
  "decking",
  "curved-roof",
  "carpot",
]);
const genericServiceSlugs = services.filter((service) => !manualServiceSlugs.has(service.slug));
const manualAreaSlugs = new Set([
  "eastern-suburbs",
  "northern-beaches",
  "north-shore",
  "hills-district",
  "ryde",
  "inner-west",
  "western-sydney",
  "parramatta",
  "penrith",
  "hawkesbury",
  "north-west-sydney",
  "south-sydney",
  "sutherland-shire",
  "st-george",
]);
const genericAreaEntries = Object.entries(areaLabels).filter(([slug]) => !manualAreaSlugs.has(slug));
const manualSuburbSlugs = new Set([
  "mosman",
  "turramurra",
  "dover-heights",
  "longueville",
  "northbridge",
  "castlecrag",
  "hunters-hill",
  "roseville",
  "lindfield",
  "wahroonga",
  "normanhurst",
]);
const genericSuburbSlugs = suburbSlugs.filter((slug) => !manualSuburbSlugs.has(slug));
const manualBlogSlugs = new Set([
  "what-is-a-pergola",
  "pergolas-ideas",
  "backyard-pergola",
  "modern-pergola",
  "modern-pergola-ideas",
  "outdoor-pergolas",
  "outdoor-pergola-ideas",
  "pergola-roof-ideas",
  "pergola-shade-ideas",
  "outdoor-pergola",
  "pergola-design",
  "aluminum-pergola",
  "aluminium-pergola",
  "steel-pergola",
  "wooden-pergola",
  "pergola-timber",
  "colorbond-pergola",
  "retractable-pergola",
  "retractable-roof-pergola",
  "cantilever-pergola",
  "pergola-brackets",
  "how-to-build-a-pergola-attached-to-the-house",
  "how-to-attach-a-pergola-to-a-house-with-gutters",
  "pergola-builders-near-me",
  "how-much-does-a-pergola-cost",
  "pool-pergola",
  "pergola-attached-to-house",
  "pergola-patio",
  "pergola-with-roof",
  "pergola-roof",
  "decks-and-pergolas",
  "patios-and-pergolas",
]);
const genericBlogSlugs = blogSlugs.filter((slug) => !manualBlogSlugs.has(slug));

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/contact/" element={<Contact />} />
        <Route path="/contact-us/" element={<Contact />} />
        <Route path="/thank-you/" element={<ThankYou />} />
        <Route path="/about-us/" element={<About />} />
        <Route path="/service/" element={<Services />} />
        <Route path="/services/" element={<Services />} />
        <Route path="/legal/" element={<Legal />} />
        <Route path="/blog/" element={<Blog />} />

        {genericServiceSlugs.map((service) => (
          <Route
            key={service.slug}
            path={`/${service.slug}/`}
            element={
              <GenericLanding
                title={service.name}
                description={service.description}
                canonicalPath={`/${service.slug}/`}
                heroImage={service.heroImage}
              />
            }
          />
        ))}
        <Route path="/patios/" element={<Patios />} />
        <Route path="/pergola-building-and-installation/" element={<PergolaBuildingAndInstallation />} />
        <Route path="/sunroof/" element={<Sunroof />} />
        <Route path="/pavillions/" element={<Pavillions />} />
        <Route path="/insulated-roofs/" element={<InsulatedRoofs />} />
        <Route path="/gazebos/" element={<Gazebos />} />
        <Route path="/gable-roof/" element={<GableRoof />} />
        <Route path="/flat-roof/" element={<FlatRoof />} />
        <Route path="/decking/" element={<Decking />} />
        <Route path="/curved-roof/" element={<CurvedRoof />} />
        <Route path="/carpot/" element={<Carpot />} />

        {genericAreaEntries.map(([slug, label]) => (
          <Route
            key={slug}
            path={`/pergola-builders-${slug}/`}
            element={<GenericLanding title={`Pergola Builders ${label}`} description={`Professional pergola builders in ${label}, Sydney Metropolitan Area.`} canonicalPath={`/pergola-builders-${slug}/`} />}
          />
        ))}
        <Route path="/pergola-builders-eastern-suburbs/" element={<EasternSuburbs />} />
        <Route path="/pergola-builders-northern-beaches/" element={<NorthernBeaches />} />
        <Route path="/pergola-builders-north-shore/" element={<NorthShore />} />
        <Route path="/pergola-builders-hills-district/" element={<HillsDistrict />} />
        <Route path="/pergola-builders-ryde/" element={<Ryde />} />
        <Route path="/pergola-builders-inner-west/" element={<InnerWest />} />
        <Route path="/pergola-builders-western-sydney/" element={<WesternSydney />} />
        <Route path="/pergola-builders-parramatta/" element={<Parramatta />} />
        <Route path="/pergola-builders-penrith/" element={<Penrith />} />
        <Route path="/pergola-builders-hawkesbury/" element={<Hawkesbury />} />
        <Route path="/pergola-builders-north-west-sydney/" element={<NorthWestSydney />} />
        <Route path="/pergola-builders-south-sydney/" element={<SouthSydney />} />
        <Route path="/pergola-builders-sutherland-shire/" element={<SutherlandShire />} />
        <Route path="/pergola-builders-st-george/" element={<StGeorge />} />

        {genericSuburbSlugs.map((slug) => (
          <Route
            key={slug}
            path={`/pergola-installers-in-${slug}/`}
            element={<GenericLanding title={`Pergola Installers in ${slug.replace(/-/g, " ")}`} description={`Trusted pergola installers in ${slug.replace(/-/g, " ")} and surrounding Sydney suburbs.`} canonicalPath={`/pergola-installers-in-${slug}/`} />}
          />
        ))}
        <Route path="/pergola-installers-in-mosman/" element={<Mosman />} />
        <Route path="/pergola-installers-in-dover-heights/" element={<DoverHeights />} />
        <Route path="/pergola-installers-in-longueville/" element={<Longueville />} />
        <Route path="/pergola-installers-in-northbridge/" element={<Northbridge />} />
        <Route path="/pergola-installers-in-castlecrag/" element={<Castlecrag />} />
        <Route path="/pergola-installers-in-hunters-hill/" element={<HuntersHill />} />
        <Route path="/pergola-installers-in-roseville/" element={<Roseville />} />
        <Route path="/pergola-installers-in-lindfield/" element={<Lindfield />} />
        <Route path="/pergola-installers-in-wahroonga/" element={<Wahroonga />} />
        <Route path="/pergola-installers-in-normanhurst/" element={<Normanhurst />} />
        <Route path="/pergola-installers-in-turramurra/" element={<Turramurra />} />

        {genericBlogSlugs.map((slug) => (
          <Route
            key={slug}
            path={`/${slug}/`}
            element={<GenericLanding title={slug.replace(/-/g, " ")} description="Pergola planning, design and installation guide for Sydney homeowners." canonicalPath={`/${slug}/`} />}
          />
        ))}
        <Route path="/what-is-a-pergola/" element={<WhatIsAPergola />} />
        <Route path="/pergolas-ideas/" element={<PergolasIdeas />} />
        <Route path="/backyard-pergola/" element={<BackyardPergola />} />
        <Route path="/modern-pergola/" element={<ModernPergola />} />
        <Route path="/modern-pergola-ideas/" element={<ModernPergolaIdeas />} />
        <Route path="/outdoor-pergolas/" element={<OutdoorPergolas />} />
        <Route path="/outdoor-pergola-ideas/" element={<OutdoorPergolaIdeas />} />
        <Route path="/pergola-roof-ideas/" element={<PergolaRoofIdeas />} />
        <Route path="/pergola-shade-ideas/" element={<PergolaShadeIdeas />} />
        <Route path="/outdoor-pergola/" element={<OutdoorPergola />} />
        <Route path="/pergola-design/" element={<PergolaDesign />} />
        <Route path="/aluminum-pergola/" element={<AluminumPergola />} />
        <Route path="/aluminium-pergola/" element={<AluminiumPergolaSydney />} />
        <Route path="/steel-pergola/" element={<SteelPergola />} />
        <Route path="/wooden-pergola/" element={<WoodenPergola />} />
        <Route path="/pergola-timber/" element={<PergolaTimber />} />
        <Route path="/colorbond-pergola/" element={<ColorbondPergola />} />
        <Route path="/retractable-pergola/" element={<RetractablePergola />} />
        <Route path="/retractable-roof-pergola/" element={<RetractableRoofPergola />} />
        <Route path="/cantilever-pergola/" element={<CantileverPergola />} />
        <Route path="/pergola-brackets/" element={<PergolaBrackets />} />
        <Route path="/how-to-build-a-pergola-attached-to-the-house/" element={<HowToBuildAttachedPergola />} />
        <Route path="/how-to-attach-a-pergola-to-a-house-with-gutters/" element={<AttachPergolaWithGutters />} />
        <Route path="/pergola-builders-near-me/" element={<PergolaBuildersNearMe />} />
        <Route path="/how-much-does-a-pergola-cost/" element={<HowMuchDoesPergolaCost />} />
        <Route path="/pool-pergola/" element={<PoolPergola />} />
        <Route path="/pergola-attached-to-house/" element={<PergolaAttachedToHouse />} />
        <Route path="/pergola-patio/" element={<PergolaPatio />} />
        <Route path="/pergola-with-roof/" element={<PergolaWithRoof />} />
        <Route path="/pergola-roof/" element={<PergolaRoof />} />
        <Route path="/decks-and-pergolas/" element={<DecksAndPergolas />} />
        <Route path="/patios-and-pergolas/" element={<PatiosAndPergolas />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
