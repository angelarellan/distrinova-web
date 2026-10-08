export interface Certification {
  name: string; // p. ej. "ISO 9001:2015"
  scope: string; // alcance, en pocas palabras
  logo?: string; // ruta en /public (opcional)
  /** Poner en true SOLO cuando exista un certificado vigente a nombre de Distrinova S.R.L. (norma, número y entidad verificables). */
  confirmed: boolean;
}

// En producción solo se muestran las certificaciones con confirmed: true.
// En desarrollo se previsualizan todas (con la etiqueta "pendiente de confirmar").
export const CERTIFICATIONS: Certification[] = [
  { name: "ISO 9001:2015", scope: "Sistema de gestión de la calidad", confirmed: false },
];
