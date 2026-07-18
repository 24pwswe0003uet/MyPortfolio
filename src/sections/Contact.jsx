import { motion } from "framer-motion";
import { contact } from "../data/content";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Reveal from "../components/Reveal";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    window.location.href = `mailto:${contact.email}?subject=Portfolio Inquiry from ${name}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {contact.heading}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">{contact.subheading}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="p-2.5 rounded-lg bg-accent/10 text-accent">
                <Mail size={18} />
              </div>
              <a href={`mailto:${contact.email}`} className="text-sm text-gray-600 dark:text-gray-300 hover:text-accent transition-colors">
                {contact.email}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-2.5 rounded-lg bg-accent/10 text-accent">
                <Phone size={18} />
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-300">{contact.phone}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-2.5 rounded-lg bg-accent/10 text-accent">
                <MapPin size={18} />
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-300">{contact.location}</span>
            </div>
            <div className="flex gap-3 pt-2">
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-gray-200/50 dark:border-dark-border/50 text-gray-500 dark:text-gray-400 hover:text-accent hover:border-accent/50 transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-gray-200/50 dark:border-dark-border/50 text-gray-500 dark:text-gray-400 hover:text-accent hover:border-accent/50 transition-all"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="p-2.5 rounded-full border border-gray-200/50 dark:border-dark-border/50 text-gray-500 dark:text-gray-400 hover:text-accent hover:border-accent/50 transition-all"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-card border border-gray-200/50 dark:border-dark-border/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-accent/50 transition-colors text-sm"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-card border border-gray-200/50 dark:border-dark-border/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-accent/50 transition-colors text-sm"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={4}
              className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-card border border-gray-200/50 dark:border-dark-border/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-accent/50 transition-colors text-sm resize-none"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-accent text-white font-medium text-sm hover:bg-accent-dark transition-colors shadow-lg shadow-accent/25 cursor-pointer"
            >
              Send Message
            </button>
            {/* TODO: connect to a form backend (e.g. Formspree) */}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
