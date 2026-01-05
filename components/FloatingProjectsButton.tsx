import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const FloatingProjectsButton: React.FC = () => {
  const location = useLocation();

  // Do not render the button if the user is already on the projects page
  if (location.pathname === '/projects') {
    return null;
  }

  return (
    <Link
      to="/projects"
      className="md:hidden sticky top-20 z-40 block w-full bg-red-600 text-white text-center py-3 font-bold text-lg shadow-md hover:bg-red-700 transition-colors duration-300"
      aria-label="View my projects"
    >
      View My Projects
    </Link>
  );
};

export default FloatingProjectsButton;
