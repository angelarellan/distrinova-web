import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HomeHero } from "@/components/HomeHero";
import { AboutSplit } from "@/components/AboutSplit";
import { StatsBand } from "@/components/StatsBand";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { IndustryCard } from "@/components/IndustryCard";
import { CategoryTiles } from "@/components/CategoryTiles";
import { BrandsStrip } from "@/components/BrandsStrip";
import { Benefits } from "@/components/Benefits";
import { Marquee } from "@/components/Marquee";
import { CtaBand } from "@/components/CtaBand";
import { INDUSTRIES } from "@/lib/industries";
import { BRANDS } from "@/lib/brands";

const NORMS = ["ASME B16.5", "ASME B16.20", "DIN 2605", "DIN 2615", "DIN 2616", "DIN 2617", "JIS B2311", "EN 593", "PTFE", "AISI 316", "EPDM", "FDA"];

const link = "inline-flex items-center gap-2 text-sm font-medium text-accent-cyan hover:underline";

export default function Home() {
  return (
    <>
      <HomeHero />

      <section className="bg-ink-950 py-24 sm:py-32" aria-label="Qué ofrecemos">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="Qué ofrecemos" title="Especialización y variedad al servicio de la industria" />
            <Reveal>
              <Link href="/productos" className={link}>
                Ver todos los productos <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <CategoryTiles />
        </div>
      </section>

      <section className="bg-ink-900 py-24 sm:py-32" aria-label="Industrias">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="Industrias" title="Especialistas donde la falla no es una opción" text="Cada sector exige normas, materiales y pruebas distintas." />
            <Reveal>
              <Link href="/industrias" className={link}>
                Ver todas las industrias <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <Stagger className="mt-14 grid gap-4 lg:grid-cols-3">
            {INDUSTRIES.map((i) => (
              <StaggerItem key={i.slug} className="h-full">
                <IndustryCard industry={i} className="h-full" />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-ink-900 pb-12" aria-label="Normas y materiales">
        <Marquee items={NORMS} />
      </section>

      <StatsBand />

      <Benefits />

      <AboutSplit />

      {BRANDS.length > 0 && (
        <section className="bg-ink-950 py-20" aria-label="Marcas">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-accent-cyan">Nuestras marcas</p>
            <div className="mt-10">
              <BrandsStrip />
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
