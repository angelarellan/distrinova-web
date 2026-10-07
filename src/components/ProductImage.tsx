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

/** Foto de producto en contenedor 4:3 con parallax sutil opcional (solo transform). */
export function ProductImage({ product, sizes, priority, parallax, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const cover = product.imageFit === "cover";
  if (!product.image) return null;
  const img = (
    <Image
      src={product.image}
      alt={product.name}
      fill
      sizes={sizes}
      priority={priority}
      unoptimized={product.image.endsWith(".svg")}
      className={cn(cover ? "object-cover" : "object-contain p-3")}
    />
  );
  return (
    <div ref={ref} className={cn("relative aspect-[4/3] w-full overflow-hidden bg-white", className)}>
      {parallax && !reduce ? (
        <m.div style={{ y }} className="absolute inset-0 scale-[1.1]">
          {img}
        </m.div>
      ) : (
        img
      )}
    </div>
  );
}
