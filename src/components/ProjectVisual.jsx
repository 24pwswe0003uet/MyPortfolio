const GRADIENTS = [
  "linear-gradient(135deg, #1e1b4b 0%, #4c1d95 50%, #831843 100%)",
  "linear-gradient(135deg, #0c0a3e 0%, #1e3a8a 55%, #0891b2 100%)",
  "linear-gradient(135deg, #3b0764 0%, #7c3aed 55%, #db2777 100%)",
  "linear-gradient(135deg, #082f49 0%, #155e75 55%, #059669 100%)",
];

export default function ProjectVisual({ title, index, tags = [], src, video, className = "", style }) {
  const gradient = GRADIENTS[index % GRADIENTS.length];

  if (video) {
    return (
      <div
        className={`relative overflow-hidden border border-line bg-black ${className}`}
        style={style}
      >
        <video
          className="w-full h-full object-cover"
          src={video}
          controls
          playsInline
          preload="metadata"
          poster={src || undefined}
        />
      </div>
    );
  }

  if (src) {
    return (
      <div
        className={`relative overflow-hidden border border-line ${className}`}
        style={style}
      >
        <img
          src={src}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden border border-line ${className}`}
      style={{ background: gradient, ...style }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_15%,rgba(255,255,255,0.14),transparent_60%)]" />
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute inset-0 flex flex-col justify-end p-5">
        <span
          className="hero-heading font-black uppercase leading-none"
          style={{ fontSize: "clamp(2rem, 6vw, 4rem)", opacity: 0.9 }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-white font-semibold uppercase tracking-wide mt-2" style={{ fontSize: "clamp(0.9rem, 1.6vw, 1.25rem)" }}>
          {title}
        </span>
        <div className="flex flex-wrap gap-1.5 mt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2 py-0.5 rounded-full bg-black/30 text-white/85 border border-white/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
