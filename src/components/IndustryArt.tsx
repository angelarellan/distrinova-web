/** Dibujo de líneas (estilo plano técnico) para el fondo de las tarjetas "Y más…" de cada industria. */
const ART: Record<string, React.ReactNode> = {
  "petroleo-gas": (
    <>
      <path d="M0 232H320" />
      {/* torres de proceso */}
      <rect x="150" y="96" width="26" height="136" rx="3" />
      <path d="M150 124h26M150 152h26M150 180h26M150 208h26" />
      <rect x="192" y="60" width="22" height="172" rx="3" />
      <path d="M192 88h22M192 116h22M192 144h22M192 172h22M192 200h22" />
      <rect x="228" y="120" width="34" height="112" rx="4" />
      <path d="M228 150h34M228 180h34" />
      {/* antorcha */}
      <path d="M118 232V72" />
      <path d="M118 72c-9-12-4-20 0-28 4 8 9 16 0 28z" />
      {/* esfera y cañería */}
      <circle cx="70" cy="196" r="26" />
      <path d="M70 222v10M44 196H0M96 196h54" />
      <path d="M262 206h58M262 222h58" />
    </>
  ),
  incendio: (
    <>
      <path d="M0 232H320" />
      {/* hidrante */}
      <path d="M190 232v-92a30 30 0 0 1 60 0v92" />
      <path d="M182 232h76M186 140h68" />
      <rect x="208" y="96" width="24" height="14" rx="3" />
      <path d="M220 96V84M210 84h20" />
      <circle cx="170" cy="178" r="13" />
      <circle cx="270" cy="178" r="13" />
      <path d="M183 178h7M250 178h7" />
      {/* llama */}
      <path d="M70 120c-26-26-8-46 4-70 6 20 30 34 24 62 8-6 12-14 12-24 14 20 10 50-14 62-16 8-42 4-26-30z" />
      {/* manguera / caño */}
      <path d="M0 214h50a18 18 0 0 1 18 18M276 214h44" />
    </>
  ),
  alimenticia: (
    <>
      <path d="M0 232H320" />
      {/* tanques inox */}
      <path d="M120 232V104a42 42 0 0 1 84 0v128" />
      <path d="M120 140h84M120 196h84" />
      <path d="M150 62V48h24v14" />
      <path d="M226 232V132a30 30 0 0 1 60 0v100" />
      <path d="M226 170h60" />
      {/* cañería con codo */}
      <path d="M0 200h56a16 16 0 0 0 16-16v-24" />
      <path d="M0 216h72a32 32 0 0 0 32-32V104" />
      <path d="M72 160V128h32" />
      {/* gota */}
      <path d="M44 120c-14-18-18-26-18-34a18 18 0 0 1 36 0c0 8-4 16-18 34z" />
    </>
  ),
};

export function IndustryArt({ slug }: { slug: string }) {
  const art = ART[slug];
  if (!art) return null;
  return (
    <svg
      viewBox="0 0 320 260"
      preserveAspectRatio="xMaxYMax meet"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="pointer-events-none absolute bottom-0 right-0 h-[58%] w-full text-accent-cyan opacity-[0.32] transition duration-500 group-hover:opacity-[0.5]"
    >
      {art}
    </svg>
  );
}

/** Dibujo de líneas genérico para el bloque "Y más…" de /productos: caño, acople ranurado, electrodo y bobina de alambre MIG. */
export function MoreArt() {
  return (
    <svg
      viewBox="0 0 420 220"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-[55%] text-accent-cyan opacity-[0.32] md:block"
      preserveAspectRatio="xMaxYMid meet"
    >
      <path d="M0 196H420" />
      {/* caño con brida */}
      <path d="M10 150h110M10 182h110" />
      <ellipse cx="10" cy="166" rx="8" ry="16" />
      <path d="M120 150a8 16 0 0 1 0 32" />
      <rect x="62" y="140" width="10" height="52" rx="2" />
      {/* acople ranurado */}
      <path d="M150 150h20M150 182h20M232 150h20M232 182h20" />
      <path d="M170 138h62v56h-62z" />
      <path d="M180 138v56M222 138v56" />
      <circle cx="201" cy="128" r="5" />
      <path d="M201 123v-8M196 115h10" />
      {/* electrodos */}
      <g transform="translate(-32 0)">
      <path d="M290 192L362 60" />
      <path d="M302 192L374 62" />
      <path d="M314 192L384 66" />
      <path d="M286 198l10-10M298 198l10-10M310 198l10-10" />
      </g>
      {/* bobina de alambre MIG */}
      <circle cx="350" cy="150" r="34" />
      <circle cx="350" cy="150" r="14" />
      <circle cx="350" cy="150" r="4" />
      <path d="M350 116v-0M316 150h-0" />
      <path d="M384 150c14 0 22 10 22 24v22" />
    </svg>
  );
}
