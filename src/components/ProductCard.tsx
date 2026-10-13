import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProductImage } from "./ProductImage";
import type { Product } from "@/lib/products";

export function ProductCard({ product: p, sizes = "(min-width:1024px) 400px, (min-width:768px) 50vw, 100vw", parallax = false }: { product: Product; sizes?: string; parallax?: boolean }) {
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
