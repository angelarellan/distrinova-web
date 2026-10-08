/** Sello ISO 9001 con estética de medalla. No afirma certificación vigente: el estado se indica aparte. */
export function IsoSeal({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" role="img" aria-label="Sello ISO 9001:2015" className={className}>
      <defs>
        <linearGradient id="iso-seal-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0B5FD0" />
          <stop offset="1" stopColor="#0A1F4D" />
        </linearGradient>
        <path id="iso-seal-top" d="M 22,50 A 28,28 0 0 1 78,50" fill="none" />
      </defs>
      {/* medalla */}
      <circle cx="50" cy="50" r="47" fill="url(#iso-seal-g)" stroke="#0EA5E9" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="39" fill="none" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="1.5 3" />
      {/* texto curvo */}
      <text fill="#38BDF8" fontSize="6.5" fontWeight="700" letterSpacing="1.5">
        <textPath href="#iso-seal-top" startOffset="50%" textAnchor="middle">GESTIÓN DE CALIDAD</textPath>
      </text>
      {/* núcleo */}
      <text x="50" y="49" textAnchor="middle" fill="#ffffff" fontSize="19" fontWeight="800" letterSpacing="0.5">ISO</text>
      <text x="50" y="62" textAnchor="middle" fill="#38BDF8" fontSize="9" fontWeight="700" letterSpacing="1">9001:2015</text>
      {/* puntos decorativos */}
      <circle cx="42" cy="72" r="1.2" fill="#ffffff" fillOpacity="0.5" />
      <circle cx="50" cy="73.5" r="1.2" fill="#ffffff" fillOpacity="0.5" />
      <circle cx="58" cy="72" r="1.2" fill="#ffffff" fillOpacity="0.5" />
    </svg>
  );
}
