import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { playSound } from '../../utils/sound';
import { Cpu, Play, CheckCircle2, RefreshCw, AlertTriangle, Terminal, Network, Shield, ArrowRight } from 'lucide-react';

export default function AegisZeroApp() {
  const project = portfolioData.projects.find(p => p.id === 'aegiszero');
  const [activeStep, setActiveStep] = useState(null);
  const [isSimulating, setIsSimulating] = useState(false);
  const [logs, setLogs] = useState([
    '[SYSTEM INIT] AegisZero Autonomous Agent Runtime initialized.',
    '[CONNECTED] Workato Orchestrator + Multi-Agent Gateway ready.',
    '[STANDBY] Awaiting trigger or simulated incident...',
  ]);

  const steps = [
    { name: 'Detect', icon: AlertTriangle, color: 'text-amber-400', border: 'border-amber-500/40', desc: 'Monitors real-time enterprise telemetry for anomalies.' },
    { name: 'Decide', icon: Cpu, color: 'text-cyan-400', border: 'border-cyan-500/40', desc: 'LLM agents formulate deterministic mitigation plans.' },
    { name: 'Execute', icon: Network, color: 'text-blue-400', border: 'border-blue-500/40', desc: 'Triggers atomic API actions across enterprise connectors.' },
    { name: 'Observe', icon: RefreshCw, color: 'text-indigo-400', border: 'border-indigo-500/40', desc: 'Continuously measures service health and error rates.' },
    { name: 'Verify', icon: CheckCircle2, color: 'text-emerald-400', border: 'border-emerald-500/40', desc: 'Runs verification assertions against SLA benchmarks.' },
    { name: 'Auto-Recover', icon: Shield, color: 'text-teal-400', border: 'border-teal-500/40', desc: 'Heals degradation and logs root-cause analysis.' },
  ];

  const runSimulation = () => {
    playSound('open');
    setIsSimulating(true);
    setLogs(['[INCIDENT DISPATCHED] Injecting simulated enterprise API gateway degradation...']);

    const scenario = [
      { step: 0, log: '[DETECT] ⚠️ Anomaly identified: Payment microservice latency 4850ms (> threshold 500ms).' },
      { step: 1, log: '[DECIDE] 🧠 Agentic deliberation: Reroute traffic via standby regional gateway and scale worker nodes.' },
      { step: 2, log: '[EXECUTE] ⚡ Workato recipe triggered: Dispatched DNS traffic shift + AWS ECS task scale +2.' },
      { step: 3, log: '[OBSERVE] 📊 Real-time telemetry: Latency dropped to 142ms. 5xx HTTP error rate reduced to 0.00%.' },
      { step: 4, log: '[VERIFY] ✅ Assertion passed: 100/100 synthetic probes returned 200 OK with sub-200ms latency.' },
      { step: 5, log: '[AUTO-RECOVER] 🛡️ Incident auto-mitigated in 3.4 seconds without human on-call escalation!' },
    ];

    scenario.forEach((item, index) => {
      setTimeout(() => {
        setActiveStep(item.step);
        setLogs(prev => [...prev, item.log]);
        playSound('key');

        if (index === scenario.length - 1) {
          setIsSimulating(false);
          playSound('success');
        }
      }, (index + 1) * 900);
    });
  };

  return (
    <div className="flex flex-col h-full bg-slate-900 text-slate-100 overflow-y-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-950/80 via-slate-900 to-slate-900 border-b border-cyan-500/20 p-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/10">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold tracking-tight text-white">{project.name}</h2>
                <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  {project.badge}
                </span>
                <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  {project.team}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">{project.tagline}</p>
            </div>
          </div>

          <button
            onClick={runSimulation}
            disabled={isSimulating}
            className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 font-bold text-xs rounded-lg transition-all shadow-md shadow-cyan-500/20 flex items-center gap-1.5"
          >
            {isSimulating ? (
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <Play className="w-3.5 h-3.5 fill-current" />
            )}
            {isSimulating ? 'Autonomous Loop Running...' : 'Simulate Enterprise Outage'}
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="p-5 space-y-5 flex-1">
        {/* Core Loop Architecture Diagram */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Autonomous Closed-Loop Pipeline
            </span>
            <span className="text-xs font-mono text-cyan-400">
              Detect ➔ Decide ➔ Execute ➔ Observe ➔ Verify ➔ Recover
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
            {steps.map((st, i) => {
              const Icon = st.icon;
              const isCurrent = activeStep === i;
              return (
                <div
                  key={st.name}
                  className={`p-3 rounded-xl border transition-all ${
                    isCurrent
                      ? `bg-cyan-950/60 ${st.border} shadow-lg shadow-cyan-500/20 scale-[1.03] ring-1 ring-cyan-400`
                      : 'bg-slate-800/40 border-slate-700/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-slate-500">0{i + 1}</span>
                    <Icon className={`w-4 h-4 ${isCurrent ? st.color : 'text-slate-400'}`} />
                  </div>
                  <h4 className={`text-xs font-bold ${isCurrent ? 'text-white' : 'text-slate-300'}`}>
                    {st.name}
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-1 leading-snug line-clamp-2">
                    {st.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Live Terminal Telemetry Console */}
        <div className="rounded-xl bg-slate-950 border border-slate-800 p-4 font-mono text-xs shadow-inner">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
            <div className="flex items-center gap-2 text-slate-400">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>Workato Agent Telemetry & Log Stream</span>
            </div>
            <span className="text-[10px] text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              Online Engine
            </span>
          </div>

          <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
            {logs.map((log, idx) => (
              <div
                key={idx}
                className={`leading-relaxed ${
                  log.includes('[DETECT]') ? 'text-amber-300' :
                  log.includes('[DECIDE]') ? 'text-cyan-300' :
                  log.includes('[EXECUTE]') ? 'text-blue-300' :
                  log.includes('[VERIFY]') || log.includes('[AUTO-RECOVER]') ? 'text-emerald-400 font-bold' :
                  'text-slate-400'
                }`}
              >
                {log}
              </div>
            ))}
          </div>
        </div>

        {/* Project Context & Track */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
              WorkatoHack 2025 Submission Overview
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Developed by <strong>Team S3vertex</strong> under the <strong>Orchestrator + Agents Track</strong>. 
              The project tackles enterprise IT operations by moving past fragile manual scripts into resilient, 
              self-governing agent loops capable of observing state drifts and initiating contextual remediation.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
              Core Capabilities Implemented
            </h4>
            <ul className="text-xs text-slate-300 space-y-1.5">
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span> Multi-agent decision logic based on runtime severity
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span> Dynamic rollback & fallback routes for enterprise SLAs
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span> Autonomous post-mortem telemetry capture
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
