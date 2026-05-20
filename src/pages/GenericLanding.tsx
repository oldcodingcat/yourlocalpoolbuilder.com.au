import { Helmet } from "@/lib/helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Props = {
  title: string;
  description: string;
  canonicalPath: string;
  heroImage?: string;
};

const siteOrigin = "https://yourlocalpergolainstaller.com.au";

const GenericLanding = ({ title, description, canonicalPath, heroImage }: Props) => (
  <>
    <Helmet>
      <title>{`${title} | Your Local Pergola Installer`}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={`${title} | Your Local Pergola Installer`} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${siteOrigin}${canonicalPath}`} />
      <meta property="og:site_name" content="Your Local Pergola Installer" />
      {heroImage ? (
        <meta property="og:image" content={`${siteOrigin}${heroImage}`} />
      ) : null}
      <link rel="canonical" href={`${siteOrigin}${canonicalPath}`} />
    </Helmet>
    <Header />
    {heroImage ? (
      <section className="relative min-h-[45vh] flex items-end overflow-hidden pt-44 pb-16 md:pb-24">
        <div className="absolute inset-0">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(5,5,5,0.88)] via-[rgba(5,5,5,0.65)] to-[rgba(5,5,5,0.35)]" />
        </div>
        <div className="container-custom relative z-10">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-3 tracking-wide uppercase">
            {title}
          </h1>
          <p className="text-white/85 max-w-3xl font-body font-light text-base md:text-lg leading-relaxed">
            {description}
          </p>
        </div>
      </section>
    ) : (
      <section className="pt-44 pb-24 bg-dark">
        <div className="container-custom">
          <h1 className="font-heading text-5xl text-white mb-3">{title}</h1>
          <p className="text-secondary max-w-3xl">{description}</p>
        </div>
      </section>
    )}
    <Footer />
  </>
);

export default GenericLanding;
