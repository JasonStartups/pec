import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/page-shell";
import { Reveal } from "@/components/motion-primitives";
import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Prodigy Exclusive Company" },
      { name: "description", content: "Speak with PEC about solar, storage, security and smart automation projects across Nigeria." },
      { property: "og:title", content: "Contact PEC" },
      { property: "og:description", content: "Get a free consultation for your next renewable energy project." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title={<>Let's engineer your<br />next system.</>}
        intro="Tell us about your project. Our engineers respond within one business day with next steps and a tailored proposal."
      />
      <section className="py-24 lg:py-32">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5 space-y-8">
            <ContactItem icon={Mail} label="Email" value="hello@prodigyexclusive.com" />
            <ContactItem icon={Phone} label="Phone" value="+234 800 000 0000" />
            <ContactItem icon={MapPin} label="Headquarters" value="Lagos, Nigeria · Nationwide service" />
            <div className="rounded-2xl p-8 mt-10" style={{ backgroundColor: "var(--navy)", color: "white" }}>
              <h3 className="font-display font-semibold text-2xl">Office Hours</h3>
              <p className="mt-3 text-white/70">Mon – Fri · 8:00 – 18:00</p>
              <p className="text-white/70">Sat · 9:00 – 14:00</p>
              <p className="mt-4 text-sm text-white/50">24/7 technical support for service clients.</p>
            </div>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-7">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="rounded-3xl border border-border bg-white p-8 lg:p-10 space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" />
                <Field label="Company / Organisation" name="company" />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Service interest</label>
                <select className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--navy)]">
                  <option>Solar Energy Solutions</option>
                  <option>Lithium Battery Storage</option>
                  <option>Inverters</option>
                  <option>Portable Solar Generators</option>
                  <option>CCTV & Security</option>
                  <option>Smart Home Automation</option>
                  <option>Training Academy</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Project details</label>
                <textarea
                  rows={5}
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--navy)]"
                  placeholder="Tell us about your site, current power needs, and goals."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold"
                style={{ backgroundColor: "var(--solar)", color: "var(--navy)" }}
              >
                {submitted ? "Thanks — we'll be in touch" : "Send enquiry"} <ArrowRight size={16} />
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--navy)]"
      />
    </div>
  );
}

function ContactItem({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="flex items-start gap-4">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl" style={{ backgroundColor: "var(--surface)", color: "var(--navy)" }}>
        <Icon size={20} />
      </span>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{label}</div>
        <div className="mt-1 font-display font-semibold text-lg">{value}</div>
      </div>
    </div>
  );
}
