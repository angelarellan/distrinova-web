import Link from "next/link";
import { ArrowUpRight, ImageIcon } from "lucide-react";
import { ProductImage } from "./ProductImage";
import type { Product } from "@/lib/products";

export function ProductCard({ product: p, sizes = "(min-width:1024px) 400px, (min-width:768px) 50vw, 100vw", parallax = false }: { product: Product; sizes?: string; parallax?: boolean }) {
  // Tarjeta "armada" a la espera de foto y ficha definitivas: se muestra con sello "Próximamente" y sin enlace.
  if (p.pending) {
    return (
      <article className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-dashed border-accent-cyan/30 bg-white/[0.03] backdrop-blur-xl">
        <div className="relative">
          {p.image ? (
            <ProductImage product={p} sizes={sizes} className="opacity-90" />
          ) : (
            <div className="relative flex aspect-[4/3] w-full flex-col items-center justify-center gap-2 bg-white text-slate-400">
              <ImageIcon className="h-8 w-8" aria-hidden="true" />
              <span className="text-xs font-medium uppercase tracking-wide">Foto próximamente</span>
            </div>
          )}
          <span className="absolute left-3 top-3 rounded-full bg-accent-cyan/90 px-3 py-1 text-xs font-semibold text-ink-950">Próximamente</span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-lg font-semibold leading-snug text-white">{p.name}</h3>
          <p className="mt-1 text-sm text-slate-400">{p.subtitle}</p>
          <p className="mt-auto pt-5 text-sm font-medium text-slate-500">Ficha técnica en preparación</p>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition hover:border-white/25 hover:bg-white/[0.05]">
      <Link href={`/productos/${p.id}`} className="flex h-full flex-col">
        <div className="relative">
          <ProductImage product={p} sizes={sizes} parallax={parallax} className="transition duration-500 group-hover:brightness-95" />
          <span className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink-950/80 text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-lg font-semibold leading-snug text-white">{p.name}</h3>
          <p className="mt-1 text-sm text-slate-400">{p.subtitle}</p>
          <dl className="mt-4 space-y-2 border-t border-white/10 pt-4 text-sm">
            {p.highlights.map((h) => (
              <div key={h.label} className="flex justify-between gap-4">
                <dt className="text-slate-400">{h.label}</dt>
                <dd className="text-right text-slate-200">{h.value}</dd>
              </div>
            ))}
          </dl>
          <span className="mt-auto pt-5 text-sm font-medium text-accent-cyan">Ver ficha técnica completa →</span>
        </div>
      </Link>
    </article>
  );
}
