import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { ArchitectureDiagram } from "@/components/site/ArchitectureDiagram";
import { GraphVisual } from "@/components/site/GraphVisual";
import { ArrowRight, Boxes, GitBranch, Activity, FileSearch, Workflow, Lock } from "lucide-react";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "IT Digital Twin — KEMS" },
      { name: "description", content: "The KEMS IT Digital Twin: a unified knowledge graph of your infrastructure, services, and operations — with causal AI reasoning on top." },
      { property: "og:title", content: "IT Digital Twin — KEMS" },
      { property: "og:description", content: "A unified, AI-reasoned model of your entire IT estate." },
    ],
  }),
  component: ProductPage,
});

function ProductPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Product"
        title="The IT Digital Twin."
        description="A live, queryable model of your entire IT estate — combining topology and operational signals into a single graph that AI can reason over."
      />

      {/* OVERVIEW */}
      <section className="border-b hairline">
        <div className="container-page grid gap-12 py-20 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">What it is</p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight text-ink text-balance">
              A virtual replica of your IT operations — built from the data you already have.
            </h2>
            <p className="mt-5 text-ink-muted">
              KEMS continuously ingests topology, telemetry, change, and incident data,
              normalises it into a knowledge graph, and exposes it through APIs and a
              natural-language interface. Every service, dependency, and event is one
              coherent object model.
            </p>
            <Link to="/how-it-works" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent-blue hover:opacity-80">
              How it's built <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="md:col-span-7">
            <div className="rounded-2xl border hairline bg-surface-elevated p-2">
              <div className="border-b hairline px-3 py-2 font-mono text-[10px] text-ink-muted">
                topology + signals → knowledge graph
              </div>
              <GraphVisual className="h-auto w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES GRID */}
      <section className="border-b hairline bg-surface">
        <div className="container-page py-20">
          <p className="eyebrow">Capabilities</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-medium tracking-tight text-ink text-balance md:text-4xl">
            Everything you need to operate complex IT — in one model.
          </h2>

          <div className="mt-14 grid gap-px overflow-hidden rounded-xl border hairline bg-border md:grid-cols-3">
            {[
              { icon: Boxes, t: "Unified Knowledge Graph", d: "Services, infrastructure, data stores, identities, and events — connected as a typed graph." },
              { icon: GitBranch, t: "Live Dependency Map", d: "Auto-discovered topology that stays accurate as your estate evolves." },
              { icon: Activity, t: "Operational Signals", d: "Logs, metrics, alerts, incidents, and change events fused with structural context." },
              { icon: FileSearch, t: "Causal Root-Cause AI", d: "Reasoning over the graph to identify the most likely cause and the evidence behind it." },
              { icon: Workflow, t: "Impact & Blast Radius", d: "Predict downstream effects of any change, failure, or planned action before it happens." },
              { icon: Lock, t: "Enterprise Ready", d: "SSO, RBAC, audit trails, and on-prem or VPC deployment options." },
            ].map((c) => (
              <div key={c.t} className="bg-background p-7">
                <c.icon className="h-5 w-5 text-accent-blue" />
                <h3 className="mt-5 text-base font-semibold text-ink">{c.t}</h3>
                <p className="mt-2 text-sm text-ink-muted">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="border-b hairline">
        <div className="container-page py-20">
          <p className="eyebrow text-center">Platform Architecture</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-center text-3xl font-medium tracking-tight text-ink text-balance md:text-4xl">
            Four layers, one closed loop.
          </h2>
          <div className="mt-14">
            <ArchitectureDiagram />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink">
        <div className="container-page py-20 text-center">
          <h2 className="text-3xl font-medium tracking-tight text-primary-foreground md:text-4xl">
            Ready to build your IT Digital Twin?
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
