// PLACEHOLDER LEGAL TEXT - Generated as starting point only.
// NOT legal advice. Client must review and validate with a qualified
// Australian lawyer before going live.
import { Helmet } from "@/lib/helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Legal = () => (
  <>
    <Helmet>
      <title>Privacy Policy & Terms of Service | Your Local Pergola Installer</title>
      <meta
        name="description"
        content="Read the Privacy Policy and Terms of Service for Your Local Pergola Installer, including data handling, rights under Australian law, and website terms."
      />
      <meta property="og:title" content="Privacy Policy & Terms of Service | Your Local Pergola Installer" />
      <meta
        property="og:description"
        content="Privacy Policy and Terms of Service for Your Local Pergola Installer, covering personal data, consumer rights, and legal terms."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://yourlocalpergolainstaller.com.au/legal/" />
      <meta property="og:image" content="https://yourlocalpergolainstaller.com.au/images/pergolas.jpeg" />
      <meta property="og:site_name" content="Your Local Pergola Installer" />
      <link rel="canonical" href="https://yourlocalpergolainstaller.com.au/legal/" />
    </Helmet>
    <Header />
    <section className="pt-44 pb-16 bg-dark border-b border-border">
      <div className="container-custom">
        <h1 className="font-heading text-5xl md:text-6xl text-white tracking-wide uppercase mb-3">
          Privacy Policy & Terms of Service
        </h1>
        <p className="text-secondary">Last updated: 20 April 2026</p>
      </div>
    </section>

    <section className="bg-background py-14 md:py-16">
      <div className="container-custom max-w-5xl">
        <div className="bg-white border border-border/60 p-6 md:p-8 mb-10">
          <h2 className="font-heading text-3xl md:text-4xl tracking-wide uppercase mb-4">Table of Contents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="font-heading text-2xl tracking-wide uppercase mb-2">Privacy Policy</h3>
              <ol className="space-y-2 list-decimal list-inside text-muted-foreground">
                <li><a href="#privacy-introduction" className="hover:underline">Introduction</a></li>
                <li><a href="#privacy-information-we-collect" className="hover:underline">Information We Collect</a></li>
                <li><a href="#privacy-how-we-use" className="hover:underline">How We Use Your Information</a></li>
                <li><a href="#privacy-storage-security" className="hover:underline">Data Storage and Security</a></li>
                <li><a href="#privacy-sharing" className="hover:underline">Sharing Your Information</a></li>
                <li><a href="#privacy-rights" className="hover:underline">Your Rights</a></li>
                <li><a href="#privacy-cookies" className="hover:underline">Cookies and Tracking</a></li>
                <li><a href="#privacy-changes" className="hover:underline">Changes to This Policy</a></li>
                <li><a href="#privacy-contact" className="hover:underline">Contact Us</a></li>
              </ol>
            </div>
            <div>
              <h3 className="font-heading text-2xl tracking-wide uppercase mb-2">Terms of Service</h3>
              <ol className="space-y-2 list-decimal list-inside text-muted-foreground">
                <li><a href="#terms-acceptance" className="hover:underline">Acceptance of Terms</a></li>
                <li><a href="#terms-use-of-website" className="hover:underline">Use of Website</a></li>
                <li><a href="#terms-intellectual-property" className="hover:underline">Intellectual Property</a></li>
                <li><a href="#terms-disclaimer" className="hover:underline">Disclaimer of Warranties</a></li>
                <li><a href="#terms-limitation" className="hover:underline">Limitation of Liability</a></li>
                <li><a href="#terms-service-quotes" className="hover:underline">Service Quotes</a></li>
                <li><a href="#terms-governing-law" className="hover:underline">Governing Law</a></li>
                <li><a href="#terms-changes" className="hover:underline">Changes to These Terms</a></li>
              </ol>
            </div>
          </div>
        </div>

        <article className="space-y-10 text-foreground">
          <section id="privacy-introduction">
            <h2 className="font-heading text-3xl md:text-4xl tracking-wide uppercase mb-3">Privacy Policy</h2>
            <h3 className="font-heading text-2xl tracking-wide uppercase mb-2">1. Introduction</h3>
            <p className="text-muted-foreground leading-relaxed">
              Your Local Pergola Installer ("we", "our", "us") is committed to protecting your privacy. This policy explains how we collect,
              use, and protect personal information when you use <strong>yourlocalpergolainstaller.com.au</strong> and submit enquiries through our website.
              We aim to handle personal information in line with the <strong>Privacy Act 1988 (Cth)</strong> and the
              <strong> Australian Privacy Principles (APPs)</strong>.
            </p>
          </section>

          <section id="privacy-information-we-collect">
            <h3 className="font-heading text-2xl tracking-wide uppercase mb-2">2. Information We Collect</h3>
            <p className="text-muted-foreground leading-relaxed">
              When you complete our contact form, we may collect your name, email address, phone number, suburb or project location, and your
              message details. We may also collect limited technical data necessary for website operation, such as browser type and pages visited.
            </p>
          </section>

          <section id="privacy-how-we-use">
            <h3 className="font-heading text-2xl tracking-wide uppercase mb-2">3. How We Use Your Information</h3>
            <p className="text-muted-foreground leading-relaxed">
              We use your information to respond to enquiries, provide service information, prepare project discussions or quotes, improve our
              website performance, and maintain records of customer interactions. We do not sell your personal information.
            </p>
          </section>

          <section id="privacy-storage-security">
            <h3 className="font-heading text-2xl tracking-wide uppercase mb-2">4. Data Storage and Security</h3>
            <p className="text-muted-foreground leading-relaxed">
              We take reasonable steps to protect personal information from misuse, interference, loss, unauthorised access, modification, or
              disclosure. While no internet transmission is completely secure, we use reputable providers and practical safeguards to reduce risk.
            </p>
          </section>

          <section id="privacy-sharing">
            <h3 className="font-heading text-2xl tracking-wide uppercase mb-2">5. Sharing Your Information</h3>
            <p className="text-muted-foreground leading-relaxed">
              We may share information with trusted service providers only where necessary to operate our website and services, including Netlify Forms
              (for form handling), Google Maps (for location embeds), and technical service providers assisting with hosting, analytics, or support.
              We may also disclose information where required by law.
            </p>
          </section>

          <section id="privacy-rights">
            <h3 className="font-heading text-2xl tracking-wide uppercase mb-2">6. Your Rights</h3>
            <p className="text-muted-foreground leading-relaxed">
              Under Australian privacy law and the APPs, you may request access to personal information we hold about you and ask for corrections
              if information is inaccurate, out of date, incomplete, irrelevant, or misleading. To make a request, contact us using the details below.
            </p>
          </section>

          <section id="privacy-cookies">
            <h3 className="font-heading text-2xl tracking-wide uppercase mb-2">7. Cookies and Tracking</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our website may use technical cookies and similar tools required for basic site functionality, performance monitoring, and security.
              You can usually manage cookies through your browser settings.
            </p>
          </section>

          <section id="privacy-changes">
            <h3 className="font-heading text-2xl tracking-wide uppercase mb-2">8. Changes to This Policy</h3>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time to reflect legal, technical, or operational changes. The latest version is
              published on this page with the updated date shown above.
            </p>
          </section>

          <section id="privacy-contact">
            <h3 className="font-heading text-2xl tracking-wide uppercase mb-2">9. Contact Us</h3>
            <p className="text-muted-foreground leading-relaxed">
              If you have any privacy questions, please contact Your Local Pergola Installer by phone at <strong>(02) 5849 6376</strong> or through our{" "}
              <Link to="/contact/" className="text-primary hover:underline">contact form</Link>. Our principal office is located at{" "}
              <strong>1747A Pittwater Rd, Mona Vale NSW 2103</strong>.
            </p>
          </section>

          <section id="terms-acceptance" className="pt-4 border-t border-border">
            <h2 className="font-heading text-3xl md:text-4xl tracking-wide uppercase mb-3">Terms of Service</h2>
            <h3 className="font-heading text-2xl tracking-wide uppercase mb-2">1. Acceptance of Terms</h3>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using this website, you agree to these Terms of Service and applicable laws. If you do not agree, please discontinue use.
            </p>
          </section>

          <section id="terms-use-of-website">
            <h3 className="font-heading text-2xl tracking-wide uppercase mb-2">2. Use of Website</h3>
            <p className="text-muted-foreground leading-relaxed">
              You agree to use this website for lawful purposes only and not to interfere with site operations, attempt unauthorised access, or use
              content in a way that infringes rights or breaches applicable laws.
            </p>
          </section>

          <section id="terms-intellectual-property">
            <h3 className="font-heading text-2xl tracking-wide uppercase mb-2">3. Intellectual Property</h3>
            <p className="text-muted-foreground leading-relaxed">
              Unless otherwise stated, website content, branding, graphics, and text are owned by or licensed to Your Local Pergola Installer and are
              protected by intellectual property laws. You may not reproduce or redistribute material without prior written permission.
            </p>
          </section>

          <section id="terms-disclaimer">
            <h3 className="font-heading text-2xl tracking-wide uppercase mb-2">4. Disclaimer of Warranties</h3>
            <p className="text-muted-foreground leading-relaxed">
              This website is provided on an "as is" and "as available" basis. We make no express or implied warranties regarding completeness,
              reliability, or suitability of information for specific circumstances.
            </p>
          </section>

          <section id="terms-limitation">
            <h3 className="font-heading text-2xl tracking-wide uppercase mb-2">5. Limitation of Liability</h3>
            <p className="text-muted-foreground leading-relaxed">
              To the extent permitted by law, including under the <strong>Australian Consumer Law</strong>, we are not liable for indirect, incidental,
              or consequential loss arising from use of this website. Nothing in these terms excludes rights that cannot lawfully be excluded.
            </p>
          </section>

          <section id="terms-service-quotes">
            <h3 className="font-heading text-2xl tracking-wide uppercase mb-2">6. Service Quotes</h3>
            <p className="text-muted-foreground leading-relaxed">
              Information submitted through the website may be used to prepare indicative pricing or scope discussions. Quotes provided through initial
              enquiry channels are not binding contracts and may change after site inspection, design confirmation, and formal written agreement.
            </p>
          </section>

          <section id="terms-governing-law">
            <h3 className="font-heading text-2xl tracking-wide uppercase mb-2">7. Governing Law</h3>
            <p className="text-muted-foreground leading-relaxed">
              These terms are governed by the laws of <strong>New South Wales, Australia</strong>. Any disputes are subject to the courts and legal
              processes applicable in New South Wales.
            </p>
          </section>

          <section id="terms-changes">
            <h3 className="font-heading text-2xl tracking-wide uppercase mb-2">8. Changes to These Terms</h3>
            <p className="text-muted-foreground leading-relaxed">
              We may update these Terms of Service at any time. Updates take effect when published on this page. Continued use of the website after
              updates indicates acceptance of the revised terms.
            </p>
          </section>
        </article>
      </div>
    </section>
    <Footer />
  </>
);

export default Legal;
