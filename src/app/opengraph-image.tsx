import { ImageResponse } from "next/og";

/**
 * Generated at build time. Replaces the previous metadata references to
 * /images/og-image.jpg and /images/og-home.jpg, neither of which existed in
 * public/ — every social share was falling back to no preview image.
 */
export const alt = "Build with Waffle — India's first student-led creator movement";
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
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #fb923c 0%, #ea580c 55%, #b03d09 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 20,
              background: "#ffffff",
              color: "#b03d09",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 46,
              fontWeight: 800,
            }}
          >
            W
          </div>
          <div style={{ color: "#ffffff", fontSize: 40, fontWeight: 700 }}>
            Build with Waffle
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              color: "#ffffff",
              fontSize: 86,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            Students who ship.
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.92)",
              fontSize: 36,
              lineHeight: 1.3,
              maxWidth: 900,
            }}
          >
            India&apos;s first student-led creator movement — for builders,
            hackers, designers and dreamers.
          </div>
        </div>

        <div style={{ color: "rgba(255,255,255,0.85)", fontSize: 30 }}>
          buildwithwaffle.me
        </div>
      </div>
    ),
    size,
  );
}
