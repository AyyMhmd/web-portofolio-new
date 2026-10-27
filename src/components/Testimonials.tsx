import React from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const Testimonials: React.FC = () => {
  const quoteColors = ['text-[#8B5CF6]', 'text-[#EC4899]', 'text-[#06B6D4]', 'text-[#10B981]'];

  return (
    <section className="w-full bg-[#0a0e18] py-24 border-y border-[#171b26] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        {/* Section Header */}
        <ScrollReveal direction="up" threshold={0.2} className="flex flex-col items-center text-center gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-[#d0bcff]">
            What they Think?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#dfe2f1]">Testimonials</h2>
          <p className="text-sm sm:text-base text-[#cbc3d7] max-w-lg">
            Kesan dan ulasan rekan kolaborasi, mentor proyek, dan mitra institusi:
          </p>
        </ScrollReveal>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: idx * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-[#171b26] border border-[#262a35] hover:border-[#8B5CF6]/50 p-6 rounded-xl flex flex-col justify-between gap-6 shadow-lg hover:shadow-2xl transition-colors cursor-default"
            >
              <div className="flex flex-col gap-3">
                <span
                  className={`material-symbols-outlined text-[32px] opacity-80 ${
                    quoteColors[idx % quoteColors.length]
                  }`}
                >
                  format_quote
                </span>
                <p className="text-xs sm:text-sm text-[#cbc3d7] leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-[#262a35]/60">
                <div
                  className={`w-10 h-10 rounded-full ${item.bgColor} ${item.textColor} flex items-center justify-center font-bold text-sm shadow-sm flex-shrink-0`}
                >
                  {item.initial}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#dfe2f1]">{item.name}</p>
                  <p className="font-mono text-[10px] text-[#d0bcff] uppercase tracking-wider">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
