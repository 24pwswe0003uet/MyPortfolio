import { Mail, Heart } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { contact } from "../data/content";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200/50 dark:border-dark-border/50 bg-gray-50 dark:bg-dark-surface/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500 text-center sm:text-left">
              &copy; 2026 Malak Saad Khan. Built with{" "}
              <span className="inline-flex items-center gap-0.5">
                <Heart size={10} className="text-accent" />
              </span>{" "}
              using React, Tailwind &amp; Framer Motion.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-gray-500 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={16} />
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-gray-500 hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={16} />
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="p-2 rounded-full text-gray-500 hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
