import { Award, MoveRight } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { CERTIFICATIONS } from "@/constants/certifications";

export default function PublicationsPreview() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications"
          subtitle="Focused credentials across Azure AI, LLM application development, LangChain, and OpenAI-powered product workflows."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {CERTIFICATIONS.map((certification, index) => (
            <ScrollReveal key={certification.id} delay={index * 0.08}>
              <article className="rounded-2xl border border-border bg-surface p-6 shadow-card-glow transition hover:border-violet/50 hover:shadow-violet-glow">
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl border border-violet/30 bg-violet/10 text-violet-soft">
                  <Award className="h-5 w-5" />
                </div>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-violet-soft">{certification.year}</p>
                <h3 className="mt-3 text-xl font-semibold text-foreground">{certification.name}</h3>
                <p className="mt-2 text-sm text-muted">{certification.issuer}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-10 flex justify-center">
          <Link
            href="/publications"
            className="inline-flex items-center gap-2 rounded-2xl bg-violet px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:shadow-violet-glow"
          >
            View Credentials
            <MoveRight className="h-4 w-4" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
