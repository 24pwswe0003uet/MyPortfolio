import FadeIn from "./FadeIn";

export default function SectionHeading({ children, sub, className = "", size = "clamp(2.5rem, 12vw, 160px)" }) {
  return (
    <FadeIn y={40} className={`text-center mb-12 sm:mb-16 md:mb-20 ${className}`}>
      <h2
        className="hero-heading font-black uppercase leading-none tracking-tight"
        style={{ fontSize: size }}
      >
        {children}
      </h2>
      {sub && (
        <p
          className="text-ink-muted font-light uppercase tracking-wide mt-6 max-w-2xl mx-auto"
          style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.15rem)" }}
        >
          {sub}
        </p>
      )}
    </FadeIn>
  );
}
