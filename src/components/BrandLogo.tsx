const BrandLogo = ({ className = "w-full h-full" }: { className?: string }) => (
  <img
    src="/images/yourlocalpoolbuilder.webp"
    alt="Your Local Pool Builder"
    className={`${className} object-contain`}
    width="600"
    height="274"
  />
);

export default BrandLogo;
