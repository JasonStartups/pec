import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/page-shell";
import { Reveal } from "@/components/motion-primitives";
import solarHomeImg from "@/assets/solar-home.jpg";
import heroImg from "@/assets/hero-solar.jpg";
import smartHomeImg from "@/assets/smart-home.jpg";
import cctvImg from "@/assets/cctv.jpg";
import batteryImg from "@/assets/battery.jpg";
import inverterImg from "@/assets/inverter.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Prodigy Exclusive Company" },
      { name: "description", content: "Selected solar, storage, security and automation projects delivered across Nigeria by PEC." },
      { property: "og:title", content: "Projects — PEC" },
      { property: "og:description", content: "Selected work across Nigeria." },
    ],
  }),
  component: ProjectsPage,
});

const items = [
  { title: "Lekki Estate Hybrid Solar", tag: "Residential · Solar", img: solarHomeImg, scale: "45 kW · 120 kWh" },
  { title: "Ikeja Factory PV Plant", tag: "Industrial · Solar", img: heroImg, scale: "1.2 MW · Grid-Tied" },
  { title: "Abuja Office Smart Building", tag: "Commercial · Automation", img: smartHomeImg, scale: "8,000 m²" },
  { title: "Lagos Mall Surveillance Grid", tag: "Commercial · Security", img: cctvImg, scale: "240 cameras" },
  { title: "Port Harcourt BESS Site", tag: "Industrial · Storage", img: batteryImg, scale: "2.5 MWh" },
  { title: "Kano Inverter Room Upgrade", tag: "Industrial · Power", img: inverterImg, scale: "500 kVA" },
];

function ProjectsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Projects"
        title={<>Selected work, delivered<br />across Nigeria.</>}
        intro="A portfolio of engineered solar, storage, security and automation systems for residential, commercial and industrial clients."
      />
      <section className="py-24 lg:py-32">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <article className="group rounded-2xl overflow-hidden bg-[var(--surface)] h-full">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" width={1280} height={960} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-7">
                  <div className="flex items-center justify-between text-xs uppercase tracking-wider font-semibold text-muted-foreground">
                    <span>{p.tag}</span>
                    <span style={{ color: "var(--navy)" }}>{p.scale}</span>
                  </div>
                  <h3 className="mt-3 font-display font-semibold text-xl">{p.title}</h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
