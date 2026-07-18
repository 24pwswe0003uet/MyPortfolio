import { motion } from "framer-motion";
import { Code2, Users, Star, Presentation } from "lucide-react";
import { experiences, experience } from "../data/content";
import Reveal from "../components/Reveal";

const roleIcons = {
  "Software Developer (Client Work)": Code2,
  "Team Collaboration & Web Development": Users,
  "President — Software Excellence Society": Star,
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-16 text-center">
            Experience & Leadership
          </motion.h2>
        </Reveal>

        {experiences.map((entry, i) => {
          const Icon = roleIcons[entry.role];
          const expColors = [
            { heading: "text-amber-400", border: "border-amber-400", icon: "bg-amber-400/10 text-amber-400", shadow: "hover:shadow-[0_0_30px_-5px_rgba(251,191,36,0.3)]" },
            { heading: "text-emerald-400", border: "border-emerald-400", icon: "bg-emerald-400/10 text-emerald-400", shadow: "hover:shadow-[0_0_30px_-5px_rgba(52,211,153,0.3)]" },
            { heading: "text-sky-400", border: "border-sky-400", icon: "bg-sky-400/10 text-sky-400", shadow: "hover:shadow-[0_0_30px_-5px_rgba(56,189,248,0.3)]" },
          ];
          const c = expColors[i % expColors.length];
          return (
            <motion.div
              key={entry.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className={`relative rounded-2xl p-6 sm:p-8 bg-white dark:bg-dark-card border border-gray-200/50 dark:border-dark-border/50 border-l-4 ${c.border} mb-6 hover:-translate-y-1 ${c.shadow} transition-all duration-300`}
            >
              <div className="flex items-start gap-3 mb-3">
                {Icon && (
                  <div className={`p-2 rounded-lg ${c.icon} shrink-0 mt-0.5`}>
                    <Icon size={20} />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                    <h3 className={`text-lg sm:text-xl font-bold ${c.heading}`}>
                      {entry.role}
                    </h3>
                    <span className={`text-xs font-mono mt-1 sm:mt-0 sm:shrink-0 ${c.heading}`}>
                      {entry.period}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{entry.location}</p>
                </div>
              </div>
              <ul className="space-y-2 ml-1">
                {entry.details.map((d, idx) => (
                  <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                    <span className="text-accent mt-1 shrink-0">•</span>
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}

        {/* Conferences */}
        <Reveal delay={0.2}>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-6 mt-12">
            Conferences & Seminars
          </h3>
        </Reveal>
        <div className="space-y-4">
          {experience.conferences.map((conf, i) => {
            const confColors = [
              { heading: "text-amber-400", border: "border-amber-400", icon: "text-amber-400" },
              { heading: "text-sky-400", border: "border-sky-400", icon: "text-sky-400" },
            ];
            const c = confColors[i % confColors.length];
            return (
              <motion.div
                key={conf.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className={`relative rounded-xl p-5 bg-gray-50/80 dark:bg-dark-card/50 border border-gray-200/50 dark:border-dark-border/50 border-l-4 ${c.border}`}
              >
                <div className="flex items-center gap-3 mb-1.5">
                  <Presentation size={16} className={`${c.icon} shrink-0`} />
                  <h4 className={`text-sm font-bold ${c.heading}`}>{conf.name}</h4>
                  <span className={`text-xs font-mono ml-auto shrink-0 ${c.heading}`}>{conf.date}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 ml-7">{conf.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
