import React from 'react';
import { SocialLink, PersonalInfo } from '../types';
import LinkedinIcon from './icons/LinkedinIcon';
import GithubIcon from './icons/GithubIcon';
import MailIcon from './icons/MailIcon';
import WhatsappIcon from './icons/WhatsappIcon';

interface FooterProps {
  socialLinks: SocialLink[];
  personalInfo: PersonalInfo;
}

const iconMap: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  LinkedIn: LinkedinIcon,
  GitHub: GithubIcon,
  Mail: MailIcon,
  WhatsApp: WhatsappIcon,
};

const Footer: React.FC<FooterProps> = ({ socialLinks, personalInfo }) => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center text-center">
          <img 
            src={personalInfo.profilePicUrl} 
            alt={personalInfo.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-red-200 shadow-md mb-4"
          />
          <h3 className="text-2xl font-bold text-gray-900">{personalInfo.name}</h3>
          <p className="text-lg text-red-700 font-semibold mb-6">{personalInfo.title}</p>
          
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.name];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-red-600 transition-colors"
                  aria-label={link.name}
                >
                  {Icon && <Icon className="h-8 w-8" />}
                </a>
              );
            })}
          </div>
            
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;