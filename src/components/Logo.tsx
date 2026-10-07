import Image from "next/image";
import { cn } from "@/lib/utils";

/** Isotipo oficial reconstruido en vector (nítido a cualquier tamaño). */
export function LogoMark({ className }: { className?: string }) {
  return <Image src="/logo-isotipo.svg" alt="" width={484} height={490} priority unoptimized className={cn("h-10 w-auto", className)} />;
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <LogoMark />
      <span className="flex items-baseline gap-1.5 leading-none">
        <span className="font-display text-xl font-extrabold uppercase tracking-tight text-white">Distrinova</span>
        <span className="text-sm font-medium tracking-wide text-slate-300">S.R.L.</span>
      </span>
    </span>
  );
}
