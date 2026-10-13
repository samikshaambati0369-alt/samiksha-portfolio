import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { playSound } from '../../utils/sound';
import { PieChart, ShieldCheck, Database, Server, Sparkles, Plus, TrendingDown, TrendingUp, AlertCircle, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../icons/BrandIcons';

export default function FinTrackApp() {
  const project = portfolioData.projects.find(p => p.id === 'fintrack');
  const [activeTab, setActiveTab] = useState('demo'); // 'demo' | 'architecture' | 'security'
  
  // Interactive mini-budget simulation
  const [transactions, setTransactions] = useState([
    { id: 1, title: 'Freelance Frontend Build', amount: 850, type: 'income', category: 'Dev Work' },
    { id: 2, title: 'AWS Cloud Hosting & DB', amount: -65, type: 'expense', category: 'Infrastructure' },
    { id: 3, title: 'Online Learning & Certs', amount: -120, type: 'expense', category: 'Education' },
    { id: 4, title: 'Workstation Setup Equip', amount: -210, type: 'expense', category: 'Hardware' },
  ]);
  const [newTitle, setNewTitle] = useState('');
  const [newAmount, setNewAmount] = useState('');
  const [newType, setNewType] = useState('expense');
  const [aiInsightPrompt, setAiInsightPrompt] = useState(
    "💡 AI Financial Insight: Cloud hosting expenses increased by 14% this month. Consider reserved DB instances on Railway to save up to 28% in infrastructure costs!"
  );

  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = Math.abs(
    transactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0)
  );

  const balance = totalIncome - totalExpenses;

  const handleAddTransaction = (e) => {
    e.preventDefault();
    if (!newTitle.trim() || !newAmount) return;
    playSound('click');
    const val = parseFloat(newAmount);
    const item = {
      id: Date.now(),
      title: newTitle,
      amount: newType === 'expense' ? -Math.abs(val) : Math.abs(val),
      type: newType,
      category: newType === 'expense' ? 'Misc Expense' : 'Income',
    };
    setTransactions([item, ...transactions]);
    setNewTitle('');
    setNewAmount('');
    
    // Dynamic simulated AI response
    if (newType === 'expense' && val > 150) {
      setAiInsightPrompt(`⚡ AI Warning: Single transaction > $150 registered ('${newTitle}'). Recalibrating monthly discretionary budget ceiling.`);
    } else {
      setAiInsightPrompt(`✨ AI Insight Updated: Budget health remains at optimal 78% ratio. Target savings rate maintained.`);
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-900 text-slate-100 overflow-y-auto">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-950/80 via-slate-900 to-slate-900 border-b border-emerald-500/20 p-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/10">
              <PieChart className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold tracking-tight text-white">{project.name}</h2>
                <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {project.badge}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">{project.tagline}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              Source Code
            </a>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 mt-4 pt-3 border-t border-slate-800">
          {[
            { id: 'demo', label: '📊 Interactive Sandbox', icon: PieChart },
            { id: 'architecture', label: '⚡ Stack & Architecture', icon: Server },
            { id: 'security', label: '🛡️ Security Implementation', icon: ShieldCheck },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => { playSound('click'); setActiveTab(tab.id); }}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === tab.id
                  ? 'bg-emerald-500 text-slate-950 font-semibold shadow-md shadow-emerald-500/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Tab Content */}
      <div className="p-5 flex-1">
        {activeTab === 'demo' && (
          <div className="space-y-5">
            {/* AI Insight Notification */}
            <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-xs text-emerald-200/90 leading-relaxed font-mono">
                {aiInsightPrompt}
              </div>
            </div>

            {/* Metrics cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <span className="text-xs font-medium text-slate-400 block mb-1">Total Balance</span>
                <span className="text-2xl font-bold tracking-tight text-white font-mono">
                  ${balance.toLocaleString()}
                </span>
                <span className="text-[11px] text-emerald-400 flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3" /> Healthy Liquidity
                </span>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <span className="text-xs font-medium text-slate-400 block mb-1">Total Inflow</span>
                <span className="text-2xl font-bold tracking-tight text-emerald-400 font-mono">
                  +${totalIncome.toLocaleString()}
                </span>
                <span className="text-[11px] text-slate-400 mt-1 block">Active Inflows</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <span className="text-xs font-medium text-slate-400 block mb-1">Total Burn / Outflow</span>
                <span className="text-2xl font-bold tracking-tight text-rose-400 font-mono">
                  -${totalExpenses.toLocaleString()}
                </span>
                <span className="text-[11px] text-rose-400 flex items-center gap-1 mt-1">
                  <TrendingDown className="w-3 h-3" /> Within budget
                </span>
              </div>
            </div>

            {/* Quick Interactive Input */}
            <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50">
              <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
                Live Simulator — Add Transaction
              </h4>
              <form onSubmit={handleAddTransaction} className="flex flex-wrap items-center gap-2">
                <input
                  type="text"
                  placeholder="Transaction title (e.g. Server hosting)"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="flex-1 min-w-[180px] bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                />
                <input
                  type="number"
                  placeholder="Amount ($)"
                  value={newAmount}
                  onChange={(e) => setNewAmount(e.target.value)}
                  className="w-28 bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                />
                <select
                  value={newType}
                  onChange={(e) => setNewType(e.target.value)}
                  className="bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                >
                  <option value="expense">Expense (-)</option>
                  <option value="income">Income (+)</option>
                </select>
                <button
                  type="submit"
                  className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Post Entry
                </button>
              </form>
            </div>

            {/* Transactions Feed */}
            <div>
              <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Recent Ledger Activity
              </h4>
              <div className="space-y-1.5 max-h-52 overflow-y-auto pr-1">
                {transactions.map(item => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800/30 border border-slate-800 hover:border-slate-700 text-xs transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${item.type === 'income' ? 'bg-emerald-400' : 'bg-rose-400'}`} />
                      <span className="font-medium text-slate-200">{item.title}</span>
                      <span className="text-[10px] text-slate-500 px-1.5 py-0.5 rounded bg-slate-800">
                        {item.category}
                      </span>
                    </div>
                    <span className={`font-mono font-semibold ${item.type === 'income' ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {item.type === 'income' ? '+' : ''}${Math.abs(item.amount).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'architecture' && (
          <div className="space-y-5">
            <p className="text-xs text-slate-300 leading-relaxed">
              {project.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60">
                <div className="flex items-center gap-2 text-emerald-400 mb-2">
                  <Server className="w-4 h-4" />
                  <h4 className="text-sm font-semibold text-white">Full-Stack Pipeline</h4>
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span><strong>Frontend:</strong> React.js, Vite build tooling, Axios HTTP client, Recharts analytics components.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span><strong>Backend:</strong> Node.js, Express.js REST API with modular controllers and routers.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span><strong>Persistence:</strong> MySQL database schema maintaining relational user transactions and budgets.</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60">
                <div className="flex items-center gap-2 text-cyan-400 mb-2">
                  <Database className="w-4 h-4" />
                  <h4 className="text-sm font-semibold text-white">Cloud Infrastructure</h4>
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span><strong>Frontend Host:</strong> Deployed via Vercel with edge caching.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span><strong>Backend & DB:</strong> Railway platform hosting Node API and managed MySQL container.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span><strong>CI/CD:</strong> GitHub repository triggers automated webhooks on main branch commits.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Tech badges */}
            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Implemented Technologies
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map(t => (
                  <span key={t} className="px-2.5 py-1 text-xs rounded-md bg-slate-800 text-emerald-300 border border-emerald-500/20 font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'security' && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700">
              <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Backend Security & Defensive Practices
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Designed to adhere to industry best practices for financial data protection and user privacy:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <strong className="text-emerald-300 block mb-1">JWT Authentication</strong>
                  <span className="text-slate-400">Stateless JSON Web Tokens with encrypted payloads and expiry validation for protected endpoints.</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <strong className="text-emerald-300 block mb-1">Helmet Protection</strong>
                  <span className="text-slate-400">Security HTTP response headers configured to mitigate cross-site scripting (XSS) and clickjacking.</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <strong className="text-emerald-300 block mb-1">CORS Configuration</strong>
                  <span className="text-slate-400">Strict origin whitelisting preventing unauthorized cross-domain request exploitation.</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <strong className="text-emerald-300 block mb-1">API Rate Limiting</strong>
                  <span className="text-slate-400">Express rate limit middleware guarding auth routes against brute-force and credential stuffing.</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
