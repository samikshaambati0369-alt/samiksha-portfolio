import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import CustomCursor from './components/editorial/CustomCursor';
import ScrollProgress from './components/editorial/ScrollProgress';
import Navbar from './components/editorial/Navbar';
import Hero from './components/editorial/Hero';
import About from './components/editorial/About';
import Projects from './components/editorial/Projects';
import Services from './components/editorial/Services';
import Skills from './components/editorial/Skills';
import Achievements from './components/editorial/Achievements';
import Values from './components/editorial/Values';
import Contact from './components/editorial/Contact';
import Footer from './components/editorial/Footer';
import ProjectDetailPage from './pages/ProjectDetailPage';
import { useCursorEdgeScroll } from './hooks/useCursorEdgeScroll';

/**
 * Automatically scrolls to hash target element if present (e.g. /#projects, /#about)
 * or resets scroll position to top on page navigation.
 */
function ScrollToTopOrHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 90);
        return () => clearTimeout(timer);
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Services />
      <Skills />
      <Achievements />
      <Values />
      <Contact />
      <Footer />
    </main>
  );
}

function AppContent() {
  // Activate interactive cursor-edge scrolling globally (fine pointer only, respects reduced-motion)
  useCursorEdgeScroll({
    edgeZone: 90,
    maxSpeed: 16,
    friction: 0.82,
    enabled: true,
  });

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#0A0A0A] font-sans antialiased selection:bg-[#BFFF00] selection:text-black relative">
      {/* Route and Hash scroll coordinator */}
      <ScrollToTopOrHash />

      {/* Editorial Custom Cursor (Desktop) */}
      <CustomCursor />

      {/* Top Scroll Indicator with Lime Accent */}
      <ScrollProgress />

      {/* Minimal Sticky Navigation */}
      <Navbar />

      {/* Application Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
        {/* Catch-all redirect to homepage */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
