"use client";

import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface ContactFormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

const INITIAL_FORM_STATE: ContactFormState = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormState>(INITIAL_FORM_STATE);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [error, setError] = useState("");
  const isValid = useMemo(
    () => Boolean(form.name.trim() && EMAIL_REGEX.test(form.email) && form.subject.trim() && form.message.trim()),
    [form]
  );

  const updateField = (field: keyof ContactFormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (status === "error") {
      setStatus("idle");
      setError("");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setStatus("error");
      setError("Please complete every field before sending.");
      return;
    }

    if (!EMAIL_REGEX.test(form.email)) {
      setStatus("error");
      setError("Please enter a valid email address.");
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setError("EmailJS environment variables are not configured yet.");
      return;
    }

    setStatus("loading");
    setError("");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          to_email: "shriya2223@zohomail.com"
        },
        { publicKey }
      );
      setStatus("success");
      setForm(INITIAL_FORM_STATE);
    } catch (caughtError: unknown) {
      const message = caughtError instanceof Error ? caughtError.message : "Something went wrong while sending your message.";
      setStatus("error");
      setError(message);
    }
  };

  return (
    <ScrollReveal delay={0.1}>
      <form onSubmit={handleSubmit} className="rounded-[2rem] border border-border bg-surface p-5 shadow-card-glow sm:p-7" noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-foreground">Name</span>
            <input
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
              required
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground transition placeholder:text-muted/70 hover:border-violet/50"
              placeholder="Your name"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-foreground">Email</span>
            <input
              type="email"
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              required
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground transition placeholder:text-muted/70 hover:border-violet/50"
              placeholder="you@example.com"
            />
          </label>
        </div>

        <label className="mt-5 block">
          <span className="mb-2 block text-sm font-medium text-foreground">Subject</span>
          <input
            value={form.subject}
            onChange={(event) => updateField("subject", event.target.value)}
            required
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground transition placeholder:text-muted/70 hover:border-violet/50"
            placeholder="Opportunity, collaboration, or research discussion"
          />
        </label>

        <label className="mt-5 block">
          <span className="mb-2 block text-sm font-medium text-foreground">Message</span>
          <textarea
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            required
            rows={7}
            className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground transition placeholder:text-muted/70 hover:border-violet/50"
            placeholder="Tell me what you are building or hiring for."
          />
        </label>

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mt-5 flex items-center gap-3 rounded-xl border border-emerald-400/25 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300"
            >
              <CheckCircle2 className="h-5 w-5" />
              Message sent successfully. Thank you for reaching out.
            </motion.div>
          ) : null}
          {status === "error" ? (
            <motion.div
              key="error"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mt-5 flex items-center gap-3 rounded-xl border border-red-400/25 bg-red-400/10 px-4 py-3 text-sm text-red-300"
            >
              <AlertCircle className="h-5 w-5" />
              {error}
            </motion.div>
          ) : null}
        </AnimatePresence>

        <button
          type="submit"
          disabled={status === "loading" || !isValid}
          aria-label="Send contact message"
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-violet px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-violet-glow disabled:cursor-not-allowed disabled:opacity-55 disabled:hover:translate-y-0 disabled:hover:shadow-none"
        >
          {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
      </form>
    </ScrollReveal>
  );
}
