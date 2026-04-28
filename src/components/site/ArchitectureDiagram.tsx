import { Database, Network, Brain, MessageSquare, ChevronRight } from "lucide-react";
import { Fragment } from "react";

const layers = [
  {
    icon: Database,
    title: "Data Layer",
    items: ["Logs & metrics", "Incidents & alerts", "Change events", "CMDB & topology"],
  },
  {
    icon: Network,
    title: "Knowledge Graph",
    items: ["Service dependencies", "Infrastructure map", "Temporal signals", "Unified context"],
  },
  {
    icon: Brain,
    title: "AI Reasoning",
    items: ["Causal inference", "Root cause analysis", "Impact prediction", "Anomaly detection"],
  },
  {
    icon: MessageSquare,
    title: "Ask AI Interface",
    items: ["Natural language queries", "Investigative workflows", "Operational copilots", "Decision support"],
  },
];

export function ArchitectureDiagram() {
  return (
    <div className="relative rounded-2xl border hairline bg-surface-elevated p-6 md:p-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-blue/40 to-transparent" />

      <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:items-stretch">
        {layers.map((layer, i) => (
          <Fragment key={layer.title}>
            <div className="group relative flex flex-col rounded-xl border hairline bg-background p-5 transition-shadow hover:shadow-sm">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-accent-blue-soft text-accent-blue">
                  <layer.icon className="h-4 w-4" />
                </div>
                <span className="text-[10px] font-mono text-ink-muted">0{i + 1}</span>
              </div>
              <h3 className="mt-4 text-sm font-semibold text-ink">{layer.title}</h3>
              <ul className="mt-3 space-y-1.5">
                {layer.items.map((it) => (
                  <li key={it} className="text-xs text-ink-muted">
                    {it}
                  </li>
                ))}
              </ul>
            </div>

            {i < layers.length - 1 && (
              <div className="hidden items-center justify-center md:flex">
                <ChevronRight className="h-4 w-4 text-ink-muted/50" />
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
