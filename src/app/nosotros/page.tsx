import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { ParallaxPhoto } from "@/components/ParallaxPhoto";
import { StatsBand } from "@/components/StatsBand";
import { HistoryTimeline } from "@/components/HistoryTimeline";
import { CtaBand } from "@/components/CtaBand";
import { BRANDS } from "@/lib/brands";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Distrinova S.R.L. es una distribuidora de insumos industriales para Petróleo, Gas, Sistemas de Incendio e Industria Alimenticia.",
  alternates: { canonical: "/nosotros" },
};

const PILLARS: { title: string; text: string }[] = [
  { title: "Foco industrial", text: "Insumos pensados para operaciones donde la continuidad importa: sellado, válvulas y accesorios de cañería." },
  { title: "Información técnica clara", text: "Cada producto tiene su ficha con materiales, normas, presión, temperatura y dimensiones, para decidir con datos." },
  { title: "Línea integrada", text: "Varias familias de producto reunidas para que tu equipo de compras resuelva más con un solo proveedor." },
  { title: "Trato directo", text: "Atención directa por WhatsApp y correo para cotizar, consultar medidas o confirmar disponibilidad." },
];

const MILESTONES = [
  { when: "2015", title: "Nacemos en el alumbrado público", text: "Distrinova da sus primeros pasos proveyendo soluciones para proyectos de alumbrado público, donde aprendimos a trabajar con licitaciones, plazos y especificaciones exigentes." },
  { when: "2023", title: "Giro hacia los insumos industriales", text: "Nos especializamos en insumos para petróleo, gas e industrias, con un criterio innegociable: la calidad de cada producto que entra a nuestro catálogo." },
  { when: "2026", title: "Marcas propias y catálogo Oil & Gas", text: "Nos consolidamos como importadores de las marcas DNova, Fixy y Hardweld, publicamos el catálogo Oil & Gas 2026 y llevamos todas las fichas técnicas online." },
];

const MISSION_VISION = [
  {
    label: "Misión",
    text: "Abastecer a las industrias del petróleo, el gas, la protección contra incendio y la alimenticia con insumos de calidad comprobada, información técnica completa y atención directa, para que cada planta opere segura y sin interrupciones.",
  },
  {
    label: "Visión",
    text: "Ser la distribuidora de insumos industriales de referencia en Argentina y la región: la primera opción de los equipos de compras y mantenimiento que no resignan calidad, con marcas propias consolidadas y una gestión certificada bajo ISO 9001:2015.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <PageHero eyebrow="Nosotros" title="Distribución industrial con respaldo técnico" text="Distrinova S.R.L. abastece a equipos de compras, mantenimiento e ingeniería de las industrias del petróleo, el gas, la protección contra incendio y la alimenticia." art={{ src: "/showcase/valvula-esferica-3c-inox.webp", w: 900, h: 635 }} crumbs={[{ label: "Nosotros" }]} />

      <section className="bg-ink-950 py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div>
            <SectionHeading eyebrow="Quiénes somos" title={<>DISTRINOVA SRL<br />Soluciones para la industria</>} />
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-slate-300">Desde 2015, nos dedicamos a la importación y comercialización de insumos industriales, con una sólida especialización en los sectores <strong className="font-semibold text-white">Oil &amp; Gas, petroquímico, energético y otras industrias.</strong></p>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">Ofrecemos una amplia gama de productos, entre los que se destacan <strong className="font-semibold text-white">bridas, accesorios para soldar, accesorios forjados, válvulas industriales, juntas y empaquetaduras</strong>, además de cintas de PTFE, selladores y otros insumos esenciales para instalaciones, mantenimiento y procesos industriales.</p>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">Somos importadores y comercializadores de nuestras marcas <strong className="font-semibold text-white">DNova , Fixy, Hardweld</strong>, desarrolladas bajo estrictos criterios de calidad, confiabilidad y competitividad.</p>
              <p className="mt-4 text-lg leading-relaxed text-slate-300"><strong className="font-semibold text-white">Nuestro compromiso es brindar soluciones que estén a la altura de las exigencias de la industria</strong>, donde la seguridad, la eficiencia y la continuidad operativa son fundamentales.</p>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">Trabajamos para que cada cliente encuentre el producto adecuado para su aplicación, con asesoramiento técnico, información precisa, disponibilidad de stock y respuestas comerciales ágiles.</p>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">En <strong className="font-semibold text-white">DISTRINOVA SRL</strong>, entendemos que la calidad no es una opción, sino una condición indispensable para construir relaciones comerciales sólidas y duraderas.</p>
            </Reveal>
          </div>
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <ParallaxPhoto src="/photos/valvulas-azul.jpg" alt="Válvulas y cañerías en una instalación industrial" sizes="(min-width:1024px) 45vw, 100vw" className="aspect-[4/3]" />
            </Reveal>
          </div>
        </div>
      </section>

      <StatsBand />

      <section className="bg-ink-900 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:gap-20 lg:px-8">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="Nuestra historia" title="Cómo llegamos hasta acá" text="Del alumbrado público a los insumos Oil & Gas: más de diez años de trabajo junto a la industria." />
          </div>
          <HistoryTimeline milestones={MILESTONES} />
        </div>
      </section>

      <section className="bg-ink-950 py-20 sm:py-28" aria-label="Misión y visión">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {MISSION_VISION.map((mv, i) => (
            <Reveal key={mv.label} delay={i * 0.1} className="h-full">
              <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-deep/60 to-ink-900 p-8 sm:p-10">
                <div className="grid-tech absolute inset-0 opacity-40 [mask-image:linear-gradient(to_left,black,transparent_60%)]" aria-hidden="true" />
                <div className="relative">
                  <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent-cyan">
                    <span className="h-px w-8 bg-accent-cyan" aria-hidden="true" /> {mv.label}
                  </p>
                  <p className="mt-5 text-lg leading-relaxed text-slate-200">{mv.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink-900 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Qué nos define" title="Cuatro criterios en cada propuesta" />
          <Stagger className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p) => (
              <StaggerItem key={p.title} className="h-full">
                <div className="h-full rounded-2xl border border-white/10 bg-ink-950 p-6">
                  <span className="block h-1 w-10 rounded-full bg-gradient-to-r from-accent-cyan to-brand" aria-hidden="true" />
                  <h3 className="mt-5 font-display text-2xl font-bold text-white">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-300">{p.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {BRANDS.length > 0 && (
        <section className="border-t border-white/10 bg-ink-950 py-20 sm:py-28" aria-label="Marcas">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Marcas que importamos" title="Tres marcas, una misma exigencia" text="Somos importadores de las marcas con las que armamos nuestro catálogo." />
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {BRANDS.map((b, i) => (
                <Reveal key={b.name} delay={i * 0.1} className="h-full">
                  <div className="flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-ink-900 p-7 sm:flex-row sm:items-center lg:flex-col lg:items-start">
                    <div className="flex h-28 w-full shrink-0 items-center justify-center rounded-2xl bg-white px-7 py-4 sm:w-48 lg:w-full">
                      <Image src={b.logo} alt={`Logo de ${b.name}`} width={b.w} height={b.h} sizes="190px" className="max-h-16 w-auto object-contain" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-white">{b.name}</h3>
                      <p className="mt-2 leading-relaxed text-slate-300">{b.line}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
      <CtaBand />
    </>
  );
}
