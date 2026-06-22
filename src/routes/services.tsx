import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/page-shell";
import { Reveal } from "@/components/motion-primitives";
import { ArrowRight, Sun, BatteryCharging, Zap, ShieldCheck, Cpu, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Prodigy Exclusive Company" },
      { name: "description", content: "Solar energy, lithium battery storage, inverters, solar generators, CCTV & security, smart automation and engineering training." },
      { property: "og:title", content: "Services — PEC" },
      { property: "og:description", content: "Complete renewable energy and intelligent technology services." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Sun, title: "Solar Energy Solutions", desc: "Hybrid, grid-tied and off-grid PV systems for residential, commercial and industrial use." },
  { icon: BatteryCharging, title: "Lithium Battery Systems", desc: "Long-life, modular lithium storage with intelligent battery management." },
  { icon: Zap, title: "Inverters", desc: "High-efficiency hybrid and pure sine inverters from 1kW to multi-MW." },
  { icon: Sun, title: "Solar Generators", desc: "Portable solar generators from 300W to 5000W for homes, work and field deployments." },
  { icon: Sun, title: "Solar Gadgets & Appliances", desc: "DC-ready and solar-optimised home and commercial appliances." },
  { icon: ShieldCheck, title: "CCTV & Security", desc: "IP surveillance, access control, video doorbells and remote monitoring." },
  { icon: Cpu, title: "Smart Home Automation", desc: "Lighting, climate, energy and security unified into one intuitive control layer." },
  { icon: GraduationCap, title: "Solar Training", desc: "Hands-on training in solar installation, battery and inverter systems." },
];

function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Services"
        title={<>Complete capabilities.<br />One trusted partner.</>}
        intro="From utility-scale solar farms to intelligent home automation, we deliver every layer of modern renewable energy and smart-building technology."
      />
      <section className="py-24 lg:py-32">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div className="group h-full rounded-2xl bg-[var(--surface)] p-8 lg:p-10 border border-border hover:bg-[var(--navy)] hover:text-white transition-colors">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl" style={{ backgroundColor: "var(--solar)", color: "var(--navy)" }}>
                  <s.icon size={22} />
                </span>
                <h3 className="mt-8 font-display font-semibold text-2xl">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed opacity-80">{s.desc}</p>
                <Link to="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all">
                  Discuss a project <ArrowRight size={14} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
