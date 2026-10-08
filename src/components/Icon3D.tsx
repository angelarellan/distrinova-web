import Image from "next/image";
import { cn } from "@/lib/utils";

export type Icon3DName = "clipboard" | "package" | "tools" | "shield" | "factory" | "search" | "chains" | "phone" | "mail" | "truck" | "stopwatch" | "gear";

/** Ícono 3D (Microsoft Fluent Emoji, MIT) sobre una base común con resplandor azul. */
export function Icon3D({ name, className, size = 64 }: { name: Icon3DName; className?: string; size?: number }) {
  return (
    <span
      className={cn("relative inline-flex shrink-0 items-center justify-center rounded-2xl border border-accent-cyan/25 bg-ink-800 shadow-[0_14px_30px_-14px_rgba(11,95,208,0.75)]", className)}
      style={{ width: size, height: size }}
    >
      <span className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_25%,rgba(14,165,233,0.3),transparent_70%)]" aria-hidden="true" />
      <Image src={`/icons/${name}.webp`} alt="" width={Math.round(size * 0.66)} height={Math.round(size * 0.66)} className="relative drop-shadow-[0_6px_8px_rgba(0,0,0,0.45)]" />
    </span>
  );
}
