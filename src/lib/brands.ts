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

// Marcas que Distrinova importa. TODO(cliente): falta la tercera marca (soldaduras y alambres).
export const BRANDS: Brand[] = [
  { name: "DNova", logo: "/brands/dnova.webp", w: 1182, h: 220, line: "Insumos para petróleo, gas e industrias: sellado industrial, válvulas y accesorios de cañería." },
  { name: "Fixy", logo: "/brands/fixy.webp", w: 226, h: 260, line: "Selladores, fijaciones, tornillería y bulonería para obra y mantenimiento." },
];
