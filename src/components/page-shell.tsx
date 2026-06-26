import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteNav, SiteFooter } from "@/components/site-chrome";
import { Reveal, Eyebrow } from "@/components/motion-primitives";
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
    <section className="relative pt-28 sm:pt-36 pb-14 sm:pb-20 lg:pt-52 lg:pb-32 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, color-mix(in oklab, var(--navy-deep) 94%, transparent) 0%, color-mix(in oklab, var(--navy) 88%, transparent) 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(50% 50% at 80% 20%, color-mix(in oklab, var(--leaf) 40%, transparent), transparent)",
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: "var(--leaf)" }} />
      <div className="container-x relative text-white max-w-4xl">
        <Eyebrow color="var(--leaf-bright)">{eyebrow}</Eyebrow>
        <Reveal delay={120}>
          <h1 className="mt-5 sm:mt-7 font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={240}>
            <p className="mt-5 sm:mt-8 text-base sm:text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed">{intro}</p>
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
    <section className="py-16 sm:py-24 bg-[var(--surface)]">
      <div className="container-x text-center max-w-3xl">
        <Reveal>
          <h2 className="font-display font-bold text-3xl md:text-5xl leading-[1.1] text-[var(--navy)]">
            Empowering homes, businesses, and communities.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-5 text-muted-foreground text-lg">
            Get in touch for reliable renewable energy and technology solutions — nationwide service
            across Nigeria and beyond.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-white"
            style={{ backgroundColor: "var(--leaf)" }}
          >
            Start a Conversation <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
