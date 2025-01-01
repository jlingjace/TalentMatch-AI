import React from 'react';
import { motion } from 'framer-motion';
import { staggerChildren } from '../../utils/animations';
import { WorkflowStep } from './WorkflowStep';
import { workflowSteps } from './stepsData';

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Four simple steps to transform your hiring process
          </p>
        </div>
        
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {workflowSteps.map((step, index) => (
            <WorkflowStep
              key={index}
              {...step}
              isLast={index === workflowSteps.length - 1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};