import amazonLogo from '../assets/icons/AmazonLogo.svg';
import salesforceLogo from '../assets/icons/SalesforceLogo.svg';
import googleLogo from '../assets/icons/GoogleLogo.svg';
import urbnLogo from '../assets/icons/UrbnLogo.svg';
import shopifyLogo from '../assets/icons/ShopifyLogo.svg';
import whatsappLogo from '../assets/icons/WhatsappLogo.svg';
import bmwLogo from '../assets/icons/BmwLogo.svg';
import marriottLogo from '../assets/icons/MarriottLogo.svg';
import maerskLogo from '../assets/icons/maersk.svg';
import twilioLogo from '../assets/icons/twilio.svg';
import amazonSec5Logo from '../assets/icons/amazon_sec5logo.svg';
import bmwSec5Logo from '../assets/icons/bmw_sec5logo.svg';
import atlasIcon from '../assets/icons/atlas.svg';
import checkoutIcon from '../assets/icons/checkout.svg';
import paymentLinksIcon from '../assets/icons/paymentslinks.svg';
import invoicingIcon from '../assets/icons/invoicing.svg';
import useStripeIcon from '../assets/icons/usestripeicon.svg';
import tryNoCodeIcon from '../assets/icons/trynocodeicon.svg';
import explorePrebuiltIcon from '../assets/icons/exploreprebuilticon.svg';
import buildOnStripeIcon from '../assets/icons/buildonstripeicon.svg';
import tagPriceIcon from '../assets/icons/tagprice_sec9.svg';
import paperIcon from '../assets/icons/papericon_sec9.svg';

import iconPayments from '../assets/images/section3/payments.svg';
import iconBilling from '../assets/images/section3/billing.svg';
import iconConnect from '../assets/images/section3/connect.svg';
import iconBuilding from '../assets/images/section3/building.svg';
import imgModularDesktop from '../assets/images/section3/modularnodes-desktop.svg';
import imgModularTablet from '../assets/images/section3/modularnodes-tablet.svg';
import imgModularMobile from '../assets/images/section3/modularnodes-mobile.svg';
import imgWoodChair from '../assets/images/section3/woodchair.svg';
import imgQuantumCard from '../assets/images/section3/quantumcard.svg';
import imgConnectFlow from '../assets/images/section3/connectflow.svg';
import imgIssuingCards from '../assets/images/section3/issuingcards.svg';

import globe390 from '../assets/images/section4/globe-390.png';
import globe768 from '../assets/images/section4/globe-768.png';
import globe1024 from '../assets/images/section4/globe-1024.png';
import globe1440 from '../assets/images/section4/globe-1440.png';
import globe1920 from '../assets/images/section4/globe-1920.png';

import amazonCard from '../assets/images/section5/amazon-card.png';
import bmwCard from '../assets/images/section5/bmw-card.png';
import maerskCard from '../assets/images/section5/maersk-card.png';
import twilioCard from '../assets/images/section5/twilio-card.png';

import atlasPic from '../assets/images/section6/atlas_pic.png';
import checkoutPic from '../assets/images/section6/checkout_pic.png';
import paymentPic from '../assets/images/section6/payment_pic.png';
import invoicingPic from '../assets/images/section6/invoicing_pic.png';

import box1Pic from '../assets/images/section8/s8_box1.svg';
import box2Pic from '../assets/images/section8/s8_box2.svg';
import box3Pic from '../assets/images/section8/s8_box3.svg';

/* ===========================
   SECTION: Partner Logos
=========================== */

export const PARTNER_LOGOS = [
  { name: 'Amazon', src: amazonLogo },
  { name: 'Salesforce', src: salesforceLogo },
  { name: 'Google', src: googleLogo },
  { name: 'URBN', src: urbnLogo },
  { name: 'Shopify', src: shopifyLogo },
  { name: 'WhatsApp', src: whatsappLogo },
  { name: 'BMW', src: bmwLogo },
  { name: 'Marriott', src: marriottLogo },
];

/* ===========================
   SECTION: Product Showcases
=========================== */

export const MODULAR_HERO_IMAGES = {
  mobile: imgModularMobile,
  tablet: imgModularTablet,
  desktop: imgModularDesktop,
};

