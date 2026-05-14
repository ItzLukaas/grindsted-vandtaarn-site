"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { AnimatedSection } from "@/components/animated-section";
import type { SiteImage } from "@/data/site-images";
import { cn } from "@/lib/utils";

function SplitMediaImage({
  image,
  align,
  size = "default",
}: {
  image: SiteImage;
  align: "start" | "end";
  size?: "default" | "large";
}) {
  const maxW = size === "large" ? "max-w-[min(100%,min(94vw,640px))]" : "max-w-[min(100%,448px)]";
  const sizesAttr = size === "large" ? "(max-width:1024px) 94vw, 640px" : "(max-width:1024px) 92vw, 448px";

  return (
    <div
      className={cn(
        "flex w-full items-center justify-center",
        align === "end" ? "md:justify-end" : "md:justify-start",
      )}
    >
      <div className={cn("relative mx-auto w-full shrink-0", maxW)}>
        <div className="overflow-hidden rounded-3xl ring-1 ring-brand-green/12 shadow-[0_18px_48px_-24px_rgba(1,73,75,0.15)]">
          <div className="relative aspect-[10/14] bg-black/20">
            <Image
              src={image.src}
              alt={image.alt}
              title={image.alt}
              fill
              className="object-cover"
              sizes={sizesAttr}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

type SplitMediaSectionProps = {
  image: SiteImage;
  /** Billede til venstre på store skærme (tekst til højre) */
  imageLeft?: boolean;
  /** Større billedramme (fx citat-sektion på Ejeren) */
  imageSize?: "default" | "large";
  delay?: number;
  className?: string;
  children: ReactNode;
  /** Indhold under grid (fx ekstra billeder) */
  footer?: ReactNode;
};

/** Tekst + ét billede i fuld bredde — samme mønster som Vandtårnets Venner-siden */
export function SplitMediaSection({
  image,
  imageLeft = false,
  imageSize = "default",
  delay = 0.05,
  className,
  children,
  footer,
}: SplitMediaSectionProps) {
  const textCol = <div className="min-w-0">{children}</div>;
  const imageCol = <SplitMediaImage image={image} align={imageLeft ? "start" : "end"} size={imageSize} />;

  const gridCols =
    imageLeft && imageSize === "large"
      ? "md:grid-cols-[minmax(320px,1.12fr)_minmax(0,0.88fr)]"
      : imageLeft
        ? "md:grid-cols-[minmax(260px,0.9fr)_minmax(0,1.1fr)]"
        : "md:grid-cols-[minmax(0,1.1fr)_minmax(260px,0.9fr)]";

  return (
    <AnimatedSection
      className={cn("border-b border-border py-14 md:py-20", className)}
      delay={delay}
    >
      <div
        className={cn(
          "mx-auto grid w-[min(1120px,92vw)] gap-10 md:items-center md:gap-14",
          gridCols,
        )}
      >
        {imageLeft ? (
          <>
            {imageCol}
            {textCol}
          </>
        ) : (
          <>
            {textCol}
            {imageCol}
          </>
        )}
      </div>
      {footer ? (
        <div className="not-prose mx-auto mt-10 w-[min(1120px,92vw)] md:mt-12">{footer}</div>
      ) : null}
    </AnimatedSection>
  );
}
