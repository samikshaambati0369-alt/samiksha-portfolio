import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import { playSplashSound, playSound } from '../../utils/sound';
import { Sparkles, Terminal, Volume2, ArrowRight, Monitor, LayoutGrid } from 'lucide-react';

export default function SplashScreen({ onFinish, onSelectMode }) {
  const [bootStep, setBootStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  const bootLogs = [
    'Initializing SamikshaOS Neural Kernel v2.4...',
    'Mounting VBIT Hyderabad Academic Modules (CGPA 7.56)...',
    'Ingesting FinTrack, VoxShield AI & AegisZero Agent Pipeline...',
    'Calibrating Hyderabad (IST) Telemetry & Web Audio Engine...',
    'System Authenticated. Welcome to Samiksha Ambati\'s Portfolio.',
  ];

  // Play splash sound on mount
  useEffect(() => {
    // Attempt auto-play sound
    const timer = setTimeout(() => {
      playSplashSound();
    }, 150);

    // Step progression
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 4;
        if (next >= 100) {
          clearInterval(interval);
          return 100;
        }
        return next;
      });
    }, 45);

    const logTimer1 = setTimeout(() => setBootStep(1), 500);
    const logTimer2 = setTimeout(() => setBootStep(2), 1100);
    const logTimer3 = setTimeout(() => setBootStep(3), 1600);
    const logTimer4 = setTimeout(() => setBootStep(4), 2100);

    // Auto finish after 3.5s if not manually clicked
    const autoFinishTimer = setTimeout(() => {
      onFinish();
    }, 3800);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
      clearTimeout(logTimer1);
      clearTimeout(logTimer2);
      clearTimeout(logTimer3);
      clearTimeout(logTimer4);
      clearTimeout(autoFinishTimer);
    };
  }, [onFinish]);

  const handleLaunch = (mode = 'desktop') => {
    playSound('open');
    if (onSelectMode) onSelectMode(mode);
    onFinish();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950 text-slate-100 overflow-hidden select-none"
    >
      {/* Background Starfield / Radial Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.35),rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-2xl" />

      {/* Pulsing Shockwave Rings radiating from logo center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ scale: 0.3, opacity: 0.9 }}
          animate={{ scale: 3.5, opacity: 0 }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut' }}
          className="w-48 h-48 rounded-full border border-indigo-500/50"
        />
        <motion.div
          initial={{ scale: 0.3, opacity: 0.9 }}
          animate={{ scale: 2.8, opacity: 0 }}
          transition={{ duration: 2.4, repeat: Infinity, delay: 0.7, ease: 'easeOut' }}
          className="w-48 h-48 rounded-full border border-pink-500/40"
        />
        <motion.div
          initial={{ scale: 0.3, opacity: 0.9 }}
          animate={{ scale: 2.2, opacity: 0 }}
          transition={{ duration: 2.4, repeat: Infinity, delay: 1.3, ease: 'easeOut' }}
          className="w-48 h-48 rounded-full border border-cyan-400/40"
        />
      </div>

      {/* Main Splash Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-lg px-6">
        {/* Splash Logo with Elastic Spring In */}
        <motion.div
          initial={{ scale: 0.2, rotate: -20, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 18,
            duration: 1.2,
          }}
          className="relative mb-6 cursor-pointer"
          onClick={() => {
            playSplashSound();
          }}
          title="Click to replay startup chime"
        >
          <Logo size="splash" animated={true} />
        </motion.div>

        {/* Title & Brand Typography */}
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="space-y-2"
        >
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white flex items-center justify-center gap-2">
            <span>SAMIKSHA AMBATI</span>
          </h1>
          <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase bg-gradient-to-r from-sky-400 via-indigo-300 to-pink-400 bg-clip-text text-transparent">
            Software Developer • AI Systems • Enterprise Agents
          </p>
        </motion.div>

        {/* Live Boot Log & Progress Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="w-full mt-8 space-y-3"
        >
          {/* Progress Bar */}
          <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800 p-0.2">
            <motion.div
              className="h-full bg-gradient-to-r from-sky-400 via-indigo-500 to-pink-500 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>

          {/* Console Text Line */}
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 px-1">
            <span className="flex items-center gap-1.5 text-indigo-300 truncate">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping" />
              {bootLogs[bootStep] || 'System Ready.'}
            </span>
            <span className="text-slate-500 font-bold ml-2">{progress}%</span>
          </div>
        </motion.div>

        {/* Sound Chime Replay Button & Fast Launch Actions */}
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.5 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <button
            onClick={() => handleLaunch('desktop')}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-xs tracking-wide shadow-lg shadow-indigo-600/30 transition-all flex items-center gap-2 group"
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Launch DevOS Desktop</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => handleLaunch('bento')}
            className="px-4 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 font-semibold text-xs transition-all flex items-center gap-2"
          >
            <LayoutGrid className="w-3.5 h-3.5 text-pink-400" />
            <span>Executive Bento View</span>
          </button>

          <button
            onClick={() => playSplashSound()}
            className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 transition-colors"
            title="Replay Audio Chime"
          >
            <Volume2 className="w-4 h-4 text-emerald-400" />
          </button>
        </motion.div>
      </div>

      {/* Bottom Hint */}
      <div className="absolute bottom-6 text-[11px] text-slate-600 font-mono flex items-center gap-2">
        <span>Press anywhere or click a button to enter</span>
      </div>
    </motion.div>
  );
}
