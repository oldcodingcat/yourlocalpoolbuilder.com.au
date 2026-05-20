import { useState } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

const services = [
  { name: "Pergola Building & Installation", href: "/pergola-building-and-installation/" },
  { name: "Patios", href: "/patios/" },
  { name: "Sunroof", href: "/sunroof/" },
  { name: "Pavilions", href: "/pavillions/" },
  { name: "Insulated Roofs", href: "/insulated-roofs/" },
  { name: "Gazebos", href: "/gazebos/" },
  { name: "Gable Roof", href: "/gable-roof/" },
  { name: "Flat Roof", href: "/flat-roof/" },
  { name: "Curved Roof", href: "/curved-roof/" },
  { name: "Decking", href: "/decking/" },
  { name: "Carports", href: "/carpot/" },
];

const locations = [
  { name: "Eastern Suburbs", href: "/pergola-builders-eastern-suburbs/" },
  { name: "Northern Beaches", href: "/pergola-builders-northern-beaches/" },
  { name: "North Shore", href: "/pergola-builders-north-shore/" },
  { name: "Hills District", href: "/pergola-builders-hills-district/" },
  { name: "Ryde", href: "/pergola-builders-ryde/" },
  { name: "Inner West", href: "/pergola-builders-inner-west/" },
  { name: "Western Sydney", href: "/pergola-builders-western-sydney/" },
  { name: "Parramatta", href: "/pergola-builders-parramatta/" },
  { name: "Penrith", href: "/pergola-builders-penrith/" },
  { name: "Hawkesbury", href: "/pergola-builders-hawkesbury/" },
  { name: "North West Sydney", href: "/pergola-builders-north-west-sydney/" },
  { name: "South Sydney", href: "/pergola-builders-south-sydney/" },
  { name: "Sutherland Shire", href: "/pergola-builders-sutherland-shire/" },
  { name: "St George", href: "/pergola-builders-st-george/" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark border-b border-border">
      <div className="container-custom h-24 flex items-center justify-between">
        <a href="/" className="h-16 w-[220px] md:w-[260px]" aria-label="Your Local Pergola Installer home">
          <BrandLogo className="h-full w-full" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm text-white">
          <a href="/" className="hover:text-primary transition-colors">Home</a>
          <a href="/about-us/" className="hover:text-primary transition-colors">About Us</a>

          <div className="relative group">
            <a href="/service/" className="flex items-center gap-1 hover:text-primary transition-colors">
              Services <ChevronDown className="h-3.5 w-3.5" />
            </a>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-0 top-full pt-4 transition-all duration-200">
              <div className="w-[320px] bg-[#111111] border border-white/10 shadow-xl p-3">
                {services.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2.5 text-sm text-white/70 hover:text-primary hover:bg-white/[0.03] transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group">
            <a href="/service/" className="flex items-center gap-1 hover:text-primary transition-colors">
              Locations <ChevronDown className="h-3.5 w-3.5" />
            </a>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-0 top-full pt-4 transition-all duration-200">
              <div className="w-[360px] bg-[#111111] border border-white/10 shadow-xl p-3 grid grid-cols-2 gap-1">
                {locations.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2.5 text-sm text-white/70 hover:text-primary hover:bg-white/[0.03] transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a href="/blog/" className="hover:text-primary transition-colors">Blog</a>
          <a href="/contact/" className="hover:text-primary transition-colors">Contact</a>
        </nav>

        <div className="hidden lg:flex items-center">
          <a
            href="tel:+61258496376"
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-5 py-3 text-xs font-semibold uppercase tracking-wide text-white transition-all hover:bg-primary/90 whitespace-nowrap"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </div>

        {/* Mobile button */}
        <button
          type="button"
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#111111] border-t border-white/10 max-h-[calc(100vh-6rem)] overflow-y-auto">
          <nav className="container-custom py-6 text-white">
            <div className="space-y-1">
              <a href="/" className="block py-3 text-sm uppercase tracking-wide hover:text-primary">Home</a>
              <a href="/about-us/" className="block py-3 text-sm uppercase tracking-wide hover:text-primary">About Us</a>

              <div>
                <button
                  type="button"
                  className="w-full flex items-center justify-between py-3 text-sm uppercase tracking-wide hover:text-primary"
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  aria-expanded={mobileServicesOpen}
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>

                {mobileServicesOpen && (
                  <div className="pl-4 pb-3 border-l border-white/10">
                    <a href="/service/" className="block py-2 text-sm text-primary">View All Services</a>
                    {services.map((item) => (
                      <a key={item.href} href={item.href} className="block py-2 text-sm text-white/65 hover:text-primary">
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <button
                  type="button"
                  className="w-full flex items-center justify-between py-3 text-sm uppercase tracking-wide hover:text-primary"
                  onClick={() => setMobileLocationsOpen((v) => !v)}
                  aria-expanded={mobileLocationsOpen}
                >
                  Locations
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileLocationsOpen ? "rotate-180" : ""}`} />
                </button>

                {mobileLocationsOpen && (
                  <div className="pl-4 pb-3 border-l border-white/10">
                    {locations.map((item) => (
                      <a key={item.href} href={item.href} className="block py-2 text-sm text-white/65 hover:text-primary">
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a href="/blog/" className="block py-3 text-sm uppercase tracking-wide hover:text-primary">Blog</a>
              <a href="/contact/" className="block py-3 text-sm uppercase tracking-wide hover:text-primary">Contact</a>
            </div>

            <a
              href="tel:+61258496376"
              className="mt-6 inline-flex items-center justify-center gap-2 w-full rounded-sm bg-primary text-white px-5 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-primary/90 transition-all"
            >
              <Phone className="h-4 w-4" />
              Call (02) 5849 6376
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;