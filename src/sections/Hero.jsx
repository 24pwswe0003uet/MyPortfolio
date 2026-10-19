import { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { hero } from "../data/content";
import profilePhoto from "../assets/profile-photo.png";
import FadeIn from "../components/FadeIn";
import Magnet from "../components/Magnet";

function useTypewriter(words, typeSpeed = 80, deleteSpeed = 50, pauseTime = 2000) {
  const ref = useRef(null);
  const idxRef = useRef(0);
  const charIdxRef = useRef(0);
  const isDeletingRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let timer;

    const tick = () => {
      const current = words[idxRef.current];
      if (!isDeletingRef.current) {
        charIdxRef.current++;
        el.textContent = current.slice(0, charIdxRef.current);
        if (charIdxRef.current === current.length) {
          isDeletingRef.current = true;
          timer = setTimeout(tick, pauseTime);
          return;
        }
        timer = setTimeout(tick, typeSpeed);
      } else {
        charIdxRef.current--;
        el.textContent = current.slice(0, charIdxRef.current);
        if (charIdxRef.current === 0) {
          isDeletingRef.current = false;
          idxRef.current = (idxRef.current + 1) % words.length;
          timer = setTimeout(tick, typeSpeed);
          return;
        }
        timer = setTimeout(tick, deleteSpeed);
      }
    };
    timer = setTimeout(tick, 500);
    return () => clearTimeout(timer);
  }, [words, typeSpeed, deleteSpeed, pauseTime]);

  return ref;
}

function ParticleNetwork() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth * devicePixelRatio;
    canvas.height = canvas.offsetHeight * devicePixelRatio;
    ctx.scale(devicePixelRatio, devicePixelRatio);

    const particleCount = 60;
    const particles = [];
    const maxDist = 120;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 1.5 + 0.5,
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.offsetWidth) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.offsetHeight) p.vy *= -1;

        for (const q of particles) {
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(168, 85, 247, ${(1 - dist / maxDist) * 0.12})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;
        const mdx = p.x - mx;
        const mdy = p.y - my;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < 150) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mx, my);
          ctx.strokeStyle = `rgba(168, 85, 247, ${(1 - mDist / 150) * 0.25})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(168, 85, 247, 0.35)";
        ctx.fill();
      }
      requestAnimationFrame(animate);
    }
    animate();
  }, []);

  useEffect(() => {
    draw();
    const handler = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.5 }}
    />
  );
}

const socialIcons = { Linkedin: FaLinkedin, Github: FaGithub, Email: Mail };

export default function Hero() {
  const typewriterRef = useTypewriter(hero.roles);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Radial background gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(168,85,247,0.08)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(236,72,153,0.06)_0%,transparent_60%)] pointer-events-none" />

      <ParticleNetwork />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-10">
          {/* Text column */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <FadeIn delay={0.1} y={20}>
              <span className="inline-block text-[14px] text-accent tracking-[2px] uppercase mb-4 font-medium">
                {hero.eyebrow}
              </span>
            </FadeIn>

            <div className="overflow-hidden">
              <FadeIn delay={0.2} y={50}>
                <h1
                  className="hero-heading font-black uppercase tracking-tight leading-none"
                  style={{ fontSize: "clamp(2.6rem, 8vw, 6.5rem)" }}
                >
                  {hero.name}
                </h1>
              </FadeIn>
            </div>

            <FadeIn delay={0.35} y={20}>
              <div className="text-xl sm:text-2xl mt-5 h-9 font-medium uppercase tracking-wide">
                <span ref={typewriterRef} className="text-accent" />
                <span className="animate-pulse text-accent">|</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.45} y={20}>
              <p
                className="text-ink-muted font-light max-w-xl mx-auto lg:mx-0 mt-6"
                style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)", lineHeight: 1.8 }}
              >
                {hero.intro}
              </p>
            </FadeIn>

            <FadeIn delay={0.55} y={20}>
              <div className="flex flex-wrap items-center gap-4 mt-10 justify-center lg:justify-start">
                <a href={hero.cta[0].href} className="btn-primary">
                  {hero.cta[0].label} <ArrowDown size={16} />
                </a>
                <a href={hero.cta[1].href} download className="btn-secondary">
                  {hero.cta[1].label} <Download size={16} />
                </a>
                {hero.socials.map((s) => {
                  const Icon = socialIcons[s.name];
                  return (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-circle"
                      aria-label={s.name}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </FadeIn>
          </div>

          {/* Photo column */}
          <div className="order-1 lg:order-2 flex justify-center">
            <FadeIn delay={0.3} y={30} className="shrink-0">
              <Magnet padding={120} strength={3}>
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute -inset-8 rounded-full bg-accent/20 blur-3xl"
                  />
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/40 via-accent/10 to-transparent p-[2px]"
                  >
                    <div className="w-full h-full rounded-full bg-surface" />
                  </motion.div>
                  <motion.div
                    initial={{ clipPath: "circle(0% at 50% 50%)", opacity: 0, scale: 0.9 }}
                    whileInView={{ clipPath: "circle(50% at 50% 50%)", opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
                    className="relative z-10 w-full h-full rounded-full overflow-hidden border-2 border-accent/30"
                  >
                    <img
                      src={profilePhoto}
                      alt="Malak Saad Khan"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              </Magnet>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
