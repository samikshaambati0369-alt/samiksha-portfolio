import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { playSound } from '../../utils/sound';
import confetti from 'canvas-confetti';
import { Mail, Phone, MapPin, Copy, Check, Send, Sparkles, MessageSquare } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../icons/BrandIcons';

export default function ContactApp() {
  const { personal } = portfolioData;
  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text, field) => {
    playSound('click');
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    playSound('success');
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
    });
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col h-full bg-slate-900 text-slate-100 overflow-y-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-950/80 via-slate-900 to-slate-900 border-b border-pink-500/20 p-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 shadow-lg shadow-pink-500/10">
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold tracking-tight text-white">Get in Touch</h2>
            <p className="text-xs text-slate-400 mt-0.5">Let's discuss engineering opportunities, internships, or collaborate.</p>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
        {/* Contact Coordinates */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Direct Contact Information
          </h3>

          {/* Email */}
          <div className="p-3.5 rounded-xl bg-slate-800/40 border border-slate-700/60 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-pink-500/10 text-pink-400 flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 block font-medium">Email Address</span>
                <a href={`mailto:${personal.email}`} className="text-xs font-bold text-white hover:text-pink-300 transition-colors">
                  {personal.email}
                </a>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(personal.email, 'email')}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              title="Copy Email"
            >
              {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Phone */}
          <div className="p-3.5 rounded-xl bg-slate-800/40 border border-slate-700/60 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 block font-medium">Phone / WhatsApp</span>
                <a href={`tel:${personal.phone}`} className="text-xs font-bold text-white hover:text-purple-300 transition-colors">
                  {personal.phone}
                </a>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(personal.phone, 'phone')}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              title="Copy Phone"
            >
              {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Location */}
          <div className="p-3.5 rounded-xl bg-slate-800/40 border border-slate-700/60 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] text-slate-400 block font-medium">Current Location</span>
              <span className="text-xs font-bold text-white">{personal.location}</span>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="pt-2">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
              Professional Profiles
            </span>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-800/40 hover:bg-slate-800 border border-slate-700/60 flex items-center gap-2.5 transition-colors text-xs font-semibold text-slate-200"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-400" />
                LinkedIn
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-800/40 hover:bg-slate-800 border border-slate-700/60 flex items-center gap-2.5 transition-colors text-xs font-semibold text-slate-200"
              >
                <GithubIcon className="w-4 h-4 text-slate-200" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Message Simulator */}
        <div className="p-5 rounded-2xl bg-slate-800/30 border border-slate-700/60 flex flex-col justify-between">
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-1 flex items-center gap-2">
              <MessageSquare className="w-3.5 h-3.5 text-pink-400" />
              Direct Message Dispatch
            </h3>
            <p className="text-[11px] text-slate-400 mb-4">
              Leave a note for Samiksha. A direct mail draft will be prepared.
            </p>

            {submitted ? (
              <div className="p-6 text-center space-y-3 bg-emerald-950/30 border border-emerald-500/30 rounded-xl">
                <Sparkles className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="text-sm font-bold text-white">Message Prepared!</h4>
                <p className="text-xs text-slate-300">
                  Thank you for reaching out! You can also connect directly via{' '}
                  <a href={`mailto:${personal.email}`} className="text-emerald-400 underline font-semibold">
                    {personal.email}
                  </a>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs rounded-lg text-slate-300 transition-colors"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="text-[11px] font-medium text-slate-400 block mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Hiring Manager / Engineer"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-pink-500"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-medium text-slate-400 block mb-1">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@company.com"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-pink-500"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-medium text-slate-400 block mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Samiksha, we'd love to interview you for our engineering role..."
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-pink-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-bold text-xs rounded-lg transition-all shadow-lg shadow-pink-500/20 flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  Dispatch Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
