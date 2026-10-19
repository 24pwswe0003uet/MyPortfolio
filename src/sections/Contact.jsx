import { contact } from "../data/content";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import FadeIn from "../components/FadeIn";
import SectionHeading from "../components/SectionHeading";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    window.location.href = `mailto:${contact.email}?subject=Portfolio Inquiry from ${name}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
  };

  const infoItems = [
    { Icon: Mail, value: contact.email, href: `mailto:${contact.email}` },
    { Icon: Phone, value: contact.phone },
    { Icon: MapPin, value: contact.location },
  ];

  return (
    <section id="contact" className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <SectionHeading sub={contact.subheading}>{contact.heading}</SectionHeading>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
        {/* Contact info */}
        <FadeIn x={-20} y={0} className="space-y-6">
          {infoItems.map((item, i) => {
            const content = (
              <div className="flex items-center gap-4">
                <div className="icon-circle shrink-0">
                  <item.Icon size={18} />
                </div>
                <span className="text-ink font-light" style={{ fontSize: "clamp(1rem, 1.6vw, 1.15rem)" }}>
                  {item.value}
                </span>
              </div>
            );
            return item.href ? (
              <a key={i} href={item.href} className="block group">
                <div className="flex items-center gap-4 rounded-2xl p-3 -m-3 transition-all duration-300 group-hover:bg-glass">
                  {content}
                </div>
              </a>
            ) : (
              <div key={i}>{content}</div>
            );
          })}

          <div className="flex gap-3 pt-4">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-circle"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-circle"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a href={`mailto:${contact.email}`} className="icon-circle" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </FadeIn>

        {/* Contact form */}
        <FadeIn x={20} y={0}>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-[32px] border border-line bg-card p-6 sm:p-8 shadow-[0_0_60px_rgba(255,255,255,0.03)]"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-5 py-3.5 rounded-full bg-glass border border-line text-ink placeholder-ink-faint focus:outline-none focus:border-accent/60 transition-colors text-[15px]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-5 py-3.5 rounded-full bg-glass border border-line text-ink placeholder-ink-faint focus:outline-none focus:border-accent/60 transition-colors text-[15px]"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={5}
              className="w-full px-5 py-4 rounded-[24px] bg-glass border border-line text-ink placeholder-ink-faint focus:outline-none focus:border-accent/60 transition-colors text-[15px] resize-none"
            />
            <button type="submit" className="btn-primary w-full">
              Send Message <Send size={16} />
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
