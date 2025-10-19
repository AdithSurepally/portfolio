import React from 'react';

interface FloatingResumeButtonProps {
    resumeUrl: string;
    bottomPosition: number;
}

const FloatingResumeButton: React.FC<FloatingResumeButtonProps> = ({ resumeUrl, bottomPosition }) => {
    // Extract filename from the URL path to ensure the correct name is suggested on download.
    const filename = resumeUrl.substring(resumeUrl.lastIndexOf('/') + 1);

    return (
        <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download={filename}
            className="fixed right-0 bg-red-600 text-white px-10 py-5 rounded-l-lg shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-300 ease-in-out transform hover:scale-105 z-40 font-bold text-xl"
            style={{ bottom: `${bottomPosition}px` }}
            aria-label="Download Resume"
        >
            Download Resume
        </a>
    );
};

export default FloatingResumeButton;