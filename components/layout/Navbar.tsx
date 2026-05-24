"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FileText, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ResumeModal from "@/components/ui/ResumeModal";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/publications", label: "Publications" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHidden(currentScrollY > lastScrollY.current && currentScrollY > 96);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        className={cn(
          "fixed left-0 right-0 top-0 z-50 border-b border-border/80 bg-background/78 backdrop-blur-2xl transition-shadow",
          hidden ? "-translate-y-full" : "translate-y-0"
        )}
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.24, ease: "easeOut" }}
        aria-label="Primary navigation"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" aria-label="Go to home" className="group inline-flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl border border-violet/40 bg-violet/10 font-mono text-sm font-bold text-violet shadow-violet-glow transition group-hover:scale-105">
              SP
            </span>
            <span className="hidden text-sm font-semibold text-foreground sm:inline">Shriya Patel</span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative rounded-xl px-4 py-2 text-sm font-medium text-muted transition hover:text-foreground",
                    active && "text-foreground"
                  )}
                >
                  {item.label}
                  {active ? <span className="absolute inset-x-4 -bottom-1 h-0.5 rounded-full bg-violet shadow-violet-glow" /> : null}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              aria-label="Open resume preview"
              onClick={() => setResumeOpen(true)}
              className="inline-flex items-center gap-2 rounded-xl bg-violet px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-violet-glow"
            >
              <FileText className="h-4 w-4" />
              Resume
            </button>
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setMobileOpen((value) => !value)}
              className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-surface text-foreground"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-border bg-background/95 md:hidden"
            >
              <div className="space-y-2 px-4 py-4">
                {NAV_LINKS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "block rounded-xl px-4 py-3 text-sm font-medium text-muted transition hover:bg-surface-muted hover:text-foreground",
                      pathname === item.href && "bg-violet/10 text-violet"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <button
                  type="button"
                  aria-label="Open resume preview"
                  onClick={() => {
                    setMobileOpen(false);
                    setResumeOpen(true);
                  }}
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-violet px-4 py-3 text-sm font-semibold text-white"
                >
                  <FileText className="h-4 w-4" />
                  Resume
                </button>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.nav>
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
