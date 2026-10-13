import React from 'react';
import { playSound } from '../../utils/sound';
import Logo from '../brand/Logo';
import { User, PieChart, ShieldAlert, Cpu, Terminal, Mail, LayoutGrid, Sparkles } from 'lucide-react';

export default function Dock({ apps, activeAppId, onToggleApp, onToggleMode, onReplaySplash }) {
  return (
    <div className="fixed bottom-3 inset-x-0 flex justify-center z-40 pointer-events-none px-2">
      <div className="pointer-events-auto glass-dock px-3 py-2 rounded-2xl flex items-center gap-1.5 sm:gap-2 shadow-2xl transition-all">
        {/* Logo Splash Trigger Button */}
        <button
          onClick={() => {
            playSound('open');
            if (onReplaySplash) onReplaySplash();
          }}
          className="group relative p-2 sm:p-2.5 rounded-xl hover:bg-white/10 active:scale-95 transition-all duration-200 flex flex-col items-center"
        >
          <div className="absolute -top-10 scale-0 group-hover:scale-100 transition-all duration-150 px-2.5 py-1 rounded-md bg-slate-900/95 border border-slate-700 text-[11px] font-medium text-white shadow-xl whitespace-nowrap pointer-events-none z-50">
            Replay Logo Splash & Chime
          </div>
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-transform group-hover:-translate-y-1 bg-slate-900/80 border border-indigo-500/30 shadow-md">
            <Logo size="sm" animated={true} />
          </div>
          <div className="h-1 flex items-center justify-center mt-1">
            <span className="w-1 h-1 rounded-full bg-pink-400" />
          </div>
        </button>

        {/* Divider */}
        <div className="w-[1px] h-8 bg-slate-700/60 mx-0.5" />

        {/* App Icons */}
        {apps.map((app) => {
          const Icon = app.icon;
          const isOpen = app.isOpen && !app.isMinimized;
          const isMinimized = app.isOpen && app.isMinimized;

          return (
            <button
              key={app.id}
              onClick={() => {
                playSound('click');
                onToggleApp(app.id);
              }}
              className="group relative p-2.5 sm:p-3 rounded-xl hover:bg-white/10 active:scale-95 transition-all duration-200 flex flex-col items-center"
            >
              {/* Tooltip */}
              <div className="absolute -top-10 scale-0 group-hover:scale-100 transition-all duration-150 px-2.5 py-1 rounded-md bg-slate-900/95 border border-slate-700 text-[11px] font-medium text-white shadow-xl whitespace-nowrap pointer-events-none z-50">
                {app.title}
              </div>

              {/* Icon Container with colored styling */}
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-transform group-hover:-translate-y-1 ${app.bgColor} ${app.textColor} shadow-md`}>
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>

              {/* Status Dot */}
              <div className="h-1 flex items-center justify-center mt-1">
                {app.isOpen && (
                  <span
                    className={`w-1 h-1 rounded-full ${
                      isOpen ? 'bg-indigo-400 ring-2 ring-indigo-400/40' : 'bg-slate-500'
                    }`}
                  />
                )}
              </div>
            </button>
          );
        })}

        {/* Divider */}
        <div className="w-[1px] h-8 bg-slate-700/60 mx-1" />

        {/* Switch to Bento Quick Action */}
        <button
          onClick={() => {
            playSound('open');
            onToggleMode('bento');
          }}
          className="group relative p-2.5 sm:p-3 rounded-xl hover:bg-white/10 active:scale-95 transition-all duration-200 flex flex-col items-center"
        >
          <div className="absolute -top-10 scale-0 group-hover:scale-100 transition-all duration-150 px-2.5 py-1 rounded-md bg-slate-900/95 border border-slate-700 text-[11px] font-medium text-white shadow-xl whitespace-nowrap pointer-events-none z-50">
            Switch to Bento Grid
          </div>
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center bg-gradient-to-tr from-purple-600 to-pink-500 text-white shadow-md transition-transform group-hover:-translate-y-1">
            <LayoutGrid className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="h-1" />
        </button>
      </div>
    </div>
  );
}
