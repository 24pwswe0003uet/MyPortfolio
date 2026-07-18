import { motion } from "framer-motion";
import { education } from "../data/content";
import TimelineItem from "../components/TimelineItem";
import Reveal from "../components/Reveal";

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 bg-gray-50 dark:bg-dark-surface/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-16 text-center">
            Education
          </motion.h2>
        </Reveal>

        {/* Vertical timeline line (desktop) */}
        <div className="hidden md:block relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-amber-400/60 to-emerald-400/60 -translate-x-1/2" />
          <div className="space-y-0">
            {education.map((entry, i) => (
              <TimelineItem key={i} entry={entry} index={i} />
            ))}
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="md:hidden">
          {education.map((entry, i) => (
            <TimelineItem key={i} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
