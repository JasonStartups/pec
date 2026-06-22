import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/page-shell";
import { Reveal } from "@/components/motion-primitives";
import aboutImg from "@/assets/about-team.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Prodigy Exclusive Company" },
      { name: "description", content: "PEC is a Nigerian engineering company delivering renewable energy, security and smart automation for homes, businesses and industries." },
      { property: "og:title", content: "About — Prodigy Exclusive Company" },
      { property: "og:description", content: "Engineering reliable power for a connected Nigeria." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About PEC"
        title={<>Engineering reliable power<br />for a connected Nigeria.</>}
        intro="Prodigy Exclusive Company is a renewable energy and intelligent technology firm delivering complete solutions across Nigeria — from utility-scale solar to smart-building automation."
      />
      <section className="py-24 lg:py-32">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-6">
            <img src={aboutImg} alt="PEC team" loading="lazy" width={1280} height={1280} className="rounded-3xl w-full h-[520px] object-cover" />
          </Reveal>
          <Reveal delay={120} className="lg:col-span-6">
            <h2 className="font-display font-bold text-4xl lg:text-5xl leading-[1.1]">A multidisciplinary engineering team.</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Our engineers, technicians and project managers bring decades of combined experience in
              solar PV, lithium energy storage, power electronics, low-voltage security systems and
              building automation. Every project is delivered to international engineering standards
              with a relentless focus on safety, reliability and long-term performance.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                ["20+", "Certified Engineers"],
                ["100+", "Projects Delivered"],
                ["6", "Service Pillars"],
                ["24/7", "Technical Support"],
              ].map(([v, l]) => (
                <div key={l}>
                  <div className="font-display font-bold text-4xl" style={{ color: "var(--navy)" }}>{v}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
