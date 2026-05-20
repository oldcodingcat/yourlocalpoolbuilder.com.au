import { useState } from "react";
import { Phone, Mail, MapPin, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { defaultContactMapEmbedUrl, officeDisplayOrder, offices } from "@/data/offices";
import { services } from "@/data/services";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", address: "", service: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <>
      <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/thank-you/" hidden>
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="bot-field" />
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <input type="text" name="address" />
        <input type="text" name="service" />
        <textarea name="message"></textarea>
      </form>

      <section id="contact" className="bg-background section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-eyebrow text-primary mb-4">[ CONTACT US ]</p>
            <h2 className="font-heading text-4xl md:text-5xl tracking-wide uppercase mb-4">
              <span className="text-foreground">Get Your</span>{" "}
              <span className="text-gradient-primary">Free Quote</span>
            </h2>
            <p className="font-body font-light text-muted-foreground text-sm md:text-base leading-relaxed">
              Licensed pergola installers across Greater Sydney. Request a quote for custom pergolas, patios, insulated and profiled roofing, decking, carports, and other outdoor structures. We arrange site visits where needed and provide clear written scope and pricing.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-light-bg border border-gray-300 rounded-lg p-8 md:p-10">
                <form className="space-y-6" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/thank-you/">
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Don&apos;t fill this out if you&apos;re human:
                      <input name="bot-field" />
                    </label>
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="flex items-center gap-2 text-sm font-body font-medium text-foreground mb-3">
                        <User className="h-4 w-4 text-primary" />Full Name
                      </label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} required className="rounded-lg border-gray-300 bg-white h-12" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="flex items-center gap-2 text-sm font-body font-medium text-foreground mb-3">
                        <Phone className="h-4 w-4 text-primary" />Phone Number
                      </label>
                      <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required className="rounded-lg border-gray-300 bg-white h-12" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="flex items-center gap-2 text-sm font-body font-medium text-foreground mb-3">
                        <Mail className="h-4 w-4 text-primary" />Email
                      </label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="rounded-lg border-gray-300 bg-white h-12" />
                    </div>
                    <div>
                      <label htmlFor="address" className="flex items-center gap-2 text-sm font-body font-medium text-foreground mb-3">
                        <MapPin className="h-4 w-4 text-primary" />Job address (suburb)
                      </label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="rounded-lg border-gray-300 bg-white h-12"
                        placeholder="Street & suburb (or suburb only)"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="service" className="text-sm font-body font-medium text-foreground mb-3 block">
                      Project type
                    </label>
                    <select id="service" name="service" value={formData.service} onChange={handleChange as any} required className="w-full h-12 px-4 rounded-lg border border-gray-300 bg-white text-foreground font-body">
                      <option value="">Select a project type</option>
                      {services.map((s) => (
                        <option key={s.slug} value={s.slug}>
                          {s.name}
                        </option>
                      ))}
                      <option value="other">Other / not sure yet — please advise</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-body font-medium text-foreground mb-3">Project Details</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="rounded-lg border-gray-300 bg-white resize-none"
                      placeholder="Rough size, roof style if known (e.g. flat, gable, insulated), attachment to house or freestanding, timeline, and any access notes. Photos can follow after we reply."
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white text-sm font-body font-semibold uppercase tracking-wide rounded-lg h-14">
                    SEND QUOTE REQUEST
                  </Button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact details */}
              <div className="bg-light-bg border border-gray-300 rounded-lg p-8 space-y-6">
                <h3 className="font-heading text-2xl tracking-wide uppercase">Contact Information</h3>
                <p className="font-body font-light text-sm text-muted-foreground leading-relaxed">
                  Prefer a quick answer? Call with your suburb and a short description of the outdoor structure you are planning — we will outline next steps, including whether a site visit makes sense.
                </p>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                    <a href="tel:+61258496376" className="font-body font-light text-sm hover:text-primary transition-colors">(02) 5849 6376</a>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                    <p className="font-body font-light text-sm text-muted-foreground leading-relaxed">
                      Send this form with your best contact details — we typically respond within one business day and can follow up by phone to confirm scope.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
                    <p className="font-body font-light text-sm">Greater Sydney and surrounding metropolitan areas we service from our local offices.</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-heading text-lg tracking-wide uppercase mb-2">Our Offices</h4>
                  <ul className="space-y-2">
                    {officeDisplayOrder.map((officeKey) => (
                      <li key={officeKey} className="font-body font-light text-sm text-foreground">
                        {offices[officeKey].name}: {offices[officeKey].address}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Google Maps embed — same Gladesville office URL as in offices data (brand listing) */}
              <div className="rounded-lg overflow-hidden border border-gray-300">
                <iframe
                  src={defaultContactMapEmbedUrl}
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Your Local Pergola Installer — Gladesville office map"
                />
                <p className="font-body text-xs text-muted-foreground px-3 py-2 bg-muted/40 border-t border-gray-200">
                  Map reference: Gladesville office. We coordinate Greater Sydney projects from all offices listed above.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;