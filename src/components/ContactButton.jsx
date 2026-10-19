import { contact } from "../data/content";

export default function ContactButton({ href, label = "Contact Me", className = "" }) {
  return (
    <a href={href ?? `mailto:${contact.email}`} className={`btn-primary ${className}`}>
      {label}
    </a>
  );
}
