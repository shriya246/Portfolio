import { ExternalLink } from "lucide-react";
import type { Publication } from "@/types";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface PublicationCardProps {
  publication: Publication;
  delay?: number;
}

export default function PublicationCard({ publication, delay = 0 }: PublicationCardProps) {
  return (
    <ScrollReveal delay={delay}>
      <article className="rounded-2xl border border-border border-l-violet border-l-4 bg-surface p-6 shadow-card-glow transition hover:border-violet/60 hover:shadow-violet-glow sm:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-violet/30 bg-violet/10 px-3 py-1 font-mono text-xs text-violet-soft">Springer</span>
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-muted">{publication.year}</span>
            </div>
            <h2 className="text-2xl font-semibold leading-tight text-foreground">{publication.title}</h2>
            <p className="mt-3 text-sm font-medium text-violet-soft">{publication.journal}</p>
            <p className="mt-5 max-w-4xl text-sm leading-7 text-muted">{publication.abstract}</p>
          </div>
          <a
            href={publication.doi}
            target="_blank"
            rel="noreferrer"
            aria-label={`Read ${publication.title}`}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-violet px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-violet-glow"
          >
            Read Paper
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </article>
    </ScrollReveal>
  );
}
