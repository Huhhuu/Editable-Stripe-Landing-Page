/* ==========================================================================
   SECTION 5: ENTERPRISE REINVENTION COMPONENT
   ========================================================================== */

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

import amazonCard from '../../assets/images/section5/amazon-card.png';
import bmwCard from '../../assets/images/section5/bmw-card.png';
import maerskCard from '../../assets/images/section5/maersk-card.png';
import twilioCard from '../../assets/images/section5/twilio-card.png';

import amazonLogo from '../../assets/icons/AmazonLogo.svg';
import bmwLogo from '../../assets/icons/BmwLogo.svg';
import maerskLogo from '../../assets/icons/maersk.svg';
import twilioLogo from '../../assets/icons/twilio.svg';

import amazonSec5Logo from '../../assets/icons/amazon_sec5logo.svg';
import bmwSec5Logo from '../../assets/icons/bmw_sec5logo.svg';
import lucideDocIcon from '../../assets/icons/lucide.svg';

import paymentsIcon from '../../assets/images/section3/payments.svg';
import connectIcon from '../../assets/images/section3/connect.svg';
import billingIcon from '../../assets/images/section3/billing.svg';

import './Section5.css';

const ENTERPRISE_CASES = [
  {
    id: 'bmw',
    name: 'BMW',
    logo: bmwLogo,
    cardLogo: bmwSec5Logo,
    accentColor: '#0066B1',
    cardImage: bmwCard,
    headline: 'Learn why BMW chose Stripe to power ecommerce and payments',
    stats: [
      {
        value: 'Millions',
        label: 'BMW owners using ConnectedDrive Store'
      },
      {
        value: '350+',
        label: 'US dealerships'
      }
    ],
    products: [
      { name: 'Payments', icon: paymentsIcon },
      { name: 'Connect', icon: connectIcon }
    ]
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
      {
        value: '5+',
        label: 'Amazon businesses on Stripe including Prime, Audible, and Amazon Pay.'
      },
      {
        value: '50+',
        label: 'Payment methods available on Stripe'
      }
    ],
    products: [
      { name: 'Payments', icon: paymentsIcon },
      { name: 'Connect', icon: connectIcon }
    ]
  },
  {
    id: 'maersk',
    name: 'Maersk',
    logo: maerskLogo,
    cardLogo: maerskLogo,
    accentColor: '#42B0D5',
    cardImage: maerskCard,
    headline: 'See how Maersk tapped into new technology to make it easier to ship around the world',
    stats: [
      {
        value: '130',
        label: 'Countries in logistics network'
      },
      {
        value: '$10+',
        label: 'Billion worth of goods moved around the world each year'
      }
    ],
    products: [
      { name: 'Payments', icon: paymentsIcon },
      { name: 'Connect', icon: connectIcon }
    ]
  },
  {
    id: 'twilio',
    name: 'Twilio',
    logo: twilioLogo,
    cardLogo: twilioLogo,
    accentColor: '#C54647',
    cardImage: twilioCard,
    headline: 'See how Twilio scaled global recurring billing with Stripe',
    stats: [
      {
        value: '180+',
        label: 'Countries reached with local payment options'
      },
      {
        value: '99.999%',
        label: 'API uptime ensuring continuous communications'
      }
    ],
    products: [
      { name: 'Payments', icon: paymentsIcon },
      { name: 'Billing', icon: billingIcon }
    ]
  }
];

function Section5() {
  const [activeIndex, setActiveIndex] = useState(1);
  const activeCase = ENTERPRISE_CASES[activeIndex];

  return (
    <section className="section5" id="section-5">
      <div className="section5_container">
        <div className="section5_header">
          <span className="section5_badge">Enterprise reinvention</span>
          <h2 className="section5_title">Bring agility to your enterprise</h2>
          <p className="section5_desc">
            You can use Stripe not only to accept payments but also to quickly
            support new markets, upgrade existing systems and tools, go
            direct-to-consumer, and engage customers with subscriptions and
            marketplaces. Get expert integration guidance from our{' '}
            <a href="#services" className="section5_link">
              professional services team
            </a>{' '}
            and{' '}
            <a href="#partners" className="section5_link">
              certified partners
            </a>{' '}
            so you can see value with Stripe faster.
          </p>

          <a href="#contact-sales" className="section5_cta-btn">
            <span>Contact sales</span>
            <ChevronRight size={15} />
          </a>
        </div>

        <div className="section5_showcase">
          <div className="section5_showcase-left">
            {activeCase.stats.map((stat, idx) => (
              <div key={idx} className="section5_stat-block">
                <div className="section5_stat-bar" />
                <div className="section5_stat-body">
                  <span className="section5_stat-value">{stat.value}</span>
                  <p className="section5_stat-label">{stat.label}</p>
                </div>
              </div>
            ))}

            <div className="section5_products-block">
              <div className="section5_stat-bar" />
              <div className="section5_stat-body">
                <h4 className="section5_products-title">Products used</h4>
                <div className="section5_products-list">
                  {activeCase.products.map((prod, pIdx) => (
                    <div key={pIdx} className="section5_product-item">
                      <img
                        src={prod.icon}
                        alt=""
                        className="section5_product-icon"
                      />
                      <span className="section5_product-name">{prod.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="section5_showcase-right">
            <article
              className="section5_card"
              style={{
                '--card-accent': activeCase.accentColor
              }}
            >
              <div className="section5_card-bg-wrapper">
                <img
                  src={activeCase.cardImage}
                  alt={activeCase.name}
                  className="section5_card-bg-img"
                />
                <div className="section5_card-overlay" />
              </div>

              <div className="section5_card-top">
                <img
                  src={activeCase.cardLogo || activeCase.logo}
                  alt={activeCase.name}
                  className={`section5_card-logo ${
                    activeCase.id === 'maersk' || activeCase.id === 'twilio'
                      ? 'section5_card-logo--invert'
                      : ''
                  }`}
                />
                <div className="section5_card-doc-icon" aria-hidden="true">
                  <img
                    src={lucideDocIcon}
                    alt=""
                    className="section5_card-doc-img"
                  />
                </div>
              </div>

              <div className="section5_card-bottom">
                <h3 className="section5_card-headline">{activeCase.headline}</h3>
              </div>
            </article>

            <div className="section5_pagination" aria-label="Enterprise Case Studies Navigation">
              {ENTERPRISE_CASES.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  className={`section5_dot ${
                    idx === activeIndex ? 'section5_dot--active' : ''
                  }`}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Select ${item.name} case study`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="section5_tabs-divider" aria-hidden="true">
          {ENTERPRISE_CASES.map((item, idx) => (
            <div
              key={item.id}
              className={`section5_tab-line ${
                idx === activeIndex ? 'section5_tab-line--active' : ''
              }`}
              style={{
                '--tab-accent': item.accentColor
              }}
            />
          ))}
        </div>

        <div className="section5_tabs-row">
          {ENTERPRISE_CASES.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              className={`section5_tab-btn ${
                idx === activeIndex ? 'section5_tab-btn--active' : ''
              }`}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Switch to ${item.name}`}
            >
              <img
                src={item.logo}
                alt={item.name}
                className="section5_tab-logo"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section5;
