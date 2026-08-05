import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(circle at 75% 20%, #3b0d0d 0%, #0a0a0a 55%)",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#ef4444",
            fontSize: 30,
            fontWeight: 600,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: "9999px",
              background: "#ef4444",
            }}
          />
          {profile.role}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 84,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: -2,
          }}
        >
          {profile.name}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 30,
            color: "#a3a3a3",
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          {profile.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
