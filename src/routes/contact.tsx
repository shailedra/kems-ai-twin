import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, Building2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — KEMS" },
      { name: "description", content: "Request a demo of the KEMS IT Digital Twin platform, or talk to our team about your enterprise IT operations." },
      { property: "og:title", content: "Contact — KEMS" },
      { property: "og:description", content: "Request a demo or talk to our team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <Layout>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your IT estate."
        description="Request a demo, ask a question, or explore a partnership. Our team typically responds within one business day."
      />

      <section className="border-b hairline">
        <div className="container-page grid gap-16 py-20 md:grid-cols-12">
          {/* FORM */}
          <div className="md:col-span-7">
            {submitted ? (
              <div className="rounded-2xl border hairline bg-surface-elevated p-10">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent-blue-soft text-accent-blue">
                  <ArrowRight className="h-5 w-5" />
                </div>
                <h2 className="mt-6 text-2xl font-medium tracking-tight text-ink">Thank you.</h2>
                <p className="mt-3 text-ink-muted">
                  We've received your request and will be in touch within one business day to
                  schedule your KEMS walkthrough.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="First name" name="firstName" required />
                  <Field label="Last name" name="lastName" required />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Work email" name="email" type="email" required />
                  <Field label="Company" name="company" required />
                </div>
                <Field label="Role" name="role" placeholder="e.g. VP Platform Engineering" />
                <div>
                  <label className="text-sm font-medium text-ink">How can we help?</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="mt-2 w-full rounded-md border hairline bg-surface-elevated px-3 py-2.5 text-sm text-ink placeholder:text-ink-muted/60 focus:border-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-blue/20"
                    placeholder="Tell us about your environment, current pain points, and what you'd like to see."
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex h-11 items-center gap-2 rounded-md bg-ink px-5 text-sm font-medium text-primary-foreground hover:opacity-90"
                >
                  Request a Demo
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
                <p className="text-xs text-ink-muted">
                  By submitting this form you agree to KEMS contacting you about the platform.
                </p>
              </form>
            )}
          </div>

          {/* INFO */}
          <aside className="md:col-span-5">
            <div className="rounded-2xl border hairline bg-surface p-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-ink">Reach us</h3>
              <ul className="mt-6 space-y-5">
                <InfoRow icon={Mail} label="Email" value="hello@kems.ai" />
                <InfoRow icon={Building2} label="Sales" value="sales@kems.ai" />
                <InfoRow icon={MapPin} label="Headquarters" value="Global · Remote-first" />
              </ul>
              <div className="mt-8 border-t hairline pt-6">
                <p className="text-xs text-ink-muted">
                  Looking to partner, integrate, or join the team? Mention it in your message
                  and we'll route you to the right person.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-ink">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-2 h-10 w-full rounded-md border hairline bg-surface-elevated px-3 text-sm text-ink placeholder:text-ink-muted/60 focus:border-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-blue/20"
      />
    </div>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <li className="flex items-start gap-3">
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-surface-elevated border hairline text-accent-blue">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-ink-muted">{label}</div>
        <div className="text-sm text-ink">{value}</div>
      </div>
    </li>
  );
}
