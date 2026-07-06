import CertificationCard from "@/components/publications/CertificationCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { CERTIFICATIONS } from "@/constants/certifications";

export default function PublicationsPage() {
  return (
    <main className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <section>
          <SectionHeading
            eyebrow="Credentials"
            title="Certifications"
            subtitle="Resume-aligned learning across Azure AI, LLM application development, LangChain, and OpenAI-powered product workflows."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {CERTIFICATIONS.map((certification, index) => (
              <CertificationCard key={certification.id} certification={certification} delay={index * 0.08} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
