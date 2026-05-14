import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";

/** Standard delings- og OG-billede (findes i `public/`). */
export const DEFAULT_OG_IMAGE_PATH = "/galleri1.jpg";

function absoluteAssetUrl(path: string): string {
  const base = getSiteUrl();
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

export type BuildPageMetadataInput = {
  /** Sti uden domæne, fx `/booking-og-besoeg` eller `/`. */
  path: string;
  description: string;
  /** Bruges i `<title>` med layout-skabelonen `%s | Grindsted Vandtårn`. */
  titleSegment: string;
  /** Sæt for forsiden så titlen ikke bliver dobbelt med skabelonen. */
  absoluteTitle?: string;
  /** Relativ sti til OG/Twitter-billede (fx `/sponsorer.jpg`). */
  ogImagePath?: string;
  /** Sæt true for fejlside, takkesider mv. */
  noIndex?: boolean;
  /** Undlad canonical (fx 404, hvor den rigtige URL ikke er en fast sti). */
  omitCanonical?: boolean;
};

/**
 * Ensartet SEO-metadata (canonical, Open Graph, Twitter) på tværs af sider.
 */
export function buildPageMetadata({
  path,
  description,
  titleSegment,
  absoluteTitle,
  ogImagePath,
  noIndex,
  omitCanonical,
}: BuildPageMetadataInput): Metadata {
  const base = getSiteUrl();
  const normalizedPath = path === "" ? "/" : path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = normalizedPath === "/" ? base : `${base}${normalizedPath}`;
  const ogImage = absoluteAssetUrl(ogImagePath ?? DEFAULT_OG_IMAGE_PATH);

  const title: Metadata["title"] = absoluteTitle
    ? { absolute: absoluteTitle }
    : titleSegment;

  return {
    title,
    description,
    ...(omitCanonical ? {} : { alternates: { canonical: canonicalUrl } }),
    openGraph: {
      type: "website",
      locale: "da_DK",
      ...(omitCanonical ? {} : { url: canonicalUrl }),
      siteName: "Grindsted Vandtårn",
      title: absoluteTitle ?? titleSegment,
      description,
      images: [{ url: ogImage, alt: "Grindsted Vandtårn i solnedgang set fra luften" }],
    },
    twitter: {
      card: "summary_large_image",
      title: absoluteTitle ?? titleSegment,
      description,
      images: [{ url: ogImage, alt: "Grindsted Vandtårn i solnedgang set fra luften" }],
    },
    robots: noIndex
      ? { index: false, follow: true, googleBot: { index: false, follow: true } }
      : { index: true, follow: true },
  };
}
