
export interface Industry {
  slug: string;
  title: string;
  summary: string;
  detail: string;
  specs: string[];
  productIds: string[];
  photo: string;
  photoAlt: string;
}

export const INDUSTRIES: Industry[] = [
  {
    slug: "petroleo-gas",
    title: "Petróleo & Gas",
    summary: "Sellado, válvulas y accesorios de cañería para instalaciones de hidrocarburos.",
    detail:
      "Líneas de proceso, bombas, intercambiadores y recipientes a presión requieren sellado confiable y componentes dimensionados según norma. Reunimos empaquetaduras de grafito puro para temperaturas extremas, juntas espiraladas ASME B16.20, válvulas esféricas 1000 WOG y accesorios para soldar.",
    specs: ["Grafito puro hasta 450 °C (650 °C con vapor)", "Juntas espiraladas ASME B16.20", "Válvulas esféricas 1000 WOG", "Accesorios DIN / JIS DN 15 a DN 1500"],
    productIds: ["empaquetadura-grafito-puro", "junta-espiralada-cgi", "valvula-esferica-3c-acero", "codos-y-tapas", "tees-y-reducciones"],
    photo: "/photos/refineria-noche.jpg",
    photoAlt: "Refinería al anochecer con torres iluminadas",
  },
  {
    slug: "incendio",
    title: "Sistemas de Incendio",
    summary: "Válvulas y componentes para redes de agua.",
    detail:
      "Las redes de agua exigen válvulas de operación simple y cierre confiable. Contamos con válvulas de mariposa wafer de hierro dúctil con asiento EPDM, PN10 / PN16. Consultanos por la línea disponible y las aprobaciones que requiere tu proyecto.",
    specs: ["Mariposa wafer, hierro dúctil", "Asiento EPDM", "PN10 / PN16", "Diseño según EN 593"],
    productIds: ["valvula-mariposa"],
    photo: "/photos/hidrante-valvula.jpg",
    photoAlt: "Válvulas rojas de una red contra incendio sobre pared amarilla",
  },
  {
    slug: "alimenticia",
    title: "Industria Alimenticia",
    summary: "Materiales inertes y acero inoxidable para procesos que no deben contaminarse.",
    detail:
      "Donde el fluido no puede contaminarse, importan los materiales: PTFE inerte, acero inoxidable AISI 316 y sellos que no alteran el producto. Cinta de PTFE expandido compatible con requisitos FDA, empaquetadura Teflon y válvulas esféricas en inoxidable.",
    specs: ["Cinta PTFE compatible FDA", "Empaquetadura Teflon (pH 2–12)", "Válvulas esféricas AISI 316", "Sellos de PTFE"],
    productIds: ["cinta-ptfe-expandido", "empaquetadura-teflon", "valvula-esferica-2c-inox", "valvula-esferica-3c-inox"],
    photo: "/photos/planta-inox.jpg",
    photoAlt: "Planta de procesos en acero inoxidable",
  },
];
