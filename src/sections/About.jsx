
import { motion, useReducedMotion } from "framer-motion";
import { about } from "../data/content";
import AnimatedText from "../components/AnimatedText";
import ContactButton from "../components/ContactButton";
import SectionHeading from "../components/SectionHeading";

const focusAreas = [
  "Flutter",
  "Unity",
  "Full-Stack Development",
];

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="relative isolate overflow-hidden px-5 sm:px-8 py-24 sm:py-32"
    >
      {/* Subtle background lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-12 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading>
          {about.heading}
        </SectionHeading>

        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 24 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="relative mt-12 overflow-hidden rounded-[2rem] border border-accent/15 bg-surface/80 p-7 shadow-2xl shadow-black/10 backdrop-blur-sm sm:p-10 lg:p-14"
        >
          {/* Top accent */}
          <div className="absolute left-0 top-0 h-1 w-32 rounded-r-full bg-accent" />

          <div className="grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12">

            {/* Left information panel */}
            <div className="flex flex-col justify-between gap-10">

              <div>
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                  The Person Behind the Code
                </p>

                <h3 className="text-2xl font-bold leading-tight tracking-tight text-ink sm:text-3xl">
                  Building with
                  <span className="block text-accent">
                    Purpose.
                  </span>
                </h3>

                <div className="mt-7 h-[2px] w-14 rounded-full bg-accent/60" />
              </div>

              {/* Professional specialties */}
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-accent/20 bg-accent/5 px-3 py-2 text-xs font-medium tracking-wide text-ink-muted"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Right biography panel */}
            <div className="lg:border-l lg:border-accent/15 lg:pl-12">

              <AnimatedText
                text={about.body}
                className="max-w-3xl text-left font-light leading-[1.9] tracking-normal text-ink"
                style={{
                  fontSize:
                    "clamp(1rem, 1.5vw, 1.2rem)",
                }}
              />

              <div className="mt-10 border-t border-accent/10 pt-8">
                <ContactButton label="Let's Talk" />
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
