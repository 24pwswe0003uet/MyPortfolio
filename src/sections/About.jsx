import { motion } from "framer-motion";
import { about } from "../data/content";
import Reveal from "../components/Reveal";

function highlightText(text) {
  const keywords = [
    "4.00/4.00 CGPA",
    "Flutter",
    "Unity",
    "President",
    "PHP/Node.js",
    "MySQL",
  ];
  const pattern = new RegExp(`(${keywords.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "g");
  const parts = text.split(pattern);
  return parts.map((part, i) => {
    if (keywords.includes(part)) {
      return (
        <span key={i} className="text-accent font-semibold">
          {part}
        </span>
      );
    }
    return part;
  });
}

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute -inset-40 bg-accent/5 blur-3xl rounded-full pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              {about.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mx-auto mb-8 h-1 w-16 bg-accent rounded-full" />
          </Reveal>
          <Reveal delay={0.25}>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-loose text-center">
              {highlightText(about.body)}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
