import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Sun,
  BatteryCharging,
  Zap,
  ShieldCheck,
  Camera,
  Home,
  Cpu,
  Wrench,
  GraduationCap,
  Sparkles,
  Award,
  Headphones,
  MapPin,
  Lightbulb,
  Factory,
  Building2,
  HeartPulse,
  School,
  Hotel,
  Church,
  Tractor,
  ArrowRight,
  CheckCircle2,
  Quote,
} from "lucide-react";
import { SiteNav, SiteFooter } from "@/components/site-chrome";
import { Counter, Reveal } from "@/components/motion-primitives";
import heroImg from "@/assets/hero-solar.jpg";
import aboutImg from "@/assets/about-team.jpg";
import batteryImg from "@/assets/battery.jpg";
import solarHomeImg from "@/assets/solar-home.jpg";
import cctvImg from "@/assets/cctv.jpg";
import smartHomeImg from "@/assets/smart-home.jpg";
import trainingImg from "@/assets/training.jpg";
import inverterImg from "@/assets/inverter.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prodigy Exclusive Company — Reliable Renewable Energy for Nigeria" },
      {
        name: "description",
        content:
          "Design, supply, installation, maintenance and training. Solar, lithium storage, security and smart automation for homes, businesses and industries.",
      },
      { property: "og:title", content: "Prodigy Exclusive Company — Renewable Energy & Smart Technology" },
      { property: "og:description", content: "Complete solar energy and intelligent technology solutions built for Nigeria's future." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="bg-background">
      <SiteNav />
      <Hero />
      <Intro />
      <Categories />
      <FeaturedServices />
      <WhyChooseUs />
      <Industries />
      <Process />
      <ProjectsShowcase />
      <Stats />
      <Testimonials />
      <MissionVision />
      <CTABanner />
      <SiteFooter />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-24 overflow-hidden">
      <img
        src={heroImg}
        alt="Industrial solar installation"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1280}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(110deg, color-mix(in oklab, var(--navy-deep) 88%, transparent) 0%, color-mix(in oklab, var(--navy) 70%, transparent) 55%, color-mix(in oklab, var(--navy) 30%, transparent) 100%)",
        }}
      />
      <div className="container-x relative z-10 grid lg:grid-cols-12 gap-10 py-24 lg:py-32 items-center">
        <div className="lg:col-span-7 text-white">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wider uppercase backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--solar)" }} />
              Renewable Energy · Security · Automation
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-7 font-display font-bold leading-[1.02] tracking-tight text-5xl md:text-6xl lg:text-7xl">
              Powering Homes,<br />Businesses & Industries<br />
              <span style={{ color: "var(--solar)" }}>with reliable renewable energy.</span>
            </h1>
          </Reveal>
          <Reveal delay={260}>
            <p className="mt-8 max-w-xl text-lg md:text-xl text-white/75 leading-relaxed">
              Design. Supply. Installation. Maintenance. Training. Complete solar energy and
              technology solutions built for Nigeria's future.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: "var(--solar)", color: "var(--navy)" }}
              >
                Get a Free Consultation <ArrowRight size={16} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold border border-white/30 text-white hover:bg-white/10 transition"
              >
                View Services
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={500}>
            <div className="grid grid-cols-2 gap-4">
              <StatCard big="20+" label="Engineers" />
              <StatCard big="100+" label="Projects" />
              <StatCard big="Nationwide" label="Coverage" small />
              <StatCard big="Specialists" label="Renewable Energy" small />
            </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
        <div className="text-white/50 text-xs tracking-[0.25em] uppercase">Scroll</div>
      </div>
    </section>
  );
}

function StatCard({ big, label, small }: { big: string; label: string; small?: boolean }) {
  return (
    <div className="rounded-2xl bg-white/8 backdrop-blur-md border border-white/15 p-6 lg:p-8 float-slow" style={{ animationDelay: `${Math.random() * 2}s` }}>
      <div className={`font-display font-bold text-white leading-none ${small ? "text-2xl" : "text-4xl lg:text-5xl"}`}>
        {big}
      </div>
      <div className="mt-3 text-xs uppercase tracking-wider text-white/60">{label}</div>
    </div>
  );
}

