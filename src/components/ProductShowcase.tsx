"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { m, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { ArrowRight, Pause, Play } from "lucide-react";
import { easeOut } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface Hotspot {
  x: number; // % del ancho de la imagen
  y: number; // % del alto
  label: string;
  value: string;
}
interface Slide {
  id: string;
  tab: string;
  name: string;
  line: string;
  src: string;
  w: number;
  h: number;
  /** ancho de la pieza respecto del escenario (%) */
  scale: number;
  chips: string[];
  hotspots: Hotspot[];
}

// Datos del Catálogo Oil & Gas 2026.
const SLIDES: Slide[] = [
  {
    id: "valvula-mariposa",
    tab: "Mariposa",
    name: "Válvula de mariposa wafer",
    line: "Hierro dúctil · DN50 en adelante",
    src: "/showcase/valvula-mariposa.webp",
    w: 900,
    h: 612,
    scale: 92,
    chips: ["PN10 / PN16", "0 °C a 80 °C", "EN 593"],
    hotspots: [
      { x: 12, y: 58, label: "Asiento", value: "EPDM" },
      { x: 66, y: 24, label: "Eje", value: "AISI 420" },
      { x: 60, y: 84, label: "Cuerpo", value: "Hierro dúctil" },
    ],
  },
  {
    id: "valvula-esferica-3c-inox",
    tab: "Esférica",
    name: "Válvula esférica 3 cuerpos",
    line: "Acero inoxidable AISI 316 · roscada",
    src: "/showcase/valvula-esferica-3c-inox.webp",
    w: 900,
    h: 635,
    scale: 92,
    chips: ["1000 WOG (PN 69)", "1/4\" a 2\"", "Asientos PTFE"],
    hotspots: [
      { x: 56, y: 56, label: "Cuerpo", value: "AISI 316 (CF8M)" },
      { x: 78, y: 12, label: "Palanca", value: "AISI 304" },
      { x: 73, y: 64, label: "Conexión", value: "Roscada" },
    ],
  },
  {
    id: "junta-espiralada-cgi",
    tab: "Junta espiralada",
    name: "Junta espiralada CGI",
    line: "Aro interior SS316 · relleno de grafito",
    src: "/showcase/junta-espiralada.webp",
    w: 900,
    h: 695,
    scale: 84,
    chips: ["ASME B16.20", "Clase 150", "DN 10 a DN 3000"],
    hotspots: [
      { x: 20, y: 66, label: "Aro exterior", value: "Acero al carbono" },
      { x: 50, y: 30, label: "Espiral", value: "Grafito flexible" },
      { x: 62, y: 60, label: "Aro interior", value: "AISI 316" },
    ],
  },
  {
    id: "cinta-ptfe-expandido",
    tab: "Cinta PTFE",
    name: "Cinta de PTFE expandido",
    line: "Sellador para bridas y superficies irregulares",
    src: "/showcase/cinta-ptfe.webp",
    w: 900,
    h: 1108,
    scale: 58,
    chips: ["-100 °C a 280 °C", "pH 0 – 14", "Compatible FDA"],
    hotspots: [
      { x: 60, y: 24, label: "Material", value: "PTFE puro" },
      { x: 28, y: 76, label: "Servicio", value: "-100 a 280 °C" },
    ],
  },
];

const AUTOPLAY_MS = 5500;

