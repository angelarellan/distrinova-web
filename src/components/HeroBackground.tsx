/** Fondo estático y liviano: rejilla técnica y resplandores azules. */
export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-ink-950" aria-hidden="true">
      <div className="grid-tech absolute inset-0 [mask-image:radial-gradient(ellipse_at_70%_45%,black_15%,transparent_70%)]" />
      <div className="absolute -right-24 top-1/4 h-[560px] w-[640px] rounded-full bg-brand/25 blur-[140px]" />
      <div className="absolute -bottom-40 -left-20 h-[360px] w-[480px] rounded-full bg-brand/10 blur-[120px]" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink-950 via-ink-950/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />
    </div>
  );
}
