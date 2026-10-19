import { motion } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
import profilePhoto from "../assets/profile-photo.png";

function applyAccents(text, accentWords) {
  if (!accentWords.length) return text;
  const parts = [];
  let remaining = text;
  let key = 0;
  for (const word of accentWords) {
    const idx = remaining.indexOf(word);
    if (idx === -1) continue;
    if (idx > 0)
      parts.push(<span key={key++}>{remaining.slice(0, idx)}</span>);
    parts.push(
      <span key={key++} className="text-accent">
        {word}
      </span>
    );
    remaining = remaining.slice(idx + word.length);
  }
  if (remaining) parts.push(<span key={key++}>{remaining}</span>);
  return parts.length ? parts : text;
}

function SplashLine({ text, speed = 40, delay = 200, onComplete, accentWords = [] }) {
  const [done, setDone] = useState(false);
  const spanRef = useRef(null);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    if (done) return;
    const el = spanRef.current;
    if (!el) return;
    let timer;
    let cancelled = false;

    const type = (i) => {
      if (cancelled) return;
      if (i <= text.length) {
        el.textContent = text.slice(0, i);
        timer = setTimeout(() => type(i + 1), speed);
      } else {
        setDone(true);
        onCompleteRef.current?.();
      }
    };

    timer = setTimeout(() => type(1), delay);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [text, speed, delay, done]);

  if (done) {
    return <>{applyAccents(text, accentWords)}</>;
  }

  return (
    <>
      <span ref={spanRef} />
      <span className="animate-pulse text-accent">|</span>
    </>
  );
}

export default function LoadingSplash({ onFinish }) {
  const [step, setStep] = useState(0);

  const advance = useCallback(() => setStep((s) => s + 1), []);

  useEffect(() => {
    if (step >= 4) {
      const timer = setTimeout(onFinish, 0);
      return () => clearTimeout(timer);
    }
  }, [step, onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[100] bg-surface flex items-center justify-center"
    >
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 px-6 max-w-4xl mx-auto w-full">
        {step >= 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="shrink-0 w-32 h-40 sm:w-40 sm:h-48 md:w-48 md:h-auto md:self-stretch rounded-[20px] overflow-hidden border-2 border-accent/40 shadow-lg shadow-accent/10"
          >
            <img
              src={profilePhoto}
              alt="Malak Saad Khan"
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}

        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 text-center md:text-left md:flex-1 md:min-w-0">
          {step >= 0 && (
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-ink">
              <SplashLine
                text="Hello. Welcome to my portfolio."
                speed={80}
                delay={300}
                onComplete={advance}
              />
            </div>
          )}

          {step >= 1 && (
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-ink">
              <SplashLine
                text="I am Malak Saad Khan"
                speed={80}
                delay={150}
                onComplete={advance}
                accentWords={["Malak Saad Khan"]}
              />
            </div>
          )}

          {step >= 2 && (
            <div className="text-base sm:text-lg md:text-xl font-semibold text-ink-muted">
              <SplashLine
                text="A Software Engineering student at UET Peshawar"
                speed={80}
                delay={150}
                onComplete={advance}
                accentWords={["UET Peshawar"]}
              />
            </div>
          )}

          {step >= 3 && (
            <div className="text-base sm:text-lg md:text-xl font-semibold text-ink-muted">
              <SplashLine
                text="Game Developer & Full-Stack Enthusiast"
                speed={80}
                delay={150}
                onComplete={advance}
                accentWords={["Full-Stack Enthusiast"]}
              />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
