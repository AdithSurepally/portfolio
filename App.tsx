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
  const [bottomPosition, setBottomPosition] = useState(24); // Default: 24px

  useEffect(() => {
    const footerEl = footerRef.current;
    if (!footerEl) return;

    const defaultBottom = 24;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          // Footer is visible. Calculate how much it pushes the button up.
          // The overlap is the distance from the viewport bottom to the footer's top edge.
          const overlap = window.innerHeight - entry.boundingClientRect.top;
          setBottomPosition(overlap > 0 ? overlap + defaultBottom : defaultBottom);
        } else {
          // Footer is not visible. If it's below the viewport, reset to default.
          if (entry.boundingClientRect.top > window.innerHeight) {
            setBottomPosition(defaultBottom);
          }
        }
      },
      {
        root: null, // relative to the viewport
        rootMargin: '0px',
        // Create a threshold for every percentage point of visibility for smooth transitions
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
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