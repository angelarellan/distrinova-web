import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function PageHero({ eyebrow, title, text, crumbs }: { eyebrow: string; title: string; text?: string; crumbs: { label: string; href?: string }[] }) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-ink-950 pb-16 pt-32 sm:pb-24 sm:pt-40">
      <div className="grid-tech absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden="true" />
      <div className="absolute -right-24 top-0 h-80 w-96 rounded-full bg-brand/20 blur-[120px]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Migas de pan" className="mb-6 flex items-center gap-1.5 text-xs text-slate-400">
          <Link href="/" className="hover:text-white">
            Inicio
          </Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-1.5">
              <ChevronRight className="h-3 w-3" aria-hidden="true" />
              {c.href ? (
                <Link href={c.href} className="hover:text-white">
                  {c.label}
                </Link>
              ) : (
                <span className="text-slate-300">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent-cyan">{eyebrow}</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-white sm:text-6xl">{title}</h1>
          {text && <p className="mt-5 max-w-2xl text-lg text-slate-300">{text}</p>}
        </Reveal>
      </div>
    </section>
  );
}
