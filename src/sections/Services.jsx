import { services } from "../data/content";
import FadeIn from "../components/FadeIn";
import SectionHeading from "../components/SectionHeading";

export default function Services() {
  return (
    <section id="services" className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
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
        <SectionHeading sub="What I can build for you">
          Services
        </SectionHeading>

        <div className="max-w-5xl mx-auto">
          {services.map((s, i) => (
            <FadeIn key={s.n} delay={i * 0.1} y={30}>
              <div
                className="
                  group
                  flex flex-col md:flex-row
                  md:items-center
                  gap-6 sm:gap-10 md:gap-14
                  py-8 sm:py-10 md:py-12
                  px-4 md:px-6
                  rounded-3xl
                  border border-transparent
                  transition-all duration-300
                  hover:bg-glass
                  hover:border-line
                  hover:-translate-y-1
                "
                style={{
                  borderTop: i === 0 ? "1px solid var(--line-strong)" : undefined,
                  borderBottom: "1px solid var(--line-strong)",
                }}
              >
                <div
                  className="font-black shrink-0 transition-all duration-300 group-hover:opacity-40 text-ink"
                  style={{
                    opacity: 0.15,
                    fontSize: "clamp(3rem, 10vw, 140px)",
                    lineHeight: 1,
                  }}
                >
                  {s.n}
                </div>

                <div className="flex flex-col gap-3 sm:gap-4">
                  <div
                    className="font-medium uppercase text-ink transition-all duration-300 group-hover:translate-x-2"
                    style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)", lineHeight: 1.1 }}
                  >
                    {s.name}
                  </div>
                  <p
                    className="font-light leading-relaxed max-w-2xl text-ink-muted"
                    style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
                  >
                    {s.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
