import { ExternalLink, MoveRight } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { PUBLICATIONS } from "@/constants/publications";

export default function PublicationsPreview() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Research"
          title="Research Publications"
          subtitle="Peer-reviewed Springer work connecting AI, energy systems, cybersecurity, and applied data science."
        />
        <div className="grid gap-5">
          {PUBLICATIONS.map((publication, index) => (
            <ScrollReveal key={publication.id} delay={index * 0.08}>
              <article className="rounded-2xl border border-border bg-surface p-6 shadow-card-glow transition hover:border-violet/50 hover:shadow-violet-glow md:flex md:items-center md:justify-between md:gap-8">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-violet-soft">{publication.year}</p>
                  <h3 className="mt-3 text-xl font-semibold text-foreground">{publication.title}</h3>
                  <p className="mt-2 text-sm text-muted">{publication.journal}</p>
                </div>
                <a
                  href={publication.doi}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open DOI for ${publication.title}`}
                  className="mt-5 inline-flex shrink-0 items-center gap-2 rounded-xl border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground transition hover:border-violet/60 hover:text-violet md:mt-0"
                >
                  DOI
                  <ExternalLink className="h-4 w-4" />
                </a>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-10 flex justify-center">
          <Link
            href="/publications"
            className="inline-flex items-center gap-2 rounded-2xl bg-violet px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:shadow-violet-glow"
          >
            View All
            <MoveRight className="h-4 w-4" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
