"use client";

import { Check, Copy, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import ScrollReveal from "@/components/ui/ScrollReveal";

const EMAIL = "shriya2223@zohomail.com";

export default function ContactInfo() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <ScrollReveal>
      <div className="space-y-8">
        <p className="text-lg leading-8 text-muted">
          I&apos;m currently open to full-time Software Engineering roles, research collaborations, and interesting
          conversations about distributed systems and cloud architecture. Based in Tempe, Arizona, and open to
          relocation.
        </p>

        <div className="space-y-4">
          <button
            type="button"
            onClick={copyEmail}
            aria-label="Copy email address"
            className="flex w-full items-center justify-between gap-4 rounded-2xl border border-border bg-surface p-4 text-left transition hover:border-violet/60 hover:shadow-violet-glow"
          >
            <span className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-violet" />
              <span>
                <span className="block text-sm text-muted">Email</span>
                <span className="font-medium text-foreground">{EMAIL}</span>
              </span>
            </span>
            {copied ? <Check className="h-5 w-5 text-emerald-400" /> : <Copy className="h-5 w-5 text-muted" />}
          </button>

          <a
            href="tel:+16023415263"
            className="flex items-center gap-3 rounded-2xl border border-border bg-surface p-4 transition hover:border-violet/60 hover:shadow-violet-glow"
          >
            <Phone className="h-5 w-5 text-violet" />
            <span>
              <span className="block text-sm text-muted">Phone</span>
              <span className="font-medium text-foreground">602-341-5263</span>
            </span>
          </a>

          <div className="flex items-center gap-3 rounded-2xl border border-border bg-surface p-4">
            <MapPin className="h-5 w-5 text-violet" />
            <span>
              <span className="block text-sm text-muted">Location</span>
              <span className="font-medium text-foreground">Tempe, Arizona, USA</span>
            </span>
          </div>
        </div>

        <div className="flex gap-3">
          <a
            href="https://www.linkedin.com/in/shriya-patel"
            target="_blank"
            rel="noreferrer"
            aria-label="Open LinkedIn profile"
            className="grid h-12 w-12 place-items-center rounded-2xl border border-border bg-surface text-muted transition hover:border-violet/60 hover:text-violet hover:shadow-violet-glow"
          >
            <FaLinkedinIn className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/shriya-patel"
            target="_blank"
            rel="noreferrer"
            aria-label="Open GitHub profile"
            className="grid h-12 w-12 place-items-center rounded-2xl border border-border bg-surface text-muted transition hover:border-violet/60 hover:text-violet hover:shadow-violet-glow"
          >
            <FaGithub className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            aria-label="Send email"
            className="grid h-12 w-12 place-items-center rounded-2xl border border-border bg-surface text-muted transition hover:border-violet/60 hover:text-violet hover:shadow-violet-glow"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </ScrollReveal>
  );
}
