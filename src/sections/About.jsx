import { about } from "../data/content";
import AnimatedText from "../components/AnimatedText";
import ContactButton from "../components/ContactButton";
import SectionHeading from "../components/SectionHeading";
import FadeIn from "../components/FadeIn";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 gap-10 sm:gap-14 md:gap-16 overflow-hidden"
    >
      {/* Decorative corner glows */}
      <FadeIn x={-80} y={0} duration={0.9} className="absolute top-[6%] left-[3%] w-[140px] h-[140px] sm:w-[190px] sm:h-[190px] pointer-events-none">
        <div className="w-full h-full rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.14),transparent_70%)] blur-2xl" />
      </FadeIn>
      <FadeIn x={-80} y={0} duration={0.9} className="absolute bottom-[10%] left-[8%] w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] pointer-events-none">
        <div className="w-full h-full rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.12),transparent_70%)] blur-2xl" />
      </FadeIn>
      <FadeIn x={80} y={0} duration={0.9} className="absolute top-[6%] right-[3%] w-[140px] h-[140px] sm:w-[190px] sm:h-[190px] pointer-events-none">
        <div className="w-full h-full rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.12),transparent_70%)] blur-2xl" />
      </FadeIn>
      <FadeIn x={80} y={0} duration={0.9} className="absolute bottom-[10%] right-[8%] w-[110px] h-[110px] sm:w-[160px] sm:h-[160px] pointer-events-none">
        <div className="w-full h-full rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.1),transparent_70%)] blur-2xl" />
      </FadeIn>

      <div className="relative z-10 w-full">
        <SectionHeading>{about.heading}</SectionHeading>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-12 sm:gap-16">
        <AnimatedText
          text={about.body}
          className="text-ink font-light text-center leading-relaxed max-w-[640px]"
          style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
        />
        <ContactButton label="Let's Talk" />
      </div>
    </section>
  );
}
