"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Download, X } from "lucide-react";
import { useEffect } from "react";

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

const RESUME_FILE_PATH = "/Shriya_Patel_Software_Engineer_Resume.pdf";

export default function ResumeModal({ open, onClose }: ResumeModalProps) {
  useEffect(() => {
    if (!open) {
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
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Resume preview"
        >
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b border-border bg-surface/80 px-4 py-3 shadow-card-glow backdrop-blur-xl sm:px-6">
              <button
                type="button"
                aria-label="Close resume preview"
                onClick={onClose}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-foreground transition hover:border-violet/60 hover:text-violet"
              >
                <X className="h-4 w-4" />
              </button>
              <p className="hidden font-mono text-xs uppercase tracking-[0.28em] text-muted sm:block">Resume Preview</p>
              <a
                href={RESUME_FILE_PATH}
                download="shriya-patel-resume.pdf"
                aria-label="Download Shriya Patel resume"
                className="inline-flex items-center gap-2 rounded-xl bg-violet px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-violet-glow"
              >
                <Download className="h-4 w-4" />
                Download
              </a>
            </div>
            <motion.div
              className="mx-auto h-full w-full max-w-6xl p-4 sm:p-6"
              initial={{ y: 22, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 22, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <iframe
                title="Shriya Patel resume"
                src={RESUME_FILE_PATH}
                className="h-full min-h-[70vh] w-full rounded-2xl border border-border bg-white shadow-card-glow"
              />
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
