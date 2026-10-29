import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState(false);

  const codeSnippet = `const developer = {
  name: 'Ayi Muhamad Nasrulloh',
  role: 'Front-End Web Developer',
  education: 'S1 Informatika (STT Cipasung)',
  gpa: 3.76,
  internship: 'Dicoding Indonesia (MSIB)',
  focus: ['React & SPA', 'JavaScript ES6+', 'UI/UX & Clean Code'],
  journey: {
    start: 2020,
    origin: 'Computer Hardware Tech',
    evolution: 'Front-End & Fullstack Web'
  },
  availableForHire: true,
  fuel: '☕ Passion & Code'
};

// System ready to deploy
export default developer;`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="home" className="relative w-full pt-28 lg:pt-36 pb-20 overflow-hidden">
      {/* Dynamic Ambient Glow Backdrops */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 left-1/4 w-80 sm:w-96 h-80 sm:h-96 bg-[#8B5CF6]/20 rounded-full blur-3xl pointer-events-none -z-10"
      />
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-64 right-10 w-80 sm:w-[30rem] h-80 sm:h-[30rem] bg-[#EC4899]/20 rounded-full blur-3xl pointer-events-none -z-10"
      />
      <div className="absolute top-[800px] left-10 w-80 h-80 bg-[#06B6D4]/15 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Narrative / Header Info */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5">
            {/* Status & Badge Ribbon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap items-center gap-2.5"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#262a35] border border-[#313540] shadow-inner">
                <span className="font-mono text-xs font-semibold text-[#d0bcff] uppercase tracking-wider">
                  Halo, Saya
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171b26] border border-[#262a35] shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-ping"></span>
                <span className="font-mono text-xs font-semibold text-[#06B6D4] uppercase tracking-wider">
                  Frontend Web Developer
                </span>
              </div>
            </motion.div>

            {/* Hero Headline */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col"
            >
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-[#dfe2f1] leading-[1.15]">
                Ayi <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#a078ff] to-[#EC4899]">Muhamad</span>
              </h1>
              <p className="font-mono text-xs sm:text-sm text-[#d0bcff] mt-2 flex flex-wrap items-center gap-2">
                <span className="text-[#8B5CF6] font-semibold">&lt;code&gt;</span>
                Crafting interactive web real estate with passion
                <span className="text-[#EC4899] font-semibold">&lt;/code&gt;</span>
              </p>
            </motion.div>

            {/* Description Paragraph based on CV */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-[#cbc3d7] max-w-xl leading-relaxed"
            >
              Lulusan S1 Informatika Sekolah Tinggi Teknologi Cipasung dengan IPK <span className="text-white font-semibold underline decoration-[#8B5CF6] decoration-2 underline-offset-4">3.76</span> dan Alumni Web Developer Intern di <span className="text-white font-semibold">Dicoding Indonesia</span> (MSIB). Berpengalaman membangun antarmuka web interaktif, cepat, rapi, dan responsif dengan React, modern JavaScript, serta integrasi RESTful API.
            </motion.p>

            {/* CTA Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white text-sm sm:text-base font-semibold tracking-wide shadow-[0_0_24px_rgba(139,92,246,0.35)] hover:shadow-[0_0_32px_rgba(236,72,153,0.5)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                <span>Contact Me</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#262a35] hover:bg-[#313540] border border-[#353944] text-[#dfe2f1] text-sm sm:text-base font-medium transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <span>View Portfolio</span>
                <span className="material-symbols-outlined text-[18px] text-[#d0bcff]">arrow_forward</span>
              </a>

              <a
                href={PERSONAL_INFO.cvUrl}
                download="CV_Ayi_Muhamad_Nasrulloh.pdf"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-[#171b26] hover:bg-[#262a35] border border-[#262a35] text-[#d0bcff] text-sm font-medium transition-all hover:-translate-y-0.5"
                title="Download Curriculum Vitae PDF"
              >
                <span className="material-symbols-outlined text-[18px]">description</span>
                <span>Download CV</span>
              </a>
            </motion.div>

            {/* Social Badges Row */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-2.5 pt-2"
            >
              <span className="font-mono text-xs text-[#958ea0] uppercase mr-1 tracking-wider">Signals:</span>
              
              {/* GitHub */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                title="GitHub: AyyMhmd"
                className="p-2.5 rounded-lg bg-[#1c1f2a] hover:bg-[#353944] border border-[#262a35] text-[#cbc3d7] hover:text-white transition-all shadow-sm hover:scale-105 hover:border-white/20 flex items-center justify-center"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                title="LinkedIn: Ayi Muhamad Nasrulloh"
                className="p-2.5 rounded-lg bg-[#1c1f2a] hover:bg-[#0077b5]/20 border border-[#262a35] text-[#cbc3d7] hover:text-[#0077b5] hover:border-[#0077b5]/50 transition-all shadow-sm hover:scale-105 flex items-center justify-center"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46v-8.37M7.84 6.88a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Direct Email"
                title={`Email: ${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-lg bg-[#1c1f2a] hover:bg-[#06B6D4]/20 border border-[#262a35] text-[#cbc3d7] hover:text-[#06B6D4] hover:border-[#06B6D4]/50 transition-all shadow-sm hover:scale-105 flex items-center justify-center"
              >
                <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right Code Terminal Mockup Card */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="w-full max-w-lg bg-[#171b26]/95 border border-[#262a35] hover:border-[#8B5CF6]/50 transition-colors rounded-xl shadow-2xl p-5 relative overflow-hidden backdrop-blur-md">
              {/* Terminal Titlebar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#262a35]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ffb4ab]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#aa0266]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#10B981]"></span>
                  <span className="ml-2 font-mono text-xs text-[#958ea0]">developer_config.ts</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyCode}
                    type="button"
                    title="Copy code"
                    className="p-1 rounded bg-[#1c1f2a] hover:bg-[#262a35] text-[#958ea0] hover:text-white transition-colors text-xs font-mono flex items-center gap-1 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[14px]">
                      {copiedCode ? 'check' : 'content_copy'}
                    </span>
                    <span className="hidden sm:inline">{copiedCode ? 'Copied' : 'Copy'}</span>
                  </button>
                  <span className="font-mono text-[11px] text-[#10B981] bg-[#1c1f2a] border border-[#10B981]/30 px-2 py-0.5 rounded">
                    active
                  </span>
                </div>
              </div>

              {/* Code Body */}
              <pre className="font-mono text-xs sm:text-[13px] text-[#dfe2f1] leading-relaxed overflow-x-auto space-y-1">
                <code>
                  <span className="text-[#EC4899]">const</span> developer = &#123;{'\n'}
                  {'  '}<span className="text-[#d0bcff]">name</span>: <span className="text-[#10B981]">'Ayi Muhamad Nasrulloh'</span>,{'\n'}
                  {'  '}<span className="text-[#d0bcff]">role</span>: <span className="text-[#10B981]">'Front-End Web Developer'</span>,{'\n'}
                  {'  '}<span className="text-[#d0bcff]">education</span>: <span className="text-[#06B6D4]">'S1 Informatika, STT Cipasung'</span>,{'\n'}
                  {'  '}<span className="text-[#d0bcff]">gpa</span>: <span className="text-[#ffb0cd]">3.76</span>,{'\n'}
                  {'  '}<span className="text-[#d0bcff]">internship</span>: <span className="text-[#10B981]">'Dicoding Indonesia (MSIB)'</span>,{'\n'}
                  {'  '}<span className="text-[#d0bcff]">focus</span>: [<span className="text-[#06B6D4]">'React & SPA'</span>, <span className="text-[#06B6D4]">'UI/UX & Clean Code'</span>],{'\n'}
                  {'  '}<span className="text-[#d0bcff]">journey</span>: &#123;{'\n'}
                  {'    '}<span className="text-[#958ea0]">start</span>: <span className="text-[#ffb0cd]">2020</span>,{'\n'}
                  {'    '}<span className="text-[#958ea0]">origin</span>: <span className="text-[#10B981]">'Computer Hardware Tech'</span>,{'\n'}
                  {'    '}<span className="text-[#958ea0]">evolution</span>: <span className="text-[#10B981]">'Front-End & Fullstack'</span>{'\n'}
                  {'  '}&#125;,{'\n'}
                  {'  '}<span className="text-[#d0bcff]">availableForHire</span>: <span className="text-[#8B5CF6]">true</span>,{'\n'}
                  {'  '}<span className="text-[#d0bcff]">fuel</span>: <span className="text-[#10B981]">'☕ Passion & Clean Code'</span>{'\n'}
                  &#125;;{'\n\n'}
                  <span className="text-[#958ea0]">// System ready to deploy</span>{'\n'}
                  <span className="text-[#8B5CF6]">export default</span> developer;
                </code>
              </pre>

              {/* Micro Analytics Badge */}
              <div className="mt-4 pt-3 border-t border-[#262a35] flex items-center justify-between bg-[#262a35]/60 rounded-lg px-3 py-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#8B5CF6] text-[18px]">verified</span>
                  <span className="font-mono text-xs text-[#cbc3d7]">Production-Ready Build</span>
                </div>
                <span className="font-mono text-xs font-semibold text-[#10B981]">100% Responsive</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
