import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";

const projects = [
  {
    image: "/images/yourlocalpoolbuilder-featured-works-01.webp",
    alt: "Modern concrete pool beside a Sydney home",
    title: "Modern Concrete Pool",
  },
  {
    image: "/images/yourlocalpoolbuilder-featured-works-02.webp",
    alt: "Luxury pool and outdoor entertaining area",
    title: "Luxury Outdoor Entertaining Area",
  },
  {
    image: "/images/yourlocalpoolbuilder-featured-works-03.webp",
    alt: "Premium backyard pool design",
    title: "Premium Backyard Pool Design",
  },
  {
    image: "/images/yourlocalpoolbuilder-featured-works-04.webp",
    alt: "Architectural outdoor pool and alfresco area",
    title: "Architectural Pool & Alfresco Area",
  },
  {
    image: "/images/yourlocalpoolbuilder-featured-works-05.webp",
    alt: "Pool renovation and outdoor living finish",
    title: "Pool Renovation Finish",
  },
  {
    image: "/images/yourlocalpoolbuilder-featured-works-06.webp",
    alt: "Custom pool surrounds and entertainment zone",
    title: "Custom Pool Surrounds",
  },
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeProject =
    activeIndex !== null ? projects[activeIndex] : null;

  const openLightbox = (index: number) => {
    setActiveIndex(index);
  };

  const closeLightbox = () => {
    setActiveIndex(null);
  };

  const showPrevious = () => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return current === 0 ? projects.length - 1 : current - 1;
    });
  };

  const showNext = () => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return current === projects.length - 1 ? 0 : current + 1;
    });
  };

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  return (
    <section id="projects" className="bg-[#09233C] py-18 text-white md:py-24">
      <div className="container-custom">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-eyebrow mb-4 text-primary">Featured works</p>

          <h2 className="font-heading text-4xl font-semibold leading-tight md:text-5xl">
            Recent Luxury Pool Projects
          </h2>

          <p className="mt-4 font-body text-sm leading-7 text-white/70 md:text-base">
            Explore a selection of refined custom pool builds, renovations and
            outdoor living spaces inspired by premium Sydney homes.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {projects.map((project, index) => (
            <button
              key={project.image}
              type="button"
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/3] overflow-hidden bg-white/5 text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#09233C]"
              aria-label={`Open gallery image: ${project.title}`}
            >
              <img
                src={project.image}
                alt={project.alt}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                loading="lazy"
              />

              <span className="absolute inset-0 bg-[#09233C]/0 transition duration-300 group-hover:bg-[#09233C]/45" />

              <span className="absolute inset-x-0 bottom-0 translate-y-3 bg-gradient-to-t from-[#09233C]/90 to-transparent p-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="flex items-center justify-between gap-3">
                  <span className="font-body text-sm font-semibold text-white">
                    {project.title}
                  </span>

                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-[#09233C]">
                    <Expand className="h-4 w-4" />
                  </span>
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {activeProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#03111d]/95 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Featured works gallery"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20 md:right-8 md:top-8"
            aria-label="Close gallery"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            className="absolute left-4 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20 md:left-8 md:h-12 md:w-12"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute right-4 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20 md:right-8 md:h-12 md:w-12"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div
            className="w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="overflow-hidden bg-white/5 shadow-2xl">
              <img
                src={activeProject.image}
                alt={activeProject.alt}
                className="max-h-[78vh] w-full object-contain"
              />
            </div>

            <div className="mt-4 flex flex-col gap-3 text-white md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-heading text-2xl font-semibold">
                  {activeProject.title}
                </p>
                <p className="mt-1 font-body text-sm text-white/60">
                  {activeIndex! + 1} of {projects.length}
                </p>
              </div>

              <div className="flex gap-2">
                {projects.map((project, index) => (
                  <button
                    key={project.image}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`h-14 w-20 overflow-hidden border transition ${
                      activeIndex === index
                        ? "border-primary"
                        : "border-white/15 opacity-60 hover:opacity-100"
                    }`}
                    aria-label={`View ${project.title}`}
                  >
                    <img
                      src={project.image}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;