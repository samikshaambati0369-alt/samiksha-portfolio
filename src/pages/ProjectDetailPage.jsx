import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, CheckCircle2, AlertCircle, Cpu, Activity } from 'lucide-react';
import { GithubIcon } from '../components/icons/BrandIcons';
import { projectsData } from '../data/projectsData';
import Footer from '../components/editorial/Footer';

export default function ProjectDetailPage() {
  const { projectId } = useParams();

  // Scroll to top on route entry
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [projectId]);

  // Find project by slug
  const project = projectsData.find((p) => p.slug === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] text-[#0A0A0A] flex flex-col items-center justify-center px-6 py-24 text-center">
        <span className="text-xs font-mono font-bold text-black/40 uppercase mb-2">404 — NOT FOUND</span>
        <h1 className="text-4xl sm:text-6xl font-black font-display uppercase tracking-tight text-black mb-4">
          PROJECT NOT FOUND
        </h1>
        <p className="text-sm text-black/60 max-w-md mb-8">
          The requested project case study could not be located.
        </p>
        <Link
          to="/"
          className="px-6 py-3 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-black/80 transition-colors"
        >
          Back to Homepage
        </Link>
      </div>
    );
  }

  // Find next project for bottom pagination
  const currentIndex = projectsData.findIndex((p) => p.slug === projectId);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="min-h-screen bg-[#FAFAFA] text-[#0A0A0A] selection:bg-[#BFFF00] selection:text-black"
    >
      {/* Top Breadcrumb Sub-Navigation Bar */}
      <div className="pt-20 sm:pt-24 border-b border-black/[0.06] bg-white/60">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-3.5 flex items-center justify-between">
          <Link
            to="/#projects"
            className="group inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-black/70 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            <span>BACK TO ALL PROJECTS</span>
          </Link>

          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="text-black/40 hidden sm:inline">{project.number} / 03</span>
            <span className="text-black font-bold uppercase">{project.title}</span>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-6 sm:px-10 py-12 sm:py-20 space-y-16 sm:space-y-24">
        {/* Project Header Banner */}
        <section className="space-y-6 border-b border-black/[0.08] pb-12 sm:pb-16">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#BFFF00] ring-4 ring-[#BFFF00]/30 animate-pulse" />
              <span className="font-bold text-black uppercase">{project.category}</span>
            </div>
            <span className="text-black/50 uppercase font-mono">PROJECT #{project.number}</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black font-display uppercase tracking-tight text-[#0A0A0A] leading-tight"
          >
            {project.title}
          </motion.h1>

          <p className="text-lg sm:text-2xl text-black/80 font-normal leading-relaxed max-w-3xl">
            {project.tagline}
          </p>

          {/* Action CTAs: LIVE PROJECT / GITHUB REPOSITORY */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            {project.isLive && project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0A0A0A] text-white text-xs font-bold uppercase tracking-wider hover:bg-black transition-transform duration-200 hover:scale-[1.02] shadow-sm"
              >
                <span>LIVE PROJECT</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            ) : (
              <div
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAFAFA] border border-black/15 text-black/60 text-xs font-mono font-bold uppercase tracking-wider cursor-not-allowed"
                title="Public deployment in progress"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                <span>LIVE DEMO COMING SOON</span>
              </div>
            )}

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/20 hover:border-black bg-white text-black text-xs font-bold uppercase tracking-wider transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GITHUB REPOSITORY</span>
              </a>
            ) : null}
          </div>
        </section>

        {/* Problem & Solution High-Contrast Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-black/50">
              [ THE CORE CHALLENGE & ARCHITECTURE ]
            </span>
            <div className="h-[1px] flex-1 bg-black/[0.08]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Problem Statement */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/10 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-rose-600 text-xs font-mono font-bold uppercase tracking-wider">
                <AlertCircle className="w-4 h-4" />
                <span>PROBLEM STATEMENT</span>
              </div>
              <h3 className="text-lg font-black font-display uppercase tracking-tight text-black">
                The Bottleneck Addressed
              </h3>
              <p className="text-sm text-black/80 leading-relaxed font-normal">
                {project.problem}
              </p>
            </div>

            {/* Solution Statement */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/10 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-emerald-600 text-xs font-mono font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>ENGINEERED SOLUTION</span>
              </div>
              <h3 className="text-lg font-black font-display uppercase tracking-tight text-black">
                Technical Strategy & Design
              </h3>
              <p className="text-sm text-black/80 leading-relaxed font-normal">
                {project.solution}
              </p>
            </div>
          </div>
        </section>

        {/* Executive Overview Narrative */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight text-black">
            EXECUTIVE OVERVIEW
          </h2>
          <p className="text-base sm:text-lg text-black/80 leading-relaxed font-normal">
            {project.overview}
          </p>
        </section>

        {/* Visual Preview / Interface Mockup */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-black/[0.08] pb-4 text-xs font-mono">
            <span className="text-black/50 uppercase font-bold">SYSTEM INTERFACE DEMONSTRATION</span>
            <span className="text-black font-bold uppercase">{project.domain}</span>
          </div>

          {/* Interactive FinTrack Preview */}
          {project.mockupType === 'finance' && (
            <div className="rounded-3xl border border-black/10 bg-white p-6 sm:p-10 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-black/[0.06] pb-3 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="font-bold text-black ml-2">fintrack.app / analytics-engine</span>
                </div>
                <span className="text-emerald-600 font-bold">● Active Session</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-[#FAFAFA] border border-black/[0.06]">
                  <span className="text-[10px] font-mono text-black/50 uppercase block mb-1">TOTAL BALANCE</span>
                  <span className="text-2xl font-bold font-mono text-black">$8,450.00</span>
                  <span className="text-[11px] text-emerald-600 block mt-1">Healthy Liquidity</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#FAFAFA] border border-black/[0.06]">
                  <span className="text-[10px] font-mono text-black/50 uppercase block mb-1">MONTHLY INFLOW</span>
                  <span className="text-2xl font-bold font-mono text-emerald-600">+$3,200.00</span>
                  <span className="text-[11px] text-black/50 block mt-1">Active Streams</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#FAFAFA] border border-black/[0.06]">
                  <span className="text-[10px] font-mono text-black/50 uppercase block mb-1">RECORDED EXPENSES</span>
                  <span className="text-2xl font-bold font-mono text-rose-600">-$1,140.00</span>
                  <span className="text-[11px] text-black/50 block mt-1">Below $2,500 Cap</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAFAFA] border border-black/[0.06] space-y-3">
                <div className="flex justify-between text-xs font-mono font-bold text-black">
                  <span>EXPENDITURE BREAKDOWN (RECHARTS INTEGRATION)</span>
                  <span className="text-black/50">45.6% OF BUDGET USED</span>
                </div>
                <div className="h-5 w-full bg-black/10 rounded-full overflow-hidden flex">
                  <div className="h-full bg-black" style={{ width: '42%' }} title="Infrastructure" />
                  <div className="h-full bg-[#BFFF00]" style={{ width: '28%' }} title="Development Tools" />
                  <div className="h-full bg-neutral-400" style={{ width: '18%' }} title="Essentials" />
                </div>
                <div className="flex flex-wrap gap-4 text-[11px] font-mono text-black/70 pt-1">
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-black" /> Cloud & Hosting</span>
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-[#BFFF00]" /> Developer Tools</span>
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-neutral-400" /> Discretionary</span>
                </div>
              </div>
            </div>
          )}

          {/* Interactive VoxShield AI Preview */}
          {project.mockupType === 'audio' && (
            <div className="rounded-3xl border border-black/10 bg-white p-6 sm:p-10 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-black/[0.06] pb-3 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-black" />
                  <span className="font-bold text-black">voxshield / spectral-feature-extractor</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-[#BFFF00] text-black font-bold text-[10px]">
                  RADAR ACTIVE
                </span>
              </div>

              <div className="p-6 rounded-2xl bg-black text-white space-y-4">
                <div className="flex justify-between text-xs font-mono text-white/60">
                  <span>AUDIO MFCC SPECTROGRAM (44.1 kHz / 16-BIT)</span>
                  <span className="text-[#BFFF00] font-bold">THREAT PROBABILITY: 96.4%</span>
                </div>
                <div className="h-28 flex items-end justify-between gap-1 py-1 px-1 border-b border-white/20">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-[#BFFF00] rounded-t transition-all duration-300"
                      style={{
                        height: `${25 + Math.sin(i * 0.4) * 45 + ((i % 3) * 15)}%`,
                      }}
                    />
                  ))}
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-white/80">
                  <span>PITCH JITTER: 0.002% (BELOW BIOLOGICAL THRESHOLD)</span>
                  <span className="text-rose-400 font-bold">VERDICT: SYNTHETIC NEURAL SPOOF DETECTED</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-3.5 rounded-xl bg-[#FAFAFA] border border-black/[0.06]">
                  <span className="text-[10px] text-black/50 uppercase block">FEATURE MATRIX</span>
                  <strong className="text-black">13 MFCCs + Spectral Flux Profile</strong>
                </div>
                <div className="p-3.5 rounded-xl bg-[#FAFAFA] border border-black/[0.06]">
                  <span className="text-[10px] text-black/50 uppercase block">AUTHENTICATION TARGET</span>
                  <strong className="text-black">Voice Biometric Anti-Spoofing</strong>
                </div>
              </div>
            </div>
          )}

          {/* Interactive AegisZero Preview */}
          {project.mockupType === 'workflow' && (
            <div className="rounded-3xl border border-black/10 bg-white p-6 sm:p-10 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-black/[0.06] pb-3 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-black" />
                  <span className="font-bold text-black">aegiszero / workato-orchestration-engine</span>
                </div>
                <span className="text-black/60 font-semibold">WORKATOHACK 2025</span>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-black/60 uppercase tracking-wider block">
                  6-STAGE AUTONOMOUS RECOVERY PIPELINE
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-6 gap-2.5">
                  {project.workflow.map((st, i) => (
                    <div
                      key={st.name}
                      className="p-3 rounded-2xl bg-[#FAFAFA] border border-black/10 flex flex-col justify-between"
                    >
                      <span className="text-[10px] font-mono text-black/40 font-bold">0{i + 1}</span>
                      <strong className="text-xs font-display font-black text-black uppercase mt-1 mb-1">
                        {st.name}
                      </strong>
                      <span className="text-[10px] text-black/60 leading-tight">
                        {st.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Technical Architecture Overview */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight text-black">
            SYSTEM ARCHITECTURE
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            {Object.entries(project.architecture).map(([key, desc]) => (
              <div key={key} className="p-4 rounded-2xl bg-white border border-black/10 space-y-1.5">
                <span className="text-[10px] text-black/40 font-bold uppercase tracking-wider block">
                  {key.toUpperCase()} ARCHITECTURE
                </span>
                <p className="text-xs text-black/85 leading-relaxed font-sans">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Highlights & Challenges */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Highlights */}
          <div className="space-y-4">
            <h3 className="text-lg font-black font-display uppercase tracking-tight text-black">
              KEY CAPABILITIES IMPLEMENTED
            </h3>
            <div className="space-y-2">
              {project.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-black/[0.06]">
                  <CheckCircle2 className="w-4 h-4 text-[#84CC16] shrink-0 mt-0.5" />
                  <span className="text-xs text-black/85 leading-snug">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges */}
          <div className="space-y-4">
            <h3 className="text-lg font-black font-display uppercase tracking-tight text-black">
              TECHNICAL CHALLENGES SOLVED
            </h3>
            <div className="space-y-2">
              {project.challenges.map((c, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-black/[0.06]">
                  <span className="w-4 h-4 rounded-full bg-black/10 text-black text-[10px] font-mono flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    {i + 1}
                  </span>
                  <span className="text-xs text-black/85 leading-snug">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Used */}
        <section className="space-y-4 pt-4 border-t border-black/[0.08]">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-black/50">
            TECHNOLOGY STACK
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-3.5 py-1.5 rounded-full bg-white border border-black/10 text-xs font-mono font-semibold text-black"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Bottom Pagination & Navigation */}
        <section className="pt-12 border-t border-black/[0.08] flex flex-wrap items-center justify-between gap-6">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/20 hover:border-black bg-white text-xs font-bold uppercase tracking-wider text-black transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Projects</span>
          </Link>

          <Link
            to={`/projects/${nextProject.slug}`}
            className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-black/80 transition-all"
          >
            <span>Next: {nextProject.title}</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </section>
      </main>

      {/* Global Minimal Editorial Footer */}
      <Footer />
    </motion.div>
  );
}
