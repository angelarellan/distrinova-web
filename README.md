# Distrinova S.R.L. — sitio institucional

Sitio B2B de Distrinova (insumos industriales Oil & Gas). Next.js 14 (App Router), TypeScript, Tailwind CSS y Framer Motion.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
```

## Configuración

Copiá `.env.example` a `.env.local`. La URL pública se toma de `NEXT_PUBLIC_SITE_URL`
(con respaldo a la URL de Vercel). Al migrar al dominio propio:
`NEXT_PUBLIC_SITE_URL=https://distrinovagroup.com`.

## Contenido editable

| Qué | Dónde |
| --- | --- |
| Productos y fichas técnicas | `src/lib/products.ts` |
| Industrias | `src/lib/industries.ts` |
| Artículos del blog | `src/lib/blog.ts` |
| Marcas | `src/lib/brands.ts` |
| Certificaciones (footer) | `src/lib/certifications.ts` |
| Datos de contacto | `src/lib/site.ts` |

Las cabeceras de seguridad (CSP, HSTS, etc.) están en `next.config.mjs`.
