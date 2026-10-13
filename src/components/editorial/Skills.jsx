import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Layout, Server, Database, Wrench, Cpu } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      category: 'PROGRAMMING',
      icon: Terminal,
      skills: ['Python', 'Java', 'SQL'],
      desc: 'Core languages utilized for algorithmic problem solving, backend services, and computational scripting.',
    },
    {
      category: 'FRONTEND',
      icon: Layout,
      skills: ['React', 'JavaScript', 'HTML', 'CSS'],
      desc: 'Building responsive, component-driven user interfaces with modern client-side architectures.',
    },
    {
      category: 'BACKEND',
      icon: Server,
      skills: ['Express.js', 'FastAPI', 'REST APIs'],
      desc: 'Designing stateless REST endpoints, server-side routing, request validation, and API authentication.',
    },
    {
      category: 'DATABASES',
      icon: Database,
      skills: ['MySQL'],
      desc: 'Relational schema architecture, indexed queries, foreign-key constraints, and transaction data pipelines.',
    },
    {
      category: 'TOOLS',
      icon: Wrench,
      skills: ['Git', 'GitHub', 'VS Code', 'Postman'],
      desc: 'Modern version control, endpoint verification suites, collaborative repositories, and debugging.',
    },
    {
      category: 'AI / ML',
      icon: Cpu,
      skills: ['Machine Learning Fundamentals', 'Deep Learning', 'Audio Analysis'],
      desc: 'Acoustic feature extraction, Mel-Frequency Cepstral Coefficients (MFCC), and deepfake detection algorithms.',
    },
  ];

  return (
    <section id="skills" className="py-24 sm:py-32 px-6 sm:px-10 max-w-7xl mx-auto border-t border-black/[0.08]">
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
            [ 04 / TECHNICAL ARSENAL ]
          </span>
          <div className="h-[1px] w-12 sm:w-24 bg-black/[0.08]" />
        </div>
        <span className="text-xs font-mono text-black/50">
          PROVEN COMPETENCIES ONLY
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
          PRACTICAL SKILLS.<br />
          NO ARBITRARY PERCENTAGES.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-black/65 font-normal">
          A verified inventory of programming languages, frontend and backend technologies, databases, and applied AI tools I actively build with and can defend in technical interviews.
        </p>
      </motion.div>

      {/* Editorial Typographic Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {skillCategories.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group p-6 sm:p-8 rounded-2xl border border-black/10 bg-white hover:border-black/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-6 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#FAFAFA] border border-black/[0.08] flex items-center justify-center text-black group-hover:bg-[#BFFF00] transition-colors duration-200">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-black/60">
                      {item.category}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-black/40 font-bold">
                    0{idx + 1}
                  </span>
                </div>

                {/* Typographic Skills Display */}
                <div className="space-y-1.5 pt-2">
                  {item.skills.map((skill) => (
                    <div
                      key={skill}
                      className="text-lg sm:text-xl font-black font-display text-black uppercase tracking-tight group-hover:translate-x-1 transition-transform duration-200 cursor-default"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-xs text-black/60 leading-relaxed pt-4 border-t border-black/[0.06] font-normal">
                {item.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
