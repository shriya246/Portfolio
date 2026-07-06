import type { SkillCategory } from "@/types";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "ai-ml",
    label: "AI & Machine Learning",
    skills: [
      "LLM Integration",
      "Claude API",
      "OpenAI",
      "RAG Pipelines",
      "Agentic AI Workflows",
      "Prompt Engineering",
      "AI Governance",
      "Responsible AI",
      "LLM Evaluation"
    ]
  },
  {
    id: "product",
    label: "Product Management",
    skills: [
      "Product Strategy",
      "Product Vision",
      "Roadmap Planning",
      "PRDs",
      "User Stories",
      "Backlog Management",
      "Sprint Planning",
      "Feature Prioritization",
      "Go-to-Market",
      "A/B Testing",
      "Competitive Analysis",
      "Market Research",
      "OKRs"
    ]
  },
  {
    id: "data-analytics",
    label: "Data & Analytics",
    skills: ["SQL", "Power BI", "Tableau", "Mixpanel", "Google Analytics"]
  },
  {
    id: "building-tooling",
    label: "Building & Tooling",
    skills: ["React", "Vite", "Node.js", "Python", "REST APIs", "AWS EC2", "AWS RDS", "AWS S3", "Figma", "Jira", "Confluence", "CI/CD", "Postman"]
  },
  {
    id: "leadership",
    label: "Leadership",
    skills: ["Stakeholder Management", "User Research", "Usability Testing", "UAT", "Cross-functional Leadership", "Agile", "Scrum", "SAFe"]
  },
  {
    id: "tools",
    label: "Tools",
    skills: ["Figma", "Jira", "Confluence", "Postman", "Mixpanel", "Google Analytics", "Power BI", "Tableau"]
  }
];
