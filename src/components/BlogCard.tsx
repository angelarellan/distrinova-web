import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { fmtDate, type Post } from "@/lib/blog";

export function BlogCard({ post: p, priority = false, as: H = "h3" }: { post: Post; priority?: boolean; as?: "h2" | "h3" }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-white/25">
      <Link href={`/blog/${p.slug}`} className="flex h-full flex-col">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image src={p.image} alt={p.imageAlt} fill fetchPriority={priority ? "high" : undefined} loading={priority ? "eager" : undefined} sizes="(min-width:1024px) 380px, (min-width:640px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <p className="flex items-center gap-3 text-xs uppercase tracking-[0.14em] text-slate-400">
            <span className="font-medium text-accent-cyan">{p.category}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={p.date}>{fmtDate(p.date)}</time>
          </p>
          <H className="mt-3 font-display text-xl font-semibold leading-snug text-white">{p.title}</H>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.excerpt}</p>
          <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium text-white">
            Leer artículo <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </article>
  );
}