export function ProductShowcase() {
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [canHover, setCanHover] = useState(false);
  const [visible, setVisible] = useState(true);
  const [armed, setArmed] = useState(false);
  const reduce = useReducedMotion();
  const root = useRef<HTMLDivElement>(null);
  const swipe = useRef<{ x: number; y: number } | null>(null);

  const rx = useSpring(useMotionValue(0), { stiffness: 120, damping: 18 });
  const ry = useSpring(useMotionValue(0), { stiffness: 120, damping: 18 });

  useEffect(() => {
    setCanHover(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
    // Las imágenes de las otras diapositivas se piden recién cuando la página terminó de cargar (así la primera tiene todo el ancho de banda).
    const arm = () => window.setTimeout(() => setArmed(true), 800);
    if (document.readyState === "complete") {
      const t = arm();
      return () => window.clearTimeout(t);
    }
    let t = 0;
    const onLoad = () => (t = arm());
    window.addEventListener("load", onLoad, { once: true });
    return () => {
      window.removeEventListener("load", onLoad);
      window.clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting));
    io.observe(el);
    const onVis = () => setVisible((v) => (document.hidden ? false : v));
    document.addEventListener("visibilitychange", onVis);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  // Autoplay solo con puntero fino (escritorio), visible y sin reduced-motion.
  const auto = playing && canHover && visible && !reduce;
  useEffect(() => {
    if (!auto) return;
    const t = window.setInterval(() => setIdx((i) => (i + 1) % SLIDES.length), AUTOPLAY_MS);
    return () => window.clearInterval(t);
  }, [auto, idx]);

  const go = useCallback((n: number) => setIdx((n + SLIDES.length) % SLIDES.length), []);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!canHover || reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 16);
    rx.set(-py * 12);
  };
  const reset = () => {
    rx.set(0);
    ry.set(0);
  };
  const onDown = (e: React.PointerEvent) => {
    swipe.current = { x: e.clientX, y: e.clientY };
  };
  const onUp = (e: React.PointerEvent) => {
    const s = swipe.current;
    swipe.current = null;
    if (!s) return;
    const dx = e.clientX - s.x;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(e.clientY - s.y) * 1.5) go(idx + (dx < 0 ? 1 : -1));
  };

  const cur = SLIDES[idx];

  return (
    <div
      ref={root}
      role="region"
      aria-roledescription="carrusel"
      aria-label="Productos destacados"
      className="w-full"
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(idx + 1);
        if (e.key === "ArrowLeft") go(idx - 1);
      }}
    >
      <div
        className="relative mx-auto aspect-[6/5] w-full max-w-[34rem] touch-pan-y select-none"
        onPointerMove={onMove}
        onPointerLeave={reset}
        onPointerDown={onDown}
        onPointerUp={onUp}
      >
        {/* resplandor, anillo técnico y sombra de contacto */}
        <div className="pointer-events-none absolute inset-[6%] rounded-full bg-[radial-gradient(circle,rgba(11,95,208,0.55),rgba(11,95,208,0)_68%)]" aria-hidden="true" />
        <svg viewBox="0 0 400 400" className="sc-ring pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
          <circle cx="200" cy="200" r="190" fill="none" stroke="#94A3B8" strokeOpacity=".28" strokeWidth="1" />
          <circle cx="200" cy="200" r="178" fill="none" stroke="#38BDF8" strokeOpacity=".55" strokeWidth="2" strokeDasharray="1.5 11.4" />
          <circle cx="200" cy="200" r="190" fill="none" stroke="#0EA5E9" strokeOpacity=".9" strokeWidth="2" strokeDasharray="38 1156" strokeLinecap="round" />
        </svg>
        <div className="pointer-events-none absolute bottom-[9%] left-[16%] right-[16%] h-[7%] rounded-[50%] bg-[radial-gradient(ellipse,rgba(0,0,0,0.55),transparent_70%)]" aria-hidden="true" />

        {SLIDES.map((s, i) => {
          const active = i === idx;
          return (
            <m.div
              key={s.id}
              role="group"
              aria-roledescription="diapositiva"
              aria-label={`${i + 1} de ${SLIDES.length}: ${s.name}`}
              aria-hidden={!active}
              initial={false}
              animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 0.92, y: active ? 0 : 14 }}
              transition={{ duration: 0.6, ease: easeOut }}
              className="absolute inset-0 flex items-center justify-center"
              style={{ pointerEvents: active ? "auto" : "none" }}
            >
              <m.div style={{ rotateX: rx, rotateY: ry, transformPerspective: 900, width: `${s.scale}%` }} className="relative">
                {(i === 0 || armed) && (
                <Image
                  src={s.src}
                  alt={s.name}
                  width={s.w}
                  height={s.h}
                  priority={i === 0}
                  sizes="(min-width:1024px) 520px, 90vw"
                  quality={80}
                  className="h-auto w-full"
                />
                )}
                {s.hotspots.map((h, k) => (
                  <span
                    key={h.label}
                    aria-hidden="true"
                    className={cn("absolute flex -translate-x-1/2 -translate-y-1/2 items-center", k === 2 && "max-sm:hidden")}
                    style={{ left: `${h.x}%`, top: `${h.y}%` }}
                  >
                    <span className="sc-dot relative block h-3 w-3 rounded-full border-2 border-white bg-accent-cyan" />
                    <span className="ml-2 whitespace-nowrap rounded-md border border-white/15 bg-ink-950/85 px-2 py-1 text-[11px] leading-tight text-slate-100 shadow-lg">
                      <span className="block font-mono text-[9px] uppercase tracking-wider text-accent-cyan">{h.label}</span>
                      {h.value}
                    </span>
                  </span>
                ))}
              </m.div>
            </m.div>
          );
        })}
      </div>

      <div className="mx-auto mt-5 max-w-[34rem]">
        <div className="flex items-start justify-between gap-4" aria-live={auto ? "off" : "polite"}>
          <div>
            <p className="font-display text-xl font-bold text-white">{cur.name}</p>
            <p className="mt-0.5 text-sm text-slate-300">{cur.line}</p>
          </div>
          <Link href={`/productos/${cur.id}`} className="btn btn-outline shrink-0">
            Ver ficha <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <ul className="mt-3 flex flex-wrap gap-2" aria-label="Datos clave">
          {cur.chips.map((c) => (
            <li key={c} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200">
              {c}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex items-center gap-2">
          <div role="tablist" aria-label="Elegir producto" className="flex min-w-0 flex-1 gap-2 overflow-x-auto pb-1">
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                role="tab"
                aria-selected={i === idx}
                onClick={() => go(i)}
                className={cn("relative h-11 shrink-0 overflow-hidden rounded-full border px-4 text-sm transition", i === idx ? "border-brand bg-brand text-white" : "border-white/15 text-slate-300 hover:text-white")}
              >
                {s.tab}
                {i === idx && auto && <span key={`${idx}-bar`} className="sc-progress absolute inset-x-0 bottom-0 h-[3px] bg-white/70" style={{ animationDuration: `${AUTOPLAY_MS}ms` }} />}
              </button>
            ))}
          </div>
          {canHover && !reduce && (
            <button
              onClick={() => setPlaying((p) => !p)}
              aria-label={playing ? "Pausar carrusel" : "Reanudar carrusel"}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-slate-200 transition hover:bg-white/10"
            >
              {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
