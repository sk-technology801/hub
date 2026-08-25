import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: "linear-gradient(135deg, #080c14 0%, #111827 50%, #000000 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
          borderRadius: 8,
          border: "2px solid #f59e0b",
          fontWeight: 900,
          fontFamily: "sans-serif",
          boxShadow: "0 0 10px rgba(245, 158, 11, 0.5)",
        }}
      >
        <span style={{ color: "#ffffff", fontWeight: 900 }}>S</span>
        <span style={{ color: "#f59e0b", fontWeight: 900 }}>K</span>
      </div>
    ),
    {
      ...size,
    }
  );
}
