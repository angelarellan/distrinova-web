
export interface Industry {
  slug: string;
  title: string;
  summary: string;
  detail: string;
  specs: string[];
  productIds: string[];
  /** Insumos disponibles bajo consulta (aún sin ficha), se muestran en el cuadro "Y más…". */
  more: string[];
  photo: string;
  photoAlt: string;
}

export const INDUSTRIES: Industry[] = [
  {
    slug: "petroleo-gas",
    title: "Petróleo & Gas",
    summary: "Sellado, válvulas y accesorios de cañería para instalaciones de hidrocarburos.",
    detail:
      "Líneas de proceso, bombas, intercambiadores y recipientes a presión requieren sellado confiable y componentes dimensionados según norma. Reunimos empaquetaduras de grafito puro para temperaturas extremas, juntas espiraladas ASME B16.20, válvulas esféricas 1000 WOG y de mariposa, caños, tubos y accesorios para soldar.",
    specs: ["Grafito puro hasta 450 °C (650 °C con vapor)", "Juntas espiraladas ASME B16.20", "Válvulas esféricas 1000 WOG", "Accesorios DIN / JIS DN 15 a DN 1500", "Caños", "Tubos"],
    productIds: ["empaquetadura-grafito-puro", "junta-espiralada-cgi", "valvula-esferica-3c-acero", "valvula-esferica-3c-inox", "valvula-mariposa", "codos-y-tapas", "tees-y-reducciones"],
    more: ["Caños", "Bridas", "Otras válvulas"],
    photo: "/photos/refineria-noche.jpg",
    photoAlt: "Refinería al anochecer con torres iluminadas",
  },
  {
    slug: "incendio",
    title: "Sistemas de Incendio",
    summary: "Válvulas, acoples ranurados y caños para redes de agua.",
    detail:
      "Las redes de agua exigen válvulas de operación simple y cierre confiable. Contamos con válvulas de mariposa wafer de hierro dúctil con asiento EPDM, PN10 / PN16. También trabajamos con acoples ranurados y caños. Consultanos por la línea disponible y las aprobaciones que requiere tu proyecto.",
    specs: ["Mariposa wafer, hierro dúctil", "Asiento EPDM", "PN10 / PN16", "Diseño según EN 593", "Acoples ranurados", "Caños"],
    productIds: ["valvula-mariposa"],
    more: ["Acoples ranurados", "Caños"],
    photo: "/photos/incendio-collage-v4.jpg",
    photoAlt: "Válvula de hidrante, caños rojos ranurados y acoples ranurados para redes contra incendio",
  },
  {
    slug: "alimenticia",
    title: "Industria Alimenticia",
    summary: "Materiales inertes y acero inoxidable para procesos que no deben contaminarse.",
    detail:
      "Donde el fluido no puede contaminarse, importan los materiales: PTFE inerte, acero inoxidable AISI 316 y sellos que no alteran el producto. Cinta de PTFE expandido compatible con requisitos FDA, empaquetadura Teflon bridas de acero inoxidable y válvulas esféricas en inoxidable.",
    specs: ["Cinta PTFE compatible FDA", "Empaquetadura Teflon (pH 2–12)", "Válvulas esféricas AISI 316", "Sellos de PTFE", "Bridas de acero inoxidable"],
    productIds: ["cinta-ptfe-expandido", "empaquetadura-teflon", "valvula-esferica-2c-inox", "valvula-esferica-3c-inox"],
    more: ["Bridas de acero inoxidable"],
    photo: "/photos/planta-inox.jpg",
    photoAlt: "Planta de procesos en acero inoxidable",
  },
];
