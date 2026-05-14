"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/** Luft under sticky header ved anker-scroll (Lenis offset + scroll-margin som fallback). */
const HASH_SCROLL_OFFSET = -96;

function normalizePathname(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) return pathname.slice(0, -1);
  return pathname;
}

/**
 * Let, jævn scroll (Lenis) + jævn scroll til samme-side-ankre (#id), så fx «Dyk ned i historien»
 * følger samme bevægelse som resten af siden. `Besøg os` er en almindelig sidenavigation uden hash.
 */
export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const lenis = new Lenis({
      duration: 0.95,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1,
      syncTouch: true,
    });
    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    const initialHash = window.location.hash.slice(1);
    if (initialHash) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (initialHash === "top") {
            lenis.scrollTo(0, { duration: 0.8 });
            return;
          }
          const el = document.getElementById(decodeURIComponent(initialHash));
          if (el) {
            lenis.scrollTo(el, { offset: HASH_SCROLL_OFFSET, duration: 1.15 });
          }
        });
      });
    }

    function onClickCapture(e: MouseEvent) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return;
      }
      const a = (e.target as HTMLElement | null)?.closest?.("a[href]");
      if (!a) return;

      const raw = a.getAttribute("href");
      if (!raw || raw.startsWith("mailto:") || raw.startsWith("tel:")) return;

      let url: URL;
      try {
        url = new URL(raw, window.location.href);
      } catch {
        return;
      }

      if (url.origin !== window.location.origin) return;
      if (!url.hash || url.hash === "#") return;

      const here = normalizePathname(window.location.pathname);
      const there = normalizePathname(url.pathname);
      if (here !== there) return;

      const id = decodeURIComponent(url.hash.slice(1));
      if (!id) return;

      if (id === "top") {
        e.preventDefault();
        lenis.scrollTo(0, { duration: 1.05 });
        window.history.pushState(null, "", `${window.location.pathname}${window.location.search}`);
        return;
      }

      const target = document.getElementById(id);
      if (!target) return;

      e.preventDefault();
      lenis.scrollTo(target, {
        offset: HASH_SCROLL_OFFSET,
        duration: 1.15,
      });
      window.history.pushState(null, "", `${window.location.pathname}${window.location.search}${url.hash}`);
    }

    document.addEventListener("click", onClickCapture, true);

    return () => {
      document.removeEventListener("click", onClickCapture, true);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
