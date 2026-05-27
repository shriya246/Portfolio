"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

interface StatItem {
  label: string;
  value: number;
  suffix: string;
  decimals?: number;
}

const STATS: StatItem[] = [
  { label: "Years Experience", value: 4, suffix: "+" },
  { label: "Publications", value: 2, suffix: "" },
  { label: "Projects", value: 10, suffix: "+" },
  { label: "GPA", value: 4, suffix: "", decimals: 1 },
];

function AnimatedCounter({
  value,
  suffix,
  decimals = 0,
}: Omit<StatItem, "label">) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!inView) {
      return;
    }

    let frame = 0;
    const totalFrames = 52;
    const animate = () => {
      frame += 1;
      const progress = 1 - Math.pow(1 - frame / totalFrames, 3);
      setDisplayValue(value * Math.min(progress, 1));

      if (frame < totalFrames) {
        window.requestAnimationFrame(animate);
      }
    };

    const id = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(id);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {displayValue.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="Engineering durable systems with research-minded precision."
          subtitle="A backend-first portfolio shaped by distributed architecture, cloud platforms, and measurable impact."
        />

        <div className="grid items-center gap-12 lg:grid-cols-[0.86fr_1.14fr]">
          <ScrollReveal>
            <div className="relative mx-auto grid aspect-square max-w-sm place-items-center rounded-[2rem] border border-violet/40 bg-surface shadow-violet-glow">
              <div className="absolute inset-5 rounded-[1.6rem] border border-cyan/20" />
              <motion.div
                className="absolute inset-0 rounded-[2rem] bg-radial-violet opacity-40"
                animate={{ scale: [1, 1.04, 1], opacity: [0.25, 0.45, 0.25] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative h-40 w-40 overflow-hidden rounded-full border border-violet/60 bg-background shadow-violet-glow">
                <Image
                  src="/profile-pic.png"
                  alt="Shriya Patel"
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <div className="space-y-8">
              <p className="text-lg leading-8 text-muted">
                I&apos;m a Software Engineer with 4+ years of experience
                building scalable backend systems, microservices, and
                cloud-native applications. Currently at ServiceNow, I architect
                distributed platforms using Python, Java, FastAPI, and Spring
                Boot, deployed on AWS and Kubernetes. I hold a Master&apos;s
                degree in Information Technology from Arizona State University
                with a perfect 4.0 GPA, and have published research in Springer
                journals on AI and renewable energy systems.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-border bg-surface p-5 shadow-card-glow"
                  >
                    <div className="font-mono text-3xl font-bold text-violet-soft">
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                        decimals={stat.decimals}
                      />
                    </div>
                    <p className="mt-2 text-sm text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
