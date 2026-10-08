import type { Metadata } from "next";
import Link from "next/link";
import { FileDown } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ProductExplorer } from "@/components/ProductExplorer";
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
        </div>
      </section>
      <CtaBand />
    </>
  );
}
