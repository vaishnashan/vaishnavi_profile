import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { personal } from "../data/portfolio";
import GraphMotif from "./GraphMotif";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const iconMap = { github: GithubIcon, linkedin: LinkedinIcon, mail: Mail, phone: Mail };

export default function Hero() {
  const initials = personal.name
    .split(" ")
    .map((p) => p[0])
    .join("");

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32"
    >
      {/* ambient graph motif, right side, ash/blue on white */}
      <div className="pointer-events-none absolute -right-16 top-10 w-[420px] h-[340px] opacity-70 hidden lg:block">
        <GraphMotif className="w-full h-full" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-50/60 via-transparent to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-ash-200 bg-mist px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-slate-500">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
            Open to research & engineering roles
          </span>

          <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-ink tracking-tight leading-[1.05]">
            {personal.name}
          </h1>
          <p className="mt-4 font-display text-xl md:text-2xl text-blue-600">
            {personal.title}
          </p>
          <p className="mt-6 max-w-xl text-slate-500 text-lg leading-relaxed">
            {personal.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-ink text-paper px-6 py-3 text-sm font-medium hover:bg-blue-600 transition-colors"
            >
              View my work
              <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-ash-200 px-6 py-3 text-sm font-medium text-ink hover:border-blue-500 hover:text-blue-600 transition-colors"
            >
              Contact me
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            {personal.socials
              .filter((s) => s.icon === "github" || s.icon === "linkedin" || s.icon === "mail")
              .map((s) => {
                const Icon = iconMap[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.url}
                    target={s.url.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    aria-label={s.label}
                    className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-ash-200 text-slate-500 hover:text-blue-600 hover:border-blue-500 transition-colors"
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto"
        >
          <div className="relative aspect-square w-70 sm:w-86 md:w-[280px] lg:w-[320px] mx-auto">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-500 to-blue-900 rotate-6 opacity-90" />
            <div className="absolute inset-0 rounded-[2rem] border border-ash-200 bg-mist overflow-hidden -rotate-3 shadow-xl shadow-ink/5">
              {personal.photoUrl ? (
                <img
                  src={personal.photoUrl}
                  alt={personal.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center">
                  <span className="font-display text-6xl md:text-7xl font-semibold text-blue-500/40">
                    {initials}
                  </span>
                </div>
              )}
            </div>
          </div>
          <p className="mt-4 text-center text-xs font-mono text-ash-400">
            {personal.location}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
