import type { Metadata } from "next";
import Link from "next/link";
import { FileDown } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ProductExplorer } from "@/components/ProductExplorer";
import { ArrowUpRight } from "lucide-react";
import { waLink } from "@/lib/site";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Productos",
  description: "Empaquetaduras, juntas espiraladas, cinta PTFE, válvulas esféricas y de mariposa, codos, tees y reducciones. Fichas técnicas completas.",
  alternates: { canonical: "/productos" },
};

export default function ProductosPage() {
  return (
    <>
      <PageHero eyebrow="Productos · Oil & Gas 2026" title="Fichas técnicas a simple vista" text="Línea de sellado industrial, válvulas y accesorios de cañería. Abrí cada ficha para ver materiales, normas y dimensiones." art={{ src: "/showcase/junta-espiralada.webp", w: 900, h: 695 }} crumbs={[{ label: "Productos" }]} actions={<Link href="/catalogo" className="btn btn-outline"><FileDown className="h-5 w-5" /> Ver catálogo completo</Link>} />
      <section className="bg-ink-950 pb-24 pt-12 sm:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProductExplorer />
          <div className="mt-16 rounded-3xl border border-dashed border-white/20 bg-white/[0.02] p-8 sm:p-10">
            <p className="font-display text-3xl font-semibold text-white">Y más…</p>
            <p className="mt-2 max-w-2xl text-slate-300">También suministramos otros insumos. Consultá disponibilidad y medidas:</p>
            <ul className="mt-5 flex flex-wrap gap-3">
              {["Caños", "Acoples ranurados", "Electrodos", "Alambre para soldar MIG"].map((x) => (
                <li key={x} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white">{x}</li>
              ))}
            </ul>
            <a href={waLink("Hola Distrinova S.R.L., quisiera consultar por caños, acoples ranurados, electrodos y alambre MIG...")} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-1.5 font-semibold text-accent-cyan hover:underline">
              Consultar por WhatsApp <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
