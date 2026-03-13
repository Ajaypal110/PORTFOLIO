import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import Loader from './components/Loader';

import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Services from './sections/Services';
import Contact from './sections/Contact';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('dark');

  /* Theme persistence */
  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme') || 'dark';
    setTheme(saved);
    document.body.className = saved;
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.body.className = next;
    localStorage.setItem('portfolio-theme', next);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme}`}>
      {loading && <Loader onComplete={() => setLoading(false)} />}

      <Toaster position="top-right" />
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
