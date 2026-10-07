import type { Metadata } from "next";
import { FileDown } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CatalogEmbed } from "@/components/CatalogEmbed";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Catálogo",
  description: "Catálogo Distrinova Oil & Gas 2026: descargá el PDF o hojealo en formato interactivo.",
  alternates: { canonical: "/catalogo" },
};

export default function CatalogoPage() {
  return (
    <>
      <PageHero eyebrow="Catálogo 2026" title="Catálogo Oil & Gas" text="Todas las fichas técnicas en un solo documento. Descargalo en PDF o navegalo en formato flipbook." crumbs={[{ label: "Catálogo" }]} />
      <section className="bg-ink-950 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl space-y-6 px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:flex-row sm:items-center sm:p-8">
              <div>
                <h2 className="font-display text-xl font-semibold text-white">Descargar catálogo en PDF</h2>
                <p className="mt-1 text-sm text-slate-400">Versión 2026, 17 páginas. Funciona sin conexión.</p>
              </div>
              <a href={SITE.catalogPdf} download className="inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-dark px-7 font-medium text-white shadow-glow transition hover:brightness-110">
                <FileDown className="h-4 w-4" /> Descargar PDF
              </a>
            </div>
          </Reveal>
          <Reveal>
            <CatalogEmbed />
          </Reveal>
        </div>
      </section>
    </>
  );
}
