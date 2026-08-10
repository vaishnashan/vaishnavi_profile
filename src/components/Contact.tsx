import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { personal } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import GraphMotif from "./GraphMotif";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const iconMap = { github: GithubIcon, linkedin: LinkedinIcon, mail: Mail, phone: Phone };

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32 bg-ink">
      <div className="pointer-events-none absolute -left-24 -bottom-16 w-[420px] h-[340px] opacity-20">
        <GraphMotif className="w-full h-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something grounded"
          description="Open to research collaborations, AI/ML engineering roles, and interesting problems in language and knowledge systems."
        />

        <div className="grid md:grid-cols-2 gap-6">
          <motion.a
            href={`mailto:${personal.email}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="focus-ring group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-5 hover:border-blue-400 transition-colors"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-ash-400">Email</p>
              <p className="mt-1 text-lg text-paper">{personal.email}</p>
            </div>
            <Mail className="text-blue-400 group-hover:translate-x-1 transition-transform" size={20} />
          </motion.a>

          <motion.a
            href={`tel:${personal.phone.replace(/\s+/g, "")}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="focus-ring group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-5 hover:border-blue-400 transition-colors"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-ash-400">Phone</p>
              <p className="mt-1 text-lg text-paper">{personal.phone}</p>
            </div>
            <Phone className="text-blue-400 group-hover:translate-x-1 transition-transform" size={20} />
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          {personal.socials
            .filter((s) => s.icon === "github" || s.icon === "linkedin")
            .map((s) => {
              const Icon = iconMap[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm text-ash-400 hover:text-paper hover:border-blue-400 transition-colors"
                >
                  <Icon size={15} />
                  {s.label}
                </a>
              );
            })}
        </motion.div>
      </div>
    </section>
  );
}
