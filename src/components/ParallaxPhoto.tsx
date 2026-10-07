"use client";

import Image from "next/image";
import { useRef } from "react";
import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

/** Foto con parallax sutil (solo transform), dentro de un marco con overflow oculto. */
export function ParallaxPhoto({ src, alt, sizes, className, priority }: { src: string; alt: string; sizes: string; className?: string; priority?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  return (
    <div ref={ref} className={cn("relative overflow-hidden rounded-2xl", className)}>
      <m.div style={reduce ? undefined : { y }} className="absolute inset-0 scale-[1.12]">
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </m.div>
    </div>
  );
}
