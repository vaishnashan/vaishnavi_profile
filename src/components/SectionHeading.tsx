import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}`}
    >
      <span className="font-mono text-xs tracking-[0.2em] uppercase text-blue-500">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-ink tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-slate-500 leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
