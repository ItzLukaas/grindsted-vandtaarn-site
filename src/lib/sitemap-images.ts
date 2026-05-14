import {
  bookingOgBesoegPageImage,
  ejerenPortraitImage,
  ejerenQuoteImage,
  filterhusetHistorikImage,
  filterhusetIndenforImage,
  filterhusetKalkrummetImage,
  galleriEfterRenoveringImages,
  galleriUnderRenoveringImages,
  samarbejdePageImage,
  siteImages,
  sponsorer3pgLogo,
  sponsorerPageImage,
  vandtaarnetsVennerImages,
  vandtaarnsparkenImages,
  vartegnGenfoedt1931,
  vartegnGenfoedt2025,
} from "@/data/site-images";

function abs(base: string, src: string): string {
  const path = src.startsWith("/") ? src : `/${src}`;
  return `${base}${path}`;
}

function dedupe(urls: string[]): string[] {
  return [...new Set(urls)];
}

const LOGO_MARKS = ["/logo-brand.png", "/logo-horizontal.png", "/logo-grindsted-vandtaarn-footer.png"] as const;

const ARRANGEMENT_IMAGES = [
  "/musik-ved-vandtaarnet-plakat-2026.png",
  "/musik-ved-vandtaarnet-plakat.png",
  "/helegetommy.jpg",
  "/takeoff.jpg",
  "/mortenhusted.jpg",
  "/rattlesnakes.jpg",
] as const;

/**
 * Absolutte billed-URL’er pr. side til sitemap (Google image extension).
 * Matcher de billeder, der typisk vises på siden.
 */
export function imageUrlsForSitemapPath(base: string, pathname: string): string[] {
  const a = (src: string) => abs(base, src);
  const imgs = (...list: { src: string }[]) => list.map((x) => a(x.src));

  switch (pathname) {
    case "/":
      return dedupe([
        ...imgs(...siteImages),
        ...imgs(vartegnGenfoedt1931, vartegnGenfoedt2025),
        ...LOGO_MARKS.map(a),
        ...ARRANGEMENT_IMAGES.map(a),
        a("/musikvedvandtaarnet.jpg"),
      ]);
    case "/galleri":
      return dedupe([...imgs(...galleriUnderRenoveringImages, ...galleriEfterRenoveringImages)]);
    case "/arrangementer":
      return dedupe([...ARRANGEMENT_IMAGES.map(a)]);
    case "/booking-og-besoeg":
      return dedupe(imgs(bookingOgBesoegPageImage));
    case "/samarbejde":
      return dedupe(imgs(samarbejdePageImage));
    case "/sponsorer":
      return dedupe([...imgs(sponsorerPageImage, sponsorer3pgLogo)]);
    case "/filterhuset":
      return dedupe([...imgs(filterhusetHistorikImage, filterhusetKalkrummetImage, filterhusetIndenforImage)]);
    case "/vandtaarnsparken":
      return dedupe([...imgs(...vandtaarnsparkenImages)]);
    case "/vandtaarnets-venner":
      return dedupe([...imgs(...vandtaarnetsVennerImages)]);
    case "/ejeren":
      return dedupe([...imgs(ejerenPortraitImage, ejerenQuoteImage)]);
    case "/hvad-bruges-det-til": {
      const img = siteImages[1];
      return img ? dedupe(imgs(img)) : [];
    }
    default:
      return [];
  }
}
