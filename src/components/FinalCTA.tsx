import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => (
  <section className="bg-dark text-white pt-16 pb-10 md:pt-20 md:pb-12">
    <div className="container-custom text-center">
      <h2 className="font-heading text-4xl md:text-5xl tracking-wide uppercase mb-4">
        Need Reliable Pergola Installation Help Today?
      </h2>
      <p className="text-base font-body font-light mb-6">
        Call Your Local Pergola Installer for fast, licensed service across Sydney Metropolitan Area.
      </p>
      <Button
        size="lg"
        className="btn-premium text-white text-sm font-body font-semibold uppercase tracking-wide rounded-sm"
        onClick={() => (window.location.href = "tel:+61258496376")}
      >
        CALL (02) 5849 6376 <Phone className="ml-2 h-5 w-5" />
      </Button>
    </div>
  </section>
);

export default FinalCTA;