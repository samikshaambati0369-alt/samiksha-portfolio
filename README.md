# ✦ Samiksha Ambati — Engineering Portfolio

A premium, minimalist, editorial-style developer portfolio website engineered for **Samiksha Ambati** (B.Tech Computer Science and Engineering student at Vignana Bharathi Institute of Technology, Hyderabad).

Inspired by creative digital studio editorial design with oversized bold typography, high-contrast black-and-white aesthetics, lime-green accents (`#BFFF00`), interactive cursor-edge scrolling, and deep-routed project case studies.

---

## 🌟 Key Features & Architectural Highlights

### 1. Interactive Cursor-Controlled Portfolio Scrolling
- **Intelligent Edge Zones**: Smoothly scrolls upward or downward as the cursor approaches the top or bottom 90px of the viewport.
- **Velocity Interpolation**: Eased proximity speed scaling using `requestAnimationFrame` with lerp velocity decay (`friction: 0.82`) for zero jitter or sudden jumps.
- **Boundary & Interaction Guards**: Automatically stops at scroll extremes (`0` and `maxScrollY`). Fully pauses during text selection, form inputs, or tab switching (`document.visibilitychange`).
- **Accessibility & Device Support**: Automatically disables on touchscreens via `(pointer: fine)` query and respects `(prefers-reduced-motion: reduce)` system settings.
- **Native Scroll Preserved**: Standard mouse-wheel, touchpad gestures, scrollbars, and keyboard navigation remain 100% operational.

### 2. Clickable Projects & Centralized Data Architecture
- **Interactive Project Cards**: Every project card is fully interactive with hover elevation, direct title navigation, verified source code links, and dedicated case study detail pages.
- **Synchronized Source of Truth**: Centralized in `src/data/projectsData.js` with comprehensive technical breakdowns, system architectures, and challenge retrospectives.
- **Transparent Staging & Demo Status**: Unhosted live environments gracefully present a clear status notification badge, preventing broken links and never inventing false URLs.

### 3. Dedicated Case Study Detail Pages (React Router)
- **Deep Routes**:
  - `/projects/fintrack` — FinTrack (Personal finance management & cash flow intelligence system)
  - `/projects/voxshield-ai` — VoxShield AI (Acoustic signal processing & synthetic voice deepfake detection)
  - `/projects/aegiszero` — AegisZero (Closed-loop autonomous multi-agent enterprise incident recovery)
- **Comprehensive Case Study Structure**:
  - High-contrast editorial hero banner & metadata
  - Structured Problem Statement vs. Engineered Solution cards
  - Executive technical narrative
  - High-resolution interactive visual demonstration (finance charts, MFCC audio spectrogram, 6-stage agentic sequence)
  - Layer-by-layer system architecture specification
  - Solved engineering challenges and key capabilities
  - Complete technology stack tags
  - Continuous reading next-project pagination and "Back to All Projects" navigation

### 4. Vercel SPA Deployment & Production Ready
- **Instant Client-Side Routing**: Configured with `vercel.json` rewrite rules (`/(.*)` -> `/index.html`) so refreshing deep URLs (e.g. `/projects/voxshield-ai`) never returns a 404 error.
- **Zero-Warning Production Bundling**: Powered by Vite + React 19 + Tailwind CSS + Framer Motion.

---

## 🚀 How to Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/samikshaambati0369-alt/samiksha-portfolio.git
cd samiksha-portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
http://localhost:5173
```

---

## 📦 Production Build & Testing

```bash
# Run production build
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Deploy to Vercel

### Method 1: Deploy via Vercel CLI
```bash
npx vercel
```

### Method 2: Deploy via Vercel Dashboard
1. Push this repository to GitHub:
   ```bash
   git remote add origin https://github.com/samikshaambati0369-alt/samiksha-portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. Log into [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import the `samiksha-portfolio` repository.
4. Framework Preset will auto-detect as **Vite**.
5. Click **"Deploy"**. The site is live with client-side deep routing configured via `vercel.json`.
