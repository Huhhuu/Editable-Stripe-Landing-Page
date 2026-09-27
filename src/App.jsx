import { ChevronRight, ChevronDown } from 'lucide-react';
import { Header } from './layouts/Header/Header';
import Section2 from './components/Section2/Section2';
import Section3 from './components/Section3/Section3';
import Section4 from './components/Section4/Section4';
import Section5 from './components/Section5/Section5';
import Section6 from './components/Section6/Section6';
import Section7 from './components/Section7/Section7';
import Section8 from './components/Section8/Section8';
import Section9 from './components/Section9/Section9';
import Footer from './components/Footer/Footer';
import heroBackground from './assets/images/background1.png';
import issue001 from './assets/images/issue001.svg';
import rocketRides from './assets/images/rocketrides.svg';
import './App.css';

function App() {
  return (
    <div className="app-layout">
      <Header />

      <div className="stripe-container">
        <section className="stripe-section stripe-section-1" id="section-1">
          <div className="section-1_bg-wrapper">
            <img
              src={heroBackground}
              alt="Stripe colorful gradient canvas"
              className="section-1_bg-img"
            />
          </div>

          <div className="container section-1_content-wrapper">
            <div className="section-1_left">
              <h1 className="section-1_title">
                <span className="section-1_title-line">Financial</span>
                <span className="section-1_title-line">infrastructure</span>
                <span className="section-1_title-line">for the internet</span>
              </h1>
              <p className="section-1_desc">
                Millions of companies of all sizes use Stripe online and in person to
                accept payments, send payouts, automate financial processes, and
                ultimately grow revenue.
              </p>
              <div className="section-1_actions">
                <a href="#start-now" className="btn-hero-primary">
                  <span>Start now</span>
                  <ChevronRight size={15} />
                </a>
                <a href="#contact-sales" className="btn-hero-secondary">
                  <span>Contact sales</span>
                  <ChevronRight size={15} />
                </a>
              </div>
            </div>

            <div className="section-1_right">
              <div className="checkout-phone-card">
                <div className="checkout-phone-header">
                  <div className="checkout-phone-badge">
                    <img
                      src={issue001}
                      alt="Issue 001"
                      className="checkout-badge-img"
                    />
                  </div>
                  <h4 className="checkout-product-title">Abstraction Magazine</h4>
                  <p className="checkout-product-price">$19 per month</p>
                </div>

                <button className="checkout-applepay-btn" type="button">
                  <svg className="checkout-apple-svg" viewBox="0 0 170 170" width="14" height="14" fill="currentColor">
                    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.69-7.75-11.96-14.13-6.42-9.67-11.49-20.73-15.19-33.19-3.71-12.46-5.57-23.71-5.57-33.75 0-14.36 3.6-26.04 10.8-35.01 7.2-8.98 16.36-13.54 27.48-13.7 4.58 0 9.77 1.25 15.57 3.75 5.8 2.5 9.74 3.75 11.81 3.75 1.63 0 5.49-1.25 11.59-3.75 6.1-2.5 11.37-3.64 15.82-3.43 12.3.65 22.33 5.37 30.1 14.15-10.9 6.64-16.23 15.7-16 27.18.23 9.04 3.66 16.64 10.29 22.81 6.63 6.17 14.54 9.68 23.73 10.54-2.18 6.54-4.8 13.06-7.88 19.57zM119.22 33.64c0-7.39 2.68-14.28 8.04-20.66 5.36-6.38 12.01-10.42 19.95-12.13.22 1.3.33 2.5.33 3.59 0 7.39-2.82 14.4-8.47 21.03-5.65 6.63-12.28 10.46-19.85 11.5-.66-1.09-.99-2.2-.99-3.33z" />
                  </svg>
                  <span>Pay</span>
                </button>

                <div className="checkout-divider">
                  <span className="checkout-divider-line" />
                  <span className="checkout-divider-text">Or pay with card</span>
                  <span className="checkout-divider-line" />
                </div>

                <div className="checkout-form">
                  <div className="checkout-form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      readOnly
                      className="checkout-input"
                    />
                  </div>

                  <div className="checkout-form-group">
                    <label>Card Information</label>
                    <div className="checkout-card-input-row">
                      <input
                        type="text"
                        placeholder="Number"
                        readOnly
                        className="checkout-input"
                      />
                      <span className="checkout-visa-tag">VISA</span>
                    </div>
                    <div className="checkout-card-split-row">
                      <input
                        type="text"
                        placeholder="MM / YY"
                        readOnly
                        className="checkout-input"
                      />
                      <input
                        type="text"
                        placeholder="CVC"
                        readOnly
                        className="checkout-input"
                      />
                    </div>
                  </div>

                  <div className="checkout-form-group">
                    <label>Country or region</label>
                    <div className="checkout-select-row">
                      <span>United States</span>
                      <ChevronDown size={16} />
                    </div>
                    <input
                      type="text"
                      placeholder="ZIP"
                      readOnly
                      className="checkout-input mt-2"
                    />
                  </div>

                  <button className="checkout-submit-btn" type="button">
                    Pay
                  </button>
                </div>
              </div>

              <img
                src={rocketRides}
                alt="Rocket Rides Dashboard"
                className="dashboard-preview-img"
              />
            </div>
          </div>
        </section>

        <Section2 />

        <Section3 />

        <Section4 />

        <Section5 />

        <Section6 />

        <Section7 />

        <Section8 />

        <Section9 />

        <Footer />
      </div>
    </div>
  );
}

export default App;
