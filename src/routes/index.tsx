import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, AlertTriangle, Layers, Sparkles, Gauge, ShieldCheck, TrendingUp } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { GraphVisual } from "@/components/site/GraphVisual";
import { ArchitectureDiagram } from "@/components/site/ArchitectureDiagram";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KEMS — Intelligent IT Operations powered by AI Digital Twin" },
      { name: "description", content: "KEMS delivers an AI-powered IT Digital Twin that unifies topology and operational signals into a knowledge graph for causal RCA, impact insights, and decision support." },
      { property: "og:title", content: "KEMS — Intelligent IT Operations powered by AI Digital Twin" },
      { property: "og:description", content: "An AI-powered IT Digital Twin platform for enterprise operations." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden border-b hairline">
        <div className="absolute inset-0 dot-bg opacity-60" />
        <div className="container-page relative grid gap-12 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border hairline bg-surface-elevated px-3 py-1 text-xs text-ink-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" />
              The IT Digital Twin Platform
            </div>
            <h1 className="mt-6 text-5xl font-medium tracking-tight text-ink text-balance md:text-7xl">
              Intelligent IT Operations powered by{" "}
              <span className="text-accent-blue">AI Digital Twin</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-muted text-pretty">
              KEMS unifies your topology, telemetry, and change history into a single
              knowledge graph — then applies causal AI reasoning to explain incidents,
              predict impact, and accelerate decisions.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex h-11 items-center gap-2 rounded-md bg-ink px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Request a Demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex h-11 items-center gap-2 rounded-md border hairline bg-surface-elevated px-5 text-sm font-medium text-ink hover:bg-muted"
              >
                See how it works
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 border-t hairline pt-8">
              <Stat value="60%" label="Faster root cause" />
              <Stat value="3.5×" label="MTTR reduction" />
              <Stat value="100%" label="Dependency visibility" />
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative rounded-2xl border hairline bg-surface-elevated p-2 shadow-sm">
              <div className="flex items-center gap-1.5 border-b hairline px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                <span className="ml-3 font-mono text-[10px] text-ink-muted">kems.graph / payments-incident</span>
              </div>
              <GraphVisual className="h-auto w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY / LOGO STRIP */}
      <section className="border-b hairline bg-surface">
        <div className="container-page py-10">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-ink-muted">
            Built for enterprise IT, SRE, and platform teams
          </p>
          <div className="mt-6 grid grid-cols-2 items-center gap-8 opacity-70 md:grid-cols-6">
            {["NORTHWIND", "ACME GRID", "OBELISK", "HELIX BANK", "VANTAGE", "AURELIA"].map((n) => (
              <div key={n} className="text-center font-mono text-xs tracking-widest text-ink-muted">
                {n}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="border-b hairline">
        <div className="container-page py-24">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="eyebrow">The Problem</p>
              <h2 className="mt-4 text-3xl font-medium tracking-tight text-ink md:text-4xl text-balance">
                Modern IT runs on fragmented data — and pays the price in downtime.
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="text-lg text-ink-muted text-pretty">
                Telemetry lives in observability tools. Topology lives in CMDBs. Incidents
                live in ticketing. Changes live in pipelines. Engineers stitch them together
                manually — under pressure, in the dark.
              </p>
              <div className="mt-10 grid gap-px overflow-hidden rounded-xl border hairline bg-border md:grid-cols-3">
                {[
                  { icon: AlertTriangle, t: "Siloed signals", d: "Logs, metrics, traces, and tickets never meet on a shared model." },
                  { icon: Layers, t: "Hidden dependencies", d: "Service relationships drift faster than they get documented." },
                  { icon: Gauge, t: "Slow root cause", d: "Engineers spend 40–70% of incident time just establishing context." },
                ].map((c) => (
                  <div key={c.t} className="bg-background p-6">
                    <c.icon className="h-5 w-5 text-accent-blue" />
                    <h3 className="mt-4 text-sm font-semibold text-ink">{c.t}</h3>
                    <p className="mt-1.5 text-sm text-ink-muted">{c.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="border-b hairline bg-surface">
        <div className="container-page py-24">
          <div className="grid gap-12 md:grid-cols-12 md:items-center">
            <div className="md:col-span-6">
              <div className="rounded-2xl border hairline bg-surface-elevated p-2">
                <div className="border-b hairline px-3 py-2 font-mono text-[10px] text-ink-muted">
                  knowledge-graph.kems
                </div>
                <GraphVisual className="h-auto w-full" />
              </div>
            </div>
            <div className="md:col-span-6">
              <p className="eyebrow">The Solution</p>
              <h2 className="mt-4 text-3xl font-medium tracking-tight text-ink md:text-4xl text-balance">
                One unified knowledge graph. Causal AI on top.
              </h2>
              <p className="mt-5 text-lg text-ink-muted text-pretty">
                The KEMS IT Digital Twin combines <strong className="font-medium text-ink">topology</strong> —
                the dependencies between services, infrastructure, and data — with{" "}
                <strong className="font-medium text-ink">operational signals</strong> from logs, incidents,
                and change events. AI reasoning operates over the graph to explain
                <em> why </em> something broke and <em> what else</em> it touches.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Live dependency map across cloud, on-prem, and SaaS",
                  "Temporal correlation of changes, incidents, and anomalies",
                  "Causal reasoning, not just statistical alerting",
                  "Natural-language interface for any operator",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-ink">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="border-b hairline">
        <div className="container-page py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Architecture</p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight text-ink md:text-4xl text-balance">
              Four layers. One coherent system of intelligence.
            </h2>
            <p className="mt-5 text-ink-muted text-pretty">
              Each layer is independently composable, but together they form a closed loop —
              raw signals become structured context, context becomes reasoning, reasoning
              becomes action.
            </p>
          </div>
          <div className="mt-14">
            <ArchitectureDiagram />
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="border-b hairline bg-surface">
        <div className="container-page py-24">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="eyebrow">Benefits</p>
              <h2 className="mt-4 text-3xl font-medium tracking-tight text-ink md:text-4xl text-balance">
                Outcomes the business can measure.
              </h2>
              <p className="mt-4 text-ink-muted">
                KEMS isn't another dashboard. It's an operating model upgrade for IT.
              </p>
            </div>
            <div className="md:col-span-8 grid gap-6 sm:grid-cols-2">
              {[
                { icon: Sparkles, t: "Faster RCA", d: "Causal AI pinpoints likely root cause in seconds, with the evidence chain attached." },
                { icon: TrendingUp, t: "Reduced downtime", d: "Predict blast radius before changes ship; catch cascading failures earlier." },
                { icon: ShieldCheck, t: "Better decisions", d: "Every operator gets the same enriched context, from L1 to architecture." },
                { icon: Gauge, t: "Operational leverage", d: "Lower toil. Higher signal. A scalable answer to growing system complexity." },
              ].map((b) => (
                <div key={b.t} className="rounded-xl border hairline bg-surface-elevated p-6">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-accent-blue-soft text-accent-blue">
                    <b.icon className="h-4 w-4" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-ink">{b.t}</h3>
                  <p className="mt-2 text-sm text-ink-muted">{b.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink">
        <div className="container-page py-24 text-center">
          <h2 className="mx-auto max-w-3xl text-3xl font-medium tracking-tight text-primary-foreground md:text-5xl text-balance">
            See your IT estate as it really is.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-primary-foreground/70 text-pretty">
            Book a 30-minute walkthrough. We'll show how KEMS builds a Digital Twin
            of your environment and runs causal AI on top.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/contact"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-accent-blue px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Request a Demo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl font-medium tracking-tight text-ink">{value}</div>
      <div className="mt-1 text-xs text-ink-muted">{label}</div>
    </div>
  );
}
