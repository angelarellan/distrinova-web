import Link from "next/link";
import { Mail, } from "lucide-react";
import { WhatsAppGlyph } from "@/components/WhatsAppGlyph";
import Image from "next/image";
import { Logo } from "./Logo";
import { CERTIFICATIONS } from "@/lib/certifications";
import { MAIN_NAV, SITE, WA_DEFAULT_MESSAGE, waLink } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  const certs = CERTIFICATIONS;
  return (
    <footer className="relative border-t border-white/10 bg-ink-950 pt-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-14 sm:px-6 md:grid-cols-5 lg:px-8">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">{SITE.description}</p>
        </div>

        <nav aria-label="Pie de página">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Navegación</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {MAIN_NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-slate-300 transition hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/catalogo" className="text-slate-300 transition hover:text-white">
                Catálogo
              </Link>
            </li>
          </ul>
        </nav>

        <div className="md:col-span-2">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Contacto directo</h2>
          <ul className="mt-4 space-y-4 text-sm">
            <li>
              <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-3 text-slate-200 transition hover:text-white">
                <Mail className="h-4 w-4 text-accent-cyan" aria-hidden="true" /> {SITE.email}
              </a>
            </li>
            <li>
              <a
                href={waLink(WA_DEFAULT_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-slate-200 transition hover:text-white"
              >
                <WhatsAppGlyph className="h-4 w-4 text-[#4ADE80]" /> WhatsApp {SITE.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {certs.length > 0 && (
        <div className="border-t border-white/10">
          <ul className="mx-auto flex max-w-7xl flex-wrap items-center gap-4 px-4 py-6 sm:px-6 lg:px-8" aria-label="Certificaciones">
            {certs.map((c) => (
              <li key={c.name} className="flex items-center gap-4 rounded-xl border border-white/15 bg-ink-900 py-3 pl-3 pr-5">
                <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-brand bg-ink-950 text-center font-display leading-none text-white">
                  <span className="absolute inset-1 rounded-full border border-dashed border-white/25" aria-hidden="true" />
                  <span className="relative">
                    <span className="block text-sm font-extrabold">ISO</span>
                    <span className="block text-[9px] font-semibold text-accent-cyan">{c.name.replace("ISO ", "").split(":")[0]}</span>
                  </span>
                </span>
                <span>
                  <span className="block font-semibold text-white">{c.name}</span>
                  <span className="block text-sm text-slate-300">{c.scope}</span>
                  {c.status === "en-proceso" && <span className="mt-1 inline-block rounded-full border border-accent-cyan/40 bg-accent-cyan/10 px-2.5 py-0.5 text-[11px] font-semibold text-accent-cyan">Certificación en proceso</span>}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-slate-400 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {year} {SITE.legalName} Todos los derechos reservados.
          </p>
          <p>Las especificaciones pueden cambiar sin previo aviso. Consultá disponibilidad.</p>
        </div>
      </div>
    </footer>
  );
}
