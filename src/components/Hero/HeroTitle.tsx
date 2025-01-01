import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

export const HeroTitle: React.FC = () => {
  return (
    <motion.h1 
      variants={fadeInUp}
      className="text-6xl font-bold mb-6"
    >
      Find the Perfect Candidates
      <span className="text-gradient block mt-2">Faster & Smarter</span>
    </motion.h1>
  );
};