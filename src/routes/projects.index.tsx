import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/page-shell";
import { Reveal } from "@/components/motion-primitives";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/projects-data";

export const Route = createFileRoute("/projects/")({
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
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <Link
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group rounded-2xl overflow-hidden bg-[var(--surface)] h-full block"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.cover} alt={p.title} loading="lazy" width={1280} height={960} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-7">
                  <div className="flex items-center justify-between text-xs uppercase tracking-wider font-semibold text-muted-foreground">
                    <span>{p.tag}</span>
                    <span style={{ color: "var(--navy)" }}>{p.scale}</span>
                  </div>
                  <h3 className="mt-3 font-display font-semibold text-xl">{p.title}</h3>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: "var(--navy)" }}>
                    View case study <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
