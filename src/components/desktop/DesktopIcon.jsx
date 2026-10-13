import React from 'react';
import { playSound } from '../../utils/sound';

export default function DesktopIcon({ title, icon: Icon, bgColor, textColor, onOpen, badge }) {
  const handleClick = () => {
    playSound('open');
    onOpen();
  };

  return (
    <button
      onClick={handleClick}
      className="group w-24 p-2 rounded-xl flex flex-col items-center gap-1.5 hover:bg-white/10 active:bg-white/20 transition-all select-none text-center cursor-pointer focus:outline-none focus:ring-1 focus:ring-indigo-400/50"
    >
      <div className="relative">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-105 ${bgColor} ${textColor} border border-white/10`}>
          <Icon className="w-6 h-6" />
        </div>
        {badge && (
          <span className="absolute -top-1 -right-1 px-1.5 py-0.2 text-[9px] font-bold rounded-full bg-rose-500 text-white shadow-md animate-pulse">
            {badge}
          </span>
        )}
      </div>

      <span className="text-[11px] font-semibold text-slate-200 group-hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] leading-tight px-1 rounded">
        {title}
      </span>
    </button>
  );
}
