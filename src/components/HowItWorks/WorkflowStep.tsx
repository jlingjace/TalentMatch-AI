import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';
import { IconType } from 'react-icons';

interface WorkflowStepProps {
  icon: IconType;
  title: string;
  description: string;
  isLast: boolean;
}

export const WorkflowStep: React.FC<WorkflowStepProps> = ({
  icon: Icon,
  title,
  description,
  isLast
}) => {
  return (
    <motion.div
      variants={fadeInUp}
      className="relative"
    >
      <div className="bg-white rounded-lg p-6 shadow-lg h-full">
        <div className="text-blue-600 mb-4">
          <Icon size={32} />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      {!isLast && (
        <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
          <div className="w-8 h-0.5 bg-blue-200"></div>
        </div>
      )}
    </motion.div>
  );
};