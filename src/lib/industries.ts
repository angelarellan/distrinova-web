
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
    summary: "Bridas, accesorios, válvulas, juntas…",
    detail:
      "En Distrinova S.R.L. nos dedicamos a la importación y distribución de insumos destinados a la industria del petróleo y gas. Nuestra oferta comprende productos para sistemas de conducción de fluidos, instalaciones industriales, montaje y mantenimiento, con diferentes materiales, medidas y especificaciones técnicas de acuerdo con las necesidades de cada aplicación.",
    specs: ["Bridas de acero al carbono", "Juntas industriales y espirometálicas", "Válvulas industriales", "Accesorios para soldar", "Espárragos y tuercas", "Cañerías de acero al carbono", "Empaquetaduras de grafito y PTFE", "Accesorios roscados"],
    productIds: ["bridas-acero", "esparragos-tuercas", "valvula-esferica-3c-acero", "valvula-esferica-3c-inox", "valvula-mariposa", "empaquetadura-grafito-puro", "junta-espiralada-cgi", "codos-y-tapas", "tees-y-reducciones"],
    more: ["Caños", "Bridas", "Otras válvulas"],
    photo: "/photos/refineria-noche.jpg",
    photoAlt: "Refinería al anochecer con torres iluminadas",
  },
  {
    slug: "incendio",
    title: "Sistemas de Incendio",
    summary: "Válvulas, acoples ranurados y caños para redes de agua.",
    detail:
      "Comercializamos una variedad de componentes destinados a redes de distribución de agua para sistemas de protección contra incendios. Nuestra línea incluye válvulas, acoples ranurados, cañerías y accesorios para instalaciones industriales y comerciales, con distintas medidas y especificaciones técnicas según los requerimientos de cada proyecto.",
    specs: ["Válvulas mariposa tipo wafer", "Válvulas de retención", "Acoples ranurados rígidos", "Accesorios ranurados", "Cañerías de acero al carbono", "Accesorios roscados", "Bridas industriales", "Accesorios para soldar"],
    productIds: ["bridas-acero", "accesorios-acero", "esparragos-tuercas", "valvula-mariposa", "junta-espiralada-cgi"],
    more: ["Acoples ranurados", "Caños"],
    photo: "/photos/incendio-collage-v4.jpg",
    photoAlt: "Válvula de hidrante, caños rojos ranurados y acoples ranurados para redes contra incendio",
  },
  {
    slug: "alimenticia",
    title: "Industria Alimenticia",
    summary: "Bridas, accesorios y válvulas en acero inoxidable, juntas en PTFE…",
    detail:
      "Donde el fluido no puede contaminarse, importan los materiales: PTFE inerte, acero inoxidable AISI 316 y sellos que no alteran el producto. Cinta de PTFE expandido compatible con requisitos FDA, empaquetadura Teflon bridas de acero inoxidable y válvulas esféricas en inoxidable.",
    specs: ["Cinta PTFE compatible FDA", "Empaquetadura Teflon (pH 2–12)", "Válvulas esféricas AISI 316", "Sellos de PTFE", "Bridas de acero inoxidable"],
    productIds: ["bridas-inox", "accesorios-inox", "esparragos-tuercas", "valvula-esferica-2c-inox", "valvula-esferica-3c-inox", "cinta-ptfe-expandido", "empaquetadura-teflon"],
    more: ["Bridas de acero inoxidable"],
    photo: "/photos/planta-inox.jpg",
    photoAlt: "Planta de procesos en acero inoxidable",
  },
];
