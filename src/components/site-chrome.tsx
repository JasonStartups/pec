import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, MapPin, Phone, Mail, Send } from "lucide-react";
import pecEmblem from "@/assets/pec-emblem.png";
import {
  PEC_EMAIL,
  PEC_FACEBOOK_URL,
  PEC_HEAD_OFFICE,
  PEC_INSTAGRAM_URL,
  PEC_LINKEDIN_URL,
  PEC_PHONE_DISPLAY,
  PEC_TIKTOK_URL,
  PEC_X_URL,
  PEC_YOUTUBE_URL,
  whatsappUrl,
} from "@/lib/contact";

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
          <a
            href={whatsappUrl("Hello PEC, I would like to get a quote.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:brightness-110"
            style={{ backgroundColor: "var(--leaf)", color: "white" }}
          >
            Get Quote
          </a>
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
            <a
              href={whatsappUrl("Hello PEC, I would like to get a quote.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold"
              style={{ backgroundColor: "var(--leaf)", color: "white" }}
            >
              Get Quote
            </a>
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
            <div className="mt-8 flex flex-wrap gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href === "#" ? undefined : "_blank"}
                  rel={s.href === "#" ? undefined : "noopener noreferrer"}
                  aria-label={s.label}
                  title={s.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-[var(--leaf)] hover:text-white hover:-translate-y-0.5"
                >
                  <SocialIcon name={s.icon} />
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
                <span>{PEC_HEAD_OFFICE}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0" style={{ color: "var(--leaf)" }} />
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--leaf)] transition-colors"
                >
                  {PEC_PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0" style={{ color: "var(--leaf)" }} />
                <span>{PEC_EMAIL}</span>
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

type SocialName = "linkedin" | "instagram" | "facebook" | "tiktok" | "x" | "youtube";

const socials: { label: string; href: string; icon: SocialName }[] = [
  { label: "LinkedIn", href: PEC_LINKEDIN_URL, icon: "linkedin" },
  { label: "Instagram", href: PEC_INSTAGRAM_URL, icon: "instagram" },
  { label: "Facebook", href: PEC_FACEBOOK_URL, icon: "facebook" },
  { label: "TikTok", href: PEC_TIKTOK_URL, icon: "tiktok" },
  { label: "X", href: PEC_X_URL, icon: "x" },
  { label: "YouTube", href: PEC_YOUTUBE_URL, icon: "youtube" },
];

const socialPaths: Record<SocialName, string> = {
  linkedin:
    "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z",
  instagram:
    "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  facebook:
    "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  tiktok:
    "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
  x: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  youtube:
    "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
};

function SocialIcon({ name }: { name: SocialName }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      focusable="false"
    >
      <path d={socialPaths[name]} />
    </svg>
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
