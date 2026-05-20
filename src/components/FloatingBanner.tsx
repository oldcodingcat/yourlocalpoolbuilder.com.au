import { useState, useEffect } from "react";
import { Phone, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const FloatingBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  useEffect(() => { const t=setTimeout(()=>setIsVisible(true),3000); const h=()=>window.scrollY>300&&setIsVisible(true); window.addEventListener("scroll",h); return ()=>{clearTimeout(t);window.removeEventListener("scroll",h);};}, []);
  if (isClosed) return null;
  return <div className={cn("fixed bottom-0 left-0 right-0 z-40 transition-all duration-700 ease-out",isVisible&&!isClosed?"translate-y-0 opacity-100":"translate-y-full opacity-0")}><div className="bg-[#111111]/95 backdrop-blur-xl border-t border-white/[0.06] relative overflow-hidden"><div className="container-custom relative z-10"><div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4 md:py-6"><p className="text-white font-body font-medium text-sm md:text-base text-center md:text-left">Need a pergola installer? <span className="text-primary">We're here to help!</span></p><div className="flex gap-3 items-center ml-auto"><Button size="lg" style={{ background: "linear-gradient(to right, #C0C0C0, #D3D3D3)", color: "#000" }} className="text-sm font-body font-semibold uppercase tracking-wide rounded group" onClick={() => (window.location.href = "tel:+61258496376")}><Phone className="mr-2 h-5 w-5 text-black" />CALL US NOW</Button><Button size="lg" className="btn-premium text-white text-sm font-body font-semibold uppercase tracking-wide rounded group" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>GET A QUOTE<ArrowRight className="ml-2 h-5 w-5" /></Button></div><button onClick={() => setIsClosed(true)} className="absolute top-2 right-2 md:relative p-2 text-white/70 hover:text-white" aria-label="Close banner"><X className="h-5 w-5" /></button></div></div></div></div>;
};

export default FloatingBanner;
