import { CountUp } from "./CountUp";
import { Stagger, StaggerItem } from "./Reveal";

const STATS = [
  { value: 10, prefix: "+", suffix: "", label: "años en el rubro industrial, desde 2015" },
  { value: 3, prefix: "", suffix: "", label: "marcas que importamos y comercializamos: DNova, Fixy y Hardweld" },
  { value: 4, prefix: "", suffix: "", label: "sectores: Oil & Gas, petroquímico, energético y otras industrias" },
  { value: 1, prefix: "", suffix: "", label: "solo proveedor para sellado, válvulas, bridas y cañería" },
];

/** Banda azul con bordes difuminados hacia el fondo oscuro (sin cortes duros). */
export function StatsBand() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24" aria-label="Distrinova en números">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#10172A_0%,#15325F_50%,#10172A_100%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(30,99,214,0.14),transparent_65%)]" aria-hidden="true" />
      <div className="grid-tech absolute inset-0 opacity-30 [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">Distrinova en números</p>
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
