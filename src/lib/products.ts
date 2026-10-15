// Datos migrados del Catálogo Distrinova Oil & Gas 2026 (fichas 05/2025).
export type CategoryKey = "sellado" | "valvulas" | "canerias";

// Orden de aparición en /productos (criterio de importancia del cliente): accesorios → válvulas → juntas al final.
export const CATEGORY_LABEL: Record<CategoryKey, string> = {
  canerias: "Accesorios de cañería",
  valvulas: "Válvulas",
  sellado: "Juntas industriales",
};

/** Subgrupos dentro de cada categoría (criterio habitual de la industria: sellado dinámico vs. estático, tipo de válvula, tipo de accesorio). */
export const GROUPS: Record<CategoryKey, { label: string; hint: string }[]> = {
  sellado: [
    { label: "Empaquetaduras trenzadas", hint: "Sellado dinámico de ejes y vástagos en bombas y válvulas" },
    { label: "Juntas y selladores de brida", hint: "Sellado estático entre superficies bridadas" },
  ],
  valvulas: [
    { label: "Válvulas esféricas", hint: "Cierre rápido y hermético de un cuarto de vuelta" },
    { label: "Válvulas de mariposa", hint: "Control de flujo en líneas de gran diámetro" },
  ],
  canerias: [
    { label: "Codos y tapas", hint: "Cambios de dirección y cierres de cañería para soldar" },
    { label: "Tees y reducciones", hint: "Derivaciones y cambios de diámetro para soldar" },
  ],
};

export interface Table {
  title: string;
  head: string[];
  rows: string[][];
  note?: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: CategoryKey;
  group: string;
  image?: string;
  /** "cover" para fotos con fondo propio (no blanco). */
  imageFit?: "cover";
  description: string;
  /** Datos clave visibles en la tarjeta. */
  highlights: { label: string; value: string }[];
  /** Especificaciones completas (ficha técnica). */
  specs: [string, string][];
  features: string[];
  applications?: string[];
  tables?: Table[];
  /** Marca que importa Distrinova. */
  brand: string;
  /** Tarjeta "armada" a la espera de foto y ficha definitivas del cliente: se muestra con sello "Próximamente" y sin ficha. */
  pending?: boolean;
}

const PACKING_SECTIONS: Table = {
  title: "Fraccionamiento estándar",
  head: ["Sección (pulg.)", "1/8", "3/16", "1/4", "5/16", "3/8", "7/16", "1/2", "9/16", "5/8", "3/4", "7/8", "1"],
  rows: [["Sección (mm)", "3,2", "4,8", "6,4", "7,9", "9,5", "11,1", "12,7", "14,3", "15,9", "19,1", "22,2", "25,4"]],
};


