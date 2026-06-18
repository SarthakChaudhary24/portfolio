// ============================================================
// App.js — Root component: orchestrates loader, cursor, particles,
//           navbar, all sections, scroll progress, and back-to-top
// ============================================================
import React, { useState } from "react";
import "./App.css";

// Special features
import Loader from "./components/Loader/Loader";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import Particles from "./components/Particles/Particles";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import BackToTop from "./components/BackToTop/BackToTop";

// Navigation
import Navbar from "./components/Navbar/Navbar";

// Page sections
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Certifications from "./components/Certifications/Certifications";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

const App = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="app">
      {/* Loading screen */}
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}

      {/* Main portfolio (shown after loader) */}
      {loaded && (
        <div className="app-content">
          {/* Global special features */}
          <CustomCursor />
          <Particles />
          <ScrollProgress />
          <BackToTop />

          {/* Navigation */}
          <Navbar />

          {/* Page sections */}
          <main>
            <Hero />
            <Projects />
            <Experience />
            <Education />
            <Certifications />
            <Skills />
            <Contact />
          </main>
        </div>
      )}
    </div>
  );
};

export default App;
