import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Zap,
  ShieldCheck,
  Cpu,
  Target,
  Eye,
  Award,
  Headphones,
  MapPin,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  Quote,
  Sun,
} from "lucide-react";
import { SiteNav, SiteFooter } from "@/components/site-chrome";
import { Counter, Reveal, Eyebrow, PulseDot, Tilt, Parallax } from "@/components/motion-primitives";
import heroImg from "@/assets/hero-showroom.jpg";
import batteryImg from "@/assets/battery.jpg";
import solarHomeImg from "@/assets/solar-home.jpg";
import cctvImg from "@/assets/cctv.jpg";
import smartHomeImg from "@/assets/smart-home.jpg";
import inverterImg from "@/assets/inverter.jpg";
import gen800 from "@/assets/gen-800w.jpg";
import gen1200 from "@/assets/gen-1200w.jpg";
import gen1500 from "@/assets/gen-1500w.jpg";
import gen2800 from "@/assets/gen-2800w.jpg";
import gen4000 from "@/assets/gen-4000w.jpg";
import gen6000 from "@/assets/gen-6000w.jpg";
import gen8000 from "@/assets/gen-8000w.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prodigy Exclusive Company — Driven by Innovation, Defined by Excellence" },
      {
        name: "description",
        content:
          "Design, supply, installation, maintenance and training of solar energy systems, lithium storage, inverters, security and smart automation for homes, businesses and industries.",
      },
      { property: "og:title", content: "Prodigy Exclusive Company — Renewable Energy & Technology" },
      { property: "og:description", content: "Empowering homes, businesses, industries and communities with reliable renewable energy and technology solutions." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="bg-background">
      <SiteNav />
      <Hero />
      <MissionVision />
      <CorporateValues />
      <WhatWeDo />
      <ImpactNumbers />
      <PresenceMap />
      <FeaturedServices />
      <ProductGallery />
      <WhyChooseUs />
      <Process />
      <ProjectsShowcase />
      <Testimonials />
      <CTABanner />
      <SiteFooter />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  const divisions = [
    {
      icon: Zap,
      tag: "POWER",
      title: "Solar Energy & Storage",
      body: "Solar energy solutions, inverters, lithium batteries, portable solar generators, and solar gadgets & appliances.",
    },
    {
      icon: ShieldCheck,
      tag: "SECURE",
      title: "CCTV & Security",
      body: "CCTV surveillance systems, security solutions, access control systems, and remote monitoring.",
    },
    {
      icon: Cpu,
      tag: "AUTOMATE",
      title: "Smart Home & Automation",
      body: "Smart home solutions, automation systems, and energy management technologies.",
    },
  ];

  return (
    <section className="relative">
      <div className="relative min-h-[100svh] flex items-center pt-24 overflow-hidden">
        <Parallax speed={0.25} className="absolute inset-0">
          <img
            src={heroImg}
            alt="PEC showroom stocked with solar generators, solar lights and energy storage systems"
            className="absolute inset-0 h-[115%] w-full object-cover object-center"
            width={1920}
            height={1280}
          />
        </Parallax>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, color-mix(in oklab, var(--navy-deep) 92%, transparent) 0%, color-mix(in oklab, var(--navy-deep) 78%, transparent) 45%, color-mix(in oklab, var(--navy-deep) 30%, transparent) 100%)",
          }}
        />
        <div className="container-x relative z-10 pt-8 sm:pt-12 pb-36 sm:pb-48 lg:pb-64">
          <div className="max-w-3xl text-white">
            <Eyebrow color="var(--leaf-bright)">Driven by Innovation, Defined by Excellence</Eyebrow>
            <Reveal delay={120}>
              <h1 className="mt-6 sm:mt-7 font-display font-bold leading-[0.98] tracking-tight text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem]">
                Prodigy Exclusive
                <br />
                <span style={{ color: "var(--leaf-bright)" }}>Company</span>
              </h1>
            </Reveal>
            <Reveal delay={260}>
              <p className="mt-6 sm:mt-8 max-w-xl text-base sm:text-lg md:text-xl text-white/75 leading-relaxed">
                A leading renewable energy and technology solutions company committed to providing
                reliable, sustainable, and cost-effective power for homes, businesses, industries,
                schools, hospitals, estates, and commercial facilities.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[var(--navy)] transition-transform hover:-translate-y-0.5"
                >
                  Explore Our Services <ArrowRight size={16} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold border border-white/30 text-white hover:bg-white/10 transition"
                >
                  Get a Free Consultation
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1.5" style={{ background: "var(--leaf)" }} />
      </div>

      {/* Floating division cards bridging hero + next section */}
      <div className="diag-arrows bg-[var(--surface)]">
        <div className="container-x relative -mt-24 sm:-mt-36 lg:-mt-52 pb-16 sm:pb-20 lg:pb-32 z-20">
          <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
            {divisions.map((d, i) => (
              <Reveal key={d.title} delay={i * 140} className="h-full">
                <div className="h-full float-slow" style={{ animationDelay: `${i * 0.8}s` }}>
                  <Tilt className="h-full">
                  <div className="card-3d-strong relative overflow-hidden rounded-3xl p-8 lg:p-10 h-full text-white" style={{ backgroundColor: "var(--navy)", transformStyle: "preserve-3d" }}>
                    <span className="absolute top-0 left-8 right-8 h-1 rounded-b" style={{ background: "var(--leaf)" }} />
                    <span className="text-[10px] font-bold tracking-[0.25em] text-white/50">{d.tag}</span>
                    <span
                      className="pop-z inline-flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{ backgroundColor: "color-mix(in oklab, var(--leaf) 22%, transparent)", color: "var(--leaf-bright)" }}
                    >
                      <d.icon size={24} />
                    </span>
                    <h3 className="pop-z-sm mt-6 font-display font-bold text-2xl lg:text-[26px] leading-tight">{d.title}</h3>
                    <p className="mt-4 text-white/70 leading-relaxed">{d.body}</p>
                    <Link
                      to="/services"
                      className="pop-z-sm mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[var(--navy)] transition-all hover:gap-3"
                    >
                      Know More <ArrowRight size={15} />
                    </Link>
                  </div>
                  </Tilt>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- MISSION / VISION ---------------- */
function MissionVision() {
  const cards = [
    {
      icon: Target,
      title: "Our Mission",
      body: "To provide innovative, reliable, and sustainable energy and technology solutions that improve lives, empower businesses, and contribute to a cleaner and more energy-independent future.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      body: "To become Africa's leading renewable energy and technology solutions provider, recognized for excellence, innovation, integrity, and customer satisfaction.",
    },
  ];
  return (
    <section className="py-16 lg:py-24 bg-[var(--surface)]">
      <div className="container-x">
        <div className="text-center mb-12 sm:mb-16">
          <Eyebrow align="center">Our Purpose</Eyebrow>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[var(--navy)]">
              Mission &amp; Vision
            </h2>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-2 gap-10 lg:gap-20 max-w-5xl mx-auto">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 140}>
              <div className="flex gap-6">
                <span
                  className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "var(--leaf)", color: "white" }}
                >
                  <c.icon size={28} />
                </span>
                <div>
                  <h3 className="font-display font-bold text-2xl" style={{ color: "var(--brick)" }}>
                    {c.title}
                  </h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{c.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CORPORATE VALUES ---------------- */
function CorporateValues() {
  const values = ["Excellence", "Innovation", "Integrity", "Professionalism", "Reliability", "Customer Satisfaction", "Sustainability"];
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container-x text-center">
        <Eyebrow align="center">What We Stand For</Eyebrow>
        <Reveal delay={100}>
          <h2 className="mt-5 font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[var(--navy)]">
            Our Corporate Values
          </h2>
        </Reveal>
        <div className="mt-10 sm:mt-16 flex flex-wrap justify-center gap-x-6 gap-y-6 sm:gap-x-10 sm:gap-y-10 lg:gap-x-16">
          {values.map((v, i) => (
            <Reveal key={v} delay={i * 70}>
              <div className="group relative pb-3">
                <span className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--navy)]">
                  <span style={{ color: "var(--brick)" }}>{v[0]}</span>
                  <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">{v.slice(1)}</span>
                </span>
                <span
                  className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  style={{ background: "var(--brick)" }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHAT WE DO ---------------- */
function WhatWeDo() {
  const cats = [
    {
      icon: Zap,
      tag: "POWER",
      title: "Power & Energy",
      items: ["Solar Energy Solutions", "Inverters", "Lithium Batteries", "Solar Generators", "Solar Gadgets & Appliances"],
    },
    {
      icon: ShieldCheck,
      tag: "SECURE",
      title: "Security & Surveillance",
      items: ["CCTV Surveillance Systems", "Security Solutions", "Access Control Systems"],
    },
    {
      icon: Cpu,
      tag: "AUTOMATE",
      title: "Smart Automation",
      items: ["Smart Home Solutions", "Automation Systems", "Energy Management Technologies"],
    },
  ];
  return (
    <section className="py-16 lg:py-24 bg-[var(--surface)]">
      <div className="container-x">
        <div className="mb-10 sm:mb-16">
          <Eyebrow>What We Do</Eyebrow>
          <Reveal>
            <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-2xl leading-[1.05] text-[var(--navy)]">
              Three pillars. One trusted partner.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-4 text-muted-foreground max-w-md text-base sm:text-lg">
              We specialize in the design, supply, installation, maintenance, and training of advanced
              solar energy systems — helping clients achieve energy independence.
            </p>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cats.map((c, i) => (
            <Reveal key={c.title} delay={i * 120} className="h-full">
              <Tilt className="h-full">
                <Link
                  to="/services"
                  className="group block rounded-3xl bg-white p-8 lg:p-10 h-full border border-border transition-shadow hover:card-3d"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <span className="text-[10px] font-bold tracking-[0.25em] mb-2 block" style={{ color: "var(--leaf)" }}>{c.tag}</span>
                  <span
                    className="pop-z inline-flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: "color-mix(in oklab, var(--leaf) 16%, transparent)", color: "var(--leaf)" }}
                  >
                    <c.icon size={26} />
                  </span>
                  <h3 className="pop-z-sm mt-8 font-display font-bold text-2xl lg:text-3xl text-[var(--navy)]">{c.title}</h3>
                  <ul className="mt-6 space-y-2.5 text-foreground/70">
                    {c.items.map((it) => (
                      <li key={it} className="flex items-center gap-2.5 text-[15px]">
                        <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--leaf)" }} />
                        {it}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-[var(--leaf)] group-hover:gap-3 transition-all">
                    Explore <ArrowRight size={16} />
                  </div>
                </Link>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- IMPACT IN NUMBERS ---------------- */
function ImpactNumbers() {
  const stats = [
    { value: 500, suffix: "+", label: "Solar Installations" },
    { value: 100, suffix: "+", label: "Projects Delivered" },
    { value: 20, suffix: "+", label: "Field Engineers" },
    { value: 24, suffix: "/7", label: "Technical Support" },
  ];
  return (
    <section className="relative overflow-hidden py-16 lg:py-24" style={{ backgroundColor: "var(--navy)" }}>
      <div className="pinstripe absolute inset-0" aria-hidden />
      <div className="container-x relative">
        <div className="text-center mb-10 sm:mb-16">
          <Eyebrow align="center" color="var(--leaf-bright)">Our Impact in Numbers</Eyebrow>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
              Our Impact in Numbers
            </h2>
          </Reveal>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div>
                <div className="text-sm font-semibold text-white/70">{s.label}</div>
                <div className="mt-2 h-0.5 w-16" style={{ background: "var(--leaf)" }} />
                <div className="mt-4 font-serif font-bold text-5xl sm:text-6xl lg:text-7xl" style={{ color: "var(--brick)" }}>
                  <Counter end={s.value} suffix={s.suffix} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PRESENCE MAP ---------------- */
const NIGERIA_PATH =
  "M489.6 835.6 L409.3 863.8 L379.9 859.7 L350.1 877.2 L288.2 875.5 L246.8 826.5 L221.3 769.7 L166.5 718.1 L108.3 719.1 L40.0 719.0 L44.4 592.7 L42.5 542.8 L57.1 493.4 L80.9 469.4 L118.5 420.8 L110.3 399.8 L125.6 368.2 L108.2 321.7 L111.2 295.7 L116.5 225.7 L138.7 194.1 L149.6 149.0 L169.8 132.1 L253.0 122.8 L330.6 152.0 L359.6 181.6 L399.1 183.0 L435.8 163.7 L529.5 204.2 L568.9 202.3 L614.6 168.9 L660.0 171.3 L682.3 160.3 L724.0 164.9 L783.9 187.7 L844.4 143.9 L862.6 147.0 L915.0 232.9 L929.4 231.1 L960.0 262.3 L951.6 276.5 L947.5 302.5 L882.3 363.2 L861.8 413.2 L850.9 454.0 L834.5 471.4 L818.9 526.3 L777.5 558.6 L765.5 598.2 L748.1 629.8 L740.8 662.4 L687.7 688.8 L644.2 656.6 L614.9 657.9 L568.8 703.8 L546.3 704.5 L509.5 780.1 L489.6 835.6 Z";

function PresenceMap() {
  const markers = [
    { name: "Kano", x: 49.1, y: 26.9, label: true },
    { name: "Kaduna", x: 40.7, y: 38.5 },
    { name: "Abuja", x: 41.2, y: 50.0, capital: true, label: true },
    { name: "Ibadan", x: 13.7, y: 63.1 },
    { name: "Lagos", x: 9.3, y: 69.8, label: true },
    { name: "Benin City", x: 26.5, y: 71.3 },
    { name: "Enugu", x: 41.3, y: 70.5 },
    { name: "Port Harcourt", x: 37.7, y: 83.2, label: true },
    { name: "Uyo", x: 44.6, y: 81.5 },
    { name: "Calabar", x: 47.6, y: 82.0 },
  ];
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container-x grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        <div>
          <Eyebrow>Delivering Sustainable Energy</Eyebrow>
          <Reveal>
            <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[var(--navy)]">
              Our presence across Nigeria
            </h2>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
              We provide services across Nigeria and beyond — delivering dependable energy and
              technology solutions where they are needed most.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our commitment to quality, innovation, professionalism, and customer satisfaction has
              made us a trusted partner for individuals, businesses, and organizations nationwide.
            </p>
            <div className="mt-8">
              <div className="text-sm font-bold uppercase tracking-wider" style={{ color: "var(--brick)" }}>
                Active Regions
              </div>
              <p className="mt-3 text-foreground/75">
                Lagos · Abuja · Port Harcourt · Kano · Ibadan · Enugu · Benin City · Kaduna · Calabar ·
                Uyo
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div
            className="relative aspect-square w-full overflow-hidden rounded-3xl border border-border"
            style={{ backgroundColor: "var(--surface)" }}
          >
            <div
              className="absolute inset-0 opacity-50"
              style={{
                backgroundImage:
                  "radial-gradient(color-mix(in oklab, var(--navy) 14%, transparent) 1.2px, transparent 1.2px)",
                backgroundSize: "22px 22px",
              }}
              aria-hidden
            />

            {/* Nigeria outline */}
            <svg
              viewBox="0 0 1000 1000"
              className="absolute inset-0 h-full w-full"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden
            >
              <defs>
                <linearGradient id="ng-fill" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="var(--navy)" stopOpacity={0.16} />
                  <stop offset="100%" stopColor="var(--leaf)" stopOpacity={0.2} />
                </linearGradient>
              </defs>
              <path
                d={NIGERIA_PATH}
                fill="url(#ng-fill)"
                stroke="var(--navy)"
                strokeOpacity={0.55}
                strokeWidth={3}
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {/* City markers */}
            {markers.map((m) => (
              <PulseDot
                key={m.name}
                style={{ left: `${m.x}%`, top: `${m.y}%` }}
                size={m.capital ? 14 : 10}
                color={m.capital ? "var(--leaf)" : "var(--leaf-bright)"}
              />
            ))}

            {/* Major-city labels */}
            {markers
              .filter((m) => m.label)
              .map((m) => (
                <span
                  key={`${m.name}-label`}
                  className="absolute -translate-x-1/2 whitespace-nowrap text-[10px] sm:text-xs font-semibold text-[var(--navy)]"
                  style={{ left: `${m.x}%`, top: `calc(${m.y}% + ${m.capital ? 14 : 10}px)` }}
                >
                  {m.name}
                </span>
              ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- FEATURED SERVICES ---------------- */
function FeaturedServices() {
  const services = [
    {
      eyebrow: "01 · Solar Energy",
      title: "Complete solar power solutions for every scale.",
      body: "We provide hybrid, off-grid, and grid-tied solar systems — from residential installations to commercial and industrial deployments, plus solar pumping, street lights, flood lights, security lighting, and electric fence systems.",
      bullets: ["Hybrid · Off-Grid · Grid-Tied", "Residential · Commercial · Industrial", "Solar backup, pumping & lighting"],
      image: solarHomeImg,
      cta: "Explore Solar Solutions",
    },
    {
      eyebrow: "02 · Lithium Storage",
      title: "Advanced lithium battery storage systems.",
      body: "We supply and install lithium battery storage for homes, offices, hotels, hospitals, schools, factories, and commercial buildings — delivering longer battery life, faster charging, and minimal maintenance.",
      bullets: ["Longer battery life", "Faster charging", "Deep cycle performance", "Improved energy efficiency"],
      image: batteryImg,
      cta: "View Storage Systems",
    },
    {
      eyebrow: "03 · CCTV & Security",
      title: "Modern security for homes and facilities.",
      body: "CCTV camera installation, wireless security cameras, remote monitoring, access control, video doorbells, and surveillance solutions for homes, businesses, schools, estates, and industrial facilities.",
      bullets: ["CCTV & wireless cameras", "Remote monitoring", "Access control & video doorbells"],
      image: cctvImg,
      cta: "Discover Security",
    },
    {
      eyebrow: "04 · Smart Automation",
      title: "Smart home and automation solutions.",
      body: "We help clients automate and secure their properties with smart lighting, remote device control, automated security, energy monitoring, and smart access control.",
      bullets: ["Smart home automation", "Energy monitoring", "Automated security systems"],
      image: smartHomeImg,
      cta: "Explore Automation",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[var(--surface)]">
      <div className="container-x">
        <div className="max-w-3xl mb-12 sm:mb-20">
          <Eyebrow>Featured Services</Eyebrow>
          <Reveal>
            <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[var(--navy)]">
              Complete capabilities, delivered with engineering precision.
            </h2>
          </Reveal>
        </div>

        <div className="space-y-16 sm:space-y-24 lg:space-y-32">
          {services.map((s, i) => {
            const reverse = i % 2 === 1;
            return (
              <div key={s.eyebrow} className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                <Reveal className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}>
                  <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      width={1280}
                      height={960}
                      className="w-full h-[220px] sm:h-[320px] lg:h-[520px] object-cover transition-transform duration-[1.2s] hover:scale-105"
                    />
                  </div>
                </Reveal>
                <Reveal delay={150} className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}>
                  <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: "var(--leaf)" }}>
                    {s.eyebrow}
                  </span>
                  <h3 className="mt-4 font-display font-bold text-3xl md:text-4xl lg:text-[40px] leading-[1.1] text-[var(--navy)]">
                    {s.title}
                  </h3>
                  <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{s.body}</p>
                  <ul className="mt-7 space-y-2.5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-foreground/80">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: "var(--leaf)" }} />
                        <span className="text-[15px]">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/services"
                    className="mt-9 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all hover:gap-3"
                    style={{ backgroundColor: "var(--leaf)", color: "white" }}
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

/* ---------------- PRODUCT GALLERY ---------------- */
function ProductGallery() {
  const products = [
    { watt: "800W",  img: gen800,  panels: 1, desc: "Ideal for home essentials, small offices, and light-duty backup." },
    { watt: "1200W", img: gen1200, panels: 2, desc: "Powers lights, fans, TVs, and basic appliances with ease." },
    { watt: "1500W", img: gen1500, panels: 3, desc: "Reliable backup for medium households and small businesses." },
    { watt: "2800W", img: gen2800, panels: 4, desc: "Heavy-duty home and commercial backup with extended run time." },
    { watt: "4000W", img: gen4000, panels: 5, desc: "Full home coverage — runs ACs, fridges, and office equipment." },
    { watt: "6000W", img: gen6000, panels: 6, desc: "Industrial-grade output for factories, clinics, and estates." },
    { watt: "8000W", img: gen8000, panels: 8, desc: "Maximum capacity for large commercial and industrial loads." },
  ];

  return (
    <section className="py-16 lg:py-24 overflow-hidden" style={{ background: "var(--navy)" }}>
      <div className="container-x mb-10 sm:mb-14">
        <Eyebrow color="oklch(1 0 0 / 0.7)">Our Products</Eyebrow>
        <Reveal>
          <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-white">
            PEC Portable Solar Generators
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/70 leading-relaxed">
            Engineered and manufactured in-house — available in 7 capacities from 800W to 8000W.
            Each unit ships with matching solar panels and is ready to power homes, offices, and outdoor events.
          </p>
        </Reveal>
      </div>

      {/* Scrollable card rail */}
      <div className="relative">
        {/* Fade masks at edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 z-10"
          style={{ background: `linear-gradient(to right, var(--navy), transparent)` }} />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 z-10"
          style={{ background: `linear-gradient(to left, var(--navy), transparent)` }} />

        <div className="flex gap-5 overflow-x-auto pb-6 px-6 sm:px-[calc((100vw-1280px)/2+2.5rem)] snap-x snap-mandatory scrollbar-none"
          style={{ scrollbarWidth: "none" }}>
          {products.map((p, i) => (
            <Reveal key={p.watt} delay={i * 60} className="shrink-0">
              <Tilt className="h-full" max={6}>
                <div
                  className="card-3d group relative flex flex-col w-[260px] sm:w-[280px] rounded-2xl overflow-hidden bg-white shadow-xl snap-start"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Product image */}
                  <div className="relative overflow-hidden" style={{ background: "oklch(0.97 0.005 85)" }}>
                    <img
                      src={p.img}
                      alt={`PEC ${p.watt} Solar Generator`}
                      width={560}
                      height={560}
                      loading="lazy"
                      className="w-full aspect-square object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Wattage badge */}
                    <span
                      className="absolute top-3 right-3 rounded-full px-3 py-1 text-[11px] font-bold tracking-widest uppercase text-white"
                      style={{ backgroundColor: "var(--leaf)" }}
                    >
                      {p.watt}
                    </span>
                  </div>

                  {/* Card body */}
                  <div className="flex flex-col flex-1 p-5" style={{ transform: "translateZ(20px)" }}>
                    <div className="text-[10px] font-bold uppercase tracking-[0.25em] mb-1" style={{ color: "var(--leaf)" }}>
                      Solar Generator
                    </div>
                    <h3 className="font-display font-bold text-xl text-[var(--navy)]">
                      {p.watt} <span className="text-base font-semibold text-muted-foreground">capacity</span>
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{p.desc}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-foreground/60 font-medium">
                        {p.panels} solar panel{p.panels > 1 ? "s" : ""} included
                      </span>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-xs font-semibold text-white transition-transform hover:-translate-y-0.5"
                        style={{ backgroundColor: "var(--leaf)" }}
                      >
                        Enquire <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>

      {/* View all CTA */}
      <div className="container-x mt-8 text-center">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-80"
          style={{ color: "var(--leaf-bright)" }}
        >
          View all solar generator models <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  );
}

/* ---------------- WHY CHOOSE US ---------------- */
function WhyChooseUs() {
  const items = [
    { icon: Award, title: "Professional Expertise", desc: "Our team consists of trained professionals with extensive experience in renewable energy and technology solutions." },
    { icon: Sun, title: "Quality Products", desc: "We supply only reliable and tested products from trusted manufacturers." },
    { icon: CheckCircle2, title: "Customer Satisfaction", desc: "We prioritize customer satisfaction through excellent service delivery and after-sales support." },
    { icon: Lightbulb, title: "Innovative Solutions", desc: "We leverage modern technology to provide efficient and sustainable energy solutions." },
    { icon: Headphones, title: "Reliable Support", desc: "Our technical support team is always available to assist clients before, during, and after installation." },
    { icon: MapPin, title: "Nationwide Service Coverage", desc: "We provide services across Nigeria and beyond." },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container-x">
        <div className="max-w-3xl mb-10 sm:mb-16">
          <Eyebrow>Why Choose PEC</Eyebrow>
          <Reveal>
            <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[var(--navy)]">
              Built on trust. Backed by engineering.
            </h2>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 80} className="h-full">
              <Tilt className="h-full" max={7}>
                <div
                  className="group rounded-2xl bg-white p-8 lg:p-10 h-full border border-border transition-shadow hover:card-3d"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <span
                    className="pop-z inline-flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ backgroundColor: "var(--navy)", color: "var(--leaf-bright)" }}
                  >
                    <it.icon size={22} />
                  </span>
                  <h3 className="pop-z-sm mt-7 font-display font-semibold text-2xl text-[var(--navy)]">{it.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{it.desc}</p>
                </div>
              </Tilt>
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
    <section className="relative overflow-hidden py-16 lg:py-24" style={{ backgroundColor: "var(--navy-deep)" }}>
      <div className="pinstripe absolute inset-0" aria-hidden />
      <div className="container-x relative text-white">
        <div className="max-w-3xl mb-10 sm:mb-16">
          <Eyebrow color="var(--leaf-bright)">Our Process</Eyebrow>
          <Reveal>
            <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Six steps from idea to switched-on.
            </h2>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-2xl sm:rounded-3xl overflow-hidden">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <div className="bg-[var(--navy-deep)] p-6 sm:p-8 lg:p-10 h-full">
                <div className="font-serif font-bold text-4xl sm:text-5xl" style={{ color: "var(--brick)" }}>
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
    <section className="py-16 lg:py-24 bg-[var(--surface)]">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-10 mb-10 sm:mb-12">
          <Eyebrow>Latest Projects</Eyebrow>
          <Reveal>
            <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-2xl leading-[1.05] text-[var(--navy)]">
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
                      ? "text-white"
                      : "border-border hover:border-[var(--leaf)]"
                  }`}
                  style={i === 0 ? { backgroundColor: "var(--leaf)", borderColor: "var(--leaf)" } : {}}
                >
                  {f}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 80} className="h-full">
              <Tilt className="h-full" max={7}>
                <Link
                  to="/projects"
                  className="group block rounded-2xl overflow-hidden bg-white border border-border transition-shadow hover:card-3d"
                  style={{ transformStyle: "preserve-3d" }}
                >
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
                  <div className="p-6" style={{ transform: "translateZ(30px)" }}>
                    <div className="text-xs uppercase tracking-wider font-semibold" style={{ color: "var(--leaf)" }}>{p.tag}</div>
                    <h3 className="mt-2 font-display font-semibold text-xl text-[var(--navy)]">{p.title}</h3>
                  </div>
                </Link>
              </Tilt>
            </Reveal>
          ))}
        </div>
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
    <section className="py-16 lg:py-24 bg-background">
      <div className="container-x">
        <div className="max-w-3xl mb-10 sm:mb-16">
          <Eyebrow>Testimonials</Eyebrow>
          <Reveal>
            <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[var(--navy)]">
              Trusted by the people we power.
            </h2>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100} className="h-full">
              <Tilt className="h-full" max={6}>
                <figure
                  className="bg-white rounded-2xl p-8 lg:p-10 h-full border border-border transition-shadow hover:card-3d"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Quote size={28} style={{ color: "var(--leaf)", transform: "translateZ(30px)" }} />
                  <blockquote className="mt-6 text-foreground/85 text-lg leading-relaxed">"{t.quote}"</blockquote>
                  <figcaption className="mt-8 flex items-center gap-3" style={{ transform: "translateZ(20px)" }}>
                    <span
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full font-display font-semibold text-white"
                      style={{ backgroundColor: "var(--navy)" }}
                    >
                      {t.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                    </span>
                    <div>
                      <div className="font-semibold text-[var(--navy)]">{t.name}</div>
                      <div className="text-sm text-muted-foreground">{t.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA BANNER ---------------- */
function CTABanner() {
  return (
    <section className="relative py-16 lg:py-28 overflow-hidden" style={{ backgroundColor: "var(--navy)" }}>
      <div className="pinstripe absolute inset-0" aria-hidden />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(60% 60% at 80% 20%, color-mix(in oklab, var(--leaf) 45%, transparent), transparent), radial-gradient(50% 50% at 10% 80%, color-mix(in oklab, var(--leaf) 30%, transparent), transparent)",
        }}
      />
      <div className="container-x relative text-white text-center max-w-4xl">
        <Reveal>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-[1.05]">
            Ready to switch to <span style={{ color: "var(--leaf-bright)" }}>reliable energy</span>?
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Empowering homes, businesses, industries, and communities with reliable renewable energy
            and technology solutions.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold"
              style={{ backgroundColor: "var(--leaf)", color: "white" }}
            >
              Book Consultation <ArrowRight size={16} />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold border border-white/25 text-white hover:bg-white/10 transition"
            >
              View Our Projects
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
