import { Helmet } from "@/lib/helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const ContactPage = () => (
  <>
    <Helmet>
      <title>Contact | Your Local Pergola Installer</title>
      <meta name="description" content="Contact Your Local Pergola Installer for pergola design and installation in Sydney. Call (02) 5849 6376." />
      <meta property="og:title" content="Contact | Your Local Pergola Installer" />
      <meta property="og:description" content="Contact Your Local Pergola Installer for pergola design and installation in Sydney. Call (02) 5849 6376." />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://yourlocalpergolainstaller.com.au/images/pergolas.jpeg" />
      <meta property="og:site_name" content="Your Local Pergola Installer" />
      <meta property="og:url" content="https://yourlocalpergolainstaller.com.au/contact/" />
      <script
        type="application/ld+json"
      >{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact Your Local Pergola Installer",
        url: "https://yourlocalpergolainstaller.com.au/contact/",
      })}</script>
      <link rel="canonical" href="https://yourlocalpergolainstaller.com.au/contact/" />
    </Helmet>
    <Header />
    <section className="pt-44 pb-10 bg-dark"><div className="container-custom"><h1 className="font-heading text-5xl text-white">Contact Us</h1></div></section>
    <Contact />
    <Footer />
  </>
);

export default ContactPage;
