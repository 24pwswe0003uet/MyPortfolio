
import { useState, useCallback, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import { ThemeProvider } from "./context/ThemeContext";
import LoadingSplash from "./components/LoadingSplash";
import Navbar from "./components/Navbar";
import ProgressBar from "./components/ProgressBar";
import CursorGlow from "./components/CursorGlow";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Awards from "./sections/Awards";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function AppContent() {
  const [loading, setLoading] = useState(true);

  const finishSplash = useCallback(() => {
    setLoading(false);
  }, []);

  // Prevent scrolling while the intro is visible.
  useEffect(() => {
    if (!loading) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [loading]);

  return (
    <>
      {/* Portfolio content renders immediately */}
      <ProgressBar />
      <CursorGlow />
      <Navbar />

      <main>
        <Hero startTyping={!loading} />
        <About />
        <Education />
        <Services />
        <Projects />
        <Skills />
        <Experience />
        <Awards />
        <Contact />
      </main>

      <Footer />

      {/* Intro overlays the portfolio instead of
          preventing it from rendering */}
      <AnimatePresence>
        {loading && (
          <LoadingSplash
            key="portfolio-intro"
            onFinish={finishSplash}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
