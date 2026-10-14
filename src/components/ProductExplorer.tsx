"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { ProductCard } from "./ProductCard";
import { MoreCard } from "./MoreCard";
import { CATEGORY_LABEL, PRODUCTS, type CategoryKey } from "@/lib/products";
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
  const items = cats.flatMap((c) => PRODUCTS.filter((p) => p.category === c));

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
          <h2 className="sr-only">Productos</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {items.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
            <MoreCard
              intro="También suministramos otros insumos."
              items={["Caños", "Acoples ranurados", "Electrodos", "Alambre para soldar MIG"]}
              message="Hola Distrinova S.R.L., quisiera consultar por caños, acoples ranurados, electrodos y alambre MIG..."
            />
          </div>
        </m.div>
      </AnimatePresence>
    </div>
  );
}
