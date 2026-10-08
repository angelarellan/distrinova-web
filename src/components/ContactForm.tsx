"use client";

import { useState, type FormEvent } from "react";
import { Mail, } from "lucide-react";
import { WhatsAppGlyph } from "@/components/WhatsAppGlyph";
import { PRODUCTS } from "@/lib/products";
import { SITE, waLink } from "@/lib/site";

const field = "mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-accent-cyan focus:outline-none";

/** Sin backend: arma el mensaje y lo envía por WhatsApp o correo. */
export function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const read = (form: HTMLFormElement) => {
    const d = new FormData(form);
    const get = (k: string) => String(d.get(k) ?? "").trim();
    return { nombre: get("nombre"), empresa: get("empresa"), email: get("email"), telefono: get("telefono"), producto: get("producto"), mensaje: get("mensaje") };
  };

  const validate = (v: ReturnType<typeof read>) => {
    const e: Record<string, string> = {};
    if (!v.nombre) e.nombre = "Ingresá tu nombre.";
    if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = "Ingresá un email válido.";
    if (!v.mensaje) e.mensaje = "Contanos qué necesitás.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const text = (v: ReturnType<typeof read>) =>
    [
      "Hola Distrinova S.R.L., quisiera realizar una consulta.",
      `Nombre: ${v.nombre}`,
      v.empresa ? `Empresa: ${v.empresa}` : "",
      `Email: ${v.email}`,
      v.telefono ? `Teléfono: ${v.telefono}` : "",
      v.producto ? `Producto: ${v.producto}` : "",
      "",
      v.mensaje,
    ]
      .filter((x, i) => x !== "" || i === 6)
      .join("\n");

  const send = (kind: "wa" | "mail") => (e: FormEvent<HTMLButtonElement>) => {
    const form = e.currentTarget.form!;
    const v = read(form);
    if (!validate(v)) return;
    if (kind === "wa") window.open(waLink(text(v)), "_blank", "noopener,noreferrer");
    else window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Consulta desde la web")}&body=${encodeURIComponent(text(v))}`;
  };

  const err = (k: string) => errors[k] && <p className="mt-1 text-xs text-red-400">{errors[k]}</p>;

  return (
    <form noValidate onSubmit={(e) => e.preventDefault()} className="space-y-5 rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm text-slate-300">
          Nombre *
          <input name="nombre" autoComplete="name" className={field} />
          {err("nombre")}
        </label>
        <label className="block text-sm text-slate-300">
          Empresa
          <input name="empresa" autoComplete="organization" className={field} />
        </label>
        <label className="block text-sm text-slate-300">
          Email *
          <input name="email" type="email" autoComplete="email" className={field} />
          {err("email")}
        </label>
        <label className="block text-sm text-slate-300">
          Teléfono
          <input name="telefono" type="tel" autoComplete="tel" className={field} />
        </label>
      </div>
      <label className="block text-sm text-slate-300">
        Producto de interés
        <select name="producto" defaultValue="" className={field}>
          <option value="">Seleccionar…</option>
          {PRODUCTS.map((p) => (
            <option key={p.id} value={p.name} className="bg-ink-900">
              {p.name}
            </option>
          ))}
        </select>
      </label>
      <label className="block text-sm text-slate-300">
        Mensaje *
        <textarea name="mensaje" rows={5} placeholder="Medidas, cantidades, normas, fluido, presión, temperatura…" className={field} />
        {err("mensaje")}
      </label>
      <p className="text-sm text-slate-300">Con “Enviar por email” se abre tu aplicación de correo con el mensaje listo para enviar a {SITE.email}. Con WhatsApp se abre un chat con nuestro equipo.</p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <button type="button" onClick={send("mail")} className="btn btn-primary flex-1">
          <Mail className="h-5 w-5" /> Enviar por email
        </button>
        <button type="button" onClick={send("wa")} className="btn btn-outline flex-1">
          <WhatsAppGlyph className="h-5 w-5 text-[#4ADE80]" /> Enviar por WhatsApp
        </button>
      </div>
    </form>
  );
}
