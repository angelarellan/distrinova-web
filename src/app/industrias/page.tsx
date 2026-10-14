import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ParallaxPhoto } from "@/components/ParallaxPhoto";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { CtaBand } from "@/components/CtaBand";
import { MoreCard } from "@/components/MoreCard";
import { INDUSTRIES } from "@/lib/industries";
import { PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "Industrias",
  description: "Insumos para Petróleo y Gas, Sistemas de Incendio e Industria Alimenticia: sellado, válvulas y accesorios de cañería.",
  alternates: { canonical: "/industrias" },
};

export default function IndustriasPage() {
  return (
    <>
      <PageHero eyebrow="Industrias" title="Especialistas donde la falla no es una opción" text="Cada sector exige normas, materiales y pruebas distintas. Estas son las líneas con las que trabajamos en cada uno." art={{ src: "/showcase/valvula-mariposa.webp", w: 900, h: 612 }} crumbs={[{ label: "Industrias" }]} />
      {INDUSTRIES.map((ind, idx) => (
        <section key={ind.slug} id={ind.slug} className={`scroll-mt-20 py-16 sm:py-24 ${idx % 2 ? "bg-ink-900" : "bg-ink-950"}`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] lg:grid-cols-2">
                <ParallaxPhoto src={ind.photo} alt={ind.photoAlt} sizes="(min-width:1024px) 600px, 100vw" className={`min-h-[18rem] rounded-none lg:min-h-[26rem] ${idx % 2 ? "lg:order-2" : ""}`} />
                <div className="flex flex-col justify-center p-8 sm:p-12">
                  <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">{ind.title}</h2>
                  <p className="mt-4 leading-relaxed text-slate-300">{ind.detail}</p>
                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {ind.specs.map((s) => (
                      <li key={s} className="flex gap-3 text-sm text-slate-300">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-cyan" aria-hidden="true" /> {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
            <h3 className="mb-6 mt-12 font-display text-2xl font-semibold text-white">Productos para {ind.title}</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {ind.productIds.map((id) => {
                const p = PRODUCTS.find((x) => x.id === id);
                return p ? <ProductCard key={id} product={p} /> : null;
              })}
              <MoreCard slug={ind.slug} items={ind.more} message={`Hola Distrinova S.R.L., quisiera consultar por otros insumos para ${ind.title}...`} />
            </div>
          </div>
        </section>
      ))}
      <CtaBand />
    </>
  );
}
