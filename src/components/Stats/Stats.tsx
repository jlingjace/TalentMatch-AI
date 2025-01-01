import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerChildren } from '../../utils/animations';

export const Stats: React.FC = () => {
  const stats = [
    { value: '75%', label: 'Time Saved' },
    { value: '2x', label: 'Hiring Efficiency' },
    { value: '10k+', label: 'CVs Processed' },
    { value: '98%', label: 'Client Satisfaction' },
  ];

  return (
    <section className="py-12 bg-blue-50">
      <motion.div
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};