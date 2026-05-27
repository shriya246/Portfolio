"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Layers3 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import ResumeModal from "@/components/ui/ResumeModal";

const TITLES = ["Backend Engineer", "Cloud Architect", "Distributed Systems Developer", "Software Engineer", "AI/ML Engineer"];
const FLOATING_CHIPS = ["Python", "Kafka", "Kubernetes", "AWS", "Redis"];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [visibleCharacters, setVisibleCharacters] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const currentTitle = TITLES[titleIndex];
  const letters = useMemo(() => "Shriya Patel".split(""), []);

  useEffect(() => {
    const doneTyping = visibleCharacters === currentTitle.length;
    const doneDeleting = visibleCharacters === 0;
    const timeout = window.setTimeout(
      () => {
        if (!deleting && doneTyping) {
          setDeleting(true);
          return;
        }

        if (deleting && doneDeleting) {
          setDeleting(false);
          setTitleIndex((index) => (index + 1) % TITLES.length);
          return;
        }

        setVisibleCharacters((count) => count + (deleting ? -1 : 1));
      },
      doneTyping && !deleting ? 1400 : deleting ? 42 : 76
    );

    return () => window.clearTimeout(timeout);
  }, [currentTitle.length, deleting, visibleCharacters]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <div className="aurora-blob left-[-8rem] top-[-7rem] animate-aurora-one bg-radial-violet" />
      <div className="aurora-blob right-[-10rem] top-24 animate-aurora-two bg-radial-cyan" />
      <div className="aurora-blob bottom-0 left-1/3 animate-aurora-three bg-radial-violet opacity-30" />

      <div className="pointer-events-none absolute inset-0 hidden sm:block">
        {FLOATING_CHIPS.map((chip) => (
          <span
            key={chip}
            className="floating-chip absolute rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-xs text-muted shadow-card-glow backdrop-blur-xl animate-float-chip"
          >
            {chip}
          </span>
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-7 inline-flex items-center gap-3 rounded-full border border-violet/30 bg-violet/10 px-4 py-2 text-sm text-violet-soft shadow-violet-glow"
        >
          <Layers3 className="h-4 w-4" />
          Backend systems, cloud platforms, and resilient architecture
        </motion.div>

        <h1 className="max-w-5xl text-5xl font-semibold leading-[1.02] text-foreground sm:text-7xl lg:text-8xl">
          {letters.map((letter, index) => (
            <motion.span
              key={`${letter}-${index}`}
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: index * 0.035, duration: 0.42 }}
              className="inline-block"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </h1>

        <div className="mt-6 min-h-12 font-mono text-xl text-violet-soft sm:text-2xl">
          <span>{currentTitle.slice(0, visibleCharacters)}</span>
          <span className="ml-1 inline-block h-6 w-0.5 translate-y-1 bg-cyan animate-blink" />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.62, duration: 0.6 }}
          className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl"
        >
          Building resilient distributed systems and cloud-native applications that scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.78, duration: 0.6 }}
          className="mt-9 flex flex-col gap-4 sm:flex-row"
        >
          <button
            type="button"
            aria-label="View featured projects"
            onClick={scrollToProjects}
            className="inline-flex items-center justify-center rounded-2xl bg-violet px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:shadow-violet-glow"
          >
            View My Work
          </button>
          <button
            type="button"
            aria-label="Open resume modal"
            onClick={() => setResumeOpen(true)}
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-1 hover:border-cyan/70 hover:shadow-cyan-glow"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 sm:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <ArrowDown className="h-6 w-6 text-muted" />
      </motion.div>

      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </section>
  );
}
