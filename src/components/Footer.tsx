import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0a0e18] border-t border-[#171b26] shadow-[0_-1px_8px_rgba(0,0,0,0.15)] py-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand Copyright */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-1 font-mono text-base text-[#d0bcff]">
            <span className="text-[#8B5CF6] font-bold">&lt;</span>
            <span className="font-semibold text-[#dfe2f1] font-sans">{PERSONAL_INFO.shortName}</span>
            <span className="text-[#EC4899] font-bold">/&gt;</span>
          </div>
          <p className="text-xs text-[#958ea0] text-center md:text-left">
            © 2025 {PERSONAL_INFO.name}. All architectural rights reserved.
          </p>
        </div>

        {/* Center Tagline Badge */}
        <div className="flex items-center gap-2 bg-[#1c1f2a] border border-[#262a35] px-4 py-2 rounded-full shadow-inner">
          <span className="material-symbols-outlined text-[#8B5CF6] text-[16px]">terminal</span>
          <span className="font-mono text-[11px] text-[#cbc3d7] uppercase tracking-wider">
            Built with clean code &amp; passion
          </span>
        </div>

        {/* Navigation & Back to Top */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-[#cbc3d7]">
          <a href="#home" className="hover:text-white transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#experience" className="hover:text-white transition-colors">
            Experience
          </a>
          <a href="#skills" className="hover:text-white transition-colors">
            Skills
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
          <button
            onClick={scrollToTop}
            type="button"
            className="w-8 h-8 rounded-lg bg-[#171b26] hover:bg-[#262a35] border border-[#262a35] flex items-center justify-center text-[#d0bcff] hover:text-white transition-all ml-1"
            title="Scroll back to top"
            aria-label="Back to top"
          >
            <span className="material-symbols-outlined text-[18px]">expand_less</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
