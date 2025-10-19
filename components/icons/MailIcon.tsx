import React from 'react';

const GmailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    aria-hidden="true"
    {...props}
  >
    {/* Blue left side of the "M" */}
    <path fill="#4285F4" d="M4 26.6V9.3L16 18l-8.7 8.7c-.5.4-1.2.3-1.6-.3z" />
    {/* Green right side of the "M" */}
    <path fill="#34A853" d="M28 26.6V9.3L16 18l8.7 8.7c.5.4 1.2.3 1.6-.3z" />
    {/* Yellow top-left shoulder of the "M" */}
    <path
      fill="#FBBC05"
      d="M27.7 7.2c-.4-.5-1.1-.6-1.6-.3L16 14.8 5.9 6.9c-.5-.4-1.2-.3-1.6.3L2 8.4V7c0-1.7 1.3-3 3-3h22c1.7 0 3 1.3 3 3v1.4l-2.3-1.2z"
    />
    {/* Red top chevron of the "M" / envelope flap */}
    <path
      fill="#EA4335"
      d="M29.4 8.6L16 19.2 2.6 8.6C2.2 8.2 2 7.6 2 7c0-1.7 1.3-3 3-3h22c1.7 0 3 1.3 3 3 0 .6-.2 1.2-.6 1.6z"
    />
  </svg>
);

export default GmailIcon;