export const PRODUCT_SHOWCASES = [
  {
    id: 'payments',
    icon: iconPayments,
    badgeText: 'Payments',
    title: 'Accept and optimize payments, globally',
    desc: 'Increase authorization rates, optimize your checkout conversion, and offer local payment methods in every market.',
    ctaText: 'Start with Payments',
    ctaLink: '#start-payments',
    seeAlsoList: [
      { linkText: 'Tax', desc: 'for automating sales tax and VAT', href: '#tax' },
      { linkText: 'Radar', desc: 'for fraud prevention and management', href: '#radar' },
      { linkText: 'Terminal', desc: 'for custom in-person payments', href: '#terminal' },
    ],
    mockupImg: imgWoodChair,
    mockupAlt: 'Mobile phone checkout mockup for Wood Chair',
    mockupModifier: 'payments',
  },
  {
    id: 'billing',
    icon: iconBilling,
    badgeText: 'Billing',
    title: 'Capture recurring revenue',
    desc: 'Support recurring business models, minimize churn, and automate finance operations.',
    ctaText: 'Start with Billing',
    ctaLink: '#start-billing',
    seeAlsoList: [
      { linkText: 'Invoicing', desc: 'for invoice creation, collection, and tracking', href: '#invoicing' },
      { linkText: 'Revenue Recognition', desc: 'for streamlined accrual accounting', href: '#revenue-recognition' },
      { linkText: 'Sigma', desc: 'for custom revenue reports', href: '#sigma' },
    ],
    mockupImg: imgQuantumCard,
    mockupAlt: 'Quantum SaaS pricing table card',
    mockupModifier: 'billing',
  },
  {
    id: 'connect',
    icon: iconConnect,
    badgeText: 'Connect',
    title: 'Set up multiparty payments and payouts',
    desc: 'Integrate payments into your platform or marketplace for end-to-end payments experiences.',
    ctaText: 'Start with Connect',
    ctaLink: '#start-connect',
    seeAlsoList: [
      { linkText: 'Terminal', desc: 'for custom in-person payments', href: '#terminal' },
      { linkText: 'Instant Payouts', desc: 'for fast payments to users', href: '#instant-payouts' },
      { linkText: 'Payment Elements', desc: 'for customizable UIs', href: '#payment-elements' },
    ],
    mockupImg: imgConnectFlow,
    mockupAlt: 'Marketplace payments and payouts flow diagram',
    mockupModifier: 'connect',
  },
  {
    id: 'issuing',
    icon: iconBuilding,
    badgeText: 'Issuing',
    title: 'Build a fintech offering with banking-as-a-service',
    desc: 'Launch, manage, and scale a commercial card program without any setup fees.',
    ctaText: 'Start with Issuing',
    ctaLink: '#start-issuing',
    seeAlsoList: [
      { linkText: 'Treasury', desc: 'for financial accounts', href: '#treasury' },
      { linkText: 'Capital', desc: 'for offering fast, flexible financing', href: '#capital' },
      { linkText: 'Connect', desc: 'for powering platform payments', href: '#connect' },
    ],
    mockupImg: imgIssuingCards,
    mockupAlt: 'Commercial cards program stack',
    mockupModifier: 'issuing',
  },
];

/* ===========================
   SECTION: Global Scale
=========================== */

export const GLOBE_SOURCES = [
  { media: '(max-width: 576px)', srcSet: globe390 },
  { media: '(max-width: 896px)', srcSet: globe768 },
  { media: '(max-width: 1199px)', srcSet: globe1024 },
  { media: '(max-width: 1599px)', srcSet: globe1440 },
];

export const GLOBE_FALLBACK = globe1920;

export const GLOBAL_STATS = [
  {
    id: 'requests',
    value: '250M+',
    label: 'API requests per day, peaking at 13,000 requests a second.',
  },
  {
    id: 'uptime',
    value: '99.999%',
    label: 'historical uptime for ',
    linkText: 'Stripe services.',
    linkHref: '#services',
  },
  {
    id: 'adults',
    value: '90%',
    label: 'of U.S. adults have bought from businesses using Stripe.',
  },
  {
    id: 'currencies',
    value: '135+',
    label: 'currencies and payment methods supported.',
  },
];

/* ===========================
   SECTION: Enterprise Cases
=========================== */

