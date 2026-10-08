/** Sello ISO 9001:2015 estilo medalla dorada. No afirma certificación vigente: el estado se indica aparte ("Certificación en proceso"). */
export function IsoSeal({ className }: { className?: string }) {
  const edge =
    "M 60.0,2.0 L 63.43,7.61 L 67.57,2.5 L 70.24,8.51 L 75.01,3.98 L 76.88,10.29 L 82.2,6.41 L 83.22,12.91 L 89.0,9.77 L 89.17,16.35 L 95.31,13.99 L 94.62,20.53 L 101.01,18.99 L 99.47,25.38 L 106.01,24.69 L 103.65,30.83 L 110.23,31.0 L 107.09,36.78 L 113.59,37.8 L 109.71,43.12 L 116.02,44.99 L 111.49,49.76 L 117.5,52.43 L 112.39,56.57 L 118.0,60.0 L 112.39,63.43 L 117.5,67.57 L 111.49,70.24 L 116.02,75.01 L 109.71,76.88 L 113.59,82.2 L 107.09,83.22 L 110.23,89.0 L 103.65,89.17 L 106.01,95.31 L 99.47,94.62 L 101.01,101.01 L 94.62,99.47 L 95.31,106.01 L 89.17,103.65 L 89.0,110.23 L 83.22,107.09 L 82.2,113.59 L 76.88,109.71 L 75.01,116.02 L 70.24,111.49 L 67.57,117.5 L 63.43,112.39 L 60.0,118.0 L 56.57,112.39 L 52.43,117.5 L 49.76,111.49 L 44.99,116.02 L 43.12,109.71 L 37.8,113.59 L 36.78,107.09 L 31.0,110.23 L 30.83,103.65 L 24.69,106.01 L 25.38,99.47 L 18.99,101.01 L 20.53,94.62 L 13.99,95.31 L 16.35,89.17 L 9.77,89.0 L 12.91,83.22 L 6.41,82.2 L 10.29,76.88 L 3.98,75.01 L 8.51,70.24 L 2.5,67.57 L 7.61,63.43 L 2.0,60.0 L 7.61,56.57 L 2.5,52.43 L 8.51,49.76 L 3.98,44.99 L 10.29,43.12 L 6.41,37.8 L 12.91,36.78 L 9.77,31.0 L 16.35,30.83 L 13.99,24.69 L 20.53,25.38 L 18.99,18.99 L 25.38,20.53 L 24.69,13.99 L 30.83,16.35 L 31.0,9.77 L 36.78,12.91 L 37.8,6.41 L 43.12,10.29 L 44.99,3.98 L 49.76,8.51 L 52.43,2.5 L 56.57,7.61 Z";
  return (
    <svg viewBox="0 0 120 120" role="img" aria-label="Sello ISO 9001:2015" className={className}>
      <defs>
        <linearGradient id="iso-gold" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0" stopColor="#F7E39B" />
          <stop offset="0.45" stopColor="#D4A62E" />
          <stop offset="0.5" stopColor="#C8972E" />
          <stop offset="1" stopColor="#8A5F12" />
        </linearGradient>
      </defs>
      {/* borde serrado dorado */}
      <path d={edge} fill="url(#iso-gold)" />
      {/* disco interior oscuro */}
      <circle cx="60" cy="60" r="46" fill="#111827" stroke="#E9C766" strokeWidth="2.5" />
      {/* globo */}
      <g fill="none" stroke="#E9C766" strokeWidth="1.6" opacity="0.9">
        <circle cx="60" cy="60" r="33" />
        <ellipse cx="60" cy="60" rx="12.5" ry="33" />
        <ellipse cx="60" cy="60" rx="25" ry="33" />
        <line x1="27" y1="60" x2="93" y2="60" />
        <path d="M 30 44 Q 60 54 90 44" />
        <path d="M 30 76 Q 60 66 90 76" />
      </g>
      {/* ISO */}
      <text x="60" y="58" textAnchor="middle" fill="#F7E39B" fontSize="27" fontWeight="800" letterSpacing="1" style={{ paintOrder: "stroke", stroke: "#3b2a06", strokeWidth: 2 }}>ISO</text>
      {/* banda 9001-2015 */}
      <rect x="20" y="66" width="80" height="16" rx="2" fill="#111827" stroke="#E9C766" strokeWidth="1" />
      <text x="60" y="78" textAnchor="middle" fill="#F7E39B" fontSize="11" fontWeight="700" letterSpacing="1">9001-2015</text>
    </svg>
  );
}
