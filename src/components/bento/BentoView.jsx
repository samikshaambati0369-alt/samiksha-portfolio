import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { playSound } from '../../utils/sound';
import confetti from 'canvas-confetti';
import {
  Sparkles,
  ArrowRight,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Briefcase,
  Award,
  CheckCircle,
  FileText,
  Copy,
  Check,
  Code2,
  PieChart,
  ShieldAlert,
  Cpu,
  Monitor,
  Terminal,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../icons/BrandIcons';
import Logo from '../brand/Logo';

export default function BentoView({ onSwitchToDesktop, onOpenProject, onReplaySplash }) {
  const { personal, education, skills, projects, experience, hackathons, certifications } = portfolioData;
  const [activeSkillCategory, setActiveSkillCategory] = useState('all');
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = (text, field) => {
    playSound('click');
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleHireMe = () => {
    playSound('success');
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-8 px-4 sm:px-6 lg:px-8 selection:bg-indigo-500 selection:text-white">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Top Floating Alert Banner */}
        <div className="glass-panel rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 border border-indigo-500/30 bg-gradient-to-r from-indigo-950/40 via-slate-900/60 to-purple-950/40">
          <div className="flex items-center gap-3">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
            </span>
            <span className="text-xs sm:text-sm font-medium text-slate-200">
              {personal.status}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                playSound('open');
                onSwitchToDesktop();
              }}
              className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-md shadow-indigo-600/20 flex items-center gap-1.5"
            >
              <Monitor className="w-3.5 h-3.5" />
              Launch DevOS Mode
            </button>
            <button
              onClick={() => {
                playSound('open');
                window.print();
              }}
              className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              Save / Print CV
            </button>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-950 overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-indigo-600/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-purple-600/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    playSound('open');
                    if (onReplaySplash) onReplaySplash();
                  }}
                  className="cursor-pointer hover:scale-105 transition-transform"
                  title="Click to replay Logo Splash & Chime"
                >
                  <Logo size="md" animated={true} />
                </button>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  VBIT Hyderabad • CSE 3rd Year
                </div>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-pink-400 bg-clip-text text-transparent">{personal.name}</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
                {personal.role} & Aspiring Developer crafting full-stack web applications, AI systems, and enterprise automation pipelines.
              </p>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {personal.bio}
              </p>

              {/* Social and Quick Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`mailto:${personal.email}`}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-lg shadow-indigo-600/25 flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5" />
                  {personal.email}
                </a>

                <button
                  onClick={handleHireMe}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white text-xs font-bold transition-all shadow-lg shadow-pink-500/25 flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Hire Samiksha
                </button>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-400" />
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4 text-slate-200" />
                </a>
              </div>
            </div>

            {/* Quick Metrics Badge Card */}
            <div className="w-full md:w-72 glass-panel rounded-2xl p-5 border border-slate-700/60 bg-slate-900/60 space-y-4 shrink-0">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs text-slate-400 font-medium">Academic CGPA</span>
                <span className="text-lg font-bold text-emerald-400 font-mono">7.56 / 10</span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs text-slate-400 font-medium">Graduation Date</span>
                <span className="text-xs font-bold text-white font-mono">May 2028</span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs text-slate-400 font-medium">Location</span>
                <span className="text-xs font-semibold text-slate-200">Hyderabad, India</span>
              </div>
              <div className="pt-1">
                <span className="text-[11px] text-slate-400 block mb-1">Target Roles</span>
                <div className="flex flex-wrap gap-1">
                  <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 text-[10px] font-mono">Software Dev</span>
                  <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 text-[10px] font-mono">Java/Python</span>
                  <span className="px-2 py-0.5 rounded bg-pink-500/20 text-pink-300 text-[10px] font-mono">AI/ML</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid Main Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Bento Card 1: Interactive Technical Arsenal (Span 2) */}
          <div className="md:col-span-2 glass-panel rounded-3xl p-6 border border-slate-800/80 bg-slate-900/60 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-white">Technical Arsenal</h2>
                    <p className="text-xs text-slate-400">Core programming, full-stack, and intelligent tools</p>
                  </div>
                </div>

                {/* Filter Pills */}
                <div className="flex flex-wrap gap-1 bg-slate-950/80 p-1 rounded-xl border border-slate-800 text-[11px]">
                  {[
                    { id: 'all', label: 'All' },
                    { id: 'languages', label: 'Languages' },
                    { id: 'web', label: 'Full-Stack' },
                    { id: 'tools', label: 'Tools & DB' },
                  ].map(f => (
                    <button
                      key={f.id}
                      onClick={() => { playSound('click'); setActiveSkillCategory(f.id); }}
                      className={`px-2.5 py-1 rounded-lg transition-colors font-medium ${
                        activeSkillCategory === f.id
                          ? 'bg-indigo-600 text-white'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Skill Pill Groups */}
              <div className="space-y-4">
                {(activeSkillCategory === 'all' || activeSkillCategory === 'languages') && (
                  <div>
                    <span className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider block mb-2">
                      Programming Languages & Core
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {skills.languages.map(l => (
                        <span key={l} className="px-3 py-1.5 rounded-xl bg-slate-800/80 text-white font-mono text-xs border border-slate-700/60 shadow-sm font-semibold">
                          {l}
                        </span>
                      ))}
                      {skills.core.map(c => (
                        <span key={c} className="px-3 py-1.5 rounded-xl bg-slate-800/40 text-slate-300 text-xs border border-slate-800">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {(activeSkillCategory === 'all' || activeSkillCategory === 'web') && (
                  <div>
                    <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block mb-2">
                      Full-Stack & Web Engineering
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {skills.webDevelopment.map(w => (
                        <span key={w} className="px-3 py-1.5 rounded-xl bg-emerald-950/30 text-emerald-300 font-mono text-xs border border-emerald-500/20">
                          {w}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {(activeSkillCategory === 'all' || activeSkillCategory === 'tools') && (
                  <div>
                    <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block mb-2">
                      Databases, Data Science & Development Tools
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {skills.databasesAndTools.map(t => (
                        <span key={t} className="px-3 py-1.5 rounded-xl bg-cyan-950/30 text-cyan-300 font-mono text-xs border border-cyan-500/20">
                          {t}
                        </span>
                      ))}
                      {skills.librariesAndData.map(d => (
                        <span key={d} className="px-3 py-1.5 rounded-xl bg-purple-950/30 text-purple-300 font-mono text-xs border border-purple-500/20">
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-400">
              <span>Verified in project workflows & hackathons</span>
              <span className="text-indigo-400 font-mono font-medium">Java • Python • SQL • React • Node</span>
            </div>
          </div>

          {/* Bento Card 2: Academic & Internship Spotlight (Span 1) */}
          <div className="glass-panel rounded-3xl p-6 border border-slate-800/80 bg-slate-900/60 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-white">Education & Intern</h2>
                  <p className="text-xs text-slate-400">Academic & real-world track</p>
                </div>
              </div>

              {/* Education entry */}
              <div className="space-y-4">
                <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800">
                  <span className="text-[10px] font-mono text-indigo-400 uppercase font-bold block mb-1">
                    B.Tech CSE (2024–2028)
                  </span>
                  <h4 className="text-xs font-bold text-white">Vignana Bharathi Inst. of Tech</h4>
                  <p className="text-[11px] text-slate-400 mt-1">
                    CGPA: <strong className="text-emerald-400 font-mono">7.56</strong> • Hyderabad, India
                  </p>
                </div>

                {/* Internship entry */}
                <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800">
                  <span className="text-[10px] font-mono text-purple-400 uppercase font-bold block mb-1">
                    Internship Experience
                  </span>
                  <h4 className="text-xs font-bold text-white">Data Analyst Intern</h4>
                  <p className="text-[11px] text-indigo-300 font-medium">Elevated Labs</p>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Data cleaning, statistical modeling, Pandas & Matplotlib visual dashboards.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Intermediate: 76.4%</span>
              <span>SSC: 76.0%</span>
            </div>
          </div>

          {/* Bento Card 3: FinTrack (Featured Project) */}
          <div className="glass-panel rounded-3xl p-6 border border-emerald-500/20 bg-gradient-to-b from-slate-900/90 to-emerald-950/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                  <PieChart className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-mono">
                  Full-Stack FinTech
                </span>
              </div>

              <h3 className="text-lg font-bold text-white">FinTrack</h3>
              <p className="text-xs text-emerald-300 font-medium mt-0.5">Personal Finance & Predictive Budgeting</p>
              
              <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                Full-stack web application featuring interactive dashboards, expense analytics with Recharts, AI-powered financial tips, and robust JWT + Helmet security.
              </p>

              <div className="flex flex-wrap gap-1 mt-4">
                {['React', 'Node.js', 'Express', 'MySQL', 'JWT', 'Railway'].map(t => (
                  <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/80 text-emerald-300 border border-emerald-500/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={() => {
                  playSound('open');
                  if (onOpenProject) onOpenProject('fintrack');
                }}
                className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 transition-colors"
              >
                <span>Launch FinTrack Sandbox</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href="https://github.com/samikshaambati0369-alt"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Bento Card 4: VoxShield AI (Featured Project) */}
          <div className="glass-panel rounded-3xl p-6 border border-violet-500/20 bg-gradient-to-b from-slate-900/90 to-violet-950/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center border border-violet-500/30">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-violet-500/20 text-violet-300 border border-violet-500/30 font-mono">
                  AI Cybersecurity
                </span>
              </div>

              <h3 className="text-lg font-bold text-white">VoxShield AI</h3>
              <p className="text-xs text-violet-300 font-medium mt-0.5">Voice Cloning & Deepfake Detection</p>
              
              <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                Cybersecurity intelligence extracting acoustic MFCC vectors, spectral flux, and pitch jitter to flag cloned voices and biometric replay fraud.
              </p>

              <div className="flex flex-wrap gap-1 mt-4">
                {['Python', 'Machine Learning', 'Audio Spectrogram', 'NumPy', 'Speech-to-Text'].map(t => (
                  <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/80 text-violet-300 border border-violet-500/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={() => {
                  playSound('open');
                  if (onOpenProject) onOpenProject('voxshield');
                }}
                className="text-xs font-bold text-violet-400 hover:text-violet-300 flex items-center gap-1.5 transition-colors"
              >
                <span>Launch Audio Radar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href="https://github.com/samikshaambati0369-alt"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Bento Card 5: AegisZero (Featured Project) */}
          <div className="glass-panel rounded-3xl p-6 border border-cyan-500/20 bg-gradient-to-b from-slate-900/90 to-cyan-950/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/30">
                  <Cpu className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-mono">
                  WorkatoHack '25
                </span>
              </div>

              <h3 className="text-lg font-bold text-white">AegisZero</h3>
              <p className="text-xs text-cyan-300 font-medium mt-0.5">Enterprise Agentic Orchestration</p>
              
              <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                Autonomous workflow orchestrator built with Team S3vertex on Workato. Operates closed-loop recovery: Detect ➔ Decide ➔ Execute ➔ Observe ➔ Verify ➔ Recover.
              </p>

              <div className="flex flex-wrap gap-1 mt-4">
                {['Workato', 'Enterprise Agents', 'Incident Orchestration', 'Self-Healing'].map(t => (
                  <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/80 text-cyan-300 border border-cyan-500/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={() => {
                  playSound('open');
                  if (onOpenProject) onOpenProject('aegiszero');
                }}
                className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
              >
                <span>Run Agentic Simulator</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <span className="text-[11px] font-mono text-slate-400">Team S3vertex</span>
            </div>
          </div>

          {/* Bento Card 6: Hackathons & Certifications (Span 2) */}
          <div className="md:col-span-2 glass-panel rounded-3xl p-6 border border-slate-800/80 bg-slate-900/60 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-white">Hackathons & Verified Certifications</h2>
                  <p className="text-xs text-slate-400">Competitive engineering and formal credentials</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Hackathon spotlight */}
                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white">WorkatoHack 2025</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300">Team S3vertex</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Engineered AegisZero enterprise self-healing agent loop under the Orchestrator + Agents track.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white">Smart India Hackathon (SIH)</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300">Participant</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    AI-Based Crop Recommendation system integrating soil telemetry & predictive analytics.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Infosys Springboard: Java</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Object-Oriented Programming, collections framework & core algorithmic problem solving.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Infosys Springboard: Python</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Python programming paradigms, data structures, and foundational automation scripting.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400">
              Actively preparing for scalable backend engineering & AI developer roles.
            </div>
          </div>

          {/* Bento Card 7: Direct Contact Box (Span 1) */}
          <div className="glass-panel rounded-3xl p-6 border border-pink-500/20 bg-gradient-to-b from-slate-900/90 to-pink-950/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-pink-500/10 text-pink-400 flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-white">Connect Directly</h2>
                  <p className="text-xs text-slate-400">Reach out for opportunities</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between text-xs">
                  <div className="truncate mr-2">
                    <span className="text-[10px] text-slate-400 block font-medium">Email</span>
                    <span className="font-mono text-white text-xs truncate">{personal.email}</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personal.email, 'email')}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-medium">Phone</span>
                    <span className="font-mono text-white text-xs">{personal.phone}</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personal.phone, 'phone')}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors shrink-0"
                    title="Copy Phone"
                  >
                    {copiedField === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <a
                href={`mailto:${personal.email}?subject=Interview%20Inquiry%20-%20Samiksha%20Ambati`}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-pink-500/20 transition-all"
              >
                <Mail className="w-3.5 h-3.5" />
                Draft Interview Email
              </a>
            </div>
          </div>

        </div>

        {/* Footer */}
        <footer className="pt-8 pb-4 text-center text-xs text-slate-500 space-y-2 border-t border-slate-800/80">
          <p>© {new Date().getFullYear()} {personal.name} • Vignana Bharathi Institute of Technology (VBIT), Hyderabad</p>
          <div className="flex items-center justify-center gap-4 text-slate-400">
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <span>•</span>
            <a href={personal.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <span>•</span>
            <button onClick={onSwitchToDesktop} className="hover:text-indigo-400 transition-colors">Launch DevOS Mode</button>
          </div>
        </footer>

      </div>
    </div>
  );
}
