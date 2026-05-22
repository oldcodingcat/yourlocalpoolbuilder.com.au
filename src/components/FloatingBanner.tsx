import { useEffect, useState } from "react";
import { ArrowRight, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";

const FloatingBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2500);
    const handleScroll = () => window.scrollY > 300 && setIsVisible(true);
    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (isClosed) return null;

  return (
    <div className={cn("fixed bottom-0 left-0 right-0 z-40 transition-all duration-700", isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0")}>
      <div className="border-t border-white/10 bg-[#09233C]/95 backdrop-blur-xl">
        <div className="container-custom relative flex flex-col items-center justify-between gap-4 py-4 md:flex-row md:py-5">
          <p className="text-center font-body text-sm font-medium text-white md:text-left">
            Planning a luxury pool in Sydney? <span className="text-primary">Request a quote today.</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 md:ml-auto">
            <a href="tel:0253013397" className="inline-flex items-center gap-2 bg-white px-5 py-3 font-body text-xs font-semibold uppercase tracking-[0.16em] text-[#09233C] transition hover:bg-primary">
              <Phone className="h-4 w-4" /> Call now
            </a>
            <a href="#quote" className="inline-flex items-center gap-2 bg-primary px-5 py-3 font-body text-xs font-semibold uppercase tracking-[0.16em] text-[#09233C] transition hover:bg-white">
              Get a quote <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <button onClick={() => setIsClosed(true)} className="absolute right-2 top-2 p-2 text-white/70 hover:text-white md:relative md:right-auto md:top-auto" aria-label="Close banner">
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloatingBanner;
