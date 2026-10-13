import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import LogoMark from '../brand/LogoMark';
import SoundToggle from '../brand/SoundToggle';
import { playSound } from '../../utils/soundManager';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#home', targetId: 'home' },
    { name: 'About', href: '/#about', targetId: 'about' },
    { name: 'Projects', href: '/#projects', targetId: 'projects' },
    { name: 'Services', href: '/#services', targetId: 'services' },
    { name: 'Contact', href: '/#contact', targetId: 'contact' },
  ];

  const handleNavClick = (e, targetId) => {
    playSound('click');
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      e.preventDefault();
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAFAFA]/90 backdrop-blur-md border-b border-black/[0.06] py-3.5'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Personal Wordmark & Custom SA Monogram Logo */}
        <Link
          to="/"
          onClick={(e) => {
            playSound('click');
            if (location.pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          onMouseEnter={() => playSound('hover')}
          className="group flex items-center gap-2.5 text-xl sm:text-2xl font-black tracking-tight text-[#0A0A0A] font-display select-none"
        >
          <LogoMark size="sm" theme="light" />
          <span className="tracking-tighter">SAMIKSHA.</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-[#0A0A0A]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.targetId)}
              onMouseEnter={() => playSound('hover')}
              className="relative py-1 text-black/70 hover:text-black transition-colors duration-200 group"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-black transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Right Section: Sound Toggle, Status Indicator & Contact Button */}
        <div className="hidden md:flex items-center gap-4 lg:gap-5">
          {/* Sound Toggle */}
          <SoundToggle variant="pill" />

          {/* Status Indicator with Lime Dot */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/[0.08] bg-white text-[11px] font-mono tracking-tight text-black/75">
            <span className="w-2 h-2 rounded-full bg-[#BFFF00] ring-4 ring-[#BFFF00]/25 animate-pulse" />
            <span>OPEN FOR INTERNSHIPS</span>
          </div>

          {/* Compact Contact Button */}
          <a
            href="/#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            onMouseEnter={() => playSound('hover')}
            className="group flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0A0A0A] text-white text-xs font-bold uppercase tracking-wider hover:bg-black transition-transform duration-200 hover:scale-[1.02] active:scale-95 shadow-sm"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <SoundToggle variant="icon-only" className="p-1.5" />
          <button
            onClick={() => {
              playSound('click');
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            onMouseEnter={() => playSound('hover')}
            className="p-2 rounded-lg text-black hover:bg-black/5 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAFAFA] border-b border-black/10 px-6 py-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4 text-sm font-bold uppercase tracking-wider text-black">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.targetId)}
                onMouseEnter={() => playSound('hover')}
                className="py-2 border-b border-black/5 hover:text-black/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="py-2 flex items-center justify-between">
              <span className="text-xs font-mono text-black/60 uppercase">Audio Experience</span>
              <SoundToggle variant="pill" />
            </div>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-black/60">
              <span className="w-2 h-2 rounded-full bg-[#BFFF00]" />
              <span>AVAILABLE FOR INTERNSHIPS (2026/2028)</span>
            </div>
            <a
              href="/#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              onMouseEnter={() => playSound('hover')}
              className="mt-2 w-full py-3 rounded-full bg-[#0A0A0A] text-white text-center text-xs font-bold uppercase tracking-wider"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
