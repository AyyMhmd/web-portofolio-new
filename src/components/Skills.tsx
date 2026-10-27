import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILLS_DATA } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'frontend' | 'backend'>('all');

  const filteredTechnologies =
    activeTab === 'frontend'
      ? SKILLS_DATA.frontend
      : activeTab === 'backend'
      ? SKILLS_DATA.backend
      : [...SKILLS_DATA.frontend, ...SKILLS_DATA.backend];

  return (
    <section id="skills" className="w-full bg-[#0a0e18] py-24 border-y border-[#171b26] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14">
        {/* Section Titles */}
        <ScrollReveal direction="up" threshold={0.2} className="flex flex-col items-center text-center gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-[#d0bcff]">
            What do I know?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#dfe2f1]">Skills &amp; Tech Stack</h2>
          <p className="text-sm sm:text-base text-[#cbc3d7] max-w-lg">
            Berikut kumpulan teknologi, pustaka, dan bahasa pemrograman yang saya gunakan dalam merancang produk digital:
          </p>
        </ScrollReveal>

        {/* Category 1: Technologies & Frameworks */}
        <div className="flex flex-col gap-5">
          <ScrollReveal direction="up" className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#8B5CF6] text-[22px]">layers</span>
              <h3 className="text-lg sm:text-xl font-semibold text-[#dfe2f1]">
                Technologies &amp; Frameworks
              </h3>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 bg-[#171b26] p-1 rounded-lg border border-[#262a35]">
              <button
                type="button"
                onClick={() => setActiveTab('all')}
                className={`relative px-3 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                  activeTab === 'all'
                    ? 'text-[#340080] font-semibold'
                    : 'text-[#cbc3d7] hover:text-white'
                }`}
              >
                {activeTab === 'all' && (
                  <motion.div
                    layoutId="skillsTabBadge"
                    className="absolute inset-0 bg-[#a078ff] rounded-md -z-10 shadow-sm"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                Semua ({SKILLS_DATA.frontend.length + SKILLS_DATA.backend.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('frontend')}
                className={`relative px-3 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                  activeTab === 'frontend'
                    ? 'text-[#340080] font-semibold'
                    : 'text-[#cbc3d7] hover:text-white'
                }`}
              >
                {activeTab === 'frontend' && (
                  <motion.div
                    layoutId="skillsTabBadge"
                    className="absolute inset-0 bg-[#a078ff] rounded-md -z-10 shadow-sm"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                Front-End ({SKILLS_DATA.frontend.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('backend')}
                className={`relative px-3 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                  activeTab === 'backend'
                    ? 'text-[#340080] font-semibold'
                    : 'text-[#cbc3d7] hover:text-white'
                }`}
              >
                {activeTab === 'backend' && (
                  <motion.div
                    layoutId="skillsTabBadge"
                    className="absolute inset-0 bg-[#a078ff] rounded-md -z-10 shadow-sm"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                Back-End &amp; DB ({SKILLS_DATA.backend.length})
              </button>
            </div>
          </ScrollReveal>

          <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
            <AnimatePresence mode="popLayout">
              {filteredTechnologies.map((tech) => (
                <motion.div
                  layout
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.25 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-[#171b26] hover:bg-[#1c1f2a] border border-[#262a35] hover:border-[#8B5CF6]/50 p-4 rounded-xl flex flex-col items-center justify-center gap-1.5 text-center shadow-md group cursor-default transition-colors"
                >
                  <span
                    className="font-mono text-xl sm:text-2xl font-bold tracking-tight"
                    style={{ color: tech.color }}
                  >
                    {tech.name}
                  </span>
                  <span className="text-xs text-[#cbc3d7] group-hover:text-white transition-colors">
                    {tech.subtitle}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Category 2: Tools Ayi Runs */}
        <div className="flex flex-col gap-5 pt-4">
          <ScrollReveal direction="up" className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#EC4899] text-[22px]">construction</span>
            <h3 className="text-lg sm:text-xl font-semibold text-[#dfe2f1]">
              Workflow Tools &amp; Ecosystem
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3.5 sm:gap-4">
            {SKILLS_DATA.tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-[#171b26] border border-[#262a35] hover:border-[#06B6D4]/50 p-4 rounded-xl flex flex-col items-center justify-center gap-2 shadow-sm text-center group cursor-default transition-colors"
              >
                <span
                  className="material-symbols-outlined text-[28px] group-hover:scale-110 transition-transform"
                  style={{ color: tool.color }}
                >
                  {tool.icon}
                </span>
                <span className="text-sm font-semibold text-[#dfe2f1] group-hover:text-white">
                  {tool.name}
                </span>
                <span className="font-mono text-[11px] text-[#958ea0]">{tool.subtitle}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Category 3: Soft Skills & Mindset */}
        <div className="flex flex-col gap-4 pt-4">
          <ScrollReveal direction="up" className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#10B981] text-[22px]">psychology</span>
            <h3 className="text-lg sm:text-xl font-semibold text-[#dfe2f1]">
              Soft Skills &amp; Nilai Kerja
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SKILLS_DATA.softSkills.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: idx * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="bg-[#171b26]/80 border border-[#262a35] hover:border-[#10B981]/50 p-4 rounded-xl flex flex-col gap-2 hover:bg-[#1c1f2a] transition-colors cursor-default"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
                  <h4 className="text-sm font-semibold text-[#dfe2f1]">{item.title}</h4>
                </div>
                <p className="text-xs text-[#cbc3d7] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
