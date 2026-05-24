import { Github, MoveRight } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { PROJECTS } from "@/constants/projects";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Featured Projects"
          subtitle="Selected systems work spanning real-time messaging, cloud IoT pipelines, and production-ready machine learning."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {PROJECTS.slice(0, 3).map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.08}>
              <article className="card-border-gradient h-full rounded-2xl bg-surface p-6 shadow-card-glow transition duration-300 hover:-translate-y-1 hover:shadow-violet-glow">
                <div className="flex h-full flex-col">
                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.categories.map((category) => (
                      <span key={category} className="rounded-full border border-violet/30 bg-violet/10 px-3 py-1 font-mono text-xs text-violet-soft">
                        {category}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{project.name}</h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-muted">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.slice(0, 5).map((tech) => (
                      <span key={tech} className="rounded-full border border-border bg-background px-3 py-1 font-mono text-[11px] text-muted">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.name} on GitHub`}
                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground transition hover:border-violet/60 hover:text-violet"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-10 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-2xl bg-violet px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:shadow-violet-glow"
          >
            View All Projects
            <MoveRight className="h-4 w-4" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
