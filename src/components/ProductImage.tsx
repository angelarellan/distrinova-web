"use client";

import Image from "next/image";
import { useRef } from "react";
import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { Product } from "@/lib/products";
import { cn } from "@/lib/utils";

interface Props {
  product: Product;
  sizes: string;
  priority?: boolean;
  parallax?: boolean;
  className?: string;
}

function Img({ product, sizes, priority, className }: Omit<Props, "parallax">) {
  const cover = product.imageFit === "cover";
  return (
    <Image
      src={product.image!}
      alt={product.name}
      fill
      sizes={sizes}
      priority={priority}
      fetchPriority={priority ? "high" : undefined}
      unoptimized={product.image!.endsWith(".svg")}
      className={cn(cover ? "object-cover" : "object-contain p-3", className)}
    />
  );
}

/** Versión con parallax sutil (solo transform). Monta un listener de scroll, por eso se usa solo cuando hace falta. */
function ParallaxImg(props: Omit<Props, "parallax">) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  return (
    <div ref={ref} className="absolute inset-0">
      <m.div style={{ y }} className="absolute inset-0 scale-[1.1]">
        <Img {...props} />
      </m.div>
    </div>
  );
}

/** Foto de producto en contenedor 4:3 con parallax sutil opcional. */
export function ProductImage({ product, sizes, priority, parallax, className }: Props) {
  const reduce = useReducedMotion();
  if (!product.image) return null;
  return (
    <div className={cn("relative aspect-[4/3] w-full overflow-hidden bg-white", className)}>
      {parallax && !reduce ? <ParallaxImg product={product} sizes={sizes} priority={priority} /> : <Img product={product} sizes={sizes} priority={priority} />}
    </div>
  );
}
