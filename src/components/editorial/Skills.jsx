import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      category: 'PROGRAMMING',
      skills: ['Python', 'Java', 'SQL'],
      desc: 'Core languages utilized for algorithmic problem solving, backend services, and automated data scripts.',
    },
    {
      category: 'FRONTEND DEVELOPMENT',
      skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
      desc: 'Building responsive, state-driven user interfaces with modern client-side architectures and component design.',
    },
    {
      category: 'BACKEND & APIS',
      skills: ['Express.js', 'FastAPI', 'Node.js', 'REST APIs'],
      desc: 'Designing stateless REST endpoints, routing, error-handling middleware, and authentication workflows.',
    },
    {
      category: 'DATA & VISUALIZATION',
      skills: ['MySQL', 'Pandas', 'Recharts', 'NumPy', 'Matplotlib'],
      desc: 'Query optimization, relational schema design, exploratory data processing, and interactive analytical charts.',
    },
    {
      category: 'DEVELOPMENT TOOLS',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Jupyter Notebook'],
      desc: 'Version control workflows, API testing suites, reproducible exploratory notebooks, and modular coding.',
    },
    {
      category: 'ARTIFICIAL INTELLIGENCE & ML',
      skills: ['Machine Learning Fundamentals', 'Deep Learning Concepts', 'Audio Analysis', 'Signal Processing'],
      desc: 'Feature engineering from raw audio inputs, acoustic spectrogram analysis, and biometric authentication models.',
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
          TYPOGRAPHIC SKILLS.<br />
          NO ARBITRARY PERCENTAGES.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-black/65 font-normal">
          A transparent inventory of languages, frameworks, and engineering tools I actively code with and can defend in technical interviews.
        </p>
      </motion.div>

      {/* Editorial Typographic Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {skillCategories.map((item, idx) => (
          <motion.div
            key={item.category}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="p-6 sm:p-8 rounded-2xl border border-black/10 bg-white hover:border-black/30 transition-all duration-200 flex flex-col justify-between space-y-6 shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono text-black/40 font-bold">
                  0{idx + 1}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#BFFF00]" />
              </div>

              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-black/60 mb-3">
                {item.category}
              </h3>

              {/* Large Typographic Skills Display */}
              <div className="space-y-1">
                {item.skills.map((skill) => (
                  <div
                    key={skill}
                    className="text-xl sm:text-2xl font-black font-display text-black uppercase tracking-tight hover:translate-x-1 transition-transform cursor-default"
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
        ))}
      </div>
    </section>
  );
}
