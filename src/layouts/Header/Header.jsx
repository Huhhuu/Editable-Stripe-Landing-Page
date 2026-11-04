import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { StripeLogo } from '../../assets/icons/StripeLogo';
import { NAV_ITEMS } from './headerData';
import { MobileDrawer } from './MobileDrawer';
import { useScroll } from '../../hooks/useScroll';
import './Header.css';

export function Header() {
  const isScrolled = useScroll(15);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header
        className={`stripe-header ${isScrolled ? 'stripe-header--scrolled' : ''}`}
      >
        <div className="stripe-header_inner container">
          <div className="stripe-header_left">
            <a href="#" className="stripe-header_logo-link" aria-label="Stripe Home">
              <StripeLogo
                width={68}
                height={33}
                color="#ffffff"
                className="stripe-header_logo"
              />
            </a>

            <nav className="stripe-header_nav" aria-label="Main Navigation">
              <ul className="stripe-header_menu-list">
                {NAV_ITEMS.map((navItem) => (
                  <li key={navItem.id} className="stripe-header_menu-item">
                    <a
                      href={navItem.href}
                      className="stripe-header_nav-link"
                    >
                      {navItem.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="stripe-header_actions">
            <a href="#section-9" className="stripe-header_btn-contact">
              <span>Contact sales</span>
              <ChevronRight size={15} className="stripe-header_btn-arrow" />
            </a>

            <a href="#section-9" className="stripe-header_btn-signin">
              <span>Sign in</span>
              <ChevronRight size={15} className="stripe-header_btn-arrow" />
            </a>

            <button
              type="button"
              className="stripe-header_hamburger"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
            >
              <span className="stripe-header_hamburger-bar" />
              <span className="stripe-header_hamburger-bar" />
              <span className="stripe-header_hamburger-bar" />
            </button>
          </div>
        </div>
      </header>

      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}

export default Header;
