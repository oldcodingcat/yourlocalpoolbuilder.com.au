const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/insulated-roofs.webp"
          alt="Custom pergola and outdoor living space in Sydney"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(5,5,5,0.85)] via-[rgba(5,5,5,0.60)] to-[rgba(5,5,5,0.40)]"></div>
      <div className="relative z-10 h-full flex items-end pb-20 md:pb-28 pl-8 md:pl-16 lg:pl-24 xl:pl-32 pr-8">
        <div className="max-w-4xl">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl tracking-wide uppercase m-0 p-0 leading-[1.2]">
            <span className="block text-white animate-slide-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>PROFESSIONAL</span>
            <span className="block animate-slide-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards", background: "linear-gradient(135deg, #D4A84B 0%, #6B5010 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>PERGOLA INSTALLATION</span>
            <span className="block text-white animate-slide-up opacity-0" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>SERVICES</span>
          </h1>
          <p className="font-body font-light text-white/90 text-lg leading-relaxed mt-10 max-w-lg animate-slide-up opacity-0" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
            Licensed pergola installers serving Sydney Metropolitan Area. From custom pergolas to insulated roofs and decking, we deliver premium outdoor living solutions.
          </p>
          <div className="flex items-center gap-8 mt-10 animate-slide-up opacity-0" style={{ animationDelay: "1s", animationFillMode: "forwards" }}>
            <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="font-body font-medium text-base tracking-wide bg-primary text-white px-10 py-4 rounded transition-all duration-300 shadow-[0_4px_12px_rgba(74,144,164,0.3)] hover:bg-[#A0782C] hover:translate-y-[-2px] hover:shadow-[0_6px_20px_rgba(74,144,164,0.4)] uppercase">Get Started</button>
            <a href="#services" onClick={(e)=>{e.preventDefault();document.getElementById("services")?.scrollIntoView({behavior:"smooth"});}} className="font-body font-medium text-base tracking-wide text-white relative py-4 transition-colors duration-300 hover:text-primary group">Our Services<span className="absolute bottom-3 left-0 w-full h-[2px] bg-white transition-all duration-300 group-hover:bg-primary group-hover:w-[110%]"></span></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;