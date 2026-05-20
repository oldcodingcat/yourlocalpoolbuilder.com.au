import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { MapPin } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      name: "Custom Pergola & Outdoor Room",
      image: "/images/pergolas.jpeg",
      type: "Pergola",
      location: "Jannali, NSW",
      alt: "Custom pergola build with roof and outdoor seating area",
    },
    {
      name: "Sunroof Over Alfresco",
      image: "/images/sunroof.jpg",
      type: "Sunroof",
      location: "Woronora, NSW",
      alt: "Sunroof installation bringing natural light to a covered outdoor area",
    },
    {
      name: "Pavilion Entertaining Area",
      image: "/images/pergolas-2.jpg",
      type: "Pavilion",
      location: "Caringbah South, NSW",
      alt: "Large pavilion structure for outdoor dining and entertaining",
    },
    {
      name: "Insulated Patio Roof",
      image: "/images/insulated-roofs.webp",
      type: "Insulated Roof",
      location: "Sydney",
      alt: "Insulated patio roof for year-round outdoor comfort",
    },
    {
      name: "Curved Roof Feature",
      image: "/images/curved-roofs.jpg",
      type: "Curved Roof",
      location: "St George",
      alt: "Curved roof pergola as an architectural outdoor feature",
    },
    {
      name: "Decking & Pergola Combo",
      image: "/images/decking.jpg",
      type: "Decking",
      location: "Sydney, NSW",
      alt: "Timber or composite decking integrated with a pergola structure",
    },
  ];
  return (
    <section id="projects" className="bg-light-bg section-padding relative overflow-hidden">
      <div className="container-custom relative z-10">
        <AnimatedSection className="text-center mb-16">
          <p className="text-eyebrow text-primary  mb-4">[ OUR WORK ]</p>
          <h2 className="font-heading text-4xl md:text-5xl tracking-wide uppercase mb-4">
            <span className="text-foreground">Recent</span> <span className="text-gradient-primary">Projects</span>
          </h2>
          <p className="text-base font-body font-light text-muted-foreground font-light max-w-2xl mx-auto">Recent pergola installation jobs completed by our local team</p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={index} animation="scale-in" delay={index * 100}>
              <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-white">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={project.image} alt={project.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute top-3 left-3">
                    <Badge className="inline-block bg-primary text-white font-body font-semibold text-[11px] uppercase tracking-wide px-3 py-1.5 rounded">{project.type}</Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-heading text-2xl tracking-wide uppercase mb-2">{project.name}</h3>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground font-body">
                    <MapPin className="h-3 w-3" />
                    <span>{project.location}</span>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
