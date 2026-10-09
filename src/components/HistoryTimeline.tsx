"use client";

import { useRef } from "react";
import { m, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { easeOut } from "@/lib/motion";

export interface Milestone {
  when: string;
  title: string;
  text: string;
}

/** Línea de tiempo con línea que se "dibuja" al scrollear y cada hito que aparece. */
export function HistoryTimeline({ milestones }: { milestones: Milestone[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  return (
    <ol ref={ref} className="relative space-y-10 pl-8 lg:col-span-3">
      {/* riel base */}
      <span className="absolute inset-y-1.5 left-0 w-px bg-white/15" aria-hidden="true" />
      {/* progreso que se dibuja */}
      {!reduce && <m.span className="absolute inset-y-1.5 left-0 w-px origin-top bg-gradient-to-b from-accent-cyan to-brand" style={{ scaleY }} aria-hidden="true" />}
      {milestones.map((mstone, i) => (
        <li key={mstone.title} className="relative">
          <m.span
            className="absolute -left-[2.45rem] top-1.5 h-3 w-3 rounded-full border-2 border-brand bg-ink-900"
            initial={reduce ? undefined : { scale: 0, backgroundColor: "#141C30" }}
            whileInView={reduce ? undefined : { scale: 1, backgroundColor: "#38BDF8" }}
            viewport={{ once: true, margin: "-20% 0px -30% 0px" }}
            transition={{ duration: 0.4, ease: easeOut, delay: 0.1 }}
            aria-hidden="true"
          />
          <m.div
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px -20% 0px" }}
            transition={{ duration: 0.5, ease: easeOut, delay: i * 0.05 }}
          >
            <p className="font-display text-xl font-semibold text-accent-cyan">{mstone.when}</p>
            <h3 className="mt-1 font-display text-2xl font-semibold text-white">{mstone.title}</h3>
            <p className="mt-2 text-slate-400">{mstone.text}</p>
          </m.div>
        </li>
      ))}
    </ol>
  );
}
