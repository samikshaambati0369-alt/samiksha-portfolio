import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Shield, Cpu, PieChart, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../icons/BrandIcons';

export default function CaseStudyModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-[#FAFAFA] border border-black/15 rounded-3xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-6 sm:p-8 border-b border-black/10 flex items-start justify-between gap-4 bg-white">
            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase font-bold text-black/50 tracking-wider">
                {project.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight text-black">
                {project.title}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-black/5 text-black transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-black/80 leading-relaxed">
            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-black/[0.08] space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-rose-600">
                  PROBLEM STATEMENT
                </h4>
                <p className="text-xs text-black/80 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-black/[0.08] space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600">
                  ENGINEERED SOLUTION
                </h4>
                <p className="text-xs text-black/80 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Overview */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-black mb-2">
                DETAILED IMPLEMENTATION OVERVIEW
              </h4>
              <p className="text-sm text-black/85 leading-relaxed font-normal">
                {project.fullDescription || project.description}
              </p>
            </div>

            {/* Architecture / Key Highlights */}
            {project.highlights && (
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-black mb-3">
                  CORE TECHNICAL CAPABILITIES
                </h4>
                <div className="space-y-2">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-black/[0.06]">
                      <CheckCircle2 className="w-4 h-4 text-[#84CC16] shrink-0 mt-0.5" />
                      <span className="text-xs text-black/85 leading-snug">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Workflow Pipeline if AegisZero */}
            {project.workflow && (
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-black mb-3">
                  CLOSED-LOOP AGENTIC RECOVERY SEQUENCE
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {project.workflow.map((step, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-white border border-black/10 text-xs">
                      <span className="text-[10px] font-mono font-bold text-black/40 block mb-1">
                        STAGE 0{idx + 1}
                      </span>
                      <strong className="text-black font-display font-bold block uppercase">{step.name}</strong>
                      <span className="text-[11px] text-black/60 mt-1 block leading-snug">{step.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Pills */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-black mb-2">
                TECHNOLOGY STACK
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full bg-white border border-black/10 text-xs font-mono font-semibold text-black"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer CTAs: Live Demo, GitHub, Close */}
          <div className="p-6 border-t border-black/10 bg-white flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs font-mono text-black/50">
              SAMIKSHA AMBATI • TECHNICAL WORK
            </span>

            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 rounded-full border border-black/20 hover:border-black bg-white text-xs font-bold uppercase tracking-wider text-black flex items-center gap-2 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                GitHub
              </a>

              <a
                href={project.liveUrl || project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-full bg-black hover:bg-black/80 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md"
              >
                <span>Live Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
