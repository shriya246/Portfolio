import About from "@/components/home/About";
import CTABanner from "@/components/home/CTABanner";
import Experience from "@/components/home/Experience";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Hero from "@/components/home/Hero";
import PublicationsPreview from "@/components/home/PublicationsPreview";
import Skills from "@/components/home/Skills";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <FeaturedProjects />
      <PublicationsPreview />
      <CTABanner />
    </main>
  );
}
