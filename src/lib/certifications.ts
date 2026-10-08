export interface Certification {
  name: string; // p. ej. "ISO 9001:2015"
  scope: string; // alcance, en pocas palabras
  /**
   * "en-proceso": la empresa está trabajando en la certificación (se muestra con esa leyenda).
   * "vigente": poner SOLO cuando exista un certificado a nombre de Distrinova S.R.L. (norma, número y entidad verificables).
   */
  status: "en-proceso" | "vigente";
}

export const CERTIFICATIONS: Certification[] = [
  { name: "ISO 9001:2015", scope: "Sistema de gestión de la calidad", status: "en-proceso" },
];
