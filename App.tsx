import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import FloatingResumeButton from './components/FloatingResumeButton';
import FloatingSocials from './components/FloatingSocials';
import { portfolioData } from './data/portfolioData';
import FloatingProjectsButton from './components/FloatingProjectsButton';

const App: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const [bottomPosition, setBottomPosition] = useState(24); // Default: 24px (corresponds to bottom-6)

  useEffect(() => {
    let ticking = false;

    const handleScrollAndResize = () => {
      if (!footerRef.current) return;

      const footerTop = footerRef.current.offsetTop;
      const scrollBottom = window.scrollY + window.innerHeight;
      const overlap = scrollBottom - footerTop;
      const defaultBottom = 24;

      const newPosition = overlap > 0 ? overlap + defaultBottom : defaultBottom;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          setBottomPosition(currentPosition => {
            // Only update state if the change is significant to prevent unnecessary renders.
            if (Math.abs(currentPosition - newPosition) > 0.5) {
              return newPosition;
            }
            return currentPosition;
          });
          ticking = false;
        });
        ticking = true;
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
      <FloatingProjectsButton />
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