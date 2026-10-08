import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE, SITE_URL } from "@/lib/site";
import { Providers } from "@/components/Providers";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const font = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-body", display: "swap" });

const TITLE = "Distrinova S.R.L. | Insumos industriales Oil & Gas";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s | Distrinova S.R.L." },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: ["insumos industriales", "válvulas industriales", "petróleo y gas", "sistemas de incendio", "industria alimenticia", "Distrinova"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: SITE.legalName,
    title: TITLE,
    description: SITE.description,
  },
  twitter: { card: "summary_large_image", title: TITLE, description: SITE.description },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
};

export const viewport: Viewport = {
  themeColor: "#0A0F1D",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.legalName,
  url: SITE_URL,
  email: SITE.email,
  telephone: SITE.phoneE164,
  description: SITE.description,
  contactPoint: [{ "@type": "ContactPoint", contactType: "sales", email: SITE.email, telephone: SITE.phoneE164, availableLanguage: "es" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR" className={`${font.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
        <Providers>
          <ScrollProgress />
          <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-ink-950">
            Saltar al contenido
          </a>
          <Header />
          <main id="contenido">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </Providers>
      </body>
    </html>
  );
}
