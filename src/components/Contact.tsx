import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate sending with realistic feedback
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="w-full py-24 relative overflow-hidden">
      {/* Ambient Highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] h-[34rem] bg-[#8B5CF6]/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-[#d0bcff]">
            What's next!
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#dfe2f1]">Get In Touch</h2>
          <p className="text-sm sm:text-base text-[#cbc3d7] max-w-md">
            Tertarik bekerja sama atau berdiskusi mengenai proyek web dan magang? Silakan kirimkan pesan, saya siap berdiskusi!
          </p>
        </div>

        {/* Modern Glass Form Card */}
        <div className="bg-[#171b26]/90 border border-[#262a35] backdrop-blur-xl p-6 sm:p-10 rounded-2xl shadow-2xl flex flex-col gap-6">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Name Input */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-name" className="font-mono text-xs text-[#dfe2f1]">
                  Name <span className="text-[#EC4899]">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="e.g. Alex Turner"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#1c1f2a] border border-[#262a35] text-[#dfe2f1] placeholder:text-[#958ea0]/60 focus:bg-[#262a35] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] transition-all text-sm font-sans"
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-email" className="font-mono text-xs text-[#dfe2f1]">
                  Email <span className="text-[#EC4899]">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#1c1f2a] border border-[#262a35] text-[#dfe2f1] placeholder:text-[#958ea0]/60 focus:bg-[#262a35] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] transition-all text-sm font-sans"
                />
              </div>
            </div>

            {/* Subject Input */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-subject" className="font-mono text-xs text-[#dfe2f1]">
                Subject <span className="text-[#EC4899]">*</span>
              </label>
              <input
                id="contact-subject"
                type="text"
                required
                placeholder="Front-End Developer Opportunity / Web Project"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-[#1c1f2a] border border-[#262a35] text-[#dfe2f1] placeholder:text-[#958ea0]/60 focus:bg-[#262a35] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] transition-all text-sm font-sans"
              />
            </div>

            {/* Message Textarea */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-message" className="font-mono text-xs text-[#dfe2f1]">
                Your Message <span className="text-[#EC4899]">*</span>
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                placeholder="Ceritakan detail proyek, posisi magang/pekerjaan, atau pertanyaan Anda..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-[#1c1f2a] border border-[#262a35] text-[#dfe2f1] placeholder:text-[#958ea0]/60 focus:bg-[#262a35] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] transition-all text-sm font-sans resize-none"
              />
            </div>

            {/* Submit Button & Security Indicator */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white text-sm font-semibold tracking-wide shadow-[0_0_24px_rgba(139,92,246,0.35)] hover:shadow-[0_0_32px_rgba(236,72,153,0.5)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70"
              >
                {status === 'sending' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Mengirimkan...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <span className="material-symbols-outlined text-[18px]">send</span>
                  </>
                )}
              </button>

              <div className="flex items-center gap-2 text-[#958ea0] font-mono text-[11px]">
                <span className="material-symbols-outlined text-[#10B981] text-[16px]">lock</span>
                <span>Encrypted • Direct Inbox Delivery</span>
              </div>
            </div>
          </form>

          {/* Success Feedback Banner */}
          {status === 'success' && (
            <div className="p-4 rounded-xl bg-[#262a35] border border-[#10B981]/50 flex items-center gap-3 animate-in fade-in duration-300">
              <span className="material-symbols-outlined text-[#10B981] text-[26px]">check_circle</span>
              <div>
                <p className="text-sm font-semibold text-[#dfe2f1]">Pesan Berhasil Terkirim!</p>
                <p className="text-xs text-[#cbc3d7]">
                  Terima kasih telah menghubungi. Ayi Muhamad akan merespons dalam 1x24 jam.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Quick Contact Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-center">
          <button
            onClick={copyEmail}
            type="button"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#171b26] hover:bg-[#262a35] border border-[#262a35] shadow-sm transition-all"
            title="Klik untuk salin email"
          >
            <span className="material-symbols-outlined text-[#8B5CF6] text-[18px]">
              {copiedEmail ? 'check' : 'mail'}
            </span>
            <span className="font-mono text-xs text-[#dfe2f1]">
              {copiedEmail ? 'Email Disalin!' : PERSONAL_INFO.email}
            </span>
          </button>

          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#171b26] hover:bg-[#262a35] border border-[#262a35] shadow-sm transition-all text-[#dfe2f1]"
          >
            <span className="material-symbols-outlined text-[#10B981] text-[18px]">chat_bubble</span>
            <span className="font-mono text-xs">WhatsApp: {PERSONAL_INFO.phone}</span>
          </a>

          <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#171b26] border border-[#262a35] shadow-sm">
            <span className="material-symbols-outlined text-[#06B6D4] text-[18px]">location_on</span>
            <span className="font-mono text-xs text-[#dfe2f1]">Tasikmalaya, ID (WIB GMT+7)</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#171b26] border border-[#262a35] shadow-sm">
            <span className="material-symbols-outlined text-[#EC4899] text-[18px]">coffee</span>
            <span className="font-mono text-xs text-[#dfe2f1]">Coffee &amp; Code Ready</span>
          </div>
        </div>
      </div>
    </section>
  );
};
