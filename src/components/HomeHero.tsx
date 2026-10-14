"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HeroField } from "./HeroField";
import { BlueprintHero } from "./BlueprintHero";
import { easeOut } from "@/lib/motion";

export function HomeHero() {
  const item = (i: number) => ({
    initial: { opacity: 1, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay: 0.1 + i * 0.1, ease: easeOut },
  });

  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-x-clip pt-24 pb-12">
      <HeroField variant="home" />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:px-8">
        <div className="min-w-0">
        <m.p {...item(0)} className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
          <span className="h-px w-10 bg-brand" aria-hidden="true" />
          Petróleo · Gas · Sistemas de Incendio · Industria Alimenticia Y más…
        </m.p>

        <m.h1 {...item(1)} className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Insumos industriales para industrias que no pueden parar
        </m.h1>

        <m.p {...item(2)} className="mt-7 max-w-xl text-lg leading-relaxed text-slate-300 sm:text-xl">
          Distribuimos juntas industriales, válvulas y accesorios de cañería para equipos de compras, mantenimiento e ingeniería, con fichas técnicas completas y asesoramiento.
        </m.p>

        <m.div {...item(3)} className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link href="/contacto" className="btn btn-primary group">
            Solicitar cotización
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </Link>
          <Link href="/productos" className="btn btn-outline">
            Ver productos <ArrowRight className="h-5 w-5" />
          </Link>
        </m.div>
        </div>
        <div className="mx-auto w-full min-w-0 lg:max-w-none">
          <BlueprintHero />
        </div>
      </div>
    </section>
  );
}
