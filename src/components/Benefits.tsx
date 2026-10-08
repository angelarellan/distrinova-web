import Link from "next/link";
import { Icon3D, type Icon3DName } from "./Icon3D";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const ITEMS: { icon: Icon3DName; title: string; text: string }[] = [
  { icon: "clipboard", title: "Fichas técnicas completas", text: "Materiales, normas, presión, temperatura y dimensiones de cada producto, en la web y en el catálogo." },
  { icon: "package", title: "Una sola fuente", text: "Sellado, válvulas y cañería con un solo proveedor para simplificar compras y mantenimiento." },
  { icon: "tools", title: "Asesoramiento técnico", text: "Te ayudamos a elegir según fluido, presión, temperatura y condiciones de servicio." },
  { icon: "shield", title: "Materiales según aplicación", text: "Acero al carbono, AISI 316, hierro dúctil, PTFE y grafito para cada exigencia." },
];

export function Benefits() {
  return (
    <section className="bg-ink-950 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-5 lg:gap-20 lg:px-8">
        <div className="lg:col-span-2">
          <SectionHeading eyebrow="Por qué Distrinova" title="Un proveedor técnico para tu planta" />
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-slate-300">Elegir bien el insumo evita paradas. Por eso ponemos la información técnica al frente.</p>
            <Link href="/contacto" className="btn btn-primary mt-8">
              Hablar con un asesor
            </Link>
          </Reveal>
        </div>
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
          {ITEMS.map((b) => (
            <StaggerItem key={b.title} className="h-full">
              <div className="h-full rounded-2xl border border-white/10 bg-ink-900 p-6 transition hover:border-accent-cyan/30">
                <Icon3D name={b.icon} />
                <h3 className="mt-5 font-display text-2xl font-bold text-white">{b.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-300">{b.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
