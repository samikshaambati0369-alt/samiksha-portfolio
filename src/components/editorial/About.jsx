import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, GraduationCap, MapPin, Target } from 'lucide-react';

export default function About() {
  const verifiedStats = [
    {
      label: 'ACADEMIC STANDING',
      value: 'B.Tech CSE Student',
      sub: '3rd Year • VBIT Hyderabad',
    },
    {
      label: 'GRADUATION TIMELINE',
      value: 'Expected: May 2028',
      sub: 'Current CGPA: 7.56 / 10',
    },
    {
      label: 'TECHNICAL PORTFOLIO',
      value: '03 Technical Projects',
      sub: 'FinTrack, VoxShield AI, AegisZero',
    },
    {
      label: 'COMPETITIVE TRACK',
      value: 'Hackathon Participant',
      sub: 'WorkatoHack & SIH 2025',
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 px-6 sm:px-10 max-w-7xl mx-auto border-t border-black/[0.08]">
      {/* Editorial Section Label */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-12 sm:mb-16"
      >
        <span className="text-xs font-mono font-bold tracking-widest uppercase text-black/50">
          [ 01 / ABOUT & BACKGROUND ]
        </span>
        <div className="h-[1px] flex-1 bg-black/[0.08]" />
      </motion.div>

      {/* Split-screen Editorial Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Image & Location Card (Cols 5) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="relative rounded-2xl overflow-hidden border border-black/10 bg-black/5 aspect-[4/5] editorial-image-container group shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
              alt="Code and Engineering Practice"
              className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
              loading="lazy"
            />

            {/* Minimal overlay card */}
            <div className="absolute inset-x-4 bottom-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-black/10">
              <span className="text-[10px] font-mono uppercase text-black/50 tracking-wider block mb-1">
                INSTITUTION & AFFILIATION
              </span>
              <p className="text-xs font-bold text-black uppercase">
                Vignana Bharathi Institute of Technology (VBIT)
              </p>
              <p className="text-[11px] text-black/60 font-mono mt-0.5">
                Hyderabad, Telangana, India
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl border border-black/[0.08] bg-white flex items-center justify-between text-xs font-mono text-black">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#BFFF00]" />
              <span>INTERESTS: BACKEND • AI/ML • AUTOMATION</span>
            </div>
            <a
              href="https://linkedin.com/in/samiksha-ambati-239763438"
              target="_blank"
              rel="noreferrer"
              className="font-bold underline hover:text-black/60 flex items-center gap-1"
            >
              LinkedIn <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Clean, Concise Typography & Goals (Cols 7) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-7 space-y-7"
        >
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#BFFF00] bg-black px-2.5 py-1 rounded inline-block font-bold">
              PROFILE PHILOSOPHY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase font-display tracking-tight text-[#0A0A0A] leading-[1.08]">
              CURIOUS BY NATURE.<br />
              BUILDER BY CHOICE.
            </h2>
          </div>

          {/* Concise, non-repetitive paragraphs */}
          <div className="space-y-4 text-base sm:text-lg text-black/80 leading-relaxed font-normal">
            <p>
              I am a third-year <strong>B.Tech Computer Science and Engineering</strong> student at Vignana Bharathi Institute of Technology (VBIT), Hyderabad (CGPA 7.56). I focus on building functional, reliable software applications and exploring practical problem-solving through code.
            </p>
            <p>
              My hands-on project work spans full-stack web applications with React and Node.js, applied AI for voice biometric defense with Python, and closed-loop agentic workflow orchestration with the Workato platform.
            </p>
            <p className="text-sm sm:text-base text-black/65">
              I am actively preparing for software development and engineering internships where I can contribute to real-world codebases, collaborate with technical mentors, and continue growing as a developer.
            </p>
          </div>

          {/* Target Preferences Strip */}
          <div className="pt-4 border-t border-black/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            <div className="p-4 rounded-xl border border-black/[0.06] bg-white">
              <span className="text-black/40 block mb-1 font-semibold uppercase">INTERNSHIP FOCUS</span>
              <strong className="text-black block text-xs">Software Developer / Engineering Intern</strong>
              <span className="text-black/60 text-[11px] block mt-0.5">Java, Python, Full-Stack & AI/ML tracks.</span>
            </div>
            <div className="p-4 rounded-xl border border-black/[0.06] bg-white">
              <span className="text-black/40 block mb-1 font-semibold uppercase">LOCATION PREFERENCES</span>
              <strong className="text-black block text-xs">Hyderabad • Bengaluru • Pune • Chennai • Remote</strong>
              <span className="text-black/60 text-[11px] block mt-0.5">Open to on-site, hybrid, or remote opportunities.</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Verified Statistics Strip */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 sm:mt-24 pt-8 border-t border-black/[0.08]"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {verifiedStats.map((st, i) => (
            <div key={i} className="space-y-1.5 p-4 sm:p-5 rounded-2xl border border-black/[0.06] bg-white shadow-sm">
              <span className="text-[10px] font-mono uppercase text-black/40 tracking-wider block font-bold">
                {st.label}
              </span>
              <div className="text-sm sm:text-base font-black font-display text-black uppercase">
                {st.value}
              </div>
              <p className="text-xs font-mono text-black/60">
                {st.sub}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
