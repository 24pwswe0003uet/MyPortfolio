import { education } from "../data/content";
import FadeIn from "../components/FadeIn";
import SectionHeading from "../components/SectionHeading";

export default function Education() {
  return (
    <section id="education" className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <div
        className="
          max-w-7xl mx-auto
          rounded-[40px] sm:rounded-[50px] md:rounded-[60px]
          border border-line
          bg-card
          px-6 sm:px-8 md:px-12
          py-12 sm:py-16 md:py-20
          shadow-[0_0_60px_rgba(255,255,255,0.03)]
        "
      >
        <SectionHeading>Education</SectionHeading>

        <div className="max-w-5xl mx-auto">
          {education.map((entry, i) => (
            <FadeIn key={i} delay={i * 0.1} y={30}>
              <div
                className="group flex flex-col md:flex-row md:items-start gap-6 sm:gap-10 md:gap-14 py-8 sm:py-10 md:py-12 px-4 md:px-6 rounded-3xl border border-transparent transition-all duration-300 hover:bg-glass hover:border-line"
                style={{
                  borderTop: i === 0 ? "1px solid var(--line-strong)" : undefined,
                  borderBottom: "1px solid var(--line-strong)",
                }}
              >
                <div
                  className="font-black shrink-0 text-ink transition-all duration-300 group-hover:opacity-40"
                  style={{ opacity: 0.15, fontSize: "clamp(3rem, 10vw, 120px)", lineHeight: 1 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <a
                      href={entry.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium uppercase text-ink transition-all duration-300 group-hover:translate-x-2 hover:text-accent"
                      style={{ fontSize: "clamp(1.05rem, 2.2vw, 1.9rem)", lineHeight: 1.1 }}
                    >
                      {entry.title}
                    </a>
                    <span className="text-ink-faint font-mono text-sm shrink-0 tracking-wide">
                      {entry.period}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-ink-muted font-medium">{entry.institution}</span>
                    <span className="text-ink-faint font-light text-sm">{entry.location}</span>
                  </div>

                  {entry.details && (
                    <p className="text-ink-muted font-light" style={{ fontSize: "clamp(0.85rem, 1.5vw, 1.05rem)" }}>
                      {entry.details}
                    </p>
                  )}

                  {entry.coursework && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {entry.coursework.map((course) => (
                        <span
                          key={course}
                          className="text-[12px] px-3 py-1 rounded-full border border-line text-ink-muted bg-glass"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
