import type { SectionHeadingProps } from "@/types";
import { cn } from "@/lib/utils";

export default function SectionHeading({ title, subtitle, eyebrow, align = "left", className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <div className={cn("mb-4 flex items-center gap-3", align === "center" && "justify-center")}>
          <span className="h-2 w-2 rounded-full bg-violet shadow-violet-glow" />
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-violet-soft">{eyebrow}</p>
        </div>
      ) : null}
      <h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{subtitle}</p> : null}
    </div>
  );
}
