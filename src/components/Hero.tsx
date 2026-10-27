import React, { useState } from 'react';
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
      {/* Dynamic Ambient Glow Backdrops from reference */}
      <div className="absolute top-10 left-1/4 w-80 sm:w-96 h-80 sm:h-96 bg-[#8B5CF6]/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute top-64 right-10 w-80 sm:w-[30rem] h-80 sm:h-[30rem] bg-[#EC4899]/15 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-[800px] left-10 w-80 h-80 bg-[#06B6D4]/15 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Narrative / Header Info */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5">
            {/* Status & Badge Ribbon */}
            <div className="flex flex-wrap items-center gap-2.5">
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
            </div>

            {/* Hero Headline */}
            <div className="flex flex-col">
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-[#dfe2f1] leading-[1.15]">
                Ayi <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#a078ff] to-[#EC4899]">Muhamad</span>
              </h1>
              <p className="font-mono text-xs sm:text-sm text-[#d0bcff] mt-2 flex flex-wrap items-center gap-2">
                <span className="text-[#8B5CF6] font-semibold">&lt;code&gt;</span>
                Crafting interactive web real estate with passion
                <span className="text-[#EC4899] font-semibold">&lt;/code&gt;</span>
              </p>
            </div>

            {/* Description Paragraph based on CV */}
            <p className="text-base sm:text-lg text-[#cbc3d7] max-w-xl leading-relaxed">
              Lulusan S1 Informatika Sekolah Tinggi Teknologi Cipasung dengan IPK <span className="text-white font-semibold underline decoration-[#8B5CF6] decoration-2 underline-offset-4">3.76</span> dan Alumni Web Developer Intern di <span className="text-white font-semibold">Dicoding Indonesia</span> (MSIB). Berpengalaman membangun antarmuka web interaktif, cepat, rapi, dan responsif dengan React, modern JavaScript, serta integrasi RESTful API.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white text-sm sm:text-base font-semibold tracking-wide shadow-[0_0_24px_rgba(139,92,246,0.35)] hover:shadow-[0_0_32px_rgba(236,72,153,0.5)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                <span>Contact Me</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#262a35] hover:bg-[#313540] border border-[#353944] text-[#dfe2f1] text-sm sm:text-base font-medium transition-all shadow-sm hover:shadow-md"
              >
                <span>View Portfolio</span>
                <span className="material-symbols-outlined text-[18px] text-[#d0bcff]">arrow_forward</span>
              </a>

              <a
                href={PERSONAL_INFO.cvUrl}
                download="CV_Ayi_Muhamad_Nasrulloh.pdf"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-[#171b26] hover:bg-[#262a35] border border-[#262a35] text-[#d0bcff] text-sm font-medium transition-all"
                title="Download Curiculum Vitae PDF"
              >
                <span className="material-symbols-outlined text-[18px]">description</span>
                <span>Download CV</span>
              </a>
            </div>

            {/* Social Badges Row */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="font-mono text-xs text-[#958ea0] uppercase mr-1 tracking-wider">Signals:</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                title="GitHub: AyyMhmd"
                className="p-2.5 rounded-lg bg-[#1c1f2a] hover:bg-[#353944] border border-[#262a35] text-[#cbc3d7] hover:text-white transition-all shadow-sm"
              >
                <span className="material-symbols-outlined text-[20px]">terminal</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                title="LinkedIn: Ayi Muhamad Nasrulloh"
                className="p-2.5 rounded-lg bg-[#1c1f2a] hover:bg-[#353944] border border-[#262a35] text-[#cbc3d7] hover:text-[#d0bcff] transition-all shadow-sm"
              >
                <span className="material-symbols-outlined text-[20px]">hub</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Direct Email"
                title={PERSONAL_INFO.email}
                className="p-2.5 rounded-lg bg-[#1c1f2a] hover:bg-[#353944] border border-[#262a35] text-[#cbc3d7] hover:text-[#06B6D4] transition-all shadow-sm"
              >
                <span className="material-symbols-outlined text-[20px]">alternate_email</span>
              </a>
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Contact"
                title="WhatsApp: 081949949417"
                className="p-2.5 rounded-lg bg-[#1c1f2a] hover:bg-[#353944] border border-[#262a35] text-[#cbc3d7] hover:text-[#10B981] transition-all shadow-sm"
              >
                <span className="material-symbols-outlined text-[20px]">chat_bubble</span>
              </a>
              <a
                href="#projects"
                aria-label="Featured Code Projects"
                title="6+ Projects"
                className="p-2.5 rounded-lg bg-[#1c1f2a] hover:bg-[#353944] border border-[#262a35] text-[#cbc3d7] hover:text-[#EC4899] transition-all shadow-sm"
              >
                <span className="material-symbols-outlined text-[20px]">code</span>
              </a>
            </div>
          </div>

          {/* Right Code Terminal Mockup Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-lg bg-[#171b26]/95 border border-[#262a35] rounded-xl shadow-2xl p-5 relative overflow-hidden backdrop-blur-md">
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
                    className="p-1 rounded bg-[#1c1f2a] hover:bg-[#262a35] text-[#958ea0] hover:text-white transition-colors text-xs font-mono flex items-center gap-1"
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
          </div>
        </div>
      </div>
    </section>
  );
};
