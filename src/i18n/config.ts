/** Kun `da` bruges i appen; `en` findes stadig i beskedfiler til evt. genaktivering. */
export const locales = ["da", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "da";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
