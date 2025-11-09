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
  const [bottomPosition, setBottomPosition] = useState(24);

  useEffect(() => {
    const footerEl = footerRef.current;
    if (!footerEl) return;

    const defaultBottom = 24;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        let newPosition = defaultBottom;

        if (entry.isIntersecting) {
          const footerTop = entry.boundingClientRect.top;
          const viewportHeight = window.innerHeight;
          const overlap = viewportHeight - footerTop;
          
          // We only care about overlap at the bottom of the screen
          if (overlap > 0) {
            newPosition = overlap + defaultBottom;
          }
        }
        
        // Round the position to the nearest integer to prevent sub-pixel feedback loops.
        const roundedPosition = Math.round(newPosition);
        
        // Use functional update to compare with the previous state and avoid re-renders.
        setBottomPosition(prev => {
          if (prev === roundedPosition) {
            return prev; // No change, prevents the re-render loop
          }
          return roundedPosition;
        });
      },
      {
        root: null,
        rootMargin: '0px',
        // Use a less sensitive threshold to prevent jarring feedback loops on
        // pages with dynamic height, while still providing a smooth transition.
        threshold: Array.from({ length: 21 }, (_, i) => i / 20),
      }
    );

    observer.observe(footerEl);

    return () => {
      if (footerEl) {
        observer.unobserve(footerEl);
      }
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
