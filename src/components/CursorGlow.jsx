import { useEffect, useRef } from "react";

function getGradient() {
  return "radial-gradient(circle, rgba(168,85,247,0.30) 0%, rgba(168,85,247,0.08) 40%, transparent 65%)";
}

function getLightGradient() {
  return "radial-gradient(circle, rgba(168,85,247,0.20) 0%, rgba(168,85,247,0.05) 40%, transparent 65%)";
}

export default function CursorGlow() {
  const cursorRef = useRef({ x: 0, y: 0 });
  const posRef = useRef({ x: 0, y: 0 });
  const elRef = useRef(null);

  useEffect(() => {
    const isTouch = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    if (isTouch) return;

    const el = elRef.current;
    if (!el) return;

    const handler = (e) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handler);

    let start = performance.now();

    function tick(now) {
      const t = (now - start) / 1000;
      const cursor = cursorRef.current;
      const pos = posRef.current;

      pos.x += (cursor.x - pos.x) * 0.08;
      pos.y += (cursor.y - pos.y) * 0.08;

      const isDark = document.documentElement.classList.contains("dark");
      const gradient = isDark ? getGradient() : getLightGradient();
      if (el.style.background !== gradient) {
        el.style.background = gradient;
      }

      const flicker = 1 + Math.sin(t * 7.3) * 0.025 + Math.sin(t * 11.7) * 0.02;
      const opacity = 0.85 + Math.sin(t * 5.1) * 0.08 + Math.sin(t * 13.3) * 0.05;

      el.style.transform = `translate(${pos.x}px, ${pos.y}px) scale(${flicker})`;
      el.style.opacity = opacity;

      requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handler);
    };
  }, []);

  return (
    <div
      ref={elRef}
      className="fixed top-0 left-0 pointer-events-none z-[90] w-[450px] h-[450px] -translate-x-1/2 -translate-y-1/2"
      style={{
        background: getGradient(),
        willChange: "transform, opacity, background",
      }}
    />
  );
}
