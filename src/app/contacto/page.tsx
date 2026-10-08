import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { Icon3D } from "@/components/Icon3D";
import { WhatsAppGlyph } from "@/components/WhatsAppGlyph";
import { SITE, WA_DEFAULT_MESSAGE, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contactá a Distrinova S.R.L. por WhatsApp o email para cotizar insumos industriales.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <>
      <PageHero eyebrow="Contacto" title="Hablemos de tu próximo pedido" text="Contanos qué necesitás y te respondemos con ficha técnica y disponibilidad." art={{ src: "/showcase/valvula-mariposa.webp", w: 900, h: 612 }} crumbs={[{ label: "Contacto" }]} />
      <section className="bg-ink-950 py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-5 lg:gap-14 lg:px-8">
          <Reveal className="space-y-4 lg:col-span-2">
            <a href={waLink(WA_DEFAULT_MESSAGE)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/25">
              <span className="relative inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2FE07A] to-[#0E8F5C] text-white shadow-[0_14px_30px_-14px_rgba(37,211,102,0.8)]"><span className="absolute inset-x-1 top-1 h-1/2 rounded-t-xl bg-white/20" aria-hidden="true" /><WhatsAppGlyph className="relative h-9 w-9" /></span>
              <span>
                <span className="block text-sm font-medium uppercase tracking-[0.14em] text-slate-300">WhatsApp</span>
                <span className="mt-0.5 block font-display text-lg text-white">{SITE.phoneDisplay}</span>
              </span>
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/25">
              <Icon3D name="mail" />
              <span>
                <span className="block text-sm font-medium uppercase tracking-[0.14em] text-slate-300">Email</span>
                <span className="mt-0.5 block font-display text-lg text-white">{SITE.email}</span>
              </span>
            </a>
          </Reveal>
          <Reveal className="lg:col-span-3" delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
