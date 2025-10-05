import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import CircuitBackground from './components/CircuitBackground';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services', 'about', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white overflow-hidden">
      <CircuitBackground />
      <Navigation activeSection={activeSection} />

      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="blog">
          <Blog />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer className="relative z-10 border-t border-cyan-500/20 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 Aegis Cybersecurity. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
