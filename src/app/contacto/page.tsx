import type { Metadata } from "next";
import { Mail, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { GlassIcon } from "@/components/GlassIcon";
import { SITE, WA_DEFAULT_MESSAGE, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contactá a Distrinova S.R.L. por WhatsApp o email para cotizar insumos industriales.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <>
      <PageHero eyebrow="Contacto" title="Hablemos de tu próximo pedido" text="Contanos qué necesitás y te respondemos con ficha técnica y disponibilidad." crumbs={[{ label: "Contacto" }]} />
      <section className="bg-ink-950 py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-5 lg:gap-14 lg:px-8">
          <Reveal className="space-y-4 lg:col-span-2">
            <a href={waLink(WA_DEFAULT_MESSAGE)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/25">
              <GlassIcon icon={MessageCircle} tone="cyan" />
              <span>
                <span className="block text-xs uppercase tracking-[0.16em] text-slate-500">WhatsApp</span>
                <span className="mt-0.5 block font-display text-lg text-white">{SITE.phoneDisplay}</span>
              </span>
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/25">
              <GlassIcon icon={Mail} tone="blue" />
              <span>
                <span className="block text-xs uppercase tracking-[0.16em] text-slate-500">Email</span>
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
