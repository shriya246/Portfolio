import CertificationCard from "@/components/publications/CertificationCard";
import PublicationCard from "@/components/publications/PublicationCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { CERTIFICATIONS } from "@/constants/certifications";
import { PUBLICATIONS } from "@/constants/publications";

export default function PublicationsPage() {
  return (
    <main className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <section>
          <SectionHeading
            eyebrow="Research"
            title="Research Publications"
            subtitle="Published Springer research in applied AI, fuzzy logic, renewable energy estimation, cybersecurity, cryptocurrency, and banking systems."
          />
          <div className="space-y-6">
            {PUBLICATIONS.map((publication, index) => (
              <PublicationCard key={publication.id} publication={publication} delay={index * 0.08} />
            ))}
          </div>
        </section>

        <section className="mt-24">
          <SectionHeading
            eyebrow="Credentials"
            title="Certifications"
            subtitle="Focused learning across Azure AI, LLM application development, LangChain, and OpenAI-powered software workflows."
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
