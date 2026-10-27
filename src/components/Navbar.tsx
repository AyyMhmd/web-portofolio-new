import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0f131d]/90 backdrop-blur-xl border-b border-[#262a35] shadow-lg shadow-black/30'
          : 'bg-[#0f131d]/75 backdrop-blur-md'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div className="flex items-center gap-4">
          <a
            href="#home"
            className="group flex items-center gap-1.5 font-mono text-sm tracking-tight transition-transform hover:scale-105"
          >
            <span className="text-[#8B5CF6] font-bold text-lg">&lt;</span>
            <span className="text-base sm:text-lg font-semibold text-[#dfe2f1] group-hover:text-[#d0bcff] transition-colors font-sans">
              {PERSONAL_INFO.shortName}
            </span>
            <span className="text-[#EC4899] font-bold text-lg">/&gt;</span>
          </a>

          {/* Available for hire badge */}
          <div className="hidden xl:flex items-center gap-2 bg-[#171b26] border border-[#262a35] px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
            <span className="font-mono text-[11px] font-semibold text-[#10B981] uppercase tracking-wider">
              Available for hire
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 p-1 bg-[#171b26]/60 rounded-xl border border-[#262a35]/60">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-all rounded-lg ${
                  isActive
                    ? 'bg-[#a078ff] text-[#340080] font-semibold shadow-sm'
                    : 'text-[#cbc3d7] hover:text-[#dfe2f1] hover:bg-[#262a35]/60'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action Icons & Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Icon Links */}
          <div className="hidden sm:flex items-center gap-1 bg-[#171b26] p-1 rounded-lg border border-[#262a35]">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Repository"
              title="GitHub Profile"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[#cbc3d7] hover:bg-[#262a35] hover:text-[#06B6D4] transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">code</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[#cbc3d7] hover:bg-[#262a35] hover:text-[#d0bcff] transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">hub</span>
            </a>
            <button
              onClick={copyEmail}
              type="button"
              aria-label="Copy Email"
              title={copied ? "Email Copied!" : "Copy Email"}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[#cbc3d7] hover:bg-[#262a35] hover:text-[#10B981] transition-all relative"
            >
              <span className="material-symbols-outlined text-[18px]">
                {copied ? 'check' : 'alternate_email'}
              </span>
              {copied && (
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-[#10B981] text-[#0f131d] text-[10px] font-mono rounded font-bold whitespace-nowrap shadow-md">
                  Tersalin!
                </span>
              )}
            </button>
          </div>

          {/* Hire Me Button */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-[0_0_20px_rgba(139,92,246,0.35)] hover:shadow-[0_0_25px_rgba(236,72,153,0.5)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Hire Me
          </a>

          {/* Profile Avatar / Indicator */}
          <a
            href="#about"
            title="Ayi Muhamad Nasrulloh"
            className="w-8 h-8 rounded-full bg-[#d0bcff] flex items-center justify-center flex-shrink-0 shadow-sm border border-[#a078ff] hover:ring-2 hover:ring-[#8B5CF6] transition-all"
          >
            <span className="material-symbols-outlined text-[#3c0091] text-[18px]">person</span>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="lg:hidden w-9 h-9 rounded-lg bg-[#171b26] border border-[#262a35] flex items-center justify-center text-[#dfe2f1] hover:bg-[#262a35] transition-colors"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0f131d]/98 border-b border-[#262a35] px-4 pt-3 pb-6 flex flex-col gap-2">
          <div className="flex items-center justify-between pb-2 border-b border-[#262a35]/60 mb-1">
            <span className="font-mono text-xs text-[#06B6D4]">Menu Navigasi</span>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
              <span className="text-[11px] font-mono text-[#10B981]">Available for hire</span>
            </div>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeSection === link.id
                  ? 'bg-[#a078ff] text-[#340080] font-semibold'
                  : 'text-[#cbc3d7] hover:bg-[#171b26] hover:text-[#dfe2f1]'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 mt-1 border-t border-[#262a35] flex items-center gap-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 py-2 text-center rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white text-xs font-semibold"
            >
              Hire Me
            </a>
            <a
              href={PERSONAL_INFO.cvUrl}
              download="CV_Ayi_Muhamad_Nasrulloh.pdf"
              className="px-3 py-2 rounded-lg bg-[#171b26] border border-[#262a35] text-xs font-medium text-[#d0bcff] hover:bg-[#262a35] flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[16px]">download</span>
              <span>CV</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
