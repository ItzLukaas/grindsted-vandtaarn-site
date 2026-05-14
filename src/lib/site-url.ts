/**
 * Kanonisk basis-URL til metadata, sitemap og strukturerede data.
 * Sæt `NEXT_PUBLIC_SITE_URL` i produktion (uden afsluttende skråstreg), fx `https://www.grindstedvandtaarn.dk`.
 */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) return raw.replace(/\/$/, "");
  return "https://www.grindstedvandtaarn.dk";
}
