import React, { useState, useRef, useEffect } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { playSound } from '../../utils/sound';
import confetti from 'canvas-confetti';
import { Terminal as TerminalIcon, Sparkles } from 'lucide-react';

export default function TerminalApp({ onOpenApp }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { text: '=======================================================', type: 'system' },
    { text: '  ✦ SamikshaOS Terminal Shell [v2.4.0-release]', type: 'system' },
    { text: '  ✦ Host: samiksha@vbit-hyderabad (x86_64)', type: 'system' },
    { text: '  ✦ Type "help" to view all available commands.', type: 'system' },
    { text: '=======================================================', type: 'system' },
  ]);
  const [commandIndex, setCommandIndex] = useState(-1);
  const [pastCommands, setPastCommands] = useState([]);
  const terminalEndRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = inputVal.trim();
      playSound('key');

      const newHistory = [...history, { text: `samiksha@dev:~$ ${inputVal}`, type: 'prompt' }];

      if (cmd) {
        setPastCommands(prev => [...prev, cmd]);
        setCommandIndex(-1);

        const [mainCmd, ...args] = cmd.toLowerCase().split(' ');

        switch (mainCmd) {
          case 'help':
            newHistory.push(
              { text: 'Available commands:', type: 'header' },
              { text: '  about        - View Samiksha\'s professional summary & career focus', type: 'info' },
              { text: '  skills       - Print categorized technical skills & stack', type: 'info' },
              { text: '  projects     - List all featured software engineering projects', type: 'info' },
              { text: '  open <name>  - Launch app window (fintrack, voxshield, aegiszero, profile, contact)', type: 'info' },
              { text: '  experience   - View internship history (Elevated Labs Data Analyst)', type: 'info' },
              { text: '  education    - Display B.Tech VBIT degree & academic track', type: 'info' },
              { text: '  contact      - Get direct email, phone, LinkedIn & GitHub links', type: 'info' },
              { text: '  hire         - Trigger recruiter fast-track & celebration! 🎉', type: 'success' },
              { text: '  clear        - Clear the terminal screen', type: 'info' }
            );
            break;

          case 'about':
          case 'bio':
            newHistory.push(
              { text: `Name: ${portfolioData.personal.name}`, type: 'header' },
              { text: `Title: ${portfolioData.personal.role} | ${portfolioData.personal.subRole}`, type: 'info' },
              { text: `Location: ${portfolioData.personal.location}`, type: 'info' },
              { text: `Bio: ${portfolioData.personal.bio}`, type: 'info' },
              { text: `Target Locations: ${portfolioData.personal.targetLocations.join(', ')}`, type: 'info' }
            );
            break;

          case 'skills':
            newHistory.push(
              { text: '--- TECHNICAL ARSENAL ---', type: 'header' },
              { text: `Languages:          ${portfolioData.skills.languages.join(', ')}`, type: 'info' },
              { text: `Core Foundations:   ${portfolioData.skills.core.join(', ')}`, type: 'info' },
              { text: `Web Development:    ${portfolioData.skills.webDevelopment.join(', ')}`, type: 'info' },
              { text: `Databases & Tools:  ${portfolioData.skills.databasesAndTools.join(', ')}`, type: 'info' },
              { text: `Data & Libraries:   ${portfolioData.skills.librariesAndData.join(', ')}`, type: 'info' },
              { text: `Core Domains:       ${portfolioData.skills.domains.join(', ')}`, type: 'info' }
            );
            break;

          case 'projects':
            newHistory.push(
              { text: '--- FEATURED PROJECTS ---', type: 'header' },
              { text: '1. FinTrack     - Full-stack Personal Finance Management (React, Node, Express, MySQL, JWT)', type: 'info' },
              { text: '2. VoxShield AI - AI-Powered Voice Cloning Detection (Python, ML, Audio Spectrograms)', type: 'info' },
              { text: '3. AegisZero    - WorkatoHack Enterprise Agentic Automation (Team S3vertex)', type: 'info' },
              { text: 'Hint: Run "open fintrack" or "open voxshield" to launch the interactive apps!', type: 'success' }
            );
            break;

          case 'open':
            const targetApp = args[0];
            if (targetApp && onOpenApp) {
              const matched = onOpenApp(targetApp);
              if (matched) {
                newHistory.push({ text: `🚀 Launching GUI app: ${targetApp}...`, type: 'success' });
              } else {
                newHistory.push({ text: `Unknown app "${targetApp}". Try: fintrack, voxshield, aegiszero, profile, contact`, type: 'error' });
              }
            } else {
              newHistory.push({ text: 'Usage: open <app_name> (e.g., open fintrack)', type: 'error' });
            }
            break;

          case 'experience':
            newHistory.push(
              { text: '--- WORK EXPERIENCE ---', type: 'header' },
              { text: 'Role: Data Analyst Intern @ Elevated Labs', type: 'info' },
              { text: 'Responsibilities: Exploratory data analysis, cleaning, visualization using Pandas, NumPy, Matplotlib.', type: 'info' }
            );
            break;

          case 'education':
            newHistory.push(
              { text: '--- ACADEMIC BACKGROUND ---', type: 'header' },
              { text: '• B.Tech CSE (3rd Year, 2024–2028): Vignana Bharathi Institute of Tech (VBIT), CGPA 7.56', type: 'info' },
              { text: '• Intermediate (MPC): Excellencia Junior College, Hyderabad (76.4%)', type: 'info' },
              { text: '• SSC: Hyderabad Board (76.0%)', type: 'info' }
            );
            break;

          case 'contact':
            newHistory.push(
              { text: '--- DIRECT CONTACT ---', type: 'header' },
              { text: `Email:    ${portfolioData.personal.email}`, type: 'success' },
              { text: `Phone:    ${portfolioData.personal.phone}`, type: 'success' },
              { text: `LinkedIn: ${portfolioData.personal.linkedin}`, type: 'info' },
              { text: `GitHub:   ${portfolioData.personal.github}`, type: 'info' }
            );
            break;

          case 'hire':
            playSound('success');
            confetti({
              particleCount: 100,
              spread: 70,
              origin: { y: 0.6 },
            });
            newHistory.push(
              { text: '🎉 CONGRATULATIONS! You have discovered the ultimate candidate.', type: 'success' },
              { text: 'Samiksha Ambati is ready for impactful internship & developer roles.', type: 'success' },
              { text: `Reach out directly at: ${portfolioData.personal.email}`, type: 'header' }
            );
            break;

          case 'clear':
            setHistory([]);
            setInputVal('');
            return;

          case 'sudo':
            newHistory.push({ text: 'User is not in the sudoers file. This incident will be reported to Samiksha! 😉', type: 'error' });
            break;

          case 'date':
            newHistory.push({ text: new Date().toString(), type: 'info' });
            break;

          default:
            newHistory.push({ text: `command not found: "${cmd}". Type "help" for a list of commands.`, type: 'error' });
            break;
        }
      }

      setHistory(newHistory);
      setInputVal('');
    } else if (e.key === 'ArrowUp') {
      if (pastCommands.length > 0) {
        const nextIdx = commandIndex === -1 ? pastCommands.length - 1 : Math.max(0, commandIndex - 1);
        setCommandIndex(nextIdx);
        setInputVal(pastCommands[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      if (pastCommands.length > 0 && commandIndex !== -1) {
        const nextIdx = commandIndex + 1;
        if (nextIdx < pastCommands.length) {
          setCommandIndex(nextIdx);
          setInputVal(pastCommands[nextIdx]);
        } else {
          setCommandIndex(-1);
          setInputVal('');
        }
      }
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-950 text-slate-200 font-mono text-xs overflow-hidden select-text">
      {/* Top Banner */}
      <div className="bg-slate-900 border-b border-slate-800 px-4 py-2.5 flex items-center justify-between text-slate-400 select-none">
        <div className="flex items-center gap-2">
          <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-xs text-slate-300 font-bold">bash — 80x24</span>
        </div>
        <div className="flex items-center gap-2 text-[11px]">
          <span className="text-slate-500">Press Enter to execute</span>
          <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">UTF-8</span>
        </div>
      </div>

      {/* Terminal Output */}
      <div className="flex-1 p-4 overflow-y-auto space-y-1.5 font-mono">
        {history.map((item, idx) => (
          <div
            key={idx}
            className={`leading-relaxed whitespace-pre-wrap ${
              item.type === 'system' ? 'text-slate-500' :
              item.type === 'prompt' ? 'text-cyan-400 font-semibold' :
              item.type === 'header' ? 'text-amber-300 font-bold mt-1' :
              item.type === 'success' ? 'text-emerald-400' :
              item.type === 'error' ? 'text-rose-400' :
              'text-slate-300'
            }`}
          >
            {item.text}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Input Row */}
      <div className="p-3 bg-slate-900/60 border-t border-slate-800 flex items-center gap-2">
        <span className="text-emerald-400 font-bold select-none font-mono">samiksha@dev:~$</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleCommand}
          autoFocus
          className="flex-1 bg-transparent text-white font-mono text-xs focus:outline-none caret-emerald-400"
          placeholder="Type 'help', 'skills', 'projects', 'hire'..."
        />
      </div>
    </div>
  );
}
