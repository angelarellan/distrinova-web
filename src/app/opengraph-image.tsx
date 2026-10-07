import { ImageResponse } from "next/og";

export const alt = "Distrinova S.R.L. — Insumos industriales de alta precisión";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "linear-gradient(135deg,#0A0F1D 0%,#162038 100%)", color: "#fff" }}>
        <div style={{ display: "flex", gap: 14, marginBottom: 36 }}>
          {["#0EA5E9", "#A855F7", "#F59E0B", "#2563EB"].map((c) => (
            <div key={c} style={{ width: 34, height: 34, borderRadius: 34, background: c }} />
          ))}
        </div>
        <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05 }}>Distrinova S.R.L.</div>
        <div style={{ fontSize: 34, color: "#94A3B8", marginTop: 24 }}>Insumos industriales de alta precisión</div>
        <div style={{ fontSize: 26, color: "#0EA5E9", marginTop: 14 }}>Petróleo · Gas · Incendio · Alimenticia</div>
      </div>
    ),
    size,
  );
}
