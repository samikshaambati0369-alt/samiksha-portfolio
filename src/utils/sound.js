// Web Audio API Synthesizer for tactile UI sound effects & Logo Splash Boot Chime
// Does not depend on external audio files; zero network latency or 404s.

let audioCtx = null;
let isSoundEnabled = true;

const getAudioContext = () => {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
};

export const setSoundEnabled = (enabled) => {
  isSoundEnabled = enabled;
  if (typeof window !== 'undefined') {
    localStorage.setItem('samiksha_portfolio_sound', enabled ? 'true' : 'false');
  }
};

export const getSoundEnabled = () => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('samiksha_portfolio_sound');
    if (saved !== null) {
      isSoundEnabled = saved === 'true';
    }
  }
  return isSoundEnabled;
};

// Rich Polyphonic Logo Splash & Boot Chime
export const playSplashSound = () => {
  if (!isSoundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    // Master gain for the splash sequence
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.2, now);
    masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.8);
    masterGain.connect(ctx.destination);

    // Filter sweep (warm sci-fi opening)
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(250, now);
    filter.frequency.exponentialRampToValueAtTime(4500, now + 0.9);
    filter.frequency.exponentialRampToValueAtTime(1800, now + 2.6);
    filter.connect(masterGain);

    // Warm Chord Frequencies (Fmaj9 / C-maj chord structure: F2, C3, A3, E4, G4, C5)
    const chord = [
      { freq: 87.31, type: 'triangle', delay: 0, dur: 2.6, vol: 0.25 },   // F2 Sub Bass
      { freq: 174.61, type: 'sine', delay: 0.05, dur: 2.5, vol: 0.2 },    // F3
      { freq: 261.63, type: 'sine', delay: 0.08, dur: 2.4, vol: 0.18 },   // C4
      { freq: 329.63, type: 'triangle', delay: 0.12, dur: 2.3, vol: 0.15 },// E4
      { freq: 392.00, type: 'sine', delay: 0.16, dur: 2.2, vol: 0.14 },   // G4
      { freq: 523.25, type: 'sine', delay: 0.22, dur: 2.0, vol: 0.12 },   // C5
      { freq: 659.25, type: 'sine', delay: 0.28, dur: 1.8, vol: 0.09 },   // E5 Shimmer
      { freq: 1046.50, type: 'sine', delay: 0.35, dur: 1.5, vol: 0.05 },  // C6 Sparkle
    ];

    chord.forEach(({ freq, type, delay, dur, vol }) => {
      const osc = ctx.createOscillator();
      const noteGain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, now + delay);

      // Subtle pitch bend for organic warmth
      osc.frequency.exponentialRampToValueAtTime(freq * 1.004, now + delay + dur);

      noteGain.gain.setValueAtTime(0.0001, now + delay);
      noteGain.gain.exponentialRampToValueAtTime(vol, now + delay + 0.12);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + delay + dur);

      osc.connect(noteGain);
      noteGain.connect(filter);

      osc.start(now + delay);
      osc.stop(now + delay + dur);
    });
  } catch (err) {
    console.warn('Audio playback error:', err);
  }
};

export const playSound = (type = 'click') => {
  if (!isSoundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    switch (type) {
      case 'splash': {
        playSplashSound();
        break;
      }
      case 'click': {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.exponentialRampToValueAtTime(300, now + 0.04);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
        osc.start(now);
        osc.stop(now + 0.04);
        break;
      }
      case 'open': {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(640, now + 0.08);
        gain.gain.setValueAtTime(0.09, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
        break;
      }
      case 'close': {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(520, now);
        osc.frequency.exponentialRampToValueAtTime(260, now + 0.06);
        gain.gain.setValueAtTime(0.07, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
        osc.start(now);
        osc.stop(now + 0.06);
        break;
      }
      case 'success': {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.setValueAtTime(554.37, now + 0.06); // C#
        osc.frequency.setValueAtTime(659.25, now + 0.12); // E
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.25);
        break;
      }
      case 'key': {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(800 + Math.random() * 200, now);
        gain.gain.setValueAtTime(0.03, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.02);
        osc.start(now);
        osc.stop(now + 0.02);
        break;
      }
      default:
        break;
    }
  } catch {
    // Fail silently if audio context is blocked
  }
};
