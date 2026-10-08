import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { ProductCard } from "@/components/ProductCard";
import { BlogCard } from "@/components/BlogCard";
import { POSTS, fmtDate } from "@/lib/blog";
import { PRODUCTS } from "@/lib/products";
import { SITE, SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const p = POSTS.find((x) => x.slug === params.slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.excerpt,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: { type: "article", title: p.title, description: p.excerpt, publishedTime: p.date, images: [p.image] },
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = POSTS.find((x) => x.slug === params.slug);
  if (!post) notFound();
  const products = post.productIds.map((id) => PRODUCTS.find((p) => p.id === id)).filter((p): p is NonNullable<typeof p> => !!p);
  const more = POSTS.filter((x) => x.slug !== post.slug).slice(0, 3);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    image: `${SITE_URL}${post.image}`,
    author: { "@type": "Organization", name: SITE.legalName },
    publisher: { "@type": "Organization", name: SITE.legalName },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <article>
        <header className="relative isolate overflow-hidden pt-32 sm:pt-40">
          <Image src={post.image} alt={post.imageAlt} fill priority sizes="100vw" className="-z-20 object-cover" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-950 via-ink-950/75 to-ink-950/50" aria-hidden="true" />
          <div className="mx-auto max-w-3xl px-4 pb-14 pt-10 sm:px-6 sm:pb-20">
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-slate-300 hover:text-white">
              <ArrowLeft className="h-4 w-4" /> Blog
            </Link>
            <p className="mt-6 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.14em] text-slate-300">
              <span className="font-semibold text-accent-cyan">{post.category}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={post.date}>{fmtDate(post.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readMinutes} min de lectura</span>
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">{post.title}</h1>
          </div>
        </header>

        <div className="bg-ink-950 py-14 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <p className="text-xl leading-relaxed text-slate-200">{post.excerpt}</p>
            <div className="mt-8 space-y-5">
              {post.body.map((b, i) =>
                b.t === "h2" ? (
                  <h2 key={i} className="pt-6 font-display text-3xl font-semibold text-white">
                    {b.text}
                  </h2>
                ) : b.t === "ul" ? (
                  <ul key={i} className="space-y-2.5 pl-1 text-lg text-slate-300">
                    {b.items.map((it) => (
                      <li key={it} className="flex gap-3">
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                        {it}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p key={i} className="text-lg leading-relaxed text-slate-300">
                    {b.text}
                  </p>
                ),
              )}
            </div>
            <p className="mt-10 border-t border-white/10 pt-4 text-xs text-slate-400">Fotografía: Unsplash. Datos de producto según Catálogo Distrinova Oil &amp; Gas 2026.</p>
          </div>
        </div>
      </article>

      {products.length > 0 && (
        <section className="border-t border-white/10 bg-ink-900 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-semibold text-white">Productos mencionados</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-ink-950 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-white">Seguí leyendo</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {more.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
