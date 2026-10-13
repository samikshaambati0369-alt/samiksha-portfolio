import React from 'react';

export default function Logo({ size = 'md', animated = false, className = '' }) {
  const sizeMap = {
    xs: { width: 22, height: 22, stroke: 2.2 },
    sm: { width: 32, height: 32, stroke: 2.4 },
    md: { width: 44, height: 44, stroke: 2.5 },
    lg: { width: 68, height: 68, stroke: 2.8 },
    xl: { width: 110, height: 110, stroke: 3.2 },
    splash: { width: 148, height: 148, stroke: 3.5 },
  };

  const { width, height, stroke } = sizeMap[size] || sizeMap.md;
  const gradientId = `sa-logo-grad-${size}`;
  const glowId = `sa-logo-glow-${size}`;

  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
      {/* Outer ambient glow if animated */}
      {animated && (
        <div
          className="absolute inset-0 rounded-full blur-xl bg-gradient-to-tr from-indigo-600/50 via-purple-600/40 to-pink-500/50 opacity-70 animate-pulse pointer-events-none"
          style={{ transform: 'scale(1.25)' }}
        />
      )}

      <svg
        width={width}
        height={height}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 drop-shadow-[0_4px_16px_rgba(99,102,241,0.45)] transition-transform duration-300 hover:scale-105"
      >
        <defs>
          {/* Main Vibrant Cyber-Gradient */}
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />    {/* Sky Blue */}
            <stop offset="35%" stopColor="#818cf8" />   {/* Indigo */}
            <stop offset="70%" stopColor="#c084fc" />   {/* Purple */}
            <stop offset="100%" stopColor="#f472b6" />  {/* Neon Pink */}
          </linearGradient>

          {/* Core Accent Glow Filter */}
          <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer Hexagonal Shield Frame */}
        <polygon
          points="50,4 90,26 90,74 50,96 10,74 10,26"
          stroke={`url(#${gradientId})`}
          strokeWidth={stroke * 0.9}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={animated ? 'animate-[spin_24s_linear_infinite]' : ''}
          style={{ transformOrigin: '50px 50px', opacity: 0.85 }}
        />

        {/* Concentric Inner Geometric Accent Ring */}
        <circle
          cx="50"
          cy="50"
          r="41"
          stroke={`url(#${gradientId})`}
          strokeWidth="1"
          strokeDasharray="4 6"
          className={animated ? 'animate-[spin_16s_linear_infinite_reverse]' : ''}
          style={{ transformOrigin: '50px 50px', opacity: 0.55 }}
        />

        {/* Dynamic Monogram: Interconnected "S" and "A" Architecture */}
        <g filter={`url(#${glowId})`}>
          {/* S Top Arch & Curve */}
          <path
            d="M 68 28 C 68 28, 54 20, 38 24 C 26 27, 24 38, 34 44 C 44 50, 68 50, 68 64 C 68 76, 50 80, 36 76"
            stroke={`url(#${gradientId})`}
            strokeWidth={stroke * 1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* A Diagonal Left Pillar */}
          <path
            d="M 50 18 L 24 82"
            stroke={`url(#${gradientId})`}
            strokeWidth={stroke * 1.3}
            strokeLinecap="round"
            style={{ opacity: 0.9 }}
          />

          {/* A Diagonal Right Pillar */}
          <path
            d="M 50 18 L 76 82"
            stroke={`url(#${gradientId})`}
            strokeWidth={stroke * 1.3}
            strokeLinecap="round"
            style={{ opacity: 0.9 }}
          />

          {/* A Central Energy Crossbar */}
          <path
            d="M 33 58 L 67 58"
            stroke="#ffffff"
            strokeWidth={stroke * 1.1}
            strokeLinecap="round"
          />
        </g>

        {/* Center Sparkle Node Core */}
        <circle
          cx="50"
          cy="18"
          r="3"
          fill="#38bdf8"
          className="animate-ping"
          style={{ transformOrigin: '50px 18px', animationDuration: '2.5s' }}
        />
        <circle cx="50" cy="18" r="3" fill="#ffffff" />
        <circle cx="50" cy="58" r="2.5" fill="#f472b6" />
      </svg>
    </div>
  );
}
