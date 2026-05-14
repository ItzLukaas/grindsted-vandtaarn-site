import type { ReactNode } from "react"
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"

const ICON_SIZES = new Set(["icon", "icon-xs", "icon-sm", "icon-lg"])

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-[background-color,box-shadow,transform,color,filter] duration-200 ease-out outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14),0_2px_12px_-4px_rgba(1,73,75,0.4)] hover:bg-primary/92 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.18),0_6px_22px_-8px_rgba(1,73,75,0.48)] hover:brightness-[1.02] active:brightness-[0.97] [a]:hover:bg-primary/92",
        outline:
          "border-border/80 bg-background/95 shadow-[0_1px_2px_-1px_rgba(0,0,0,0.06)] hover:border-border hover:bg-muted/60 hover:text-foreground hover:shadow-[0_2px_8px_-4px_rgba(0,0,0,0.08)] aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "border border-border/50 bg-secondary/90 text-secondary-foreground shadow-sm hover:border-border/70 hover:bg-secondary hover:shadow-md aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

/** Tilføj på `<Link className={cn(buttonVariants({ variant: "default" }), primaryButtonArrowLayoutClassName, …)}>` så hover-padding matcher `<Button variant="default">`. */
export const primaryButtonArrowLayoutClassName =
  "duration-200 ease-out hover:pr-5"

/** Bruges sammen med `buttonVariants({ variant: "default" })` på f.eks. `Link` for samme pil som primær-knap. */
export function PrimaryButtonContent({ children }: { children: ReactNode }) {
  return (
    <>
      <span className="min-w-0">{children}</span>
      <span
        className="inline-flex max-w-0 overflow-hidden opacity-0 transition-all duration-200 ease-out group-hover/button:max-w-[1.35rem] group-hover/button:pl-1.5 group-hover/button:opacity-100"
        aria-hidden
      >
        <ArrowRight
          strokeWidth={2}
          className="h-4 w-4 shrink-0 translate-x-1 transition-transform duration-200 ease-out group-hover/button:translate-x-0"
        />
      </span>
    </>
  )
}

function Button({
  className,
  variant = "default",
  size = "default",
  showArrow,
  children,
  ...props
}: ButtonPrimitive.Props &
  VariantProps<typeof buttonVariants> & {
    /** Sæt til `false` for at skjule pil på primær-knap (sjældent). Standard: pil kun ved `variant="default"` og ikke-ikon-størrelser. */
    showArrow?: boolean
  }) {
  const canPrimaryArrow =
    variant === "default" && !ICON_SIZES.has(size ?? "default")
  const showPrimaryArrow = canPrimaryArrow && showArrow !== false

  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size }),
        showPrimaryArrow && primaryButtonArrowLayoutClassName,
        className
      )}
      {...props}
    >
      {showPrimaryArrow ? <PrimaryButtonContent>{children}</PrimaryButtonContent> : children}
    </ButtonPrimitive>
  )
}

export { Button, buttonVariants }
