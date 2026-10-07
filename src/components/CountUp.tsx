"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { easeOut } from "@/lib/motion";

interface Props {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

const fmt = new Intl.NumberFormat("es-AR");

/** Cuenta de 0 a `value` al entrar en pantalla. El HTML inicial ya trae el valor final (SEO / sin JS). */
export function CountUp({ value, prefix = "", suffix = "", duration = 1.6, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const reduce = useReducedMotion();
  const final = `${prefix}${fmt.format(value)}${suffix}`;

  useEffect(() => {
    const el = ref.current;
    if (!inView || reduce || !el) return;
    const controls = animate(0, value, {
      duration,
      ease: easeOut,
      onUpdate: (v) => {
        el.textContent = `${prefix}${fmt.format(Math.round(v))}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, reduce, value, prefix, suffix, duration]);

  return (
    <span ref={ref} className={className} style={{ fontVariantNumeric: "tabular-nums" }}>
      {final}
    </span>
  );
}
