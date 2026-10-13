/**
 * Central Projects Configuration for Samiksha Ambati Portfolio
 * Defines verified project metadata, actual deployed live URLs,
 * and case study deep-routing slugs.
 */
export const projectsData = [
  {
    id: 'voxshield-ai',
    slug: 'voxshield-ai',
    number: '01',
    title: 'VoxShield AI',
    category: 'ARTIFICIAL INTELLIGENCE / CYBERSECURITY',
    categoryShort: 'AI & CYBERSECURITY',
    domain: 'Audio Signal Processing & Biometric Defense',
    tagline: 'AI-Powered Synthetic Voice & Deepfake Impersonation Detection',
    description:
      'An AI-powered security project designed to detect potential voice-cloning impersonation attacks through audio analysis and authenticity assessment.',
    problem:
      'Rapid advancements in neural text-to-speech (TTS) and voice cloning models enable adversaries to synthesize human voices convincingly, facilitating executive impersonation, biometric authentication spoofing, and social engineering fraud.',
    solution:
      'An acoustic machine learning pipeline that inspects audio micro-variations, extracting Mel-Frequency Cepstral Coefficients (MFCC), fundamental pitch jitter, and spectral flux cues to score whether an audio signal is biologically organic or synthetic.',
    overview:
      'VoxShield AI is designed to inspect audio telemetry and identify synthetic voice cloning artifacts that human ears fail to discern. Developed using Python, Librosa, and NumPy, the project extracts high-dimensional acoustic feature vectors and scores the probability of voice synthesis.',
    technologies: [
      'Python',
      'Librosa',
      'Audio Signal Processing',
      'Machine Learning',
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
    // Verified Live URL:
    liveUrl: 'https://voxshield-6suul6uih-samikshaambati0369-alt.vercel.app/',
    isLive: true,
    liveStatusText: 'Live Project Active',
    // Verified GitHub Repository:
    githubUrl: 'https://github.com/samikshaambati0369-alt/voxshield-ai',
    caseStudyUrl: '/projects/voxshield-ai',
    accentColor: '#8B5CF6',
    mockupType: 'audio',
  },
  {
    id: 'fintrack',
    slug: 'fintrack',
    number: '02',
    title: 'FinTrack',
    category: 'FINTECH / FULL-STACK WEB DEVELOPMENT',
    categoryShort: 'FINTECH',
    domain: 'Full-Stack Personal Finance & Analytics',
    tagline: 'Personal Finance Management & Cash Flow Intelligence System',
    description:
      'A personal finance management application designed to help users track transactions, manage budgets, visualize spending, and explore financial insights.',
    problem:
      'Individuals struggle to maintain personal financial discipline due to fragmented bank statements, manual expense calculation, lack of spending category boundaries, and absence of visual financial forecasting.',
    solution:
      'A unified full-stack application providing interactive income and expense ledgers, budget allocation targets, dynamic analytics visualizations via Recharts, and rule-based predictive financial advisory.',
    overview:
      'FinTrack was architected to empower users with clear visibility over their financial liquidity. Built with a React and Vite frontend integrated with a Node.js Express REST API and MySQL database, it enforces security with stateless JWT authentication, HTTP security headers via Helmet, strict CORS, and rate limiting.',
    technologies: [
      'React',
      'Vite',
      'Express.js',
      'MySQL',
      'Axios',
      'Recharts',
      'JWT Authentication',
      'Node.js',
      'Tailwind CSS',
    ],
    architecture: {
      client: 'React SPA powered by Vite build tooling, Axios client, and Recharts visualization suite.',
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
    // Verified Live URL:
    // Deployed FinTrack instance (BuildSecure CypherCore bundle on Vercel with verified <title>FinTrack — Secure Finance</title>)
    liveUrl: 'https://build-secure-cypher-core-bmbio5cbf-samikshaambati0369-alt.vercel.app/',
    isLive: true,
    liveStatusText: 'Live Project Active',
    // Verified GitHub Repository:
    githubUrl: 'https://github.com/samikshaambati0369-alt/BuildSecure-CypherCore',
    caseStudyUrl: '/projects/fintrack',
    accentColor: '#10B981',
    mockupType: 'finance',
  },
  {
    id: 'aegiszero',
    slug: 'aegiszero',
    number: '03',
    title: 'AegisZero',
    category: 'ENTERPRISE AUTOMATION / AGENTIC WORKFLOWS',
    categoryShort: 'WORKATOHACK PROJECT',
    domain: 'Autonomous Multi-Agent Incident Orchestration',
    tagline: 'Enterprise Autonomous Closed-Loop Workflow Recovery Orchestration',
    description:
      'An enterprise workflow automation project designed to handle workflow failures, evaluate contextual recovery options, execute appropriate actions, verify outcomes, and escalate unresolved exceptions.',
    problem:
      'Enterprise cloud processes and interconnected microservices face unexpected runtime exceptions that brittle, static automation scripts fail to handle, leading to severe SLA breaches and manual developer on-call fatigue.',
    solution:
      'An autonomous closed-loop agent orchestrator built for the WorkatoHack (Team S3vertex, Orchestrator + Agents Track) that executes a 6-stage resilience loop: DETECT ➔ DECIDE ➔ EXECUTE ➔ OBSERVE ➔ VERIFY ➔ RECOVER to heal outages without human intervention.',
    overview:
      'AegisZero is an enterprise agentic workflow orchestrator built during the WorkatoHack hackathon by Team S3vertex. It monitors system telemetry streams, invokes autonomous AI agents when anomalies occur, selects and executes targeted Workato connector recipes, and verifies service stability.',
    technologies: [
      'Workato Platform',
      'Agentic Workflows',
      'Multi-Agent Swarm',
      'Zero-Trust Identity',
      'Webhook Telemetry',
      'SCIM / IAM APIs',
      'Enterprise API Orchestration',
    ],
    workflow: [
      { name: 'DETECT', desc: 'Monitors real-time telemetry streams and identifies operational anomalies or latency spikes.' },
      { name: 'DECIDE', desc: 'Autonomous AI agents evaluate incident context, business SLA impact, and determine recovery steps.' },
      { name: 'EXECUTE', desc: 'Dispatches targeted mitigation actions across enterprise connector recipes.' },
      { name: 'OBSERVE', desc: 'Continuously measures service health and tracks HTTP 5xx error rate drops in real time.' },
      { name: 'VERIFY', desc: 'Validates system performance and data integrity against defined enterprise benchmarks.' },
      { name: 'RECOVER', desc: 'Restores nominal operations, resolves tickets, and logs automated root-cause analysis (RCA).' },
    ],
    highlights: [
      'Autonomous 6-stage closed-loop recovery: DETECT → DECIDE → EXECUTE → OBSERVE → VERIFY → RECOVER',
      'Multi-agent decision logic routing mission-critical business transactions safely',
      'Seamless integration with Workato recipe connectors and enterprise IT systems',
      'Developed with Team S3vertex for the WorkatoHack Orchestrator + Agents track',
    ],
    challenges: [
      'Preventing infinite loops during cascading failure events by enforcing state verification gates.',
      'Balancing automated decision speed with safe rollback mechanisms.',
      'Coordinating heterogeneous enterprise systems via diverse webhook and API connector formats.',
    ],
    // Verified Live URL:
    liveUrl: 'https://aegiszero-cockpit.vercel.app/',
    isLive: true,
    liveStatusText: 'Live Project Active',
    // GitHub repository: Not hosted as a standalone personal public repo; left empty to prevent broken link
    githubUrl: '',
    caseStudyUrl: '/projects/aegiszero',
    accentColor: '#06B6D4',
    mockupType: 'workflow',
  },
];
