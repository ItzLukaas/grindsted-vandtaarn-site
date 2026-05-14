import type { MetadataRoute } from "next";
import { imageUrlsForSitemapPath } from "@/lib/sitemap-images";
import { getSiteUrl } from "@/lib/site-url";
import { SITEMAP_PATHS } from "@/lib/sitemap-paths";

const PRIORITY_BY_PATH: Record<string, number> = {
  "/": 1,
  "/booking-og-besoeg": 0.95,
  "/arrangementer": 0.92,
  "/oplevelser": 0.9,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date();

  return SITEMAP_PATHS.map((path) => {
    const images = imageUrlsForSitemapPath(base, path);
    return {
      url: path === "/" ? base : `${base}${path}`,
      lastModified: now,
      changeFrequency: path === "/" ? "weekly" : "monthly",
      priority: PRIORITY_BY_PATH[path] ?? 0.85,
      ...(images.length > 0 ? { images } : {}),
    };
  });
}
