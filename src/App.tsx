import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Interests } from './components/Interests';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { InitialLoader } from './components/InitialLoader';
import { ScrollProgress } from './components/ScrollProgress';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  // Active section tracking on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Allow ESC to skip intro immediately
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isLoading) {
        setIsLoading(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLoading]);

  return (
    <>
      {/* Initial Access Entrance Preloader */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <InitialLoader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-[#0f131d] text-[#dfe2f1] font-sans selection:bg-[#8B5CF6] selection:text-white flex flex-col relative">
        {/* Scroll Progress Bar at the Top */}
        <ScrollProgress />

        {/* Top Fixed Header with entrance animation */}
        <Navbar activeSection={activeSection} />

        {/* Main Content Sections */}
        <main className="flex-1 w-full">
          {/* Hero Section */}
          <Hero />

          {/* Things I Love (Interests) Section */}
          <Interests />

          {/* About Me Section */}
          <About />

          {/* Pendidikan, Pengalaman & Sertifikasi Section */}
          <Experience />

          {/* Skills & Tech Stack Section */}
          <Skills />

          {/* Featured Projects Section */}
          <Projects />

          {/* Contact & Get In Touch Section */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Scroll To Top Button */}
        <ScrollToTop />
      </div>
    </>
  );
}
