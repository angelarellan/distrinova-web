import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, ChevronDown, FileDown, Mail } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ProductImage } from "@/components/ProductImage";
import { ProductCard } from "@/components/ProductCard";
import { ScrollTable } from "@/components/ScrollTable";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { CATEGORY_LABEL, PRODUCTS } from "@/lib/products";
import { SITE, SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return PRODUCTS.filter((p) => !p.pending).map((p) => ({ id: p.id }));
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
  if (!p || p.pending) notFound();
  const related = PRODUCTS.filter((x) => !x.pending && x.group === p.group && x.id !== p.id).concat(PRODUCTS.filter((x) => !x.pending && x.category === p.category && x.group !== p.group)).slice(0, 3);
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
          <div className="min-w-0 lg:col-span-2">
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

          <div className="min-w-0 space-y-6 lg:col-span-3">
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

            <details open className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
              <summary className="flex items-center justify-between gap-4 px-5 py-4 font-display text-lg font-semibold text-white">
                Especificaciones técnicas
                <ChevronDown className="acc-chevron h-5 w-5 shrink-0 text-accent-cyan" aria-hidden="true" />
              </summary>
              <dl className="divide-y divide-white/10 border-t border-white/10 text-sm">
                {[["Marca", p.brand] as [string, string], ...p.specs].map(([k, v]) => (
                  <div key={k} className="grid gap-1 px-5 py-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="text-slate-400">{k}</dt>
                    <dd className="text-slate-200 sm:col-span-2">{v}</dd>
                  </div>
                ))}
              </dl>
            </details>

            {p.applications && (
              <details className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
                <summary className="flex items-center justify-between gap-4 px-5 py-4 font-display text-lg font-semibold text-white">
                  Aplicaciones
                  <ChevronDown className="acc-chevron h-5 w-5 shrink-0 text-accent-cyan" aria-hidden="true" />
                </summary>
                <ul className="flex flex-wrap gap-2 border-t border-white/10 px-5 py-4">
                  {p.applications.map((a) => (
                    <li key={a} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-slate-300">
                      {a}
                    </li>
                  ))}
                </ul>
              </details>
            )}

            {p.tables?.map((t) => (
              <details key={t.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
                <summary className="flex items-center justify-between gap-4 px-5 py-4 font-display text-lg font-semibold text-white">
                  {t.title}
                  <ChevronDown className="acc-chevron h-5 w-5 shrink-0 text-accent-cyan" aria-hidden="true" />
                </summary>
                <div className="border-t border-white/10 px-5 py-4">
                  <ScrollTable>
                    <table className="w-full min-w-max text-left text-sm">
                      <thead className="bg-brand/20 text-slate-200">
                        <tr>
                          {t.head.map((h) => (
                            <th key={h} scope="col" className="whitespace-nowrap px-3 py-2.5 font-medium">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 text-slate-300">
                        {t.rows.map((r, i) => (
                          <tr key={i} className="hover:bg-white/[0.03]">
                            {r.map((c, j) => (
                              <td key={j} className={j === 0 ? "whitespace-nowrap px-3 py-2 font-medium text-white" : "whitespace-nowrap px-3 py-2"}>
                                {c}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </ScrollTable>
                  {t.note && <p className="pt-3 text-xs text-slate-400">{t.note}</p>}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-white/10 bg-ink-900 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-semibold text-white">También te puede interesar</h2>
            <ul className="hscroll -mx-4 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0 lg:grid lg:grid-cols-3 lg:gap-4 lg:overflow-visible">
              {related.map((r) => (
                <li key={r.id} className="w-[80%] shrink-0 snap-start sm:w-[22rem] lg:w-auto">
                  <ProductCard product={r} sizes="(min-width:1024px) 400px, 80vw" />
                </li>
              ))}
            </ul>
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
