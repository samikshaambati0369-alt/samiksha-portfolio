import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Award, CheckCircle2 } from 'lucide-react';

export default function Achievements() {
  const verifiedMilestones = [
    {
      year: '2025',
      badge: 'HACKATHON PARTICIPATION',
      title: 'WorkatoHack 2025 — Orchestrator + Agents Track',
      team: 'Team S3vertex',
      project: 'AegisZero Autonomous Workflow Recovery',
      description:
        'Collaborated with Team S3vertex to build AegisZero, an enterprise workflow orchestrator designed to monitor system telemetry, make contextual decisions via AI agents, execute mitigation recipes, and autonomously recover from outages.',
    },
    {
      year: '2025',
      badge: 'NATIONAL HACKATHON PARTICIPANT',
      title: 'Smart India Hackathon (SIH) 2025',
      team: 'Participant Team',
      project: 'AI-Based Crop Recommendation System',
      description:
        'Participated in developing an agricultural decision-support concept that analyzes soil telemetry and environmental metrics to generate data-driven crop recommendations for farmers.',
    },
    {
      year: 'VERIFIED',
      badge: 'TECHNICAL CERTIFICATION',
      title: 'Infosys Springboard — Java Programming',
      team: 'Infosys Springboard',
      project: 'Object-Oriented Design & Core Data Structures',
      description:
        'Completed comprehensive coursework covering Java Object-Oriented Programming (OOP), the collections framework, exception handling, and algorithmic problem-solving techniques.',
    },
    {
      year: 'VERIFIED',
      badge: 'TECHNICAL CERTIFICATION',
      title: 'Infosys Springboard — Python Programming',
      team: 'Infosys Springboard',
      project: 'Modular Programming & Computational Scripting',
      description:
        'Completed assessment-backed coursework in Python syntax, core data structures, modular software engineering, file I/O, and data processing fundamentals.',
    },
  ];

  return (
    <section id="achievements" className="py-24 sm:py-32 px-6 sm:px-10 max-w-7xl mx-auto border-t border-black/[0.08]">
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
            [ 05 / TIMELINE & MILESTONES ]
          </span>
          <div className="h-[1px] w-12 sm:w-24 bg-black/[0.08]" />
        </div>
        <span className="text-xs font-mono text-black/50">
          VERIFIED PARTICIPATION & CREDENTIALS
        </span>
      </motion.div>

      {/* Section Headline */}
      <div className="mb-16 sm:mb-20 max-w-3xl">
        <h2 className="text-4xl sm:text-6xl font-black uppercase font-display tracking-tight text-[#0A0A0A] leading-tight">
          HACKATHONS &<br />
          TECHNICAL MILESTONES.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-black/65 font-normal">
          Competitive hackathon participation and verified technical learning milestones completed outside standard classroom lectures.
        </p>
      </div>

      {/* Minimal Editorial Timeline */}
      <div className="space-y-6 sm:space-y-8">
        {verifiedMilestones.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group p-6 sm:p-9 rounded-2xl sm:rounded-3xl border border-black/10 bg-white hover:border-black/30 transition-all duration-200"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              {/* Year & Badge (Cols 3) */}
              <div className="lg:col-span-3 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#BFFF00]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-black">
                    {item.year}
                  </span>
                </div>
                <span className="inline-block px-2.5 py-1 rounded bg-[#FAFAFA] border border-black/10 text-[10px] font-mono font-bold text-black/70">
                  {item.badge}
                </span>
                {item.team && (
                  <p className="text-xs font-mono text-black/50 mt-1">
                    Affiliation: {item.team}
                  </p>
                )}
              </div>

              {/* Title & Description (Cols 9) */}
              <div className="lg:col-span-9 space-y-2.5">
                <h3 className="text-xl sm:text-2xl font-black font-display uppercase tracking-tight text-black group-hover:text-black/85 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-mono font-semibold uppercase tracking-wider text-black/60">
                  {item.project}
                </p>
                <p className="text-sm sm:text-base text-black/75 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
