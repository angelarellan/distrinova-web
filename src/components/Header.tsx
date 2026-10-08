"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, m } from "framer-motion";
import { ArrowRight, Mail, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { MAIN_NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenu(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  const active = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || menu ? "border-b border-white/10 bg-ink-950/80 backdrop-blur-xl" : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link href="/" aria-label="Distrinova S.R.L. — Inicio">
          <Logo />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-6 xl:flex">
          {MAIN_NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={active(n.href) ? "page" : undefined}
              className={cn("relative py-1 text-sm transition", active(n.href) ? "text-white" : "text-slate-400 hover:text-white")}
            >
              {n.label}
              {active(n.href) && <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-accent-cyan to-brand" />}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <a
            href={`mailto:${SITE.email}`}
            aria-label="Escribir por email"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10"
          >
            <Mail className="h-4 w-4" />
          </a>
          <Link href="/contacto" className="btn btn-primary">
            Solicitar cotización <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white xl:hidden"
          onClick={() => setMenu((v) => !v)}
          aria-expanded={menu}
          aria-controls="mobile-menu"
          aria-label={menu ? "Cerrar menú" : "Abrir menú"}
        >
          {menu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {menu && (
          <m.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="fixed inset-x-0 top-16 h-[calc(100dvh-4rem)] overflow-y-auto bg-ink-950/95 px-4 pb-10 pt-6 backdrop-blur-xl xl:hidden"
          >
            <nav aria-label="Móvil" className="flex flex-col">
              {MAIN_NAV.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  aria-current={active(n.href) ? "page" : undefined}
                  className={cn("border-b border-white/10 py-4 font-display text-xl", active(n.href) ? "text-accent-cyan" : "text-white")}
                >
                  {n.label}
                </Link>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-3">
              <Link href="/contacto" className="btn btn-primary">
                Solicitar cotización <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={`mailto:${SITE.email}`} className="btn btn-outline">
                <Mail className="h-4 w-4" /> {SITE.email}
              </a>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
