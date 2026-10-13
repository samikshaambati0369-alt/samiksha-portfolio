import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const headlineWords = ['BUILDING', 'DIGITAL', 'EXPERIENCES', 'THAT', 'SOLVE', 'REAL', 'PROBLEMS.'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="home" className="relative min-h-[92vh] pt-28 sm:pt-36 pb-16 px-6 sm:px-10 flex flex-col justify-between max-w-7xl mx-auto overflow-hidden">
      {/* Gentle Floating Background Movement */}
      <motion.div
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        className="absolute -top-20 -right-20 w-[420px] h-[420px] rounded-full bg-[#BFFF00]/[0.08] blur-3xl pointer-events-none -z-10"
      />

      {/* Top Meta Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap items-center justify-between gap-4 border-b border-black/[0.08] pb-5"
      >
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#BFFF00] ring-4 ring-[#BFFF00]/30 animate-pulse" />
          <span className="text-xs font-mono font-bold tracking-widest text-black uppercase">
            PORTFOLIO — 2026
          </span>
        </div>

        <div className="text-xs font-mono tracking-wider text-black/60 uppercase">
          HYDERABAD, TELANGANA, INDIA
        </div>

        <div className="hidden sm:block text-xs font-mono tracking-wider text-black/60 uppercase">
          B.TECH CSE • VBIT (2024–2028)
        </div>
      </motion.div>

      {/* Main Editorial Layout */}
      <div className="my-auto py-8 sm:py-12 space-y-8 lg:space-y-10">
        {/* Oversized Name Headline with Word Reveal */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="overflow-hidden"
        >
          <div className="overflow-hidden">
            <motion.h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[104px] font-black tracking-tighter uppercase font-display leading-[0.92] text-[#0A0A0A]">
              <span className="inline-block overflow-hidden mr-4">
                <motion.span variants={wordVariants} className="inline-block">
                  SAMIKSHA
                </motion.span>
              </span>
              <br />
              <span className="inline-block overflow-hidden">
                <motion.span
                  variants={wordVariants}
                  className="inline-block transition-transform duration-300 hover:translate-x-3 text-[#0A0A0A] hover:text-black"
                >
                  AMBATI
                </motion.span>
              </span>
            </motion.h1>
          </div>
        </motion.div>

        {/* Asymmetric Grid: Headline + Description + Workspace Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Left Column: Headline & Description (Cols 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-5"
          >
            {/* Word-by-word reveal for mission headline */}
            <motion.h2
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#0A0A0A] font-display leading-tight flex flex-wrap gap-x-2 gap-y-1"
            >
              {headlineWords.map((word, i) => (
                <motion.span key={i} variants={wordVariants} className="inline-block">
                  {word}
                </motion.span>
              ))}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-base sm:text-lg text-black/75 leading-relaxed font-normal max-w-xl"
            >
              I’m Samiksha Ambati, a Computer Science Engineering student passionate about software development, AI-powered applications, and building meaningful technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0A0A0A] text-white text-xs font-bold uppercase tracking-wider hover:bg-black transition-all shadow-md hover:scale-[1.02] active:scale-95"
              >
                <span>Explore Selected Works</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-black/15 bg-white text-black text-xs font-bold uppercase tracking-wider hover:border-black hover:bg-black/5 transition-all"
              >
                About Background
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Asymmetric Creative Developer Image with Clip Mask Reveal (Cols 5) */}
          <motion.div
            initial={{ clipPath: 'inset(10% 0 10% 0)', opacity: 0, scale: 0.96 }}
            animate={{ clipPath: 'inset(0% 0 0% 0)', opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-black/10 shadow-md bg-black/5 aspect-[4/3] sm:aspect-[16/11] editorial-image-container group">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop"
                alt="Samiksha Ambati Software Engineering Workspace"
                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                loading="eager"
              />

              {/* Minimal floating badge */}
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-black/10 flex items-center justify-between text-[11px] font-mono tracking-tight text-black shadow-sm">
                <span className="flex items-center gap-1.5 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BFFF00] ring-2 ring-[#BFFF00]/40 animate-pulse" />
                  SOFTWARE DEV & APPLIED AI
                </span>
                <span className="text-black/50 font-bold">HYD / IN</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.55 }}
        className="pt-5 border-t border-black/[0.08] flex items-center justify-between text-xs font-mono text-black/60"
      >
        <a
          href="#about"
          className="group flex items-center gap-2 hover:text-black transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-[#BFFF00] animate-bounce" />
          <span className="tracking-widest uppercase">SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-y-1" />
        </a>

        <div className="hidden sm:flex items-center gap-6 font-semibold">
          <span>REACT • NODE • PYTHON • FASTAPI • MYSQL</span>
        </div>
      </motion.div>
    </section>
  );
}
