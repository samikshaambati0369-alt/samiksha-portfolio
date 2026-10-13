import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowUp, Mail, Copy, Check, Send, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../icons/BrandIcons';
import { playSound } from '../../utils/soundManager';

export default function Contact() {
  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [mailtoUrl, setMailtoUrl] = useState('');

  const contactInfo = {
    email: 'samikshaambati0369@gmail.com',
    location: 'Hyderabad, Telangana, India',
    linkedin: 'https://linkedin.com/in/samiksha-ambati-239763438',
    github: 'https://github.com/samikshaambati0369-alt',
  };

  const copyToClipboard = (text, field) => {
    playSound('click');
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    playSound('click');
    const emailSubject = encodeURIComponent(
      formData.subject.trim() || `Portfolio Inquiry from ${formData.name.trim()}`
    );
    const emailBody = encodeURIComponent(
      `Hello Samiksha,\n\nName: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}\n\nSent via Developer Portfolio`
    );

    const generatedMailto = `mailto:${contactInfo.email}?subject=${emailSubject}&body=${emailBody}`;
    setMailtoUrl(generatedMailto);
    setSubmitted(true);

    // Open email client with composed message
    window.location.href = generatedMailto;
  };

  const scrollToTop = () => {
    playSound('click');
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
        <div className="flex items-center gap-2 text-xs font-mono text-black/60">
          <span className="w-2 h-2 rounded-full bg-[#BFFF00] ring-2 ring-[#BFFF00]/40 animate-pulse" />
          <span>OPEN FOR INTERNSHIPS</span>
        </div>
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
          LET'S BUILD<br />
          SOMETHING MEANINGFUL.
        </h2>
        <p className="text-base sm:text-xl text-black/75 leading-relaxed font-normal max-w-2xl">
          I'm interested in building useful technology, collaborating with developers, and exploring opportunities to solve real problems through software.
        </p>
      </motion.div>

      {/* Contact Grid: Direct Coordinates + Real Form */}
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
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-black/50">
                DIRECT CHANNELS
              </span>
              <span className="text-xs font-mono text-black/40">HYDERABAD, IN</span>
            </div>

            {/* Email Channel */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FAFAFA] border border-black/[0.06]">
              <div className="truncate mr-3">
                <span className="text-[10px] font-mono text-black/50 uppercase block">PRIMARY INBOX</span>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-xs sm:text-sm font-mono font-bold text-black hover:underline truncate block"
                >
                  {contactInfo.email}
                </a>
              </div>
              <button
                type="button"
                onClick={() => copyToClipboard(contactInfo.email, 'email')}
                className="p-2 rounded-xl bg-white hover:bg-black/5 border border-black/10 text-black transition-colors shrink-0"
                title="Copy Email"
                aria-label="Copy email address"
              >
                {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Direct Email Dispatch Button */}
            <a
              href={`mailto:${contactInfo.email}`}
              onMouseEnter={() => playSound('hover')}
              onClick={() => playSound('click')}
              className="w-full py-3 rounded-full bg-[#0A0A0A] text-white text-xs font-bold uppercase tracking-wider hover:bg-black flex items-center justify-center gap-2 transition-transform duration-200 hover:scale-[1.02] shadow-sm"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Compose Email Directly</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => playSound('hover')}
                onClick={() => playSound('click')}
                className="p-3.5 rounded-2xl border border-black/10 hover:border-black bg-white flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-black transition-all hover:scale-[1.02]"
              >
                <LinkedinIcon className="w-4 h-4 text-[#0077B5]" />
                <span>LinkedIn</span>
              </a>

              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => playSound('hover')}
                onClick={() => playSound('click')}
                className="p-3.5 rounded-2xl border border-black/10 hover:border-black bg-white flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-black transition-all hover:scale-[1.02]"
              >
                <GithubIcon className="w-4 h-4 text-black" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Internship Notice */}
            <div className="p-4 rounded-2xl bg-[#FAFAFA] border border-black/[0.06] text-xs space-y-1">
              <div className="font-bold font-mono text-black uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#BFFF00]" />
                <span>INTERNSHIP OPPORTUNITIES</span>
              </div>
              <p className="text-black/70 text-[11px] leading-relaxed">
                Currently open for software engineering, full-stack, and applied AI developer internships for 2026/2028.
              </p>
            </div>
          </div>

          {/* Quick Back to Top */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 bg-white hover:border-black text-xs font-mono font-bold uppercase text-black transition-all"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </motion.div>

        {/* Right Column: Verified Contact Form (Cols 7) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-7"
        >
          <div className="p-6 sm:p-10 rounded-3xl border border-black/10 bg-white shadow-sm">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-black/50 block mb-6">
              SEND A DIRECT MESSAGE
            </span>

            {submitted ? (
              <div className="p-8 text-center space-y-4 rounded-2xl border border-black/10 bg-[#FAFAFA] animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-[#BFFF00] text-black mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black font-display uppercase tracking-tight text-black">
                  MESSAGE DISPATCH PREPARED
                </h3>
                <p className="text-sm text-black/75 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>! Your email client has been prepared with your message to <strong>{contactInfo.email}</strong>.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <a
                    href={mailtoUrl}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-black/80 transition-all"
                  >
                    <span>Open in Email App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-5 py-2.5 rounded-full border border-black/20 text-xs font-mono font-bold uppercase tracking-wider hover:bg-black/5 transition-all"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs font-mono font-bold uppercase tracking-wider text-black/70">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Alex Chen"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-black/10 text-sm text-black placeholder:text-black/30 focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-mono font-bold uppercase tracking-wider text-black/70">
                      Your Email *
                    </label>
                    <input
                      id="contact-email"
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
                  <label htmlFor="contact-subject" className="text-xs font-mono font-bold uppercase tracking-wider text-black/70">
                    Subject / Opportunity Type
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="e.g. Software Engineering Internship / Technical Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-black/10 text-sm text-black placeholder:text-black/30 focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs font-mono font-bold uppercase tracking-wider text-black/70">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    placeholder="Hi Samiksha, I came across your portfolio and would like to discuss an engineering opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-black/10 text-sm text-black placeholder:text-black/30 focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  onMouseEnter={() => playSound('hover')}
                  className="w-full py-4 rounded-full bg-[#0A0A0A] hover:bg-black text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-transform duration-200 hover:scale-[1.01] active:scale-95 shadow-md"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
