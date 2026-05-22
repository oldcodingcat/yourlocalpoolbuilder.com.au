import { useState } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

const phoneDisplay = "02 5301 3397";
const phoneHref = "tel:0253013397";

const services = [
  { name: "Inground Pools", href: "/inground-pools/" },
  { name: "Concrete Pools", href: "/concrete-pools/" },
  { name: "Plunge Pools", href: "/plunge-pools/" },
  { name: "Pool Renovations", href: "/pool-renovations/" },
  { name: "Spas", href: "/spas/" },
];

const aboutLinks = [{ name: "Blog", href: "/blog/" }];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#09233C] backdrop-blur-sm">
      <div className="container-custom flex h-24 items-center justify-between">
        <a
          href="/"
          className="h-16 w-[220px] md:w-[260px]"
          aria-label="Your Local Pool Builder home"
        >
          <BrandLogo className="h-full w-full" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm text-white lg:flex">
          <a href="/" className="transition-colors hover:text-primary">
            Home
          </a>

          <div className="group relative">
            <a href="/services/" className="flex items-center gap-1 transition-colors hover:text-primary">
              Services <ChevronDown className="h-3.5 w-3.5" />
            </a>
            <div className="invisible absolute left-0 top-full pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="w-[300px] border border-white/10 bg-[#071b2c] p-3 shadow-xl">
                {services.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2.5 text-sm text-white/75 transition-colors hover:bg-white/[0.04] hover:text-primary"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a href="/gallery/" className="transition-colors hover:text-primary">
            Gallery
          </a>

          <div className="group relative">
            <a href="/about-us/" className="flex items-center gap-1 transition-colors hover:text-primary">
              About Us <ChevronDown className="h-3.5 w-3.5" />
            </a>
            <div className="invisible absolute left-0 top-full pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="w-[220px] border border-white/10 bg-[#071b2c] p-3 shadow-xl">
                {aboutLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2.5 text-sm text-white/75 transition-colors hover:bg-white/[0.04] hover:text-primary"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a href="/contact-us/" className="transition-colors hover:text-primary">
            Contact us
          </a>
        </nav>

        <div className="hidden items-center lg:flex">
          <a
            href={phoneHref}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm bg-primary px-5 py-3 text-xs font-semibold uppercase tracking-wide text-[#09233C] transition-all hover:bg-primary/90"
          >
            <Phone className="h-4 w-4" />
            Request Quote
          </a>
        </div>

        {/* Mobile button */}
        <button
          type="button"
          className="p-2 text-white lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="max-h-[calc(100vh-6rem)] overflow-y-auto border-t border-white/10 bg-[#09233C] lg:hidden">
          <nav className="container-custom py-6 text-white">
            <div className="space-y-1">
              <a href="/" className="block py-3 text-sm uppercase tracking-wide hover:text-primary">
                Home
              </a>

              <div>
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-3 text-sm uppercase tracking-wide hover:text-primary"
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  aria-expanded={mobileServicesOpen}
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>

                {mobileServicesOpen && (
                  <div className="border-l border-white/10 pb-3 pl-4">
                    <a href="/services/" className="block py-2 text-sm text-primary">
                      View All Services
                    </a>
                    {services.map((item) => (
                      <a key={item.href} href={item.href} className="block py-2 text-sm text-white/70 hover:text-primary">
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a href="/gallery/" className="block py-3 text-sm uppercase tracking-wide hover:text-primary">
                Gallery
              </a>

              <div>
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-3 text-sm uppercase tracking-wide hover:text-primary"
                  onClick={() => setMobileAboutOpen((v) => !v)}
                  aria-expanded={mobileAboutOpen}
                >
                  About Us
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileAboutOpen ? "rotate-180" : ""}`} />
                </button>

                {mobileAboutOpen && (
                  <div className="border-l border-white/10 pb-3 pl-4">
                    <a href="/about-us/" className="block py-2 text-sm text-primary">
                      About Us
                    </a>
                    {aboutLinks.map((item) => (
                      <a key={item.href} href={item.href} className="block py-2 text-sm text-white/70 hover:text-primary">
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a href="/contact-us/" className="block py-3 text-sm uppercase tracking-wide hover:text-primary">
                Contact us
              </a>
            </div>

            <a
              href={phoneHref}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all hover:bg-primary/90"
            >
              <Phone className="h-4 w-4" />
              Request Quote: {phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
