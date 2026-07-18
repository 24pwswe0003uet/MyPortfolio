import { motion } from "framer-motion";
import { skills } from "../data/content";
import SkillBadge from "../components/SkillBadge";
import Reveal from "../components/Reveal";

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-16 text-center">
            Skills & Technologies
          </motion.h2>
        </Reveal>

        <div className="flex flex-col gap-6">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative rounded-2xl p-6 sm:p-8 bg-white dark:bg-dark-card border border-gray-200/50 dark:border-dark-border/50"
            >
              <div className="absolute left-0 top-6 bottom-6 w-1 bg-accent rounded-r-lg" />
              <div className="pl-5 sm:pl-7">
                <h3 className="text-lg sm:text-xl font-semibold text-accent mb-5">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((item, idx) => (
                    <SkillBadge key={item.name} name={item.name} icon={item.icon} index={idx} groupIndex={i} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
