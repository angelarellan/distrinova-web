import { cn } from "@/lib/utils";

/** Tuerca hexagonal como separador. */
function Hex() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-brand" aria-hidden="true">
      <path d="M12 2.5 20 7v10l-8 4.5L4 17V7l8-4.5Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="3.2" fill="currentColor" />
    </svg>
  );
}

/** Cinta infinita en CSS puro; se pausa con hover/foco y queda estática con reduced-motion. */
export function Marquee({ items, className }: { items: string[]; className?: string }) {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center gap-8 pr-8" aria-hidden={hidden || undefined}>
      {items.map((t) => (
        <li key={t} className="flex items-center gap-8 whitespace-nowrap">
          <span className="font-display text-2xl font-extrabold uppercase tracking-[0.14em] text-slate-300 transition hover:text-white sm:text-3xl">{t}</span>
          <Hex />
        </li>
      ))}
    </ul>
  );
  return (
    <div className={cn("marquee relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]", className)} role="region" aria-label="Normas y materiales">
      <div className="marquee-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
