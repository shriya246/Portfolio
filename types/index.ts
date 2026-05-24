import type { ReactNode } from "react";

export type SkillCategoryId =
  | "all"
  | "languages"
  | "backend"
  | "frontend"
  | "cloud"
  | "devops"
  | "databases"
  | "streaming"
  | "ml-ai"
  | "security"
  | "monitoring"
  | "tools";

export interface SkillCategory {
  id: Exclude<SkillCategoryId, "all">;
  label: string;
  skills: string[];
}

export interface ExperienceItem {
  company: string;
  location: string;
  role: string;
  period: string;
  current: boolean;
  bullets: string[];
}

export type ProjectCategory = "Backend" | "Cloud" | "Real-Time" | "IoT" | "Machine Learning" | "AI" | "Python";

export type ProjectFilter = "All" | "Backend" | "Cloud" | "Machine Learning" | "IoT" | "Real-Time";

export interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  highlights: string[];
  github: string;
  live: string | null;
  categories: ProjectCategory[];
  problemStatement: string;
  architectureDecisions: string[];
  metrics: string[];
}

export interface Publication {
  id: string;
  title: string;
  journal: string;
  year: string;
  doi: string;
  abstract: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  link: string | null;
}

export interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: "left" | "center";
  className?: string;
}
