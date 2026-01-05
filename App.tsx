import React, { useEffect, useRef } from 'react';
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
  const resumeBtnRef = useRef<HTMLAnchorElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footerEl = footerRef.current;
    if (!footerEl) return;

    const handleScroll = () => {
       if (!footerRef.current) return;
       const footerRect = footerRef.current.getBoundingClientRect();
       const viewportHeight = window.innerHeight;
       const overlap = viewportHeight - footerRect.top;
       
       const defaultBottom = 24;
       let newBottom = defaultBottom;

       if (overlap > 0) {
         newBottom = defaultBottom + overlap;
       }
       
       const bottomStr = `${newBottom}px`;
       
       if (resumeBtnRef.current) {
         resumeBtnRef.current.style.bottom = bottomStr;
       }
       if (socialsRef.current) {
         socialsRef.current.style.bottom = bottomStr;
       }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
            window.addEventListener('scroll', handleScroll, { passive: true });
            window.addEventListener('resize', handleScroll, { passive: true });
            // Update immediately to avoid jump
            handleScroll();
        } else {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
            // Reset to default
            if (resumeBtnRef.current) resumeBtnRef.current.style.bottom = '24px';
            if (socialsRef.current) socialsRef.current.style.bottom = '24px';
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0
      }
    );

    observer.observe(footerEl);

    return () => {
      if (footerEl) {
        observer.unobserve(footerEl);
      }
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
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
      <FloatingResumeButton ref={resumeBtnRef} resumeUrl={portfolioData.resumeUrl} />
      <FloatingSocials ref={socialsRef} socialLinks={portfolioData.socialLinks} />
    </div>
  );
};

export default App;