import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { ParallaxPhoto } from "./ParallaxPhoto";
import { SectionHeading } from "./SectionHeading";

const DOES = [
  { t: "Distribuimos", d: "Sellado industrial, válvulas y accesorios de cañería para operaciones de Oil & Gas." },
  { t: "Asesoramos", d: "Te ayudamos a elegir según fluido, presión, temperatura y norma aplicable." },
  { t: "Abastecemos", d: "Cotización ágil y atención directa para paradas de planta y mantenimiento programado." },
];

export function AboutSplit() {
  return (
    <section className="bg-ink-950 py-24 sm:py-32" aria-labelledby="sobre-nosotros">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div>
          <SectionHeading eyebrow="Sobre Distrinova" title="Distribuimos los insumos que mantienen en marcha tu planta" />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              Somos una distribuidora de insumos industriales para Petróleo, Gas, Sistemas de Incendio e Industria Alimenticia. Reunimos en un solo proveedor empaquetaduras, juntas, válvulas y accesorios de cañería, con información técnica clara de cada producto.
            </p>
            <dl className="mt-8 space-y-5 border-t border-white/10 pt-6">
              {DOES.map((d) => (
                <div key={d.t} className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-6">
                  <dt className="font-display text-xl font-semibold text-white">{d.t}</dt>
                  <dd className="text-slate-400">{d.d}</dd>
                </div>
              ))}
            </dl>
            <Link href="/nosotros" className="mt-8 inline-flex items-center gap-2 font-medium text-accent-cyan hover:underline">
              Conocer más sobre nosotros <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <Reveal className="grid grid-cols-5 gap-4">
          <ParallaxPhoto src="/photos/refineria-dia.jpg" alt="Planta de procesamiento con torres bajo cielo despejado" sizes="(min-width:1024px) 30vw, 60vw" className="col-span-3 aspect-[3/4]" />
          <div className="col-span-2 flex flex-col gap-4">
            <ParallaxPhoto src="/photos/tecnico-actuador.jpg" alt="Técnico operando un actuador de válvula" sizes="(min-width:1024px) 20vw, 40vw" className="aspect-square" />
            <ParallaxPhoto src="/photos/canerias-azul.jpg" alt="Cañerías azules con codos" sizes="(min-width:1024px) 20vw, 40vw" className="flex-1" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
