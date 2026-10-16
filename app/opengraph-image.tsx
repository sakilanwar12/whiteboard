import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          backgroundImage:
            "linear-gradient(to right, rgba(24,24,27,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(24,24,27,0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 800, color: "#18181b" }}>
          Mathboard
        </div>
        <div style={{ fontSize: 36, color: "#52525b", marginTop: 16 }}>
          Free open-source whiteboard for math videos
        </div>
        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 32,
            fontSize: 24,
            color: "#71717a",
          }}
        >
          <span>Pressure-sensitive pen</span>
          <span>·</span>
          <span>Graph paper</span>
          <span>·</span>
          <span>PNG export</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
