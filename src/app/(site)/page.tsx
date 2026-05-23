import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Mail, MapPin } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { HomeMusikVedVandtaarnetPraesentererSection } from "@/components/home-musik-ved-vandtaarnet-praesenterer-section";
import { HomeStoryTimeline } from "@/components/home-story-timeline";
import { HomeVandtaarnetsFunktionIDagSection } from "@/components/home-vandtaarnets-funktion-i-dag-section";
import {
  buttonVariants,
  PrimaryButtonContent,
  primaryButtonArrowLayoutClassName,
} from "@/components/ui/button";
import type { SiteImage } from "@/data/site-images";
import {
  forsideFunktionDagImage,
  forsideHeroPosterImage,
  vartegnGenfoedt1931,
  vartegnGenfoedt2025,
} from "@/data/site-images";
import { getDictionary } from "@/i18n/get-dictionary";
import { siteHref } from "@/i18n/href";
import { buildPageMetadata } from "@/lib/page-metadata";
import { getPublicHeroVideoSrc } from "@/lib/public-hero-video";
import { GOOGLE_MAPS_URL, MAILTO, MAP_EMBED_SRC } from "@/lib/site-constants";
import { cn } from "@/lib/utils";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const dict = getDictionary();
  return buildPageMetadata({
    path: "/",
    titleSegment: dict.meta.siteDefaultTitle,
    absoluteTitle: dict.meta.siteDefaultTitle,
    description: dict.meta.siteDefaultDescription,
    ogSubtitle: "Grindsteds vartegn siden 1931",
  });
}

function videoMime(src: string): string | undefined {
  const lower = src.toLowerCase();
  if (lower.endsWith(".webm")) return "video/webm";
  if (lower.endsWith(".mov")) return "video/quicktime";
  if (lower.endsWith(".mp4") || lower.endsWith(".m4v")) return "video/mp4";
  return undefined;
}

function HeroMedia({
  videoSrc,
  poster,
  videoAria,
}: {
  videoSrc: string | null;
  poster: SiteImage;
  videoAria: string;
}) {
  return (
    <div className="relative mx-auto w-full max-w-[min(100%,448px)] shrink-0">
      <div className="overflow-hidden rounded-2xl ring-1 ring-white/15 shadow-[0_14px_44px_-18px_rgba(0,0,0,0.32)]">
        <div className="relative aspect-[10/14] bg-black/20">
          {videoSrc ? (
            <video
              className="pointer-events-none absolute inset-0 h-full w-full object-cover select-none"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              disablePictureInPicture
              tabIndex={-1}
              aria-label={videoAria}
            >
              <source src={videoSrc} type={videoMime(videoSrc)} />
            </video>
          ) : (
            <Image
              src={poster.src}
              alt={poster.alt}
              title={poster.alt}
              fill
              className="object-cover"
              sizes="(max-width:1024px) 92vw, 448px"
              priority
            />
          )}
        </div>
      </div>
    </div>
  );
}

function ForedragVideo({ ariaLabel }: { ariaLabel: string }) {
  const src = "/foredrag.mp4";
  return (
    <div className="relative mx-auto w-full max-w-[min(100%,448px)] shrink-0">
      <div className="media-frame">
        <div className="relative aspect-[10/14] bg-black/20">
          <video
            className="pointer-events-none absolute inset-0 h-full w-full object-cover select-none"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            disablePictureInPicture
            tabIndex={-1}
            aria-label={ariaLabel}
          >
            <source src={src} type={videoMime(src)} />
          </video>
        </div>
      </div>
    </div>
  );
}

