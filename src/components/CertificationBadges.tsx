// RGPD Badge - European Union style
export const RGPDBadge = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 60 60" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* EU Stars Circle */}
    <circle cx="30" cy="30" r="28" fill="#003399" stroke="#FFD700" strokeWidth="2" />
    {/* EU Stars */}
    {[...Array(12)].map((_, i) => {
      const angle = (i * 30 - 90) * (Math.PI / 180);
      const x = 30 + 20 * Math.cos(angle);
      const y = 30 + 20 * Math.sin(angle);
      return (
        <polygon
          key={i}
          points={`${x},${y - 4} ${x + 1.5},${y - 1} ${x + 4},${y - 1} ${x + 2},${y + 1} ${x + 3},${y + 4} ${x},${y + 2} ${x - 3},${y + 4} ${x - 2},${y + 1} ${x - 4},${y - 1} ${x - 1.5},${y - 1}`}
          fill="#FFD700"
        />
      );
    })}
    {/* RGPD Text */}
    <text x="30" y="33" textAnchor="middle" fill="#FFD700" fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif">
      RGPD
    </text>
  </svg>
);

// ISO 27001 Badge - Official certification style
export const ISO27001Badge = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 60 60" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Outer ring */}
    <circle cx="30" cy="30" r="28" fill="none" stroke="#1a5f2a" strokeWidth="3" />
    <circle cx="30" cy="30" r="24" fill="#1a5f2a" />
    {/* Inner decorative ring */}
    <circle cx="30" cy="30" r="20" fill="none" stroke="#FFD700" strokeWidth="1" strokeDasharray="4 2" />
    {/* Checkmark */}
    <path d="M20 30 L27 37 L42 22" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    {/* ISO text on top arc */}
    <path id="topArc" d="M 8 30 A 22 22 0 0 1 52 30" fill="none" />
    <text fontSize="6" fill="#FFFFFF" fontWeight="bold" fontFamily="Arial, sans-serif">
      <textPath href="#topArc" startOffset="50%" textAnchor="middle">ISO 27001</textPath>
    </text>
    {/* Certified text on bottom arc */}
    <path id="bottomArc" d="M 10 38 A 22 22 0 0 0 50 38" fill="none" />
    <text fontSize="5" fill="#FFD700" fontFamily="Arial, sans-serif">
      <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">CERTIFIED</textPath>
    </text>
  </svg>
);

// CE Marking Badge - Official European Conformity style
export const CEBadge = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 60 60" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Background circle */}
    <circle cx="30" cy="30" r="28" fill="#FFFFFF" stroke="#1e3a5f" strokeWidth="2" />
    {/* Official CE marking proportions */}
    <g transform="translate(12, 18)">
      {/* C letter */}
      <path
        d="M18 12 A12 12 0 1 0 18 36 M18 12 L18 8 M18 36 L18 40"
        fill="none"
        stroke="#1e3a5f"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* E letter */}
      <path
        d="M24 12 A12 12 0 1 0 24 36 M24 24 L36 24 M24 12 L36 12 M24 36 L36 36"
        fill="none"
        stroke="#1e3a5f"
        strokeWidth="4"
        strokeLinecap="round"
        transform="translate(14, 0)"
      />
    </g>
    {/* Medical device class indicator */}
    <text x="30" y="56" textAnchor="middle" fill="#1e3a5f" fontSize="6" fontWeight="bold" fontFamily="Arial, sans-serif">
      CLASS IIa
    </text>
  </svg>
);

// Alternative simpler CE badge
export const CEBadgeSimple = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 60 60" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Background */}
    <rect x="2" y="2" width="56" height="56" rx="8" fill="#1e3a5f" />
    <rect x="5" y="5" width="50" height="50" rx="6" fill="#FFFFFF" />
    {/* CE letters */}
    <text x="30" y="38" textAnchor="middle" fill="#1e3a5f" fontSize="26" fontWeight="bold" fontFamily="Arial, sans-serif" letterSpacing="-2">
      CE
    </text>
    {/* Medical device indicator */}
    <rect x="10" y="44" width="40" height="10" rx="2" fill="#1e3a5f" />
    <text x="30" y="52" textAnchor="middle" fill="#FFFFFF" fontSize="6" fontWeight="bold" fontFamily="Arial, sans-serif">
      MEDICAL DEVICE
    </text>
  </svg>
);

// HDS (Hébergeur de Données de Santé) Badge
export const HDSBadge = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 60 60" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="28" fill="#0055A4" stroke="#EF4135" strokeWidth="2" />
    <circle cx="30" cy="30" r="22" fill="#FFFFFF" />
    {/* Cross symbol */}
    <rect x="27" y="16" width="6" height="28" fill="#EF4135" rx="1" />
    <rect x="16" y="27" width="28" height="6" fill="#EF4135" rx="1" />
    {/* HDS text */}
    <text x="30" y="55" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="bold" fontFamily="Arial, sans-serif">
      HDS
    </text>
  </svg>
);
