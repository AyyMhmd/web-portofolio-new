import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Interests } from './components/Interests';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
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

  return (
    <div className="min-h-screen bg-[#0f131d] text-[#dfe2f1] font-sans selection:bg-[#8B5CF6] selection:text-white flex flex-col">
      {/* Top Fixed Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <Hero />

        {/* Things I Love (Interests) Section */}
        <Interests />

        {/* About Me Section */}
        <About />

        {/* Skills & Tech Stack Section */}
        <Skills />

        {/* Featured Projects Section */}
        <Projects />

        {/* Experience & Certifications (Dicoding MSIB & STTC) */}
        <Experience />

        {/* Testimonials & Endorsements Section */}
        <Testimonials />

        {/* Contact & Get In Touch Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
