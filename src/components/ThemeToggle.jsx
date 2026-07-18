import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { darkMode, toggle } = useTheme();
  return (
    <motion.button
      onClick={toggle}
      whileTap={{ scale: 0.9 }}
      className="relative p-2 rounded-full bg-dark-surface dark:bg-dark-surface bg-light-surface border border-dark-border dark:border-dark-border border-light-border cursor-pointer"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <motion.div
        key={darkMode ? "moon" : "sun"}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {darkMode ? <Moon size={18} className="text-accent" /> : <Sun size={18} className="text-accent" />}
      </motion.div>
    </motion.button>
  );
}
