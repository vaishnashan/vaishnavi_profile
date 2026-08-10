import { personal } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-white/10 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-ash-400">
          © {new Date().getFullYear()} {personal.name}. Built from scratch, deployed to the edge.
        </p>
        <p className="font-mono text-xs text-ash-400">{personal.location}</p>
      </div>
    </footer>
  );
}
