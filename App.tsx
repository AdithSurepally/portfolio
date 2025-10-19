import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import HomePage from './pages/HomePage.tsx';
import ProjectsPage from './pages/ProjectsPage.tsx';
import FloatingResumeButton from './components/FloatingResumeButton.tsx';
import FloatingSocials from './components/FloatingSocials.tsx';
import { portfolioData } from './data/portfolioData.ts';

const App: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const [bottomPosition, setBottomPosition] = useState(24); // Default: 24px (corresponds to bottom-6)

  useEffect(() => {
    const handleScrollAndResize = () => {
      if (!footerRef.current) return;

      const footerTop = footerRef.current.offsetTop;
      const scrollBottom = window.scrollY + window.innerHeight;
      const overlap = scrollBottom - footerTop;
      const defaultBottom = 24;

      if (overlap > 0) {
        setBottomPosition(overlap + defaultBottom);
      } else {
        setBottomPosition(defaultBottom);
      }
    };

    window.addEventListener('scroll', handleScrollAndResize, { passive: true });
    window.addEventListener('resize', handleScrollAndResize, { passive: true });
    
    // Initial check
    handleScrollAndResize();
    
    // A small timeout to re-check after initial render, ensuring correct footer position is captured
    const timer = setTimeout(handleScrollAndResize, 100);

    return () => {
      window.removeEventListener('scroll', handleScrollAndResize);
      window.removeEventListener('resize', handleScrollAndResize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </main>
      <div ref={footerRef}>
        <Footer socialLinks={portfolioData.socialLinks} personalInfo={portfolioData.personalInfo} />
      </div>
      <FloatingResumeButton resumeUrl={portfolioData.resumeUrl} bottomPosition={bottomPosition} />
      <FloatingSocials socialLinks={portfolioData.socialLinks} bottomPosition={bottomPosition} />
    </div>
  );
};

export default App;
