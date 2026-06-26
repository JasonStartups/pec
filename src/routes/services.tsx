import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/page-shell";
import { Reveal, Eyebrow } from "@/components/motion-primitives";
import {
  ArrowRight,
  Sun,
  BatteryCharging,
  Zap,
  ShieldCheck,
  Cpu,
  GraduationCap,
  Wrench,
  Lightbulb,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Prodigy Exclusive Company" },
      {
        name: "description",
        content:
          "Solar energy, lithium batteries, inverters, portable solar generators, solar gadgets, maintenance, CCTV, smart home automation, and training.",
      },
      { property: "og:title", content: "Services — PEC" },
      {
        property: "og:description",
        content: "POWER · SECURE · AUTOMATE — complete renewable energy and technology solutions.",
      },
    ],
  }),
  component: ServicesPage,
});

const categories = [
  {
    tag: "POWER",
    services: [
      {
        icon: Sun,
        title: "Solar Energy Solutions",
        desc: "Complete solar power solutions for residential, commercial, and industrial clients.",
        items: [
          "Hybrid, Off-Grid & Grid-Tied Systems",
          "Residential, Commercial & Industrial Installations",
          "Solar Backup, Pumping & Street Lighting",
          "Solar Flood Lights, Security Lighting & Electric Fence",
        ],
      },
      {
        icon: BatteryCharging,
        title: "Lithium Battery & Energy Storage",
        desc: "Advanced lithium storage for homes, offices, hotels, hospitals, schools, factories, and commercial buildings.",
        items: [
          "Longer Battery Life",
          "Faster Charging & Deep Cycle Performance",
          "Improved Energy Efficiency",
          "Minimal Maintenance",
        ],
      },
      {
        icon: Zap,
        title: "Inverter Sales & Installation",
        desc: "Professional inverter solutions for uninterrupted power supply.",
        items: [
          "Hybrid & Off-Grid Inverter Installation",
          "Pure Sine Wave Inverter Systems",
          "Power Backup Solutions",
          "System Upgrades and Expansion",
        ],
      },
      {
        icon: Lightbulb,
        title: "Solar Gadgets & Appliances",
        desc: "High-quality solar-powered gadgets and energy-efficient appliances.",
        items: [
          "Solar Fans, Freezers & Refrigerators",
          "Solar TVs, Street & Security Lights",
          "Solar CCTV, Pumps & Home Lighting",
          "Solar Chargers, Power Banks & Appliances",
        ],
      },
      {
        icon: Sun,
        title: "Portable Solar Generators",
        desc: "Manufactured portable solar generators from 300W to 5000W.",
        items: [
          "300W · 500W · 800W · 1200W",
          "1500W · 2500W · 3500W · 5000W",
          "Home, Office & Outdoor Events",
          "Camping, Mobile Business & Emergency Power",
        ],
      },
      {
        icon: Wrench,
        title: "Solar System Maintenance",
        desc: "Professional maintenance and troubleshooting for existing installations.",
        items: [
          "Inspection & Fault Diagnosis",
          "Battery Replacement & Inverter Repairs",
          "System Upgrades & Performance Optimization",
          "Preventive Maintenance",
        ],
      },
    ],
  },
  {
    tag: "SECURE",
    services: [
      {
        icon: ShieldCheck,
        title: "CCTV & Security Solutions",
        desc: "Modern security for homes, businesses, schools, estates, and industrial facilities.",
        items: [
          "CCTV Camera Installation",
          "Wireless Security Cameras",
          "Remote Monitoring Systems",
          "Access Control & Video Doorbells",
        ],
      },
    ],
  },
  {
    tag: "AUTOMATE",
    services: [
      {
        icon: Cpu,
        title: "Smart Home & Automation",
        desc: "Automate and secure properties with advanced technology.",
        items: [
          "Smart Home Automation",
          "Smart Lighting Systems",
          "Remote Device Control",
          "Energy Monitoring & Smart Access Control",
        ],
      },
      {
        icon: GraduationCap,
        title: "Solar Training & Education",
        desc: "Developing skilled professionals in the renewable energy sector.",
        items: [
          "Solar Installation & System Design",
          "Inverter & Lithium Battery Technology",
          "Troubleshooting & Maintenance",
          "Renewable Energy Business Development",
        ],
      },
    ],
  },
];

function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="What We Do"
        title={
          <>
            POWER · SECURE ·
            <br />
            AUTOMATE.
          </>
        }
        intro="We specialize in the design, supply, installation, maintenance, and training of advanced solar energy systems — helping clients achieve energy independence while reducing dependence on the unstable power grid."
      />
      {categories.map((cat) => (
        <section key={cat.tag} className="py-16 lg:py-24 even:bg-[var(--surface)]">
          <div className="container-x">
              <Eyebrow>{cat.tag}</Eyebrow>
            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.services.map((s, i) => (
                <Reveal key={s.title} delay={i * 60}>
                  <div className="group h-full rounded-2xl bg-white p-8 lg:p-10 border border-border hover:card-3d transition-shadow">
                    <span
                      className="inline-flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{
                        backgroundColor: "color-mix(in oklab, var(--leaf) 16%, transparent)",
                        color: "var(--leaf)",
                      }}
                    >
                      <s.icon size={22} />
                    </span>
                    <h3 className="mt-8 font-display font-semibold text-2xl text-[var(--navy)]">{s.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{s.desc}</p>
                    <ul className="mt-6 space-y-2">
                      {s.items.map((it) => (
                        <li key={it} className="flex items-start gap-2.5 text-sm text-foreground/75">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: "var(--leaf)" }} />
                          {it}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--leaf)] group-hover:gap-3 transition-all"
                    >
                      Discuss a project <ArrowRight size={14} />
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}
    </PageShell>
  );
}
