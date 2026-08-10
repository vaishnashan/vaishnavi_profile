import { motion } from "framer-motion";
import { coursework, education } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32 bg-mist border-y border-ash-200">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading eyebrow="Education" title="Academic foundation" />

        <div className="grid md:grid-cols-[1.2fr_1fr] gap-12">
          <div className="space-y-8">
            {education.map((item, i) => (
              <motion.div
                key={item.institution + item.credential}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-2xl border border-ash-200 bg-paper p-6"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {item.institution}
                  </h3>
                  <span className="font-mono text-xs text-blue-500">
                    {item.start ? `${item.start} — ${item.end}` : item.end}
                  </span>
                </div>
                <p className="mt-1 text-slate-500">{item.credential}</p>
                {item.details && (
                  <ul className="mt-3 space-y-1.5">
                    {item.details.map((d, j) => (
                      <li key={j} className="text-sm text-ash-400">
                        {d}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-ash-400 mb-4">
              Relevant coursework
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {coursework.map((c) => (
                <li
                  key={c.name}
                  className="flex items-center justify-between gap-3 border-b border-ash-100 py-1.5 text-sm text-slate-500"
                >
                  <span>{c.name}</span>
                  {c.grade && (
                    <span className="font-mono text-xs text-blue-500">{c.grade}</span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
