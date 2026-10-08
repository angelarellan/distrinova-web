"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { ProductCard } from "./ProductCard";
import { CATEGORY_LABEL, GROUPS, PRODUCTS, type CategoryKey } from "@/lib/products";
import { cn } from "@/lib/utils";

const FILTERS: { key: CategoryKey | "all"; label: string }[] = [
  { key: "all", label: "Todos" },
  ...(Object.keys(CATEGORY_LABEL) as CategoryKey[]).map((key) => ({ key, label: CATEGORY_LABEL[key] })),
];

export function ProductExplorer() {
  const [filter, setFilter] = useState<CategoryKey | "all">("all");

  useEffect(() => {
    const h = window.location.hash.slice(1);
    if (h in CATEGORY_LABEL) setFilter(h as CategoryKey);
  }, []);
  const cats = (Object.keys(CATEGORY_LABEL) as CategoryKey[]).filter((c) => filter === "all" || c === filter);
  const sections = cats.flatMap((c) =>
    GROUPS[c]
      .map((g) => ({ category: c, ...g, items: PRODUCTS.filter((p) => p.category === c && p.group === g.label) }))
      .filter((g) => g.items.length),
  );

  return (
    <div>
      <div role="group" aria-label="Filtrar por categoría" className="flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            aria-pressed={filter === f.key}
            className={cn("rounded-full border px-4 py-1.5 text-sm transition", filter === f.key ? "border-brand bg-brand/20 text-white" : "border-white/10 text-slate-400 hover:text-white")}
          >
            {f.label} <span className="ml-1 text-slate-300">({f.key === "all" ? PRODUCTS.length : PRODUCTS.filter((p) => p.category === f.key).length})</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <m.div key={filter} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
          {sections.map((g) => (
            <div key={g.label} className="mt-14">
              <div className="mb-5 flex flex-col gap-1 border-b border-white/10 pb-3 sm:flex-row sm:items-baseline sm:justify-between">
                <h2 className="font-display text-xl font-semibold text-white">
                  {g.label} <span className="ml-2 text-xs font-normal uppercase tracking-[0.16em] text-slate-400">{CATEGORY_LABEL[g.category]}</span>
                </h2>
                <p className="text-sm text-slate-400">{g.hint}</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {g.items.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          ))}
        </m.div>
      </AnimatePresence>
    </div>
  );
}
