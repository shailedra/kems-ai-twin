import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t hairline bg-surface">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-ink">
                <div className="h-2 w-2 rounded-sm bg-accent-blue" />
              </div>
              <span className="text-[15px] font-semibold tracking-tight text-ink">KEMS</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-ink-muted">
              The IT Digital Twin platform for intelligent, AI-powered IT operations.
            </p>
          </div>

          <FooterCol
            title="Platform"
            items={[
              { to: "/product", label: "IT Digital Twin" },
              { to: "/how-it-works", label: "How It Works" },
              { to: "/use-cases", label: "Use Cases" },
            ]}
          />
          <FooterCol
            title="Company"
            items={[
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ]}
          />
          <FooterCol
            title="Get Started"
            items={[
              { to: "/contact", label: "Request a Demo" },
              { to: "/contact", label: "Talk to Sales" },
            ]}
          />
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t hairline pt-8 text-xs text-ink-muted md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} KEMS Technologies. All rights reserved.</p>
          <p>Built for enterprise IT.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { to: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {items.map((i) => (
          <li key={i.label}>
            <Link to={i.to} className="text-sm text-ink-muted hover:text-ink">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
