import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function ProjectCard({ project, index }) {
  const colors = [
    { heading: "text-amber-400", border: "hover:border-amber-400/30", shadow: "hover:shadow-[0_0_30px_-5px_rgba(251,191,36,0.3)]" },
    { heading: "text-emerald-400", border: "hover:border-emerald-400/30", shadow: "hover:shadow-[0_0_30px_-5px_rgba(52,211,153,0.3)]" },
    { heading: "text-sky-400", border: "hover:border-sky-400/30", shadow: "hover:shadow-[0_0_30px_-5px_rgba(56,189,248,0.3)]" },
    { heading: "text-teal-400", border: "hover:border-teal-400/30", shadow: "hover:shadow-[0_0_30px_-5px_rgba(45,212,191,0.3)]" },
  ];
  const c = colors[index % colors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className={`group relative rounded-2xl p-6 bg-white dark:bg-dark-card border border-gray-200/50 dark:border-dark-border/50 ${c.border} transition-all duration-300 ${c.shadow}`}
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className={`text-xl sm:text-2xl font-bold ${c.heading} transition-colors`}>
          {project.title}
        </h3>
        {project.badge && (
          <span
            className={`shrink-0 ml-2 text-xs font-medium px-2.5 py-1 rounded-full ${
              project.inProgress
                ? "bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center gap-1.5"
                : project.badge === "Client Project"
                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                : "bg-accent/10 text-accent border border-accent/30"
            }`}
          >
            {project.inProgress && (
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-amber-400"
              />
            )}
            {project.badge}
            {project.inProgress && " + In Progress"}
          </span>
        )}
      </div>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded bg-accent/5 text-gray-500 dark:text-gray-400 border border-gray-200/30 dark:border-dark-border/30"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
        {project.description}
      </p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-light transition-colors"
      >
        View Project <ExternalLink size={14} />
      </a>
    </motion.div>
  );
}
