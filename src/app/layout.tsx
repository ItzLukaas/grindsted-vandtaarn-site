import type { Metadata, Viewport } from "next";
import { Arvo, DM_Sans } from "next/font/google";
import Script from "next/script";
import { SiteJsonLd } from "@/components/site-json-ld";
import { DEFAULT_OG_IMAGE_PATH } from "@/lib/page-metadata";
import {
  SEO_DEFAULT_TAGLINE,
  SEO_KEYWORDS,
  SEO_SITE_NAME,
} from "@/lib/seo-brand";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";
import { cn } from "@/lib/utils";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const arvo = Arvo({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const siteUrl = getSiteUrl();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#01494b" },
    { media: "(prefers-color-scheme: dark)", color: "#01494b" },
  ],
};

const ROOT_DESCRIPTION =
  "Grindsted Vandtårn er Grindsteds vartegn siden 1931. Officiel side med historie, arrangementer, rundvisning, Filterhuset, Vandtårnsparken og kontakt i Grindsted ved Billund.";

const ROOT_OG_IMAGE = DEFAULT_OG_IMAGE_PATH;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `Grindsted Vandtårn — ${SEO_DEFAULT_TAGLINE}`,
    template: `%s | ${SEO_SITE_NAME}`,
  },
  description: ROOT_DESCRIPTION,
  applicationName: SEO_SITE_NAME,
  keywords: [...SEO_KEYWORDS],
  authors: [{ name: SEO_SITE_NAME }],
  creator: SEO_SITE_NAME,
  publisher: SEO_SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    type: "website",
    locale: "da_DK",
    siteName: SEO_SITE_NAME,
    url: siteUrl,
    title: `Grindsted Vandtårn — ${SEO_DEFAULT_TAGLINE}`,
    description: ROOT_DESCRIPTION,
    images: [
      {
        url: ROOT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SEO_SITE_NAME} — luftfoto ved solnedgang`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Grindsted Vandtårn — ${SEO_DEFAULT_TAGLINE}`,
    description: ROOT_DESCRIPTION,
    images: [
      {
        url: ROOT_OG_IMAGE,
        alt: `${SEO_SITE_NAME} — luftfoto ved solnedgang`,
      },
    ],
  },
  appleWebApp: {
    capable: true,
    title: SEO_SITE_NAME,
    statusBarStyle: "black-translucent",
  },
  other: {
    "theme-color": "#01494b",
    "msapplication-TileColor": "#01494b",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="da"
      suppressHydrationWarning
      className={cn("h-full", "antialiased", dmSans.variable, arvo.variable, "font-sans")}
    >
      <head>
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          strategy="beforeInteractive"
          data-cbid="eedbd43c-bc6e-47e5-a4c0-27736a53a98a"
          data-blockingmode="auto"
          type="text/javascript"
        />
      </head>
      <body className="flex min-h-full min-h-[100dvh] flex-col overflow-x-clip">
        <SiteJsonLd />
        {children}
      </body>
    </html>
  );
}
