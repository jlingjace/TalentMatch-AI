import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';
import { CTAButton } from '../common/CTAButton';
import { PricingFeature } from './PricingFeature';

interface PricingPlanProps {
  name: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
}

export const PricingPlan: React.FC<PricingPlanProps> = ({
  name,
  price,
  period,
  features,
  popular = false,
}) => {
  return (
    <motion.div
      variants={fadeInUp}
      className={`bg-white rounded-lg shadow-lg overflow-hidden ${
        popular ? 'ring-2 ring-blue-500' : ''
      }`}
    >
      {popular && (
        <div className="bg-blue-500 text-white text-center py-2 text-sm font-semibold">
          Most Popular
        </div>
      )}
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{name}</h3>
        <div className="mb-6">
          <span className="text-4xl font-bold text-gray-900">{price}</span>
          <span className="text-gray-600">{period}</span>
        </div>
        <ul className="mb-8 space-y-4">
          {features.map((feature, index) => (
            <PricingFeature key={index}>{feature}</PricingFeature>
          ))}
        </ul>
        <CTAButton>Get Started</CTAButton>
      </div>
    </motion.div>
  );
};