import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/page-shell";
import { Reveal } from "@/components/motion-primitives";
import trainingImg from "@/assets/training.jpg";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "Training Academy — Prodigy Exclusive Company" },
      { name: "description", content: "Hands-on solar installation, battery and inverter training from PEC's engineering academy." },
      { property: "og:title", content: "Training Academy — PEC" },
      { property: "og:description", content: "Practical training for the next generation of energy engineers." },
    ],
  }),
  component: TrainingPage,
});

function TrainingPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Training Academy"
        title={<>Hands-on engineering,<br />taught by engineers.</>}
        intro="A practical academy preparing the next generation of solar, battery and automation engineers — built around real-world systems and field experience."
      />
      <section className="py-24 lg:py-32">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-6">
            <img src={trainingImg} alt="Training" loading="lazy" width={1280} height={960} className="rounded-3xl w-full h-[520px] object-cover" />
          </Reveal>
          <Reveal delay={120} className="lg:col-span-6">
            <h2 className="font-display font-bold text-4xl lg:text-5xl leading-[1.1]">Curriculum & tracks</h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Choose from short-form intensives or our full certification programme. All courses are
              taught with real equipment in live training labs.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Solar installation fundamentals & advanced design",
                "Lithium battery technology and energy storage",
                "Hybrid and pure-sine inverter systems",
                "System commissioning & maintenance",
                "Site assessment, safety & compliance",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-foreground/85">
                  <CheckCircle2 className="mt-1 shrink-0" size={20} style={{ color: "var(--emerald)" }} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
