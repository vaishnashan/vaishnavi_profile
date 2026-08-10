import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import { GithubIcon } from "./BrandIcons";

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-mist border-y border-ash-200">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Systems built end to end"
          description="Selected builds spanning agentic RAG, knowledge graphs, and voice AI — each taken from prototype to a deployed, containerized service."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 2) * 0.08 }}
              className={`group relative flex flex-col rounded-2xl border bg-paper p-7 transition-colors ${
                project.featured
                  ? "border-blue-200 md:col-span-2"
                  : "border-ash-200 hover:border-blue-300"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wide text-blue-500">
                    {project.tag} · {project.period}
                  </span>
                  <h3 className="mt-2 font-display text-xl md:text-2xl font-semibold text-ink">
                    {project.name}
                  </h3>
                </div>
                <div className="flex shrink-0 gap-2">
                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.name} on GitHub`}
                      className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-ash-200 text-slate-500 hover:text-blue-600 hover:border-blue-500 transition-colors"
                    >
                      <GithubIcon size={15} />
                    </a>
                  )}
                  {project.links?.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.name} live demo`}
                      className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-ash-200 text-slate-500 hover:text-blue-600 hover:border-blue-500 transition-colors"
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>

              <ul className="mt-4 space-y-2.5 flex-1">
                {project.points.map((point, j) => (
                  <li key={j} className="flex gap-3 text-sm text-slate-500 leading-relaxed">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ash-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-blue-50 px-2.5 py-1 font-mono text-xs text-blue-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
