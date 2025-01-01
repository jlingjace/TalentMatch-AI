import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';
import { CTAButton } from '../common/CTAButton';

export const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Hiring Process?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of companies using TalentMatchAI to find their perfect candidates faster.
          </p>
          <CTAButton size="large" className="bg-white text-blue-600 hover:bg-blue-50">
            Start Your Free Trial
          </CTAButton>
          <p className="mt-4 text-blue-100">No credit card required</p>
        </motion.div>
      </div>
    </section>
  );
};