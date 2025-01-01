import React from 'react';
import { IconType } from 'react-icons';
import { FaRobot, FaSearch, FaClock, FaChartLine } from 'react-icons/fa';

const iconMap: Record<string, IconType> = {
  'ai-screening': FaRobot,
  'smart-matching': FaSearch,
  'time-saving': FaClock,
  'analytics': FaChartLine,
};

interface FeatureIconProps {
  id: string;
}

export const FeatureIcon: React.FC<FeatureIconProps> = ({ id }) => {
  const Icon = iconMap[id] || FaRobot;
  
  return (
    <div className="text-blue-600 mb-4">
      <Icon size={32} />
    </div>
  );
};