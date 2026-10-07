import Link from "next/link";
import { FileText, Layers, ShieldCheck, Wrench } from "lucide-react";
import { GlassIcon } from "./GlassIcon";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const ITEMS = [
  { icon: FileText, title: "Fichas técnicas completas", text: "Materiales, normas, presión, temperatura y dimensiones de cada producto, en la web y en el catálogo." },
  { icon: Layers, title: "Una sola fuente", text: "Sellado, válvulas y cañería con un solo proveedor para simplificar compras y mantenimiento." },
  { icon: Wrench, title: "Asesoramiento técnico", text: "Te ayudamos a elegir según fluido, presión, temperatura y condiciones de servicio." },
  { icon: ShieldCheck, title: "Materiales según aplicación", text: "Acero al carbono, AISI 316, hierro dúctil, PTFE y grafito para cada exigencia." },
];

export function Benefits() {
  return (
    <section className="bg-ink-900 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-5 lg:gap-20 lg:px-8">
        <div className="lg:col-span-2">
          <SectionHeading eyebrow="Por qué Distrinova" title="Un proveedor técnico para tu planta" />
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-slate-300">Elegir bien el insumo evita paradas. Por eso ponemos la información técnica al frente.</p>
            <Link href="/contacto" className="mt-8 inline-flex h-12 items-center rounded-full bg-brand px-7 font-medium text-white transition hover:bg-brand-dark">
              Hablar con un asesor
            </Link>
          </Reveal>
        </div>
        <Stagger className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:col-span-3">
          {ITEMS.map((b) => (
            <StaggerItem key={b.title} className="border-t border-white/15 pt-6">
              <GlassIcon icon={b.icon} className="h-9 w-9" />
              <h3 className="mt-5 font-display text-2xl font-semibold text-white">{b.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-400">{b.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
