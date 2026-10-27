import React, { useState } from 'react';
import { SKILLS_DATA } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'frontend' | 'backend'>('all');

  const filteredTechnologies =
    activeTab === 'frontend'
      ? SKILLS_DATA.frontend
      : activeTab === 'backend'
      ? SKILLS_DATA.backend
      : [...SKILLS_DATA.frontend, ...SKILLS_DATA.backend];

  return (
    <section id="skills" className="w-full bg-[#0a0e18] py-24 border-y border-[#171b26]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14">
        {/* Section Titles */}
        <div className="flex flex-col items-center text-center gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-[#d0bcff]">
            What do I know?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#dfe2f1]">Skills &amp; Tech Stack</h2>
          <p className="text-sm sm:text-base text-[#cbc3d7] max-w-lg">
            Berikut kumpulan teknologi, pustaka, dan bahasa pemrograman yang saya gunakan dalam merancang produk digital:
          </p>
        </div>

        {/* Category 1: Technologies & Frameworks */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
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
                className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                  activeTab === 'all'
                    ? 'bg-[#a078ff] text-[#340080] font-semibold shadow-sm'
                    : 'text-[#cbc3d7] hover:text-white'
                }`}
              >
                Semua ({SKILLS_DATA.frontend.length + SKILLS_DATA.backend.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('frontend')}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                  activeTab === 'frontend'
                    ? 'bg-[#a078ff] text-[#340080] font-semibold shadow-sm'
                    : 'text-[#cbc3d7] hover:text-white'
                }`}
              >
                Front-End ({SKILLS_DATA.frontend.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('backend')}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                  activeTab === 'backend'
                    ? 'bg-[#a078ff] text-[#340080] font-semibold shadow-sm'
                    : 'text-[#cbc3d7] hover:text-white'
                }`}
              >
                Back-End &amp; DB ({SKILLS_DATA.backend.length})
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {filteredTechnologies.map((tech, index) => (
              <div
                key={index}
                className="bg-[#171b26] hover:bg-[#1c1f2a] border border-[#262a35] hover:border-[#8B5CF6]/50 p-4 rounded-xl flex flex-col items-center justify-center gap-1.5 text-center transition-all shadow-md group hover:-translate-y-1"
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
              </div>
            ))}
          </div>
        </div>

        {/* Category 2: Tools Ayi Runs */}
        <div className="flex flex-col gap-5 pt-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#EC4899] text-[22px]">construction</span>
            <h3 className="text-lg sm:text-xl font-semibold text-[#dfe2f1]">
              Workflow Tools &amp; Ecosystem
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3.5 sm:gap-4">
            {SKILLS_DATA.tools.map((tool, index) => (
              <div
                key={index}
                className="bg-[#171b26] border border-[#262a35] hover:border-[#06B6D4]/50 p-4 rounded-xl flex flex-col items-center justify-center gap-2 shadow-sm text-center group hover:-translate-y-1 transition-all"
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
              </div>
            ))}
          </div>
        </div>

        {/* Category 3: Soft Skills & Mindset */}
        <div className="flex flex-col gap-4 pt-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#10B981] text-[22px]">psychology</span>
            <h3 className="text-lg sm:text-xl font-semibold text-[#dfe2f1]">
              Soft Skills &amp; Nilai Kerja
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SKILLS_DATA.softSkills.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#171b26]/80 border border-[#262a35] p-4 rounded-xl flex flex-col gap-2 hover:bg-[#1c1f2a] transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
                  <h4 className="text-sm font-semibold text-[#dfe2f1]">{item.title}</h4>
                </div>
                <p className="text-xs text-[#cbc3d7] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
