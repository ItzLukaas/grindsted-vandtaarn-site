const VIMEO_VIDEO_ID = "1183471961";
const VIMEO_EMBED_SRC = `https://player.vimeo.com/video/${VIMEO_VIDEO_ID}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`;

type TilbageblikCopy = {
  tilbageblikTitle: string;
  tilbageblikLeadMobile: string;
  tilbageblikLeadDesktop: string;
  tilbageblikIframeTitle: string;
};

export function ArrangementerTilbageblikSection({ copy }: { copy: TilbageblikCopy }) {
  return (
    <section
      className="border-t border-border bg-card py-14 md:py-20"
      aria-labelledby="arrangementer-tilbageblik-heading"
    >
      <div className="mx-auto w-[min(960px,92vw)]">
        <h2
          id="arrangementer-tilbageblik-heading"
          className="text-balance text-center font-serif text-2xl font-semibold tracking-tight text-brand-green md:text-3xl"
        >
          {copy.tilbageblikTitle}
        </h2>
        <p
          className="mx-auto mt-3 max-w-2xl text-center text-pretty text-sm leading-relaxed text-muted-foreground md:text-[15px]"
          aria-label={copy.tilbageblikLeadDesktop}
        >
          <span aria-hidden className="md:hidden">
            {copy.tilbageblikLeadMobile}
          </span>
          <span aria-hidden className="hidden md:inline">
            {copy.tilbageblikLeadDesktop}
          </span>
        </p>

        <div className="relative mx-auto mt-8 aspect-video w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-sm ring-1 ring-foreground/10">
          <iframe
            src={VIMEO_EMBED_SRC}
            className="absolute inset-0 h-full w-full border-0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            title={copy.tilbageblikIframeTitle}
          />
        </div>
      </div>
    </section>
  );
}
