import type { Metadata, Viewport } from "next";
import { Arvo, DM_Sans, Geist } from "next/font/google";
import Script from "next/script";
import { SiteJsonLd } from "@/components/site-json-ld";
import { DEFAULT_OG_IMAGE_PATH } from "@/lib/page-metadata";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Grindsted Vandtårn — vartegn siden 1931",
    template: "%s | Grindsted Vandtårn",
  },
  description:
    "Officiel side for Grindsted Vandtårn: historie, arrangementer, rundvisning, Filterhuset, parken og kontakt i Grindsted ved Billund.",
  applicationName: "Grindsted Vandtårn",
  keywords: [
    "Grindsted Vandtårn",
    "vandtårn",
    "Grindsted",
    "Billund Kommune",
    "vartegn",
    "rundvisning",
    "arrangementer",
    "Filterhuset",
    "Vandtårnsparken",
    "Vandtårnets Venner",
    "kultur",
    "historie",
  ],
  authors: [{ name: "Grindsted Vandtårn" }],
  creator: "Grindsted Vandtårn",
  publisher: "Grindsted Vandtårn",
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
    siteName: "Grindsted Vandtårn",
    url: siteUrl,
    title: "Grindsted Vandtårn — vartegn siden 1931",
    description:
      "Officiel side for Grindsted Vandtårn: historie, arrangementer, rundvisning, Filterhuset, parken og kontakt i Grindsted ved Billund.",
    images: [
      {
        url: DEFAULT_OG_IMAGE_PATH,
        alt: "Grindsted Vandtårn i solnedgang set fra luften",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grindsted Vandtårn — vartegn siden 1931",
    description:
      "Officiel side for Grindsted Vandtårn: historie, arrangementer, rundvisning, Filterhuset, parken og kontakt i Grindsted ved Billund.",
    images: [
      {
        url: DEFAULT_OG_IMAGE_PATH,
        alt: "Grindsted Vandtårn i solnedgang set fra luften",
      },
    ],
  },
  appleWebApp: {
    capable: true,
    title: "Grindsted Vandtårn",
    statusBarStyle: "black-translucent",
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
      className={cn("h-full", "antialiased", dmSans.variable, arvo.variable, "font-sans", geist.variable)}
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
