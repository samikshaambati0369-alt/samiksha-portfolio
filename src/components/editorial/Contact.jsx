import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Phone, MapPin, Copy, Check, Send, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../icons/BrandIcons';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', role: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = {
    email: 'samikshaambati0369@gmail.com',
    phone: '+91 6304733393',
    location: 'Hyderabad, Telangana, India',
    linkedin: 'https://linkedin.com/in/samiksha-ambati-239763438',
    github: 'https://github.com/samikshaambati0369-alt',
  };

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
    });

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-6 sm:px-10 max-w-7xl mx-auto border-t border-black/[0.08]">
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
            [ 07 / GET IN TOUCH ]
          </span>
          <div className="h-[1px] w-12 sm:w-24 bg-black/[0.08]" />
        </div>
        <span className="text-xs font-mono text-black/50">
          2026 INTERNSHIPS & ROLES
        </span>
      </motion.div>

      {/* Dramatic Oversized Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 sm:mb-20 max-w-4xl space-y-6"
      >
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase font-display tracking-tighter text-[#0A0A0A] leading-[0.95]">
          LET’S BUILD<br />
          SOMETHING MEANINGFUL.
        </h2>
        <p className="text-base sm:text-xl text-black/75 leading-relaxed font-normal max-w-2xl">
          I am actively seeking software engineering and AI/ML internship opportunities. Whether you have an open position, an ambitious project, or wish to connect, my inbox is always open.
        </p>
      </motion.div>

      {/* Contact Grid: Direct Coordinates + Functional Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Direct Coordinates (Cols 5) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="p-6 sm:p-8 rounded-3xl border border-black/10 bg-white space-y-6 shadow-sm">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-black/50 block">
              DIRECT REACH
            </span>

            {/* Email */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FAFAFA] border border-black/[0.06]">
              <div className="truncate mr-3">
                <span className="text-[10px] font-mono text-black/50 uppercase block">EMAIL ADDRESS</span>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-xs sm:text-sm font-mono font-bold text-black hover:underline truncate block"
                >
                  {contactInfo.email}
                </a>
              </div>
              <button
                onClick={() => copyToClipboard(contactInfo.email, 'email')}
                className="p-2 rounded-xl bg-white hover:bg-black/5 border border-black/10 text-black transition-colors shrink-0"
                title="Copy Email"
              >
                {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FAFAFA] border border-black/[0.06]">
              <div>
                <span className="text-[10px] font-mono text-black/50 uppercase block">PHONE / WHATSAPP</span>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-xs sm:text-sm font-mono font-bold text-black hover:underline"
                >
                  {contactInfo.phone}
                </a>
              </div>
              <button
                onClick={() => copyToClipboard(contactInfo.phone, 'phone')}
                className="p-2 rounded-xl bg-white hover:bg-black/5 border border-black/10 text-black transition-colors shrink-0"
                title="Copy Phone"
              >
                {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location */}
            <div className="p-3.5 rounded-2xl bg-[#FAFAFA] border border-black/[0.06]">
              <span className="text-[10px] font-mono text-black/50 uppercase block">LOCATION BASE</span>
              <span className="text-xs sm:text-sm font-mono font-bold text-black">
                {contactInfo.location}
              </span>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-2xl border border-black/10 hover:border-black bg-white flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-black transition-all hover:scale-[1.02]"
              >
                <LinkedinIcon className="w-4 h-4 text-[#0077B5]" />
                <span>LinkedIn</span>
              </a>

              <a
                href={contactInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-2xl border border-black/10 hover:border-black bg-white flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-black transition-all hover:scale-[1.02]"
              >
                <GithubIcon className="w-4 h-4 text-black" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Functional Contact Form (Cols 7) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-7"
        >
          <div className="p-6 sm:p-10 rounded-3xl border border-black/10 bg-white shadow-sm">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-black/50 block mb-6">
              SEND AN INQUIRY
            </span>

            {submitted ? (
              <div className="p-8 text-center space-y-4 rounded-2xl border border-black/10 bg-[#FAFAFA]">
                <div className="w-12 h-12 rounded-full bg-[#BFFF00] text-black mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black font-display uppercase tracking-tight text-black">
                  INQUIRY RECORDED
                </h3>
                <p className="text-sm text-black/75 max-w-md mx-auto">
                  Thank you for reaching out, {formData.name}! A direct dispatch draft has been logged. You can also reach out directly at{' '}
                  <a href={`mailto:${contactInfo.email}`} className="font-bold underline text-black">
                    {contactInfo.email}
                  </a>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', role: '', message: '' });
                  }}
                  className="mt-4 px-5 py-2.5 rounded-full border border-black/20 text-xs font-mono font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-black/70">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Chen"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-black/10 text-sm text-black placeholder:text-black/30 focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-black/70">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-black/10 text-sm text-black placeholder:text-black/30 focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-black/70">
                    Subject / Opportunity Type
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Software Engineering Internship / Technical Collaboration"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-black/10 text-sm text-black placeholder:text-black/30 focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-black/70">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Hi Samiksha, I came across your portfolio and would love to discuss an engineering internship..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-black/10 text-sm text-black placeholder:text-black/30 focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#0A0A0A] hover:bg-black text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-transform duration-200 hover:scale-[1.01] active:scale-95 shadow-md"
                >
                  <span>Transmit Inquiry</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
