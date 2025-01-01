export const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' }
] as const;

export const FEATURES = [
  {
    id: 'ai-screening',
    title: 'AI-Powered Screening',
    description: 'Our advanced AI analyzes CVs to match candidates with your specific requirements, saving you countless hours of manual review.'
  },
  {
    id: 'smart-matching',
    title: 'Smart Matching',
    description: 'Intelligent algorithms ensure you only see candidates that truly fit your criteria, with detailed matching scores and insights.'
  },
  {
    id: 'time-saving',
    title: 'Time-Saving',
    description: 'Reduce hiring time by up to 75% with automated CV screening and ranking. Focus on interviewing the best matches.'
  },
  {
    id: 'analytics',
    title: 'Quality Metrics',
    description: 'Get detailed insights and analytics on your candidate pool and hiring process. Make data-driven decisions.'
  }
] as const;