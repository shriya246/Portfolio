import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ContactPage() {
  return (
    <main className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let&apos;s Connect"
          subtitle="Reach out for engineering roles, research conversations, or collaboration around distributed systems and cloud architecture."
        />
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
