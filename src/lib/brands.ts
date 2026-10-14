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
  { name: "DNova", logo: "/brands/dnova.webp", w: 1182, h: 220, line: "Insumos para petróleo, gas e industrias: juntas industriales, válvulas y accesorios de cañería." },
  { name: "Fixy", logo: "/brands/fixy.webp", w: 226, h: 260, line: "Selladores, fijaciones, tornillería y bulonería para obra y mantenimiento." },
  { name: "Hardweld", logo: "/brands/hardweld.webp", w: 1194, h: 257, line: "Electrodos y alambre para soldar, para instalaciones, mantenimiento y procesos industriales." },
];