export const ENTERPRISE_CASES = [
  {
    id: 'bmw',
    name: 'BMW',
    logo: bmwLogo,
    cardLogo: bmwSec5Logo,
    accentColor: '#0066B1',
    cardImage: bmwCard,
    headline: 'Learn why BMW chose Stripe to power ecommerce and payments',
    stats: [
      { value: 'Millions', label: 'BMW owners using ConnectedDrive Store' },
      { value: '350+', label: 'US dealerships' },
    ],
    products: [
      { name: 'Payments', icon: iconPayments },
      { name: 'Connect', icon: iconConnect },
    ],
  },
  {
    id: 'amazon',
    name: 'Amazon',
    logo: amazonLogo,
    cardLogo: amazonSec5Logo,
    accentColor: '#EFA82E',
    cardImage: amazonCard,
    headline: 'See how Amazon simplified cross-border payments with Stripe',
    stats: [
      { value: '5+', label: 'Amazon businesses on Stripe including Prime, Audible, and Amazon Pay.' },
      { value: '50+', label: 'Payment methods available on Stripe' },
    ],
    products: [
      { name: 'Payments', icon: iconPayments },
      { name: 'Connect', icon: iconConnect },
    ],
  },
  {
    id: 'maersk',
    name: 'Maersk',
    logo: maerskLogo,
    cardLogo: maerskLogo,
    invertCardLogo: true,
    accentColor: '#42B0D5',
    cardImage: maerskCard,
    headline: 'See how Maersk tapped into new technology to make it easier to ship around the world',
    stats: [
      { value: '130', label: 'Countries in logistics network' },
      { value: '$10+', label: 'Billion worth of goods moved around the world each year' },
    ],
    products: [
      { name: 'Payments', icon: iconPayments },
      { name: 'Connect', icon: iconConnect },
    ],
  },
  {
    id: 'twilio',
    name: 'Twilio',
    logo: twilioLogo,
    cardLogo: twilioLogo,
    invertCardLogo: true,
    accentColor: '#C54647',
    cardImage: twilioCard,
    headline: 'See how Twilio scaled global recurring billing with Stripe',
    stats: [
      { value: '180+', label: 'Countries reached with local payment options' },
      { value: '99.999%', label: 'API uptime ensuring continuous communications' },
    ],
    products: [
      { name: 'Payments', icon: iconPayments },
      { name: 'Billing', icon: iconBilling },
    ],
  },
];

/* ===========================
   SECTION: Growth & No-Code Cards
=========================== */

export const GROWTH_COLUMNS = [
  {
    id: 'left',
    modifier: 'left',
    cards: [
      {
        id: 'atlas',
        icon: atlasIcon,
        badge: 'Atlas',
        image: atlasPic,
        title: 'Incorporate your company',
        desc: 'Form a legal entity, issue stock, and start accepting payments.',
      },
      {
        id: 'checkout',
        icon: checkoutIcon,
        badge: 'Checkout',
        image: checkoutPic,
        title: 'Sell to consumers',
        desc: "Launch a B2C business with a prebuilt payment page that's optimized for conversion.",
      },
    ],
  },
  {
    id: 'right',
    modifier: 'right',
    cards: [
      {
        id: 'payment-links',
        icon: paymentLinksIcon,
        badge: 'Payment Links',
        image: paymentPic,
        title: 'Validate your idea',
        desc: 'Test your product idea by launching payments with little to no code.',
      },
      {
        id: 'invoicing',
        icon: invoicingIcon,
        badge: 'Invoicing',
        image: invoicingPic,
        title: 'Sell to businesses',
        desc: 'Launch a B2B business and collect one-time or recurring payments from customers.',
      },
    ],
  },
];

export const DEVELOPER_FEATURES = [
  {
    id: 'stack',
    icon: useStripeIcon,
    title: 'Use Stripe with your stack',
    desc: 'We offer client and server libraries in everything from React and PHP to .NET and iOS.',
    linkText: 'See libraries',
    linkHref: '#libraries',
  },
  {
    id: 'no-code',
    icon: tryNoCodeIcon,
    title: 'Try no-code options',
    desc: 'Customize and deploy payments interfaces directly from the Stripe Dashboard.',
    linkText: 'Explore no-code',
    linkHref: '#no-code',
  },
  {
    id: 'integrations',
    icon: explorePrebuiltIcon,
    title: 'Explore prebuilt integrations',
    desc: 'Connect Stripe to over a hundred tools including Adobe, Salesforce, and Xero.',
    linkText: 'Browse App Marketplace',
    linkHref: '#marketplace',
  },
  {
    id: 'apps',
    icon: buildOnStripeIcon,
    title: 'Build on Stripe Apps',
    desc: 'Create an app just for your team or for the millions of businesses on Stripe.',
    linkText: 'Learn about Apps',
    linkHref: '#apps',
  },
];

export const NO_CODE_CARDS = [
  {
    id: 'pre-integrated',
    image: box1Pic,
    title: 'Use a pre-integrated platform',
    segments: [
      { text: 'Explore our directory to find out-of-the-box solutions that connect with Stripe, such as ' },
      { linkText: 'Squarespace', href: '#squarespace' },
      { text: ' and ' },
      { linkText: 'Lightspeed', href: '#lightspeed' },
      { text: '.' },
    ],
  },
  {
    id: 'certified-experts',
    image: box2Pic,
    title: 'Build with Stripe-certified experts',
    desc: 'Work with a Stripe consulting partner that can integrate and deploy Stripe solutions for you.',
  },
  {
    id: 'no-code-products',
    image: box3Pic,
    title: 'Try our no-code products',
    segments: [
      { text: 'Create an ' },
      { linkText: 'invoice', href: '#invoice' },
      { text: ', accept in-person payment with your phone, or share a ' },
      { linkText: 'payment link', href: '#payment-link' },
      { text: ' directly from your Dashboard to start generating revenue in minutes—no code required.' },
    ],
  },
];

