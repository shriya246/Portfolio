import { Award, ExternalLink } from "lucide-react";
import type { Certification } from "@/types";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface CertificationCardProps {
  certification: Certification;
  delay?: number;
}

export default function CertificationCard({ certification, delay = 0 }: CertificationCardProps) {
  const CardContent = (
    <article className="group relative h-full overflow-hidden rounded-2xl border border-amber-300/20 bg-surface p-6 shadow-card-glow transition hover:-translate-y-1 hover:border-amber-300/55 hover:shadow-[0_0_34px_rgba(251,191,36,0.22)]">
      <span className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:animate-shimmer group-hover:opacity-100" />
      <div className="grid h-12 w-12 place-items-center rounded-2xl border border-amber-300/35 bg-amber-300/10 text-amber-soft">
        <Award className="h-5 w-5" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-foreground">{certification.name}</h3>
      <p className="mt-3 text-sm text-muted">{certification.issuer}</p>
      <div className="mt-6 flex items-center justify-between gap-4">
        <span className="font-mono text-xs uppercase tracking-[0.22em] text-amber-soft">{certification.year}</span>
        {certification.link ? <ExternalLink className="h-4 w-4 text-muted" /> : null}
      </div>
    </article>
  );

  return (
    <ScrollReveal delay={delay}>
      {certification.link ? (
        <a href={certification.link} target="_blank" rel="noreferrer" aria-label={`Open ${certification.name}`}>
          {CardContent}
        </a>
      ) : (
        CardContent
      )}
    </ScrollReveal>
  );
}
