import { motion } from "framer-motion";

interface Node {
  x: number;
  y: number;
  r: number;
  delay: number;
}

interface Edge {
  from: number;
  to: number;
}

// Fixed constellation loosely tracing a knowledge-graph fan-out —
// deliberate, not decorative noise: entities (nodes) connected by
// relationships (edges), the same shape as the KG/RAG work this site
// is presenting.
const nodes: Node[] = [
  { x: 40, y: 60, r: 4, delay: 0 },
  { x: 160, y: 30, r: 3, delay: 0.15 },
  { x: 230, y: 110, r: 5, delay: 0.3 },
  { x: 110, y: 150, r: 3, delay: 0.45 },
  { x: 290, y: 60, r: 3.5, delay: 0.6 },
  { x: 340, y: 160, r: 4.5, delay: 0.75 },
  { x: 200, y: 220, r: 3, delay: 0.9 },
  { x: 60, y: 230, r: 3.5, delay: 1.05 },
  { x: 380, y: 260, r: 3, delay: 1.2 },
  { x: 300, y: 300, r: 4, delay: 1.35 },
];

const edges: Edge[] = [
  { from: 0, to: 1 },
  { from: 1, to: 2 },
  { from: 2, to: 4 },
  { from: 1, to: 3 },
  { from: 3, to: 6 },
  { from: 2, to: 5 },
  { from: 4, to: 5 },
  { from: 5, to: 8 },
  { from: 6, to: 7 },
  { from: 6, to: 9 },
  { from: 5, to: 9 },
  { from: 8, to: 9 },
];

export default function GraphMotif({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 340"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {edges.map((e, i) => {
        const a = nodes[e.from];
        const b = nodes[e.to];
        return (
          <motion.line
            key={i}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke="var(--color-blue-400)"
            strokeOpacity={0.35}
            strokeWidth={1}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.35 }}
            transition={{ duration: 1.1, delay: 0.3 + i * 0.05, ease: "easeInOut" }}
          />
        );
      })}
      {nodes.map((n, i) => (
        <g key={i}>
          <motion.circle
            cx={n.x}
            cy={n.y}
            r={n.r + 6}
            fill="var(--color-blue-500)"
            opacity={0.08}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.16, 0.08] }}
            transition={{
              duration: 3.5,
              delay: 1 + n.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: `${n.x}px ${n.y}px` }}
          />
          <motion.circle
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill={i % 3 === 0 ? "var(--color-ink)" : "var(--color-blue-500)"}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: n.delay }}
          />
        </g>
      ))}
    </svg>
  );
}
