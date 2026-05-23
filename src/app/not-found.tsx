import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import {
  buttonVariants,
  PrimaryButtonContent,
  primaryButtonArrowLayoutClassName,
} from "@/components/ui/button";
import { getDictionary } from "@/i18n/get-dictionary";
import { siteHref } from "@/i18n/href";
import { buildPageMetadata } from "@/lib/page-metadata";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildPageMetadata({
  path: "/",
  titleSegment: "Siden findes ikke",
  description:
    "Siden findes ikke på Grindsted Vandtårns officielle hjemmeside. Brug menuen eller gå til forsiden for at finde Grindsteds vartegn.",
  noIndex: true,
  omitCanonical: true,
});

export default function NotFound() {
  const dictionary = getDictionary();

  return (
    <SmoothScrollProvider>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <SiteHeader dictionary={dictionary} />
        <main className="relative flex flex-1 flex-col border-b border-border bg-card">
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(1,73,75,0.04)_0%,transparent_45%,rgba(1,73,75,0.03)_100%)]"
            aria-hidden
          />
          <div className="relative mx-auto flex w-full max-w-[min(520px,92vw)] flex-1 flex-col items-center justify-center px-4 py-20 text-center md:py-28">
            <p
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[55%] font-serif text-[clamp(5.5rem,22vw,10rem)] font-bold leading-none tracking-tight text-brand-green/[0.07] select-none"
              aria-hidden
            >
              404
            </p>

            <div className="relative z-[1] flex flex-col items-center">
              <Link
                href={siteHref("/")}
                className="inline-block rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
                aria-label="Til forsiden — Grindsted Vandtårn"
              >
                <Image
                  src="/logo-brand.png"
                  alt="Grindsted Vandtårn — logo"
                  title="Grindsted Vandtårn — til forsiden"
                  width={280}
                  height={68}
                  className="h-auto w-[min(200px,52vw)] opacity-[0.94]"
                  priority
                />
              </Link>

              <h1 className="mt-10 font-serif text-2xl font-semibold tracking-tight text-brand-green md:text-3xl">
                Siden findes ikke
              </h1>
              <p className="mt-4 max-w-[40ch] text-base leading-relaxed text-muted-foreground md:text-[1.05rem]">
                Den adresse, du har åbnet, matcher ikke noget indhold på hjemmesiden. Tjek stavningen, eller gå tilbage
                til forsiden og find det, du leder efter.
              </p>

              <Link
                href={siteHref("/")}
                aria-label="Til forsiden — Grindsted Vandtårn"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  primaryButtonArrowLayoutClassName,
                  "mt-10 inline-flex h-auto min-h-11 items-center justify-center rounded-full px-6 py-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card",
                )}
              >
                <PrimaryButtonContent>Til forsiden</PrimaryButtonContent>
              </Link>
            </div>
          </div>
        </main>
        <SiteFooter dictionary={dictionary} />
      </div>
    </SmoothScrollProvider>
  );
}
