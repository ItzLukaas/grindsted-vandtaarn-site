import type { ReactNode } from "react";

export function Prose({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`space-y-4 text-base leading-relaxed text-foreground/80 md:text-lg [&_strong]:text-brand-green ${className}`}
    >
      {children}
    </div>
  );
}
