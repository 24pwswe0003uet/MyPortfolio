import { motion } from "framer-motion";
import {
  Code, Smartphone, Gamepad2, Server, Database, Container,
  Link, Layers, Workflow, Building2, Users, ClipboardList,
} from "lucide-react";

const iconMap = {
  code: Code,
  smartphone: Smartphone,
  gamepad: Gamepad2,
  server: Server,
  database: Database,
  container: Container,
  link: Link,
  layers: Layers,
  diagram: Workflow,
  building: Building2,
  users: Users,
  clipboard: ClipboardList,
};

const palettes = [
  { bg: "from-amber-400/20 to-amber-400/5", text: "text-amber-400", border: "border-amber-400/25", glow: "rgba(251,191,36,0.35)" },
  { bg: "from-emerald-400/20 to-emerald-400/5", text: "text-emerald-400", border: "border-emerald-400/25", glow: "rgba(52,211,153,0.35)" },
];

export default function SkillBadge({ name, icon, index, groupIndex = 0 }) {
  const palette = palettes[groupIndex % palettes.length];
  const Icon = iconMap[icon];

  return (
    <motion.span
      initial={{ opacity: 0, y: 15, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04, duration: 0.35, ease: "easeOut" }}
      whileHover={{ scale: 1.12 }}
      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-base font-medium bg-gradient-to-r ${palette.bg} ${palette.text} border ${palette.border} cursor-default transition-shadow duration-200`}
      style={{
        boxShadow: `0 0 0px 0px ${palette.glow.replace("0.35", "0")}`,
        transition: "box-shadow 0.2s, transform 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 22px -4px ${palette.glow}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = `0 0 0px 0px ${palette.glow.replace("0.35", "0")}`;
      }}
    >
      {Icon && <Icon size={16} />}
      {name}
    </motion.span>
  );
}
