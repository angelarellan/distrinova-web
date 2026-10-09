import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { HeroField } from "./HeroField";
import { BlueprintHero } from "./BlueprintHero";

interface Props {
  eyebrow: string;
  title: string;
  text?: string;
  crumbs: { label: string; href?: string }[];
  /** Obsoleto: antes era la pieza de producto; ahora todos los heros usan el blueprint unificado. */
  art?: { src: string; w: number; h: number };
  actions?: ReactNode;
}

export function PageHero({ eyebrow, title, text, crumbs, actions }: Props) {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 bg-ink-950 pb-16 pt-32 sm:pb-24 sm:pt-40">
      <HeroField variant="page" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <nav aria-label="Migas de pan" className="mb-6 flex flex-wrap items-center gap-1.5 text-sm text-slate-300">
            <Link href="/" className="hover:text-white">
              Inicio
            </Link>
            {crumbs.map((c) => (
              <span key={c.label} className="flex items-center gap-1.5">
                <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                {c.href ? (
                  <Link href={c.href} className="hover:text-white">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
          <div className="ph-in">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-cyan">{eyebrow}</p>
            <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">{title}</h1>
            {text && <p className="mt-5 max-w-2xl text-lg text-slate-300">{text}</p>}
            {actions && <div className="mt-8 flex flex-col gap-3 sm:flex-row">{actions}</div>}
          </div>
        </div>
        <div className="hidden lg:block">
          <BlueprintHero className="max-w-md" />
        </div>
      </div>
    </section>
  );
}
