import { CountUp } from "./CountUp";
import { Stagger, StaggerItem } from "./Reveal";
import { PRODUCTS } from "@/lib/products";

const STATS = [
  { value: PRODUCTS.length, prefix: "", suffix: "", label: "líneas de producto en el catálogo 2026" },
  { value: 280, prefix: "", suffix: " bar", label: "presión máxima en válvulas con grafito puro" },
  { value: 650, prefix: "", suffix: " °C", label: "temperatura máxima con vapor, grafito puro" },
  { value: 1500, prefix: "DN ", suffix: "", label: "diámetro máximo en tees y reducciones" },
];

export function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand to-brand-dark" aria-label="Cobertura técnica del catálogo">
      <div className="grid-tech absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-100/80">Cobertura técnica de nuestro catálogo</p>
        <Stagger className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {STATS.map((s) => (
            <StaggerItem key={s.label} className="border-t border-white/25 pt-5">
              <p className="font-display text-5xl font-semibold text-white sm:text-6xl">
                <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </p>
              <p className="mt-2 max-w-[16rem] text-sm text-blue-100/90">{s.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
