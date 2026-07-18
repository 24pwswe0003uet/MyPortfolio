import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const eduColors = [
  {
    accent: "text-amber-600",
    accentLight: "text-amber-500",
    bg: "from-amber-400/15 to-amber-400/5",
    border: "border-amber-400/30",
    bar: "bg-amber-400",
    dot: "bg-amber-400",
    glow: "bg-amber-400/30",
  },
  {
    accent: "text-emerald-600",
    accentLight: "text-emerald-500",
    bg: "from-emerald-400/15 to-emerald-400/5",
    border: "border-emerald-400/30",
    bar: "bg-emerald-400",
    dot: "bg-emerald-400",
    glow: "bg-emerald-400/30",
  },
];

const courseColors = [
  { text: "text-amber-500", bg: "from-amber-400/20 to-amber-400/5", border: "border-amber-400/25" },
  { text: "text-emerald-500", bg: "from-emerald-400/20 to-emerald-400/5", border: "border-emerald-400/25" },
];

function CourseworkTags({ courses, alignRight, startDelay }) {
  return (
    <div className={`flex flex-wrap gap-2 mt-4 ${alignRight ? "justify-end" : "justify-start"}`}>
      {courses.map((course, i) => {
        const cc = courseColors[i % courseColors.length];
        return (
          <motion.span
            key={course}
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: startDelay + i * 0.06, duration: 0.3, ease: "easeOut" }}
            whileHover={{ scale: 1.12 }}
            className={`text-sm px-3 py-1 rounded-full bg-gradient-to-r ${cc.bg} ${cc.text} border ${cc.border} cursor-default transition-transform`}
          >
            {course}
          </motion.span>
        );
      })}
    </div>
  );
}

export default function TimelineItem({ entry, index }) {
  const isLeft = index % 2 === 0;
  const isActive = index === 1;
  const c = eduColors[index % eduColors.length];

  const cardInner = (titleSize) => (
    <>
      <div className={`absolute left-0 top-4 bottom-4 w-1 ${c.bar} rounded-r-lg`} />
      <div className="pl-5">
        <span className={`text-sm font-medium ${c.accent} font-mono`}>{entry.period}</span>
        <h3 className={`${titleSize} font-bold ${c.accent} mt-1`}>{entry.title}</h3>
        {entry.link ? (
          <a
            href={entry.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-base ${c.accent} hover:${c.accentLight} inline-flex items-center gap-1 mt-1`}
          >
            {entry.institution} <ExternalLink size={14} />
          </a>
        ) : (
          <p className="text-base text-gray-500 dark:text-gray-400 mt-1">{entry.institution}</p>
        )}
        {entry.details && (
          <p className={`text-sm ${c.accent} mt-2 font-semibold`}>{entry.details}</p>
        )}
      </div>
    </>
  );

  return (
    <div className="relative flex items-start gap-6 md:gap-0">
      {/* Desktop layout */}
      <div className={`hidden md:flex items-center w-full ${isLeft ? "flex-row" : "flex-row-reverse"}`}>
        <div className={`w-[calc(50%-28px)] ${isLeft ? "text-right" : "text-left"}`}>
          <motion.div
            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative bg-white dark:bg-dark-card rounded-2xl p-6 border border-gray-200/50 dark:border-dark-border/50"
          >
            {cardInner("text-2xl")}
            {entry.coursework && (
              <CourseworkTags courses={entry.coursework} alignRight={isLeft} startDelay={0.6} />
            )}
          </motion.div>
        </div>
        <div className="w-14 flex justify-center relative">
          <div className="relative z-10">
            {isActive && (
              <motion.div
                animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute -inset-2 rounded-full ${c.glow}`}
              />
            )}
            <div className={`relative rounded-full ${c.dot} ring-4 ring-white dark:ring-dark-bg z-10 ${isActive ? "w-5 h-5" : "w-4 h-4"}`} />
          </div>
        </div>
        <div className="w-[calc(50%-28px)]" />
      </div>

      {/* Mobile layout */}
      <div className="flex md:hidden w-full">
        <div className="flex flex-col items-center mr-4">
          <div className="relative">
            {isActive && (
              <motion.div
                animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute -inset-2 rounded-full ${c.glow}`}
              />
            )}
            <div className={`relative rounded-full ${c.dot} ring-4 ring-white dark:ring-dark-bg z-10 ${isActive ? "w-5 h-5" : "w-4 h-4"}`} />
          </div>
          <div className="w-[3px] flex-1 bg-gradient-to-b from-accent/60 to-accent/10" />
        </div>
        <div className="pb-8 flex-1">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative bg-white dark:bg-dark-card rounded-2xl p-5 border border-gray-200/50 dark:border-dark-border/50"
          >
            <div className={`absolute left-0 top-4 bottom-4 w-1 ${c.bar} rounded-r-lg`} />
            <div className="pl-4">
              <span className={`text-sm font-medium ${c.accent} font-mono`}>{entry.period}</span>
              <h3 className={`text-xl font-bold ${c.accent} mt-1`}>{entry.title}</h3>
              {entry.link ? (
                <a href={entry.link} target="_blank" rel="noopener noreferrer" className={`text-base ${c.accent} inline-flex items-center gap-1 mt-1`}>
                  {entry.institution} <ExternalLink size={14} />
                </a>
              ) : (
                <p className="text-base text-gray-500 dark:text-gray-400 mt-1">{entry.institution}</p>
              )}
              {entry.details && <p className={`text-sm ${c.accent} mt-2 font-semibold`}>{entry.details}</p>}
              {entry.coursework && (
                <CourseworkTags courses={entry.coursework} alignRight={false} startDelay={0.6} />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
