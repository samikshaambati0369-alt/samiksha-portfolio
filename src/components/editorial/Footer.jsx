import React, { useState, useEffect } from 'react';
import { ArrowUp, RotateCcw } from 'lucide-react';
import LogoMark from '../brand/LogoMark';
import { playSound } from '../../utils/soundManager';

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
    playSound('click');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReplayIntro = () => {
    playSound('click');
    window.dispatchEvent(new CustomEvent('samiksha:replay-intro'));
  };

  return (
    <footer className="border-t border-black/[0.08] bg-white py-12 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-black/60">
        {/* Left: Monogram Mark, Name & Year */}
        <div className="flex items-center gap-3">
          <LogoMark size="xs" theme="light" />
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

        {/* Right: Replay Intro, Socials & Back to Top */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          {/* Replay Cinematic Intro Trigger */}
          <button
            type="button"
            onClick={handleReplayIntro}
            onMouseEnter={() => playSound('hover')}
            className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-black/10 hover:border-black bg-black/[0.03] hover:bg-black/10 text-black/75 hover:text-black text-[11px] font-mono font-bold uppercase tracking-wider transition-all"
            title="Replay cinematic logo introduction"
          >
            <RotateCcw className="w-3 h-3 transition-transform duration-300 group-hover:-rotate-90" />
            <span>REPLAY INTRO</span>
          </button>

          <a
            href="https://linkedin.com/in/samiksha-ambati-239763438"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => playSound('hover')}
            onClick={() => playSound('click')}
            className="hover:text-black transition-colors uppercase font-bold text-[11px]"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/samikshaambati0369-alt"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => playSound('hover')}
            onClick={() => playSound('click')}
            className="hover:text-black transition-colors uppercase font-bold text-[11px]"
          >
            GitHub
          </a>
          <a
            href="mailto:samikshaambati0369@gmail.com"
            onMouseEnter={() => playSound('hover')}
            onClick={() => playSound('click')}
            className="hover:text-black transition-colors uppercase font-bold text-[11px]"
          >
            Email
          </a>

          <button
            onClick={scrollToTop}
            onMouseEnter={() => playSound('hover')}
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
