/**
 * Post-build static prerender: renders each route to HTML with Helmet + app tree in #root.
 * Run after `vite build`. Uses a fresh dist/index.html template and fresh helmetContext per route.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { StaticRouter } from "react-router-dom";
import { HelmetProvider } from "../src/lib/helmet.ts";
import App from "../src/App.tsx";
import { buildAllRoutes } from "../src/data/route-catalog.ts";

globalThis.React = React;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");
const distIndexPath = path.join(distDir, "index.html");

/** Remove default SEO from Vite template <head> so Helmet is the single source per route. */
function stripDefaultSeoFromHeadInner(headInner: string): string {
  let h = headInner;
  h = h.replace(/<title[\s\S]*?<\/title>/gi, "");
  h = h.replace(/<link[^>]*\brel=["']canonical["'][^>]*>/gi, "");
  h = h.replace(/<meta\b[\s\S]*?\/>/gi, (block) => {
    if (/\bname=["']description["']/.test(block)) return "";
    if (/\bproperty=["']og:/.test(block)) return "";
    if (/\bname=["']twitter:/.test(block)) return "";
    return block;
  });
  h = h.replace(/<[^>]+data-rh=["']true["'][^>]*>/g, "");
  h = h.replace(/<script\b[^>]*data-rh=["']true["'][^>]*>[\s\S]*?<\/script>/gi, "");
  return h;
}

function injectHelmetIntoHtml(html: string, helmet: { title?: { toString(): string }; meta?: { toString(): string }; link?: { toString(): string }; script?: { toString(): string }; style?: { toString(): string }; noscript?: { toString(): string } }): string {
  return html.replace(/<head>([\s\S]*?)<\/head>/i, (_m, inner: string) => {
    const cleaned = stripDefaultSeoFromHeadInner(inner);
    const helmetChunk = [
      helmet.title?.toString() ?? "",
      helmet.meta?.toString() ?? "",
      helmet.link?.toString() ?? "",
      helmet.script?.toString() ?? "",
      helmet.style?.toString() ?? "",
      helmet.noscript?.toString() ?? "",
    ]
      .filter(Boolean)
      .join("\n");
    const compact = cleaned.replace(/\n{3,}/g, "\n\n").trim();
    return `<head>${compact ? `\n${compact}\n` : ""}${helmetChunk}\n</head>`;
  });
}

function setRootInnerHtml(html: string, appHtml: string): string {
  return html.replace(/<div id="root"><\/div>/i, `<div id="root">${appHtml}</div>`);
}

function distHtmlPathForRoute(route: string): string {
  if (route === "/") return path.join(distDir, "index.html");
  const rel = path.join(route.replace(/^\//, ""), "index.html");
  return path.join(distDir, rel);
}

function writeHtmlForRoute(route: string, html: string): void {
  const outPath = distHtmlPathForRoute(route);
  mkdirSync(path.dirname(outPath), { recursive: true });
  writeFileSync(outPath, html, "utf8");
}

function main(): void {
  if (!existsSync(distIndexPath)) {
    console.error("Missing dist/index.html — run vite build first.");
    process.exit(1);
  }

  const cleanTemplate = readFileSync(distIndexPath, "utf8");
  let routes = Array.from(new Set(buildAllRoutes())).sort((a, b) => {
    if (a === "/") return -1;
    if (b === "/") return 1;
    return a.localeCompare(b);
  });

  const limitRaw = process.env.PRERENDER_LIMIT;
  if (limitRaw) {
    const n = Number.parseInt(limitRaw, 10);
    if (!Number.isNaN(n) && n > 0) {
      routes = routes.slice(0, n);
      console.log(`PRERENDER_LIMIT=${n}: prerendering ${routes.length} route(s)`);
    }
  }

  let count = 0;
  for (const route of routes) {
    const helmetContext: { helmet?: Record<string, { toString(): string }> } = {};
    const template = cleanTemplate;

    const app = (
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={route}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    );

    const appHtml = renderToString(app);
    const helmet = helmetContext.helmet;
    if (!helmet) {
      console.warn(`No helmet context for route ${route}`);
    }

    let html = injectHelmetIntoHtml(template, helmet ?? {});
    html = setRootInnerHtml(html, appHtml);
    writeHtmlForRoute(route, html);
    count += 1;
    console.log("Prerendered:", route);
  }

  console.log(`Prerender complete: ${count} route(s).`);
}

main();
