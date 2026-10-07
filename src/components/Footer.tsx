import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import Image from "next/image";
import { Logo } from "./Logo";
import { CERTIFICATIONS } from "@/lib/certifications";
import { MAIN_NAV, SITE, WA_DEFAULT_MESSAGE, waLink } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/10 bg-ink-950 pt-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-14 sm:px-6 md:grid-cols-5 lg:px-8">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">{SITE.description}</p>
          {CERTIFICATIONS.length > 0 && (
            <ul className="mt-6 flex flex-wrap items-center gap-3" aria-label="Certificaciones">
              {CERTIFICATIONS.map((c) => (
                <li key={c.name} title={c.description} className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-200">
                  {c.logo && <Image src={c.logo} alt="" width={28} height={28} />}
                  {c.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        <nav aria-label="Pie de página">
          <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">Navegación</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {MAIN_NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-slate-300 transition hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={SITE.catalogPdf} target="_blank" rel="noopener noreferrer" className="text-slate-300 transition hover:text-white">
                Catálogo PDF
              </a>
            </li>
          </ul>
        </nav>

        <div className="md:col-span-2">
          <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">Contacto directo</h2>
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
                <MessageCircle className="h-4 w-4 text-[#4ADE80]" aria-hidden="true" /> WhatsApp {SITE.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {year} {SITE.legalName} Todos los derechos reservados.
          </p>
          <p>Las especificaciones pueden cambiar sin previo aviso. Consultá disponibilidad.</p>
        </div>
      </div>
    </footer>
  );
}
