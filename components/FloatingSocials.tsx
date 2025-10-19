import React from 'react';
import { SocialLink } from '../types';
import LinkedinIcon from './icons/LinkedinIcon';
import GithubIcon from './icons/GithubIcon';
import MailIcon from './icons/MailIcon';
import WhatsappIcon from './icons/WhatsappIcon';

interface FloatingSocialsProps {
  socialLinks: SocialLink[];
  bottomPosition: number;
}

const iconMap: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  LinkedIn: LinkedinIcon,
  GitHub: GithubIcon,
  Mail: MailIcon,
  WhatsApp: WhatsappIcon,
};

const FloatingSocials: React.FC<FloatingSocialsProps> = ({ socialLinks, bottomPosition }) => {
  return (
    <div 
      className="fixed left-4 z-40 transition-all duration-300 ease-in-out"
      style={{ bottom: `${bottomPosition}px` }}
    >
      <div className="bg-white/30 backdrop-blur-md p-3 rounded-xl border border-white/50 shadow-lg flex flex-col space-y-3">
        {socialLinks.map((link) => {
          const Icon = iconMap[link.name];
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label={link.name}
            >
              {Icon && <Icon className="h-7 w-7" />}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default FloatingSocials;
