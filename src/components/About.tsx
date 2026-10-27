import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="w-full py-24 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        {/* Left: Visual & Profile Representation */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-full max-w-sm rounded-2xl overflow-hidden bg-[#171b26] p-2.5 border border-[#262a35] shadow-2xl group hover:border-[#8B5CF6]/50 transition-all">
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#1c1f2a]">
              <img
                src={PERSONAL_INFO.avatarImage}
                alt="Portrait of Ayi Muhamad Nasrulloh"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e18] via-transparent to-transparent opacity-85"></div>
              
              {/* Profile Card Footer */}
              <div className="absolute bottom-3 left-3 right-3 p-3 bg-[#262a35]/90 border border-[#353944] backdrop-blur-md rounded-lg flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-[#dfe2f1]">Ayi Muhamad Nasrulloh</p>
                  <p className="font-mono text-[11px] text-[#d0bcff]">S1 Informatika &amp; Front-End Dev</p>
                </div>
                <span className="material-symbols-outlined text-[#10B981] text-[22px] fill-1">verified</span>
              </div>
            </div>
          </div>

          {/* Floating Stat Pills */}
          <div className="grid grid-cols-3 gap-3 w-full max-w-sm mt-4">
            <div className="bg-[#262a35]/80 border border-[#353944] p-3 rounded-lg text-center shadow-sm hover:border-[#8B5CF6]/50 transition-colors">
              <p className="text-xl sm:text-2xl font-bold text-[#8B5CF6]">3.76</p>
              <p className="font-mono text-[11px] text-[#cbc3d7]">IPK S1 (STTC)</p>
            </div>
            <div className="bg-[#262a35]/80 border border-[#353944] p-3 rounded-lg text-center shadow-sm hover:border-[#06B6D4]/50 transition-colors">
              <p className="text-xl sm:text-2xl font-bold text-[#06B6D4]">6+</p>
              <p className="font-mono text-[11px] text-[#cbc3d7]">Live Projects</p>
            </div>
            <div className="bg-[#262a35]/80 border border-[#353944] p-3 rounded-lg text-center shadow-sm hover:border-[#EC4899]/50 transition-colors">
              <p className="text-xl sm:text-2xl font-bold text-[#EC4899]">5+</p>
              <p className="font-mono text-[11px] text-[#cbc3d7]">Sertifikat Dicoding</p>
            </div>
          </div>
        </div>

        {/* Right: Detailed Storytelling Copy */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs uppercase tracking-widest text-[#d0bcff]">
              But who am I?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#dfe2f1]">About Me</h2>
            <p className="text-sm text-[#cbc3d7] italic">My story in a nutshell ;)</p>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-[#cbc3d7] leading-relaxed">
            <p>
              Halo! Saya <span className="text-white font-semibold">Ayi Muhamad Nasrulloh</span>, lulusan S1 Informatika dari Sekolah Tinggi Teknologi Cipasung, Tasikmalaya dengan IPK <span className="text-[#d0bcff] font-semibold">3.76</span>. Saya memiliki fokus mendalam pada <span className="text-white font-semibold">Front-End Web Development</span> dan pembuatan antarmuka digital yang intuitif.
            </p>
            <p>
              Perjalanan profesional saya diperkuat melalui pengalaman sebagai <span className="text-[#10B981] font-semibold">Web Developer Intern di Dicoding Indonesia</span> (program MSIB Kampus Merdeka). Di sana, saya mendalami arsitektur Fullstack Web Development, Single Page Application (SPA), serta memimpin pengembangan proyek capstone inovatif <span className="text-[#d0bcff] font-semibold underline decoration-[#8B5CF6]">e-Syarat</span> (Web Pembelajaran Bahasa Isyarat berbasis WebCam Tracking).
            </p>
            <p>
              Sebelum berkecimpung di rekayasa perangkat lunak, saya mengawali pengalaman sebagai Teknisi Komputer di Daya Cipta Mandiri (2020), memberi saya fondasi troubleshooting perangkat keras dan sistem operasi yang solid. Filosofi koding saya sederhana: menghasilkan produk web yang tidak hanya indah secara estetika, namun juga cepat, rapi, aksesibel, dan bernilai guna bagi masyarakat.
            </p>
          </div>

          {/* Callout Banner to Dicoding MSIB */}
          <div className="bg-[#171b26] border border-[#262a35] rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-inner mt-2">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-lg bg-[#EC4899]/20 border border-[#EC4899]/30 flex items-center justify-center text-[#EC4899] flex-shrink-0">
                <span className="material-symbols-outlined text-[26px]">workspace_premium</span>
              </div>
              <div>
                <p className="text-sm sm:text-base font-semibold text-[#dfe2f1]">
                  Alumni MSIB Kampus Merdeka Dicoding
                </p>
                <p className="text-xs text-[#cbc3d7]">
                  Learning Path Fullstack Web Development &amp; Capstone Lead e-Syarat
                </p>
              </div>
            </div>
            <a
              href="#experience"
              className="px-4 py-2 rounded-lg bg-[#262a35] hover:bg-[#353944] text-[#dfe2f1] text-xs font-semibold transition-all flex items-center gap-1.5 shadow-sm whitespace-nowrap self-end sm:self-center"
            >
              <span>Lihat Detail</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={PERSONAL_INFO.cvUrl}
              download="CV_Ayi_Muhamad_Nasrulloh.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">download</span>
              <span>Unduh Curriculum Vitae (PDF)</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#171b26] hover:bg-[#262a35] border border-[#262a35] text-[#dfe2f1] text-xs sm:text-sm font-medium transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">hub</span>
              <span>Profil LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
