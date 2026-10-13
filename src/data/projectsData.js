export const projectsData = [
  {
    id: 'fintrack',
    slug: 'fintrack',
    number: '01',
    title: 'FinTrack',
    category: 'FinTech / Full-Stack Development',
    categoryShort: 'FINTECH',
    domain: 'Full-Stack Personal Finance & Analytics',
    tagline: 'Personal Finance Management & Cash Flow Intelligence System',
    description:
      'A personal finance management application for tracking transactions, managing budgets, visualizing spending, and exploring financial insights.',
    problem:
      'Individuals struggle to maintain personal financial discipline due to fragmented bank statements, manual expense calculation, lack of spending category boundaries, and absence of visual financial forecasting.',
    solution:
      'A unified full-stack application providing interactive income and expense ledgers, budget allocation targets, dynamic analytics visualizations via Recharts, and rule-based predictive financial advisory.',
    overview:
      'FinTrack was architected to empower users with clear visibility over their financial liquidity. Built with a React and Vite frontend integrated with a Node.js Express REST API and MySQL database, it enforces security with stateless JWT authentication, HTTP security headers via Helmet, strict CORS, and rate limiting.',
    technologies: [
      'React.js',
      'Vite',
      'Node.js',
      'Express.js',
      'MySQL',
      'Axios',
      'Recharts',
      'JWT Authentication',
      'Helmet.js',
      'Tailwind CSS',
    ],
    architecture: {
      client: 'React 19 SPA powered by Vite build tooling, Axios client, and Recharts visualization suite.',
      server: 'Modular Express REST API with layered controller and service patterns, input validation, and JWT verification middleware.',
      database: 'Relational MySQL schema structured with user, account, transaction, and category budget tables with foreign-key constraints.',
      security: 'Stateless JWT tokens, Bcrypt password hashing, Helmet defense headers, and express-rate-limit protection.',
    },
    highlights: [
      'Interactive real-time transaction ledger with instant balance calculation',
      'Dynamic category expenditure distribution charts (Recharts donut and bar views)',
      'Budget threshold monitors with automated alerts as spending approaches caps',
      'Contextual rule-based insights analyzing monthly cash burn patterns',
      'Production security best practices with JWT, Helmet, and CORS restrictions',
    ],
    challenges: [
      'Handling real-time synchronization between budget updates and historical transaction ledgers.',
      'Structuring relational MySQL queries for monthly aggregations without performance bottlenecks.',
      'Ensuring secure cross-origin communication between the client frontend and backend REST services.',
    ],
    liveUrl: null, // Not currently publicly hosted
    isLive: false,
    liveStatusText: 'Staging / Coming Soon',
    githubUrl: 'https://github.com/samikshaambati0369-alt',
    caseStudyUrl: '/projects/fintrack',
    accentColor: '#10B981', // Emerald
    mockupType: 'finance',
  },
  {
    id: 'voxshield',
    slug: 'voxshield-ai',
    number: '02',
    title: 'VoxShield AI',
    category: 'Artificial Intelligence / Cybersecurity',
    categoryShort: 'AI & CYBERSECURITY',
    domain: 'Audio Signal Processing & Biometric Defense',
    tagline: 'AI-Powered Synthetic Voice & Deepfake Impersonation Detection',
    description:
      'An AI-powered security solution designed to detect potential voice-cloning impersonation attacks through audio analysis and authenticity assessment.',
    problem:
      'Rapid advancements in neural text-to-speech (TTS) and voice cloning models enable adversaries to synthesize human voices convincingly, facilitating executive impersonation, biometric authentication spoofing, and social engineering fraud.',
    solution:
      'An acoustic machine learning pipeline that inspects audio micro-variations, extracting Mel-Frequency Cepstral Coefficients (MFCC), fundamental pitch jitter, and spectral flux cues to score whether an audio signal is biologically organic or synthetic.',
    overview:
      'VoxShield AI is designed to inspect audio telemetry and identify synthetic voice cloning artifacts that human ears fail to discern. Developed using Python, Librosa, and NumPy, the project extracts high-dimensional acoustic feature vectors and scores the probability of voice synthesis.',
    technologies: [
      'Python',
      'Machine Learning',
      'Audio Signal Processing',
      'Librosa',
      'NumPy',
      'Matplotlib',
      'SciPy',
      'Spectrogram Analysis',
    ],
    architecture: {
      pipeline: 'Acoustic Signal Preprocessing ➔ MFCC & Harmonic Feature Extraction ➔ Spectral Flux Profiling ➔ Classification Scoring.',
      featureSet: '13-dimensional MFCC vectors, fundamental frequency (F0) tracking, pitch jitter, shimmer percentage, and spectral centroid.',
      scoringEngine: 'Algorithmic classifier calculating synthetic probability against organic human vocal tract physiological thresholds.',
    },
    highlights: [
      'Acoustic signal analysis extracting MFCC variance and high-frequency phase cues',
      'Dynamic Synthetic Voice Risk Score highlighting artificial neural vocoder artifacts',
      'Speaker verification pipeline designed to combat replay attacks and unauthorized biometric spoofing',
      'Acoustic spectrogram visualizer displaying real-time frequency distribution from 0 to 16 kHz',
    ],
    challenges: [
      'Differentiating low-quality authentic microphone recordings from high-fidelity neural voice clones.',
      'Isolating acoustic room impulse response (reverb) and background ambient noise from vocal tract frequencies.',
      'Optimizing feature extraction algorithms for near real-time latency.',
    ],
    liveUrl: null, // Deployment unconfirmed
    isLive: false,
    liveStatusText: 'Research Project / Coming Soon',
    githubUrl: 'https://github.com/samikshaambati0369-alt',
    caseStudyUrl: '/projects/voxshield-ai',
    accentColor: '#8B5CF6', // Violet
    mockupType: 'audio',
  },
  {
    id: 'aegiszero',
    slug: 'aegiszero',
    number: '03',
    title: 'AegisZero',
    category: 'Enterprise Automation / Agentic Workflows',
    categoryShort: 'WORKATOHACK PROJECT',
    domain: 'Autonomous Multi-Agent Incident Orchestration',
    tagline: 'Enterprise Autonomous Closed-Loop Workflow Recovery Orchestration',
    description:
      'An agent-driven enterprise workflow recovery solution designed to detect failures, make contextual decisions, execute recovery actions, verify outcomes, and escalate unresolved exceptions.',
    problem:
      'Enterprise cloud processes and interconnected microservices face unexpected runtime exceptions that brittle, static automation scripts fail to handle, leading to severe SLA breaches and manual developer on-call fatigue.',
    solution:
      'An autonomous closed-loop agent orchestrator built for the WorkatoHack (Team S3vertex, Orchestrator + Agents Track) that executes a 6-stage resilience loop: Detect ➔ Decide ➔ Execute ➔ Observe ➔ Verify ➔ Recover to heal outages without human intervention.',
    overview:
      'AegisZero is an enterprise agentic workflow orchestrator built during the WorkatoHack hackathon by Team S3vertex. It monitors system telemetry streams, invokes autonomous AI agents when anomalies occur, selects and executes targeted Workato connector recipes, and verifies service stability.',
    technologies: [
      'Workato Platform',
      'Enterprise API Orchestration',
      'Agentic Workflows',
      'Multi-Agent Decision Logic',
      'Autonomous Self-Healing Loops',
      'Webhook Telemetry',
    ],
    workflow: [
      { name: 'Detect', desc: 'Monitors real-time telemetry streams and identifies operational anomalies or latency spikes.' },
      { name: 'Decide', desc: 'Autonomous AI agents evaluate incident context, business SLA impact, and determine recovery steps.' },
      { name: 'Execute', desc: 'Dispatches targeted mitigation actions across enterprise connector recipes.' },
      { name: 'Observe', desc: 'Continuously measures service health and tracks HTTP 5xx error rate drops in real time.' },
      { name: 'Verify', desc: 'Validates system performance and data integrity against defined enterprise benchmarks.' },
      { name: 'Recover', desc: 'Restores nominal operations, resolves tickets, and logs automated root-cause analysis (RCA).' },
    ],
    highlights: [
      'Autonomous 6-stage closed-loop recovery: Detect → Decide → Execute → Observe → Verify → Recover',
      'Multi-agent decision logic routing mission-critical business transactions safely',
      'Seamless integration with Workato recipe connectors and enterprise IT systems',
      'Developed with Team S3vertex for the WorkatoHack Orchestrator + Agents track',
    ],
    challenges: [
      'Preventing infinite loops during cascading failure events by enforcing state verification gates.',
      'Balancing automated decision speed with safe rollback mechanisms.',
      'Coordinating heterogeneous enterprise systems via diverse webhook and API connector formats.',
    ],
    liveUrl: null, // Workato workspace demo
    isLive: false,
    liveStatusText: 'Hackathon Walkthrough / Coming Soon',
    githubUrl: 'https://github.com/samikshaambati0369-alt',
    caseStudyUrl: '/projects/aegiszero',
    accentColor: '#06B6D4', // Cyan
    mockupType: 'workflow',
  },
];
