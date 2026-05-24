import { Mail } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CTABanner() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="overflow-hidden rounded-[2rem] border border-violet/30 bg-gradient-to-br from-violet-deep via-violet to-cyan p-8 shadow-violet-glow sm:p-12">
            <div className="max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-white/75">Available for the right next chapter</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">Open to new opportunities</h2>
              <p className="mt-5 text-base leading-8 text-white/82 sm:text-lg">
                Whether it&apos;s a full-time role, collaboration, or research discussion — let&apos;s connect.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-violet-deep transition hover:-translate-y-1 hover:shadow-cyan-glow"
              >
                <Mail className="h-4 w-4" />
                Get In Touch
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
