import { motion } from "framer-motion";
import { Award, BadgeCheck, Users } from "lucide-react";
import { activities, awards, certificates } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

function Card({
  icon,
  eyebrow,
  children,
}: {
  icon: React.ReactNode;
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-ash-200 bg-paper p-7"
    >
      <div className="flex items-center gap-2.5 text-blue-500">
        {icon}
        <h3 className="font-mono text-xs uppercase tracking-[0.15em]">{eyebrow}</h3>
      </div>
      <div className="mt-5 space-y-5">{children}</div>
    </motion.div>
  );
}

export default function Awards() {
  return (
    <section id="awards" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading eyebrow="Recognition" title="Awards, certificates & activities" />

        <div className="grid md:grid-cols-3 gap-6">
          <Card icon={<Award size={16} />} eyebrow="Honors & Awards">
            {awards.map((a) => (
              <div key={a.title}>
                <div className="flex items-baseline justify-between gap-3">
                  <p className="text-sm font-medium text-ink">{a.title}</p>
                  <span className="font-mono text-xs text-ash-400 shrink-0">{a.year}</span>
                </div>
                {a.org && <p className="mt-0.5 text-sm text-slate-500">{a.org}</p>}
              </div>
            ))}
          </Card>

          <Card icon={<BadgeCheck size={16} />} eyebrow="Certificates & Courses">
            {certificates.map((c) => (
              <div key={c.name}>
                <div className="flex items-baseline justify-between gap-3">
                  <p className="text-sm font-medium text-ink">{c.name}</p>
                  <span className="font-mono text-xs text-ash-400 shrink-0">{c.year}</span>
                </div>
                <p className="mt-0.5 text-sm text-slate-500">{c.provider}</p>
              </div>
            ))}
          </Card>

          <Card icon={<Users size={16} />} eyebrow="Clubs & Societies">
            {activities.map((a) => (
              <div key={a.org}>
                <div className="flex items-baseline justify-between gap-3">
                  <p className="text-sm font-medium text-ink">{a.org}</p>
                  <span className="font-mono text-xs text-ash-400 shrink-0">
                    {a.start} – {a.end}
                  </span>
                </div>
                <p className="mt-0.5 text-sm text-slate-500">{a.role}</p>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </section>
  );
}
