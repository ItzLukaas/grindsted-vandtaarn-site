"use client";

import Image from "next/image";
import { useCallback, useId, useRef, useState } from "react";
import type { SiteImage } from "@/data/site-images";
import { cn } from "@/lib/utils";

type BeforeAfterSliderProps = {
  before: SiteImage;
  after: SiteImage;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
};

/**
 * Vandret før/efter: træk for at skifte mellem to billeder.
 * `pct` = andel fra venstre der viser «før»-billedet (0 = kun efter, 100 = kun før).
 */
export function BeforeAfterSlider({
  before,
  after,
  beforeLabel = "Før renovering",
  afterLabel = "Efter renovering",
  className,
}: BeforeAfterSliderProps) {
  const [pct, setPct] = useState(50);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const labelId = useId();

  const setFromClientX = useCallback((clientX: number) => {
    const el = trackRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - r.left, 0), r.width);
    setPct(Math.round((x / r.width) * 100));
  }, []);

  const endDrag = useCallback((e: React.PointerEvent) => {
    dragging.current = false;
    const t = e.currentTarget as HTMLElement;
    try {
      if (t.hasPointerCapture(e.pointerId)) t.releasePointerCapture(e.pointerId);
    } catch {
      /* ignore */
    }
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    dragging.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    setFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    e.preventDefault();
    setFromClientX(e.clientX);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    endDrag(e);
  };

  const onLostPointerCapture = () => {
    dragging.current = false;
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPct((p) => Math.max(0, p - 5));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setPct((p) => Math.min(100, p + 5));
    } else if (e.key === "Home") {
      e.preventDefault();
      setPct(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setPct(100);
    }
  };

  return (
    <figure className={cn("w-full", className)} aria-labelledby={labelId}>
      <span id={labelId} className="sr-only">
        Sammenlign vandtårnet i {beforeLabel} med vandtårnet i {afterLabel}. Træk skyderen vandret, eller brug
        venstre- og højrepil på tastaturet.
      </span>
      <div className="mb-2.5 flex justify-between gap-4 text-xs font-medium tabular-nums text-muted-foreground sm:text-sm">
        <span>{beforeLabel}</span>
        <span>{afterLabel}</span>
      </div>

      <div
        ref={trackRef}
        className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-white/50 ring-1 ring-brand-green/12 shadow-[0_16px_40px_-22px_rgba(1,73,75,0.14)]"
      >
        {/* Efter (fuld flade) */}
        <Image
          src={after.src}
          alt={after.alt}
          title={after.alt}
          fill
          className="pointer-events-none object-cover select-none"
          sizes="(max-width: 768px) 92vw, (max-width: 1200px) 45vw, 560px"
          priority={false}
          draggable={false}
        />

        {/* Før — klippet til venstre del */}
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{ clipPath: `polygon(0 0, ${pct}% 0, ${pct}% 100%, 0 100%)` }}
        >
          <Image
            src={before.src}
            alt={before.alt}
            title={before.alt}
            fill
            className="object-cover select-none"
            sizes="(max-width: 768px) 92vw, (max-width: 1200px) 45vw, 560px"
            draggable={false}
          />
        </div>

        {/* Delerlinje */}
        <div
          className="pointer-events-none absolute bottom-0 top-0 z-[2] w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.25)]"
          style={{ left: `${pct}%`, transform: "translateX(-50%)" }}
          aria-hidden
        />

        {/* Håndtag — lodret pill (undgår «pil»-ikon der forveksles med piletaster) */}
        <div
          className="pointer-events-none absolute top-1/2 z-[3] -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${pct}%` }}
          aria-hidden
        >
          <div className="h-11 w-2 rounded-full bg-white shadow-md ring-1 ring-black/10" />
        </div>

        {/* Gennemsigtigt lag: fanger træk (billeder blokerer ikke længere) */}
        <div
          role="slider"
          tabIndex={0}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={pct}
          aria-valuetext={`Udsnit fra ${beforeLabel} fylder ${pct} procent, udsnit fra ${afterLabel} fylder ${100 - pct} procent`}
          aria-label={`Sammenlign vandtårnet i ${beforeLabel} med vandtårnet i ${afterLabel}`}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onLostPointerCapture={onLostPointerCapture}
          onKeyDown={onKeyDown}
          className="absolute inset-0 z-[4] cursor-ew-resize touch-none select-none outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        />
      </div>
    </figure>
  );
}
