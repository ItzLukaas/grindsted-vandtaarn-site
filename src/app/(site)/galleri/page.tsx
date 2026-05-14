import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { GalleriImageGrid } from "@/components/galleri-image-grid";
import { PageIntroEditorial } from "@/components/page-intro-variants";
import { Prose } from "@/components/prose";
import { galleriEfterRenoveringImages, galleriUnderRenoveringImages } from "@/data/site-images";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildPageMetadata } from "@/lib/page-metadata";

const sectionHeadingClass =
  "!mt-0 font-serif text-xl font-semibold text-brand-green md:text-2xl";

export async function generateMetadata(): Promise<Metadata> {
  const dict = getDictionary();
  return buildPageMetadata({
    path: "/galleri",
    titleSegment: dict.meta.galleriTitle,
    description: dict.meta.galleriDescription,
  });
}

export default function GalleriPage() {
  const { heroSubtitle, h2After, h2UnderRenovering, lightboxTitleEfter, lightboxTitleUnder } =
    getDictionary().pages.galleri;

  return (
    <main className="bg-white">
      <PageIntroEditorial variant="hero" title="Galleri" subtitle={heroSubtitle} />

      <AnimatedSection className="border-b border-neutral-200/80 bg-white py-14 md:py-20" delay={0.04}>
        <div className="mx-auto w-[min(1200px,96vw)]">
          <Prose className="max-w-none">
            <h2 className={sectionHeadingClass}>{h2After}</h2>
          </Prose>
          <GalleriImageGrid
            images={galleriEfterRenoveringImages}
            lightboxCategoryTitle={lightboxTitleEfter}
            className="!mt-6 md:!mt-8"
          />
        </div>
      </AnimatedSection>

      <AnimatedSection
        className="border-b border-neutral-200/80 bg-gradient-to-b from-neutral-50/90 to-white py-14 md:py-20"
        delay={0.08}
      >
        <div className="mx-auto w-[min(1200px,96vw)]">
          <Prose className="max-w-none">
            <h2 className={sectionHeadingClass}>{h2UnderRenovering}</h2>
          </Prose>
          <GalleriImageGrid
            images={galleriUnderRenoveringImages}
            lightboxCategoryTitle={lightboxTitleUnder}
            className="!mt-6 md:!mt-8"
          />
        </div>
      </AnimatedSection>
    </main>
  );
}
