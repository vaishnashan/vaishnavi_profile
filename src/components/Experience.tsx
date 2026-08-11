import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { experience } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Where the work has happened"
          description="A running timeline — newest first. Each entry maps to real, shipped work."
        />

        <ol className="relative">
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px bg-ash-200"
            aria-hidden="true"
          />
          {experience.map((item, i) => (
            <motion.li
              key={`${item.org}-${item.role}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              className="relative pl-10 pb-14 last:pb-0"
            >
              <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-blue-500 bg-paper" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-xl font-semibold text-ink">
                  {item.role}
                </h3>
                <span className="font-mono text-xs uppercase tracking-wide text-blue-500">
                  {item.start} — {item.end}
                </span>
              </div>
              <p className="mt-1 text-sm text-slate-500">
                {item.org} · {item.location}
              </p>
              {item.summary && (
                <p className="mt-3 text-slate-500 italic">{item.summary}</p>
              )}
              {item.links && item.links.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="focus-ring inline-flex items-center gap-1.5 rounded-full border border-ash-200 px-3 py-1 text-xs text-slate-500 hover:text-blue-600 hover:border-blue-500 transition-colors"
                    >
                      <ExternalLink size={12} />
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
              <ul className="mt-4 space-y-2.5">
                {item.points.map((point, j) => (
                  <li key={j} className="flex gap-3 text-slate-500 leading-relaxed">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-ash-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}