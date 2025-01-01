import React from 'react';
import { motion } from 'framer-motion';

interface CTAButtonProps {
  children: React.ReactNode;
  size?: 'normal' | 'large';
  className?: string;
  onClick?: () => void;
}

export const CTAButton: React.FC<CTAButtonProps> = ({ 
  children, 
  size = 'normal',
  className = '',
  onClick 
}) => {
  const sizeClasses = size === 'large' 
    ? 'px-8 py-4 text-lg'
    : 'px-6 py-2 text-base';

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${sizeClasses} ${className} font-semibold rounded-lg
        transition-all duration-300 shadow-md hover:shadow-lg
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
    >
      {children}
    </motion.button>
  );
};