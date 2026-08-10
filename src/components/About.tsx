import { motion } from "framer-motion";
import { personal } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-mist border-y border-ash-200">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="About"
          title="Turning research ideas into grounded systems"
        />
        <div className="grid md:grid-cols-[1.3fr_1fr] gap-12">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-lg text-slate-500 leading-relaxed"
          >
            {personal.statement}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ash-400 mb-4">
              Areas of interest
            </p>
            <div className="flex flex-wrap gap-2">
              {personal.interests.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-ash-200 bg-paper px-3.5 py-1.5 text-sm text-slate-500"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
