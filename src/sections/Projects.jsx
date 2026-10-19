import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects } from "../data/content";
import LiveProjectButton from "../components/LiveProjectButton";
import SectionHeading from "../components/SectionHeading";
import ProjectVisual from "../components/ProjectVisual";

function ProjectCard({ project, index, total, progress }) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div
      className="sticky top-24 md:top-32"
      style={{ top: `${index * 28 + 96}px` }}
    >
      <motion.div
        style={{ scale }}
        className="
          rounded-[40px] sm:rounded-[50px] md:rounded-[60px]
          border border-line
          bg-card/95
          backdrop-blur-xl
          p-4 sm:p-6 md:p-8
          shadow-[0_0_60px_rgba(255,255,255,0.03)]
          hover:border-line-strong
          transition-all duration-300
        "
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6 md:mb-8 px-2 sm:px-4">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8 flex-wrap">
            <div
              className="hero-heading font-black"
              style={{ fontSize: "clamp(3rem, 10vw, 140px)", lineHeight: 1 }}
            >
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-ink-muted uppercase tracking-[0.25em] text-xs sm:text-sm">
                {project.category}
              </span>
              <span
                className="text-ink font-medium uppercase"
                style={{ fontSize: "clamp(1rem, 2vw, 1.75rem)" }}
              >
                {project.title}
              </span>

              <div className="flex flex-wrap items-center gap-2 mt-2">
                <span
                  className={`
                    text-[11px] font-medium px-2.5 py-1 rounded-full border flex items-center gap-1.5
                    ${
                      project.badge === "Client Project"
                        ? "border-[#22C55E]/40 text-[#22C55E] bg-[#22C55E]/10"
                        : "border-accent/40 text-accent bg-accent/10"
                    }
                  `}
                >
                  {project.inProgress && (
                    <motion.span
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-1.5 h-1.5 rounded-full bg-accent"
                    />
                  )}
                  {project.badge}
                  {project.inProgress && " + In Progress"}
                </span>
              </div>
            </div>
          </div>

          {project.link && <LiveProjectButton href={project.link} label="View Project" />}
        </div>

        {/* Tags + description */}
        <div className="px-2 sm:px-4 mb-6 flex flex-col gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[12px] px-2.5 py-1 rounded-full border border-line text-ink-muted bg-glass"
              >
                {tag}
              </span>
            ))}
          </div>
          <p
            className="text-ink-muted font-light leading-relaxed max-w-3xl"
            style={{ fontSize: "clamp(0.85rem, 1.5vw, 1.1rem)" }}
          >
            {project.description}
          </p>
        </div>

        {/* Visuals */}
        {project.video && !(project.images && project.images.length) ? (
          <ProjectVisual
            title={project.title}
            index={index + 2}
            tags={project.tags.slice(0, 4)}
            video={project.video}
            className="w-full aspect-video rounded-[35px] md:rounded-[45px] hover:scale-[1.01] transition-all duration-300"
            style={{ minHeight: "clamp(240px, 45vh, 480px)" }}
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-span-2 flex flex-col gap-4">
              <ProjectVisual
                title={project.title}
                index={index}
                tags={project.tags.slice(0, 3)}
                src={project.images?.[0]}
                className="w-full rounded-[30px] hover:scale-[1.02] transition-all duration-300"
                style={{ height: "clamp(140px, 18vw, 240px)" }}
              />
              <ProjectVisual
                title={project.title}
                index={index + 1}
                tags={project.tags.slice(0, 3)}
                src={project.images?.[1]}
                className="w-full rounded-[30px] hover:scale-[1.02] transition-all duration-300"
                style={{ height: "clamp(180px, 24vw, 320px)" }}
              />
            </div>
            <div className="md:col-span-3">
              <ProjectVisual
                title={project.title}
                index={index + 2}
                tags={project.tags.slice(0, 4)}
                src={project.images?.[2]}
                video={project.video}
                className="w-full h-full rounded-[35px] md:rounded-[45px] hover:scale-[1.01] transition-all duration-300"
                style={{ minHeight: "100%" }}
              />
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default function Projects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <SectionHeading sub="Personal builds and real client work">Projects</SectionHeading>

      <div className="max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div key={project.title} className="h-[140vh]">
            <ProjectCard
              project={project}
              index={index}
              total={projects.length}
              progress={scrollYProgress}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
