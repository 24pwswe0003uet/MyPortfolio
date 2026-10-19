import { awards } from "../data/content";
import FadeIn from "../components/FadeIn";
import SectionHeading from "../components/SectionHeading";

export default function Awards() {
  return (
    <section id="awards" className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <SectionHeading sub="Recognition and academic achievements">
        Awards & Recognition
      </SectionHeading>

      <div className="max-w-3xl mx-auto">
        {awards.map((award, i) => (
          <FadeIn key={award.title} delay={i * 0.1} y={30}>
            <div
              className="group flex items-center justify-between gap-6 py-8 px-4 md:px-6 rounded-3xl border border-transparent transition-all duration-300 hover:bg-glass hover:border-line"
              style={{
                borderTop: i === 0 ? "1px solid var(--line-strong)" : undefined,
                borderBottom: "1px solid var(--line-strong)",
              }}
            >
              <div className="flex items-center gap-4 sm:gap-6">
                <span className="hero-heading font-black shrink-0" style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)", lineHeight: 1 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-ink font-medium uppercase" style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)", lineHeight: 1.2 }}>
                    {award.title}
                  </h3>
                  {award.institution && (
                    <p className="text-ink-faint font-light text-sm mt-1">{award.institution}</p>
                  )}
                </div>
              </div>
              <span className="text-ink-faint font-mono text-sm tracking-wide shrink-0">{award.date}</span>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
