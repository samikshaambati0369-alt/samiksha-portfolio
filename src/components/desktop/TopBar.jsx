import React, { useState, useEffect } from 'react';
import { playSound, setSoundEnabled, getSoundEnabled } from '../../utils/sound';
import Logo from '../brand/Logo';
import { Sparkles, Volume2, VolumeX, Image, LayoutGrid, Monitor, Clock, Wifi, BatteryCharging } from 'lucide-react';

export default function TopBar({
  mode,
  onToggleMode,
  activeAppName,
  currentWallpaper,
  onChangeWallpaper,
  onReplaySplash,
}) {
  const [currentTime, setCurrentTime] = useState('');
  const [soundOn, setSoundOn] = useState(true);
  const [showWallpaperMenu, setShowWallpaperMenu] = useState(false);

  useEffect(() => {
    setSoundOn(getSoundEnabled());

    const updateClock = () => {
      const now = new Date();
      // Formatted in IST (Hyderabad)
      const options = {
        timeZone: 'Asia/Kolkata',
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      };
      setCurrentTime(now.toLocaleString('en-IN', options));
    };

    updateClock();
    const timer = setInterval(updateClock, 10000);
    return () => clearInterval(timer);
  }, []);

  const toggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    setSoundEnabled(next);
    if (next) playSound('click');
  };

  const wallpapers = [
    { id: 'nebula', name: '🌌 Deep Nebula', gradient: 'from-slate-950 via-indigo-950 to-slate-950' },
    { id: 'cyber', name: '⚡ Cyber Grid', gradient: 'from-slate-950 via-cyan-950 to-slate-950' },
    { id: 'dusk', name: '🌆 Tokyo Sunset', gradient: 'from-slate-950 via-purple-950 to-slate-950' },
    { id: 'minimal', name: '🖤 Obsidian Stealth', gradient: 'from-slate-950 via-slate-900 to-black' },
  ];

  return (
    <header className="h-10 w-full bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 px-4 flex items-center justify-between text-xs text-slate-300 select-none z-50">
      {/* Left: Branding & Active Window Title */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => {
            playSound('open');
            if (onReplaySplash) onReplaySplash();
          }}
          className="flex items-center gap-2 font-bold text-white tracking-wide hover:opacity-85 transition-opacity group cursor-pointer"
          title="Click to replay Logo Splash & Startup Chime"
        >
          <Logo size="xs" animated={true} />
          <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-pink-400 bg-clip-text text-transparent">
            SamikshaOS
          </span>
          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-normal">
            v2.4
          </span>
        </button>

        {activeAppName && (
          <div className="hidden sm:flex items-center gap-2 text-slate-400 text-[11px] border-l border-slate-800 pl-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-slate-200 font-medium">{activeAppName}</span>
          </div>
        )}
      </div>

      {/* Center: Mode Toggle */}
      <div className="flex items-center bg-slate-900/90 border border-slate-700/70 rounded-full p-0.5 shadow-sm">
        <button
          onClick={() => {
            playSound('click');
            if (mode !== 'desktop') onToggleMode('desktop');
          }}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all ${
            mode === 'desktop'
              ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Monitor className="w-3.5 h-3.5" />
          <span className="hidden xs:inline">DevOS Desktop</span>
        </button>
        <button
          onClick={() => {
            playSound('click');
            if (mode !== 'bento') onToggleMode('bento');
          }}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all ${
            mode === 'bento'
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <LayoutGrid className="w-3.5 h-3.5" />
          <span className="hidden xs:inline">Executive Bento</span>
        </button>
      </div>

      {/* Right: Controls & Hyderabad Time */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Wallpaper Picker */}
        <div className="relative">
          <button
            onClick={() => { playSound('click'); setShowWallpaperMenu(!showWallpaperMenu); }}
            className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
            title="Switch Desktop Wallpaper"
          >
            <Image className="w-3.5 h-3.5" />
          </button>

          {showWallpaperMenu && (
            <div className="absolute right-0 mt-2 w-48 rounded-xl bg-slate-900/95 border border-slate-700 shadow-2xl p-1.5 z-50">
              <span className="text-[10px] uppercase font-bold text-slate-400 px-2 py-1 block">
                Select Theme Atmosphere
              </span>
              {wallpapers.map(wp => (
                <button
                  key={wp.id}
                  onClick={() => {
                    playSound('click');
                    onChangeWallpaper(wp.id);
                    setShowWallpaperMenu(false);
                  }}
                  className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs flex items-center justify-between transition-colors ${
                    currentWallpaper === wp.id
                      ? 'bg-indigo-600/30 text-indigo-300 font-semibold'
                      : 'hover:bg-slate-800 text-slate-300'
                  }`}
                >
                  <span>{wp.name}</span>
                  {currentWallpaper === wp.id && <span className="text-indigo-400">✓</span>}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Sound FX Toggle */}
        <button
          onClick={toggleSound}
          className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
          title={soundOn ? 'Mute Interface Audio' : 'Enable Interface Audio'}
        >
          {soundOn ? <Volume2 className="w-3.5 h-3.5 text-emerald-400" /> : <VolumeX className="w-3.5 h-3.5 text-slate-500" />}
        </button>

        {/* Telemetry Status */}
        <div className="hidden md:flex items-center gap-2 text-slate-400 text-[11px]">
          <Wifi className="w-3.5 h-3.5 text-emerald-400" />
          <BatteryCharging className="w-3.5 h-3.5 text-emerald-400" />
        </div>

        {/* Live IST Hyderabad Clock */}
        <div className="flex items-center gap-1.5 text-slate-200 font-mono text-[11px] font-medium pl-1">
          <Clock className="w-3 h-3 text-indigo-400" />
          <span>{currentTime || 'Hyderabad IST'}</span>
        </div>
      </div>
    </header>
  );
}
