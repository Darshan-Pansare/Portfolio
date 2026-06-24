import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <main style={{ minHeight: '100vh', position: 'relative' }}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Achievements />
      <Contact />
      
      <footer style={{ padding: '4rem 0', borderTop: '1px solid var(--border-light)', marginTop: '8rem', textAlign: 'center', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} Darshan Pansare. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

export default App;
