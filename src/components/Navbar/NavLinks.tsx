import React from 'react';
import { NAV_LINKS } from '../../utils/constants';

export const NavLinks: React.FC = () => {
  return (
    <div className="hidden md:flex space-x-8">
      {NAV_LINKS.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          className="text-gray-600 hover:text-blue-600 transition-colors"
        >
          {label}
        </a>
      ))}
    </div>
  );
};