export default async function HomePage() {
  const dict = getDictionary();
  const h = dict.home;

  const envVideo = process.env.NEXT_PUBLIC_HERO_VIDEO_URL?.trim();
  const publicVideo = getPublicHeroVideoSrc();
  const heroVideoSrc = (publicVideo ?? (envVideo || null)) as string | null;
  const poster = forsideHeroPosterImage;

  const historyHref = `${siteHref("/")}#vartegn-genfoedt-heading`;
  const bookingHref = siteHref("/booking-og-besoeg");

  const musikCopy = {
    musikHomeTitle: h.musikHomeTitle,
    musikHomeP1: h.musikHomeP1,
    musikHomeP2: h.musikHomeP2,
    musikHomeP3: h.musikHomeP3,
    musikHomeCta: h.musikHomeCta,
    musikPosterAlt: h.musikPosterAlt,
  };

  const funktionCopy = {
    funktionTitle: h.funktionTitle,
    funktionLead: h.funktionLead,
    funktionToursTitle: h.funktionToursTitle,
    funktionToursText: h.funktionToursText,
    funktionConcertsTitle: h.funktionConcertsTitle,
    funktionConcertsText: h.funktionConcertsText,
    funktionViewTitle: h.funktionViewTitle,
    funktionViewText: h.funktionViewText,
    funktionBookTitle: h.funktionBookTitle,
    funktionBookText: h.funktionBookText,
    funktionCta: h.funktionCta,
  };

  return (
    <main id="top">
      <section className="relative overflow-hidden border-b border-white/10 bg-brand-green text-white">
        <div
          className="pointer-events-none absolute -right-32 top-0 h-[min(70vh,520px)] w-[min(70vw,520px)] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_68%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.035)_0%,transparent_48%,rgba(0,0,0,0.1)_100%)]"
          aria-hidden
        />
        <div className="relative mx-auto grid w-[min(1180px,92vw)] items-center gap-12 py-14 md:gap-16 md:py-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] lg:items-center">
          <AnimatedSection>
            <h1 className="text-balance font-serif text-[2.35rem] font-semibold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[2.85rem]">
              {h.heroTitle}
            </h1>
            <p className="mt-6 max-w-[54ch] text-[1.05rem] leading-relaxed text-white/82 md:text-lg">{h.heroLead}</p>
            <div className="mt-9 flex flex-wrap gap-2.5">
              <Link
                href={historyHref}
                aria-label={`${h.heroCtaHistory} — afsnittet «Et vartegn genfødt» med før-og-efter-billeder`}
                className={cn(
                  "inline-flex h-auto min-h-11 items-center justify-center rounded-full border border-transparent bg-white px-6 py-2.5 text-sm font-medium text-brand-green shadow-md transition-colors duration-200 ease-out hover:bg-white/92 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-green",
                )}
              >
                {h.heroCtaHistory}
              </Link>
              <Link
                href={bookingHref}
                aria-label={`${h.heroCtaVisit} — adresse, kort og kontakt til Grindsted Vandtårn`}
                className={cn(
                  "inline-flex h-auto min-h-11 items-center justify-center rounded-full border border-white/40 bg-transparent px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-colors duration-200 ease-out hover:border-white/55 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-green",
                )}
              >
                {h.heroCtaVisit}
              </Link>
            </div>
          </AnimatedSection>
          <div className="flex justify-center lg:justify-end">
            <HeroMedia videoSrc={heroVideoSrc} poster={poster} videoAria={h.heroVideoAria} />
          </div>
        </div>
      </section>

      <section
        className="border-t border-border border-b bg-card py-14 md:py-20"
        aria-labelledby="vartegn-genfoedt-heading"
      >
        <div className="mx-auto grid w-[min(1120px,92vw)] gap-10 md:grid-cols-[minmax(260px,0.9fr)_minmax(0,1.1fr)] md:items-center md:gap-14">
          <div className="flex items-center justify-center md:justify-start">
            <div className="w-full max-w-[min(100%,520px)] md:max-w-none">
              <BeforeAfterSlider
                before={vartegnGenfoedt1931}
                after={vartegnGenfoedt2025}
                beforeLabel="1931"
                afterLabel="2025"
              />
            </div>
          </div>
          <div className="min-w-0">
            <p className="section-label">Historie</p>
            <h2
              id="vartegn-genfoedt-heading"
              className="scroll-mt-28 mt-2 text-2xl font-semibold text-brand-green md:text-3xl"
            >
              {h.vartegnTitle}
            </h2>
            <div className="mt-5 space-y-6 text-base leading-relaxed text-muted-foreground md:text-[1.05rem]">
              <p>{h.vartegnP1}</p>
              <div className="space-y-4">
                <h3 className="font-serif text-lg font-semibold tracking-tight text-brand-green md:text-xl">
                  {h.vartegnH3a}
                </h3>
                <p>{h.vartegnP2}</p>
              </div>
              <div className="space-y-4">
                <h3 className="font-serif text-lg font-semibold tracking-tight text-brand-green md:text-xl">
                  {h.vartegnH3b}
                </h3>
                <p>{h.vartegnP3}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeMusikVedVandtaarnetPraesentererSection copy={musikCopy} />

      <HomeStoryTimeline entries={h.timeline} heading={h.timelineHeading} />

      {/* Vandtårnets funktion i dag: galleri2 (forside) */}
      <HomeVandtaarnetsFunktionIDagSection image={forsideFunktionDagImage} copy={funktionCopy} />

      <AnimatedSection className="border-b border-border bg-card py-14 md:py-20" delay={0.07}>
        <div className="mx-auto grid w-[min(1120px,92vw)] gap-10 md:grid-cols-[minmax(260px,0.9fr)_minmax(0,1.1fr)] md:items-center md:gap-14">
          <div className="flex items-center justify-center md:justify-start">
            <ForedragVideo ariaLabel={h.foredragVideoAria} />
          </div>
          <div className="min-w-0">
            <p className="section-label">Foredrag</p>
            <h2 id="foredrag-heading" className="mt-2 text-2xl font-semibold text-brand-green md:text-3xl">
              {h.foredragTitle}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-[1.05rem]">{h.foredragP1}</p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-[1.05rem]">{h.foredragP2}</p>
            <p className="mt-5 text-sm font-medium text-foreground sm:text-base md:text-[1.05rem]">{h.foredragP3}</p>
            <ul className="mt-4 list-none space-y-3 pl-0 text-base leading-relaxed text-muted-foreground md:text-[1.05rem]">
              {h.foredragBullets.map((line) => (
                <li key={line} className="flex gap-3">
                  <span
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-sage/75"
                    aria-hidden
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-[1.05rem]">{h.foredragP4}</p>
            <a
              href={MAILTO}
              className={cn(
                buttonVariants({ variant: "default" }),
                primaryButtonArrowLayoutClassName,
                "mt-8 inline-flex h-auto min-h-11 items-center justify-center rounded-full px-6 py-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              )}
            >
              <PrimaryButtonContent>{h.foredragCta}</PrimaryButtonContent>
            </a>
          </div>
        </div>
      </AnimatedSection>

      <section className="bg-background py-14 md:py-20">
        <div className="mx-auto w-[min(1120px,92vw)]">
          <p className="section-label">Kontakt</p>
          <h2 className="mt-2 text-2xl font-semibold text-brand-green md:text-3xl">{h.contactTitle}</h2>
          <p className="mt-3 max-w-[60ch] text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
            {h.contactLead}
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(260px,1.1fr)] md:items-stretch md:gap-10">
            <div className="flex min-w-0 flex-col">
              <Link
                href={bookingHref}
                aria-label={`${h.contactCtaBooking} — åbn booking og besøg med kort og kontakt`}
                className={cn(
                  buttonVariants({ variant: "default" }),
                  primaryButtonArrowLayoutClassName,
                  "w-fit inline-flex h-auto min-h-11 items-center justify-center rounded-full px-6 py-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                )}
              >
                <PrimaryButtonContent>
                  <span className="inline-flex min-w-0 items-center gap-2.5">
                    <CalendarDays aria-hidden className="size-4 shrink-0 opacity-90" strokeWidth={1.5} />
                    {h.contactCtaBooking}
                  </span>
                </PrimaryButtonContent>
              </Link>

              <div className="mt-10 min-w-0">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">{h.contactWhere}</p>
                <div className="mt-3 space-y-6 text-sm leading-relaxed text-muted-foreground">
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex gap-3 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    aria-label={h.contactMapAria}
                  >
                    <MapPin
                      aria-hidden
                      strokeWidth={1.5}
                      className="mt-0.5 size-4 shrink-0 text-brand-sage transition-colors group-hover:text-brand-green"
                    />
                    <address className="not-italic underline-offset-4 group-hover:underline">
                      Grindsted Vandtårn
                      <br />
                      Banegårdsvej 32
                      <br />
                      7200 Grindsted
                    </address>
                  </a>
                  <a
                    href={MAILTO}
                    aria-label="Send e-mail til paw@3pleuro.com om Grindsted Vandtårn"
                    className="group inline-flex items-start gap-3 font-medium text-primary underline-offset-4 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <Mail
                      aria-hidden
                      strokeWidth={1.5}
                      className="mt-0.5 size-4 shrink-0 text-brand-sage transition-colors group-hover:text-brand-green"
                    />
                    paw@3pleuro.com
                  </a>
                </div>
              </div>
            </div>
            <div className="relative min-h-[220px] w-full min-w-0 overflow-hidden rounded-3xl shadow-[0_16px_44px_-22px_rgba(1,73,75,0.14)] ring-1 ring-brand-green/12 md:min-h-[280px]">
              <iframe
                title={h.contactIframeTitle}
                src={MAP_EMBED_SRC}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
