import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code, Cpu, Workflow, ShieldCheck } from 'lucide-react';

export default function Services() {
  const capabilities = [
    {
      num: '01',
      title: 'FULL-STACK WEB DEVELOPMENT',
      subtitle: 'Modern Client-Server Architectures & Interactive Frontends',
      description:
        'Designing and implementing responsive web applications using React, Vite, Node.js, Express.js, and relational databases. Prioritizing performance, clean state management, and intuitive user experiences.',
      tags: ['React.js', 'Express.js', 'Node.js', 'MySQL', 'REST APIs', 'Vite'],
      icon: Code,
    },
    {
      num: '02',
      title: 'AI / ML APPLICATION DEVELOPMENT',
      subtitle: 'Applied Machine Learning & Signal Processing',
      description:
        'Building applied AI prototypes that extract actionable signal from complex data. Experience in feature engineering, audio spectrogram analysis, acoustic biometric classification, and predictive modeling with Python.',
      tags: ['Python', 'Audio Processing', 'Feature Extraction', 'Librosa', 'NumPy'],
      icon: Cpu,
    },
    {
      num: '03',
      title: 'AUTOMATION & API INTEGRATION',
      subtitle: 'Autonomous Agent Loops & Enterprise Connectors',
      description:
        'Engineering resilient integration workflows that connect enterprise services and autonomously handle operational exceptions. Demonstrated through WorkatoHack closed-loop agent recovery pipelines.',
      tags: ['Workato', 'Agentic Workflows', 'API Orchestration', 'Self-Healing Loops'],
      icon: Workflow,
    },
    {
      num: '04',
      title: 'CYBERSECURITY-FOCUSED APPLICATIONS',
      subtitle: 'Defensive Software Design & Identity Protection',
      description:
        'Applying security-first engineering principles: implementing robust authentication (JWT), HTTP security headers (Helmet), CORS configuration, and developing systems to detect synthetic identity impersonation.',
      tags: ['JWT Auth', 'Biometric Spoof Detection', 'Defensive Coding', 'Rate Limiting'],
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="services" className="py-24 sm:py-32 px-6 sm:px-10 max-w-7xl mx-auto border-t border-black/[0.08]">
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
            [ 03 / CAPABILITIES & FOCUS ]
          </span>
          <div className="h-[1px] w-12 sm:w-24 bg-black/[0.08]" />
        </div>
        <span className="text-xs font-mono text-black/50">
          AREAS OF DEMONSTRATED WORK
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
          AREAS OF PRACTICE.<br />
          DEMONSTRATED EXPERTISE.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-black/65 font-normal">
          Disciplines developed through rigorous university coursework, competitive hackathons, and personal project building.
        </p>
      </motion.div>

      {/* Stacked Horizontal Service Cards */}
      <div className="space-y-4 sm:space-y-6">
        {capabilities.map((cap, idx) => {
          const Icon = cap.icon;
          return (
            <motion.div
              key={cap.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative rounded-2xl sm:rounded-3xl border border-black/10 bg-white p-6 sm:p-9 transition-all duration-300 hover:border-black/30 hover:shadow-xl hover:-translate-y-0.5"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                {/* Number & Icon (Cols 2) */}
                <div className="lg:col-span-2 flex items-center justify-between lg:block space-y-4">
                  <span className="text-xs font-mono font-bold text-black/40 group-hover:text-black transition-colors block">
                    /{cap.num}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-[#FAFAFA] border border-black/10 flex items-center justify-center text-black group-hover:bg-[#BFFF00] group-hover:border-[#BFFF00] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Title & Subtitle (Cols 5) */}
                <div className="lg:col-span-5 space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight text-black group-hover:text-black/85 transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-xs font-mono text-black/60 font-semibold tracking-wide uppercase">
                    {cap.subtitle}
                  </p>
                </div>

                {/* Description & Tags (Cols 5) */}
                <div className="lg:col-span-5 space-y-4">
                  <p className="text-sm text-black/75 leading-relaxed font-normal">
                    {cap.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cap.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full bg-[#FAFAFA] border border-black/[0.08] text-[11px] font-mono text-black/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
