import { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import LoadingSplash from "./components/LoadingSplash";
import Navbar from "./components/Navbar";
import ProgressBar from "./components/ProgressBar";
import CursorGlow from "./components/CursorGlow";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Awards from "./sections/Awards";
import Contact from "./sections/Contact";
import Footer from './components/Footer';

function AppContent() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <LoadingSplash onFinish={() => setLoading(false)} />;
  }

  return (
    <>
      <ProgressBar />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Awards />
        <Contact />
      </main>
      <Footer />
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
