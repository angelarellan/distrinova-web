"use client";

import { useState } from "react";
import { BookOpen, ExternalLink, Loader2 } from "lucide-react";
import { SITE } from "@/lib/site";

/** El iframe de Heyzine solo se carga cuando la persona lo pide (no pesa en la carga inicial). */
export function CatalogEmbed() {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 bg-ink-900 sm:aspect-[16/10]">
      {!open ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-brand/15 via-ink-900 to-brand/5 p-6 text-center">
          <BookOpen className="h-10 w-10 text-accent-cyan" aria-hidden="true" />
          <p className="max-w-sm text-slate-300">Hojeá el catálogo completo en formato flipbook, sin descargas.</p>
          <button onClick={() => setOpen(true)} className="btn btn-light">
            Abrir catálogo interactivo
          </button>
        </div>
      ) : (
        <>
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center text-slate-400">
              <Loader2 className="h-6 w-6 animate-spin" aria-label="Cargando catálogo" />
            </div>
          )}
          <iframe src={SITE.catalogUrl} title="Catálogo Distrinova S.R.L." className="absolute inset-0 h-full w-full border-0" allowFullScreen sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms allow-presentation" referrerPolicy="strict-origin-when-cross-origin" onLoad={() => setLoaded(true)} />
          <a href={SITE.catalogUrl} target="_blank" rel="noopener noreferrer" className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-ink-950/80 px-3 py-1.5 text-xs text-slate-200 backdrop-blur hover:text-white">
            Pestaña nueva <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </>
      )}
    </div>
  );
}
