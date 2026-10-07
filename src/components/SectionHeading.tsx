import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const ACCENT = { cyan: "text-accent-cyan", magenta: "text-accent-cyan", amber: "text-accent-cyan", blue: "text-blue-400" } as const;

export function SectionHeading({
  eyebrow,
  title,
  text,
  accent = "cyan",
  className,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  accent?: keyof typeof ACCENT;
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-2xl", className)}>
      <p className={cn("text-xs font-medium uppercase tracking-[0.2em]", ACCENT[accent])}>{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white sm:text-6xl">{title}</h2>
      {text && <p className="mt-4 text-slate-400">{text}</p>}
    </Reveal>
  );
}
