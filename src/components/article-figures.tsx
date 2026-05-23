import Image from "next/image";
import type { SiteImage } from "@/data/site-images";
import { cn } from "@/lib/utils";

function Figure({ image, sizes }: { image: SiteImage; sizes: string }) {
  return (
    <figure className="overflow-hidden rounded-xl border border-border bg-muted shadow-[0_8px_28px_-20px_rgba(1,73,75,0.12)]">
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={image.src}
          alt={image.alt}
          title={image.alt}
          fill
          className="object-cover"
          sizes={sizes}
        />
      </div>
    </figure>
  );
}

/** Artikel- eller galleribredde — viser alle angivne billeder med grid. */
export function ArticleFigures({
  images,
  className,
}: {
  images: SiteImage[];
  className?: string;
}) {
  const list = images.filter(Boolean);
  if (list.length === 0) return null;

  if (list.length === 1) {
    return (
      <div className={cn("not-prose my-9 max-w-none md:my-11", className)}>
        <Figure image={list[0]} sizes="(max-width: 768px) 92vw, 720px" />
      </div>
    );
  }

  const gridClass =
    list.length === 2
      ? "grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5"
      : "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5";

  const sizes = list.length === 2 ? "(max-width: 768px) 92vw, 400px" : "(max-width: 768px) 92vw, 320px";

  return (
    <div className={cn("not-prose my-9 max-w-none md:my-11", gridClass, className)}>
      {list.map((image) => (
        <Figure key={image.src} image={image} sizes={sizes} />
      ))}
    </div>
  );
}
