/** Intern sti til brug i Link, fx `/booking-og-besoeg`. */
export function siteHref(path: string): string {
  return path.startsWith("/") ? path : `/${path}`;
}
