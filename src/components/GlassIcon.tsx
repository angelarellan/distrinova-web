import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type Tone = "blue" | "cyan" | "magenta" | "amber";

/** Pictograma bicapa: trazo claro sobre una copia desplazada en azul corporativo (da profundidad sin cajas de cristal). */
export function GlassIcon({ icon: Icon, className }: { icon: LucideIcon; tone?: Tone; className?: string }) {
  return (
    <span className={cn("relative inline-flex h-11 w-11 shrink-0", className)} aria-hidden="true">
      <Icon className="absolute inset-0 h-full w-full translate-x-[3px] translate-y-[3px] text-brand" strokeWidth={1.4} />
      <Icon className="relative h-full w-full text-white" strokeWidth={1.4} />
    </span>
  );
}
