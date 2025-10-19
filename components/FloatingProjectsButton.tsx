import React from 'react';
import { Link } from 'react-router-dom';

const FloatingProjectsButton: React.FC = () => {
  return (
    <Link
      to="/projects"
      className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-red-600 text-white px-6 py-3 rounded-full shadow-lg font-bold transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      aria-label="View my projects"
    >
      View My Projects
    </Link>
  );
};

export default FloatingProjectsButton;
