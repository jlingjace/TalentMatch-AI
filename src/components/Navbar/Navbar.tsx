import React, { useState } from 'react';
import { Logo } from './Logo';
import { NavLinks } from './NavLinks';
import { CTAButton } from '../common/CTAButton';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AuthModal } from '../auth/AuthModal';
import { useAuth } from '../../hooks/useAuth';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { scrollY } = useScroll();
  const { user, signOut } = useAuth();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 255, 0.95)']
  );

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        style={{ backgroundColor }}
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-shadow duration-300 ${
          isScrolled ? 'shadow-lg' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Logo />
            <NavLinks />
            {user ? (
              <CTAButton onClick={signOut} className="bg-blue-600 hover:bg-blue-700">
                Sign Out
              </CTAButton>
            ) : (
              <CTAButton
                onClick={() => setIsAuthModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Get Started
              </CTAButton>
            )}
          </div>
        </div>
      </motion.nav>
      
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
};