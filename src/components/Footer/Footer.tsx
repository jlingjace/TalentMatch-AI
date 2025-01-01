import React from 'react';
import { Logo } from '../Navbar/Logo';

export const Footer: React.FC = () => {
  const footerLinks = {
    Product: ['Features', 'How it Works', 'Pricing', 'Case Studies'],
    Company: ['About', 'Blog', 'Careers', 'Contact'],
    Resources: ['Documentation', 'Support', 'API', 'Status'],
    Legal: ['Privacy', 'Terms', 'Security', 'Compliance']
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Logo className="text-white" />
            <p className="mt-4 text-gray-400 max-w-xs">
              AI-powered CV screening that helps you find qualified candidates faster and smarter.
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-gray-400 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2023 TalentMatchAI. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Twitter</a>
              <a href="#" className="hover:text-white">LinkedIn</a>
              <a href="#" className="hover:text-white">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};