import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { getDictionary } from "@/i18n/get-dictionary";

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const dictionary = getDictionary();

  return (
    <SmoothScrollProvider>
      <div className="flex min-h-dvh flex-col overflow-x-clip bg-background text-foreground">
        <SiteHeader dictionary={dictionary} />
        {children}
        <SiteFooter dictionary={dictionary} />
      </div>
    </SmoothScrollProvider>
  );
}
