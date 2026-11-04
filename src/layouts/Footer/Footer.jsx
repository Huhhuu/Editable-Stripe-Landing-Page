import StripeLogo from '../../assets/icons/StripeLogo';
import { FOOTER_COLUMNS } from '../../data/landingData';
import { GridLines } from '../../components/ui/GridLines';
import './Footer.css';

/* ===========================
   SECTION: Footer Layout
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
        <GridLines variant="light" className="footer_grid-lines" />

        <div className="footer_content">
          <div className="footer_col footer_col_brand">
            <div className="footer_brand-group">
              <a href="#" className="footer_logo-link" aria-label="Stripe Home">
                <StripeLogo
                  width={68}
                  height={33}
                  color="#0A2540"
                  className="footer_logo"
                />
              </a>

              <button
                type="button"
                className="footer_locale-btn"
                aria-label="Choose country and language"
              >
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
                <span className="footer_locale-text">
                  United States (English)
                </span>
              </button>
            </div>

            <div className="footer_copyright">
              <p className="footer_copyright-text">© 2024 Stripe, Inc.</p>
            </div>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div
              key={column.id}
              className={`footer_col footer_col_${column.modifier}`}
            >
              {column.groups.map((group) => (
                <div key={group.title} className="footer_group">
                  <h4 className="footer_col-title">{group.title}</h4>
                  <ul className="footer_links-list">
                    {group.links.map((link) => (
                      <li key={link.label} className="footer_links-item">
                        <a href={link.href} className="footer_link">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
