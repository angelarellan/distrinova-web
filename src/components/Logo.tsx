import Image from "next/image";
import { cn } from "@/lib/utils";

/** Isotipo oficial reconstruido en vector (nítido a cualquier tamaño). */
export function LogoMark({ className }: { className?: string }) {
  return <Image src="/logo-isotipo.svg" alt="" width={484} height={490} priority unoptimized className={cn("h-10 w-auto", className)} />;
}

export function Logo({ className, large }: { className?: string; large?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <LogoMark className={large ? "h-12" : undefined} />
      <span className="flex items-baseline gap-1.5 leading-none">
        <span className={cn("font-display font-extrabold uppercase tracking-tight text-white", large ? "text-2xl" : "text-xl")}>Distrinova</span>
        <span className={cn("font-medium tracking-wide text-slate-300", large ? "text-base" : "text-sm")}>S.R.L.</span>
      </span>
    </span>
  );
}
