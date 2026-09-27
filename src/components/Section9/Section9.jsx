import { ChevronRight } from 'lucide-react';
import tagPriceIcon from '../../assets/icons/tagprice_sec9.svg';
import paperIcon from '../../assets/icons/papericon_sec9.svg';
import './Section9.css';

/* ===========================
   COMPONENT: Section9
=========================== */

export function Section9() {
  return (
    <section className="section9" id="section-9">
      <div className="section9_container">
        <div className="section9_grid-lines" aria-hidden="true">
          <div className="section9_grid-line" />
          <div className="section9_grid-line" />
          <div className="section9_grid-line" />
          <div className="section9_grid-line" />
          <div className="section9_grid-line" />
        </div>

        <div className="section9_content">
          <div className="section9_main">
            <h2 className="section9_title">Ready to get started?</h2>
            <p className="section9_desc">
              Explore{' '}
              <a href="#payments" className="section9_link">
                Stripe Payments
              </a>
              , or create an account instantly and start accepting payments. You can
              also contact us to design a custom package for your business.
            </p>
            <div className="section9_actions">
              <a href="#start-now" className="section9_btn">
                <span>Start now</span>
                <ChevronRight size={15} />
              </a>
              <a href="#contact-sales" className="section9_secondary-link">
                <span>Contact sales</span>
                <ChevronRight size={15} />
              </a>
            </div>
          </div>

          <div className="section9_cards">
            <div className="section9_card">
              <div className="section9_card-icon-wrapper">
                <img
                  src={tagPriceIcon}
                  alt="Pricing tags"
                  className="section9_card-icon"
                />
              </div>
              <div className="section9_card-content">
                <div className="section9_card-bar" />
                <div className="section9_card-body">
                  <h3 className="section9_card-title">Always know what you pay</h3>
                  <p className="section9_card-desc">
                    Integrated per-transaction pricing with no hidden fees.
                  </p>
                  <a href="#pricing-details" className="section9_card-link">
                    <span>Pricing details</span>
                    <ChevronRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            <div className="section9_card">
              <div className="section9_card-icon-wrapper">
                <img
                  src={paperIcon}
                  alt="Integration code apps"
                  className="section9_card-icon"
                />
              </div>
              <div className="section9_card-content">
                <div className="section9_card-bar" />
                <div className="section9_card-body">
                  <h3 className="section9_card-title">Start your integration</h3>
                  <p className="section9_card-desc">
                    Get up and running with Stripe in as little as 10 minutes.
                  </p>
                  <a href="#api-reference" className="section9_card-link">
                    <span>API reference</span>
                    <ChevronRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section9;
