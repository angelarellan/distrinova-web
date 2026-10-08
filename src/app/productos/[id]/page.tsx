import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, FileDown, Mail } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ProductImage } from "@/components/ProductImage";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { CATEGORY_LABEL, PRODUCTS } from "@/lib/products";
import { SITE, SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) return {};
  return {
    title: p.name,
    description: `${p.subtitle}. ${p.description}`.slice(0, 200),
    alternates: { canonical: `/productos/${p.id}` },
    openGraph: p.image && !p.image.endsWith(".svg") ? { images: [p.image] } : undefined,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) notFound();
  const related = PRODUCTS.filter((x) => x.group === p.group && x.id !== p.id).concat(PRODUCTS.filter((x) => x.category === p.category && x.group !== p.group)).slice(0, 3);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.description,
    category: CATEGORY_LABEL[p.category],
    brand: { "@type": "Brand", name: p.brand },
    ...(p.image ? { image: `${SITE_URL}${p.image}` } : {}),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <PageHero eyebrow={`${CATEGORY_LABEL[p.category]} · ${p.group}`} title={p.name} text={p.subtitle} crumbs={[{ label: "Productos", href: "/productos" }, { label: p.name }]} actions={<Link href="/productos" className="btn btn-outline"><ArrowLeft className="h-5 w-5" /> Volver a todos los productos</Link>} />

      <section className="bg-ink-950 py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-5 lg:gap-14 lg:px-8">
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-28">
              {p.image && (
                <div className="overflow-hidden rounded-3xl border border-white/10">
                  <ProductImage product={p} sizes="(min-width:1024px) 40vw, 100vw" priority />
                </div>
              )}
              <div className="mt-6 flex flex-col gap-3">
                <a href={`mailto:${SITE.email}?subject=${encodeURIComponent(`Consulta por ${p.name}`)}`} className="btn btn-primary">
                  <Mail className="h-5 w-5" /> Consultar por este producto
                </a>
                <a href={SITE.catalogPdf} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  <FileDown className="h-4 w-4" /> Ver catálogo PDF
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-12 lg:col-span-3">
            <Reveal>
              <p className="text-lg leading-relaxed text-slate-300">{p.description}</p>
              <ul className="mt-6 space-y-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3 text-slate-300">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-accent-cyan" aria-hidden="true" /> {f}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-xl font-semibold text-white">Especificaciones técnicas</h2>
              <dl className="mt-4 divide-y divide-white/10 rounded-2xl border border-white/10 text-sm">
                {[["Marca", p.brand] as [string, string], ...p.specs].map(([k, v]) => (
                  <div key={k} className="grid gap-1 px-4 py-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="text-slate-400">{k}</dt>
                    <dd className="text-slate-200 sm:col-span-2">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            {p.applications && (
              <Reveal>
                <h2 className="font-display text-xl font-semibold text-white">Aplicaciones</h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.applications.map((a) => (
                    <li key={a} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-slate-300">
                      {a}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            {p.tables?.map((t) => (
              <Reveal key={t.title}>
                <h2 className="font-display text-xl font-semibold text-white">{t.title}</h2>
                <div className="mt-4 overflow-x-auto rounded-2xl border border-white/10">
                  <table className="w-full min-w-max text-left text-sm">
                    <thead className="bg-brand/20 text-slate-200">
                      <tr>
                        {t.head.map((h) => (
                          <th key={h} scope="col" className="px-3 py-2.5 font-medium">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-slate-300">
                      {t.rows.map((r, i) => (
                        <tr key={i} className="hover:bg-white/[0.03]">
                          {r.map((c, j) => (
                            <td key={j} className={j === 0 ? "px-3 py-2 font-medium text-white" : "px-3 py-2"}>
                              {c}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {t.note && <p className="mt-2 text-xs text-slate-400">{t.note}</p>}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-white/10 bg-ink-900 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-semibold text-white">También te puede interesar</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <ProductCard key={r.id} product={r} />
              ))}
            </div>
            <Link href="/productos" className="mt-8 inline-block text-sm font-medium text-accent-cyan hover:underline">
              ← Volver a todos los productos
            </Link>
          </div>
        </section>
      )}
      <CtaBand />
    </>
  );
}
