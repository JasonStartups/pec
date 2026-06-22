import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/page-shell";
import { SiteNav } from "@/components/site-chrome";
import { Reveal } from "@/components/motion-primitives";
import { ArrowRight, ArrowLeft, MapPin, Calendar, Gauge, Expand } from "lucide-react";
import { getProject, projects } from "@/lib/projects-data";
import { Lightbox } from "@/components/lightbox";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }): { project: import("@/lib/projects-data").Project } => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return { meta: [{ title: "Project — PEC" }] };
    return {
      meta: [
        { title: `${p.title} — PEC Projects` },
        { name: "description", content: p.summary },
        { property: "og:title", content: `${p.title} — PEC` },
        { property: "og:description", content: p.summary },
        { property: "og:image", content: p.cover },
        { name: "twitter:image", content: p.cover },
      ],
    };
  },
  notFoundComponent: () => (
    <PageShell>
      <div className="container-x py-40 text-center">
        <h1 className="font-display font-bold text-4xl">Project not found</h1>
        <Link to="/projects" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: "var(--navy)" }}>
          <ArrowLeft size={14} /> Back to projects
        </Link>
      </div>
    </PageShell>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const data = Route.useLoaderData() as { project: import("@/lib/projects-data").Project };
  const { project } = data;
  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const openLightbox = (i: number) => {
    setActive(i);
    setLightboxOpen(true);
  };
  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <div className="bg-background">
      <SiteNav transparentOnTop />

      {/* Hero */}
      <section
        className="relative pt-36 pb-20 lg:pt-44 lg:pb-28"
        style={{
          background:
            "linear-gradient(135deg, var(--navy-deep) 0%, var(--navy) 70%, color-mix(in oklab, var(--navy) 60%, var(--emerald)) 100%)",
        }}
      >
        <div className="container-x relative text-white">
          <Reveal>
            <Link to="/projects" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] font-semibold text-white/70 hover:text-white">
              <ArrowLeft size={14} /> All Projects
            </Link>
          </Reveal>
          <Reveal delay={100}>
            <span className="mt-6 block text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: "var(--solar)" }}>
              {project.tag}
            </span>
          </Reveal>
          <Reveal delay={180}>
            <h1 className="mt-5 font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05] max-w-4xl">
              {project.title}
            </h1>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/80">
              <span className="inline-flex items-center gap-2"><MapPin size={14} style={{ color: "var(--solar)" }} /> {project.location}</span>
              <span className="inline-flex items-center gap-2"><Calendar size={14} style={{ color: "var(--solar)" }} /> {project.year}</span>
              <span className="inline-flex items-center gap-2"><Gauge size={14} style={{ color: "var(--solar)" }} /> {project.scale}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 lg:py-24">
        <div className="container-x">
          <Reveal>
            <button
              type="button"
              onClick={() => openLightbox(active)}
              aria-label="Open image in full screen"
              className="group relative block w-full rounded-2xl overflow-hidden bg-[var(--surface)] cursor-zoom-in"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  key={active}
                  src={project.gallery[active]}
                  alt={`${project.title} — view ${active + 1}`}
                  width={1920}
                  height={1080}
                  className="h-full w-full object-cover animate-in fade-in duration-500 transition-transform group-hover:scale-[1.02]"
                />
              </div>
              <span
                className="absolute top-4 right-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold backdrop-blur-md"
                style={{ backgroundColor: "rgba(7, 12, 24, 0.55)", color: "white" }}
              >
                <Expand size={14} /> View full screen
              </span>
            </button>
          </Reveal>
          <div className="mt-4 grid grid-cols-4 gap-3 md:gap-4">
            {project.gallery.map((src, i) => (
              <button
                key={src + i}
                onClick={() => openLightbox(i)}
                aria-label={`View image ${i + 1}`}
                className={`aspect-[4/3] rounded-lg overflow-hidden transition-all ${active === i ? "ring-2 ring-offset-2" : "opacity-70 hover:opacity-100"}`}
                style={active === i ? { boxShadow: "0 0 0 2px var(--navy)" } : undefined}
              >
                <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Summary + Highlights */}
      <section className="pb-20 lg:pb-28">
        <div className="container-x grid lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-2 space-y-10">
            <Reveal>
              <div>
                <span className="text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: "var(--emerald)" }}>
                  Summary
                </span>
                <p className="mt-4 text-xl leading-relaxed text-foreground/85">{project.summary}</p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div>
                <h2 className="font-display font-semibold text-2xl">The Challenge</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{project.challenge}</p>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div>
                <h2 className="font-display font-semibold text-2xl">Our Solution</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{project.solution}</p>
              </div>
            </Reveal>
            <Reveal delay={220}>
              <div>
                <h2 className="font-display font-semibold text-2xl">The Outcome</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{project.outcome}</p>
              </div>
            </Reveal>
          </div>

          <aside className="space-y-8">
            <Reveal>
              <div className="rounded-2xl p-7 bg-[var(--surface)]">
                <h3 className="font-display font-semibold text-lg">Project Highlights</h3>
                <dl className="mt-5 grid grid-cols-2 gap-5">
                  {project.highlights.map((h) => (
                    <div key={h.label}>
                      <dt className="text-xs uppercase tracking-wider text-muted-foreground">{h.label}</dt>
                      <dd className="mt-1 font-display font-bold text-2xl" style={{ color: "var(--navy)" }}>{h.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="rounded-2xl p-7" style={{ backgroundColor: "var(--navy)", color: "white" }}>
                <h3 className="font-display font-semibold text-lg">Services Delivered</h3>
                <ul className="mt-4 space-y-2 text-sm text-white/85">
                  {project.services.map((s) => (
                    <li key={s} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--solar)" }} />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-20 lg:py-24">
        <div className="container-x">
          <div
            className="rounded-3xl px-8 py-14 md:px-16 md:py-20 relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, var(--navy-deep) 0%, var(--navy) 100%)",
            }}
          >
            <div
              className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-20"
              style={{ background: "radial-gradient(circle, var(--solar), transparent 70%)" }}
            />
            <div className="relative max-w-2xl text-white">
              <Reveal>
                <span className="text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: "var(--solar)" }}>
                  Plan your project
                </span>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="mt-5 font-display font-bold text-3xl md:text-5xl leading-[1.1]">
                  Want a system like this for your site?
                </h2>
              </Reveal>
              <Reveal delay={180}>
                <p className="mt-5 text-white/75 text-lg">
                  Book a free consultation. Our engineers will assess your loads, site conditions and goals — and return a tailored proposal within 48 hours.
                </p>
              </Reveal>
              <Reveal delay={260}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold"
                    style={{ backgroundColor: "var(--solar)", color: "var(--navy-deep)" }}
                  >
                    Request a Consultation <ArrowRight size={16} />
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold border border-white/25 text-white hover:bg-white/10"
                  >
                    Explore Services
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="pb-24 lg:pb-32">
        <div className="container-x">
          <Reveal>
            <h2 className="font-display font-bold text-3xl md:text-4xl">More projects</h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <Link
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="group rounded-2xl overflow-hidden bg-[var(--surface)] block h-full"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={p.cover} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <div className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">{p.tag}</div>
                    <h3 className="mt-2 font-display font-semibold text-lg">{p.title}</h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SiteFooterImport />

      {lightboxOpen && (
        <Lightbox
          images={project.gallery}
          startIndex={active}
          alt={project.title}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  );
}

import { SiteFooter as SiteFooterImport } from "@/components/site-chrome";
