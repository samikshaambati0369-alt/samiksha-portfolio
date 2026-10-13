import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Check if user already saw preloader in this session
    const hasSeen = sessionStorage.getItem('samiksha_preloader_seen');
    if (hasSeen) {
      setIsFinished(true);
      if (onComplete) onComplete();
      return;
    }

    // Fast, elegant 0 -> 100 counting interval (~1.1s total)
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 8) + 4;
      if (current >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(interval);
        setTimeout(() => {
          sessionStorage.setItem('samiksha_preloader_seen', 'true');
          setIsFinished(true);
          if (onComplete) onComplete();
        }, 350);
      } else {
        setProgress(current);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[99999] bg-[#0A0A0A] text-white flex flex-col justify-between p-8 sm:p-14 select-none"
        >
          {/* Top Label */}
          <div className="flex items-center justify-between text-xs font-mono text-white/50">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#BFFF00] animate-pulse" />
              <span className="tracking-widest uppercase">INITIALIZING SYSTEM</span>
            </div>
            <span className="tracking-widest font-mono">PORTFOLIO — 2026</span>
          </div>

          {/* Center Brand Typographic Reveal */}
          <div className="space-y-4 my-auto">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-display uppercase tracking-tight leading-none text-white"
              >
                SAMIKSHA<br />
                <span className="text-[#BFFF00]">AMBATI</span>
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xs sm:text-sm font-mono text-white/60 tracking-wider uppercase"
            >
              COMPUTER SCIENCE & ENGINEERING • VBIT HYDERABAD
            </motion.p>
          </div>

          {/* Bottom Minimal Progress Indicator */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-white/40">LOADING ARTIFACTS & EXPERIENCES</span>
              <span className="font-bold text-[#BFFF00] tabular-nums font-mono text-sm">
                {progress.toString().padStart(2, '0')}%
              </span>
            </div>

            {/* Lime Progress Line */}
            <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#BFFF00] shadow-[0_0_12px_#BFFF00]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
