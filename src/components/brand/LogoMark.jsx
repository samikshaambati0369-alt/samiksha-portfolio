import React from 'react';

/**
 * Editorial "SA" Monogram Logo
 * Geometric, high-contrast, scalable SVG mark with lime-green accent.
 * Designed for Samiksha Ambati — works on both dark and light editorial backgrounds.
 */
export default function LogoMark({
  size = 'md',
  theme = 'dark', // 'dark' (white mark on black), 'light' (black mark on white)
  animated = false,
  className = '',
}) {
  const sizeMap = {
    xs: 20,
    sm: 28,
    md: 36,
    lg: 56,
    xl: 84,
    splash: 130,
  };

  const dimension = sizeMap[size] || sizeMap.md;
  const isDark = theme === 'dark';

  const strokeColor = isDark ? '#FFFFFF' : '#0A0A0A';
  const accentLime = '#BFFF00';

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: dimension, height: dimension }}
      aria-label="Samiksha Ambati Monogram Logo"
    >
      <svg
        width={dimension}
        height={dimension}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Outer Minimalist Geometric Frame (Subtle) */}
        <rect
          x="4"
          y="4"
          width="92"
          height="92"
          rx="18"
          stroke={strokeColor}
          strokeWidth="2"
          strokeOpacity={isDark ? '0.15' : '0.1'}
        />

        {/* Monogram Glyph Group */}
        <g id="sa-monogram-paths">
          {/* S Geometric Arch & Sweeping Curves */}
          <path
            d="M 64 30 C 64 22, 54 18, 42 18 C 28 18, 22 26, 22 35 C 22 47, 44 48, 56 53 C 70 59, 70 72, 66 80 C 60 88, 42 88, 28 82"
            stroke={strokeColor}
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={animated ? 'transition-all duration-700 ease-out' : ''}
          />

          {/* A Diagonal Left Pillar */}
          <path
            d="M 52 18 L 32 82"
            stroke={strokeColor}
            strokeWidth="6"
            strokeLinecap="round"
            strokeOpacity="0.85"
          />

          {/* A Diagonal Right Pillar */}
          <path
            d="M 52 18 L 74 82"
            stroke={strokeColor}
            strokeWidth="6.5"
            strokeLinecap="round"
          />

          {/* A Horizontal Crossbar */}
          <path
            d="M 40 58 L 66 58"
            stroke={strokeColor}
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeOpacity="0.9"
          />

          {/* Precision Lime-Green Accent Dot at A Apex */}
          <circle
            cx="52"
            cy="18"
            r="4.5"
            fill={accentLime}
            className={animated ? 'animate-pulse' : ''}
          />

          {/* Secondary Precision Lime-Green Terminal Indicator */}
          <circle
            cx="66"
            cy="58"
            r="3"
            fill={accentLime}
          />
        </g>
      </svg>
    </div>
  );
}
