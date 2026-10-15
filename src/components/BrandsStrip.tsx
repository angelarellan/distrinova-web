import Image from "next/image";
import { BRANDS } from "@/lib/brands";

/** Cinta infinita de marcas; reutiliza la animación CSS del marquee (se pausa con hover/foco). */
export function BrandsStrip() {
  if (BRANDS.length === 0) return null;
  // repetimos para que la cinta cubra pantallas anchas
  const base = Array.from({ length: Math.max(1, Math.ceil(6 / BRANDS.length)) }, () => BRANDS).flat();
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center gap-6 pr-6" aria-hidden={hidden || undefined}>
      {base.map((b, i) => (
        <li key={`${b.name}-${i}`} className="flex h-28 w-64 items-center justify-center rounded-2xl border border-white/10 bg-white px-8 py-4 transition hover:border-accent-cyan/40">
          <Image src={b.logo} alt={`Logo de ${b.name}`} width={b.w} height={b.h} sizes="200px" className={`w-auto object-contain ${b.name === "Fixy" ? "max-h-20" : "max-h-16"}`} />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="marquee relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]" role="region" aria-label="Marcas que importamos">
      <div className="marquee-track flex w-max" style={{ animationDuration: "40s" }}>
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