export const READY_CARDS = [
  {
    id: 'pricing',
    icon: tagPriceIcon,
    iconAlt: 'Pricing tags',
    title: 'Always know what you pay',
    desc: 'Integrated per-transaction pricing with no hidden fees.',
    linkText: 'Pricing details',
    linkHref: '#pricing-details',
  },
  {
    id: 'integration',
    icon: paperIcon,
    iconAlt: 'Integration code apps',
    title: 'Start your integration',
    desc: 'Get up and running with Stripe in as little as 10 minutes.',
    linkText: 'API reference',
    linkHref: '#api-reference',
  },
];

/* ===========================
   SECTION: Footer Columns
=========================== */

export const FOOTER_COLUMNS = [
  {
    id: 'products',
    modifier: 'products',
    groups: [
      {
        title: 'Products & Pricing',
        links: [
          { label: 'Pricing', href: '#pricing' },
          { label: 'Atlas', href: '#atlas' },
          { label: 'Billing', href: '#billing' },
          { label: 'Capital', href: '#capital' },
          { label: 'Checkout', href: '#checkout' },
          { label: 'Climate', href: '#climate' },
          { label: 'Connect', href: '#connect' },
          { label: 'Data Pipeline', href: '#data-pipeline' },
          { label: 'Elements', href: '#elements' },
          { label: 'Financial Connections', href: '#financial-connections' },
          { label: 'Identity', href: '#identity' },
          { label: 'Invoicing', href: '#invoicing' },
          { label: 'Issuing', href: '#issuing' },
          { label: 'Link', href: '#link' },
          { label: 'Payments', href: '#payments' },
          { label: 'Payment Links', href: '#payment-links' },
          { label: 'Payouts', href: '#payouts' },
          { label: 'Radar', href: '#radar' },
          { label: 'Revenue Recognition', href: '#revenue-recognition' },
          { label: 'Sigma', href: '#sigma' },
          { label: 'Tax', href: '#tax' },
          { label: 'Terminal', href: '#terminal' },
          { label: 'Treasury', href: '#treasury' },
        ],
      },
    ],
  },
  {
    id: 'solutions',
    modifier: 'solutions',
    groups: [
      {
        title: 'Solutions',
        links: [
          { label: 'Startups', href: '#startups' },
          { label: 'Enterprises', href: '#enterprises' },
          { label: 'SaaS', href: '#saas' },
          { label: 'Platforms', href: '#platforms' },
          { label: 'Ecommerce', href: '#ecommerce' },
          { label: 'Marketplaces', href: '#marketplaces' },
          { label: 'Crypto', href: '#crypto' },
          { label: 'Creator economy', href: '#creator-economy' },
          { label: 'Embedded finance', href: '#embedded-finance' },
          { label: 'Global businesses', href: '#global-businesses' },
          { label: 'Finance automation', href: '#finance-automation' },
        ],
      },
      {
        title: 'Integrations & Custom Solutions',
        links: [
          { label: 'Stripe App Marketplace', href: '#marketplace' },
          { label: 'Partner ecosystem', href: '#partners' },
          { label: 'Professional services', href: '#professional-services' },
        ],
      },
      {
        title: 'Developers',
        links: [
          { label: 'Documentation', href: '#docs' },
          { label: 'API reference', href: '#api-ref' },
          { label: 'API status', href: '#status' },
          { label: 'API changelog', href: '#changelog' },
          { label: 'Stripe Apps', href: '#stripe-apps' },
        ],
      },
    ],
  },
  {
    id: 'resources',
    modifier: 'resources',
    groups: [
      {
        title: 'Resources',
        links: [
          { label: 'Guides', href: '#guides' },
          { label: 'Customer stories', href: '#customer-stories' },
          { label: 'Blog', href: '#blog' },
          { label: 'Annual conference', href: '#conference' },
          { label: 'Privacy & terms', href: '#privacy-terms' },
          { label: 'Prohibited & restricted businesses', href: '#prohibited' },
          { label: 'Licenses', href: '#licenses' },
          { label: 'Sitemap', href: '#sitemap' },
          { label: 'Cookie settings', href: '#cookie-settings' },
          { label: 'Your privacy choices', href: '#privacy-choices' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'Jobs', href: '#jobs' },
          { label: 'Newsroom', href: '#newsroom' },
          { label: 'Stripe Press', href: '#stripe-press' },
        ],
      },
      {
        title: 'Support',
        links: [
          { label: 'Contact sales', href: '#contact-sales' },
          { label: 'Support center', href: '#support-center' },
          { label: 'Support plans', href: '#support-plans' },
        ],
      },
    ],
  },
];
