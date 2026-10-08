import { CountUp } from "./CountUp";
import { Stagger, StaggerItem } from "./Reveal";
import { PRODUCTS } from "@/lib/products";

const STATS = [
  { value: PRODUCTS.length, prefix: "", suffix: "", label: "líneas de producto en el catálogo 2026" },
  { value: 280, prefix: "", suffix: " bar", label: "presión máxima en válvulas con grafito puro" },
  { value: 650, prefix: "", suffix: " °C", label: "temperatura máxima con vapor, grafito puro" },
  { value: 1500, prefix: "DN ", suffix: "", label: "diámetro máximo en tees y reducciones" },
];

/** Banda azul con bordes difuminados hacia el fondo oscuro (sin cortes duros). */
export function StatsBand() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36" aria-label="Cobertura técnica del catálogo">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#0A0F1D_0%,#0A1F4D_22%,#0B5FD0_52%,#0A1F4D_80%,#0A0F1D_100%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(14,165,233,0.22),transparent_65%)]" aria-hidden="true" />
      <div className="grid-tech absolute inset-0 opacity-30 [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">Cobertura técnica de nuestro catálogo</p>
        <Stagger className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {STATS.map((s) => (
            <StaggerItem key={s.label} className="border-t border-white/30 pt-5">
              <p className="font-display text-5xl font-bold text-white sm:text-6xl">
                <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </p>
              <p className="mt-2 max-w-[16rem] text-sm text-blue-50">{s.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
