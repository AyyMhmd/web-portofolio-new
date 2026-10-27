import React from 'react';
import { EXPERIENCES, CERTIFICATIONS, PERSONAL_INFO } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="w-full bg-[#0a0e18] py-24 border-y border-[#171b26]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-[#d0bcff]">
            Education &amp; Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#dfe2f1]">
            Pendidikan &amp; Pengalaman
          </h2>
          <p className="text-sm sm:text-base text-[#cbc3d7] max-w-lg">
            Rekam jejak akademis S1 Informatika, program magang industri MSIB Dicoding, dan lisensi kompetensi web terverifikasi:
          </p>
        </div>

        {/* Education & Experience Timeline */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#8B5CF6] text-[22px]">school</span>
            <h3 className="text-xl font-bold text-[#dfe2f1]">Pendidikan &amp; Pengalaman Kerja</h3>
          </div>

          <div className="space-y-6">
            {/* Education Card */}
            <div className="bg-[#171b26] border border-[#06B6D4]/40 shadow-[0_0_20px_rgba(6,182,212,0.12)] rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#06B6D4]/15 border border-[#06B6D4]/30 flex items-center justify-center text-[#06B6D4] flex-shrink-0">
                  <span className="material-symbols-outlined text-[28px]">school</span>
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-base sm:text-lg font-bold text-white">
                      Sekolah Tinggi Teknologi Cipasung, Tasikmalaya
                    </h4>
                    <span className="px-2 py-0.5 rounded-full bg-[#06B6D4]/20 border border-[#06B6D4]/40 text-[#06B6D4] font-mono text-[10px] uppercase font-semibold">
                      Pendidikan Formal
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#cbc3d7] mt-0.5">
                    S1 Informatika (2022 - 2026) • Fokus Front-End Web Development
                  </p>
                  <p className="font-mono text-xs text-[#10B981] font-semibold mt-1">
                    Indeks Prestasi Kumulatif (IPK): 3.76 / 4.00 (Cum Laude Track)
                  </p>
                </div>
              </div>
              <div className="px-3.5 py-1.5 rounded-lg bg-[#262a35] border border-[#353944] text-xs font-mono text-[#d0bcff] self-end sm:self-center">
                Akademik Unggul
              </div>
            </div>

            {/* Experience Cards */}
            {EXPERIENCES.map((exp, idx) => (
              <div
                key={idx}
                className={`bg-[#171b26] border ${
                  exp.featured ? 'border-[#8B5CF6]/40 shadow-[0_0_20px_rgba(139,92,246,0.15)]' : 'border-[#262a35]'
                } rounded-xl p-6 flex flex-col gap-4 transition-all hover:border-[#8B5CF6]/60`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#262a35] pb-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-lg sm:text-xl font-bold text-white">{exp.role}</h4>
                      {exp.featured && (
                        <span className="px-2 py-0.5 rounded-full bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 text-[#d0bcff] font-mono text-[10px] uppercase font-semibold">
                          Featured Internship
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-[#06B6D4] mt-0.5">
                      {exp.company} <span className="text-[#958ea0] font-normal">• {exp.location}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2 self-start sm:self-center">
                    <span className="px-3 py-1 rounded-md bg-[#1c1f2a] border border-[#262a35] font-mono text-xs text-[#d0bcff]">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-[#cbc3d7]">
                  {exp.description.map((desc, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2 leading-relaxed">
                      <span className="material-symbols-outlined text-[#10B981] text-[18px] mt-0.5 flex-shrink-0">
                        arrow_right
                      </span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#262a35]/60">
                  {exp.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded bg-[#1c1f2a] border border-[#262a35] font-mono text-[11px] text-[#cbc3d7]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Shelf */}
        <div className="flex flex-col gap-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#EC4899] text-[22px]">verified</span>
              <h3 className="text-xl font-bold text-[#dfe2f1]">
                Sertifikasi Dicoding Indonesia
              </h3>
            </div>
            <a
              href="https://www.dicoding.com"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-[#d0bcff] hover:text-white flex items-center gap-1 font-mono transition-colors"
            >
              <span>Profil Dicoding (Seluruh Sertifikat)</span>
              <span className="material-symbols-outlined text-[14px]">open_in_new</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CERTIFICATIONS.map((cert, idx) => (
              <div
                key={idx}
                className="bg-[#171b26] border border-[#262a35] hover:border-[#10B981]/50 p-5 rounded-xl flex flex-col justify-between gap-3 shadow-md hover:shadow-xl transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded bg-[#10B981]/15 text-[#10B981] font-mono text-[10px] font-semibold uppercase">
                      Terverifikasi
                    </span>
                    <span className="font-mono text-xs text-[#958ea0]">{cert.date}</span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-[#dfe2f1] group-hover:text-white transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-[#06B6D4] font-medium mt-0.5">{cert.issuer}</p>
                </div>

                <div className="pt-2 border-t border-[#262a35]/60">
                  <p className="font-mono text-[11px] text-[#958ea0] mb-1.5">Kompetensi Inti:</p>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded bg-[#1c1f2a] font-mono text-[10px] text-[#cbc3d7]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
