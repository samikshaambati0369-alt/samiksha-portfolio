import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { playSound } from '../../utils/sound';
import { User, GraduationCap, Briefcase, Award, Code, MapPin, Mail, Phone, ExternalLink, Download, FileText, CheckCircle } from 'lucide-react';

export default function ProfileApp({ onOpenContact }) {
  const { personal, education, experience, hackathons, certifications, skills } = portfolioData;

  const handlePrint = () => {
    playSound('open');
    window.print();
  };

  return (
    <div className="flex flex-col h-full bg-slate-900 text-slate-100 overflow-y-auto">
      {/* Header Profile Hero */}
      <div className="bg-gradient-to-r from-indigo-950/80 via-slate-900 to-slate-900 border-b border-indigo-500/20 p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-xl shadow-indigo-500/20 border-2 border-indigo-400/30">
              SA
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-extrabold tracking-tight text-white">{personal.name}</h1>
                <span className="px-2.5 py-0.5 text-[11px] font-semibold rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  3rd Year CSE
                </span>
              </div>
              <p className="text-sm text-indigo-200/80 font-medium mt-0.5">{personal.role}</p>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mt-2">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                  {personal.location}
                </span>
                <span className="flex items-center gap-1">
                  <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
                  VBIT Hyderabad (CGPA 7.56)
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              Print / Save CV
            </button>
            <button
              onClick={() => {
                playSound('click');
                if (onOpenContact) onOpenContact();
              }}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors shadow-lg shadow-indigo-600/30"
            >
              <Mail className="w-3.5 h-3.5" />
              Contact Directly
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="p-6 space-y-6 flex-1">
        {/* Bio */}
        <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60">
          <h3 className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <User className="w-3.5 h-3.5" />
            Executive Summary
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            {personal.bio}
          </p>
          <div className="mt-3 pt-3 border-t border-slate-800 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-400 font-medium">Desired Internship Locations:</span>
            {personal.targetLocations.map(loc => (
              <span key={loc} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px] font-mono">
                {loc}
              </span>
            ))}
          </div>
        </div>

        {/* Work Experience */}
        <div>
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
            Industry Experience
          </h3>
          <div className="space-y-3">
            {experience.map((exp, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div>
                    <h4 className="text-sm font-bold text-white">{exp.role}</h4>
                    <span className="text-xs font-semibold text-indigo-400">{exp.company}</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-800 border border-slate-700">
                    {exp.type}
                  </span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300 mb-3">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-indigo-400 font-bold">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                  {exp.tools.map(tool => (
                    <span key={tool} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-indigo-300 border border-slate-800">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div>
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
            Academic Timeline
          </h3>
          <div className="space-y-3">
            {education.map((edu, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-xs font-bold text-white">{edu.degree}</h4>
                    {edu.current && (
                      <span className="px-1.5 py-0.5 text-[10px] rounded bg-emerald-500/20 text-emerald-300 font-semibold">
                        In Progress
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-indigo-300 mt-0.5">{edu.institution}, {edu.location}</p>
                  <p className="text-xs text-slate-400 mt-1">{edu.details}</p>
                </div>
                <div className="sm:text-right shrink-0">
                  <span className="text-xs font-bold text-white font-mono block">{edu.score}</span>
                  <span className="text-[11px] text-slate-400 font-mono">{edu.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hackathons & Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Hackathons */}
          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              Hackathons & Team Innovation
            </h3>
            <div className="space-y-3">
              {hackathons.map((h, i) => (
                <div key={i} className="border-l-2 border-amber-400/50 pl-3 py-1">
                  <div className="flex items-center justify-between text-xs">
                    <strong className="text-white font-semibold">{h.title}</strong>
                    <span className="text-[10px] font-mono text-amber-400">{h.team}</span>
                  </div>
                  <p className="text-[11px] text-indigo-300 mt-0.5">{h.project}</p>
                  <p className="text-xs text-slate-400 mt-1">{h.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              Verified Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((c, i) => (
                <div key={i} className="border-l-2 border-emerald-400/50 pl-3 py-1">
                  <strong className="text-xs text-white font-semibold block">{c.title}</strong>
                  <span className="text-[11px] text-emerald-400 block font-mono">{c.issuer}</span>
                  <p className="text-xs text-slate-400 mt-1">{c.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