/* ---------------- INTRO ---------------- */
function Intro() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <Reveal className="lg:col-span-6">
          <div className="relative">
            <img
              src={aboutImg}
              alt="PEC engineers at work"
              className="rounded-2xl w-full h-[520px] object-cover"
              loading="lazy"
              width={1280}
              height={1280}
            />
            <div
              className="absolute -bottom-8 -right-4 lg:-right-12 rounded-2xl p-6 lg:p-8 shadow-xl max-w-xs"
              style={{ backgroundColor: "var(--navy)", color: "white" }}
            >
              <div className="font-display text-4xl font-bold" style={{ color: "var(--solar)" }}>
                15+ yrs
              </div>
              <div className="mt-2 text-sm text-white/70">
                of combined engineering experience across renewable energy and smart technology.
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-6">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: "var(--emerald)" }}>
            Who We Are
          </span>
          <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Engineering reliable power for a connected Nigeria.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Prodigy Exclusive Company (PEC) delivers renewable energy and intelligent technology
            solutions that help homes, businesses, industries, hospitals, schools and commercial
            facilities achieve reliable power, security and automation.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "End-to-end design, supply and installation",
              "Nationwide maintenance and 24/7 technical support",
              "Hands-on training academy for engineers and technicians",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-foreground/80">
                <CheckCircle2 className="mt-1 shrink-0" size={20} style={{ color: "var(--emerald)" }} />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <Link
            to="/about"
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold border-b-2 border-foreground pb-1 hover:gap-3 transition-all"
          >
            Learn More <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- CATEGORIES ---------------- */
