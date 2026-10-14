import { ArrowUpRight } from "lucide-react";
import { IndustryArt, MoreArt } from "./IndustryArt";
import { waLink } from "@/lib/site";

/** Tarjeta vertical "Y más…" (insumos bajo consulta). `slug` elige el dibujo de fondo; sin slug usa el dibujo genérico. */
export function MoreCard({ items, message, slug, intro }: { items: string[]; message: string; slug?: string; intro?: string }) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative isolate flex min-h-[26rem] flex-col overflow-hidden rounded-3xl border border-accent-cyan/25 bg-gradient-to-br from-brand-deep/60 via-ink-900 to-ink-950 p-8 transition hover:border-accent-cyan/60 sm:p-9"
    >
      <div className="grid-tech absolute inset-0 -z-10 opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" aria-hidden="true" />
      <div className="absolute -right-16 -top-16 -z-10 h-56 w-56 rounded-full bg-accent-cyan/10 blur-3xl" aria-hidden="true" />
      {slug ? <IndustryArt slug={slug} /> : <MoreArt className="pointer-events-none absolute bottom-0 left-0 h-[42%] w-full text-accent-cyan opacity-[0.32] transition duration-500 group-hover:opacity-[0.5]" />}
      <span className="relative inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent-cyan">
        <span className="h-px w-8 bg-accent-cyan" aria-hidden="true" /> Consultá
      </span>
      <p className="relative mt-4 font-display text-5xl font-bold tracking-tight text-white sm:text-6xl">
        Y <span className="bg-gradient-to-r from-accent-cyan to-blue-400 bg-clip-text text-transparent">más…</span>
      </p>
      {intro && <p className="relative mt-3 text-lg text-slate-300">{intro}</p>}
      {items.length > 0 && (
        <ul className="relative mt-5 flex flex-wrap gap-2">
          {items.map((x) => (
            <li key={x} className="rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-base font-medium text-white">{x}</li>
          ))}
        </ul>
      )}
      <span className="relative mt-6 inline-flex items-center gap-2 text-lg font-semibold text-accent-cyan">
        Consultar por WhatsApp <ArrowUpRight className="h-5 w-5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
      </span>
    </a>
  );
}
