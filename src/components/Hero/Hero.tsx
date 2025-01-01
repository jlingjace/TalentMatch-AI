import React from 'react';
import { motion } from 'framer-motion';
import { CTAButton } from '../common/CTAButton';
import { HeroTitle } from './HeroTitle';
import { HeroDescription } from './HeroDescription';
import { staggerChildren } from '../../utils/animations';

export const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 via-white to-transparent">
      <motion.div 
        variants={staggerChildren}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center relative">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-20 animate-float"></div>
          </div>

          <HeroTitle />
          <HeroDescription />
          <motion.div
            variants={staggerChildren}
            transition={{ delay: 0.4 }}
            className="space-x-4"
          >
            <CTAButton size="large" className="bg-blue-600 hover:bg-blue-700">
              Start Free Trial
            </CTAButton>
            <CTAButton size="large" className="bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50">
              Watch Demo
            </CTAButton>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};