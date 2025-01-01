import { FaUpload, FaMagic, FaUserCheck, FaHandshake } from 'react-icons/fa';

export const workflowSteps = [
  {
    icon: FaUpload,
    title: 'Upload CVs',
    description: 'Simply upload candidate CVs in bulk or integrate with your ATS'
  },
  {
    icon: FaMagic,
    title: 'AI Analysis',
    description: 'Our AI analyzes each CV against your specific requirements'
  },
  {
    icon: FaUserCheck,
    title: 'Smart Matching',
    description: 'Get ranked matches based on skills, experience, and culture fit'
  },
  {
    icon: FaHandshake,
    title: 'Hire Better',
    description: 'Interview top matches and make confident hiring decisions'
  }
] as const;