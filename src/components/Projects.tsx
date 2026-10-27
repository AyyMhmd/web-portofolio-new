import React, { useState } from 'react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'fullstack' | 'ai-iot'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  const getBadgeStyle = (color: Project['badgeColor']) => {
    switch (color) {
      case 'violet':
        return 'bg-[#8B5CF6]/90 text-white';
      case 'emerald':
        return 'bg-[#10B981]/90 text-white';
      case 'cyan':
        return 'bg-[#06B6D4]/90 text-white';
      case 'magenta':
        return 'bg-[#EC4899]/90 text-white';
      default:
        return 'bg-[#8B5CF6]/90 text-white';
    }
  };

  return (
    <section id="projects" className="w-full py-24 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-[#d0bcff]">
            What I've done?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#dfe2f1]">Featured Projects</h2>
          <p className="text-sm sm:text-base text-[#cbc3d7] max-w-lg">
            Kumpulan proyek pilihan mulai dari aplikasi web interaktif, Single Page Application, sistem informasi manajemen, hingga AI tracking:
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[
            { id: 'all', label: 'Semua Proyek' },
            { id: 'frontend', label: 'Front-End & SPA' },
            { id: 'fullstack', label: 'Fullstack Systems' },
            { id: 'ai-iot', label: 'AI & IoT' },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white font-semibold shadow-md'
                  : 'bg-[#171b26] hover:bg-[#262a35] text-[#cbc3d7] border border-[#262a35]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#171b26] border border-[#262a35] hover:border-[#8B5CF6]/50 rounded-xl overflow-hidden shadow-xl flex flex-col group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Thumbnail Container */}
              <div className="relative w-full aspect-[16/10] bg-[#1c1f2a] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3">
                  <span
                    className={`px-2.5 py-1 rounded-full font-mono text-[11px] uppercase font-semibold shadow-sm ${getBadgeStyle(
                      project.badgeColor
                    )}`}
                  >
                    {project.badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 gap-4">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-[#dfe2f1] group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <span className="font-mono text-xs text-[#06B6D4]">{project.version}</span>
                  </div>
                  <p className="text-xs font-medium text-[#d0bcff]">{project.subtitle}</p>
                  <p className="text-xs sm:text-sm text-[#cbc3d7] leading-relaxed mt-1">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                  {project.tags.slice(0, 4).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-[#1c1f2a] border border-[#262a35] font-mono text-[11px] text-[#d0bcff]"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-0.5 rounded bg-[#1c1f2a] border border-[#262a35] font-mono text-[11px] text-[#958ea0]">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="pt-3 border-t border-[#262a35] flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    type="button"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#a078ff] text-[#340080] text-xs font-semibold hover:bg-[#d0bcff] transition-all shadow-sm"
                  >
                    <span>Detail Proyek</span>
                    <span className="material-symbols-outlined text-[16px]">visibility</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub Repo"
                        title="GitHub Repository"
                        className="p-2 rounded-lg bg-[#262a35] hover:bg-[#353944] text-[#dfe2f1] transition-colors"
                      >
                        <span className="material-symbols-outlined text-[18px]">code</span>
                      </a>
                    )}
                    <span className="font-mono text-[11px] text-[#10B981] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                      CV Verified
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Project Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
