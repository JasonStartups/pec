import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, MapPin, Phone, Mail, Send } from "lucide-react";
import pecEmblem from "@/assets/pec-emblem.png";

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
  const pathname = useRouterState({ select: (s) => s.location.pathname });

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
          ? "backdrop-blur-md border-b border-white/10 shadow-[0_4px_32px_-8px_rgba(0,0,0,0.45)]"
          : "bg-transparent"
      }`}
      style={solid ? { backgroundColor: "oklch(0.18 0.045 258 / 0.97)" } : undefined}
    >
      <div className="container-x flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 min-w-0">
          <img
            src={pecEmblem}
            alt="Prodigy Exclusive Company"
            className="h-10 sm:h-12 w-auto shrink-0"
          />
          <span className="leading-tight min-w-0">
            <span className="block font-display font-bold tracking-wide text-sm sm:text-base truncate text-white">
              Prodigy Exclusive
            </span>
            <span className="hidden sm:block text-[10px] font-medium uppercase tracking-[0.2em] text-white/50">
              Driven by Innovation, Defined by Excellence
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => {
            const isActive = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
            return (
              <Link
                key={l.to}
                to={l.to}
                className="group relative flex flex-col items-center gap-1 py-1"
                activeOptions={{ exact: l.to === "/" }}
              >
                <span
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "font-semibold"
                      : "text-white/65 group-hover:text-white"
                  }`}
                  style={isActive ? { color: "var(--leaf-bright)" } : undefined}
                >
                  {l.label}
                </span>
                <span
                  className="h-[3px] rounded-full transition-all duration-300 origin-center"
                  style={{
                    width: isActive ? "100%" : "0%",
                    backgroundColor: "var(--leaf)",
                    opacity: isActive ? 1 : 0,
                  }}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:brightness-110"
            style={{ backgroundColor: "var(--leaf)", color: "white" }}
          >
            Get Quote
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-white"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div
          className="lg:hidden border-t border-white/10"
          style={{ backgroundColor: "oklch(0.18 0.045 258 / 0.98)" }}
        >
          <div className="container-x py-6 flex flex-col gap-1">
            {links.map((l) => {
              const isActive = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-3 text-base font-medium border-b border-white/5 last:border-0"
                  style={{ color: isActive ? "var(--leaf-bright)" : "rgba(255,255,255,0.75)" }}
                >
                  {l.label}
                  {isActive && (
                    <span
                      className="h-1.5 w-6 rounded-full"
                      style={{ backgroundColor: "var(--leaf)" }}
                    />
                  )}
                </Link>
              );
            })}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold"
              style={{ backgroundColor: "var(--leaf)", color: "white" }}
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
    <footer className="relative overflow-hidden bg-[var(--navy-deep)] text-white/75">
      <div className="pinstripe absolute inset-0 opacity-60" aria-hidden />
      <div className="relative">
        <div className="h-1 w-full" style={{ background: "var(--leaf)" }} />
        <div className="container-x py-12 md:py-20 grid gap-10 md:gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2 max-w-sm">
            <div className="flex items-center gap-3 mb-5">
              <img
                src={pecEmblem}
                alt="Prodigy Exclusive Company"
                className="h-12 w-auto shrink-0"
              />
              <span className="leading-tight">
                <span className="block font-display font-bold text-white text-base">Prodigy Exclusive</span>
                <span className="hidden sm:block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">
                  Driven by Innovation, Defined by Excellence
                </span>
              </span>
            </div>
          <p className="text-sm leading-relaxed">
            Prodigy Exclusive Company (PEC) is a leading renewable energy and technology solutions
            company providing reliable, sustainable, and cost-effective power for homes, businesses,
            industries, schools, hospitals, estates, and commercial facilities across Nigeria and beyond.
          </p>
            <div className="mt-8 flex gap-3">
              {["LinkedIn", "Instagram", "Facebook", "X"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-xs px-3 py-1.5 rounded-full border border-white/15 hover:border-[var(--leaf)] hover:text-white transition"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            title="Quick Links"
            items={[
              { label: "About", to: "/about" },
              { label: "Services", to: "/services" },
              { label: "Projects", to: "/projects" },
              { label: "Training", to: "/training" },
              { label: "Contact", to: "/contact" },
            ]}
          />

          <div>
            <h4 className="text-white font-display font-semibold mb-5 text-sm uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0" style={{ color: "var(--leaf)" }} />
                <span>Lagos, Nigeria · Nationwide project delivery</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0" style={{ color: "var(--leaf)" }} />
                <span>+234 800 000 0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0" style={{ color: "var(--leaf)" }} />
                <span>hello@prodigyexclusive.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold mb-5 text-sm uppercase tracking-wider">
              Subscribe to Newsletter
            </h4>
            <p className="text-sm mb-4">Get energy insights and project updates from PEC.</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center bg-white/5 rounded-full border border-white/10 p-1.5 pl-5"
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                className="bg-transparent flex-1 text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
              <button
                aria-label="Subscribe"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full transition-transform hover:scale-105"
                style={{ backgroundColor: "var(--leaf)", color: "white" }}
              >
                <Send size={15} />
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
            <Link to={it.to} className="hover:text-[var(--leaf)] transition-colors">
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