// Todo el Catálogo Oil & Gas 2026 corresponde a la línea DNova (insumos para petróleo, gas e industrias).
const CATALOG: Omit<Product, "brand">[] = [
  {
    id: "empaquetadura-teflon",
    name: "Empaquetadura Teflon",
    subtitle: "Fibra acrílica con dispersión de PTFE",
    category: "sellado",
    group: "Empaquetaduras trenzadas",
    image: "/products/empaquetadura-teflon.jpg",
    description:
      "Empaquetadura adaptable a casi cualquier equipo: bombas centrífugas, agitadores, mezcladores, reactores y válvulas en celulosa y papel, alimenticia, ingenios azucareros, bodegas y procesos con fluidos químicos que no deben contaminarse.",
    highlights: [
      { label: "Temperatura", value: "-80 °C a 230 °C" },
      { label: "Presión", value: "20 / 80 / 100 bar" },
      { label: "pH", value: "2 – 12" },
    ],
    specs: [
      ["Material", "Filamentos de fibra acrílica tratada con dispersión de PTFE e inmersión en lubricante"],
      ["Temperatura", "-80 °C hasta 230 °C"],
      ["Presión (bomba centrífuga / vástago alternativo / válvula)", "20 / 80 / 100 bar"],
      ["Velocidad máxima", "12 m/s"],
      ["pH", "2 – 12"],
      ["Densidad", "1,3 g/cm³"],
      ["Color", "Blanco"],
    ],
    features: [
      "Gran resistencia química",
      "Compacta y flexible, fácil instalación",
      "No contamina los fluidos",
      "Bajo costo",
      "Reemplaza en muchos casos a empaquetaduras de filamento de PTFE puro",
      "Buen desempeño en agua, vapor, gases y productos químicos en general",
    ],
    tables: [PACKING_SECTIONS],
  },
  {
    id: "empaquetadura-grafitada",
    name: "Empaquetadura Grafitada",
    subtitle: "Hilos de algodón lubricado y grafitado",
    category: "sellado",
    group: "Empaquetaduras trenzadas",
    image: "/products/empaquetadura-grafitada.webp",
    description:
      "Uso general en bombas centrífugas con condiciones poco exigentes de temperatura y presión. Ideal para agua dulce, caliente o fría, agua salada pura o contaminada, y válvulas de baja presión. Reemplaza los usos más comunes del antiguo amianto grafitado, a menor temperatura.",
    highlights: [
      { label: "Temperatura", value: "-30 °C a 130 °C" },
      { label: "Presión", value: "10 / 20 / 35 bar" },
      { label: "pH", value: "6 – 8" },
    ],
    specs: [
      ["Material", "Hilos de algodón lubricado y grafitado, trenzados en diagonal"],
      ["Temperatura", "-30 °C hasta 130 °C"],
      ["Presión (bomba centrífuga / vástago alternativo / válvula)", "10 / 20 / 35 bar"],
      ["Velocidad máxima", "10 m/s"],
      ["pH", "6 – 8"],
      ["Densidad", "1,1 g/cm³"],
    ],
    features: [
      "Excelente sellado en aplicaciones generales",
      "Buena resistencia al desgaste",
      "Fácil instalación",
      "No endurece ni se cristaliza",
      "Compatible con una amplia gama de líquidos",
    ],
    tables: [PACKING_SECTIONS],
  },
  {
    id: "empaquetadura-grafito-puro",
    name: "Empaquetadura Grafito Puro",
    subtitle: "Filamentos de grafito expandido",
    category: "sellado",
    group: "Empaquetaduras trenzadas",
    image: "/products/empaquetadura-grafito-puro.webp",
    description:
      "Para bombas centrífugas con fluidos limpios y mínimo goteo: combustibles, solventes, aceites o lubricantes, incluso a elevadas temperaturas como en sistemas de transmisión de calor. También en válvulas de vapor e hidrocarburos, gases y productos químicos.",
    highlights: [
      { label: "Temperatura", value: "-200 °C a 450 °C" },
      { label: "Presión", value: "25 / 80 / 280 bar" },
      { label: "pH", value: "0 – 14" },
    ],
    specs: [
      ["Material", "Filamentos de grafito expandido trenzados en diagonal, con pasaje posterior por matriz calibrada"],
      ["Temperatura", "-200 °C hasta 450 °C (con vapor 650 °C)"],
      ["Presión (bomba centrífuga / vástago alternativo / válvula)", "25 / 80 / 280 bar"],
      ["Velocidad máxima", "20 m/s"],
      ["pH", "0 – 14"],
      ["Densidad", "1,1 g/cm³"],
    ],
    features: [
      "Menor coeficiente de fricción",
      "Máxima conductividad térmica",
      "Goteo mínimo, pudiendo llegar a nulo",
      "Sin desgaste para los ejes",
      "Compatible con casi todos los fluidos (excepto agentes oxidantes)",
    ],
    tables: [PACKING_SECTIONS],
  },
  {
    id: "cinta-ptfe-expandido",
    name: "Cinta de PTFE expandido",
    subtitle: "Sellador para bridas y superficies de sellado",
    category: "sellado",
    group: "Juntas y selladores de brida",
    image: "/products/cinta-ptfe.jpg",
    description:
      "Material de sellado de alta performance de PTFE puro expandido. Su estructura flexible y compresible se adapta a superficies irregulares con excelente estanqueidad. Se instala directamente sobre la cara de sellado, reemplazando juntas tradicionales.",
    highlights: [
      { label: "Temperatura", value: "-100 °C a 280 °C" },
      { label: "pH", value: "0 – 14" },
      { label: "Presión máx.", value: "Gas 1,6 MPa · Líquidos 6,4 MPa" },
    ],
    specs: [
      ["Densidad", "0,5 – 0,8 g/cm³"],
      ["Resistencia a la tracción", "≥ 8 MPa"],
      ["Volatilidad", "≤ 1,0 %"],
      ["Dureza", "HA 30 – 70"],
      ["Relajación por fluencia", "≤ 40 %"],
      ["Temperatura de trabajo", "-100 °C a 280 °C"],
      ["Punto de fusión", "327 °C"],
      ["Humedad", "≤ 0,01 %"],
      ["pH", "0 – 14"],
      ["Presión máxima de trabajo", "Gas 1,6 MPa · Líquidos 6,4 MPa"],
    ],
    features: [
      "Alta flexibilidad y adaptación a superficies irregulares",
      "Bajo coeficiente de fricción",
      "Excelente resistencia química",
      "Resiste altas y bajas temperaturas",
      "No envejece ni se endurece",
      "Compatible con requisitos FDA",
    ],
    applications: [
      "Bridas de acero y acero inoxidable",
      "Equipos petroquímicos",
      "Industria farmacéutica y alimenticia",
      "Plantas químicas",
      "Centrales energéticas",
      "Recipientes a presión",
      "Tuberías y conductos industriales",
      "Superficies irregulares o deterioradas",
    ],
    tables: [
      {
        title: "Dimensiones estándar",
        head: ["Ancho (mm)", "Espesor (mm)", "Largo (m)"],
        rows: [
          ["1,5", "3", "30"], ["3", "2", "30"], ["5", "2", "20"], ["6", "3", "15"], ["7", "2,5", "15"],
          ["8", "3", "15"], ["9", "4", "10"], ["10", "3", "10"], ["10", "4", "10"], ["12", "4", "8"],
          ["14", "5", "5"], ["15", "5", "5"], ["16", "3", "5"], ["16", "5", "5"], ["17", "5", "5"],
          ["18", "5", "5"], ["20", "5", "5"], ["25", "5", "5"], ["30", "5", "5"], ["40", "4", "5"],
          ["50", "3", "5"], ["100", "1", "5"],
        ],
        note: "Otras medidas especiales, consultar disponibilidad.",
      },
    ],
  },
  {
    id: "junta-espiralada-cgi",
    name: "Junta espiralada CGI",
    subtitle: "Aro interior SS316 y aro exterior acero al carbono · Relleno de grafito · Clase 150",
    category: "sellado",
    group: "Juntas y selladores de brida",
    image: "/products/junta-espiralada.jpg",
    description:
      "Juntas espiraladas para el sellado de uniones bridadas, tapas de inspección, intercambiadores de calor, recipientes a presión, bombas, compresores y válvulas en industrias petroquímicas, farmacéuticas, navales, alimenticias, energía y centrales nucleares.",
    highlights: [
      { label: "Normas", value: "DIN 2615-1992 · DIN 2616-1991" },
      { label: "Fabricación", value: "ASME B16.20 · Clase 150" },
      { label: "Rango", value: "DN 10 mm a DN 3000 mm" },
    ],
    specs: [
      ["Tipo", "Spiral Wound Gasket CGI"],
      ["Diseño", "Espiralada con aro interior y exterior"],
      ["Aro interior", "Acero inoxidable AISI 316"],
      ["Aro exterior", "Acero al carbono"],
      ["Relleno", "Grafito flexible"],
      ["Norma de fabricación", "ASME B16.20"],
      ["Aplicación en bridas", "ASME B16.5"],
      ["Clase de presión", "Clase 150"],
      ["Configuración", "CGI (Inner & Outer Ring)"],
      ["Rango dimensional estándar", "DN 10 mm a DN 3000 mm"],
      ["Geometrías disponibles", "Circular, ovalada, rectangular y especiales"],
    ],
    features: [
      "Sellado confiable en servicios de alta presión y temperatura",
      "El aro interior minimiza erosión y desgaste de bridas",
      "Alta resistencia química: fluidos corrosivos y ambientes agresivos",
      "Recomendada para bridas Flat Face (FF) y Raised Face (RF), fluidos corrosivos y tóxicos, y aplicaciones Clase 900 y superiores",
    ],
    tables: [
      {
        title: "Dimensiones generales (mm) · ASME B16.20 para bridas ASME B16.5 Clase 150",
        head: ["NPS", "Clase", "D1", "D2", "D3", "D4"],
        rows: [
          ["1/2", "150", "14,2", "19,1", "31,8", "47,8"],
          ["3/4", "150", "20,6", "25,4", "39,6", "57,2"],
          ["1", "150", "26,9", "31,8", "47,8", "66,8"],
          ["1 1/4", "150", "38,1", "47,8", "60,5", "76,2"],
          ["1 1/2", "150", "44,5", "54,1", "69,9", "85,9"],
          ["2", "150", "55,6", "69,9", "85,9", "104,9"],
          ["2 1/2", "150", "66,5", "82,6", "98,6", "124,0"],
          ["3", "150", "81,0", "101,6", "120,7", "136,7"],
          ["4", "150", "106,4", "127,0", "149,4", "174,8"],
          ["5", "150", "131,8", "155,7", "177,8", "196,9"],
          ["6", "150", "157,2", "182,6", "209,6", "222,3"],
          ["8", "150", "215,9", "233,4", "263,7", "279,4"],
          ["10", "150", "268,2", "287,3", "317,5", "339,9"],
          ["12", "150", "317,5", "339,9", "374,7", "409,7"],
          ["14", "150", "349,3", "371,6", "406,4", "450,9"],
          ["16", "150", "400,1", "422,4", "463,6", "514,4"],
          ["18", "150", "449,3", "474,7", "527,1", "549,4"],
          ["20", "150", "500,1", "525,5", "577,9", "606,6"],
          ["24", "150", "603,3", "628,7", "685,8", "717,6"],
        ],
        note: "D1: Ø interior del aro interior · D2: Ø interior del sello · D3: Ø exterior del sello · D4: Ø exterior del aro centrador. Valores según ASME B16.20. Otras medidas especiales, consultar disponibilidad.",
      },
    ],
  },
  {
    id: "valvula-esferica-3c-acero",
    name: "Válvula esférica 3 cuerpos",
    subtitle: "Acero al carbono ASTM A216 WCB · 1000 WOG",
    category: "valvulas",
    group: "Válvulas esféricas",
    image: "/products/valvula-esferica-3c-acero.jpg",
    description:
      "Válvula de bola de 3 cuerpos de alta resistencia para aplicaciones industriales exigentes que requieren cierre seguro y confiable en sistemas de alta presión. Ideal para petróleo y gas, química, petroquímica, agua, vapor y sistemas industriales en general.",
    highlights: [
      { label: "Clasificación", value: "1000 WOG (PN 69)" },
      { label: "Cuerpo", value: "ASTM A216 WCB" },
      { label: "Medidas", value: '1/4" a 2"' },
    ],
    specs: [
      ["Cuerpo (Body)", "ASTM A216 WCB"],
      ["Tapas (Caps)", "ASTM A216 WCB"],
      ["Esfera (Balls)", "ASTM A582 G416"],
      ["Vástago (Stem)", "ASTM A582 G416"],
      ["Asientos (Seats)", "PTFE / Graphite"],
      ["Sello de vástago inferior", "PTFE / Graphite"],
      ["Sello de vástago superior", "PTFE / Graphite"],
      ["Arandela de empuje", "SAE 1020 Zinc Plated"],
      ["Palanca", "SAE 1010 Zinc Plated / Plastic Covered"],
      ["Sello de tapa", "PTFE / Graphite"],
      ["Tuerca", "Gr. 8.8 / Gr. 10.9"],
      ["Clasificación", "1000 WOG (PN 69)"],
    ],
    features: [
      "Máxima resistencia: materiales de alta calidad",
      "Cierre confiable con asientos y sellos en PTFE / grafito",
      "Fácil mantenimiento: diseño de 3 cuerpos desmontable",
    ],
    tables: [
      {
        title: "Dimensiones generales (mm)",
        head: ["Medida", "DN", "L", "W", "H", "E"],
        rows: [
          ['1/4"', "11,0", "65", "50", "55", "105"],
          ['3/8"', "12,5", "65", "50", "55", "105"],
          ['1/2"', "15,0", "75", "57", "60", "105"],
          ['3/4"', "20,0", "80", "62", "65", "130"],
          ['1"', "25,0", "90", "70", "70", "130"],
          ['1 1/4"', "32,0", "110", "80", "82", "155"],
          ['1 1/2"', "38,0", "120", "90", "90", "155"],
          ['2"', "50,0", "140", "105", "100", "180"],
        ],
      },
    ],
  },
  {
    id: "valvula-esferica-3c-inox",
    name: "Válvula esférica 3 cuerpos CF8M",
    subtitle: "Roscada · AISI 316 · 1000 WOG",
    category: "valvulas",
    group: "Válvulas esféricas",
    image: "/products/valvula-esferica-3c-inox.jpg",
    description:
      "Válvula de bola de 3 cuerpos de alta resistencia, en acero inoxidable AISI 316, para aplicaciones industriales exigentes que requieren cierre seguro y confiable en sistemas de alta presión.",
    highlights: [
      { label: "Clasificación", value: "1000 WOG (PN 69)" },
      { label: "Cuerpo", value: "AISI 316 (CF8M)" },
      { label: "Conexión", value: "Roscada" },
    ],
    specs: [
      ["Cuerpo", "AISI 316"],
      ["Tapas", "AISI 316"],
      ["Esferas", "AISI 316"],
      ["Vástago", "AISI 316"],
      ["Asientos", "PTFE-R"],
      ["Sello de vástago inferior / superior", "PTFE"],
      ["Prensa metálico", "AISI 304"],
      ["Palanca", "AISI 304 / plástico"],
      ["Sello de tapa", "PTFE con grafito"],
      ["Tuerca y tornillo", "Gr. 8.8 / Gr. 10.9 (AISI 304)"],
      ["Resorte y arandela", "AISI 304"],
      ["Clasificación", "1000 WOG (PN 69)"],
    ],
    features: [
      "Alta resistencia: acero inoxidable AISI 316 para máxima durabilidad y resistencia a la corrosión",
      "Sellado confiable: asientos de PTFE-R y sellos de vástago en PTFE",
      "Diseño de 3 piezas: fácil mantenimiento y desensamble sencillo",
    ],
    tables: [
      {
        title: "Dimensiones generales (mm)",
        head: ["Medida", "Dn", "L", "H", "D0"],
        rows: [
          ['1/4"', "11,6", "75", "51", "105"],
          ['3/8"', "12,5", "75", "51", "105"],
          ['1/2"', "15", "75", "54", "105"],
          ['3/4"', "20", "80", "60", "130"],
          ['1"', "25", "90", "66", "130"],
          ['1 1/4"', "32", "110", "77", "155"],
          ['1 1/2"', "38", "120", "83", "155"],
          ['2"', "50", "140", "95", "180"],
        ],
      },
    ],
  },
  {
    id: "valvula-esferica-2c-inox",
    name: "Válvula esférica 2 cuerpos CF8M",
    subtitle: "Roscada · AISI 316 · 1000 WOG",
    category: "valvulas",
    group: "Válvulas esféricas",
    image: "/products/valvula-esferica-2c-inox.jpg",
    description:
      "Válvula de bola de 2 cuerpos, roscada, para un cierre hermético y confiable en aplicaciones de la industria del petróleo y gas, química, alimenticia e industrial en general.",
    highlights: [
      { label: "Clasificación", value: "1000 WOG (PN 69)" },
      { label: "Cuerpo", value: "Fundición AISI 316" },
      { label: "Conexión", value: "Roscada" },
    ],
    specs: [
      ["Cuerpo", "Fundición AISI 316"],
      ["Tapas", "Acero inoxidable AISI 316 / CF8M"],
      ["Esferas", "Acero inoxidable AISI 316 / CF8M"],
      ["Vástago", "Acero inoxidable AISI 316 / CF8M"],
      ["Asientos", "PTFE / grafito"],
      ["Sello de vástago inferior / superior", "PTFE"],
      ["Prensa metálico", "AISI 304"],
      ["Palanca", "AISI 304 / plástico"],
      ["Sello de tapa", "PTFE con grafito"],
      ["Tuerca", "Gr. 8.8 / Gr. 10.9 (AISI 304)"],
      ["Clasificación", "1000 WOG (PN 69)"],
    ],
    features: [
      "Máxima confiabilidad: cierre hermético y larga vida útil",
      "Resistencia superior a la corrosión (AISI 316 / CF8M)",
      "Vástago con doble sello y asientos de PTFE / grafito",
    ],
    tables: [
      {
        title: "Dimensiones generales (mm)",
        head: ["Medida", "DN", "L", "H", "E"],
        rows: [
          ['1/4"', "11,6", "60", "50", "105"],
          ['3/8"', "12,5", "60", "50", "105"],
          ['1/2"', "15", "65", "55", "105"],
          ['3/4"', "20", "75", "60", "130"],
          ['1"', "25", "85", "65", "130"],
          ['1 1/4"', "32", "100", "75", "155"],
          ['1 1/2"', "38", "110", "80", "155"],
          ['2"', "50", "130", "90", "180"],
        ],
      },
    ],
  },
  {
    id: "valvula-mariposa",
    name: "Válvula de mariposa de hierro dúctil",
    subtitle: "Wafer con palanca · Hierro dúctil",
    category: "valvulas",
    group: "Válvulas de mariposa",
    image: "/products/valvula-mariposa.jpg",
    description:
      "Válvula de mariposa tipo wafer para el control de flujo en sistemas de agua, aire, aceites y fluidos en general. Diseño compacto y de bajo peso que permite instalación entre bridas, con accionamiento manual por palanca con sistema de ajuste por posiciones y traba.",
    highlights: [
      { label: "Presión", value: "PN10 / PN16" },
      { label: "Temperatura", value: "0 °C a 80 °C" },
      { label: "Medidas", value: "Desde DN50 (consultar)" },
    ],
    specs: [
      ["Tamaño del puerto", "Desde DN50 · consultar medidas disponibles"],
      ["Temperatura de trabajo", "0 °C a 80 °C"],
      ["Presión de trabajo", "PN10 / PN16"],
      ["Cuerpo", "Hierro dúctil"],
      ["Disco", "Hierro dúctil niquelado"],
      ["Asiento", "EPDM"],
      ["Eje", "Acero inoxidable AISI 420"],
      ["Accionamiento", "Manual con palanca"],
      ["Tipo de conexión", "Wafer (entre bridas)"],
      ["Normas", "Diseño según EN 593"],
      ["Medios aplicables", "Agua, aire, aceite"],
    ],
    features: [
      "Cuerpo en hierro dúctil, disco niquelado y asiento EPDM",
      "Eje en acero inoxidable AISI 420",
      "Palanca con traba y múltiples posiciones",
      "Sellado confiable y larga vida útil",
    ],
    applications: ["Sistemas de agua", "Aire comprimido", "Sistemas de calefacción y refrigeración", "Aceites y fluidos industriales"],
    tables: [
      {
        title: "Dimensiones (mm)",
        head: ["DN", "A", "B", "C", "F", "K", "D1", "D2", "L", "ØH", "Ø2"],
        rows: [
          ["50", "273", "161", "42", "46,1", "125", "51", "76,3", "235", "12,7", "9"],
          ["65", "296", "175", "44,7", "49,1", "145", "62,8", "89", "235", "12,7", "9"],
          ["80", "308", "181", "45,2", "49,1", "160", "77,3", "103,9", "235", "12,7", "9"],
          ["100", "346", "200", "52,1", "55,3", "180", "102,7", "135", "235", "15,8", "11"],
          ["125", "372", "213", "54,4", "58,8", "210", "121,8", "159", "280", "18,9", "14"],
          ["150", "397", "226", "55,8", "59,1", "240", "154,5", "188,4", "280", "18,9", "14"],
        ],
        note: "Medidas mayores a DN150, consultar disponibilidad.",
      },
    ],
  },
  {
    id: "bridas-acero",
    name: "Bridas de acero al carbono",
    subtitle: "",
    category: "canerias",
    group: "Bridas",
    image: "/products/bridas.webp",
    description: "Bridas de acero al carbono para instalaciones industriales. Ficha técnica con materiales, medidas y normas en preparación.",
    highlights: [],
    specs: [],
    features: [],
    pending: true,
  },
  {
    id: "bridas-inox",
    name: "Bridas de acero inoxidable",
    subtitle: "Para soldar y roscadas · Según norma",
    category: "canerias",
    group: "Bridas",
    description: "Bridas de acero inoxidable para instalaciones industriales. Ficha técnica con materiales, medidas y normas en preparación.",
    highlights: [],
    specs: [],
    features: [],
    pending: true,
  },
  {
    id: "accesorios-acero",
    name: "Accesorios para soldar",
    subtitle: "",
    category: "canerias",
    group: "Accesorios",
    description: "Accesorios de acero al carbono para cañería. Ficha técnica con materiales, medidas y normas en preparación.",
    highlights: [],
    specs: [],
    features: [],
    pending: true,
  },
  {
    id: "accesorios-inox",
    name: "Accesorios de acero inoxidable",
    subtitle: "Para soldar · Medidas a confirmar",
    category: "canerias",
    group: "Accesorios",
    description: "Accesorios de acero inoxidable para cañería. Ficha técnica con materiales, medidas y normas en preparación.",
    highlights: [],
    specs: [],
    features: [],
    pending: true,
  },
  {
    id: "codos-y-tapas",
    name: "Codos y tapas",
    subtitle: "Para soldar · DN 15 a DN 1200",
    category: "canerias",
    group: "Codos y tapas",
    image: "/products/codos-y-tapas.webp",
    description:
      "Codos de 45°, 90° y 180° y tapas para cañerías, fabricados según normas DIN. Tabla completa de dimensiones, pesos y tolerancias en el catálogo PDF.",
    highlights: [
      { label: "Normas", value: "DIN 2605-1991 · DIN 2617-1991" },
      { label: "Rango", value: "DN 15 a DN 1200" },
      { label: "Espesor", value: "Serie 3" },
    ],
    specs: [
      ["Normas", "DIN 2605-1991 · DIN 2617-1991"],
      ["Tipos", "Codos a 45°, 90° y 180° · Tapas"],
      ["Rango", "DN 15 a DN 1200"],
      ["Espesor de pared", "Serie 3"],
      ["Tolerancia de espesor (codos)", "+15% / -12,5%"],
      ["Tolerancias dimensionales y de tapas", "Ver Tabla 17 del catálogo PDF"],
    ],
    features: ["Pesos teóricos calculados; pueden variar según tolerancias de fabricación", "Tolerancias dimensionales por rango de DN en el catálogo PDF"],
    tables: [
      {
        title: "Extracto de la Tabla 16 (mm / kg)",
        head: ["DN", "Ø exterior", "Espesor", "Codo 90° (kg)"],
        rows: [
          ["15", "21,3", "2,0", "0,04"],
          ["25", "33,7", "2,6", "0,12"],
          ["50", "60,3", "2,9", "0,49"],
          ["100", "114,3", "3,6", "2,37"],
          ["150", "168,3", "4,5", "6,50"],
          ["200", "219,1", "6,3", "15,9"],
          ["300", "323,9", "7,1", "40"],
        ],
        note: "Tabla completa (45°, 90°, 180° y tapas) en el catálogo PDF.",
      },
    ],
  },
  {
    id: "tees-y-reducciones",
    name: "Tees y reducciones",
    subtitle: "Tee igual o reductora · Reductor concéntrico y excéntrico",
    category: "canerias",
    group: "Tees y reducciones",
    image: "/products/tees-y-reducciones.webp",
    description:
      "Tees (iguales o reductoras) y reductores concéntricos y excéntricos para cañerías. Tablas completas de diámetros, longitudes y pesos en el catálogo PDF.",
    highlights: [
      { label: "Normas", value: "DIN 2615 · DIN 2616 · JIS B2311" },
      { label: "Rango", value: "DN 15 a DN 1500" },
      { label: "Tipos", value: "Tee · Reductor conc. / exc." },
    ],
    specs: [
      ["Normas", "DIN 2615-1992 · DIN 2616-1991 · JIS B2311-1997"],
      ["Tipos", "Tee igual o reductora · Reductor concéntrico · Reductor excéntrico"],
      ["Rango", "DN 15 a DN 1500"],
      ["Espesor de pared", "Consultar Tablas 1, 2 y 9 del catálogo PDF"],
    ],
    features: ["Pesos teóricos calculados; pueden variar según tolerancias de fabricación", "Combinaciones de diámetros en el catálogo PDF"],
  },
  {
    id: "esparragos-tuercas",
    name: "Espárragos y tuercas",
    subtitle: "Espárragos B7 · Tuercas 2H",
    category: "canerias",
    group: "Espárragos y tuercas",
    description: "Espárragos B7 y tuercas 2H (negros y zincados amarillos) para uniones bridadas. Ficha técnica con medidas y normas en preparación.",
    highlights: [],
    specs: [],
    features: [],
    pending: true,
  },
  {
    id: "acople-ranurado",
    name: "Acoples ranurados",
    subtitle: "Rígidos y flexibles · Para redes contra incendio",
    category: "canerias",
    group: "Acoples ranurados",
    description: "Acoples ranurados rígidos y flexibles para redes de distribución de agua. Ficha técnica con medidas y normas en preparación.",
    highlights: [],
    specs: [],
    features: [],
    pending: true,
  },
];

export const PRODUCTS: Product[] = CATALOG.map((p) => ({ ...p, brand: "DNova" }));

