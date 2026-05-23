import Image from "next/image";
import type { ReactNode } from "react";
import type { SiteImage } from "@/data/site-images";

/** Tekst + billede side om side — afrundet foto, ikke fuld skærmbredde */
export function PageIntroSplit({
  title,
  subtitle,
  image,
  reverse = false,
  priority,
}: {
  title: string;
  subtitle?: string;
  image: SiteImage;
  reverse?: boolean;
  priority?: boolean;
}) {
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto grid w-[min(1120px,92vw)] gap-10 py-12 md:gap-14 md:py-16 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <div className={reverse ? "lg:order-2" : undefined}>
          <h1 className="text-3xl font-semibold text-brand-green md:text-4xl lg:text-[2.4rem]">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-muted-foreground md:text-lg">
              {subtitle}
            </p>
          ) : null}
        </div>
        <div
          className={`media-frame relative min-h-[240px] bg-muted sm:min-h-[300px] lg:min-h-[min(52vh,380px)] ${
            reverse ? "lg:order-1" : ""
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            title={image.alt}
            fill
            className="object-cover"
            sizes="(max-width:1024px) 92vw, 50vw"
            priority={priority}
          />
        </div>
      </div>
    </section>
  );
}

/** Stort typografisk åbning — valgfrit indhold under (fx små billeder eller ikoner).
 *  `variant="hero"`: grøn flade som forsiden/footer, centreret som en egentlig hero. */
export function PageIntroEditorial({
  title,
  subtitle,
  below,
  variant = "editorial",
}: {
  title: string;
  subtitle?: ReactNode;
  below?: ReactNode;
  variant?: "editorial" | "hero";
}) {
  if (variant === "hero") {
    return (
      <section className="relative overflow-hidden border-b border-white/10 bg-brand-green text-white">
        <div
          className="pointer-events-none absolute -right-32 top-0 h-[min(70vh,520px)] w-[min(70vw,520px)] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_68%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.035)_0%,transparent_48%,rgba(0,0,0,0.1)_100%)]"
          aria-hidden
        />
        <div className="relative mx-auto flex w-[min(900px,92vw)] max-w-full flex-col items-center py-16 ps-[max(1rem,env(safe-area-inset-left))] pe-[max(1rem,env(safe-area-inset-right))] text-center md:py-20">
          <h1 className="text-balance font-serif text-[clamp(1.5rem,5vw+0.75rem,2.35rem)] font-semibold leading-[1.08] tracking-tight text-white md:text-5xl md:leading-[1.05]">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-6 mx-auto w-full max-w-none px-1 text-center text-pretty text-base leading-relaxed text-white/82 md:text-lg">
              {subtitle}
            </p>
          ) : null}
          {below ? <div className="mt-10 flex w-full max-w-[60ch] flex-col items-center">{below}</div> : null}
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div
        className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-brand-sage/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--brand-green)_4%,transparent)_0%,transparent_42%)]"
        aria-hidden
      />
      <div className="relative mx-auto w-[min(900px,92vw)] py-14 md:py-20">
        <p className="section-label">Grindsted Vandtårn</p>
        <h1 className="mt-3 max-w-[18ch] text-[clamp(1.5rem,4vw+0.85rem,2.35rem)] font-semibold leading-[1.08] text-brand-green md:text-5xl md:leading-[1.05]">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-muted-foreground md:text-lg">
            {subtitle}
          </p>
        ) : null}
        {below ? <div className="mt-10">{below}</div> : null}
      </div>
    </section>
  );
}

/** Kompakt titel — god når det visuelle kommer længere nede på siden */
export function PageIntroTitleBar({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto w-[min(720px,92vw)] py-10 md:py-14">
        <h1 className="text-3xl font-semibold text-brand-green md:text-4xl">{title}</h1>
        {subtitle ? <p className="mt-3 text-base text-muted-foreground md:text-lg">{subtitle}</p> : null}
      </div>
    </section>
  );
}

/** Mørk “bånd” i indholdsbredde — ingen stort foto */
export function PageIntroSolidBand({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="border-b border-border bg-background py-8 md:py-10">
      <div className="mx-auto w-[min(960px,92vw)] overflow-hidden rounded-3xl bg-brand-green px-8 py-10 text-white shadow-[0_16px_48px_-20px_rgba(1,73,75,0.45)] md:px-12 md:py-12">
        <h1 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
          {title}
        </h1>
        {subtitle ? <p className="mt-4 max-w-[60ch] text-[15px] leading-relaxed text-white/85 md:text-base">{subtitle}</p> : null}
      </div>
    </section>
  );
}

/** Sponsor / støtte — lys kort med tydelig venstrekant */
export function PageIntroAccentCard({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="border-b border-border bg-background py-10 md:py-14">
      <div className="mx-auto w-[min(880px,92vw)]">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-[0_12px_40px_-24px_rgba(1,73,75,0.12)] md:p-10">
          <div className="absolute left-0 top-0 h-full w-1.5 bg-brand-green" aria-hidden />
          <h1 className="pl-4 text-3xl font-semibold text-brand-green md:text-4xl">{title}</h1>
          {subtitle ? (
            <p className="mt-4 max-w-[56ch] pl-4 text-base leading-relaxed text-muted-foreground md:text-lg">{subtitle}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}

/** Oplevelser-hub: titel oven på et diskret mønster */
export function PageIntroHub({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-black/[0.06] bg-brand-green text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />
      <div className="relative mx-auto w-[min(960px,92vw)] max-w-full py-14 ps-[max(1rem,env(safe-area-inset-left))] pe-[max(1rem,env(safe-area-inset-right))] md:py-20">
        <h1 className="text-balance font-serif text-3xl font-semibold tracking-tight md:text-4xl lg:text-[2.35rem]">{title}</h1>
        {subtitle ? <p className="mt-4 max-w-[52ch] text-[15px] leading-relaxed text-white/85 md:text-base">{subtitle}</p> : null}
      </div>
    </section>
  );
}
