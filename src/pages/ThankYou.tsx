import { Link } from "react-router-dom";
import { Helmet } from "@/lib/helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const ThankYou = () => (
  <>
    <Helmet>
      <title>Thank You | Your Local Pergola Installer</title>
      <meta
        name="description"
        content="Thanks for contacting Your Local Pergola Installer. We will be in touch shortly to discuss your project."
      />
      <meta name="robots" content="noindex, follow" />
      <meta property="og:site_name" content="Your Local Pergola Installer" />
      <meta property="og:url" content="https://yourlocalpergolainstaller.com.au/thank-you/" />
      <link rel="canonical" href="https://yourlocalpergolainstaller.com.au/thank-you/" />
    </Helmet>
    <Header />
    <main className="min-h-[60vh] bg-background pt-44 pb-20">
      <div className="container-custom max-w-3xl">
        <h1 className="font-heading text-5xl text-foreground mb-6">Thank You</h1>
        <p className="font-body font-light text-muted-foreground text-base leading-relaxed mb-8">
          Thanks for contacting Your Local Pergola Installer. We&apos;ll get back to you shortly.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg" className="rounded-lg">
            <Link to="/">Home</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-lg">
            <Link to="/contact/">Contact</Link>
          </Button>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default ThankYou;
