import { FileDown, Mail } from "lucide-react";
import { Reveal } from "./Reveal";
import { SITE } from "@/lib/site";

export function CtaBand({ title = "¿Necesitás cotizar un insumo?", text = "Contanos qué necesitás y te respondemos con la ficha técnica y disponibilidad." }: { title?: string; text?: string }) {
  return (
    <section className="bg-ink-950 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-dark via-brand to-brand-dark p-8 sm:p-14">
            <div className="grid-tech absolute inset-0 opacity-50 [mask-image:linear-gradient(to_left,black,transparent)]" aria-hidden="true" />
            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl">{title}</h2>
                <p className="mt-3 text-blue-50/90">{text}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href={`mailto:${SITE.email}`} className="btn btn-light">
                  <Mail className="h-5 w-5" /> Escribinos
                </a>
                <a href={SITE.catalogPdf} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  <FileDown className="h-4 w-4" /> Catálogo PDF
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
