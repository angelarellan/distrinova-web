export type Block = { t: "p"; text: string } | { t: "h2"; text: string } | { t: "ul"; items: string[] };

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO
  readMinutes: number;
  image: string;
  imageAlt: string;
  productIds: string[];
  body: Block[];
}

// Contenido editorial inicial. Los datos técnicos de producto provienen del Catálogo Oil & Gas 2026.
export const POSTS: Post[] = [
  {
    slug: "como-elegir-una-empaquetadura-trenzada",
    title: "Cómo elegir una empaquetadura trenzada: fluido, presión, temperatura y pH",
    excerpt: "Teflon, grafitada o grafito puro: qué mirar antes de pedir el insumo para una bomba o una válvula.",
    category: "Selección técnica",
    date: "2026-09-18",
    readMinutes: 5,
    image: "/photos/mantenimiento.jpg",
    imageAlt: "Técnico trabajando sobre un equipo industrial",
    productIds: ["empaquetadura-teflon", "empaquetadura-grafitada", "empaquetadura-grafito-puro"],
    body: [
      { t: "p", text: "La empaquetadura trenzada es el sello dinámico clásico de bombas centrífugas, vástagos de válvulas y ejes de agitadores. Elegir mal no siempre se nota el primer día: aparece como goteo excesivo, desgaste de eje o paradas no programadas." },
      { t: "h2", text: "Los cuatro datos que definen la elección" },
      { t: "ul", items: ["Fluido y pH: determina la compatibilidad química del material.", "Temperatura de trabajo: define si el trenzado soporta el servicio.", "Presión: cambia según el equipo (bomba centrífuga, vástago alternativo o válvula).", "Velocidad del eje, en m/s: a mayor velocidad, más fricción y calor."] },
      { t: "h2", text: "Tres opciones, tres rangos de servicio" },
      { t: "p", text: "La empaquetadura Teflon (fibra acrílica con dispersión de PTFE) trabaja de -80 °C a 230 °C, con pH de 2 a 12 y presiones de 20 bar en bombas, 80 bar en vástagos alternativos y 100 bar en válvulas, hasta 12 m/s. Es una opción versátil para agua, vapor, gases y productos químicos." },
      { t: "p", text: "La grafitada, de hilos de algodón lubricado y grafitado, está pensada para servicios poco exigentes: -30 °C a 130 °C, pH de 6 a 8, hasta 35 bar en válvulas y 10 m/s. Es una alternativa económica para agua dulce, caliente o fría, y agua salada." },
      { t: "p", text: "El grafito puro cubre el extremo exigente: -200 °C a 450 °C (650 °C con vapor), pH de 0 a 14, hasta 280 bar en válvulas y 20 m/s. Tiene el menor coeficiente de fricción y la mayor conductividad térmica, pero no se recomienda con agentes oxidantes." },
      { t: "h2", text: "Un criterio práctico" },
      { t: "p", text: "Empezá por la temperatura y el pH; son los que descartan opciones más rápido. Después verificá presión y velocidad contra el equipo. Ante la duda, consultá la ficha técnica del producto o escribinos con los datos del servicio." },
    ],
  },
  {
    slug: "junta-espiralada-que-es-y-cuando-usarla",
    title: "Junta espiralada: qué es y cuándo conviene usarla",
    excerpt: "Cómo está construida una junta espiralada CGI y en qué uniones bridadas es la mejor opción.",
    category: "Sellado",
    date: "2026-09-04",
    readMinutes: 4,
    image: "/photos/bridas-ladrillo.jpg",
    imageAlt: "Cañería industrial con bridas sobre una pared de ladrillo",
    productIds: ["junta-espiralada-cgi"],
    body: [
      { t: "p", text: "Una junta espiralada se fabrica enrollando en espiral una cinta metálica y un material de relleno. El resultado es un sello que se comprime, recupera elasticidad y se adapta a las pequeñas irregularidades de las bridas." },
      { t: "h2", text: "Qué significa CGI" },
      { t: "p", text: "La configuración CGI incluye aro interior y aro exterior. En nuestra línea, el aro interior es de acero inoxidable AISI 316, el exterior de acero al carbono y el relleno de grafito flexible. El aro interior actúa como límite de compresión y protege el sello contra la erosión del fluido; el exterior centra la junta dentro de la brida." },
      { t: "h2", text: "Cuándo usarla" },
      { t: "ul", items: ["Bridas Flat Face (FF) y Raised Face (RF).", "Servicios de alta presión y alta temperatura.", "Fluidos corrosivos o tóxicos.", "Aplicaciones Clase 900 y superiores."] },
      { t: "h2", text: "Norma y medidas" },
      { t: "p", text: "Se fabrica según ASME B16.20 para bridas ASME B16.5. Las dimensiones estándar cubren de DN 10 mm a DN 3000 mm, y también hay geometrías circulares, ovaladas, rectangulares y especiales. En la ficha del producto publicamos la tabla de dimensiones de Clase 150." },
    ],
  },
  {
    slug: "valvula-esferica-o-de-mariposa",
    title: "Válvula esférica o de mariposa: cómo elegir",
    excerpt: "Dos válvulas de un cuarto de vuelta con usos distintos. Una guía rápida para decidir.",
    category: "Válvulas",
    date: "2026-08-21",
    readMinutes: 4,
    image: "/photos/valvula-gas.jpg",
    imageAlt: "Cañería amarilla con válvula junto a un muro",
    productIds: ["valvula-esferica-3c-acero", "valvula-esferica-3c-inox", "valvula-mariposa"],
    body: [
      { t: "p", text: "Ambas se operan con un cuarto de vuelta, pero responden a necesidades distintas. La diferencia principal está en el tamaño de línea, la presión y el tipo de cierre." },
      { t: "h2", text: "Válvula esférica" },
      { t: "p", text: "Ofrece cierre hermético y confiable en diámetros pequeños y medios. Nuestras esféricas roscadas de 1/4\" a 2\" tienen clasificación 1000 WOG (PN 69), con asientos y sellos de PTFE o grafito. Están disponibles en acero al carbono ASTM A216 WCB y en acero inoxidable AISI 316 (CF8M), en versiones de 2 y de 3 cuerpos. La de 3 cuerpos permite desmontaje sencillo para inspección y limpieza." },
      { t: "h2", text: "Válvula de mariposa" },
      { t: "p", text: "Es compacta y liviana, y el diseño wafer se instala entre bridas. La de hierro dúctil con asiento EPDM trabaja de 0 °C a 80 °C con PN10/PN16, y se aplica en agua, aire y aceites. Es una buena alternativa cuando el diámetro crece y se busca controlar el flujo sin una válvula de gran peso." },
      { t: "h2", text: "Cómo decidir" },
      { t: "ul", items: ["Alta presión y diámetro chico: esférica.", "Línea de mayor diámetro con agua, aire o aceite: mariposa.", "Fluido corrosivo o requisitos de limpieza: esférica en inoxidable AISI 316.", "Inspección frecuente: esférica de 3 cuerpos."] },
    ],
  },
  {
    slug: "cinta-de-ptfe-expandido-para-bridas",
    title: "Cinta de PTFE expandido: sellar bridas sin juntas tradicionales",
    excerpt: "Una solución flexible para superficies irregulares o deterioradas, con amplio rango químico y térmico.",
    category: "Sellado",
    date: "2026-08-07",
    readMinutes: 3,
    image: "/photos/canerias-gris.jpg",
    imageAlt: "Cañerías metálicas con bridas",
    productIds: ["cinta-ptfe-expandido"],
    body: [
      { t: "p", text: "La cinta de PTFE expandido es un sellador de PTFE puro con estructura flexible y compresible. Se coloca directamente sobre la cara de sellado de la brida, lo que permite reemplazar la junta tradicional en muchas aplicaciones." },
      { t: "h2", text: "Propiedades que importan" },
      { t: "ul", items: ["Temperatura de trabajo: -100 °C a 280 °C.", "pH de 0 a 14: excelente resistencia química.", "Presión máxima de trabajo: 1,6 MPa en gases y 6,4 MPa en líquidos.", "Compatible con requisitos FDA.", "No envejece ni se endurece."] },
      { t: "h2", text: "Dónde se usa" },
      { t: "p", text: "Bridas de acero y acero inoxidable, equipos petroquímicos, industria farmacéutica y alimenticia, plantas químicas, centrales energéticas, recipientes a presión y tuberías industriales. Es especialmente útil en superficies irregulares o deterioradas, donde una junta rígida no asienta bien." },
      { t: "p", text: "La instalación es simple: se superpone la cinta alrededor de la cara de sellado y se unen las bridas con los pernos correspondientes. Hay medidas estándar de 1,5 mm a 100 mm de ancho; para otras medidas, consultanos disponibilidad." },
    ],
  },
  {
    slug: "codos-tees-y-reducciones-normas-din",
    title: "Codos, tees y reducciones para soldar: guía rápida de normas DIN",
    excerpt: "Qué cubre cada norma y cómo elegir entre reductor concéntrico y excéntrico.",
    category: "Cañerías",
    date: "2026-07-24",
    readMinutes: 5,
    image: "/photos/canerias-azul.jpg",
    imageAlt: "Cañerías azules con codos y derivaciones",
    productIds: ["codos-y-tapas", "tees-y-reducciones"],
    body: [
      { t: "p", text: "Los accesorios para soldar a tope (butt weld) resuelven cambios de dirección, derivaciones y cambios de diámetro en una cañería. Su geometría y tolerancias se rigen por normas." },
      { t: "h2", text: "Qué norma cubre qué" },
      { t: "ul", items: ["DIN 2605: codos.", "DIN 2615: tees.", "DIN 2616: reducciones.", "DIN 2617: tapas.", "JIS B2311: tees y reducciones con medidas en milímetros, también presentes en nuestro catálogo."] },
      { t: "h2", text: "Reductor concéntrico vs. excéntrico" },
      { t: "p", text: "El concéntrico mantiene el mismo eje en ambos extremos y es el más habitual en líneas verticales o cuando la simetría importa. El excéntrico tiene un lado plano alineado; se usa para evitar bolsas de aire o acumulación de condensado, según se instale con el lado plano hacia arriba o hacia abajo." },
      { t: "h2", text: "Rangos disponibles" },
      { t: "p", text: "Nuestro catálogo cubre codos y tapas de DN 15 a DN 1200 y tees y reducciones de DN 15 a DN 1500. Los pesos publicados son teóricos y pueden variar según las tolerancias de fabricación. Para espesores de pared y combinaciones de diámetros, consultá las tablas del catálogo." },
    ],
  },
  {
    slug: "materiales-para-la-industria-alimenticia",
    title: "Materiales para la industria alimenticia: por qué PTFE y acero AISI 316",
    excerpt: "Inercia química, limpieza y resistencia a la corrosión: criterios para elegir sellos y válvulas.",
    category: "Industria alimenticia",
    date: "2026-07-10",
    readMinutes: 4,
    image: "/photos/planta-alimenticia.jpg",
    imageAlt: "Operario en una planta de proceso de acero inoxidable",
    productIds: ["cinta-ptfe-expandido", "empaquetadura-teflon", "valvula-esferica-2c-inox"],
    body: [
      { t: "p", text: "En una línea de alimentos, un sello o una válvula no solo debe resistir: no puede alterar el producto. Por eso los materiales importan tanto como la presión o la temperatura." },
      { t: "h2", text: "PTFE: inerte y versátil" },
      { t: "p", text: "El PTFE es químicamente inerte y soporta amplios rangos de temperatura. La cinta de PTFE expandido es compatible con requisitos FDA, y la empaquetadura Teflon se utiliza en industria alimenticia, ingenios azucareros y bodegas, entre otros procesos donde los fluidos no deben contaminarse." },
      { t: "h2", text: "Acero inoxidable AISI 316" },
      { t: "p", text: "Ofrece alta resistencia a la corrosión y es fácil de limpiar. Nuestras válvulas esféricas roscadas en inoxidable AISI 316 (CF8M) tienen asientos de PTFE y clasificación 1000 WOG (PN 69)." },
      { t: "h2", text: "Un recordatorio" },
      { t: "p", text: "Cada proceso tiene requisitos propios de higiene y documentación. Antes de definir un producto para una línea alimenticia, consultanos y confirmamos qué respaldo documental corresponde a tu aplicación." },
    ],
  },
];

export const fmtDate = (iso: string) => new Date(iso + "T12:00:00").toLocaleDateString("es-AR", { day: "numeric", month: "long", year: "numeric" });
