/** URL base del sitio en producción (dominio propio). Se puede sobreescribir con NEXT_PUBLIC_SITE_URL. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://www.distrinovagroup.com"
).replace(/\/$/, "");

export const SITE = {
  name: "Distrinova",
  legalName: "Distrinova S.R.L.",
  finalDomain: "www.distrinovagroup.com",
  email: "info@distrinovagroup.com",
  phoneE164: "+5491176158992",
  phoneDisplay: "+54 9 11 7615-8992",
  catalogUrl: "https://heyzine.com/flip-book/008c69a47e.html",
  catalogPdf: "/catalogo-distrinova-2026.pdf",
  description:
    "Insumos industriales de alta precisión para Petróleo, Gas, Sistemas de Incendio e Industria Alimenticia. Distribución B2B con respaldo técnico.",
} as const;

export const WA_NUMBER = "5491176158992";

export function waLink(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_DEFAULT_MESSAGE = "Hola Distrinova S.R.L., quisiera realizar una consulta...";

export const NAV = [
  { label: "Inicio", href: "#inicio" },
  { label: "Industrias", href: "#industrias" },
  { label: "Productos", href: "#productos" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const CATALOG_PDF_NAV = { label: "Catálogo PDF", href: "/catalogo-distrinova-2026.pdf" } as const;

export const MAIN_NAV = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Industrias", href: "/industrias" },
  { label: "Productos", href: "/productos" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
] as const;
