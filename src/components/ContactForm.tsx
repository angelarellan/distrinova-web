"use client";

import { useState, type FormEvent } from "react";
import { Mail, Loader2, CheckCircle2 } from "lucide-react";
import { WhatsAppGlyph } from "@/components/WhatsAppGlyph";
import { PRODUCTS } from "@/lib/products";
import { SITE, waLink } from "@/lib/site";

const field = "mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-accent-cyan focus:outline-none";

// Access key pública de Web3Forms: solo permite enviar correos a la casilla configurada (info@distrinovagroup.com). No es información sensible.
const WEB3FORMS_KEY = "8fc65775-ca9e-40f3-9a1a-5af410f02d08";

type Status = "idle" | "sending" | "sent" | "error";

/** Envía la consulta por correo (Web3Forms, sin depender de la app de correo) o por WhatsApp. */
export function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");

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

  const sendWhatsApp = (e: FormEvent<HTMLButtonElement>) => {
    const form = e.currentTarget.form!;
    const v = read(form);
    if (!validate(v)) return;
    window.open(waLink(text(v)), "_blank", "noopener,noreferrer");
  };

  const sendEmail = async (e: FormEvent<HTMLButtonElement>) => {
    const form = e.currentTarget.form!;
    const v = read(form);
    if (!validate(v)) return;
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Consulta web${v.producto ? ` — ${v.producto}` : ""}`,
          from_name: `${v.nombre} (web Distrinova)`,
          replyto: v.email,
          Nombre: v.nombre,
          Empresa: v.empresa || "—",
          Email: v.email,
          Teléfono: v.telefono || "—",
          "Producto de interés": v.producto || "—",
          Mensaje: v.mensaje,
          botcheck: "",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        form.reset();
        setErrors({});
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const err = (k: string) => errors[k] && <p className="mt-1 text-xs text-red-400">{errors[k]}</p>;

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center backdrop-blur-xl">
        <CheckCircle2 className="h-14 w-14 text-accent-cyan" aria-hidden="true" />
        <h3 className="font-display text-2xl font-bold text-white">¡Mensaje enviado!</h3>
        <p className="max-w-md text-slate-300">Recibimos tu consulta y te vamos a responder a la brevedad al correo que dejaste. Gracias por escribirnos.</p>
        <button type="button" onClick={() => setStatus("idle")} className="btn btn-outline mt-2">
          Enviar otra consulta
        </button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={(e) => e.preventDefault()} className="space-y-5 rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8">
      {/* Honeypot anti-spam: invisible para personas */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" aria-hidden="true" />
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
      <p className="text-sm text-slate-300">Con “Enviar por email” tu consulta llega directo a {SITE.email}. Con WhatsApp se abre un chat con nuestro equipo.</p>
      {status === "error" && (
        <p className="rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300">
          No se pudo enviar el mensaje. Probá de nuevo o escribinos por WhatsApp.
        </p>
      )}
      <div className="flex flex-col gap-3 sm:flex-row">
        <button type="button" onClick={sendEmail} disabled={status === "sending"} className="btn btn-primary flex-1 disabled:opacity-70">
          {status === "sending" ? <Loader2 className="h-5 w-5 animate-spin" /> : <Mail className="h-5 w-5" />}
          {status === "sending" ? "Enviando…" : "Enviar por email"}
        </button>
        <button type="button" onClick={sendWhatsApp} className="btn btn-outline flex-1">
          <WhatsAppGlyph className="h-5 w-5 text-[#4ADE80]" /> Enviar por WhatsApp
        </button>
      </div>
    </form>
  );
}
