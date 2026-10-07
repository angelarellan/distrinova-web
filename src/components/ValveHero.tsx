/** Válvula de mariposa wafer en vista frontal: el disco abre y cierra en bucle y deja pasar el flujo. Solo SVG + CSS. */
export function ValveHero({ className }: { className?: string }) {
  const ears = [
    [-128, -128],
    [128, -128],
    [-128, 128],
    [128, 128],
  ];
  const flow = [-70, -42, -14, 14, 42, 70];
  return (
    <svg viewBox="0 0 720 580" className={className} role="img" aria-label="Animación de una válvula de mariposa abriéndose y cerrándose">
      <defs>
        <linearGradient id="vh-body" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#60A5FA" />
          <stop offset=".5" stopColor="#2563EB" />
          <stop offset="1" stopColor="#1E3A8A" />
        </linearGradient>
        <linearGradient id="vh-disc" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#F1F5F9" />
          <stop offset=".5" stopColor="#CBD5E1" />
          <stop offset="1" stopColor="#64748B" />
        </linearGradient>
        <radialGradient id="vh-glow" cx=".5" cy=".5" r=".5">
          <stop offset="0" stopColor="#38BDF8" stopOpacity=".95" />
          <stop offset="1" stopColor="#0EA5E9" stopOpacity=".15" />
        </radialGradient>
        <clipPath id="vh-bore">
          <circle cx="360" cy="320" r="118" />
        </clipPath>
      </defs>

      <g className="vh-float">
        {/* cuerpo: orejas con perforaciones + anillo */}
        {ears.map(([x, y]) => (
          <g key={`${x}${y}`}>
            <circle cx={360 + x} cy={320 + y} r="38" fill="url(#vh-body)" />
            <circle cx={360 + x} cy={320 + y} r="14" fill="#0A0F1D" />
          </g>
        ))}
        <circle cx="360" cy="320" r="176" fill="url(#vh-body)" />
        <circle cx="360" cy="320" r="176" fill="none" stroke="#fff" strokeOpacity=".18" strokeWidth="3" />
        {/* cuello del eje */}
        <rect x="334" y="96" width="52" height="68" rx="8" fill="url(#vh-body)" />
        <rect x="318" y="86" width="84" height="16" rx="6" fill="#94A3B8" />
        {/* asiento EPDM y paso */}
        <circle cx="360" cy="320" r="138" fill="#0F172A" />
        <circle cx="360" cy="320" r="118" fill="#050914" />
        {/* flujo visible al abrir */}
        <g className="vh-flow" clipPath="url(#vh-bore)">
          <circle cx="360" cy="320" r="118" fill="url(#vh-glow)" />
          {flow.map((y, i) => (
            <line key={y} x1="230" x2="490" y1={320 + y} y2={320 + y} stroke="#fff" strokeOpacity=".7" strokeWidth="3" strokeLinecap="round" strokeDasharray="22 60" className="vh-dash" style={{ animationDelay: `${-i * 0.23}s` }} />
          ))}
        </g>
        {/* disco */}
        <g className="vh-disc">
          <ellipse cx="360" cy="320" rx="112" ry="112" fill="url(#vh-disc)" />
          <ellipse cx="360" cy="320" rx="112" ry="112" fill="none" stroke="#0F172A" strokeOpacity=".35" strokeWidth="2" />
        </g>
        {/* eje */}
        <rect x="354" y="96" width="12" height="448" rx="6" fill="#475569" opacity=".9" />
        {/* palanca (paralela al disco) */}
        <g className="vh-lever">
          <rect x="190" y="52" width="340" height="24" rx="12" fill="#0B1220" />
          <rect x="190" y="52" width="120" height="24" rx="12" fill="#1E293B" />
          <circle cx="360" cy="64" r="16" fill="#94A3B8" />
        </g>
      </g>

      {/* referencias técnicas (datos del catálogo) */}
      <g fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="14" fill="#94A3B8">
        <g>
          <line x1="215" y1="196" x2="130" y2="150" stroke="#475569" />
          <text x="20" y="145">HIERRO DÚCTIL</text>
        </g>
        <g>
          <line x1="520" y1="198" x2="590" y2="150" stroke="#475569" />
          <text x="560" y="145">ASIENTO EPDM</text>
        </g>
        <g>
          <line x1="362" y1="528" x2="470" y2="552" stroke="#475569" />
          <text x="476" y="557">EJE AISI 420</text>
        </g>
        <g>
          <line x1="205" y1="470" x2="120" y2="520" stroke="#475569" />
          <text x="10" y="540">PN10 / PN16</text>
        </g>
        <text x="360" y="22" textAnchor="middle" fill="#E2E8F0" letterSpacing="3">
          <tspan className="vh-state-closed">CERRADA</tspan>
          <tspan className="vh-state-open">ABIERTA</tspan>
        </text>
      </g>
    </svg>
  );
}
