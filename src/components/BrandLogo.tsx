const BrandLogo = ({ className = "w-full h-full" }: { className?: string }) => (
  <svg viewBox="0 0 520 120" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g fill="none" stroke="#8B6914" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" transform="translate(12 22)">
      <path d="M10 60h110" />
      <path d="M20 60V16" />
      <path d="M100 60V16" />
      <path d="M12 18h96" />
      <path d="M28 10l22 8" />
      <path d="M92 10l-22 8" />
    </g>
    <text x="150" y="52" fill="#FFFFFF" fontFamily="Inter, system-ui, sans-serif" fontWeight="700" fontSize="30">
      Your Local Pergola
    </text>
    <text x="150" y="86" fill="#8B6914" fontFamily="Inter, system-ui, sans-serif" fontWeight="600" fontSize="26">
      Installer
    </text>
  </svg>
);

export default BrandLogo;
