import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { ArrowRight, Zap, ShieldAlert, GitMerge, LineChart, Users, Building2 } from "lucide-react";

export const Route = createFileRoute("/use-cases")({
  head: () => ({
    meta: [
      { title: "Use Cases — KEMS" },
      { name: "description", content: "Where KEMS delivers value: incident root-cause analysis, change impact, observability gap-closure, audit, and operational decision support." },
      { property: "og:title", content: "Use Cases — KEMS" },
      { property: "og:description", content: "From RCA to change impact, the IT Digital Twin in production." },
    ],
  }),
  component: UseCasesPage,
});

const cases = [
  {
    icon: Zap,
    title: "AI-Driven Root Cause Analysis",
    persona: "SRE & Incident Response",
    body: "When an incident fires, KEMS automatically traverses the graph from the failing service through every dependency, recent change, and correlated signal — and returns the most probable causes with evidence.",
    outcomes: ["MTTR reduced 50–70%", "Lower L2/L3 escalations", "Evidence-backed postmortems"],
  },
  {
    icon: GitMerge,
    title: "Change Impact & Blast Radius",
    persona: "Platform & Release Engineering",
    body: "Before a deploy, query the Digital Twin: what depends on this service, which customers does it serve, what's the predicted downstream risk? Ship changes with eyes open.",
    outcomes: ["Fewer change-induced incidents", "Faster CAB approvals", "Safer high-risk migrations"],
  },
  {
    icon: ShieldAlert,
    title: "Observability Gap Detection",
    persona: "Observability & Platform Teams",
    body: "KEMS knows what should be monitored because it knows what's running. Surface services without alerts, missing SLOs, and untraced critical paths automatically.",
    outcomes: ["Coverage gaps closed", "Alert noise reduced", "Higher signal-to-noise"],
  },
  {
    icon: LineChart,
    title: "Operational Decision Support",
    persona: "Heads of IT, Engineering, Operations",
    body: "Ask the Twin strategic questions: Which systems carry the most operational risk? Where is complexity concentrated? Which services drove the most downtime this quarter?",
    outcomes: ["Investment decisions on evidence", "Quarterly risk reviews", "Executive-level visibility"],
  },
  {
    icon: Users,
    title: "Onboarding & Knowledge Capture",
    persona: "Engineering Leadership",
    body: "Replace tribal knowledge with a living model. New engineers explore the estate through the Twin instead of stale wikis, accelerating time-to-productivity.",
    outcomes: ["Faster onboarding", "Reduced key-person risk", "Always-current documentation"],
  },
  {
    icon: Building2,
    title: "Audit, Compliance & Risk",
    persona: "Risk, Security, Compliance",
    body: "Map data flows, regulated workloads, and dependencies on demand. Produce auditable views of your environment that match the system's actual state, not the spreadsheet's.",
    outcomes: ["Auditable lineage", "Regulatory readiness", "Faster impact assessments"],
  },
];

function UseCasesPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Use Cases"
        title="Where the IT Digital Twin earns its keep."
        description="KEMS is deployed across SRE, platform, observability, and IT leadership functions. A few of the most common patterns."
      />

      <section className="border-b hairline">
        <div className="container-page py-20">
          <div className="grid gap-px overflow-hidden rounded-xl border hairline bg-border md:grid-cols-2">
            {cases.map((c) => (
              <article key={c.title} className="bg-background p-8 md:p-10">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-accent-blue-soft text-accent-blue">
                    <c.icon className="h-4 w-4" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-ink-muted">
                    {c.persona}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-medium tracking-tight text-ink">{c.title}</h3>
                <p className="mt-3 text-sm text-ink-muted text-pretty">{c.body}</p>
                <ul className="mt-6 space-y-1.5 border-t hairline pt-5">
                  {c.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-2 text-sm text-ink">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-blue" />
                      {o}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="border-b hairline bg-surface">
        <div className="container-page py-20">
          <figure className="mx-auto max-w-3xl text-center">
            <blockquote className="text-2xl font-medium tracking-tight text-ink text-balance md:text-3xl">
              “KEMS gave us in three weeks the level of operational visibility our previous
              tooling couldn't deliver in three years. RCA went from hours to minutes.”
            </blockquote>
            <figcaption className="mt-6 text-sm text-ink-muted">
              VP of Platform Engineering — Global Financial Services
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-ink">
        <div className="container-page py-20 text-center">
          <h2 className="text-3xl font-medium tracking-tight text-primary-foreground md:text-4xl">
            Bring your toughest use case.
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
