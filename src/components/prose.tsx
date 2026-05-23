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
      className={`space-y-4 text-base leading-relaxed text-muted-foreground md:text-[1.05rem] [&_strong]:font-medium [&_strong]:text-brand-green ${className}`}
    >
      {children}
    </div>
  );
}
