import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/page-shell";
import { Reveal, Eyebrow } from "@/components/motion-primitives";
import { Target, Eye } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Prodigy Exclusive Company" },
      {
        name: "description",
        content:
          "Prodigy Exclusive Company (PEC) is a leading renewable energy and technology solutions company providing reliable, sustainable power for homes, businesses, industries, and communities.",
      },
      { property: "og:title", content: "About — Prodigy Exclusive Company" },
      {
        property: "og:description",
        content: "Driven by Innovation, Defined by Excellence — empowering Nigeria with renewable energy and technology.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  "Excellence",
  "Innovation",
  "Integrity",
  "Professionalism",
  "Reliability",
  "Customer Satisfaction",
  "Sustainability",
];

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About PEC"
        title={
          <>
            Driven by Innovation,
            <br />
            Defined by Excellence.
          </>
        }
        intro="Prodigy Exclusive Company (PEC) is a leading renewable energy and technology solutions company committed to providing reliable, sustainable, and cost-effective power solutions for homes, businesses, industries, schools, hospitals, estates, and commercial facilities."
      />
      <section className="py-24 lg:py-32">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-6">
            <img
              src={aboutImg}
              alt="PEC team"
              loading="lazy"
              width={1280}
              height={1280}
              className="rounded-3xl w-full h-[520px] object-cover"
            />
          </Reveal>
          <Reveal delay={120} className="lg:col-span-6">
            <Eyebrow>Who We Are</Eyebrow>
            <h2 className="mt-5 font-display font-bold text-4xl lg:text-5xl leading-[1.1] text-[var(--navy)]">
              Your trusted energy and technology partner.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We specialize in the design, supply, installation, maintenance, and training of advanced
              solar energy systems, helping our clients achieve energy independence while reducing
              their dependence on the unstable power grid and expensive fuel generators.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our commitment to quality, innovation, professionalism, and customer satisfaction has
              made us a trusted partner for individuals, businesses, and organizations seeking
              dependable energy and technology solutions.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-[var(--surface)]">
        <div className="container-x">
          <div className="text-center mb-16">
              <Eyebrow align="center">Our Purpose</Eyebrow>
            <Reveal delay={100}>
              <h2 className="mt-5 font-display font-bold text-4xl md:text-5xl text-[var(--navy)]">
                Mission &amp; Vision
              </h2>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
            {[
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
            ].map((c, i) => (
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

      <section className="py-24 lg:py-32">
        <div className="container-x text-center">
          <Eyebrow align="center">What We Stand For</Eyebrow>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display font-bold text-4xl md:text-5xl text-[var(--navy)]">
              Our Core Values
            </h2>
          </Reveal>
          <div className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-10 lg:gap-x-16">
            {values.map((v, i) => (
              <Reveal key={v} delay={i * 70}>
                <div className="group relative pb-3">
                  <span className="font-serif text-3xl md:text-4xl font-bold text-[var(--navy)]">
                    <span style={{ color: "var(--brick)" }}>{v[0]}</span>
                    <span className="text-2xl md:text-3xl">{v.slice(1)}</span>
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
    </PageShell>
  );
}
