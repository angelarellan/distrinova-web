"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";
import { easeOut } from "@/lib/motion";
import { cn } from "@/lib/utils";

const viewport = { once: true, margin: "-80px" } as const;

export function Reveal({ children, delay = 0, y = 24, className }: { children: ReactNode; delay?: number; y?: number; className?: string }) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.6, delay, ease: easeOut }}
    >
      {children}
    </m.div>
  );
}

const group = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } } };

/** Contenedor con entrada escalonada de sus <StaggerItem>. */
export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <m.div className={className} variants={group} initial="hidden" whileInView="show" viewport={viewport}>
      {children}
    </m.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <m.div className={cn(className)} variants={item}>
      {children}
    </m.div>
  );
}
