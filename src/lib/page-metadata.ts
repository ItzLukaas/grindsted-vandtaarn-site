import type { Metadata } from "next";
import { SEO_DEFAULT_TAGLINE, SEO_KEYWORDS, SEO_SITE_NAME, formatSeoTitle } from "@/lib/seo-brand";
import { getSiteUrl } from "@/lib/site-url";

/** Fallback-foto til sitemap og JSON-LD (findes i `public/` ved deploy). */
export const DEFAULT_OG_IMAGE_PATH = "/galleri1.jpg";

const OG_IMAGE_SIZE = { width: 1200, height: 630 } as const;

function absoluteAssetUrl(path: string): string {
  const base = getSiteUrl();
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

/** Brandet OG-billede med sidetitel og undertitel i teal-gradient. */
export function brandedOgImageUrl(title: string, subtitle?: string): string {
  const base = getSiteUrl();
  const params = new URLSearchParams({ title });
  const sub = subtitle?.trim();
  if (sub) params.set("subtitle", sub);
  return `${base}/api/og?${params.toString()}`;
}

export type BuildPageMetadataInput = {
  /** Sti uden domæne, fx `/booking-og-besoeg` eller `/`. */
  path: string;
  description: string;
  /** Bruges i `<title>` med layout-skabelonen `%s | Grindsted Vandtårn`. */
  titleSegment: string;
  /** Sæt for forsiden, så titlen ikke bliver dobbelt med skabelonen. */
  absoluteTitle?: string;
  /** Kort linje på brandet OG-billede (standard: SEO_DEFAULT_TAGLINE). */
  ogSubtitle?: string;
  /** Statisk foto i stedet for genereret brand-OG (fx galleri). */
  ogImagePath?: string;
  /** Sæt true for fejlside, takkesider mv. */
  noIndex?: boolean;
  /** Undlad canonical (fx 404, hvor den rigtige URL ikke er en fast sti). */
  omitCanonical?: boolean;
};

/**
 * Ensartet SEO-metadata (canonical, Open Graph, Twitter) på tværs af sider.
 * Titler i SERP: «Side | Grindsted Vandtårn» — forsiden med absolut titel.
 */
export function buildPageMetadata({
  path,
  description,
  titleSegment,
  absoluteTitle,
  ogSubtitle,
  ogImagePath,
  noIndex,
  omitCanonical,
}: BuildPageMetadataInput): Metadata {
  const base = getSiteUrl();
  const normalizedPath = path === "" ? "/" : path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = normalizedPath === "/" ? base : `${base}${normalizedPath}`;

  const displayTitle = absoluteTitle ?? formatSeoTitle(titleSegment);
  const ogTitleForImage = absoluteTitle ?? titleSegment;
  const ogImage = ogImagePath
    ? absoluteAssetUrl(ogImagePath)
    : brandedOgImageUrl(ogTitleForImage, ogSubtitle ?? SEO_DEFAULT_TAGLINE);

  const title: Metadata["title"] = absoluteTitle
    ? { absolute: absoluteTitle }
    : titleSegment;

  const ogImages = [
    {
      url: ogImage,
      width: OG_IMAGE_SIZE.width,
      height: OG_IMAGE_SIZE.height,
      alt: `${ogTitleForImage} — ${SEO_SITE_NAME}, ${SEO_DEFAULT_TAGLINE}`,
      type: ogImagePath ? undefined : ("image/png" as const),
    },
  ];

  return {
    title,
    description,
    keywords: [...SEO_KEYWORDS],
    ...(omitCanonical ? {} : { alternates: { canonical: canonicalUrl } }),
    openGraph: {
      type: "website",
      locale: "da_DK",
      ...(omitCanonical ? {} : { url: canonicalUrl }),
      siteName: SEO_SITE_NAME,
      title: displayTitle,
      description,
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: displayTitle,
      description,
      images: ogImages,
    },
    robots: noIndex
      ? { index: false, follow: true, googleBot: { index: false, follow: true } }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}
