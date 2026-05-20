import { services } from "./services";
import { areaLabels, suburbSlugs } from "./service-areas";

export const blogSlugs = [
  "pool-pergola",
  "retractable-pergola",
  "retractable-roof-pergola",
  "steel-pergola",
  "pergola-builders-near-me",
  "pergola-timber",
  "pergolas-ideas",
  "what-is-a-pergola",
  "aluminum-pergola",
  "backyard-pergola",
  "colorbond-pergola",
  "modern-pergola",
  "outdoor-pergolas",
  "pergola-attached-to-house",
  "pergola-patio",
  "pergola-roof-ideas",
  "pergola-shade-ideas",
  "how-to-attach-a-pergola-to-a-house-with-gutters",
  "how-much-does-a-pergola-cost",
  "how-to-build-a-pergola-attached-to-the-house",
  "pergola-design",
  "pergola-with-roof",
  "wooden-pergola",
  "modern-pergola-ideas",
  "cantilever-pergola",
  "pergola-brackets",
  "aluminium-pergola",
  "decks-and-pergolas",
  "patios-and-pergolas",
  "outdoor-pergola-ideas",
  "pergola-roof",
  "outdoor-pergola",
] as const;

export const baseRoutes = ["/", "/contact/", "/thank-you/", "/about-us/", "/service/", "/legal/", "/blog/"] as const;
export const areaSlugs = Object.keys(areaLabels);
export const suburbSlugsWithTurramurra = [...suburbSlugs, "turramurra"];

export const buildAllRoutes = () => [
  ...baseRoutes,
  ...services.map((service) => `/${service.slug}/`),
  ...areaSlugs.map((slug) => `/pergola-builders-${slug}/`),
  ...suburbSlugsWithTurramurra.map((slug) => `/pergola-installers-in-${slug}/`),
  ...blogSlugs.map((slug) => `/${slug}/`),
];

export const buildSitemapRoutes = () => buildAllRoutes().filter((route) => route !== "/thank-you/");
