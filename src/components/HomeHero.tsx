"use client";

import Link from "next/link";
import { useRef } from "react";
import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, BookOpen, MessageCircle } from "lucide-react";
import { HeroBackground } from "./HeroBackground";
import { ValveHero } from "./ValveHero";
import { WA_DEFAULT_MESSAGE, waLink } from "@/lib/site";
import { easeOut } from "@/lib/motion";

export function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 80]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const item = (i: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay: 0.1 + i * 0.1, ease: easeOut },
  });

  return (
    <section ref={ref} className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24">
      <HeroBackground />
      <m.div style={{ y, opacity: fade }} className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:px-8">
        <div>
        <m.p {...item(0)} className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-slate-300">
          <span className="h-px w-10 bg-brand" aria-hidden="true" />
          Petróleo · Gas · Sistemas de Incendio · Alimenticia
        </m.p>

        <m.h1 {...item(1)} className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Insumos industriales para industrias que no pueden parar
        </m.h1>

        <m.p {...item(2)} className="mt-7 max-w-xl text-lg leading-relaxed text-slate-300 sm:text-xl">
          Distribuimos sellado industrial, válvulas y accesorios de cañería con fichas técnicas completas y asesoramiento para elegir el producto correcto.
        </m.p>

        <m.div {...item(3)} className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href={waLink(WA_DEFAULT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-dark px-7 font-medium text-white shadow-glow transition hover:brightness-110"
          >
            <MessageCircle className="h-4 w-4" /> Solicitar cotización
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
          <Link href="/productos" className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 font-medium text-white backdrop-blur-xl transition hover:bg-white/10">
            <BookOpen className="h-4 w-4" /> Ver productos
          </Link>
        </m.div>
        </div>
        <m.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.3, ease: easeOut }} className="mx-auto w-full max-w-md lg:max-w-none">
          <ValveHero className="h-auto w-full" />
        </m.div>
      </m.div>
    </section>
  );
}
