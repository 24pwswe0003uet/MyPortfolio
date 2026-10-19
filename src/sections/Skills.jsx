import { motion } from "framer-motion";
import {
  SiC,
  SiCplusplus,
  SiSharp,
  SiDart,
  SiFlutter,
  SiUnity,
  SiSqlite,
  SiMysql,
  SiDocker,
} from "react-icons/si";
import {
  Layers,
  Database,
  Workflow,
  Building2,
  Users,
  ClipboardList,
  Smartphone,
  Link2,
  Sparkles,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const row1 = [
  { Icon: SiC, name: "C", color: "#A8B9CC" },
  { Icon: SiCplusplus, name: "C++", color: "#00599C" },
  { Icon: SiSharp, name: "C#", color: "#68217A" },
  { Icon: SiDart, name: "Dart", color: "#0175C2" },
  { Icon: SiSqlite, name: "SQL", color: "#4479A1" },
];

const row2 = [
  { Icon: SiFlutter, name: "Flutter", color: "#02569B" },
  { Icon: SiUnity, name: "Unity Engine", color: "#A9B6C2" },
  { Icon: SiMysql, name: "MySQL", color: "#4479A1" },
  { Icon: SiDocker, name: "Docker", color: "#2496ED" },
  { Icon: Link2, name: "REST API", color: "#A855F7" },
  { Icon: Sparkles, name: "Web Dev + Vibe Coding", color: "#A855F7" },
];

const row3 = [
  { Icon: Layers, name: "Object-Oriented Programming", color: "#A855F7" },
  { Icon: Database, name: "Database Management Systems", color: "#22D3EE" },
  { Icon: Workflow, name: "UML", color: "#EC4899" },
  { Icon: Building2, name: "Software Architecture", color: "#8B5CF6" },
  { Icon: Users, name: "Leadership", color: "#A855F7" },
  { Icon: Users, name: "Teamwork", color: "#22D3EE" },
  { Icon: ClipboardList, name: "Project Coordination", color: "#EC4899" },
  { Icon: Smartphone, name: "App Development", color: "#8B5CF6" },
];

const groups = [
  { label: "Languages & Programming", items: row1, reverse: false },
  { label: "Frameworks, Tools & Platforms", items: row2, reverse: true },
  { label: "Concepts & Professional Skills", items: row3, reverse: false },
];

function SkillRow({ skills, reverse = false }) {
  return (
    <motion.div
      animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className="flex gap-6 whitespace-nowrap"
    >
      {[...skills, ...skills].map((skill, index) => {
        const Icon = skill.Icon;
        return (
          <div
            key={index}
            className="
              flex items-center gap-4
              px-7 py-4
              rounded-full
              border border-line
              bg-glass
              backdrop-blur-md
              hover:bg-glass-hover
              transition-all duration-300
              shrink-0
            "
          >
            <Icon size={30} color={skill.color} />
            <span className="text-ink font-medium text-lg">{skill.name}</span>
          </div>
        );
      })}
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 overflow-hidden">
      <SectionHeading sub="The technologies and tools I work with every day">
        Skills & Technologies
      </SectionHeading>

      <div className="flex flex-col gap-10">
        {groups.map((group) => (
          <div key={group.label} className="flex flex-col gap-4">
            <span className="text-ink-faint uppercase tracking-[0.3em] text-xs px-6 sm:px-10">
              {group.label}
            </span>
            <SkillRow skills={group.items} reverse={group.reverse} />
          </div>
        ))}
      </div>
    </section>
  );
}
