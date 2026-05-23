import { ImageResponse } from "next/og";
import { SEO_BRAND, SEO_DEFAULT_TAGLINE, SEO_SITE_NAME } from "@/lib/seo-brand";

export const runtime = "edge";

const SIZE = { width: 1200, height: 630 } as const;

function clampTitle(raw: string, max = 72): string {
  const t = raw.trim();
  if (t.length <= max) return t;
  return `${t.slice(0, max - 1).trimEnd()}…`;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = clampTitle(searchParams.get("title")?.trim() || SEO_SITE_NAME, 56);
  const subtitle = clampTitle(
    searchParams.get("subtitle")?.trim() || SEO_DEFAULT_TAGLINE,
    80,
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px",
          background: `linear-gradient(145deg, ${SEO_BRAND.green} 0%, ${SEO_BRAND.greenSoft} 52%, ${SEO_BRAND.sage} 100%)`,
          color: SEO_BRAND.white,
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            opacity: 0.88,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 9999,
              background: SEO_BRAND.white,
              opacity: 0.9,
            }}
          />
          {SEO_SITE_NAME}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 980 }}>
          <div
            style={{
              fontSize: title.length > 42 ? 52 : 64,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.35,
              opacity: 0.9,
              fontFamily: "system-ui, sans-serif",
              fontWeight: 400,
            }}
          >
            {subtitle}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontFamily: "system-ui, sans-serif",
            fontSize: 20,
            opacity: 0.82,
          }}
        >
          <span>Banegårdsvej 32 · 7200 Grindsted</span>
          <span>grindstedvandtaarn.dk</span>
        </div>
      </div>
    ),
    { ...SIZE },
  );
}
