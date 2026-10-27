import React from 'react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#171b26] border border-[#262a35] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image & Close Button */}
        <div className="relative w-full h-52 sm:h-64 bg-[#1c1f2a] overflow-hidden flex-shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171b26] via-[#171b26]/30 to-transparent"></div>

          <button
            onClick={onClose}
            type="button"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors border border-white/10"
            aria-label="Tutup modal"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>

          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
            <div>
              <span className="px-2.5 py-0.5 rounded-full bg-[#8B5CF6]/90 text-white font-mono text-[11px] font-semibold uppercase tracking-wider">
                {project.badge}
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">{project.title}</h3>
              <p className="text-xs text-[#cbc3d7]">{project.subtitle}</p>
            </div>
            <span className="font-mono text-xs text-[#06B6D4] bg-[#1c1f2a] px-2.5 py-1 rounded-md border border-[#262a35]">
              {project.version}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm text-[#cbc3d7]">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#d0bcff] mb-1.5">
              Deskripsi Proyek
            </h4>
            <p className="leading-relaxed text-sm text-[#dfe2f1]">{project.longDescription}</p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#06B6D4] mb-2">
              Fitur Utama &amp; Implementasi
            </h4>
            <ul className="space-y-1.5">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#cbc3d7]">
                  <span className="material-symbols-outlined text-[#10B981] text-[16px] mt-0.5 flex-shrink-0">
                    check_circle
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#EC4899] mb-2">
              Teknologi yang Digunakan
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-[#1c1f2a] border border-[#262a35] font-mono text-xs text-[#d0bcff]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-[#262a35] bg-[#171b26] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 text-xs text-[#10B981] font-mono">
            <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
            <span>Tercatat dalam CV Resmi</span>
          </div>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#262a35] hover:bg-[#353944] text-[#dfe2f1] text-xs font-semibold transition-all"
              >
                <span className="material-symbols-outlined text-[16px]">code</span>
                <span>GitHub Repo</span>
              </a>
            )}
            <button
              onClick={onClose}
              type="button"
              className="px-4 py-2 rounded-lg bg-[#8B5CF6] hover:bg-[#7c4ae6] text-white text-xs font-semibold transition-all"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
