import { experiences, experience } from "../data/content";
import FadeIn from "../components/FadeIn";
import SectionHeading from "../components/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <SectionHeading sub="Roles, projects, and student leadership">
        Experience & Leadership
      </SectionHeading>

      <div className="max-w-7xl mx-auto">
        <div className="max-w-5xl mx-auto">
          {experiences.map((entry, i) => (
            <FadeIn key={entry.role} delay={i * 0.1} y={30}>
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

                <div className="flex flex-col gap-3 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h3
                      className="font-medium uppercase text-ink transition-all duration-300 group-hover:translate-x-2"
                      style={{ fontSize: "clamp(1.05rem, 2.2vw, 1.9rem)", lineHeight: 1.1 }}
                    >
                      {entry.role}
                    </h3>
                    <span className="text-ink-faint font-mono text-sm shrink-0 tracking-wide">
                      {entry.period}
                    </span>
                  </div>
                  <span className="text-ink-faint font-light text-sm">{entry.location}</span>

                  <ul className="flex flex-col gap-2 mt-2">
                    {entry.details.map((d, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-ink-muted font-light" style={{ lineHeight: 1.8 }}>
                        <span className="text-accent mt-1 shrink-0">•</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Conferences & Seminars */}
        <div className="max-w-5xl mx-auto mt-16">
          <FadeIn y={30}>
            <h3
              className="hero-heading font-black uppercase leading-none tracking-tight mb-8"
              style={{ fontSize: "clamp(1.6rem, 5vw, 2.6rem)" }}
            >
              Conferences & Seminars
            </h3>
          </FadeIn>

          <div className="flex flex-col gap-4">
            {experience.conferences.map((conf, i) => (
              <FadeIn key={conf.name} delay={i * 0.1} y={20}>
                <div className="rounded-3xl border border-line bg-glass backdrop-blur-md p-6 sm:p-7 hover:border-line-strong transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h4 className="text-ink font-medium uppercase tracking-wide" style={{ fontSize: "clamp(1rem, 2vw, 1.3rem)" }}>
                      {conf.name}
                    </h4>
                    <span className="text-ink-faint font-mono text-sm tracking-wide">{conf.date}</span>
                  </div>
                  <p className="text-ink-faint font-light text-sm mt-1">{conf.location}</p>
                  <p className="text-ink-muted font-light mt-3" style={{ lineHeight: 1.8 }}>
                    {conf.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
