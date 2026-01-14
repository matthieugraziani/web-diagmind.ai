// SOC 2 Type II Badge
export const SOC2Badge = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 60 60" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="28" fill="#1a237e" />
    <circle cx="30" cy="30" r="24" fill="#283593" stroke="#7c4dff" strokeWidth="2" />
    {/* Shield icon */}
    <path
      d="M30 12 L44 18 L44 30 C44 40 36 47 30 50 C24 47 16 40 16 30 L16 18 Z"
      fill="none"
      stroke="#FFFFFF"
      strokeWidth="2"
    />
    <path
      d="M24 30 L28 34 L36 26"
      fill="none"
      stroke="#7c4dff"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <text x="30" y="56" textAnchor="middle" fill="#FFFFFF" fontSize="6" fontWeight="bold" fontFamily="Arial, sans-serif">
      SOC 2 TYPE II
    </text>
  </svg>
);

// Pentest Verified Badge
export const PentestBadge = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 60 60" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="28" fill="#b71c1c" />
    <circle cx="30" cy="30" r="24" fill="#c62828" stroke="#ff5252" strokeWidth="2" />
    {/* Bug with X */}
    <ellipse cx="30" cy="28" rx="10" ry="12" fill="#FFFFFF" />
    <circle cx="26" cy="25" r="2" fill="#c62828" />
    <circle cx="34" cy="25" r="2" fill="#c62828" />
    {/* Antenna */}
    <path d="M26 18 L24 12 M34 18 L36 12" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    {/* Legs */}
    <path d="M20 24 L16 22 M20 28 L14 28 M20 32 L16 34" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    <path d="M40 24 L44 22 M40 28 L46 28 M40 32 L44 34" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    {/* X mark */}
    <path d="M26 30 L34 38 M34 30 L26 38" stroke="#c62828" strokeWidth="2.5" strokeLinecap="round" />
    <text x="30" y="56" textAnchor="middle" fill="#FFFFFF" fontSize="5" fontWeight="bold" fontFamily="Arial, sans-serif">
      PENTEST VERIFIED
    </text>
  </svg>
);

// Encryption AES-256 Badge
export const EncryptionBadge = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 60 60" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="28" fill="#004d40" />
    <circle cx="30" cy="30" r="24" fill="#00695c" stroke="#64ffda" strokeWidth="2" />
    {/* Lock icon */}
    <rect x="22" y="28" width="16" height="14" rx="2" fill="#FFFFFF" />
    <path
      d="M25 28 L25 23 C25 19 27 17 30 17 C33 17 35 19 35 23 L35 28"
      fill="none"
      stroke="#FFFFFF"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="30" cy="35" r="2" fill="#00695c" />
    <rect x="29" y="35" width="2" height="4" fill="#00695c" />
    <text x="30" y="56" textAnchor="middle" fill="#FFFFFF" fontSize="6" fontWeight="bold" fontFamily="Arial, sans-serif">
      AES-256
    </text>
  </svg>
);

// Zero Trust Badge
export const ZeroTrustBadge = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 60 60" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="28" fill="#311b92" />
    <circle cx="30" cy="30" r="24" fill="#4527a0" stroke="#b388ff" strokeWidth="2" />
    {/* Zero with slash */}
    <text x="30" y="36" textAnchor="middle" fill="#FFFFFF" fontSize="22" fontWeight="bold" fontFamily="Arial, sans-serif">
      Ø
    </text>
    <text x="30" y="56" textAnchor="middle" fill="#FFFFFF" fontSize="5" fontWeight="bold" fontFamily="Arial, sans-serif">
      ZERO TRUST
    </text>
  </svg>
);

// ANSSI Qualified Badge (French cybersecurity authority)
export const ANSSIBadge = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 60 60" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="28" fill="#0D47A1" />
    <circle cx="30" cy="30" r="24" fill="#1565C0" stroke="#82B1FF" strokeWidth="2" />
    {/* French Marianne simplified */}
    <path
      d="M30 14 L36 22 L42 24 L38 30 L40 38 L30 34 L20 38 L22 30 L18 24 L24 22 Z"
      fill="#FFFFFF"
    />
    <text x="30" y="56" textAnchor="middle" fill="#FFFFFF" fontSize="6" fontWeight="bold" fontFamily="Arial, sans-serif">
      ANSSI
    </text>
  </svg>
);

// 24/7 Monitoring Badge
export const MonitoringBadge = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 60 60" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="28" fill="#1b5e20" />
    <circle cx="30" cy="30" r="24" fill="#2e7d32" stroke="#69f0ae" strokeWidth="2" />
    {/* Eye icon */}
    <ellipse cx="30" cy="28" rx="14" ry="8" fill="none" stroke="#FFFFFF" strokeWidth="2" />
    <circle cx="30" cy="28" r="4" fill="#FFFFFF" />
    <circle cx="30" cy="28" r="2" fill="#2e7d32" />
    {/* Pulse lines */}
    <path
      d="M14 40 L20 40 L23 36 L26 44 L29 38 L32 42 L35 40 L46 40"
      fill="none"
      stroke="#69f0ae"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <text x="30" y="56" textAnchor="middle" fill="#FFFFFF" fontSize="6" fontWeight="bold" fontFamily="Arial, sans-serif">
      24/7 SOC
    </text>
  </svg>
);
