"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import type { Dictionary } from "@/i18n/get-dictionary";
import { siteHref } from "@/i18n/href";
import { mainNavItems } from "@/lib/site-nav";
import { cn } from "@/lib/utils";

const navLinkFocus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const besoegOsNavClassName =
  "inline-flex min-h-11 shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-white/15 bg-brand-green px-4 py-2.5 text-sm font-medium text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] transition-colors duration-200 ease-out hover:border-white/25 hover:bg-brand-green-soft sm:px-5";

const MOBILE_NAV_PANEL_ID = "site-header-mobile-nav-panel";

export function SiteHeader({ dictionary }: { dictionary: Dictionary }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion() === true;

  const isActive = (path: string) => pathname === path || pathname.startsWith(`${path}/`);

  const nav = dictionary.nav;
  const bookingHref = siteHref("/booking-og-besoeg");

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/95 pt-[env(safe-area-inset-top)] backdrop-blur-md supports-[backdrop-filter]:bg-background/85">
      <div className="mx-auto flex w-[min(1120px,92vw)] max-w-full flex-row items-center justify-between gap-2 py-3 ps-[max(0px,env(safe-area-inset-left))] pe-[max(0px,env(safe-area-inset-right))] sm:gap-3 md:py-3.5">
        <Link
          href={siteHref("/")}
          className={cn("shrink-0", navLinkFocus, "rounded-sm")}
          aria-label="Til forsiden — Grindsted Vandtårn"
        >
          <Image
            src="/logo-brand.png"
            alt="Grindsted Vandtårn — logo"
            title="Grindsted Vandtårn — til forsiden"
            width={280}
            height={68}
            className="h-auto w-[min(148px,40vw)] opacity-[0.92] sm:w-[min(168px,38vw)] xl:w-[min(176px,20vw)] 2xl:w-[188px]"
            priority
          />
        </Link>

        <div className="hidden min-w-0 flex-1 items-center justify-end gap-2 2xl:gap-3 xl:flex">
          <nav className="min-w-0 flex-1" aria-label={nav.mainMenu}>
            <ul className="flex max-w-full flex-nowrap items-center justify-end gap-x-0.5 2xl:gap-x-1">
              {mainNavItems.map((item) => {
                const href = siteHref(item.path);
                const active = isActive(item.path);
                const label = nav[item.labelKey];
                return (
                  <li key={item.path} className="shrink-0">
                    <Link
                      href={href}
                      title={`${label} — underside`}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        navLinkFocus,
                        "inline-block whitespace-nowrap rounded-md px-1.5 py-2 text-xs font-medium leading-none tracking-tight transition-colors duration-200 2xl:px-2 2xl:text-sm",
                        "bg-transparent hover:bg-transparent",
                        active
                          ? "text-brand-green underline decoration-brand-green/40 underline-offset-[0.35rem]"
                          : "text-foreground/90 hover:text-brand-green",
                      )}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <Link
            href={bookingHref}
            aria-label={`${nav.besogOs} — booking, kort og kontakt`}
            className={cn(
              besoegOsNavClassName,
              "focus-visible:ring-2 focus-visible:ring-brand-green/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            )}
          >
            {nav.besogOs}
          </Link>
        </div>

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <div className="flex shrink-0 items-center gap-2 xl:hidden">
            <Link
              href={bookingHref}
              aria-label={`${nav.besogOs} — booking, kort og kontakt`}
              className={cn(
                besoegOsNavClassName,
                "px-3.5 sm:px-4",
                "focus-visible:ring-2 focus-visible:ring-brand-green/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              )}
            >
              {nav.besogOs}
            </Link>
            <button
              type="button"
              className={cn(
                navLinkFocus,
                "relative inline-flex h-11 w-11 touch-manipulation items-center justify-center rounded-xl border border-border/50 bg-muted/35 text-foreground shadow-sm transition-[color,background-color,transform,box-shadow] duration-200 ease-out hover:border-border hover:bg-muted/55 hover:text-brand-green active:scale-[0.96] motion-reduce:active:scale-100",
              )}
              aria-expanded={mobileOpen}
              aria-controls={MOBILE_NAV_PANEL_ID}
              aria-label={mobileOpen ? nav.closeMenu : nav.openMenu}
              onClick={() => setMobileOpen((o) => !o)}
            >
              <Menu
                strokeWidth={1.5}
                className={cn(
                  "h-5 w-5 transition-[opacity,transform] duration-200 ease-out motion-reduce:duration-75",
                  mobileOpen ? "pointer-events-none scale-90 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100",
                )}
                aria-hidden
              />
              <X
                strokeWidth={1.5}
                className={cn(
                  "absolute h-5 w-5 transition-[opacity,transform] duration-200 ease-out motion-reduce:duration-75",
                  mobileOpen ? "scale-100 rotate-0 opacity-100" : "pointer-events-none -rotate-90 scale-90 opacity-0",
                )}
                aria-hidden
              />
            </button>
          </div>

          <SheetContent
            id={MOBILE_NAV_PANEL_ID}
            side="top"
            showCloseButton={false}
            className="max-h-[min(85vh,520px)] gap-0 overflow-y-auto overflow-x-hidden rounded-b-3xl border-border px-0 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-[max(1rem,env(safe-area-inset-top))] shadow-[0_18px_50px_-12px_rgba(0,0,0,0.12)]"
            aria-describedby={undefined}
          >
            <SheetHeader className="sr-only">
              <SheetTitle>{nav.mainMenu}</SheetTitle>
            </SheetHeader>
            <div className="flex items-center justify-between gap-3 border-b border-border/80 bg-muted/15 px-4 pb-4 ps-[max(1rem,env(safe-area-inset-left))] pe-[max(1rem,env(safe-area-inset-right))]">
              <Link
                href={siteHref("/")}
                className={cn("inline-block min-w-0", navLinkFocus, "rounded-sm")}
                aria-label="Til forsiden — Grindsted Vandtårn"
                onClick={() => setMobileOpen(false)}
              >
                <Image
                  src="/logo-brand.png"
                  alt="Grindsted Vandtårn — logo"
                  title="Grindsted Vandtårn — til forsiden"
                  width={280}
                  height={68}
                  className="h-auto w-[min(168px,55vw)] opacity-[0.92]"
                />
              </Link>
              <button
                type="button"
                className={cn(
                  navLinkFocus,
                  "inline-flex h-11 w-11 shrink-0 touch-manipulation items-center justify-center rounded-xl text-foreground transition-[color,background-color,transform] duration-200 hover:bg-muted/50 hover:text-brand-green active:scale-[0.96] motion-reduce:active:scale-100",
                )}
                aria-label={nav.closeMenu}
                onClick={() => setMobileOpen(false)}
              >
                <X strokeWidth={1.5} className="h-5 w-5" aria-hidden />
              </button>
            </div>
            <ul className="flex flex-col gap-1 px-2 pt-3 pb-1 ps-[max(0.5rem,env(safe-area-inset-left))] pe-[max(0.5rem,env(safe-area-inset-right))]">
              {mainNavItems.map((item, index) => {
                const href = siteHref(item.path);
                const active = isActive(item.path);
                const label = nav[item.labelKey];
                return (
                  <li
                    key={item.path}
                    className={cn(
                      !prefersReducedMotion &&
                        "animate-in fade-in slide-in-from-bottom-2 fill-mode-backwards duration-300 ease-out",
                    )}
                    style={
                      !prefersReducedMotion
                        ? { animationDelay: `${60 + index * 45}ms` }
                        : undefined
                    }
                  >
                    <Link
                      href={href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        navLinkFocus,
                        "flex min-h-11 items-center rounded-xl px-3 py-3 text-base font-medium transition-[color,background-color,transform] duration-200 ease-out active:scale-[0.99] motion-reduce:active:scale-100",
                        active
                          ? "bg-brand-green/8 text-brand-green underline decoration-brand-green/40 underline-offset-[0.35rem]"
                          : "text-foreground/90 hover:bg-muted/55 hover:text-brand-green",
                      )}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
