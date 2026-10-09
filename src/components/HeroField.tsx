"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Fondo unificado de los heros: rejilla técnica que se "ilumina" siguiendo el
 * puntero (spotlight) + resplandores azules con deriva lenta tipo aurora.
 * Solo anima transform/opacity y variables CSS (sin re-render de React).
 * Respeta prefers-reduced-motion (se desactiva en globals.css).
 */
export function HeroField({ variant = "home" }: { variant?: "home" | "page" }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let raf = 0;
    const parent = el.parentElement ?? el;
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const r = parent.getBoundingClientRect();
        const px = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
        const py = Math.min(1, Math.max(0, (e.clientY - r.top) / r.height));
        el.style.setProperty("--hx", `${(px * 100).toFixed(2)}%`);
        el.style.setProperty("--hy", `${(py * 100).toFixed(2)}%`);
        el.style.setProperty("--px", ((px - 0.5) * 2).toFixed(3));
        el.style.setProperty("--py", ((py - 0.5) * 2).toFixed(3));
      });
    };
    const onLeave = () => {
      el.style.setProperty("--hx", "70%");
      el.style.setProperty("--hy", "40%");
      el.style.setProperty("--px", "0");
      el.style.setProperty("--py", "0");
    };
    parent.addEventListener("pointermove", onMove);
    parent.addEventListener("pointerleave", onLeave);
    return () => {
      parent.removeEventListener("pointermove", onMove);
      parent.removeEventListener("pointerleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const intensity = variant === "home" ? 1 : 0.7;

  return (
    <div
      ref={ref}
      className="hero-field absolute inset-0 -z-10 overflow-hidden bg-ink-950"
      aria-hidden="true"
      style={{ ["--hx" as string]: "70%", ["--hy" as string]: "40%", ["--px" as string]: 0, ["--py" as string]: 0 }}
    >
      {/* rejilla técnica base */}
      <div className="grid-tech absolute inset-0 [mask-image:radial-gradient(ellipse_at_70%_45%,black_15%,transparent_70%)]" />
      {/* rejilla que se enciende bajo el puntero (spotlight) */}
      <div
        className="grid-tech absolute inset-0 opacity-70"
        style={{
          WebkitMaskImage: "radial-gradient(240px circle at var(--hx) var(--hy), black, transparent 72%)",
          maskImage: "radial-gradient(240px circle at var(--hx) var(--hy), black, transparent 72%)",
          backgroundImage:
            "linear-gradient(to right, rgba(56,189,248,0.45) 1px, transparent 1px), linear-gradient(to bottom, rgba(56,189,248,0.45) 1px, transparent 1px)",
        }}
      />
      {/* brillo que sigue al puntero */}
      <div
        className="absolute inset-0 transition-[background] duration-200"
        style={{ background: `radial-gradient(260px circle at var(--hx) var(--hy), rgba(56,189,248,${0.1 * intensity}), transparent 70%)` }}
      />
      {/* aurora: resplandores con deriva lenta */}
      <div className={cn("aurora-a absolute -right-24 top-1/4 rounded-full bg-brand/25 blur-[140px]", variant === "home" ? "h-[560px] w-[640px]" : "h-96 w-[30rem]")} style={{ opacity: intensity }} />
      <div className="aurora-b absolute -bottom-40 -left-20 h-[360px] w-[480px] rounded-full bg-brand/10 blur-[120px]" style={{ opacity: intensity }} />
      {/* degradados de borde para fundir con las secciones */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink-950 via-ink-950/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />
    </div>
  );
}
