import { SEO_DEFAULT_TAGLINE, SEO_SITE_NAME } from "@/lib/seo-brand";
import { SEO_SITELINK_ENTRIES } from "@/lib/seo-sitelinks";
import { DEFAULT_OG_IMAGE_PATH } from "@/lib/page-metadata";
import { FACEBOOK_PAGE_URL } from "@/lib/site-constants";
import { getSiteUrl } from "@/lib/site-url";

const DEFAULT_DESCRIPTION =
  "Grindsted Vandtårn er Grindsteds vartegn siden 1931. Officiel side med historie, arrangementer, rundvisning, Filterhuset, Vandtårnsparken og kontakt i Grindsted ved Billund.";

/**
 * Strukturerede data (JSON-LD) for hele sitet — indsættes én gang i rodlayoutet.
 * ItemList fremhæver udvalgte URL'er; sitelinks i Google er stadig automatiske.
 */
export function SiteJsonLd() {
  const url = getSiteUrl();
  const heroImage = `${url}${DEFAULT_OG_IMAGE_PATH}`;
  const brandedOg = `${url}/api/og?title=${encodeURIComponent(SEO_SITE_NAME)}&subtitle=${encodeURIComponent(SEO_DEFAULT_TAGLINE)}`;

  const sitelinkList = {
    "@type": "ItemList",
    "@id": `${url}/#udvalgte-sider`,
    name: "Sider på Grindsted Vandtårn",
    description: "Hovedindgange til Grindsteds vartegn — booking, arrangementer, oplevelser og mere.",
    numberOfItems: SEO_SITELINK_ENTRIES.length,
    itemListElement: SEO_SITELINK_ENTRIES.map((entry, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: entry.name,
      description: entry.description,
      item: {
        "@type": "WebPage",
        "@id": entry.path === "/" ? url : `${url}${entry.path}`,
        name: `${entry.name} | ${SEO_SITE_NAME}`,
        description: entry.description,
        url: entry.path === "/" ? url : `${url}${entry.path}`,
        isPartOf: { "@id": `${url}/#website` },
      },
    })),
  };

  const payload = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url,
        name: SEO_SITE_NAME,
        alternateName: ["Grindsteds vartegn", "Grindsted vandtårn", "vandtårn Grindsted"],
        description: DEFAULT_DESCRIPTION,
        inLanguage: "da-DK",
        publisher: { "@id": `${url}/#organization` },
        image: brandedOg,
      },
      {
        "@type": "Organization",
        "@id": `${url}/#organization`,
        name: SEO_SITE_NAME,
        url,
        logo: `${url}/logo-brand.png`,
        image: [brandedOg, heroImage],
        sameAs: [FACEBOOK_PAGE_URL],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Banegårdsvej 32",
          addressLocality: "Grindsted",
          postalCode: "7200",
          addressCountry: "DK",
        },
      },
      {
        "@type": ["TouristAttraction", "LandmarksOrHistoricalBuildings"],
        "@id": `${url}/#landmark`,
        name: SEO_SITE_NAME,
        alternateName: "Grindsteds vartegn",
        description: DEFAULT_DESCRIPTION,
        url,
        image: [brandedOg, heroImage],
        publicAccess: true,
        isAccessibleForFree: false,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Banegårdsvej 32",
          addressLocality: "Grindsted",
          postalCode: "7200",
          addressCountry: "DK",
        },
        parentOrganization: { "@id": `${url}/#organization` },
      },
      sitelinkList,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
