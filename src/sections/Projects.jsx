import { motion } from "framer-motion";
import { projects } from "../data/content";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-gray-50 dark:bg-dark-surface/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Projects
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              A mix of personal builds and real client work.
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
