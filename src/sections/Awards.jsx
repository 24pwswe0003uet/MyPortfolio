import { motion } from "framer-motion";
import { awards } from "../data/content";
import { Award } from "lucide-react";
import Reveal from "../components/Reveal";

export default function Awards() {
  return (
    <section id="awards" className="py-20 md:py-28 bg-gray-50 dark:bg-dark-surface/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Awards & Recognition
          </motion.h2>
        </Reveal>

        <div className="flex flex-col gap-6 max-w-xl mx-auto">
          {awards.map((award, i) => {
            const awardStyles = [
              {
                bar: "border-amber-400",
                icon: "bg-gradient-to-br from-amber-400/20 to-amber-400/5 text-amber-400",
                glow: "shadow-amber-400/20",
                shadow: "hover:shadow-[0_0_35px_-5px_rgba(251,191,36,0.4)]",
                heading: "text-amber-300",
                date: "text-amber-400/70",
                bg: "bg-gradient-to-br from-amber-500/5 to-transparent",
              },
              {
                bar: "border-emerald-400",
                icon: "bg-gradient-to-br from-emerald-400/20 to-emerald-400/5 text-emerald-400",
                glow: "shadow-emerald-400/20",
                shadow: "hover:shadow-[0_0_35px_-5px_rgba(52,211,153,0.4)]",
                heading: "text-emerald-300",
                date: "text-emerald-400/70",
                bg: "bg-gradient-to-br from-emerald-500/5 to-transparent",
              },
            ];
            const c = awardStyles[i % awardStyles.length];
            return (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5, ease: "easeOut" }}
                className={`relative rounded-xl p-6 bg-white dark:bg-dark-card border border-gray-200/50 dark:border-dark-border/50 border-l-4 ${c.bar} ${c.bg} flex items-start gap-4 hover:-translate-y-1.5 ${c.shadow} transition-all duration-300 overflow-hidden`}
              >
                <div className={`p-3 rounded-xl ${c.icon} shrink-0 shadow-lg ${c.glow}`}>
                  <Award size={24} />
                </div>
                <div>
                  <h3 className={`text-xl sm:text-2xl font-bold ${c.heading}`}>{award.title}</h3>
                  <span className={`text-sm font-mono mt-1 block ${c.date}`}>{award.date}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
