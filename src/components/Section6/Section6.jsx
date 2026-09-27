import atlasIcon from '../../assets/icons/atlas.svg';
import checkoutIcon from '../../assets/icons/checkout.svg';
import paymentLinksIcon from '../../assets/icons/paymentslinks.svg';
import invoicingIcon from '../../assets/icons/invoicing.svg';

import atlasPic from '../../assets/images/section6/atlas_pic.png';
import checkoutPic from '../../assets/images/section6/checkout_pic.png';
import paymentPic from '../../assets/images/section6/payment_pic.png';
import invoicingPic from '../../assets/images/section6/invoicing_pic.png';

import './Section6.css';

const LEFT_FEATURES = [
  {
    id: 'atlas',
    icon: atlasIcon,
    badge: 'Atlas',
    image: atlasPic,
    title: 'Incorporate your company',
    desc: 'Form a legal entity, issue stock, and start accepting payments.'
  },
  {
    id: 'checkout',
    icon: checkoutIcon,
    badge: 'Checkout',
    image: checkoutPic,
    title: 'Sell to consumers',
    desc: "Launch a B2C business with a prebuilt payment page that's optimized for conversion."
  }
];

const RIGHT_FEATURES = [
  {
    id: 'payment-links',
    icon: paymentLinksIcon,
    badge: 'Payment Links',
    image: paymentPic,
    title: 'Validate your idea',
    desc: 'Test your product idea by launching payments with little to no code.'
  },
  {
    id: 'invoicing',
    icon: invoicingIcon,
    badge: 'Invoicing',
    image: invoicingPic,
    title: 'Sell to businesses',
    desc: 'Launch a B2B business and collect one-time or recurring payments from customers.'
  }
];

function Section6() {
  return (
    <section className="section6" id="section-6">
      <div className="section6_grid-lines" aria-hidden="true">
        <div className="section6_grid-line section6_grid-line--1" />
        <div className="section6_grid-line section6_grid-line--2" />
        <div className="section6_grid-line section6_grid-line--3" />
        <div className="section6_grid-line section6_grid-line--4" />
        <div className="section6_grid-line section6_grid-line--5" />
      </div>

      <div className="section6_container">
        <div className="section6_header">
          <span className="section6_badge">Built for growth</span>
          <h2 className="section6_title">
            Take your startup <br className="section6_title-br--mobile" />farther, faster
          </h2>
          <p className="section6_desc">
            Startups build on Stripe to launch faster, adapt as they grow, and
            automate workflows to do more with less. Build your own API-based
            integration or use our low- to no-code solutions, which are simple
            enough for easy implementation and powerful enough to scale as fast
            and as far as you need.
          </p>
        </div>

        <div className="section6_grid">
          <div className="section6_col section6_col--left">
            {LEFT_FEATURES.map((feature) => (
              <article key={feature.id} className="section6_card">
                <div className="section6_card-image-wrap">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="section6_card-img"
                  />
                </div>
                <div className="section6_card-body">
                  <div className="section6_card-badge">
                    <img
                      src={feature.icon}
                      alt=""
                      className="section6_card-icon"
                    />
                    <span className="section6_card-badge-text">
                      {feature.badge}
                    </span>
                  </div>
                  <h3 className="section6_card-title">{feature.title}</h3>
                  <p className="section6_card-desc">{feature.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="section6_col section6_col--right">
            {RIGHT_FEATURES.map((feature) => (
              <article key={feature.id} className="section6_card">
                <div className="section6_card-image-wrap">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="section6_card-img"
                  />
                </div>
                <div className="section6_card-body">
                  <div className="section6_card-badge">
                    <img
                      src={feature.icon}
                      alt=""
                      className="section6_card-icon"
                    />
                    <span className="section6_card-badge-text">
                      {feature.badge}
                    </span>
                  </div>
                  <h3 className="section6_card-title">{feature.title}</h3>
                  <p className="section6_card-desc">{feature.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section6;
