import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, FileText, Activity, Cpu, ArrowRight } from 'lucide-react';
import { GithubIcon } from '../icons/BrandIcons';
import { projectsData } from '../../data/projectsData';
import { playSound } from '../../utils/soundManager';

export default function Projects() {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-24 sm:py-32 px-6 sm:px-10 max-w-7xl mx-auto border-t border-black/[0.08]">
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
            [ 02 / SELECTED WORKS ]
          </span>
          <div className="h-[1px] w-12 sm:w-24 bg-black/[0.08]" />
        </div>
        <span className="text-xs font-mono text-black/50">
          03 VERIFIED IMPLEMENTATIONS
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
          ENGINEERED SOLUTIONS.<br />
          DEMONSTRATED VALUE.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-black/65 font-normal">
          Each project demonstrates a practical engineering domain: audio cybersecurity machine learning, full-stack financial technology, and enterprise agentic workflow automation. Click any card to read the complete technical case study or open the live deployment.
        </p>
      </motion.div>

      {/* Project Cards Stack */}
      <div className="space-y-16 sm:space-y-24">
        {projectsData.map((project, idx) => (
          <motion.article
            key={project.id}
            role="link"
            tabIndex={0}
            onMouseEnter={() => playSound('hover')}
            onClick={() => {
              playSound('click');
              navigate(project.caseStudyUrl);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                playSound('click');
                navigate(project.caseStudyUrl);
              }
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: idx * 0.12 }}
            className="group relative rounded-3xl border border-black/10 bg-white p-6 sm:p-10 lg:p-12 shadow-sm transition-all duration-300 hover:shadow-2xl hover:border-black/30 hover:-translate-y-1.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#BFFF00] focus:ring-offset-2 overflow-hidden"
          >
            {/* Top Hover Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#BFFF00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Top Meta Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/[0.08] pb-6 mb-8">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-black text-white">
                  PROJECT {project.number}
                </span>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-black/60">
                  {project.category}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-black/40 group-hover:text-black transition-colors font-semibold">
                  <span>VIEW CASE STUDY</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 text-black bg-[#BFFF00] rounded-full p-0.5" />
                </span>
                <div className="flex items-center gap-2 pl-2 border-l border-black/[0.08]">
                  <span className="w-2 h-2 rounded-full bg-[#BFFF00] ring-2 ring-[#BFFF00]/40 animate-pulse" />
                  <span className="text-xs font-mono text-black/70">VERIFIED CODEBASE</span>
                </div>
              </div>
            </div>

            {/* Main Content Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Title, Problem/Solution, Tech, Functional Buttons (Cols 6) */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-black group-hover:text-black/85 transition-colors">
                    <Link
                      to={project.caseStudyUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="hover:underline decoration-2 underline-offset-4"
                    >
                      {project.title}
                    </Link>
                  </h3>
                  <ArrowRight className="w-6 h-6 text-black opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0 hidden sm:block" />
                </div>

                <p className="text-base text-black/80 leading-relaxed font-normal">
                  {project.description}
                </p>

                {/* Problem & Solution Mini Grid */}
                <div className="space-y-3 pt-1">
                  <div className="p-3.5 rounded-xl bg-[#FAFAFA] border border-black/[0.06]">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-600 block mb-1">
                      PROBLEM STATEMENT
                    </span>
                    <p className="text-xs text-black/75 leading-relaxed font-normal">
                      {project.problem}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#FAFAFA] border border-black/[0.06]">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                      ENGINEERED SOLUTION
                    </span>
                    <p className="text-xs text-black/75 leading-relaxed font-normal">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Tech Tags */}
                <div>
                  <span className="text-[11px] font-mono text-black/40 block mb-2 uppercase font-semibold">
                    TECHNOLOGIES USED
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 8).map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-[#FAFAFA] border border-black/10 text-xs font-mono font-medium text-black group-hover:border-black/20 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 3 Functional Buttons: LIVE PROJECT, GITHUB REPOSITORY, VIEW CASE STUDY */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  {/* LIVE PROJECT BUTTON */}
                  {project.isLive && project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => playSound('hover')}
                      onClick={(e) => {
                        e.stopPropagation();
                        playSound('click');
                      }}
                      className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-full bg-[#0A0A0A] text-white text-xs font-bold uppercase tracking-wider hover:bg-black transition-transform duration-200 hover:scale-[1.03] active:scale-95 shadow-sm"
                    >
                      <span>LIVE PROJECT</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-black/15 bg-black/[0.04] text-black/60 text-xs font-mono font-bold uppercase tracking-wider cursor-default"
                      title="Public live deployment is currently in staging"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                      <span>LIVE DEMO COMING SOON</span>
                    </span>
                  )}

                  {/* GITHUB REPOSITORY BUTTON (rendered only if repository URL is present) */}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => playSound('hover')}
                      onClick={(e) => {
                        e.stopPropagation();
                        playSound('click');
                      }}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-black/20 bg-white text-black text-xs font-bold uppercase tracking-wider hover:border-black hover:bg-black/5 transition-all"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GITHUB REPOSITORY</span>
                    </a>
                  )}

                  {/* VIEW CASE STUDY BUTTON */}
                  <Link
                    to={project.caseStudyUrl}
                    onMouseEnter={() => playSound('hover')}
                    onClick={(e) => {
                      e.stopPropagation();
                      playSound('click');
                    }}
                    className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-full bg-white border border-black/20 text-black text-xs font-bold uppercase tracking-wider hover:bg-[#BFFF00] hover:border-black hover:text-black transition-all group/study"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>VIEW CASE STUDY</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/study:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Editorial Visual Mockup (Cols 6) */}
              <div className="lg:col-span-6">
                {/* VOXSHIELD AI MOCKUP */}
                {project.mockupType === 'audio' && (
                  <div className="rounded-2xl border border-black/10 bg-[#FAFAFA] p-5 sm:p-6 shadow-inner space-y-4 group-hover:border-black/20 transition-colors">
                    <div className="flex items-center justify-between border-b border-black/[0.08] pb-3 text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-black" />
                        <span className="font-bold text-black">voxshield / spectral-analyzer</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-[#BFFF00] text-black font-bold text-[10px]">
                        AI RADAR ACTIVE
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-black text-white space-y-3">
                      <div className="flex justify-between text-[11px] font-mono text-white/60">
                        <span>AUDIO MFCC SPECTROGRAM (44.1 kHz)</span>
                        <span className="text-[#BFFF00] font-bold">SYNTHETIC THREAT: 96.4%</span>
                      </div>
                      <div className="h-20 flex items-end justify-between gap-1 py-1 px-1 border-b border-white/20">
                        {Array.from({ length: 32 }).map((_, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-[#BFFF00] rounded-t transition-all duration-300 group-hover:scale-y-105"
                            style={{
                              height: `${20 + Math.sin(i * 0.45) * 45 + ((i % 3) * 12)}%`,
                            }}
                          />
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-white/70">
                        <span>PITCH JITTER: 0.002% (ABNORMALLY UNIFORM)</span>
                        <span className="text-rose-400 font-bold">VERDICT: CLONED SPOOF</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                      <div className="p-2.5 rounded-xl bg-white border border-black/[0.06]">
                        <span className="text-[10px] text-black/50 block">FEATURE EXTRACTION</span>
                        <strong className="text-black">MFCC & Pitch Jitter</strong>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-black/[0.06]">
                        <span className="text-[10px] text-black/50 block">DEFENSE DOMAIN</span>
                        <strong className="text-black">Biometric Voice Fraud</strong>
                      </div>
                    </div>
                  </div>
                )}

                {/* FINTRACK MOCKUP */}
                {project.mockupType === 'finance' && (
                  <div className="rounded-2xl border border-black/10 bg-[#FAFAFA] p-5 sm:p-6 shadow-inner space-y-4 group-hover:border-black/20 transition-colors">
                    <div className="flex items-center justify-between border-b border-black/[0.08] pb-3 text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                        <span className="font-bold text-black ml-2">fintrack.app / dashboard</span>
                      </div>
                      <span className="text-black/50 font-mono text-[11px]">JWT Protected</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2.5 text-xs">
                      <div className="p-3 rounded-xl bg-white border border-black/[0.06]">
                        <span className="text-[10px] font-mono text-black/50 block">NET BALANCE</span>
                        <span className="text-base sm:text-lg font-bold font-mono text-black">$8,450.00</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-black/[0.06]">
                        <span className="text-[10px] font-mono text-black/50 block">INFLOW</span>
                        <span className="text-base sm:text-lg font-bold font-mono text-emerald-600">+$3,200</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-black/[0.06]">
                        <span className="text-[10px] font-mono text-black/50 block">BURN RATE</span>
                        <span className="text-base sm:text-lg font-bold font-mono text-rose-600">-$1,140</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-black/[0.06] space-y-2">
                      <div className="flex justify-between text-xs font-mono font-semibold text-black">
                        <span>Expenditure by Category (Recharts)</span>
                        <span className="text-black/50">Target: $2,500</span>
                      </div>
                      <div className="h-4 w-full bg-black/5 rounded-full overflow-hidden flex">
                        <div className="h-full bg-black" style={{ width: '42%' }} title="Infrastructure" />
                        <div className="h-full bg-[#BFFF00]" style={{ width: '28%' }} title="Dev & Tools" />
                        <div className="h-full bg-neutral-400" style={{ width: '18%' }} title="Essentials" />
                      </div>
                      <div className="flex items-center gap-4 text-[10px] font-mono text-black/60 pt-1">
                        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-black" /> Hosting & DB</span>
                        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-[#BFFF00]" /> Dev Tools</span>
                        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-neutral-400" /> Misc</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* AEGISZERO MOCKUP */}
                {project.mockupType === 'workflow' && (
                  <div className="rounded-2xl border border-black/10 bg-[#FAFAFA] p-5 sm:p-6 shadow-inner space-y-4 group-hover:border-black/20 transition-colors">
                    <div className="flex items-center justify-between border-b border-black/[0.08] pb-3 text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-black" />
                        <span className="font-bold text-black">aegiszero / workato-orchestrator</span>
                      </div>
                      <span className="text-black/60 font-semibold">WORKATOHACK 2025</span>
                    </div>

                    <div className="space-y-2">
                      <span className="text-[10px] font-mono font-bold text-black/50 uppercase tracking-wider block">
                        6-STAGE AUTONOMOUS WORKFLOW RECOVERY
                      </span>
                      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                        {['DETECT', 'DECIDE', 'EXECUTE', 'OBSERVE', 'VERIFY', 'RECOVER'].map((step, stepIdx) => (
                          <div
                            key={step}
                            className="p-2.5 rounded-xl bg-white border border-black/10 text-center flex flex-col items-center justify-center group-hover:border-black/30 transition-colors"
                          >
                            <span className="text-[9px] font-mono text-black/40 font-bold">0{stepIdx + 1}</span>
                            <span className="text-[11px] font-display font-black text-black mt-0.5">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-black/[0.06] text-xs font-mono flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                        <span className="text-black/80 font-bold">Closed-Loop Resilience</span>
                      </div>
                      <span className="text-black/50">Zero-Human Touch SLA</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
