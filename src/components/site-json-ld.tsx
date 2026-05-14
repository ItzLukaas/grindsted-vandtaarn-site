import { SEO_SITELINK_ENTRIES } from "@/lib/seo-sitelinks";
import { DEFAULT_OG_IMAGE_PATH } from "@/lib/page-metadata";
import { FACEBOOK_PAGE_URL } from "@/lib/site-constants";
import { getSiteUrl } from "@/lib/site-url";

const DEFAULT_DESCRIPTION =
  "Grindsted Vandtårn er byens vartegn siden 1931. Historie, arrangementer, rundvisning, Filterhuset, vandtårnsparken og kontakt i Grindsted ved Billund.";

/**
 * Strukturerede data (JSON-LD) for hele sitet — indsættes én gang i rodlayoutet.
 * ItemList fremhæver udvalgte URL’er; sitelinks i Google er stadig automatiske.
 */
export function SiteJsonLd() {
  const url = getSiteUrl();
  const heroImage = `${url}${DEFAULT_OG_IMAGE_PATH}`;

  const sitelinkList = {
    "@type": "ItemList",
    "@id": `${url}/#udvalgte-sider`,
    name: "Udvalgte sider",
    description: "Hovedindgange til Grindsted Vandtårn — booking, arrangementer og oplevelser.",
    numberOfItems: SEO_SITELINK_ENTRIES.length,
    itemListElement: SEO_SITELINK_ENTRIES.map((entry, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: entry.name,
      description: entry.description,
      item: entry.path === "/" ? url : `${url}${entry.path}`,
    })),
  };

  const payload = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url,
        name: "Grindsted Vandtårn",
        description: DEFAULT_DESCRIPTION,
        inLanguage: "da-DK",
        publisher: { "@id": `${url}/#organization` },
        image: heroImage,
      },
      {
        "@type": "Organization",
        "@id": `${url}/#organization`,
        name: "Grindsted Vandtårn",
        url,
        logo: `${url}/logo-brand.png`,
        image: heroImage,
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
        "@type": "TouristAttraction",
        "@id": `${url}/#landmark`,
        name: "Grindsted Vandtårn",
        description: DEFAULT_DESCRIPTION,
        url,
        image: heroImage,
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
