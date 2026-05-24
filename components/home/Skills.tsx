"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { SKILL_CATEGORIES } from "@/constants/skills";
import type { SkillCategoryId } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

const FILTERS: Array<{ id: SkillCategoryId; label: string }> = [
  { id: "all", label: "All" },
  ...SKILL_CATEGORIES.map((category) => ({ id: category.id, label: category.label }))
];

export default function Skills() {
  const [active, setActive] = useState<SkillCategoryId>("all");
  const visibleCategories = useMemo(
    () => (active === "all" ? SKILL_CATEGORIES : SKILL_CATEGORIES.filter((category) => category.id === active)),
    [active]
  );

  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="Technical Skills"
          subtitle="A backend-heavy toolkit across languages, services, cloud infrastructure, streaming, security, and observability."
        />

        <ScrollReveal>
          <div className="mb-8 flex flex-wrap gap-3">
            {FILTERS.map((filter) => (
              <button
                key={filter.id}
                type="button"
                aria-pressed={active === filter.id}
                onClick={() => setActive(filter.id)}
                className={cn(
                  "rounded-xl border px-4 py-2 font-mono text-xs transition",
                  active === filter.id
                    ? "border-violet bg-violet text-white shadow-violet-glow"
                    : "border-border bg-surface text-muted hover:border-violet/60 hover:text-foreground"
                )}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28 }}
            className="grid gap-5 lg:grid-cols-2"
          >
            {visibleCategories.map((category, index) => (
              <motion.article
                key={category.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                className="rounded-2xl border border-border bg-surface p-5 shadow-card-glow"
              >
                <h3 className="mb-4 text-lg font-semibold text-foreground">{category.label}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-background px-3 py-1.5 font-mono text-xs text-muted transition hover:border-violet/60 hover:text-violet hover:shadow-violet-glow"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
