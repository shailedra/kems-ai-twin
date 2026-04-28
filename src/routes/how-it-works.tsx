import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { ArchitectureDiagram } from "@/components/site/ArchitectureDiagram";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — KEMS" },
      { name: "description", content: "From raw IT signals to AI-driven decisions: how the KEMS IT Digital Twin ingests, models, reasons, and answers." },
      { property: "og:title", content: "How It Works — KEMS" },
      { property: "og:description", content: "From signals to decisions in four layers." },
    ],
  }),
  component: HowItWorksPage,
});

const steps = [
  {
    n: "01",
    title: "Ingest",
    body: "Connect to your existing observability, ITSM, CMDB, and pipeline tools. KEMS streams in logs, metrics, traces, incidents, change events, and topology — without ripping out anything you already run.",
    items: ["No-code connectors", "Streaming + batch ingestion", "Schema-on-read normalisation"],
  },
  {
    n: "02",
    title: "Model",
    body: "Signals are projected into a typed knowledge graph: services, infra, data, people, and the relationships between them. Topology is reconciled from multiple sources and kept fresh as your estate changes.",
    items: ["Entity resolution across sources", "Temporal versioning", "Open graph schema"],
  },
  {
    n: "03",
    title: "Reason",
    body: "Causal AI traverses the graph to explain incidents, score probable root causes, and predict downstream impact. Every conclusion comes with an evidence chain — not a black-box guess.",
    items: ["Causal inference, not just correlation", "Evidence-backed answers", "Continuously learning"],
  },
  {
    n: "04",
    title: "Answer",
    body: "Operators ask questions in plain language: 'What changed before the payments incident?', 'What depends on this database?'. The Ask AI interface returns context, evidence, and the next action.",
    items: ["Natural-language operations", "Investigative workflows", "API + UI access"],
  },
];

function HowItWorksPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="How It Works"
        title="From raw signals to operational decisions."
        description="The KEMS IT Digital Twin closes the loop between data and decisions. Here's the path your operations data takes through the platform."
      />

      <section className="border-b hairline">
        <div className="container-page py-20">
          <ArchitectureDiagram />
        </div>
      </section>

      {/* STEPS */}
      <section className="border-b hairline">
        <div className="container-page py-20">
          <div className="space-y-px overflow-hidden rounded-xl border hairline bg-border">
            {steps.map((s) => (
              <div key={s.n} className="grid gap-10 bg-background p-8 md:grid-cols-12 md:p-12">
                <div className="md:col-span-3">
                  <div className="font-mono text-xs text-accent-blue">{s.n}</div>
                  <h3 className="mt-2 text-2xl font-medium tracking-tight text-ink">{s.title}</h3>
                </div>
                <div className="md:col-span-6">
                  <p className="text-ink-muted text-pretty">{s.body}</p>
                </div>
                <div className="md:col-span-3">
                  <ul className="space-y-2">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-sm text-ink">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-blue" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DATA FOUNDATION */}
      <section className="border-b hairline bg-surface">
        <div className="container-page grid gap-12 py-20 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">Foundation</p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight text-ink text-balance">
              Built on the data you already have.
            </h2>
            <p className="mt-4 text-ink-muted">
              KEMS sits on top of your existing tools. The Digital Twin is enriched, not
              duplicated — your sources of truth stay yours.
            </p>
          </div>
          <div className="md:col-span-7">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border hairline bg-border sm:grid-cols-3">
              {[
                "Datadog", "Splunk", "Prometheus", "Grafana", "OpenTelemetry",
                "ServiceNow", "Jira", "PagerDuty",
                "AWS", "Azure", "GCP", "Kubernetes",
                "GitHub", "GitLab", "Terraform",
              ].map((s) => (
                <div key={s} className="bg-background p-5 text-center font-mono text-xs text-ink-muted">
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink">
        <div className="container-page py-20 text-center">
          <h2 className="text-3xl font-medium tracking-tight text-primary-foreground md:text-4xl">
            See it on your own data.
          </h2>
          <Link
            to="/contact"
            className="mt-8 inline-flex h-11 items-center gap-2 rounded-md bg-accent-blue px-6 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Request a Demo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
