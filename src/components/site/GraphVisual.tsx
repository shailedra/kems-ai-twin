// Decorative dependency-graph SVG used in hero and product pages.
export function GraphVisual({ className = "" }: { className?: string }) {
  const nodes = [
    { id: "api", x: 300, y: 70, label: "API Gateway", kind: "service" },
    { id: "auth", x: 130, y: 160, label: "Auth", kind: "service" },
    { id: "orders", x: 300, y: 200, label: "Orders", kind: "service" },
    { id: "payments", x: 470, y: 160, label: "Payments", kind: "service" },
    { id: "db1", x: 90, y: 300, label: "users-db", kind: "data" },
    { id: "db2", x: 260, y: 340, label: "orders-db", kind: "data" },
    { id: "queue", x: 410, y: 320, label: "events-queue", kind: "infra" },
    { id: "cache", x: 540, y: 290, label: "redis", kind: "infra" },
    { id: "ml", x: 360, y: 440, label: "fraud-ml", kind: "ai" },
  ];
  const edges: [string, string][] = [
    ["api", "auth"], ["api", "orders"], ["api", "payments"],
    ["auth", "db1"], ["orders", "db2"], ["orders", "queue"],
    ["payments", "queue"], ["payments", "cache"], ["queue", "ml"], ["orders", "ml"],
  ];
  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));
  const colorFor = (k: string) =>
    k === "service" ? "var(--accent-blue)" :
    k === "data" ? "oklch(0.45 0.02 255)" :
    k === "infra" ? "oklch(0.55 0.05 220)" :
    "oklch(0.55 0.18 290)";

  return (
    <svg viewBox="0 0 640 500" className={className} role="img" aria-label="Dependency graph">
      <defs>
        <radialGradient id="pulse" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.55 0.18 256)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="oklch(0.55 0.18 256)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Subtle grid */}
      <g opacity="0.5">
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 56} y1="0" x2={i * 56} y2="500" stroke="oklch(0.92 0.005 250)" strokeWidth="1" />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 56} x2="640" y2={i * 56} stroke="oklch(0.92 0.005 250)" strokeWidth="1" />
        ))}
      </g>

      {/* Edges */}
      {edges.map(([a, b], i) => {
        const A = byId[a]; const B = byId[b];
        return (
          <line
            key={i}
            x1={A.x} y1={A.y} x2={B.x} y2={B.y}
            stroke="oklch(0.55 0.18 256)" strokeOpacity="0.35" strokeWidth="1.2"
          />
        );
      })}

      {/* Active path highlight */}
      <g>
        <line x1={byId.api.x} y1={byId.api.y} x2={byId.payments.x} y2={byId.payments.y} stroke="oklch(0.55 0.18 256)" strokeWidth="2.2" />
        <line x1={byId.payments.x} y1={byId.payments.y} x2={byId.queue.x} y2={byId.queue.y} stroke="oklch(0.55 0.18 256)" strokeWidth="2.2" />
        <line x1={byId.queue.x} y1={byId.queue.y} x2={byId.ml.x} y2={byId.ml.y} stroke="oklch(0.55 0.18 256)" strokeWidth="2.2" />
      </g>

      {/* Nodes */}
      {nodes.map((n) => {
        const highlighted = ["payments", "queue", "ml"].includes(n.id);
        return (
          <g key={n.id}>
            {highlighted && <circle cx={n.x} cy={n.y} r="28" fill="url(#pulse)" />}
            <circle cx={n.x} cy={n.y} r="7" fill={colorFor(n.kind)} />
            <circle cx={n.x} cy={n.y} r="11" fill="none" stroke={colorFor(n.kind)} strokeOpacity="0.3" />
            <text
              x={n.x} y={n.y + 24}
              textAnchor="middle"
              fontSize="10"
              fontFamily="ui-monospace, monospace"
              fill="oklch(0.35 0.02 255)"
            >
              {n.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
