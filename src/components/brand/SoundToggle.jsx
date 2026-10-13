import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { getSoundEnabled, toggleSound, subscribeSound } from '../../utils/soundManager';

export default function SoundToggle({ className = '', variant = 'pill' }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(getSoundEnabled());
    const unsubscribe = subscribeSound((newState) => {
      setEnabled(newState);
    });
    return unsubscribe;
  }, []);

  const handleToggle = () => {
    const next = toggleSound();
    setEnabled(next);
  };

  if (variant === 'icon-only') {
    return (
      <button
        type="button"
        onClick={handleToggle}
        role="switch"
        aria-checked={enabled}
        aria-label={enabled ? 'Disable Sound Effects' : 'Enable Sound Effects'}
        title={enabled ? 'Sound is ON (Click to Mute)' : 'Sound is OFF (Click to Enable)'}
        className={`p-2 rounded-full border border-black/10 hover:border-black text-black transition-all ${className}`}
      >
        {enabled ? <Volume2 className="w-3.5 h-3.5 text-black" /> : <VolumeX className="w-3.5 h-3.5 text-black/40" />}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      role="switch"
      aria-checked={enabled}
      aria-label={enabled ? 'Disable Sound Effects' : 'Enable Sound Effects'}
      title={enabled ? 'Sound is ON (Click to Mute)' : 'Sound is OFF (Click to Enable)'}
      className={`group inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[11px] font-mono font-bold tracking-tight transition-all select-none ${
        enabled
          ? 'bg-black text-white border-black'
          : 'bg-white text-black/70 border-black/15 hover:border-black hover:text-black'
      } ${className}`}
    >
      {enabled ? (
        <>
          <span className="w-1.5 h-1.5 rounded-full bg-[#BFFF00] ring-2 ring-[#BFFF00]/40 animate-pulse" />
          <Volume2 className="w-3.5 h-3.5 text-[#BFFF00]" />
          <span className="tracking-wider">SOUND ON</span>
        </>
      ) : (
        <>
          <span className="w-1.5 h-1.5 rounded-full bg-black/20" />
          <VolumeX className="w-3.5 h-3.5 text-black/50 group-hover:text-black transition-colors" />
          <span className="tracking-wider">SOUND OFF</span>
        </>
      )}
    </button>
  );
}
