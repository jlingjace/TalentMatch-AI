import React from 'react';
import { motion } from 'framer-motion';
import { FeatureCard } from './FeatureCard';
import { FEATURES } from '../../utils/constants';
import { staggerChildren } from '../../utils/animations';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Choose Our Platform?
        </h2>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};