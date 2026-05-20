import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";
import fs from "fs";
import path from "path";

const hostname = "https://yourlocalpergolainstaller.com.au";
const serviceSlugs = ["pergola-building-and-installation","sunroof","pavillions","patios","insulated-roofs","gazebos","gable-roof","flat-roof","decking","curved-roof","carpot"];
const areaSlugs = ["northern-beaches","north-shore","hills-district","ryde","inner-west","eastern-suburbs","western-sydney","parramatta","penrith","hawkesbury","north-west-sydney","south-sydney","sutherland-shire","st-george"];
const suburbSlugs = ["mosman","dover-heights","longueville","northbridge","castlecrag","hunters-hill","roseville","lindfield","wahroonga","normanhurst","turramurra"];
const blogSlugs = ["pool-pergola","retractable-pergola","retractable-roof-pergola","steel-pergola","pergola-builders-near-me","pergola-timber","pergolas-ideas","what-is-a-pergola","aluminum-pergola","backyard-pergola","colorbond-pergola","modern-pergola","outdoor-pergolas","pergola-attached-to-house","pergola-patio","pergola-roof-ideas","pergola-shade-ideas","how-to-attach-a-pergola-to-a-house-with-gutters","how-much-does-a-pergola-cost","how-to-build-a-pergola-attached-to-the-house","pergola-design","pergola-with-roof","wooden-pergola","modern-pergola-ideas","cantilever-pergola","pergola-brackets","aluminium-pergola","decks-and-pergolas","patios-and-pergolas","outdoor-pergola-ideas","pergola-roof","outdoor-pergola"];

const routes = ["/","/contact/","/about-us/","/service/","/legal/","/blog/", ...serviceSlugs.map((s)=>`/${s}/`), ...areaSlugs.map((s)=>`/pergola-builders-${s}/`), ...suburbSlugs.map((s)=>`/pergola-installers-in-${s}/`), ...blogSlugs.map((s)=>`/${s}/`)];

async function generateSitemap() {
  const stream = new SitemapStream({ hostname });
  const links = routes.map((url) => ({ url, changefreq: "weekly", priority: url === "/" ? 1 : 0.8 }));
  const sitemap = await streamToPromise(Readable.from(links).pipe(stream));
  fs.writeFileSync(path.join(process.cwd(), "public", "sitemap.xml"), sitemap.toString());
  console.log("Sitemap generated with", routes.length, "routes");
}

generateSitemap().catch(console.error);
