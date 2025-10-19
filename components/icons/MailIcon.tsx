import React from 'react';

const MailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="#D43B3B"
    aria-hidden="true"
    {...props}
  >
    <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-1.518 14h-16v-11.881l8 6.512 8-6.512v11.881z" />
  </svg>
);

export default MailIcon;