import { cn } from "@/lib/utils";

const DOTS = ["bg-accent-amber", "bg-accent-cyan", "bg-brand", "bg-slate-300"];

/** Cinta infinita en CSS puro; se pausa con hover/foco y queda estática con reduced-motion. */
export function Marquee({ items, className }: { items: string[]; className?: string }) {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center gap-10 pr-10" aria-hidden={hidden || undefined}>
      {items.map((t, i) => (
        <li key={t} className="flex items-center gap-10 whitespace-nowrap font-display text-3xl font-semibold uppercase tracking-wide text-slate-600 transition hover:text-white sm:text-4xl">
          {t}
          <span className={cn("h-2 w-2 rounded-full", DOTS[i % DOTS.length])} aria-hidden="true" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className={cn("marquee relative overflow-hidden", className)} role="region" aria-label="Normas y materiales">
      <div className="marquee-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
