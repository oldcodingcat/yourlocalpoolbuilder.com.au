import { Link } from "react-router-dom";
import BrandLogo from "@/components/BrandLogo";

const services = [
  { label: "Inground Pools", to: "/inground-pools/" },
  { label: "Concrete Pools", to: "/concrete-pools/" },
  { label: "Plunge Pools", to: "/plunge-pools/" },
  { label: "Pool Renovations", to: "/pool-renovations/" },
  { label: "Spas", to: "/spas/" },
];

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services/" },
  { label: "Gallery", to: "/gallery/" },
  { label: "About Us", to: "/about-us/" },
  { label: "Blog", to: "/blog/" },
  { label: "Contact Us", to: "/contact-us/" },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-[#09233C] text-white">
      <div className="container-custom grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-5 h-16 w-[260px]">
            <BrandLogo className="h-full w-full" />
          </div>
          <p className="font-body text-sm leading-7 text-white/70">
            Luxury custom pool builders creating refined concrete pools, inground pools, plunge pools, spas and pool renovations across Sydney.
          </p>
        </div>
        <div>
          <h3 className="mb-4 font-heading text-2xl font-semibold">Services</h3>
          <ul className="space-y-2 font-body text-sm text-white/70">
            {services.map((s) => (
              <li key={s.to}>
                <Link to={s.to} className="transition-colors hover:text-primary">{s.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-heading text-2xl font-semibold">Quick Links</h3>
          <ul className="space-y-2 font-body text-sm text-white/70">
            {quickLinks.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition-colors hover:text-primary">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-heading text-2xl font-semibold">Contact Us</h3>
          <a href="tel:0253013397" className="font-body text-sm text-white/70 transition-colors hover:text-primary">
            02 5301 3397
          </a>
          <p className="mt-4 font-body text-sm leading-7 text-white/70">
            Sydney, NSW<br />Luxury pool design and construction consultations by appointment.
          </p>
        </div>
      </div>
      <div className="container-custom border-t border-white/10 py-6 font-body text-sm text-white/60">
        © {year} Your Local Pool Builder. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
