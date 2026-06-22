import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/training", label: "Training" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav({ transparentOnTop = true }: { transparentOnTop?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !transparentOnTop || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-white/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2">
          <span
            className={`inline-flex h-9 w-9 items-center justify-center rounded-md font-display font-bold text-lg ${
              solid ? "bg-primary text-primary-foreground" : "bg-solar text-navy"
            }`}
            style={solid ? {} : { backgroundColor: "var(--solar)", color: "var(--navy)" }}
          >
            P
          </span>
          <span
            className={`font-display font-bold tracking-tight text-lg ${
              solid ? "text-foreground" : "text-white"
            }`}
          >
            Prodigy <span className="hidden sm:inline opacity-70 font-medium">Exclusive</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors ${
                solid
                  ? "text-foreground/80 hover:text-foreground"
                  : "text-white/80 hover:text-white"
              }`}
              activeProps={{ className: solid ? "text-foreground" : "text-white" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all"
            style={{ backgroundColor: "var(--solar)", color: "var(--navy)" }}
          >
            Get Quote
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md ${
            solid ? "text-foreground" : "text-white"
          }`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="container-x py-6 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-foreground/90 hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold"
              style={{ backgroundColor: "var(--solar)", color: "var(--navy)" }}
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[var(--navy-deep)] text-white/80">
      <div className="container-x py-20 grid gap-12 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2 max-w-sm">
          <div className="flex items-center gap-2 mb-5">
            <span
              className="inline-flex h-9 w-9 items-center justify-center rounded-md font-display font-bold text-lg"
              style={{ backgroundColor: "var(--solar)", color: "var(--navy)" }}
            >
              P
            </span>
            <span className="font-display font-bold text-white text-lg">Prodigy Exclusive</span>
          </div>
          <p className="text-sm leading-relaxed">
            Renewable energy and intelligent technology for homes, businesses, industries, hospitals,
            schools and commercial facilities across Nigeria.
          </p>
          <div className="mt-8 flex gap-3">
            {["LinkedIn", "Instagram", "Facebook", "X"].map((s) => (
              <a
                key={s}
                href="#"
                className="text-xs px-3 py-1.5 rounded-full border border-white/15 hover:border-white/40 transition"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        <FooterCol
          title="Company"
          items={[
            { label: "About", to: "/about" },
            { label: "Projects", to: "/projects" },
            { label: "Training", to: "/training" },
            { label: "Contact", to: "/contact" },
          ]}
        />
        <FooterCol
          title="Services"
          items={[
            { label: "Solar Energy", to: "/services" },
            { label: "Lithium Storage", to: "/services" },
            { label: "CCTV & Security", to: "/services" },
            { label: "Smart Automation", to: "/services" },
          ]}
        />
        <div>
          <h4 className="text-white font-display font-semibold mb-5 text-sm uppercase tracking-wider">
            Newsletter
          </h4>
          <p className="text-sm mb-4">Energy insights and project updates.</p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center bg-white/5 rounded-full border border-white/10 p-1"
          >
            <input
              type="email"
              required
              placeholder="Your email"
              className="bg-transparent flex-1 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none"
            />
            <button
              className="rounded-full px-4 py-2 text-xs font-semibold"
              style={{ backgroundColor: "var(--solar)", color: "var(--navy)" }}
            >
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row gap-4 items-center justify-between text-xs text-white/50">
          <p>© {new Date().getFullYear()} Prodigy Exclusive Company. All rights reserved.</p>
          <p>Designed in Nigeria · Built for the future.</p>
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
  items: { label: string; to: string }[];
}) {
  return (
    <div>
      <h4 className="text-white font-display font-semibold mb-5 text-sm uppercase tracking-wider">
        {title}
      </h4>
      <ul className="space-y-3 text-sm">
        {items.map((it) => (
          <li key={it.label}>
            <Link to={it.to} className="hover:text-white transition-colors">
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
