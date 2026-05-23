/**
 * Kanonisk basis-URL til metadata, sitemap og strukturerede data.
 * Sæt `NEXT_PUBLIC_SITE_URL` i Vercel (uden afsluttende skråstreg), fx `https://www.grindstedvandtårn.dk`.
 */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) return raw.replace(/\/$/, "");
  // Punycode for å-domænet — bruges i og:image m.m., så embeds matcher det rigtige site.
  return "https://www.xn--grindstedvandtrn-qob.dk";
}
