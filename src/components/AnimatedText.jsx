
import { Fragment, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

function AnimatedLetter({ letter, progress, range, reduceMotion }) {
  const opacity = useTransform(progress, range, [0.65, 1]);

  return (
    <motion.span
      className="inline-block"
      style={reduceMotion ? undefined : { opacity }}
    >
      {letter}
    </motion.span>
  );
}

export default function AnimatedText({
  text,
  className = "",
  style,
}) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.25"],
  });

  const words = String(text || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  const totalChars =
    words.reduce(
      (sum, word) => sum + Array.from(word).length,
      0
    ) || 1;

  let charIndex = 0;

  return (
    <p
      ref={ref}
      className={className}
      style={style}
      aria-label={text}
    >
      <span aria-hidden="true">
        {words.map((word, wordIndex) => (
          <Fragment key={wordIndex}>
            <span className="inline-block whitespace-nowrap">
              {Array.from(word).map((letter, i) => {
                const start = charIndex / totalChars;
                charIndex++;

                const end = Math.min(
                  (charIndex + 1) / totalChars,
                  1
                );

                return (
                  <AnimatedLetter
                    key={i}
                    letter={letter}
                    progress={scrollYProgress}
                    range={[start, end]}
                    reduceMotion={reduceMotion}
                  />
                );
              })}
            </span>

            {wordIndex < words.length - 1 ? " " : null}
          </Fragment>
        ))}
      </span>
    </p>
  );
}
