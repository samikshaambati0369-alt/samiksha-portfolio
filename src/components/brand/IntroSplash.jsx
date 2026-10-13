import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LogoMark from './LogoMark';
import SoundToggle from './SoundToggle';
import { playSound } from '../../utils/soundManager';

/**
 * IntroSplash.jsx
 * 4-Step Cinematic Introduction & Personal Logo Reveal for Samiksha Ambati.
 * Sequence:
 * Step 1: Initial black screen + expanding lime-green dot
 * Step 2: SA monogram reveal with clipping and settle animation
 * Step 3: Sequential brand reveal ("SAMIKSHA AMBATI" & "DEVELOPER PORTFOLIO — 2026")
 * Step 4: Cinematic circular mask transition into the white editorial portfolio
 */
export default function IntroSplash({ onComplete, forceShow = false }) {
  const [step, setStep] = useState(1); // 1: Dot, 2: Logo, 3: Brand, 4: Transition
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const isReducedMotion = useRef(false);

  useEffect(() => {
    // Check reduced motion preference
    if (typeof window !== 'undefined') {
      isReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    // Skip if already seen in current session, unless forceShow is true
    const seen = sessionStorage.getItem('samiksha_intro_seen');
    if (seen && !forceShow) {
      setIsFinished(true);
      if (onComplete) onComplete();
      return;
    }

    // Fast-path for reduced motion
    if (isReducedMotion.current) {
      sessionStorage.setItem('samiksha_intro_seen', 'true');
      const timer = setTimeout(() => {
        setIsFinished(true);
        if (onComplete) onComplete();
      }, 500);
      return () => clearTimeout(timer);
    }

    // Play initial intro sound
    playSound('intro');

    // Step 1 -> Step 2 (Logo Reveal at 600ms)
    const t1 = setTimeout(() => {
      setStep(2);
      playSound('logo');
    }, 600);

    // Step 2 -> Step 3 (Brand Reveal & Progress at 1200ms)
    const t2 = setTimeout(() => {
      setStep(3);
    }, 1200);

    // Progress counter (1200ms -> 2200ms)
    let count = 0;
    const progressInterval = setInterval(() => {
      count += 8;
      if (count >= 100) {
        setProgress(100);
        clearInterval(progressInterval);
      } else {
        setProgress(count);
      }
    }, 70);

    // Step 3 -> Step 4 (Cinematic Transition at 2300ms)
    const t3 = setTimeout(() => {
      setStep(4);
      playSound('transition');
    }, 2300);

    // Full finish & unmount at 2850ms
    const t4 = setTimeout(() => {
      sessionStorage.setItem('samiksha_intro_seen', 'true');
      setIsFinished(true);
      if (onComplete) onComplete();
    }, 2850);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearInterval(progressInterval);
    };
  }, [onComplete, forceShow]);

  const handleSkip = () => {
    sessionStorage.setItem('samiksha_intro_seen', 'true');
    setIsFinished(true);
    if (onComplete) onComplete();
  };

  const nameLetters = 'SAMIKSHA AMBATI'.split('');

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="cinematic-splash"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
            clipPath: 'circle(150% at 50% 50%)',
          }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[99999] bg-[#0A0A0A] text-white flex flex-col justify-between p-6 sm:p-12 select-none overflow-hidden"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(191,255,0,0.06)_0%,transparent_70%)] pointer-events-none" />

          {/* Top Bar: Live Status & Controls */}
          <div className="relative z-10 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2.5 text-white/60">
              <span className="w-2 h-2 rounded-full bg-[#BFFF00] ring-4 ring-[#BFFF00]/25 animate-pulse" />
              <span className="tracking-widest uppercase text-[11px] font-bold text-white/70">
                SYSTEM LAUNCH
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Sound Toggle available directly during splash */}
              <SoundToggle className="!bg-black/60 !border-white/20 !text-white text-[10px]" />

              {/* Skip Intro Button */}
              <button
                type="button"
                onClick={handleSkip}
                className="px-3 py-1.5 rounded-full border border-white/20 hover:border-white bg-white/5 hover:bg-white/15 text-white/80 hover:text-white text-[11px] font-mono font-bold uppercase tracking-wider transition-all"
                title="Skip introduction"
              >
                SKIP INTRO ✕
              </button>
            </div>
          </div>

          {/* Center Stage: Monogram & Brand Typography */}
          <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center space-y-6">
            {/* STEP 1: Central Expanding Lime Dot */}
            {step === 1 && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.8, 1], opacity: [0, 1, 0.8] }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="w-4 h-4 rounded-full bg-[#BFFF00] shadow-[0_0_24px_#BFFF00]"
              />
            )}

            {/* STEP 2: "SA" Monogram Reveal with Clipping Animation */}
            {step >= 2 && (
              <motion.div
                initial={{ scale: 0.82, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <LogoMark size="splash" theme="dark" animated={true} />
              </motion.div>
            )}

            {/* STEP 3 & 4: Sequential Name Reveal & Subtitle */}
            {step >= 3 && (
              <div className="space-y-3 pt-2">
                {/* Brand Name with Staggered Letter Mask */}
                <div className="overflow-hidden">
                  <motion.h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-display uppercase tracking-tight text-white leading-none">
                    {nameLetters.map((char, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.45,
                          delay: index * 0.025,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="inline-block"
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </motion.span>
                    ))}
                  </motion.h1>
                </div>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  transition={{ delay: 0.25, duration: 0.5 }}
                  className="text-xs sm:text-sm font-mono tracking-widest uppercase text-white/70"
                >
                  DEVELOPER PORTFOLIO — 2026
                </motion.p>
              </div>
            )}
          </div>

          {/* Bottom Bar: Progress Indicator */}
          <div className="relative z-10 space-y-3 max-w-md mx-auto w-full">
            <div className="flex items-center justify-between text-xs font-mono text-white/50">
              <span className="text-[11px] uppercase tracking-wider">INITIALIZING EXPERIENCES</span>
              <span className="font-bold text-[#BFFF00] tabular-nums font-mono">
                {progress}%
              </span>
            </div>

            {/* Lime Progress Line */}
            <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#BFFF00] shadow-[0_0_10px_#BFFF00]"
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
