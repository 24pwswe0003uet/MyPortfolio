export default function LiveProjectButton({ href = "#", label = "Live Project", className = "" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-secondary ${className}`}
    >
      {label}
    </a>
  );
}
