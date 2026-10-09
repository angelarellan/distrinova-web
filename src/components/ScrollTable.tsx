"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Envuelve una tabla ancha: scroll horizontal con barra visible, degradados en
 * los bordes que indican que hay más contenido, y un aviso de "deslizá".
 * Los indicadores aparecen solo si la tabla realmente desborda.
 */
export function ScrollTable({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [overflow, setOverflow] = useState(false);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setOverflow(max > 2);
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft >= max - 2);
  }, []);

  useEffect(() => {
    update();
    const el = ref.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  return (
    <div className="relative">
      <div ref={ref} className="table-scroll overflow-x-auto">
        {children}
      </div>
      {/* degradados de borde */}
      <div className={cn("pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-ink-950 to-transparent transition-opacity", overflow && !atStart ? "opacity-100" : "opacity-0")} aria-hidden="true" />
      <div className={cn("pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-ink-950 to-transparent transition-opacity", overflow && !atEnd ? "opacity-100" : "opacity-0")} aria-hidden="true" />
      {overflow && !atEnd && <p className="mt-2 text-right text-xs text-slate-400 sm:hidden">Deslizá para ver toda la tabla →</p>}
    </div>
  );
}
