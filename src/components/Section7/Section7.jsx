import { ChevronRight } from 'lucide-react';
import useStripeIcon from '../../assets/icons/usestripeicon.svg';
import tryNoCodeIcon from '../../assets/icons/trynocodeicon.svg';
import explorePrebuiltIcon from '../../assets/icons/exploreprebuilticon.svg';
import buildOnStripeIcon from '../../assets/icons/buildonstripeicon.svg';
import sec7CodeScreen from '../../assets/images/section7/sec7_codescreen.svg';
import './Section7.css';

const DEVELOPER_FEATURES = [
  {
    id: 'stack',
    icon: useStripeIcon,
    title: 'Use Stripe with your stack',
    desc: 'We offer client and server libraries in everything from React and PHP to .NET and iOS.',
    linkText: 'See libraries',
    linkHref: '#libraries'
  },
  {
    id: 'no-code',
    icon: tryNoCodeIcon,
    title: 'Try no-code options',
    desc: 'Customize and deploy payments interfaces directly from the Stripe Dashboard.',
    linkText: 'Explore no-code',
    linkHref: '#no-code'
  },
  {
    id: 'integrations',
    icon: explorePrebuiltIcon,
    title: 'Explore prebuilt integrations',
    desc: 'Connect Stripe to over a hundred tools including Adobe, Salesforce, and Xero.',
    linkText: 'Browse App Marketplace',
    linkHref: '#marketplace'
  },
  {
    id: 'apps',
    icon: buildOnStripeIcon,
    title: 'Build on Stripe Apps',
    desc: 'Create an app just for your team or for the millions of businesses on Stripe.',
    linkText: 'Learn about Apps',
    linkHref: '#apps'
  }
];

function Section7() {
  return (
    <section className="section7" id="section-7">
      <div className="section7_slant-bg" aria-hidden="true">
        <div className="section7_slant-dark" />
      </div>

      <div className="section7_grid-lines" aria-hidden="true">
        <div className="section7_grid-line section7_grid-line--1" />
        <div className="section7_grid-line section7_grid-line--2" />
        <div className="section7_grid-line section7_grid-line--3" />
        <div className="section7_grid-line section7_grid-line--4" />
        <div className="section7_grid-line section7_grid-line--5" />
      </div>

      <div className="section7_container">
        <div className="section7_top">
          <div className="section7_header">
            <span className="section7_badge">Designed for developers</span>
            <h2 className="section7_title">
              Ship more quickly with powerful and easy-to-use APIs
            </h2>
            <p className="section7_desc">
              Save engineering time with unified payments functionality. We obsess over
              the maze of gateways, payments rails, and financial institutions that make up
              the global economic landscape so that your teams can build what you need on one
              platform.
            </p>
            <div className="section7_actions">
              <a href="#read-the-docs" className="section7_btn">
                <span>Read the docs</span>
                <ChevronRight size={14} />
              </a>
            </div>
          </div>

          <div className="section7_code-wrapper">
            <img
              src={sec7CodeScreen}
              alt="Stripe API code snippet and terminal preview"
              className="section7_code-img"
            />
          </div>
        </div>

        <div className="section7_features">
          {DEVELOPER_FEATURES.map((feature) => (
            <div key={feature.id} className="section7_feature-card">
              <div className="section7_feature-icon-wrap">
                <img
                  src={feature.icon}
                  alt=""
                  className="section7_feature-icon"
                />
              </div>
              <h3 className="section7_feature-title">
                <span className="section7_feature-line" aria-hidden="true" />
                {feature.title}
              </h3>
              <p className="section7_feature-desc">{feature.desc}</p>
              <a href={feature.linkHref} className="section7_feature-link">
                <span>{feature.linkText}</span>
                <ChevronRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section7;
