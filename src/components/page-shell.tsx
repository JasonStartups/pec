import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteNav, SiteFooter } from "@/components/site-chrome";
import { Reveal } from "@/components/motion-primitives";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
}) {
  return (
    <section
      className="relative pt-40 pb-24 lg:pt-52 lg:pb-32"
      style={{
        background:
          "linear-gradient(135deg, var(--navy-deep) 0%, var(--navy) 70%, color-mix(in oklab, var(--navy) 60%, var(--emerald)) 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-25"
        style={{
          background:
            "radial-gradient(50% 50% at 80% 20%, color-mix(in oklab, var(--solar) 40%, transparent), transparent)",
        }}
      />
      <div className="container-x relative text-white max-w-4xl">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: "var(--solar)" }}>
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-5 font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={240}>
            <p className="mt-8 text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed">{intro}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background">
      <SiteNav transparentOnTop />
      {children}
      <BottomCTA />
      <SiteFooter />
    </div>
  );
}

function BottomCTA() {
  return (
    <section className="py-24 bg-[var(--surface)]">
      <div className="container-x text-center max-w-3xl">
        <Reveal>
          <h2 className="font-display font-bold text-3xl md:text-5xl leading-[1.1]">
            Let's engineer your next system.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-5 text-muted-foreground text-lg">
            Talk to our team and get a tailored proposal within 48 hours.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold"
            style={{ backgroundColor: "var(--navy)", color: "white" }}
          >
            Start a Conversation <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

