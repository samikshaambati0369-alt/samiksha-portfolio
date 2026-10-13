/**
 * soundManager.js
 * Centralized, zero-dependency Web Audio API sound synthesizer for Samiksha Ambati Portfolio.
 * Implements restrained, modern interface tones and cinematic intro sounds.
 * Fully compatible with browser autoplay restrictions and reduced-motion preferences.
 */

let audioCtx = null;
let lastHoverTime = 0;
const LISTENERS = new Set();

/**
 * Check if sound is enabled.
 * Default is FALSE for first-time visitors per strict browser etiquette.
 */
export const getSoundEnabled = () => {
  if (typeof window === 'undefined') return false;
  const saved = localStorage.getItem('samiksha_sound_enabled');
  if (saved !== null) {
    return saved === 'true';
  }
  return false;
};

/**
 * Enable or disable sound globally and persist to localStorage.
 */
export const setSoundEnabled = (enabled) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('samiksha_sound_enabled', enabled ? 'true' : 'false');
  
  // If enabling, initialize or resume audio context
  if (enabled) {
    initAudioContext();
  }

  // Notify listeners (UI components)
  LISTENERS.forEach((fn) => {
    try {
      fn(enabled);
    } catch {
      // Ignore listener error
    }
  });
};

/**
 * Toggle sound setting and return new state.
 */
export const toggleSound = () => {
  const next = !getSoundEnabled();
  setSoundEnabled(next);
  if (next) {
    playSound('toggle');
  }
  return next;
};

/**
 * Subscribe to sound state changes.
 */
export const subscribeSound = (listener) => {
  LISTENERS.add(listener);
  return () => LISTENERS.delete(listener);
};

/**
 * Lazily initialize and resume the Web Audio Context.
 */
const initAudioContext = () => {
  if (typeof window === 'undefined') return null;
  try {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume().catch(() => {});
    }
  } catch {
    // Fail silently if browser blocks creation
  }
  return audioCtx;
};

/**
 * Global audio dispatcher.
 * @param {'intro' | 'logo' | 'transition' | 'hover' | 'click' | 'toggle'} type
 */
export const playSound = (type = 'click') => {
  if (!getSoundEnabled()) return;

  // Check prefers-reduced-motion
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const ctx = initAudioContext();
  if (!ctx || ctx.state !== 'running') return;

  const now = ctx.currentTime;

  try {
    switch (type) {
      /**
       * INTRO SOUND:
       * Soft cinematic startup swell with warm sub-bass and high harmonic shimmer.
       */
      case 'intro': {
        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.0001, now);
        masterGain.gain.exponentialRampToValueAtTime(0.14, now + 0.5);
        masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.2);
        masterGain.connect(ctx.destination);

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(200, now);
        filter.frequency.exponentialRampToValueAtTime(3200, now + 0.9);
        filter.connect(masterGain);

        // Frequencies for a cinematic open chord (F2, C3, A3, E4)
        [87.31, 130.81, 220.0, 329.63].forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          osc.type = idx === 0 ? 'triangle' : 'sine';
          osc.frequency.setValueAtTime(freq, now + idx * 0.05);
          osc.connect(filter);
          osc.start(now + idx * 0.05);
          osc.stop(now + 2.2);
        });
        break;
      }

      /**
       * LOGO REVEAL SOUND:
       * Delicate crystalline tonal chime (C5 & E5) when the SA monogram settles.
       */
      case 'logo': {
        const chimeGain = ctx.createGain();
        chimeGain.gain.setValueAtTime(0.0001, now);
        chimeGain.gain.exponentialRampToValueAtTime(0.12, now + 0.03);
        chimeGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);
        chimeGain.connect(ctx.destination);

        [523.25, 659.25, 1046.5].forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + idx * 0.04);
          osc.connect(chimeGain);
          osc.start(now + idx * 0.04);
          osc.stop(now + 1.2);
        });
        break;
      }

      /**
       * INTRO TRANSITION SOUND:
       * Subtle resonant whoosh as the splash mask expands into the white portfolio.
       */
      case 'transition': {
        // Create noise buffer for soft transition air
        const bufferSize = ctx.sampleRate * 0.6;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          output[i] = Math.random() * 2 - 1;
        }

        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;

        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(400, now);
        filter.frequency.exponentialRampToValueAtTime(2400, now + 0.3);
        filter.frequency.exponentialRampToValueAtTime(200, now + 0.6);
        filter.Q.setValueAtTime(2.5, now);

        const transGain = ctx.createGain();
        transGain.gain.setValueAtTime(0.0001, now);
        transGain.gain.exponentialRampToValueAtTime(0.08, now + 0.15);
        transGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.6);

        whiteNoise.connect(filter);
        filter.connect(transGain);
        transGain.connect(ctx.destination);

        whiteNoise.start(now);
        whiteNoise.stop(now + 0.6);
        break;
      }

      /**
       * BUTTON HOVER SOUND:
       * Extremely subtle micro-blip with 100ms debounce to prevent rapid-fire flutter.
       */
      case 'hover': {
        const currentTime = performance.now();
        if (currentTime - lastHoverTime < 100) return; // Debounced
        lastHoverTime = currentTime;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(960, now);
        osc.frequency.exponentialRampToValueAtTime(720, now + 0.025);

        gain.gain.setValueAtTime(0.025, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.025);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.025);
        break;
      }

      /**
       * CLICK / CONFIRMATION SOUND:
       * Restrained tactile click for project cards, case studies, and primary CTAs.
       */
      case 'click': {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(460, now);
        osc.frequency.exponentialRampToValueAtTime(220, now + 0.035);

        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.035);
        break;
      }

      /**
       * SOUND TOGGLE FEEDBACK:
       * Crisp affirmative tone when toggling sound ON.
       */
      case 'toggle': {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(540, now);
        osc.frequency.setValueAtTime(810, now + 0.05);

        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.12);
        break;
      }

      default:
        break;
    }
  } catch {
    // Fail silently on any audio processing hitch
  }
};
