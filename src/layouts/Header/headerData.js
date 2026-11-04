export const NAV_ITEMS = [
  {
    id: 'products',
    label: 'Products',
    href: '#section-3',
    sections: [
      {
        title: 'Global Payments',
        items: [
          { title: 'Payments', desc: 'Online & in-person payment processing', href: '#section-3' },
          { title: 'Billing', desc: 'Subscription and recurring billing', href: '#section-3' },
          { title: 'Connect', desc: 'Multi-party payments for platforms', href: '#section-3' },
          { title: 'Invoicing', desc: 'Online invoices to get paid faster', href: '#section-6' },
        ],
      },
      {
        title: 'Financial Services',
        items: [
          { title: 'Issuing', desc: 'Create virtual & physical cards', href: '#section-3' },
          { title: 'Treasury', desc: 'Banking-as-a-service APIs', href: '#section-3' },
          { title: 'Capital', desc: 'Fast, flexible business funding', href: '#section-3' },
          { title: 'Radar', desc: 'AI-driven fraud prevention', href: '#section-3' },
        ],
      },
    ],
  },
  {
    id: 'solutions',
    label: 'Solutions',
    href: '#section-5',
    sections: [
      {
        title: 'By Business Model',
        items: [
          { title: 'E-commerce', desc: 'Unify online and in-store commerce', href: '#section-5' },
          { title: 'SaaS Platforms', desc: 'Grow recurring revenue', href: '#section-6' },
          { title: 'Marketplaces', desc: 'Pay out sellers & vendors globally', href: '#section-3' },
          { title: 'Embedded Finance', desc: 'Build financial products into your app', href: '#section-3' },
        ],
      },
    ],
  },
  {
    id: 'developers',
    label: 'Developers',
    href: '#section-7',
    sections: [
      {
        title: 'Developer Tools',
        items: [
          { title: 'Documentation', desc: 'Guides, quickstarts & client libraries', href: '#section-7' },
          { title: 'API Reference', desc: 'Full REST and GraphQL API specs', href: '#section-7' },
          { title: 'Stripe Apps', desc: 'Integrate tools inside Dashboard', href: '#section-7' },
        ],
      },
    ],
  },
  {
    id: 'resources',
    label: 'Resources',
    href: '#section-8',
    sections: [
      {
        title: 'Knowledge & Support',
        items: [
          { title: 'Guides & Case Studies', desc: 'Learn how top businesses scale', href: '#section-5' },
          { title: 'Customer Stories', desc: 'Explore real-world implementations', href: '#section-5' },
          { title: 'Help Center', desc: '24/7 support & answers to FAQs', href: '#footer' },
        ],
      },
    ],
  },
  {
    id: 'pricing',
    label: 'Pricing',
    isDirectLink: true,
    href: '#section-9',
  },
];
