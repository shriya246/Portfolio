import { Code2 } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SKILL_CATEGORIES } from "@/constants/skills";

interface StackGroup {
  title: string;
  categoryIds: Array<(typeof SKILL_CATEGORIES)[number]["id"]>;
}

const STACK_GROUPS: StackGroup[] = [
  {
    title: "Languages",
    categoryIds: ["languages"]
  },
  {
    title: "Backend & APIs",
    categoryIds: ["backend", "security"]
  },
  {
    title: "Cloud & Infrastructure",
    categoryIds: ["cloud", "devops"]
  },
  {
    title: "Data, AI & Observability",
    categoryIds: ["databases", "streaming", "ml-ai", "monitoring"]
  },
  {
    title: "Frontend & Developer Tools",
    categoryIds: ["frontend", "tools"]
  }
];

function getGroupSkills(categoryIds: StackGroup["categoryIds"]): string[] {
  return SKILL_CATEGORIES.filter((category) => categoryIds.includes(category.id)).flatMap((category) => category.skills);
}

export default function Skills() {
  return (
    <section id="skills" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal className="mb-12">
          <div className="flex items-start gap-4">
            <Code2 className="mt-2 h-8 w-8 shrink-0 text-cyan" aria-hidden="true" />
            <div>
              <p className="font-mono text-sm text-cyan">Technical Skills</p>
              <h2 className="mt-1 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                Resume-aligned engineering stack
              </h2>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {STACK_GROUPS.map((group, index) => (
            <ScrollReveal key={group.title} delay={index * 0.06}>
              <article className="min-h-[232px] rounded-[1.5rem] border border-border bg-surface/70 p-6 shadow-card-glow transition duration-300 hover:border-cyan/35 hover:bg-surface hover:shadow-cyan-glow sm:p-7">
                <h3 className="text-lg font-semibold text-foreground sm:text-xl">{group.title}</h3>
                <div className="mt-6 flex flex-wrap gap-3">
                  {getGroupSkills(group.categoryIds).map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-surface-muted/55 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted transition hover:border-cyan/40 hover:text-foreground sm:text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
