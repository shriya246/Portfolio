"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { EXPERIENCE } from "@/constants/experience";
import { splitMetricText } from "@/lib/utils";

function HighlightedBullet({ text }: { text: string }) {
  return (
    <>
      {splitMetricText(text).map((segment, index) =>
        segment.metric ? (
          <span key={`${segment.text}-${index}`} className="font-semibold text-violet-soft">
            {segment.text}
          </span>
        ) : (
          <span key={`${segment.text}-${index}`}>{segment.text}</span>
        )
      )}
    </>
  );
}

export default function Experience() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Experience"
          title="Professional Experience"
          subtitle="Engineering roles centered on scalable services, event-driven communication, cloud deployments, and operational reliability."
        />

        <div className="relative ml-3 space-y-8 border-l border-violet/45 pl-7 sm:ml-6 sm:pl-10">
          {EXPERIENCE.map((item, index) => (
            <ScrollReveal key={item.company} delay={index * 0.08}>
              <motion.article
                initial={{ x: -24 }}
                whileInView={{ x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-2xl border border-border bg-surface p-6 shadow-card-glow transition hover:border-violet/50 hover:shadow-violet-glow"
              >
                <span className="absolute -left-[2.45rem] top-7 grid h-5 w-5 place-items-center rounded-full border border-violet bg-background sm:-left-[3.3rem]">
                  <span className="h-2 w-2 rounded-full bg-violet" />
                </span>
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground">{item.company}</h3>
                    <p className="mt-1 text-base font-medium text-violet-soft">{item.role}</p>
                    <p className="mt-2 inline-flex items-center gap-2 text-sm text-muted">
                      <MapPin className="h-4 w-4" />
                      {item.location}
                    </p>
                  </div>
                  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 font-mono text-xs text-muted">
                    {item.current ? <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.8)] animate-pulse" /> : null}
                    {item.period}
                  </div>
                </div>
                <ul className="mt-6 space-y-3">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-7 text-muted">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                      <span>
                        <HighlightedBullet text={bullet} />
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
