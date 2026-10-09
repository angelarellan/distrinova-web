import { cn } from "@/lib/utils";

/**
 * Pieza unificada de los heros: un plano técnico (blueprint) de un sistema de
 * tuberías con válvulas, en líneas cyan sobre el navy. Animación de flujo,
 * nodos que pulsan y leve flotación — SVG + CSS puro (sin JS). Decorativo.
 */
const INNER = `
<g stroke="#38BDF8" stroke-opacity="0.35" stroke-width="1.5" fill="none">
<line x1="24" y1="398" x2="456" y2="398"/>
<line x1="96" y1="398" x2="96" y2="309"/>
<line x1="240" y1="398" x2="240" y2="309"/>
<line x1="384" y1="398" x2="384" y2="309"/>
</g>
<g class="bp-pipe" stroke="#38BDF8" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round">
<line x1="24" y1="291" x2="456" y2="291"/><line x1="24" y1="309" x2="456" y2="309"/>
<line x1="131" y1="120" x2="131" y2="300"/><line x1="149" y1="120" x2="149" y2="300"/>
<line x1="331" y1="120" x2="331" y2="300"/><line x1="349" y1="120" x2="349" y2="300"/>
<line x1="140" y1="111" x2="340" y2="111"/><line x1="140" y1="129" x2="340" y2="129"/>
</g>
<g class="bp-valve" stroke="#60A5FA" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path d="M 229,287 L 251,313 L 251,287 L 229,313 Z"/>
<line x1="240" y1="287" x2="240" y2="262"/>
<g class="bp-wheel" style="animation-duration:15s"><circle cx="240" cy="246" r="22"/><circle cx="240" cy="246" r="19" stroke-opacity="0.5"/><circle cx="240" cy="246" r="3.2"/><line x1="218" y1="246" x2="262" y2="246"/><line x1="229" y1="226.9" x2="251" y2="265.1"/><line x1="251" y1="226.9" x2="229" y2="265.1"/></g>
<path d="M 127,199 L 153,221 L 153,199 L 127,221 Z"/>
<line x1="127" y1="210" x2="104" y2="210"/>
<g class="bp-wheel" style="animation-duration:20s;animation-direction:reverse"><circle cx="88" cy="210" r="18"/><circle cx="88" cy="210" r="15" stroke-opacity="0.5"/><circle cx="88" cy="210" r="3.2"/><line x1="70" y1="210" x2="106" y2="210"/><line x1="79" y1="194.4" x2="97" y2="225.6"/><line x1="97" y1="194.4" x2="79" y2="225.6"/></g>
<path d="M 327,199 L 353,221 L 353,199 L 327,221 Z"/>
<line x1="353" y1="210" x2="376" y2="210"/>
<g class="bp-wheel" style="animation-duration:18s"><circle cx="392" cy="210" r="18"/><circle cx="392" cy="210" r="15" stroke-opacity="0.5"/><circle cx="392" cy="210" r="3.2"/><line x1="374" y1="210" x2="410" y2="210"/><line x1="383" y1="194.4" x2="401" y2="225.6"/><line x1="401" y1="194.4" x2="383" y2="225.6"/></g>
</g>
<g stroke="#38BDF8" stroke-opacity="0.8" stroke-width="2" fill="none">
<line x1="80" y1="286" x2="80" y2="314"/><line x1="86" y1="286" x2="86" y2="314"/>
<line x1="400" y1="286" x2="400" y2="314"/><line x1="406" y1="286" x2="406" y2="314"/>
<line x1="126" y1="270" x2="154" y2="270"/><line x1="126" y1="276" x2="154" y2="276"/>
<line x1="326" y1="270" x2="354" y2="270"/><line x1="326" y1="276" x2="354" y2="276"/>
<line x1="126" y1="150" x2="154" y2="150"/><line x1="126" y1="156" x2="154" y2="156"/>
<line x1="326" y1="150" x2="354" y2="150"/><line x1="326" y1="156" x2="354" y2="156"/>
</g>
<path class="bp-flow" d="M 24,300 L 456,300" fill="none" stroke="#7DD3FC" stroke-width="2.6" stroke-linecap="round"/>
<path class="bp-flow bp-flow-2" d="M 140,300 L 140,120 L 340,120 L 340,300" fill="none" stroke="#7DD3FC" stroke-width="2.6" stroke-linecap="round"/>
<g fill="#38BDF8">
<circle class="bp-node" cx="24" cy="300" r="3.4"/>
<circle class="bp-node" cx="140" cy="300" r="3.4" style="animation-delay:.4s"/>
<circle class="bp-node" cx="340" cy="300" r="3.4" style="animation-delay:.8s"/>
<circle class="bp-node" cx="456" cy="300" r="3.4" style="animation-delay:1.2s"/>
<circle class="bp-node" cx="140" cy="120" r="3.4" style="animation-delay:.6s"/>
<circle class="bp-node" cx="340" cy="120" r="3.4" style="animation-delay:1s"/>
</g>
`;

export function BlueprintHero({ className }: { className?: string }) {
  return (
    <div className={cn("relative mx-auto w-full max-w-[34rem]", className)} aria-hidden="true">
      <div className="pointer-events-none absolute inset-[8%] rounded-full bg-[radial-gradient(circle,rgba(30,99,214,0.4),transparent_70%)]" />
      <svg viewBox="0 0 480 420" className="bp-svg relative h-auto w-full" role="img" aria-label="Esquema técnico de un sistema de tuberías con válvulas" dangerouslySetInnerHTML={{ __html: INNER }} />
    </div>
  );
}
