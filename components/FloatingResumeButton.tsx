import React from 'react';

interface FloatingResumeButtonProps {
    resumeUrl: string;
    bottomPosition: number;
}

const FloatingResumeButton: React.FC<FloatingResumeButtonProps> = ({ resumeUrl, bottomPosition }) => {
    return (
        <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="fixed right-6 bg-red-600 text-white px-10 py-5 rounded-lg shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-300 ease-in-out transform hover:scale-105 z-50 font-bold text-xl"
            style={{ bottom: `${bottomPosition}px` }}
            aria-label="Download Resume"
        >
            Download Resume
        </a>
    );
};

export default FloatingResumeButton;
