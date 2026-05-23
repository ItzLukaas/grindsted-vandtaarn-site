"use client";

import Image from "next/image";
import { useCallback, useMemo, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import type { SiteImage } from "@/data/site-images";
import { cn } from "@/lib/utils";

const thumbSizes =
  "(max-width: 640px) 96vw, (max-width: 1024px) 48vw, (max-width: 1280px) 38vw, 560px";

type GalleriImageGridProps = {
  images: SiteImage[];
  /** Vises øverst i stor visning (YARL Captions), fx «Efter renovering» eller «Under renovering». */
  lightboxCategoryTitle: string;
  className?: string;
};

export function GalleriImageGrid({ images, lightboxCategoryTitle, className }: GalleriImageGridProps) {
  const list = images.filter(Boolean);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = useMemo(
    () =>
      list.map((img) => ({
        src: img.src,
        alt: img.alt,
        title: lightboxCategoryTitle,
        description: img.alt,
      })),
    [list, lightboxCategoryTitle],
  );

  const openAt = useCallback((i: number) => {
    setIndex(i);
    setOpen(true);
  }, []);

  if (list.length === 0) return null;

  return (
    <>
      <div
        className={cn(
          "not-prose grid w-full max-w-none grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-8",
          className,
        )}
      >
        {list.map((image, i) => (
          <button
            key={image.src}
            type="button"
            className="group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-border bg-muted/50 text-left shadow-[0_8px_28px_-18px_rgba(1,73,75,0.12)] ring-transparent transition-[border-color,box-shadow,transform] hover:border-brand-green/20 hover:shadow-[0_14px_40px_-16px_rgba(1,73,75,0.18)] hover:ring-2 hover:ring-brand-green/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            onClick={() => openAt(i)}
            aria-label={`Åbn større visning — ${lightboxCategoryTitle}: ${image.alt}`}
          >
            <div className="relative aspect-[4/3] w-full sm:aspect-[3/2] lg:min-h-[220px]">
              <Image
                src={image.src}
                alt={image.alt}
                title={image.alt}
                fill
                className="object-cover transition duration-300 ease-out group-hover:scale-[1.04]"
                sizes={thumbSizes}
              />
            </div>
          </button>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        plugins={[Zoom, Captions]}
        zoom={{
          maxZoomPixelRatio: 3,
          scrollToZoom: true,
          pinchZoomV4: true,
        }}
        controller={{ closeOnBackdropClick: true }}
        labels={{
          Close: "Luk",
          Previous: "Forrige",
          Next: "Næste",
          "{index} of {total}": "Billede {index} af {total}",
          "Zoom in": "Zoom ind",
          "Zoom out": "Zoom ud",
        }}
        on={{
          view: ({ index: nextIndex }) => setIndex(nextIndex),
        }}
        styles={{
          root: { "--yarl__color_backdrop": "rgba(0, 0, 0, 0.92)" },
        }}
      />
    </>
  );
}
