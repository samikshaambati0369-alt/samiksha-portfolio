import React from 'react';
import { motion } from 'framer-motion';

export default function Values() {
  const values = [
    {
      num: '01',
      title: 'COLLABORATION',
      quote:
        'Great software is rarely built in isolation. I value clear communication, psychological safety, and active cross-functional teamwork where code reviews strengthen the whole team.',
      pillar: 'TEAMWORK & EMPATHY',
    },
    {
      num: '02',
      title: 'CONTINUOUS LEARNING',
      quote:
        'Technology evolves at a relentless pace. Staying deeply curious, experimenting with emerging AI paradigms, and reading technical RFCs is my standard daily practice.',
      pillar: 'ADAPTIVE GROWTH',
    },
    {
      num: '03',
      title: 'THOUGHTFUL PROBLEM-SOLVING',
      quote:
        'Understanding the exact business and system bottleneck before writing code invariably produces cleaner architectures, fewer bugs, and far more maintainable systems.',
      pillar: 'ROOT-CAUSE FOCUS',
    },
    {
      num: '04',
      title: 'BUILDING USEFUL TECHNOLOGY',
      quote:
        'The ultimate validation of any software project is not how clever the syntax looks, but whether it reliably solves an authentic problem for human beings in the real world.',
      pillar: 'PURPOSE-DRIVEN VALUE',
    },
  ];

  return (
    <section id="values" className="py-24 sm:py-32 px-6 sm:px-10 max-w-7xl mx-auto border-t border-black/[0.08]">
      {/* Editorial Section Label */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between mb-12 sm:mb-16"
      >
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-black/50">
            [ 06 / CORE PRINCIPLES ]
          </span>
          <div className="h-[1px] w-12 sm:w-24 bg-black/[0.08]" />
        </div>
        <span className="text-xs font-mono text-black/50">
          WHAT I VALUE
        </span>
      </motion.div>

      {/* Section Headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 sm:mb-20 max-w-3xl"
      >
        <h2 className="text-4xl sm:text-6xl font-black uppercase font-display tracking-tight text-[#0A0A0A] leading-tight">
          WHAT I VALUE.<br />
          PRINCIPLES OF CRAFT.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-black/65 font-normal">
          The core guiding values I bring to every software engineering project, peer collaboration, and developer team.
        </p>
      </motion.div>

      {/* 2x2 Clean Minimalist Testimonial-Style Editorial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
        {values.map((v, idx) => (
          <motion.div
            key={v.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group relative p-8 sm:p-12 rounded-3xl border border-black/10 bg-white hover:border-black/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-8"
          >
            {/* Top Bar with Number and Giant Quotation Mark */}
            <div className="flex items-start justify-between">
              <span className="text-xs font-mono font-bold text-black/40 group-hover:text-black transition-colors">
                /{v.num}
              </span>
              <span className="text-5xl font-serif text-black/20 group-hover:text-[#BFFF00] transition-colors leading-none select-none">
                “
              </span>
            </div>

            {/* Value Title & Quote */}
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight text-black">
                {v.title}
              </h3>
              <p className="text-base sm:text-lg text-black/80 font-normal leading-relaxed italic">
                "{v.quote}"
              </p>
            </div>

            {/* Bottom Pillar Tag */}
            <div className="pt-4 border-t border-black/[0.08] flex items-center justify-between text-xs font-mono">
              <span className="text-black/50 font-bold uppercase tracking-wider">{v.pillar}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#BFFF00]" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
