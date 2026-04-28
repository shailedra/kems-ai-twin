import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — KEMS" },
      { name: "description", content: "KEMS is an enterprise technology company building the IT Digital Twin platform — a unified, AI-reasoned model of the modern IT estate." },
      { property: "og:title", content: "About — KEMS" },
      { property: "og:description", content: "Our mission, principles, and team." },
    ],
  }),
  component: AboutPage,
});

const principles = [
  { t: "AI-first, evidence-led", d: "Models are powerful, but accountability matters. Every AI conclusion in KEMS comes with the evidence path that produced it." },
  { t: "The graph is the platform", d: "We bet on a typed knowledge graph as the right substrate for IT — flexible enough for messy reality, structured enough for reasoning." },
  { t: "Built for enterprise reality", d: "Your environment is hybrid, federated, and political. KEMS deploys in your VPC, respects your sources of truth, and integrates with what you already run." },
  { t: "Operational leverage over dashboards", d: "We measure ourselves on the decisions we accelerate, not the panels we render." },
];

function AboutPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="About"
        title="We're building the operating system for modern IT."
        description="KEMS was founded by IT operations and AI engineers who watched enterprise teams drown in fragmented data while making the most critical decisions of their day. We think there's a better way."
      />

      {/* MISSION */}
      <section className="border-b hairline">
        <div className="container-page grid gap-12 py-20 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Mission</p>
          </div>
          <div className="md:col-span-8">
            <p className="text-2xl font-medium tracking-tight text-ink text-balance md:text-3xl">
              To make every IT operator as effective as the best architect on their best day —
              by giving every team a live, AI-reasoned model of their estate.
            </p>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="border-b hairline bg-surface">
        <div className="container-page py-20">
          <p className="eyebrow">Principles</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-medium tracking-tight text-ink md:text-4xl text-balance">
            How we build, sell, and partner.
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border hairline bg-border md:grid-cols-2">
            {principles.map((p, i) => (
              <div key={p.t} className="bg-background p-8">
                <div className="font-mono text-xs text-accent-blue">0{i + 1}</div>
                <h3 className="mt-3 text-lg font-medium tracking-tight text-ink">{p.t}</h3>
                <p className="mt-3 text-sm text-ink-muted text-pretty">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY FACTS */}
      <section className="border-b hairline">
        <div className="container-page py-20">
          <div className="grid gap-px overflow-hidden rounded-xl border hairline bg-border md:grid-cols-4">
            {[
              { v: "2023", l: "Founded" },
              { v: "Global", l: "Customer footprint" },
              { v: "AI + Graph", l: "Core technology" },
              { v: "Enterprise", l: "Focus" },
            ].map((s) => (
              <div key={s.l} className="bg-background p-8">
                <div className="text-3xl font-medium tracking-tight text-ink">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-ink-muted">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink">
        <div className="container-page py-20 text-center">
          <h2 className="mx-auto max-w-2xl text-3xl font-medium tracking-tight text-primary-foreground md:text-4xl">
            Want to work with us — or for us?
          </h2>
          <Link
            to="/contact"
            className="mt-8 inline-flex h-11 items-center gap-2 rounded-md bg-accent-blue px-6 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Get in touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
