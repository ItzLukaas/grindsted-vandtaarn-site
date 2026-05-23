"use client";

import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Hammer,
  Heart,
  Landmark,
  Lightbulb,
  PartyPopper,
  PowerOff,
  TrendingDown,
} from "lucide-react";
import type { TimelineEntry } from "@/i18n/dictionaries/types";
import { cn } from "@/lib/utils";

const STEP_ICONS: LucideIcon[] = [
  Landmark,
  Building2,
  PowerOff,
  TrendingDown,
  Lightbulb,
  Hammer,
  PartyPopper,
  Heart,
];

function TimelineBody({ body }: { body: string }) {
  const parts = body
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);
  return (
    <div className="mt-3.5 space-y-3 text-[0.9375rem] leading-[1.65] text-muted-foreground sm:text-[0.95rem]">
      {parts.map((p, i) => (
        <p key={i} className="max-w-prose text-pretty">
          {p}
        </p>
      ))}
    </div>
  );
}

function TimelineCard({
  entry,
  alignEnd,
}: {
  entry: TimelineEntry;
  alignEnd?: boolean;
}) {
  return (
    <article className={cn("w-full max-w-lg py-0.5 sm:py-0", alignEnd && "md:ml-auto")}>
      <div
        className={cn(
          "rounded-2xl bg-card p-4 shadow-[0_10px_32px_-20px_rgba(1,73,75,0.14)] ring-1 ring-brand-green/12 sm:rounded-[1.35rem] sm:p-5",
          alignEnd && "md:text-right",
        )}
      >
        <header
          className={cn(
            "flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4",
            alignEnd && "md:flex-row-reverse",
          )}
        >
          <h3
            className={cn(
              "text-balance font-serif text-base font-semibold leading-snug tracking-tight text-foreground sm:text-[1.125rem]",
              alignEnd && "md:text-right",
            )}
          >
            {entry.title}
          </h3>
          <p
            className={cn(
              "shrink-0 text-xs font-medium tabular-nums text-muted-foreground sm:text-sm",
              alignEnd && "md:text-left",
            )}
          >
            {entry.year}
          </p>
        </header>
        <TimelineBody body={entry.body} />
      </div>
    </article>
  );
}

function TimelineNode({ Icon }: { Icon: LucideIcon }) {
  return (
    <div className="relative z-[1] flex w-11 shrink-0 flex-col items-center md:w-14">
      <div
        className="relative flex size-10 items-center justify-center rounded-full bg-brand-green/10 md:size-11"
        aria-hidden
      >
        <Icon className="size-[1.05rem] text-brand-green md:size-5" strokeWidth={1.5} />
      </div>
    </div>
  );
}

function TimelineClassic({ entries }: { entries: TimelineEntry[] | undefined | null | unknown }) {
  const list: TimelineEntry[] = Array.isArray(entries) ? entries : [];
  return (
    <div className="relative mx-auto mt-10 w-[min(1040px,92vw)] md:mt-14">
      <div
        className="pointer-events-none absolute bottom-6 left-[1.375rem] top-5 z-0 w-px -translate-x-1/2 bg-brand-green/25 md:bottom-10 md:left-1/2 md:top-6"
        aria-hidden
      />
      <ol className="relative z-[1] m-0 list-none p-0">
        {list.map((entry, i) => {
          const isLeft = i % 2 === 0;
          const Icon = STEP_ICONS[i % STEP_ICONS.length];

          return (
            <li key={entry.id} className="relative pb-14 last:pb-4 md:pb-20 md:last:pb-6">
              <div className="md:grid md:auto-rows-min md:grid-cols-[1fr_auto_1fr] md:gap-x-10">
                {isLeft ? (
                  <div className="col-span-full flex flex-row gap-4 md:contents">
                    <div className="flex shrink-0 justify-center pt-0.5 md:col-start-2 md:row-start-1 md:pt-0">
                      <TimelineNode Icon={Icon} />
                    </div>
                    <div className="min-w-0 flex-1 md:col-start-1 md:flex md:justify-end md:pt-1">
                      <TimelineCard entry={entry} alignEnd />
                    </div>
                    <div className="hidden md:col-start-3 md:block" aria-hidden />
                  </div>
                ) : (
                  <div className="col-span-full flex flex-row gap-4 md:contents">
                    <div className="hidden md:col-start-1 md:block" aria-hidden />
                    <div className="flex shrink-0 justify-center pt-0.5 md:col-start-2 md:row-start-1 md:pt-0">
                      <TimelineNode Icon={Icon} />
                    </div>
                    <div className="min-w-0 flex-1 md:col-start-3 md:pt-1">
                      <TimelineCard entry={entry} />
                    </div>
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export function HomeStoryTimeline({
  entries,
  heading,
}: {
  entries?: TimelineEntry[] | null;
  heading?: string | null;
}) {
  const list = entries ?? [];
  const title = heading ?? "";

  return (
    <section
      className="relative border-b border-border bg-card pb-14 md:pb-20"
      aria-labelledby="story-timeline-heading"
    >
      <div className="mx-auto w-[min(1120px,92vw)] pt-12 text-center md:pt-16">
        <p className="section-label">Tidslinje</p>
        <h2
          id="story-timeline-heading"
          className="mt-3 text-3xl font-semibold text-brand-green sm:text-4xl md:text-[2.35rem]"
        >
          {title}
        </h2>
      </div>

      <TimelineClassic entries={list} />
    </section>
  );
}
