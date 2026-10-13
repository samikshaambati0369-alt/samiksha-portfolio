import React, { useState, useEffect } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { playSound } from '../../utils/sound';
import { ShieldAlert, Mic, Activity, Volume2, AlertTriangle, CheckCircle, Radio, Play, RotateCcw } from 'lucide-react';
import { GithubIcon } from '../icons/BrandIcons';

export default function VoxShieldApp() {
  const project = portfolioData.projects.find(p => p.id === 'voxshield');
  
  const [selectedSample, setSelectedSample] = useState(0);
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(100);
  const [hasScanned, setHasScanned] = useState(true);

  const samples = [
    {
      id: 'clone',
      title: 'Synthesized Voice Clone (Neural TTS)',
      type: 'AI Synthetic Deepfake',
      riskScore: 96.4,
      verdict: 'SYNTHETIC SPOOF DETECTED',
      details: 'High frequency phase distortion detected in upper harmonics. Zero micro-tremors in fundamental pitch (F0).',
      mfccVariance: '0.042 (Abnormally Uniform)',
      pitchJitter: '0.002% (Below Biological Threshold)',
      spectralFlux: 'Discontinuous boundary cues',
      status: 'danger',
    },
    {
      id: 'human',
      title: 'Natural Human Voice (Authentic Speaker)',
      type: 'Biological Human Voice',
      riskScore: 3.8,
      verdict: 'AUTHENTIC HUMAN VERIFIED',
      details: 'Normal acoustic biological vocal tract resonance. Organic pitch jitter and breath onset patterns confirmed.',
      mfccVariance: '0.284 (Organic)',
      pitchJitter: '0.048% (Natural)',
      spectralFlux: 'Continuous formant transitions',
      status: 'safe',
    },
    {
      id: 'replay',
      title: 'Replay / Transduced Audio Capture',
      type: 'Acoustic Channel Replay Attack',
      riskScore: 88.2,
      verdict: 'REPLAY ARTIFACT IDENTIFIED',
      details: 'Loudspeaker transfer function identified; secondary room impulse response and DAC anti-aliasing artifacts present.',
      mfccVariance: '0.115 (Attenuated)',
      pitchJitter: '0.031%',
      spectralFlux: 'High-frequency transducer cutoff',
      status: 'warning',
    },
  ];

  const currentSample = samples[selectedSample];

  const triggerScan = () => {
    playSound('open');
    setIsScanning(true);
    setScanProgress(0);
    setHasScanned(false);

    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setScanProgress(progress);
      playSound('key');
      if (progress >= 100) {
        clearInterval(interval);
        setIsScanning(false);
        setHasScanned(true);
        playSound('success');
      }
    }, 120);
  };

  return (
    <div className="flex flex-col h-full bg-slate-900 text-slate-100 overflow-y-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-950/80 via-slate-900 to-slate-900 border-b border-violet-500/20 p-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400 shadow-lg shadow-violet-500/10">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold tracking-tight text-white">{project.name}</h2>
                <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">
                  {project.badge}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">{project.tagline}</p>
            </div>
          </div>

          <a
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            Source Repository
          </a>
        </div>
      </div>

      {/* Main Area */}
      <div className="p-5 space-y-5 flex-1">
        {/* Sample selector */}
        <div>
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
            Select Audio Telemetry Sample
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {samples.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => {
                  playSound('click');
                  setSelectedSample(idx);
                  setHasScanned(false);
                }}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedSample === idx
                    ? 'bg-violet-950/50 border-violet-500/60 shadow-md shadow-violet-900/30'
                    : 'bg-slate-800/40 border-slate-700/60 hover:bg-slate-800/80'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-medium mb-1">
                  <span className={selectedSample === idx ? 'text-violet-300' : 'text-slate-300'}>
                    Sample #{idx + 1}
                  </span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                    s.status === 'danger' ? 'bg-rose-500/20 text-rose-300' :
                    s.status === 'safe' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'
                  }`}>
                    {s.status.toUpperCase()}
                  </span>
                </div>
                <div className="text-xs font-semibold text-slate-200 truncate">{s.title}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Visualizer Canvas Simulation */}
        <div className="p-4 rounded-xl bg-slate-950 border border-violet-500/30 relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-xs font-mono text-violet-400">
              <Radio className="w-4 h-4 animate-pulse text-violet-400" />
              <span>Acoustic Frequency Spectrogram (0 – 16,000 Hz)</span>
            </div>
            <div className="text-[11px] font-mono text-slate-400">
              Sampling Rate: 44.1 kHz / 16-bit Float
            </div>
          </div>

          {/* Animated Frequency Bars */}
          <div className="h-28 flex items-end justify-between gap-1 py-2 px-1 border-b border-slate-800">
            {Array.from({ length: 36 }).map((_, i) => {
              const baseHeight = isScanning
                ? 15 + Math.sin((i + Date.now() / 150)) * 35 + Math.random() * 45
                : 20 + Math.sin(i * 0.4) * 35 + (selectedSample === 0 ? Math.random() * 20 : 15);

              return (
                <div
                  key={i}
                  className={`flex-1 rounded-t transition-all duration-150 ${
                    currentSample.status === 'danger'
                      ? 'bg-gradient-to-t from-violet-600 to-rose-400'
                      : currentSample.status === 'safe'
                      ? 'bg-gradient-to-t from-violet-600 to-emerald-400'
                      : 'bg-gradient-to-t from-violet-600 to-amber-400'
                  }`}
                  style={{
                    height: `${Math.max(10, Math.min(95, baseHeight))}%`,
                    opacity: isScanning ? 0.9 : 0.75,
                  }}
                />
              );
            })}
          </div>

          {/* Scan trigger bar */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs text-slate-400">
              {isScanning ? (
                <span className="text-violet-300 font-mono flex items-center gap-2">
                  <Activity className="w-4 h-4 animate-spin text-violet-400" />
                  Running Neural Audio Classification ({scanProgress}%)...
                </span>
              ) : hasScanned ? (
                <span className="text-slate-300 font-mono">Analysis Complete for: {currentSample.title}</span>
              ) : (
                <span className="text-slate-400 font-mono">Ready to scan audio waveform features.</span>
              )}
            </div>

            <button
              onClick={triggerScan}
              disabled={isScanning}
              className="px-4 py-2 bg-violet-600 hover:bg-violet-500 disabled:opacity-50 text-white font-semibold text-xs rounded-lg transition-all shadow-md shadow-violet-600/30 flex items-center gap-1.5"
            >
              {isScanning ? (
                <RotateCcw className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <Play className="w-3.5 h-3.5 fill-current" />
              )}
              {isScanning ? 'Extracting Acoustic Vectors...' : 'Execute AI Detection Scan'}
            </button>
          </div>
        </div>

        {/* Diagnosis & Probability Report */}
        {hasScanned && (
          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700/60 pb-3 mb-3">
              <div className="flex items-center gap-2">
                {currentSample.status === 'danger' && <AlertTriangle className="w-5 h-5 text-rose-400" />}
                {currentSample.status === 'safe' && <CheckCircle className="w-5 h-5 text-emerald-400" />}
                {currentSample.status === 'warning' && <AlertCircle className="w-5 h-5 text-amber-400" />}
                <span className="text-sm font-bold tracking-tight text-white font-mono">
                  {currentSample.verdict}
                </span>
              </div>
              <div className="text-xs font-mono">
                Threat Probability Score:{' '}
                <span className={`font-bold ${
                  currentSample.status === 'danger' ? 'text-rose-400' :
                  currentSample.status === 'safe' ? 'text-emerald-400' : 'text-amber-400'
                }`}>
                  {currentSample.riskScore}%
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              {currentSample.details}
            </p>

            {/* Extracted Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-slate-400 block text-[11px] mb-1">MFCC Vector Variance</span>
                <span className="text-violet-300 font-semibold">{currentSample.mfccVariance}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-slate-400 block text-[11px] mb-1">F0 Pitch Jitter</span>
                <span className="text-violet-300 font-semibold">{currentSample.pitchJitter}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-slate-400 block text-[11px] mb-1">Spectral Flux Profile</span>
                <span className="text-violet-300 font-semibold">{currentSample.spectralFlux}</span>
              </div>
            </div>
          </div>
        )}

        {/* Technical Architecture Overview */}
        <div>
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
            AI Technology & Processing Pipeline
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map(t => (
              <span key={t} className="px-2.5 py-1 text-xs rounded-md bg-slate-800 text-violet-300 border border-violet-500/20 font-mono">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AlertCircle(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" x2="12" y1="8" y2="12" />
      <line x1="12" x2="12.01" y1="16" y2="16" />
    </svg>
  );
}
