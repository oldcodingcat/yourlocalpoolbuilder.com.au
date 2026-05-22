import { Helmet } from "@/lib/helmet";
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema";
import Header from "@/components/Header";
import FloatingBanner from "@/components/FloatingBanner";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
import Projects from "@/components/Projects";
import Reviews from "@/components/Reviews";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Helmet>
      <title>Your Local Pool Builder | Luxury Pool Builders Sydney</title>
      <meta
        name="description"
        content="Your Local Pool Builder designs and builds luxury custom swimming pools, concrete pools, inground pools, plunge pools, spas and pool renovations across Sydney. Call 02 5301 3397."
      />
      <meta property="og:title" content="Your Local Pool Builder | Luxury Pool Builders Sydney" />
      <meta
        property="og:description"
        content="Luxury custom pool construction, concrete pools, plunge pools, spas and pool renovations across Sydney."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://yourlocalpoolbuilder.com.au/" />
      <meta property="og:image" content="https://yourlocalpoolbuilder.com.au/images/yourlocalpoolbuilder-01.webp" />
      <meta property="og:site_name" content="Your Local Pool Builder" />
      <link rel="canonical" href="https://yourlocalpoolbuilder.com.au/" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Your Local Pool Builder",
          url: "https://yourlocalpoolbuilder.com.au/",
        })}
      </script>
    </Helmet>
    <LocalBusinessSchema />
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Services />
        <Process />
        <Projects />
        <Reviews />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingBanner />
    </div>
  </>
);

export default Index;
