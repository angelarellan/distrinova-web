import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Industry } from "@/lib/industries";
import { cn } from "@/lib/utils";

export function IndustryCard({ industry: i, className }: { industry: Industry; className?: string }) {
  return (
    <Link href={`/industrias#${i.slug}`} className={cn("group relative flex min-h-[26rem] flex-col justify-end overflow-hidden rounded-2xl border border-white/10", className)}>
      <Image src={i.photo} alt={i.photoAlt} fill sizes="(min-width:1024px) 400px, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/60 to-ink-950/10" aria-hidden="true" />
      <div className="relative p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-3xl font-semibold text-white">{i.title}</h3>
          <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-white transition group-hover:scale-110">
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">{i.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {i.specs.slice(0, 2).map((s) => (
            <li key={s} className="rounded-full border border-white/15 bg-ink-950/50 px-3 py-1 text-xs text-slate-200 backdrop-blur">
              {s}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
