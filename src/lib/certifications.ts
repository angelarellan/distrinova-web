export interface Certification {
  name: string; // p. ej. "ISO 9001:2015"
  description: string;
  logo?: string; // ruta en /public
}

// TODO(cliente): completar solo con certificaciones que Distrinova realmente posea y pueda acreditar
// (certificado vigente). Mientras esté vacío, no se muestra ningún sello en el sitio.
export const CERTIFICATIONS: Certification[] = [];
