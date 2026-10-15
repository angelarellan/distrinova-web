import Link from "next/link";
import { Mail, } from "lucide-react";
import { WhatsAppGlyph } from "@/components/WhatsAppGlyph";
import { Logo } from "./Logo";
import { IsoSeal } from "./IsoSeal";
import { CERTIFICATIONS } from "@/lib/certifications";
import { MAIN_NAV, SITE, WA_DEFAULT_MESSAGE, waLink } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  const cert = CERTIFICATIONS[0];
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

          {cert && (
            <div className="mt-8 flex w-fit max-w-full items-center gap-4 rounded-2xl border border-white/15 bg-ink-900 p-4">
              <IsoSeal className="h-16 w-16 shrink-0" />
              <div>
                <span className="block font-semibold text-white">{cert.name}</span>
                <span className="block text-sm text-slate-300">{cert.scope}</span>
                {cert.status === "en-proceso" && <span className="mt-1.5 inline-block rounded-full border border-accent-cyan/40 bg-accent-cyan/10 px-2.5 py-0.5 text-[11px] font-semibold text-accent-cyan">Certificación en proceso</span>}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-4 py-6 text-center text-xs text-slate-400 sm:px-6 lg:px-8">
          <p>Las especificaciones pueden cambiar sin previo aviso. Consultá disponibilidad.</p>
          <p className="flex flex-col items-center gap-x-2 gap-y-1 sm:flex-row">
            <span>© {year} {SITE.legalName} Todos los derechos reservados.</span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <span>
              Desarrollado por{" "}
              <a
                href="https://www.softivastudio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-slate-300 transition hover:text-white"
              >
                SoftivaStudio
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
