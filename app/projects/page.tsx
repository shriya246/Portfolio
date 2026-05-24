"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import FilterBar from "@/components/projects/FilterBar";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectModal from "@/components/projects/ProjectModal";
import SectionHeading from "@/components/ui/SectionHeading";
import { PROJECTS } from "@/constants/projects";
import type { Project, ProjectFilter } from "@/types";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const filteredProjects = useMemo(
    () =>
      activeFilter === "All"
        ? PROJECTS
        : PROJECTS.filter((project) => project.categories.includes(activeFilter)),
    [activeFilter]
  );

  return (
    <main className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Project Archive"
          title="All Projects"
          subtitle="A focused collection of backend, cloud, IoT, real-time, and machine learning systems with measurable engineering outcomes."
        />
        <FilterBar activeFilter={activeFilter} onChange={setActiveFilter} />

        <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -22 }}
                transition={{ duration: 0.34, delay: index * 0.05 }}
              >
                <ProjectCard project={project} onSelect={setSelectedProject} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </main>
  );
}
