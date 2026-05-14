import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";
import { siteHref } from "@/i18n/href";
import { FACEBOOK_PAGE_URL, GOOGLE_MAPS_URL, MAILTO } from "@/lib/site-constants";
import { footerNavItems } from "@/lib/site-nav";

function FooterWaveDivider() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-full h-[min(5.5rem,14vw)] min-h-[3.25rem] overflow-hidden md:h-[min(6.25rem,12vw)]"
      aria-hidden
    >
      <svg
        className="absolute inset-0 h-full w-full text-brand-green"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M0 100 V44 C200 8 400 92 600 44 S1000 4 1220 42 S1380 58 1440 48 V100 H0 Z"
        />
        <path
          fill="var(--brand-green-soft)"
          fillOpacity={0.22}
          d="M0 100 V58 C260 78 520 26 780 58 S1300 90 1440 62 V100 H0 Z"
        />
      </svg>
    </div>
  );
}

export function SiteFooter({ dictionary }: { dictionary: Dictionary }) {
  const year = new Date().getFullYear();
  const genvejeCol1 = footerNavItems.slice(0, 4);
  const genvejeCol2 = footerNavItems.slice(4, 8);
  const nav = dictionary.nav;
  const footer = dictionary.footer;

  return (
    <footer className="relative mt-auto overflow-x-hidden bg-brand-green pb-0 text-white">
      <FooterWaveDivider />
      <div className="relative z-[2] mx-auto grid w-[min(1120px,92vw)] max-w-full gap-10 py-14 text-center ps-[max(0px,env(safe-area-inset-left))] pe-[max(0px,env(safe-area-inset-right))] md:grid-cols-[auto_minmax(0,1.35fr)_minmax(0,1fr)] md:items-start md:gap-x-12 md:gap-y-10 md:py-16 md:text-left lg:gap-x-16">
        <div className="flex shrink-0 justify-center md:block">
          <Link
            href={siteHref("/")}
            className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-green"
            aria-label="Til forsiden — Grindsted Vandtårn"
          >
            <Image
              src="/logo-grindsted-vandtaarn-footer.png"
              alt="Grindsted Vandtårn — logo til forsiden"
              title="Grindsted Vandtårn — til forsiden"
              width={140}
              height={280}
              className="h-auto w-[min(112px,26vw)] object-contain opacity-95 transition hover:opacity-100 md:w-[124px]"
            />
          </Link>
        </div>

        <div className="min-w-0">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/50">{footer.shortcuts}</p>
          <div className="mt-4 grid grid-cols-1 justify-items-center gap-x-8 gap-y-1 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-0 md:justify-items-stretch">
            <ul className="flex w-full max-w-xs flex-col gap-y-1.5 text-sm text-white/88 sm:max-w-none">
              {genvejeCol1.map((item) => (
                <li key={item.path}>
                  <Link
                    href={siteHref(item.path)}
                    aria-label={`${nav[item.labelKey]} — underside på Grindsted Vandtårn`}
                    className="flex min-h-9 max-w-full items-center justify-center rounded-sm py-0.5 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-green md:justify-start"
                  >
                    {nav[item.labelKey]}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex w-full max-w-xs flex-col gap-y-1.5 text-sm text-white/88 sm:max-w-none">
              {genvejeCol2.map((item) => (
                <li key={item.path}>
                  <Link
                    href={siteHref(item.path)}
                    aria-label={`${nav[item.labelKey]} — underside på Grindsted Vandtårn`}
                    className="flex min-h-9 max-w-full items-center justify-center rounded-sm py-0.5 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-green md:justify-start"
                  >
                    {nav[item.labelKey]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="min-w-0">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/50">{footer.contact}</p>
          <ul className="mt-4 flex flex-col items-center gap-3 text-sm md:items-start">
            <li className="w-full max-w-xs md:max-w-none">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Åbn adressen Banegårdsvej 32, 7200 Grindsted i Google Maps (åbner i nyt vindue)"
                className="group mx-auto flex min-h-9 max-w-full flex-row items-start justify-center gap-2.5 py-0.5 text-white/85 transition-colors hover:text-white md:mx-0 md:max-w-prose md:justify-start"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/70 transition-colors group-hover:text-white" aria-hidden />
                <span className="text-balance text-left leading-snug">
                  <span className="font-medium text-white">Grindsted Vandtårn</span>
                  <br />
                  Banegårdsvej 32
                  <br />
                  7200 Grindsted
                </span>
              </a>
            </li>
            <li className="w-full max-w-xs md:max-w-none">
              <a
                href={MAILTO}
                aria-label="Send e-mail til paw@3pleuro.com om Grindsted Vandtårn"
                className="mx-auto flex min-h-9 items-center justify-center gap-2.5 rounded-sm py-0.5 font-medium text-white/95 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-green md:mx-0 md:justify-start"
              >
                <Mail className="h-4 w-4 shrink-0 text-white/70" aria-hidden />
                paw@3pleuro.com
              </a>
            </li>
            <li className="w-full max-w-xs md:max-w-none">
              <a
                href={FACEBOOK_PAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto flex min-h-9 items-center justify-center gap-2.5 py-0.5 text-white/90 transition-colors hover:text-white md:mx-0 md:justify-start"
                aria-label={footer.facebookAria}
              >
                <svg className="h-6 w-6 shrink-0 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="font-medium">{footer.followFacebook}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-8 pb-[max(2rem,env(safe-area-inset-bottom))] text-center text-xs text-white/55 md:py-9">
        {footer.copyright.replace("{year}", String(year))}
      </div>
    </footer>
  );
}
