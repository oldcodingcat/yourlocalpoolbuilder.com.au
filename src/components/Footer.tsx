import { Link } from "react-router-dom";
import BrandLogo from "@/components/BrandLogo";
import { services } from "@/data/services";
import { officeDisplayOrder, offices } from "@/data/offices";

const serviceFooterLabel = (slug: string, name: string) => (slug === "carpot" ? "Carports" : name);

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us/" },
  { label: "Services", to: "/service/" },
  { label: "Blog", to: "/blog/" },
  { label: "Contact", to: "/contact/" },
  { label: "Legal", to: "/legal/" },
] as const;

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-dark text-white border-t border-border">
      <div className="container-custom py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="h-16 w-[260px] mb-4">
            <BrandLogo className="h-full w-full" />
          </div>
          <p className="text-secondary text-sm">
            Custom pergola installation and outdoor structure builders across Sydney Metropolitan Area.
          </p>
        </div>
        <div>
          <h3 className="font-heading text-2xl mb-4">Services</h3>
          <ul className="space-y-1 text-secondary text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={`/${s.slug}/`} className="hover:text-primary transition-colors">
                  {serviceFooterLabel(s.slug, s.name)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-heading text-2xl mb-4">Quick Links</h3>
          <ul className="space-y-1 text-secondary text-sm">
            {quickLinks.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-primary transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-heading text-2xl mb-4">Contact</h3>
          <a href="tel:+61258496376" className="text-secondary hover:text-primary transition-colors">
            (02) 5849 6376
          </a>
          <ul className="mt-4 space-y-1 text-secondary text-sm">
            {officeDisplayOrder.map((officeKey) => (
              <li key={officeKey}>
                {offices[officeKey].name}: {offices[officeKey].address}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container-custom py-6 border-t border-border text-secondary text-sm">© {year} Your Local Pergola Installer</div>
    </footer>
  );
};

export default Footer;
