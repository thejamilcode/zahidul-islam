import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // Theme state: checks localStorage or defaults to 'light'
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
      return savedTheme;
    }
    // Check user system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  // Sync theme changes with DOM and localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  // Toggle function between dark and light mode
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="app-layout">
      {/* 1. Sticky Navigation Bar with Theme Switcher */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Semantic Page Content */}
      <main id="main-content">
        {/* 2. Hero Section with Real Profile Photo */}
        <Hero />

        {/* 3. About Section */}
        <About />

        {/* 4. Skills & Technologies Section */}
        <Skills />

        {/* 5. Selected Projects Section */}
        <Projects />

        {/* 6. Education Section */}
        <Education />

        {/* 7. Contact Section */}
        <Contact />
      </main>

      {/* 8. Minimal Footer */}
      <Footer />
    </div>
  );
}
