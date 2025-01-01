export const pricingPlans = [
  {
    name: 'Starter',
    price: '$99',
    period: '/month',
    features: [
      'Up to 100 CVs per month',
      'Basic AI screening',
      'Email support',
      'Basic analytics'
    ]
  },
  {
    name: 'Professional',
    price: '$299',
    period: '/month',
    popular: true,
    features: [
      'Up to 500 CVs per month',
      'Advanced AI matching',
      'Priority support',
      'Advanced analytics',
      'Custom screening criteria'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    features: [
      'Unlimited CVs',
      'Custom AI models',
      'Dedicated support',
      'Full API access',
      'Custom integrations',
      'SLA guarantee'
    ]
  }
] as const;