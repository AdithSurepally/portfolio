import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinkClasses = "text-gray-600 hover:text-red-600 px-3 py-2 rounded-md text-lg font-medium transition-colors";
  const activeLinkClasses = "text-red-600";

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) => 
    isActive ? `${navLinkClasses} ${activeLinkClasses}` : navLinkClasses;
    
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-2xl font-bold text-gray-900">
              {portfolioData.personalInfo.name}
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" className={getNavLinkClass}>
                Home
              </NavLink>
              <NavLink to="/projects" className={getNavLinkClass}>
                Projects
              </NavLink>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            <NavLink to="/" className={getNavLinkClass} onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/projects" className={getNavLinkClass} onClick={() => setIsOpen(false)}>
              Projects
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;