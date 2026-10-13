import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-black/[0.08] bg-white py-12 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-black/60">
        {/* Left: Name & Year */}
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#BFFF00]" />
          <strong className="text-black uppercase font-bold tracking-wider">
            SAMIKSHA AMBATI • 2026
          </strong>
          <span className="text-black/30">|</span>
          <span>B.TECH CSE • VBIT HYDERABAD</span>
        </div>

        {/* Center: Live Hyderabad Time */}
        <div className="flex items-center gap-2">
          <span className="text-black/40">HYDERABAD (IST):</span>
          <span className="text-black font-bold">{time || '01:00 AM IST'}</span>
        </div>

        {/* Right: Socials & Back to Top */}
        <div className="flex items-center gap-6">
          <a
            href="https://linkedin.com/in/samiksha-ambati-239763438"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black transition-colors uppercase font-bold text-[11px]"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/samikshaambati0369-alt"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black transition-colors uppercase font-bold text-[11px]"
          >
            GitHub
          </a>
          <a
            href="mailto:samikshaambati0369@gmail.com"
            className="hover:text-black transition-colors uppercase font-bold text-[11px]"
          >
            Email
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-[#FAFAFA] border border-black/10 hover:border-black text-black transition-colors"
            title="Scroll to Top"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
