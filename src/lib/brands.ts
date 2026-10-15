export interface Brand {
  name: string;
  /** Ruta a un logo en /public. */
  logo: string;
  /** Dimensiones reales del archivo del logo. */
  w: number;
  h: number;
  /** Qué cubre la marca (se muestra en Nosotros). */
  line: string;
}

// Marcas que Distrinova importa.
export const BRANDS: Brand[] = [
  { name: "DNova", logo: "/brands/dnova.webp", w: 1182, h: 220, line: "Insumos para las industrias del petróleo, gas y sectores industriales en general. Bridas, juntas, válvulas y accesorios para sistemas de conducción de fluidos." },
  { name: "Fixy", logo: "/brands/fixy.webp", w: 226, h: 260, line: "Línea de adhesivos, selladores, elementos de fijación y accesorios destinados a aplicaciones de construcción, reparación y mantenimiento." },
  { name: "Hardweld", logo: "/brands/hardweld.webp", w: 1194, h: 257, line: "Electrodos revestidos y alambres para soldadura, orientados a trabajos de fabricación, montaje y mantenimiento industrial." },
];
