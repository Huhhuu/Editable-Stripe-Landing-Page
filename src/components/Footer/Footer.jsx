import StripeLogo from '../../assets/icons/StripeLogo';
import './Footer.css';

/* ===========================
   STATIC DATA: Footer Sitemap
=========================== */

const SITEMAP = {
  products: {
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
      { label: 'Treasury', href: '#treasury' }
    ]
  },
  solutions: {
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
      { label: 'Finance automation', href: '#finance-automation' }
    ]
  },
  integrations: {
    title: 'Integrations & Custom Solutions',
    links: [
      { label: 'Stripe App Marketplace', href: '#marketplace' },
      { label: 'Partner ecosystem', href: '#partners' },
      { label: 'Professional services', href: '#professional-services' }
    ]
  },
  developers: {
    title: 'Developers',
    links: [
      { label: 'Documentation', href: '#docs' },
      { label: 'API reference', href: '#api-ref' },
      { label: 'API status', href: '#status' },
      { label: 'API changelog', href: '#changelog' },
      { label: 'Stripe Apps', href: '#stripe-apps' }
    ]
  },
  resources: {
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
      { label: 'Your privacy choices', href: '#privacy-choices' }
    ]
  },
  company: {
    title: 'Company',
    links: [
      { label: 'Jobs', href: '#jobs' },
      { label: 'Newsroom', href: '#newsroom' },
      { label: 'Stripe Press', href: '#stripe-press' }
    ]
  },
  support: {
    title: 'Support',
    links: [
      { label: 'Contact sales', href: '#contact-sales' },
      { label: 'Support center', href: '#support-center' },
      { label: 'Support plans', href: '#support-plans' }
    ]
  }
};

/* ===========================
   COMPONENT: Footer
=========================== */

export function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer_slant-bg" aria-hidden="true">
        <div className="footer_slant-white" />
        <div className="footer_accents-left">
          <span className="footer_bar-purple" />
          <span className="footer_bar-cyan" />
          <span className="footer_bar-blue" />
        </div>
        <div className="footer_accents-right">
          <span className="footer_bar-cyan" />
          <span className="footer_bar-purple" />
          <span className="footer_bar-blue" />
        </div>
      </div>

      <div className="footer_container">
        <div className="footer_grid-lines" aria-hidden="true">
          <div className="footer_line" />
          <div className="footer_line" />
          <div className="footer_line" />
          <div className="footer_line" />
          <div className="footer_line" />
        </div>

        <div className="footer_content">
          <div className="footer_col footer_col_brand">
            <div className="footer_brand-group">
              <a href="#" className="footer_logo-link" aria-label="Stripe Home">
                <StripeLogo width={68} height={33} color="#0A2540" className="footer_logo" />
              </a>

              <button type="button" className="footer_locale-btn" aria-label="Choose country and language">
                <svg
                  className="footer_locale-icon"
                  viewBox="438 397 13 13"
                  width="13"
                  height="13"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M439.54 404.041H443.96V408.471C443.96 409.041 444.72 409.221 444.97 408.711L449.93 398.781C449.978 398.68 449.994 398.567 449.975 398.456C449.956 398.346 449.904 398.245 449.825 398.166C449.746 398.087 449.644 398.034 449.534 398.016C449.424 397.997 449.311 398.012 449.21 398.061L439.3 403.031C438.8 403.281 438.97 404.041 439.54 404.041Z" />
                </svg>
                <span className="footer_locale-text">United States (English)</span>
              </button>
            </div>

            <div className="footer_copyright">
              <p className="footer_copyright-text">© 2024 Stripe, Inc.</p>
            </div>
          </div>

          <div className="footer_col footer_col_products">
            <h4 className="footer_col-title">{SITEMAP.products.title}</h4>
            <ul className="footer_links-list">
              {SITEMAP.products.links.map((link, idx) => (
                <li key={idx} className="footer_links-item">
                  <a href={link.href} className="footer_link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer_col footer_col_solutions">
            <div className="footer_group">
              <h4 className="footer_col-title">{SITEMAP.solutions.title}</h4>
              <ul className="footer_links-list">
                {SITEMAP.solutions.links.map((link, idx) => (
                  <li key={idx} className="footer_links-item">
                    <a href={link.href} className="footer_link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer_group">
              <h4 className="footer_col-title">{SITEMAP.integrations.title}</h4>
              <ul className="footer_links-list">
                {SITEMAP.integrations.links.map((link, idx) => (
                  <li key={idx} className="footer_links-item">
                    <a href={link.href} className="footer_link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer_group">
              <h4 className="footer_col-title">{SITEMAP.developers.title}</h4>
              <ul className="footer_links-list">
                {SITEMAP.developers.links.map((link, idx) => (
                  <li key={idx} className="footer_links-item">
                    <a href={link.href} className="footer_link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer_col footer_col_resources">
            <div className="footer_group">
              <h4 className="footer_col-title">{SITEMAP.resources.title}</h4>
              <ul className="footer_links-list">
                {SITEMAP.resources.links.map((link, idx) => (
                  <li key={idx} className="footer_links-item">
                    <a href={link.href} className="footer_link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer_group">
              <h4 className="footer_col-title">{SITEMAP.company.title}</h4>
              <ul className="footer_links-list">
                {SITEMAP.company.links.map((link, idx) => (
                  <li key={idx} className="footer_links-item">
                    <a href={link.href} className="footer_link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer_group">
              <h4 className="footer_col-title">{SITEMAP.support.title}</h4>
              <ul className="footer_links-list">
                {SITEMAP.support.links.map((link, idx) => (
                  <li key={idx} className="footer_links-item">
                    <a
                      href={link.href}
                      className="footer_link"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
