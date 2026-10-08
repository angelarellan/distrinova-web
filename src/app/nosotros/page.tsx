import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { Icon3D, type Icon3DName } from "@/components/Icon3D";
import { ParallaxPhoto } from "@/components/ParallaxPhoto";
import { StatsBand } from "@/components/StatsBand";
import { BrandsStrip } from "@/components/BrandsStrip";
import { CtaBand } from "@/components/CtaBand";
import { BRANDS } from "@/lib/brands";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Distrinova S.R.L. es una distribuidora de insumos industriales para Petróleo, Gas, Sistemas de Incendio e Industria Alimenticia.",
  alternates: { canonical: "/nosotros" },
};

const PILLARS: { icon: Icon3DName; title: string; text: string }[] = [
  { icon: "factory", title: "Foco industrial", text: "Insumos pensados para operaciones donde la continuidad importa: sellado, válvulas y accesorios de cañería." },
  { icon: "search", title: "Información técnica clara", text: "Cada producto tiene su ficha con materiales, normas, presión, temperatura y dimensiones, para decidir con datos." },
  { icon: "chains", title: "Línea integrada", text: "Varias familias de producto reunidas para que tu equipo de compras resuelva más con un solo proveedor." },
  { icon: "phone", title: "Trato directo", text: "Atención directa por WhatsApp y correo para cotizar, consultar medidas o confirmar disponibilidad." },
];

// Hitos verificables a partir del catálogo y del sitio. TODO(cliente): sumar fecha de fundación y demás hitos reales.
const MILESTONES = [
  { when: "2025", title: "Fichas técnicas de la línea Oil & Gas", text: "Se elaboran las fichas de empaquetaduras, juntas, válvulas y accesorios de cañería que hoy componen el catálogo." },
  { when: "2026", title: "Catálogo Oil & Gas 2026", text: "Se publica el catálogo con 11 líneas de producto y sus tablas de dimensiones." },
  { when: "2026", title: "Lanzamiento del sitio web", text: "Distrinova lleva su catálogo online, con fichas técnicas por producto y contacto directo." },
];

export default function NosotrosPage() {
  return (
    <>
      <PageHero eyebrow="Nosotros" title="Distribución industrial con respaldo técnico" text="Distrinova S.R.L. abastece a equipos de compras, mantenimiento e ingeniería de las industrias del petróleo, el gas, la protección contra incendio y la alimenticia." crumbs={[{ label: "Nosotros" }]} />

      <section className="bg-ink-950 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div>
            <SectionHeading eyebrow="Quiénes somos" title="Un proveedor que habla el idioma de planta" />
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                Somos una distribuidora de insumos industriales especializada en el sector Oil &amp; Gas. Nuestro catálogo 2026 reúne empaquetaduras, juntas, cinta de PTFE, válvulas esféricas y de mariposa, y accesorios de cañería para soldar.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">Nuestro objetivo es simple: que encuentres el insumo correcto, con la información técnica a mano, y que puedas cotizarlo rápido.</p>
            </Reveal>
          </div>
          <Reveal>
            <ParallaxPhoto src="/photos/valvulas-azul.jpg" alt="Válvulas y cañerías en una instalación industrial" sizes="(min-width:1024px) 45vw, 100vw" className="aspect-[4/3]" />
          </Reveal>
        </div>
      </section>

      <StatsBand />

      <section className="bg-ink-900 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:gap-20 lg:px-8">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="Nuestra historia" title="Cómo llegamos hasta acá" text="Un recorrido por los hitos que dieron forma a nuestra propuesta actual." />
          </div>
          <ol className="relative space-y-10 border-l border-white/15 pl-8 lg:col-span-3">
            {MILESTONES.map((m) => (
              <li key={m.title} className="relative">
                <span className="absolute -left-[2.45rem] top-1.5 h-3 w-3 rounded-full border-2 border-brand bg-ink-900" aria-hidden="true" />
                <Reveal>
                  <p className="font-display text-xl font-semibold text-accent-cyan">{m.when}</p>
                  <h3 className="mt-1 font-display text-2xl font-semibold text-white">{m.title}</h3>
                  <p className="mt-2 text-slate-400">{m.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ink-950 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Qué nos define" title="Cuatro criterios en cada propuesta" />
          <Stagger className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p) => (
              <StaggerItem key={p.title} className="h-full">
                <div className="h-full rounded-2xl border border-white/10 bg-ink-900 p-6">
                  <Icon3D name={p.icon} />
                  <h3 className="mt-5 font-display text-2xl font-bold text-white">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-300">{p.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {BRANDS.length > 0 && (
        <section className="border-t border-white/10 bg-ink-900 py-20" aria-label="Marcas">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-accent-cyan">Marcas con las que trabajamos</p>
            <div className="mt-10">
              <BrandsStrip />
            </div>
          </div>
        </section>
      )}
      <CtaBand />
    </>
  );
}
