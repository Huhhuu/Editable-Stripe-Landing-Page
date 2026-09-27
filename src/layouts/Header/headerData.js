export const NAV_ITEMS = [
  {
    id: 'products',
    label: 'Products',
    sections: [
      {
        title: 'Global Payments',
        items: [
          {
            title: 'Payments',
            desc: 'Online & in-person payment processing',
            icon: 'CreditCard',
            badge: 'Popular'
          },
          {
            title: 'Billing',
            desc: 'Subscription and recurring billing',
            icon: 'Layers'
          },
          {
            title: 'Connect',
            desc: 'Multi-party payments for platforms',
            icon: 'Globe'
          },
          {
            title: 'Invoicing',
            desc: 'Online invoices to get paid faster',
            icon: 'FileText'
          }
        ]
      },
      {
        title: 'Financial Services',
        items: [
          {
            title: 'Issuing',
            desc: 'Create virtual & physical cards',
            icon: 'CreditCard'
          },
          {
            title: 'Treasury',
            desc: 'Banking-as-a-service APIs',
            icon: 'Building2'
          },
          {
            title: 'Capital',
            desc: 'Fast, flexible business funding',
            icon: 'TrendingUp'
          },
          {
            title: 'Radar',
            desc: 'AI-driven fraud prevention',
            icon: 'ShieldCheck',
            badge: 'AI'
          }
        ]
      }
    ]
  },
  {
    id: 'solutions',
    label: 'Solutions',
    sections: [
      {
        title: 'By Business Model',
        items: [
          {
            title: 'E-commerce',
            desc: 'Unify online and in-store commerce',
            icon: 'ShoppingBag'
          },
          {
            title: 'SaaS Platforms',
            desc: 'Grow recurring recurring revenue',
            icon: 'Layers'
          },
          {
            title: 'Marketplaces',
            desc: 'Pay out sellers & vendors globally',
            icon: 'Boxes'
          },
          {
            title: 'Embedded Finance',
            desc: 'Build financial products into your app',
            icon: 'Cpu'
          }
        ]
      }
    ]
  },
  {
    id: 'developers',
    label: 'Developers',
    sections: [
      {
        title: 'Developer Tools',
        items: [
          {
            title: 'Documentation',
            desc: 'Guides, quickstarts & client libraries',
            icon: 'BookOpen'
          },
          {
            title: 'API Reference',
            desc: 'Full REST and GraphQL API specs',
            icon: 'Terminal'
          },
          {
            title: 'Stripe Apps',
            desc: 'Integrate tools inside Dashboard',
            icon: 'Boxes',
            badge: 'New'
          }
        ]
      }
    ]
  },
  {
    id: 'resources',
    label: 'Resources',
    sections: [
      {
        title: 'Knowledge & Support',
        items: [
          {
            title: 'Guides & Case Studies',
            desc: 'Learn how top businesses scale',
            icon: 'Compass'
          },
          {
            title: 'Customer Stories',
            desc: 'Explore real-world implementations',
            icon: 'Building2'
          },
          {
            title: 'Help Center',
            desc: '24/7 support & answers to FAQs',
            icon: 'HelpCircle'
          }
        ]
      }
    ]
  },
  {
    id: 'pricing',
    label: 'Pricing',
    isDirectLink: true,
    href: '#pricing'
  }
];
