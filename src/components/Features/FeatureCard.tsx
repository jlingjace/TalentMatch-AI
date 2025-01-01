import React from 'react';
import { motion } from 'framer-motion';
import { FeatureIcon } from './FeatureIcon';
import { fadeInUp } from '../../utils/animations';

interface FeatureCardProps {
  id: string;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ id, title, description }) => {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -5 }}
      className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
    >
      <FeatureIcon id={id} />
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};