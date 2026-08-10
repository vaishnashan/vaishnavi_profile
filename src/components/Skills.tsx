import { motion } from "framer-motion";
import { skills, strengths } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading eyebrow="Skills" title="Core competencies & tooling" />

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="border-b border-ash-100 pb-6"
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-ash-400 mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-ash-200 bg-mist px-3 py-1.5 text-sm text-ink hover:border-blue-400 hover:text-blue-600 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-12"
        >
          <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-ash-400 mb-3">
            Ways of working
          </h3>
          <div className="flex flex-wrap gap-2">
            {strengths.map((item) => (
              <span
                key={item}
                className="rounded-full bg-ink text-paper px-3.5 py-1.5 text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
