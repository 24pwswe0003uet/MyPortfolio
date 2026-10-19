import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { contact } from "../data/content";
import FadeIn from "./FadeIn";

export default function Footer() {
  return (
    <footer className="px-5 sm:px-8 md:px-10 pt-24 pb-10">
      <div className="max-w-7xl mx-auto">
        {/* CTA */}
        <FadeIn y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: "clamp(2.5rem, 10vw, 8rem)" }}
          >
            Let's Build
            <br />
            Something Amazing
          </h2>
        </FadeIn>

        {/* Get In Touch */}
        <FadeIn delay={0.2} y={30}>
          <div className="flex justify-center mt-12">
            <a
              href={`mailto:${contact.email}`}
              className="
                px-10 py-5
                rounded-full
                border border-line-strong
                bg-glass
                backdrop-blur-md
                text-ink
                uppercase
                tracking-[0.25em]
                font-medium
                transition-all duration-300
                hover:bg-glass-hover
                hover:-translate-y-1
              "
            >
              Get In Touch
            </a>
          </div>
        </FadeIn>

        {/* Email */}
        <FadeIn delay={0.3} y={20}>
          <div className="mt-14 flex justify-center">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-3 text-ink-muted hover:text-ink transition-all"
            >
              <FaEnvelope size={20} />
              <span className="text-lg font-light">{contact.email}</span>
            </a>
          </div>
        </FadeIn>

        {/* Socials */}
        <FadeIn delay={0.4} y={20}>
          <div className="flex justify-center gap-8 mt-12">
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="text-ink-muted hover:text-ink hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={30} />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-ink-muted hover:text-[#0A66C2] hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="text-ink-muted hover:text-[#EC4899] hover:scale-110 transition-all duration-300"
              aria-label="Email"
            >
              <FaEnvelope size={30} />
            </a>
          </div>
        </FadeIn>

        {/* Divider */}
        <div className="h-px bg-line mt-16 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-ink-faint text-sm">
            © 2026 Malak Saad Khan. All rights reserved.
          </span>
          <span className="text-ink-faint text-sm uppercase tracking-[0.2em]">
            Designed & Developed by Malak
          </span>
        </div>
      </div>
    </footer>
  );
}
