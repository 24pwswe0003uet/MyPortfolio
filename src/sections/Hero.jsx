import { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { hero } from "../data/content";
import profilePhoto from "../assets/profile-photo.png";

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
    const w = (canvas.width = canvas.offsetWidth * devicePixelRatio);
    const h = (canvas.height = canvas.offsetHeight * devicePixelRatio);
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
            ctx.strokeStyle = `rgba(124, 58, 237, ${(1 - dist / maxDist) * 0.15})`;
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
          ctx.strokeStyle = `rgba(124, 58, 237, ${(1 - mDist / 150) * 0.3})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(124, 58, 237, 0.4)";
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
    <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      <ParticleNetwork />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Photo Column */}
          <div className="shrink-0">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
              {/* Decorative glow blob */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute -inset-8 rounded-full bg-accent/20 blur-3xl"
              />
              {/* Gradient ring */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/40 via-accent/10 to-transparent p-[2px]"
              >
                <div className="w-full h-full rounded-full bg-white dark:bg-dark-bg" />
              </motion.div>
              {/* Photo with circular clip-path reveal */}
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
          </div>

          {/* Text Column */}
          <div className="flex-1 text-center md:text-left">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block text-xs sm:text-sm text-accent font-mono tracking-wider uppercase mb-3"
            >
              {hero.eyebrow}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight mb-4"
            >
              {hero.name}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-2 h-8"
            >
              <span ref={typewriterRef} className="text-accent" />
              <span className="animate-pulse text-accent">|</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed mb-8"
            >
              {hero.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 justify-center md:justify-start"
            >
              <a
                href={hero.cta[0].href}
                className="px-6 py-3 rounded-full bg-accent text-white font-medium text-sm hover:bg-accent-dark transition-colors shadow-lg shadow-accent/25 inline-flex items-center gap-2"
              >
                {hero.cta[0].label} <ArrowDown size={16} />
              </a>
              <a
                href={hero.cta[1].href}
                download
                className="px-6 py-3 rounded-full border border-accent/30 text-accent hover:bg-accent/10 transition-colors font-medium text-sm inline-flex items-center gap-2"
              >
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
                    className="p-2.5 rounded-full border border-gray-200 dark:border-dark-border/50 text-gray-500 dark:text-gray-400 hover:text-accent hover:border-accent/50 transition-all"
                    aria-label={s.name}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
