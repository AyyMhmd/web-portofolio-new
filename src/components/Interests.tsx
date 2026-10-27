import React from 'react';

export const Interests: React.FC = () => {
  const cards = [
    {
      icon: 'palette',
      iconColor: 'text-[#8B5CF6]',
      iconBg: 'bg-[#8B5CF6]/15',
      title: 'Designing',
      description:
        'Sangat menyukai perancangan antarmuka pengguna (UI/UX). Setiap kali melihat tampilan web yang kurang optimal, saya tertantang menjadikannya lebih estetik, rapi, dan mudah dipahami. Memperhatikan detail warna, micro-interactions, serta konsistensi visual di Figma.',
      tags: 'FIGMA • UI/UX • AESTHETICS & ACCESSIBILITY',
    },
    {
      icon: 'code',
      iconColor: 'text-[#06B6D4]',
      iconBg: 'bg-[#06B6D4]/15',
      title: 'Developing',
      description:
        'Setelah desain matang, saya menuangkannya ke dalam kode nyata. Membangun aplikasi web modern menggunakan React, JavaScript ES6+, dan arsitektur Single Page Application (SPA). Menulis kode yang bersih, modular, dan terstruktur sesuai standar industri.',
      tags: 'REACT • JAVASCRIPT • SPA • CLEAN CODE',
    },
    {
      icon: 'rocket_launch',
      iconColor: 'text-[#EC4899]',
      iconBg: 'bg-[#EC4899]/15',
      title: 'Expanding',
      description:
        'Melangkah lebih jauh dari sekadar tampilan statis. Mengintegrasikan API eksternal, otentikasi Supabase, backend Python Django / Laravel, optimasi performa web, hingga integrasi kecerdasan buatan berbasis computer vision seperti WebCam tracking pada e-Syarat.',
      tags: 'FULLSTACK • REST API • SUPABASE • AI TRACKING',
    },
  ];

  return (
    <section className="w-full bg-[#0a0e18] py-24 border-y border-[#171b26]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-[#d0bcff]">
            Interests
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#dfe2f1]">Things I Love</h2>
          <div className="w-14 h-1 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] rounded-full mt-1"></div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#171b26] border border-[#262a35] hover:border-[#8B5CF6]/50 rounded-xl p-6 flex flex-col gap-4 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 group"
            >
              <div
                className={`w-14 h-14 rounded-xl ${card.iconBg} flex items-center justify-center ${card.iconColor} shadow-inner group-hover:scale-110 transition-transform`}
              >
                <span className="material-symbols-outlined text-[30px]">{card.icon}</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#dfe2f1] group-hover:text-white transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-[#cbc3d7] leading-relaxed">
                  {card.description}
                </p>
              </div>
              <div className="mt-auto pt-3 border-t border-[#262a35]/60 flex items-center">
                <span className="font-mono text-[11px] font-semibold text-[#d0bcff] tracking-wider uppercase">
                  {card.tags}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
