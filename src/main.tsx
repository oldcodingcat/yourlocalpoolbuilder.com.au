import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "@/lib/helmet";
import App from "./App.tsx";
import "./index.css";

const el = document.getElementById("root");
if (!el) {
  throw new Error("Root element #root not found");
}

const app = (
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);

if (el.innerHTML.trim().length > 0) {
  hydrateRoot(el, app);
} else {
  createRoot(el).render(app);
}
