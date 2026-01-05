import React, { forwardRef } from 'react';

interface FloatingResumeButtonProps {
    resumeUrl: string;
}

const FloatingResumeButton = forwardRef<HTMLAnchorElement, FloatingResumeButtonProps>(({ resumeUrl }, ref) => {
    // Extract filename from the URL path to ensure the correct name is suggested on download.
    const filename = resumeUrl.substring(resumeUrl.lastIndexOf('/') + 1);

    return (
        <a
            ref={ref}
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download={filename}
            className="fixed right-4 bg-red-600 text-white py-3 px-5 xl:py-5 xl:px-10 rounded-lg shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-300 ease-in-out transform hover:scale-105 z-40 font-bold text-base xl:text-xl"
            style={{ bottom: '24px' }}
            aria-label="Download Resume"
        >
            <span className="xl:hidden">Resume</span>
            <span className="hidden xl:inline">Download Resume</span>
        </a>
    );
});

export default FloatingResumeButton;