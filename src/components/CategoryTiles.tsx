import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Stagger, StaggerItem } from "./Reveal";
import { CATEGORY_LABEL, PRODUCTS, type CategoryKey } from "@/lib/products";
import { BLUR } from "@/lib/blur";

const blurProps = (src: string) => (BLUR[src] ? ({ placeholder: "blur", blurDataURL: BLUR[src] } as const) : {});

const TILES: { key: CategoryKey; label?: string; text: string; ids: string[]; photos?: { src: string; alt: string }[] }[] = [
  {
    key: "canerias",
    label: "Bridas y accesorios",
    text: "Bridas, codos, tapas, tees y reducciones para soldar, de DN 15 a DN 1500, según normas DIN y JIS.",
    ids: [],
    photos: [
      { src: "/products/bridas.webp", alt: "Bridas de acero: slip-on, welding neck, roscada y ciega" },
      { src: "/products/accesorios-soldar.webp", alt: "Accesorios para soldar: codos, tee, reducciones y tapa" },
      { src: "/photos/canerias-gris.jpg", alt: "Codos y bridas abulonadas en una línea de cañería" },
    ],
  },
  { key: "valvulas", text: "Válvulas esféricas 1000 WOG en acero e inoxidable y válvulas de mariposa wafer de hierro dúctil.", ids: ["valvula-esferica-3c-acero", "valvula-esferica-3c-inox", "valvula-mariposa"] },
  { key: "sellado", text: "Empaquetaduras trenzadas, juntas espiraladas y cinta de PTFE para sellar ejes, vástagos y bridas.", ids: ["empaquetadura-grafito-puro", "junta-espiralada-cgi", "cinta-ptfe-expandido"] },
];

export function CategoryTiles() {
  return (
    <Stagger className="mt-14 grid gap-4 lg:grid-cols-3">
      {TILES.map((t) => {
        const items = t.ids.map((id) => PRODUCTS.find((p) => p.id === id)!).filter(Boolean);
        return (
          <StaggerItem key={t.key} className="h-full">
            <Link href={`/productos#${t.key}`} className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/25 sm:p-8">
              <div className="grid h-36 grid-cols-3 gap-2">
                {t.photos?.map((ph) => (
                  <div key={ph.src} className="relative overflow-hidden rounded-xl bg-white">
                    <Image src={ph.src} alt={ph.alt} fill sizes="140px" {...blurProps(ph.src)} className="object-cover" />
                  </div>
                ))}
                {items.map((p) => (
                  <div key={p.id} className="relative overflow-hidden rounded-xl bg-white">
                    <Image src={p.image!} alt={p.name} fill sizes="140px" {...blurProps(p.image!)} unoptimized={p.image!.endsWith(".svg")} className={p.imageFit === "cover" ? "object-cover" : "object-contain p-1.5"} />
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-start justify-between gap-4">
                <h3 className="font-display text-3xl font-semibold text-white lg:min-h-[4.5rem]">{t.label ?? CATEGORY_LABEL[t.key]}</h3>
                <ArrowUpRight className="mt-1.5 h-5 w-5 shrink-0 text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" aria-hidden="true" />
              </div>
              <p className="mt-2 text-slate-400 lg:min-h-[4.5rem]">{t.text}</p>
            </Link>
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}
