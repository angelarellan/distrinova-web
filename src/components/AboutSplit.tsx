import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { ParallaxPhoto } from "./ParallaxPhoto";
import { Icon3D, type Icon3DName } from "./Icon3D";
import { SectionHeading } from "./SectionHeading";

const DOES: { icon: Icon3DName; t: string; d: string }[] = [
  { icon: "truck", t: "Distribuimos", d: "Sellado industrial, válvulas y accesorios de cañería para operaciones de Oil & Gas." },
  { icon: "tools", t: "Asesoramos", d: "Te ayudamos a elegir según fluido, presión, temperatura y norma aplicable." },
  { icon: "stopwatch", t: "Cotizamos rápido", d: "Atención directa para paradas de planta y mantenimiento programado." },
];

export function AboutSplit() {
  return (
    <section className="bg-ink-900 py-24 sm:py-32" aria-label="Sobre Distrinova">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <SectionHeading eyebrow="Sobre Distrinova" title="Distribuimos los insumos que mantienen en marcha tu planta" />
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              Trabajamos con la industria desde 2015 y hoy somos importadores de las marcas DNova y Fixy, especializados en insumos para Petróleo, Gas, Sistemas de Incendio e Industria Alimenticia. Reunimos en un solo proveedor empaquetaduras, juntas, válvulas y accesorios de cañería, con la calidad como criterio central y la información técnica de cada producto a mano.
            </p>
            <Link href="/nosotros" className="mt-8 inline-flex items-center gap-2 font-semibold text-accent-cyan hover:underline">
              Conocer más sobre nosotros <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal className="grid grid-cols-6 grid-rows-2 gap-4 lg:col-span-7" delay={0.1}>
            <ParallaxPhoto src="/photos/tanques-tuberias.jpg" alt="Tanques de almacenamiento con estructura de cañerías" sizes="(min-width:1024px) 480px, 100vw" className="col-span-4 row-span-2 min-h-[22rem]" />
            <ParallaxPhoto src="/photos/valvulas-rojas.jpg" alt="Válvulas con volantes rojos en una instalación" sizes="(min-width:1024px) 240px, 40vw" className="col-span-2" />
            <ParallaxPhoto src="/photos/tecnico-actuador.jpg" alt="Actuador de válvula con volante" sizes="(min-width:1024px) 240px, 40vw" className="col-span-2" />
          </Reveal>
        </div>

        <Stagger className="mt-14 grid gap-4 md:grid-cols-3">
          {DOES.map((d) => (
            <StaggerItem key={d.t} className="h-full">
              <div className="flex h-full items-start gap-5 rounded-2xl border border-white/10 bg-ink-950 p-6">
                <Icon3D name={d.icon} />
                <div>
                  <h3 className="font-display text-2xl font-bold text-white">{d.t}</h3>
                  <p className="mt-1.5 text-slate-300">{d.d}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
