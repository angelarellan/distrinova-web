import nodemailer from "nodemailer";
import { SITE } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Envía la consulta del formulario por SMTP desde la casilla propia (info@distrinovagroup.com),
// para que llegue directo a la bandeja de entrada y no a spam.
// Requiere las variables de entorno SMTP_USER y SMTP_PASS (y opcionalmente SMTP_HOST, SMTP_PORT, CONTACT_TO).

type Payload = {
  nombre?: string;
  empresa?: string;
  email?: string;
  telefono?: string;
  producto?: string;
  mensaje?: string;
};

const esc = (s: string) => s.replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[c]!));

export async function POST(request: Request) {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  // Si todavía no se cargaron las credenciales SMTP, avisamos para que el formulario use el método alternativo.
  if (!user || !pass) {
    return Response.json({ ok: false, configured: false }, { status: 200 });
  }

  let d: Payload;
  try {
    d = await request.json();
  } catch {
    return Response.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  const nombre = (d.nombre ?? "").trim();
  const email = (d.email ?? "").trim();
  const mensaje = (d.mensaje ?? "").trim();
  if (!nombre || !/^\S+@\S+\.\S+$/.test(email) || !mensaje) {
    return Response.json({ ok: false, error: "validation" }, { status: 422 });
  }

  const to = process.env.CONTACT_TO || user;
  const host = process.env.SMTP_HOST || "smtp.hostinger.com";
  const port = Number(process.env.SMTP_PORT || 465);

  const rows: [string, string][] = [
    ["Nombre", nombre],
    ["Empresa", (d.empresa ?? "").trim() || "—"],
    ["Email", email],
    ["Teléfono", (d.telefono ?? "").trim() || "—"],
    ["Producto de interés", (d.producto ?? "").trim() || "—"],
  ];
  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n") + `\n\nMensaje:\n${mensaje}`;
  const html = `<h2>Nueva consulta desde la web</h2>
    <table cellpadding="6" style="border-collapse:collapse">${rows
      .map(([k, v]) => `<tr><td style="color:#64748b">${esc(k)}</td><td><strong>${esc(v)}</strong></td></tr>`)
      .join("")}</table>
    <p style="white-space:pre-wrap;margin-top:16px">${esc(mensaje)}</p>`;

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });
    await transporter.sendMail({
      from: `"Formulario web Distrinova" <${user}>`,
      to,
      replyTo: `"${nombre}" <${email}>`,
      subject: `Consulta web${d.producto ? ` — ${d.producto}` : ""}`,
      text,
      html,
    });
    return Response.json({ ok: true });
  } catch (e) {
    console.error("Error enviando correo SMTP:", e);
    return Response.json({ ok: false, error: "smtp" }, { status: 502 });
  }
}

// Evita que un GET accidental rompa el build o exponga algo.
export async function GET() {
  return Response.json({ ok: true, site: SITE.name });
}
