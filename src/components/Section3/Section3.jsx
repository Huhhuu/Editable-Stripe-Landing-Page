import { ChevronRight } from 'lucide-react';
import iconPayments from '../../assets/images/section3/payments.svg';
import iconBilling from '../../assets/images/section3/billing.svg';
import iconConnect from '../../assets/images/section3/connect.svg';
import iconBuilding from '../../assets/images/section3/building.svg';
import imgModularDesktop from '../../assets/images/section3/modularnodes-desktop.svg';
import imgModularTablet from '../../assets/images/section3/modularnodes-tablet.svg';
import imgModularMobile from '../../assets/images/section3/modularnodes-mobile.svg';
import imgWoodChair from '../../assets/images/section3/woodchair.svg';
import imgQuantumCard from '../../assets/images/section3/quantumcard.svg';
import imgConnectFlow from '../../assets/images/section3/connectflow.svg';
import imgIssuingCards from '../../assets/images/section3/issuingcards.svg';
import './Section3.css';

/* ===========================
   STATIC DATA: Section 3 Features
=========================== */
const SECTION3_PRODUCTS = [
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
   COMPONENT: Section3
=========================== */
function Section3() {
  return (
    <section className="stripe-section section-3" id="section-3">
      <div className="section-3_container">
        <article className="section-3_row section-3_row--modular">
          <div className="section-3_content">
            <span className="section-3_subtitle">Modular solutions</span>
            <h2 className="section-3_heading-primary">
              A fully integrated suite of financial and payments products
            </h2>
            <p className="section-3_desc">
              Reduce costs, grow revenue, and run your business more efficiently on a fully integrated platform.
              Use Stripe to handle all of your payments-related needs, manage revenue operations, and launch (or invent) new business models.
            </p>
          </div>

          <div className="section-3_mockup section-3_mockup--modular">
            <picture>
              <source media="(max-width: 749px)" srcSet={imgModularMobile} />
              <source media="(max-width: 999px)" srcSet={imgModularTablet} />
              <img
                src={imgModularDesktop}
                alt="Modular financial solutions network diagram and card stack"
                className="section-3_mockup-img section-3_mockup-img--modular"
              />
            </picture>
          </div>
        </article>

        {SECTION3_PRODUCTS.map((product) => (
          <article
            key={product.id}
            className={`section-3_row section-3_row--${product.mockupModifier}`}
          >
            <div className="section-3_content">
              <div className="section-3_badge">
                <img
                  src={product.icon}
                  alt=""
                  className="section-3_badge-icon"
                />
                <span className="section-3_badge-text">{product.badgeText}</span>
              </div>

              <h3 className="section-3_heading-secondary">{product.title}</h3>

              <p className="section-3_desc">{product.desc}</p>

              <a href={product.ctaLink} className="section-3_btn">
                <span>{product.ctaText}</span>
                <ChevronRight size={14} className="section-3_btn-icon" />
              </a>

              <div className="section-3_see-also">
                <h4 className="section-3_see-also-title">See also</h4>
                <ul className="section-3_see-also-list">
                  {product.seeAlsoList.map((item) => (
                    <li key={item.linkText} className="section-3_see-also-item">
                      <a href={item.href} className="section-3_see-also-link">
                        {item.linkText}
                      </a>{' '}
                      <span>{item.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={`section-3_mockup section-3_mockup--${product.mockupModifier}`}>
              <img
                src={product.mockupImg}
                alt={product.mockupAlt}
                className={`section-3_mockup-img section-3_mockup-img--${product.mockupModifier}`}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Section3;
