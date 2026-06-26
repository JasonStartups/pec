import type { ComponentType } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/page-shell";
import { Reveal } from "@/components/motion-primitives";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import {
  PEC_EMAIL,
  PEC_HEAD_OFFICE,
  PEC_PHONE_DISPLAY,
  whatsappUrl,
} from "@/lib/contact";

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
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact Us"
        title={
          <>
            Prodigy Exclusive
            <br />
            Company.
          </>
        }
        intro="Driven by Innovation, Defined by Excellence. Tell us about your project and our team will respond with next steps and a tailored proposal."
      />
      <section className="py-24 lg:py-32">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5 space-y-8">
            <ContactItem icon={Mail} label="Email" value={PEC_EMAIL} />
            <ContactItem icon={Phone} label="Phone" value={PEC_PHONE_DISPLAY} href={whatsappUrl()} />
            <ContactItem icon={MapPin} label="Head Office" value={PEC_HEAD_OFFICE} />
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
                const fd = new FormData(e.currentTarget);
                const message = [
                  "Hello PEC, I would like to make an enquiry.",
                  "",
                  `Name: ${fd.get("name")}`,
                  `Email: ${fd.get("email")}`,
                  fd.get("phone") ? `Phone: ${fd.get("phone")}` : null,
                  fd.get("company") ? `Company: ${fd.get("company")}` : null,
                  `Service: ${fd.get("service")}`,
                  fd.get("details") ? `Details: ${fd.get("details")}` : null,
                ]
                  .filter(Boolean)
                  .join("\n");
                window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
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
                <select
                  name="service"
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--leaf)]"
                >
                  <option>Solar Energy Solutions</option>
                  <option>Lithium Battery & Energy Storage</option>
                  <option>Inverter Sales & Installation</option>
                  <option>Portable Solar Generators</option>
                  <option>Solar Gadgets & Appliances</option>
                  <option>Solar System Maintenance</option>
                  <option>CCTV & Security Solutions</option>
                  <option>Smart Home & Automation</option>
                  <option>Solar Training & Education</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Project details</label>
                <textarea
                  name="details"
                  rows={5}
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--navy)]"
                  placeholder="Tell us about your site, current power needs, and goals."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold"
                style={{ backgroundColor: "var(--leaf)", color: "white" }}
              >
                Send enquiry via WhatsApp <ArrowRight size={16} />
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

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: ComponentType<{ size?: number }>;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl" style={{ backgroundColor: "var(--surface)", color: "var(--navy)" }}>
        <Icon size={20} />
      </span>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{label}</div>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block font-display font-semibold text-lg hover:text-[var(--leaf)] transition-colors"
          >
            {value}
          </a>
        ) : (
          <div className="mt-1 font-display font-semibold text-lg">{value}</div>
        )}
      </div>
    </div>
  );
}
