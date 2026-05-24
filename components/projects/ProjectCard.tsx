"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Maximize2 } from "lucide-react";
import type { KeyboardEvent } from "react";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelect(project);
    }
  };

  return (
    <motion.article
      layout
      role="button"
      tabIndex={0}
      onClick={() => onSelect(project)}
      onKeyDown={handleKeyDown}
      whileHover={{ y: -6 }}
      className="card-border-gradient flex h-full cursor-pointer flex-col rounded-2xl bg-surface p-6 shadow-card-glow transition hover:shadow-violet-glow"
    >
      <div className="mb-5 flex flex-wrap gap-2">
        {project.categories.map((category) => (
          <span key={category} className="rounded-full border border-violet/30 bg-violet/10 px-3 py-1 font-mono text-xs text-violet-soft">
            {category}
          </span>
        ))}
      </div>
      <h2 className="text-xl font-semibold text-foreground">{project.name}</h2>
      <p className="mt-4 flex-1 text-sm leading-7 text-muted">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span key={tech} className="rounded-full border border-border bg-background px-3 py-1 font-mono text-[11px] text-muted">
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${project.name} on GitHub`}
          onClick={(event) => event.stopPropagation()}
          className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground transition hover:border-violet/60 hover:text-violet"
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
            onClick={(event) => event.stopPropagation()}
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground transition hover:border-cyan/60 hover:text-cyan"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 rounded-xl border border-border bg-background/60 px-4 py-2 text-sm font-semibold text-muted/60">
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </span>
        )}
        <span className="ml-auto inline-flex items-center gap-2 rounded-xl px-2 py-2 text-sm font-semibold text-cyan">
          <Maximize2 className="h-4 w-4" />
          Details
        </span>
      </div>
    </motion.article>
  );
}