function Categories() {
  const cats = [
    {
      tag: "POWER",
      icon: Zap,
      color: "var(--solar)",
      title: "Energy & Storage",
      items: ["Solar Energy", "Lithium Batteries", "Inverters", "Portable Solar Generators", "Solar Appliances"],
    },
    {
      tag: "SECURE",
      icon: ShieldCheck,
      color: "var(--emerald)",
      title: "Security & Surveillance",
      items: ["CCTV Systems", "Security Cameras", "Access Control", "Remote Monitoring", "Video Doorbells"],
    },
    {
      tag: "AUTOMATE",
      icon: Cpu,
      color: "#7AB7FF",
      title: "Smart Automation",
      items: ["Smart Home", "Lighting Control", "Energy Monitoring", "Remote Control", "Automation Systems"],
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-[var(--surface)]">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: "var(--emerald)" }}>
              What We Do
            </span>
            <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl lg:text-6xl max-w-2xl leading-[1.05]">
              Three pillars. One trusted partner.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-muted-foreground max-w-md text-lg">
              From utility-scale solar to intelligent home automation, we deliver complete, integrated
              solutions under one roof.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cats.map((c, i) => (
            <Reveal key={c.tag} delay={i * 120}>
              <Link
                to="/services"
                className="group block rounded-3xl bg-white p-8 lg:p-10 h-full transition-all hover:-translate-y-2 hover:shadow-2xl border border-border"
              >
                <div className="flex items-center justify-between mb-10">
                  <span
                    className="inline-flex items-center justify-center h-14 w-14 rounded-2xl"
                    style={{ backgroundColor: c.color + "22", color: c.color }}
                  >
                    <c.icon size={26} />
                  </span>
                  <span className="text-xs font-bold tracking-widest text-muted-foreground">{c.tag}</span>
                </div>
                <h3 className="font-display font-bold text-3xl lg:text-[32px] leading-tight">
                  {c.title}
                </h3>
                <ul className="mt-6 space-y-2.5 text-foreground/70">
                  {c.items.map((it) => (
                    <li key={it} className="flex items-center gap-2.5 text-[15px]">
                      <span className="h-1 w-1 rounded-full bg-foreground/40" />
                      {it}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all">
                  Explore <ArrowRight size={16} />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FEATURED SERVICES ---------------- */
function FeaturedServices() {
  const services = [
    {
      eyebrow: "01 · Solar Energy",
      title: "Solar energy solutions for every scale.",
      body: "Hybrid, grid-tied and off-grid systems engineered for residential, commercial and industrial environments. Built to deliver decades of reliable, low-cost power.",
      bullets: ["Hybrid · Grid-Tied · Off-Grid", "Residential · Commercial · Industrial", "Performance monitoring included"],
      image: solarHomeImg,
      cta: "Explore Solar Solutions",
    },
    {
      eyebrow: "02 · Lithium Storage",
      title: "Lithium battery storage that lasts.",
      body: "Modular lithium systems with intelligent BMS, scalable from a single home to multi-megawatt commercial deployments.",
      bullets: ["Long cycle life", "Fast charging", "High efficiency", "Minimal maintenance"],
      image: batteryImg,
      cta: "View Storage Systems",
    },
    {
      eyebrow: "03 · Portable Generators",
      title: "Portable solar generators — 300W to 5000W.",
      body: "Silent, fume-free portable power for homes, fieldwork, events and off-grid sites. A complete lineup from 300W up to 5000W.",
      bullets: ["300W · 500W · 800W · 1200W", "1500W · 2500W · 3500W · 5000W"],
      image: inverterImg,
      cta: "See the Lineup",
    },
    {
      eyebrow: "04 · CCTV & Security",
      title: "Modern security, remotely monitored.",
      body: "IP cameras, access control and intelligent video monitoring engineered for estates, factories, schools and commercial facilities.",
      bullets: ["4K IP surveillance", "Cloud + on-prem recording", "Remote mobile monitoring"],
      image: cctvImg,
      cta: "Discover Security",
    },
    {
      eyebrow: "05 · Smart Automation",
      title: "Intelligent buildings that respond to you.",
      body: "Lighting, climate, energy and security — unified into a single intuitive control layer for homes and commercial spaces.",
      bullets: ["Lighting & climate control", "Energy monitoring", "Voice & app control"],
      image: smartHomeImg,
      cta: "Explore Automation",
    },
    {
      eyebrow: "06 · Training Academy",
      title: "Hands-on engineering training.",
      body: "Practical training in solar installation, battery technology and inverter systems — preparing the next generation of energy engineers.",
      bullets: ["Solar installation", "Battery technology", "Inverter systems"],
      image: trainingImg,
      cta: "Enrol at Academy",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container-x">
        <div className="max-w-3xl mb-20">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: "var(--emerald)" }}>
              Featured Services
            </span>
            <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Complete capabilities, delivered with engineering precision.
            </h2>
          </Reveal>
        </div>

        <div className="space-y-24 lg:space-y-32">
          {services.map((s, i) => {
            const reverse = i % 2 === 1;
            return (
              <div key={s.eyebrow} className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                <Reveal className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}>
                  <div className="overflow-hidden rounded-3xl">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      width={1280}
                      height={960}
                      className="w-full h-[420px] lg:h-[520px] object-cover transition-transform duration-[1.2s] hover:scale-105"
                    />
                  </div>
                </Reveal>
                <Reveal delay={150} className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}>
                  <span className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground">
                    {s.eyebrow}
                  </span>
                  <h3 className="mt-4 font-display font-bold text-3xl md:text-4xl lg:text-[40px] leading-[1.1]">
                    {s.title}
                  </h3>
                  <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{s.body}</p>
                  <ul className="mt-7 space-y-2.5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-foreground/80">
                        <span
                          className="mt-2 h-1.5 w-1.5 rounded-full shrink-0"
                          style={{ background: "var(--solar)" }}
                        />
                        <span className="text-[15px]">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/services"
                    className="mt-9 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all hover:gap-3"
                    style={{ backgroundColor: "var(--navy)", color: "white" }}
                  >
                    {s.cta} <ArrowRight size={16} />
                  </Link>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY CHOOSE US ---------------- */
function WhyChooseUs() {
  const items = [
    { icon: Award, title: "Professional Expertise", desc: "Certified engineers with deep field experience." },
    { icon: Sparkles, title: "Quality Products", desc: "Tier-1 manufacturers and rigorously tested components." },
    { icon: Lightbulb, title: "Innovative Solutions", desc: "Custom-engineered systems for every site and load profile." },
    { icon: CheckCircle2, title: "Customer Satisfaction", desc: "A track record of long-term partnerships and referrals." },
    { icon: Headphones, title: "Reliable Support", desc: "24/7 monitoring, scheduled maintenance and rapid response." },
    { icon: MapPin, title: "Nationwide Coverage", desc: "Project delivery and service teams across Nigeria." },
  ];

  return (
    <section className="py-24 lg:py-32 bg-[var(--surface)]">
      <div className="container-x">
        <div className="max-w-3xl mb-16">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: "var(--emerald)" }}>
              Why Choose PEC
            </span>
            <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Built on trust. Backed by engineering.
            </h2>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 80}>
              <div className="group rounded-2xl bg-white p-8 lg:p-10 h-full border border-border hover:border-foreground/20 transition-all hover:-translate-y-1 hover:shadow-lg">
                <span
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "var(--navy)", color: "var(--solar)" }}
                >
                  <it.icon size={22} />
                </span>
                <h3 className="mt-7 font-display font-semibold text-2xl">{it.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- INDUSTRIES ---------------- */
function Industries() {
  const inds = [
    { icon: Home, label: "Homes" },
    { icon: Building2, label: "Businesses" },
    { icon: Factory, label: "Factories" },
    { icon: Hotel, label: "Hotels" },
    { icon: School, label: "Schools" },
    { icon: HeartPulse, label: "Hospitals" },
    { icon: Church, label: "Religious Centres" },
    { icon: Building2, label: "Estates" },
    { icon: Tractor, label: "Agriculture" },
    { icon: Building2, label: "Commercial Facilities" },
  ];
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-14">
          <Reveal className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: "var(--emerald)" }}>
              Industries We Serve
            </span>
            <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Powering every corner of the economy.
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5">
            <p className="text-muted-foreground text-lg">
              From private residences to hospitals, schools and commercial estates — we engineer
              systems that match each environment's load, scale and uptime requirements.
            </p>
          </Reveal>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {inds.map((i, idx) => (
            <Reveal key={i.label} delay={idx * 40}>
              <div className="rounded-2xl bg-[var(--surface)] aspect-square flex flex-col items-center justify-center text-center p-4 hover:bg-[var(--navy)] hover:text-white transition-colors group">
                <i.icon size={28} className="text-foreground/60 group-hover:text-[var(--solar)] transition-colors" />
                <span className="mt-4 text-sm font-medium">{i.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROCESS ---------------- */
function Process() {
  const steps = [
    { n: "01", title: "Consultation", desc: "We listen, understand your load profile and define success." },
    { n: "02", title: "Site Assessment", desc: "On-site audit, irradiance, structural and electrical analysis." },
    { n: "03", title: "System Design", desc: "Engineered single-line drawings, BOM and performance modelling." },
    { n: "04", title: "Installation", desc: "Certified crews deploy with safety-first execution and quality control." },
    { n: "05", title: "Testing", desc: "Commissioning, performance verification and documentation." },
    { n: "06", title: "Support", desc: "Ongoing monitoring, maintenance and operator training." },
  ];
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "var(--navy)" }}>
      <div className="container-x text-white">
        <div className="max-w-3xl mb-16">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: "var(--solar)" }}>
              Our Process
            </span>
            <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Six steps from idea to switched-on.
            </h2>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-3xl overflow-hidden">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <div className="bg-[var(--navy)] p-8 lg:p-10 h-full">
                <div
                  className="font-display font-bold text-5xl"
                  style={{ color: "var(--solar)" }}
                >
                  {s.n}
                </div>
                <h3 className="mt-6 font-display font-semibold text-2xl">{s.title}</h3>
                <p className="mt-3 text-white/65 leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROJECTS SHOWCASE ---------------- */
function ProjectsShowcase() {
  const filters = ["All", "Residential", "Commercial", "Industrial", "Solar", "Security", "Automation"];
  const projects = [
    { title: "Lekki Estate Hybrid Solar", tag: "Residential · Solar", img: solarHomeImg },
    { title: "Ikeja Factory PV Plant", tag: "Industrial · Solar", img: heroImg },
    { title: "Abuja Office Smart Building", tag: "Commercial · Automation", img: smartHomeImg },
    { title: "Lagos Mall Surveillance Grid", tag: "Commercial · Security", img: cctvImg },
    { title: "Port Harcourt BESS Site", tag: "Industrial · Storage", img: batteryImg },
    { title: "Kano Inverter Room Upgrade", tag: "Industrial · Power", img: inverterImg },
  ];
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-12">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: "var(--emerald)" }}>
              Projects
            </span>
            <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl lg:text-6xl max-w-2xl leading-[1.05]">
              Selected work across Nigeria.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap gap-2">
              {filters.map((f, i) => (
                <button
                  key={f}
                  className={`rounded-full px-4 py-2 text-xs font-semibold border transition-colors ${
                    i === 0
                      ? "bg-foreground text-background border-foreground"
                      : "border-border hover:border-foreground/40"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <Link to="/projects" className="group block rounded-2xl overflow-hidden bg-[var(--surface)]">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{p.tag}</div>
                  <h3 className="mt-2 font-display font-semibold text-xl">{p.title}</h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- STATS ---------------- */
function Stats() {
  return (
    <section
      className="py-24 lg:py-32"
      style={{
        background:
          "linear-gradient(135deg, var(--navy-deep), var(--navy))",
      }}
    >
      <div className="container-x grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-white">
        {[
          { value: 500, suffix: "+", label: "Solar Installations" },
          { value: 100, suffix: "%", label: "Customer Satisfaction" },
          { value: 24, suffix: "/7", label: "Technical Support" },
          { text: "Nationwide", label: "Coverage" },
        ].map((s, i) => (
          <Reveal key={s.label} delay={i * 100}>
            <div>
              <div className="font-display font-bold text-5xl lg:text-7xl" style={{ color: "var(--solar)" }}>
                {"value" in s ? <Counter end={s.value as number} suffix={s.suffix as string} /> : (s as any).text}
              </div>
              <div className="mt-4 text-sm uppercase tracking-[0.2em] text-white/60">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const testimonials = [
    {
      quote:
        "PEC designed and deployed a 250kW hybrid solar system across our facility. The result: 60% lower diesel spend within the first quarter.",
      name: "Adaeze Okafor",
      role: "Operations Director, Lagos Manufacturing",
    },
    {
      quote:
        "Their engineering team is precise, transparent and reliable. From audit to commissioning, every step was on schedule.",
      name: "Engr. Tunde Balogun",
      role: "Estate Manager, Lekki Residences",
    },
    {
      quote:
        "We unified security and energy monitoring into one platform thanks to PEC. Our control room visibility has never been better.",
      name: "Dr. Fatima Bello",
      role: "Facility Director, Northern General Hospital",
    },
  ];
  return (
    <section className="py-24 lg:py-32 bg-[var(--surface)]">
      <div className="container-x">
        <div className="max-w-3xl mb-16">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: "var(--emerald)" }}>
              Testimonials
            </span>
            <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Trusted by the people we power.
            </h2>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="bg-white rounded-2xl p-8 lg:p-10 h-full border border-border">
                <Quote size={28} style={{ color: "var(--solar)" }} />
                <blockquote className="mt-6 text-foreground/85 text-lg leading-relaxed">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3">
                  <span
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full font-display font-semibold"
                    style={{ backgroundColor: "var(--navy)", color: "white" }}
                  >
                    {t.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </span>
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- MISSION / VISION ---------------- */
function MissionVision() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container-x grid lg:grid-cols-2 gap-10">
        <Reveal>
          <div className="rounded-3xl p-10 lg:p-14 h-full" style={{ backgroundColor: "var(--navy)", color: "white" }}>
            <span className="text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: "var(--solar)" }}>
              Our Mission
            </span>
            <h3 className="mt-5 font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-[1.1]">
              Deliver reliable, clean and intelligent energy systems that empower
              Nigeria's homes, businesses and industries.
            </h3>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="rounded-3xl p-10 lg:p-14 h-full bg-[var(--surface)]">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: "var(--emerald)" }}>
              Our Vision
            </span>
            <h3 className="mt-5 font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-[1.1]">
              To be Africa's most trusted engineering partner for renewable
              energy and smart-building technology.
            </h3>
          </div>
        </Reveal>

        <Reveal delay={200} className="lg:col-span-2">
          <div className="mt-10">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: "var(--emerald)" }}>
              Core Values
            </span>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
              {["Excellence", "Innovation", "Integrity", "Professionalism", "Reliability", "Customer Satisfaction", "Sustainability"].map(
                (v) => (
                  <div
                    key={v}
                    className="rounded-xl border border-border px-4 py-5 text-center text-sm font-semibold hover:bg-foreground hover:text-background transition-colors"
                  >
                    {v}
                  </div>
                ),
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- CTA BANNER ---------------- */
function CTABanner() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: "var(--navy-deep)" }}>
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(60% 60% at 80% 20%, color-mix(in oklab, var(--solar) 50%, transparent), transparent), radial-gradient(50% 50% at 10% 80%, color-mix(in oklab, var(--emerald) 40%, transparent), transparent)",
        }}
      />
      <div className="container-x relative text-white text-center max-w-4xl">
        <Reveal>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-7xl leading-[1.05]">
            Ready to switch to <span style={{ color: "var(--solar)" }}>reliable energy</span>?
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Get a professional assessment for your home or business today — and discover what
            engineered renewable energy looks like.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold"
              style={{ backgroundColor: "var(--solar)", color: "var(--navy)" }}
            >
              Book Consultation <ArrowRight size={16} />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold border border-white/25 text-white hover:bg-white/10 transition"
            >
              View Our Projects
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
