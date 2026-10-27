import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface InitialLoaderProps {
  onComplete: () => void;
}

export const InitialLoader: React.FC<InitialLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);

  const logs = [
    'System init: AyiMN Portfolio...',
    'Loading React & UI components...',
    'Fetching experience & projects...',
    'Optimizing responsive layout...',
    'Portfolio ready! Launching...'
  ];

  useEffect(() => {
    // Progress counter animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        // Accelerate smoothly
        const increment = Math.max(1, Math.floor(Math.random() * 8) + 4);
        return Math.min(100, prev + increment);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    // Cycle log text based on progress
    if (progress < 25) setLogIndex(0);
    else if (progress < 50) setLogIndex(1);
    else if (progress < 75) setLogIndex(2);
    else if (progress < 95) setLogIndex(3);
    else setLogIndex(4);
  }, [progress]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.04,
        filter: 'blur(10px)',
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
      }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0e18] text-[#dfe2f1] select-none overflow-hidden"
    >
      {/* Background glowing orbs */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.2, 0.35, 0.2]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-96 h-96 rounded-full bg-[#8B5CF6]/20 blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-80 h-80 rounded-full bg-[#EC4899]/20 blur-[90px] pointer-events-none"
      />

      {/* Main Loader Content */}
      <div className="relative z-10 flex flex-col items-center px-6 max-w-md w-full">
        {/* Animated Monogram Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: -20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative mb-8"
        >
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#171b26] to-[#1c1f2a] border border-[#262a35] shadow-[0_0_40px_rgba(139,92,246,0.3)] flex items-center justify-center relative overflow-hidden group">
            {/* Shimmer sweep */}
            <motion.div
              animate={{ x: ['-100%', '200%'] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
              className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none"
            />
            <span className="font-mono text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] via-[#a078ff] to-[#EC4899]">
              &lt;AMN/&gt;
            </span>
          </div>

          {/* Pulse ring */}
          <motion.div
            animate={{ scale: [1, 1.35], opacity: [0.6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeOut' }}
            className="absolute inset-0 rounded-2xl border border-[#8B5CF6]/60 pointer-events-none"
          />
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-xl sm:text-2xl font-bold text-white tracking-tight text-center mb-1 font-sans"
        >
          Ayi Muhamad Nasrulloh
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="font-mono text-xs text-[#06B6D4] uppercase tracking-widest mb-6"
        >
          Frontend Web Developer
        </motion.p>

        {/* Progress Bar Container */}
        <div className="w-full bg-[#171b26] border border-[#262a35] rounded-full h-2 p-0.5 mb-3 overflow-hidden shadow-inner">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#06B6D4] shadow-[0_0_12px_rgba(139,92,246,0.8)]"
            style={{ width: `${progress}%` }}
            transition={{ ease: 'easeOut' }}
          />
        </div>

        {/* Status log & Percentage */}
        <div className="w-full flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-1.5 text-[#cbc3d7] overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
            <AnimatePresence mode="wait">
              <motion.span
                key={logIndex}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.15 }}
                className="text-[#958ea0]"
              >
                {logs[logIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <span className="text-[#d0bcff] font-bold ml-2">
            {progress}%
          </span>
        </div>

        {/* Quick Skip Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          onClick={onComplete}
          className="mt-6 text-[11px] font-mono text-[#958ea0] hover:text-[#dfe2f1] px-3 py-1 rounded-md hover:bg-[#171b26] transition-colors"
        >
          Skip Intro [ESC] &rarr;
        </motion.button>
      </div>
    </motion.div>
  );
};
