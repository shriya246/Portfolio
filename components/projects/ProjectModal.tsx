"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import { useEffect } from "react";
import type { Project } from "@/types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.classList.add("overflow-hidden");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[90] overflow-y-auto bg-background/90 px-4 py-8 backdrop-blur-2xl sm:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.name} details`}
          onMouseDown={onClose}
        >
          <motion.article
            className="mx-auto max-w-4xl rounded-[2rem] border border-border bg-surface p-6 shadow-card-glow sm:p-8"
            initial={{ y: 28, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 28, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.28 }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.categories.map((category) => (
                    <span key={category} className="rounded-full border border-violet/30 bg-violet/10 px-3 py-1 font-mono text-xs text-violet-soft">
                      {category}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl font-semibold text-foreground sm:text-4xl">{project.name}</h2>
                <p className="mt-4 text-base leading-8 text-muted">{project.description}</p>
              </div>
              <button
                type="button"
                aria-label="Close project details"
                onClick={onClose}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-background text-muted transition hover:border-violet/60 hover:text-violet"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <section className="rounded-2xl border border-border bg-background p-5">
                <h3 className="font-mono text-xs uppercase tracking-[0.24em] text-violet-soft">Problem</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{project.problemStatement}</p>
              </section>
              <section className="rounded-2xl border border-border bg-background p-5">
                <h3 className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-soft">Key Metrics</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {project.metrics.map((metric) => (
                    <li key={metric} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                      {metric}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <section className="mt-6 rounded-2xl border border-border bg-background p-5">
              <h3 className="font-mono text-xs uppercase tracking-[0.24em] text-violet-soft">Architecture Decisions</h3>
              <ul className="mt-4 grid gap-3 text-sm leading-7 text-muted">
                {project.architectureDecisions.map((decision) => (
                  <li key={decision} className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-violet" />
                    {decision}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.24em] text-muted">Technologies</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full border border-border bg-background px-3 py-1.5 font-mono text-xs text-muted">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.name} source`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-violet-glow"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.name} live demo`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:border-cyan/60 hover:text-cyan"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              ) : null}
            </div>
          </motion.article>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
