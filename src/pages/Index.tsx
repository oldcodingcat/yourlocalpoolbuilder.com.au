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
import Contact from "@/components/Contact";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Helmet>
      <title>Your Local Pergola Installer | Pergola Builders Sydney</title>
      <meta name="description" content="Your Local Pergola Installer delivers custom pergola design and pergola installation across Sydney Metropolitan Area. Call (02) 5849 6376." />
      <meta property="og:title" content="Your Local Pergola Installer | Pergola Builders Sydney" />
      <meta property="og:description" content="Custom pergola installation, pavilions, patios and roofing structures across Sydney." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://yourlocalpergolainstaller.com.au/" />
      <meta property="og:image" content="https://yourlocalpergolainstaller.com.au/images/pergolas.jpeg" />
      <meta property="og:site_name" content="Your Local Pergola Installer" />
      <link rel="canonical" href="https://yourlocalpergolainstaller.com.au/" />
      <script
        type="application/ld+json"
      >{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Your Local Pergola Installer",
        url: "https://yourlocalpergolainstaller.com.au/",
      })}</script>
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
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingBanner />
    </div>
  </>
);

export default Index;
