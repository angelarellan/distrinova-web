"use client";

import Image from "next/image";
import { m, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

/**
 * Pieza única del hero: una válvula esférica flotando dentro del anillo técnico.
 * Se mueve sola (flotación y anillo en CSS, solo transform) y se inclina con el puntero en escritorio.
 */
export function HeroPiece() {
  const reduce = useReducedMotion();
  const rx = useSpring(useMotionValue(0), { stiffness: 120, damping: 18 });
  const ry = useSpring(useMotionValue(0), { stiffness: 120, damping: 18 });

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 16);
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 12);
  };
  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[32rem] select-none"
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      {/* resplandor, anillo técnico y sombra de contacto */}
      <div className="pointer-events-none absolute inset-[6%] rounded-full bg-[radial-gradient(circle,rgba(11,95,208,0.55),rgba(11,95,208,0)_68%)]" aria-hidden="true" />
      <svg viewBox="0 0 400 400" className="sc-ring pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
        <circle cx="200" cy="200" r="190" fill="none" stroke="#94A3B8" strokeOpacity=".28" strokeWidth="1" />
        <circle cx="200" cy="200" r="178" fill="none" stroke="#38BDF8" strokeOpacity=".55" strokeWidth="2" strokeDasharray="1.5 11.4" />
        <circle cx="200" cy="200" r="190" fill="none" stroke="#0EA5E9" strokeOpacity=".9" strokeWidth="2" strokeDasharray="38 1156" strokeLinecap="round" />
      </svg>
      <div className="pointer-events-none absolute bottom-[8%] left-[18%] right-[18%] h-[7%] rounded-[50%] bg-[radial-gradient(ellipse,rgba(0,0,0,0.55),transparent_70%)]" aria-hidden="true" />

      <div className="absolute inset-0 flex items-center justify-center">
        <m.div style={{ rotateX: rx, rotateY: ry, transformPerspective: 900, width: "88%" }}>
          <div className="hero-piece-float">
            <Image
              src="/showcase/valvula-esferica-3c-inox.webp"
              alt="Válvula esférica de tres cuerpos en acero inoxidable"
              width={900}
              height={635}
              priority
              fetchPriority="high"
              sizes="(min-width:1024px) 460px, 80vw"
              quality={80}
              className="h-auto w-full"
            />
          </div>
        </m.div>
      </div>
    </div>
  );
}
