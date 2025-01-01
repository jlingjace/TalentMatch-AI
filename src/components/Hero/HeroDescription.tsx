import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

export const HeroDescription: React.FC = () => {
  return (
    <motion.p 
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.2 }}
      className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
    >
      AI-powered CV screening that helps you find qualified candidates in minutes, not hours.
      Save time and hire smarter with our intelligent matching system.
    </motion.p>
  );
};