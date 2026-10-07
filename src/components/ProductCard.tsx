import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { ProductImage } from "./ProductImage";
import type { Product } from "@/lib/products";
import { waLink } from "@/lib/site";

export function ProductCard({ product: p, sizes = "(min-width:1024px) 400px, (min-width:768px) 50vw, 100vw", parallax = false }: { product: Product; sizes?: string; parallax?: boolean }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition hover:border-white/25 hover:bg-white/[0.05]">
      <Link href={`/productos/${p.id}`} className="block" aria-label={`Ver ficha técnica de ${p.name}`}>
        <div className="relative">
          <ProductImage product={p} sizes={sizes} parallax={parallax} className="transition duration-500 group-hover:brightness-95" />
          <span className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink-950/80 text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
        <div className="p-6 pb-0">
          <h3 className="font-display text-lg font-semibold leading-snug text-white">{p.name}</h3>
          <p className="mt-1 text-sm text-slate-400">{p.subtitle}</p>
          <dl className="mt-4 space-y-2 border-t border-white/10 pt-4 text-sm">
            {p.highlights.map((h) => (
              <div key={h.label} className="flex justify-between gap-4">
                <dt className="text-slate-500">{h.label}</dt>
                <dd className="text-right text-slate-200">{h.value}</dd>
              </div>
            ))}
          </dl>
          <span className="mt-4 inline-block text-sm font-medium text-accent-cyan">Ver ficha técnica completa →</span>
        </div>
      </Link>
      <div className="mt-auto p-6 pt-5">
        <a
          href={waLink(`Hola Distrinova S.R.L., quisiera consultar por el producto: ${p.name}.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-5 text-sm font-medium text-[#4ADE80] transition hover:bg-[#25D366]/20"
        >
          <MessageCircle className="h-4 w-4" /> Consultar por WhatsApp este Producto
        </a>
      </div>
    </article>
  );
}
