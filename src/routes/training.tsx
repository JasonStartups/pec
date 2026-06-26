import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/page-shell";
import { Reveal } from "@/components/motion-primitives";
import trainingImg from "@/assets/training.jpg";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { whatsappUrl } from "@/lib/contact";

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "Training Academy — Prodigy Exclusive Company" },
      {
        name: "description",
        content:
          "Solar installation, system design, inverter and lithium battery technology, troubleshooting, and renewable energy business development training.",
      },
      { property: "og:title", content: "Training Academy — PEC" },
      {
        property: "og:description",
        content: "Practical hands-on training for technicians, entrepreneurs, students, and professionals.",
      },
    ],
  }),
  component: TrainingPage,
});

const programs = [
  "Solar Installation Training",
  "Solar System Design",
  "Inverter Technology",
  "Lithium Battery Technology",
  "Solar Troubleshooting & Maintenance",
  "Renewable Energy Business Development",
  "Practical Hands-On Training",
];

function TrainingPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Solar Training & Technical Education"
        title={
          <>
            Empowering the next generation
            <br />
            of energy professionals.
          </>
        }
        intro="We are passionate about developing skilled professionals in the renewable energy sector. Our goal is to empower technicians, entrepreneurs, students, and professionals with industry-relevant knowledge and skills."
      />
      <section className="py-24 lg:py-32">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-6">
            <img
              src={trainingImg}
              alt="PEC training session"
              loading="lazy"
              width={1280}
              height={960}
              className="rounded-3xl w-full h-[520px] object-cover"
            />
          </Reveal>
          <Reveal delay={120} className="lg:col-span-6">
            <h2 className="font-display font-bold text-4xl lg:text-5xl leading-[1.1] text-[var(--navy)]">
              Training programs
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              All courses combine classroom instruction with practical hands-on training using real
              equipment — preparing you for careers in solar installation, system design, and
              renewable energy business development.
            </p>
            <ul className="mt-8 space-y-4">
              {programs.map((t) => (
                <li key={t} className="flex items-start gap-3 text-foreground/85">
                  <CheckCircle2 className="mt-1 shrink-0" size={20} style={{ color: "var(--leaf)" }} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <a
              href={whatsappUrl("Hello PEC, I would like to enquire about your solar training programs.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold"
              style={{ backgroundColor: "var(--leaf)", color: "white" }}
            >
              Enquire about training <ArrowRight size={16} />
            </a>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
