import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const { language, setLanguage } = useLanguage();
  const t = TRANSLATIONS[language];

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { label: t.nav.home, href: '#home', id: 'home' },
    { label: t.nav.about, href: '#about', id: 'about' },
    { label: t.nav.experience, href: '#experience', id: 'experience' },
    { label: t.nav.skills, href: '#skills', id: 'skills' },
    { label: t.nav.projects, href: '#projects', id: 'projects' },
    { label: t.nav.contact, href: '#contact', id: 'contact' },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? 'bg-[#0f131d]/90 backdrop-blur-xl border-b border-[#262a35] shadow-lg shadow-black/30'
          : 'bg-[#0f131d]/75 backdrop-blur-md'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-3">
        {/* Brand Logo & Status */}
        <div className="flex items-center gap-3 xl:gap-4 flex-shrink-0">
          <a
            href="#home"
            className="group flex items-center gap-1.5 font-mono text-sm tracking-tight transition-transform hover:scale-105"
          >
            <span className="text-[#8B5CF6] font-bold text-lg">&lt;</span>
            <span className="text-base sm:text-lg font-semibold text-[#dfe2f1] group-hover:text-[#d0bcff] transition-colors font-sans whitespace-nowrap">
              {PERSONAL_INFO.shortName}
            </span>
            <span className="text-[#EC4899] font-bold text-lg">/&gt;</span>
          </a>

          {/* Available for hire badge (Visible on large screens) */}
          <div className="hidden 2xl:flex items-center gap-2 bg-[#171b26] border border-[#262a35] px-3 py-1 rounded-full whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
            <span className="font-mono text-[11px] font-semibold text-[#10B981] uppercase tracking-wider">
              {t.nav.availableBadge}
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 p-1 bg-[#171b26]/70 rounded-xl border border-[#262a35]/70 flex-shrink-0 shadow-sm backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative px-2.5 xl:px-3.5 py-1.5 text-xs xl:text-sm font-medium transition-all rounded-lg whitespace-nowrap ${
                  isActive
                    ? 'text-[#340080] font-semibold'
                    : 'text-[#cbc3d7] hover:text-[#dfe2f1] hover:bg-[#262a35]/60'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-[#a078ff] rounded-lg -z-10 shadow-sm"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Action Icons & Controls */}
        <div className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
          {/* Language Switcher (Fixed width pills to avoid any layout jitter) */}
          <div
            className="flex items-center bg-[#171b26] p-0.5 rounded-lg border border-[#262a35] flex-shrink-0"
            title={t.nav.switchLang}
          >
            <button
              onClick={() => setLanguage('id')}
              type="button"
              className={`px-2 py-1 text-xs font-mono font-semibold rounded-md transition-all flex items-center justify-center gap-1 cursor-pointer min-w-[44px] ${
                language === 'id'
                  ? 'bg-gradient-to-r from-[#8B5CF6] to-[#a078ff] text-white shadow-sm font-bold'
                  : 'text-[#cbc3d7] hover:text-white hover:bg-[#262a35]/40'
              }`}
              aria-label="Ganti Bahasa ke Indonesia"
            >
              <span className="text-[12px] leading-none">🇮🇩</span>
              <span>ID</span>
            </button>
            <button
              onClick={() => setLanguage('en')}
              type="button"
              className={`px-2 py-1 text-xs font-mono font-semibold rounded-md transition-all flex items-center justify-center gap-1 cursor-pointer min-w-[44px] ${
                language === 'en'
                  ? 'bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white shadow-sm font-bold'
                  : 'text-[#cbc3d7] hover:text-white hover:bg-[#262a35]/40'
              }`}
              aria-label="Switch Language to English"
            >
              <span className="text-[12px] leading-none">🇬🇧</span>
              <span>EN</span>
            </button>
          </div>

          {/* Quick Social & Contact Icons (Displayed on XL+ to keep LG clean) */}
          <div className="hidden xl:flex items-center gap-1 bg-[#171b26] p-1 rounded-lg border border-[#262a35] flex-shrink-0">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Repository"
              title="GitHub Profile"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[#cbc3d7] hover:bg-[#262a35] hover:text-white transition-all hover:scale-105"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[#cbc3d7] hover:bg-[#262a35] hover:text-[#0077b5] transition-all hover:scale-105"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46v-8.37M7.84 6.88a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
              </svg>
            </a>
            <button
              onClick={copyEmail}
              type="button"
              aria-label="Copy Email"
              title={copied ? t.nav.emailCopied : "Copy Email"}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[#cbc3d7] hover:bg-[#262a35] hover:text-[#10B981] transition-all relative cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">
                {copied ? 'check' : 'alternate_email'}
              </span>
              {copied && (
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-[#10B981] text-[#0f131d] text-[10px] font-mono rounded font-bold whitespace-nowrap shadow-md">
                  {t.nav.emailCopied}
                </span>
              )}
            </button>
          </div>

          {/* Hire Me CTA Button */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-3.5 xl:px-4 py-2 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-[0_0_20px_rgba(139,92,246,0.35)] hover:shadow-[0_0_25px_rgba(236,72,153,0.5)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
          >
            {t.nav.hireMe}
          </a>

          {/* Profile Avatar */}
          <a
            href="#about"
            title="Ayi Muhamad Nasrulloh"
            className="w-8 h-8 rounded-full bg-[#d0bcff] flex items-center justify-center flex-shrink-0 shadow-sm border border-[#a078ff] hover:ring-2 hover:ring-[#8B5CF6] transition-all"
          >
            <span className="material-symbols-outlined text-[#3c0091] text-[18px]">person</span>
          </a>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="lg:hidden w-9 h-9 rounded-lg bg-[#171b26] border border-[#262a35] flex items-center justify-center text-[#dfe2f1] hover:bg-[#262a35] transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#0f131d]/98 border-b border-[#262a35] px-4 pt-3 pb-6 flex flex-col gap-2 overflow-hidden shadow-2xl"
          >
            <div className="flex items-center justify-between pb-2.5 border-b border-[#262a35]/60 mb-1">
              <span className="font-mono text-xs text-[#06B6D4] font-semibold">{t.nav.navMenu}</span>
              
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#171b26] border border-[#262a35]">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
                  <span className="text-[10px] font-mono text-[#10B981] uppercase font-semibold">{t.nav.availableBadge}</span>
                </div>

                {/* Mobile Language Switcher */}
                <div className="flex items-center bg-[#171b26] p-0.5 rounded-lg border border-[#262a35]">
                  <button
                    onClick={() => setLanguage('id')}
                    type="button"
                    className={`px-2 py-0.5 text-xs font-mono font-semibold rounded-md transition-all flex items-center gap-1 ${
                      language === 'id'
                        ? 'bg-gradient-to-r from-[#8B5CF6] to-[#a078ff] text-white shadow-sm font-bold'
                        : 'text-[#cbc3d7] hover:text-white'
                    }`}
                  >
                    <span className="text-[12px]">🇮🇩</span>
                    <span>ID</span>
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    type="button"
                    className={`px-2 py-0.5 text-xs font-mono font-semibold rounded-md transition-all flex items-center gap-1 ${
                      language === 'en'
                        ? 'bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white shadow-sm font-bold'
                        : 'text-[#cbc3d7] hover:text-white'
                    }`}
                  >
                    <span className="text-[12px]">🇬🇧</span>
                    <span>EN</span>
                  </button>
                </div>
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
                className="flex-1 py-2 text-center rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white text-xs font-semibold whitespace-nowrap"
              >
                {t.nav.hireMe}
              </a>
              <a
                href={PERSONAL_INFO.cvUrl}
                download="CV_Ayi_Muhamad_Nasrulloh.pdf"
                className="px-3.5 py-2 rounded-lg bg-[#171b26] border border-[#262a35] text-xs font-medium text-[#d0bcff] hover:bg-[#262a35] flex items-center gap-1 whitespace-nowrap"
              >
                <span className="material-symbols-outlined text-[16px]">download</span>
                <span>{t.nav.downloadCv}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
