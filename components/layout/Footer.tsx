import { Mail } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const SOCIAL_LINKS = [
  { href: "https://github.com/shriya-patel", label: "GitHub", icon: FaGithub },
  { href: "https://www.linkedin.com/in/shriya-patel", label: "LinkedIn", icon: FaLinkedinIn },
  { href: "mailto:shriya2223@zohomail.com", label: "Email", icon: Mail }
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background/82 px-4 py-10 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 text-center">
        <Link href="/" className="font-mono text-sm font-bold uppercase tracking-[0.32em] text-violet">
          Shriya Patel
        </Link>
        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={item.label}
                className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-surface text-muted transition hover:border-violet/60 hover:text-violet hover:shadow-violet-glow"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
        <p className="text-sm text-muted">Built with Next.js and deployed on Vercel</p>
        <p className="text-xs text-muted">© {year} Shriya Patel. All rights reserved.</p>
      </div>
    </footer>
  );
}
