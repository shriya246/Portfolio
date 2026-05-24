"use client";

import type { ProjectFilter } from "@/types";
import { cn } from "@/lib/utils";

const FILTERS: ProjectFilter[] = ["All", "Backend", "Cloud", "Machine Learning", "IoT", "Real-Time"];

interface FilterBarProps {
  activeFilter: ProjectFilter;
  onChange: (filter: ProjectFilter) => void;
}

export default function FilterBar({ activeFilter, onChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-3" aria-label="Project filters">
      {FILTERS.map((filter) => (
        <button
          key={filter}
          type="button"
          aria-pressed={activeFilter === filter}
          onClick={() => onChange(filter)}
          className={cn(
            "rounded-xl border px-4 py-2 font-mono text-xs transition",
            activeFilter === filter
              ? "border-violet bg-violet text-white shadow-violet-glow"
              : "border-border bg-surface text-muted hover:border-violet/60 hover:text-foreground"
          )}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
