import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, ChevronRight } from 'lucide-react';
import { useNavStore } from '../../store/useNavStore';
import { NAV_ITEMS } from './headerData';
import { StripeLogo } from '../../assets/icons/StripeLogo';

export function MobileDrawer() {
  const { isMobileMenuOpen, closeMobileMenu } = useNavStore();
  const [expandedId, setExpandedId] = useState(null);

  const toggleSection = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <>
          <motion.div
            className="stripe-drawer_backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMobileMenu}
          />

          <motion.aside
            className="stripe-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
          >
            <div className="stripe-drawer_header">
              <div className="stripe-drawer_logo" onClick={closeMobileMenu}>
                <StripeLogo width={56} height={24} color="#0a2540" />
              </div>
              <button
                className="stripe-drawer_close"
                onClick={closeMobileMenu}
                aria-label="Close navigation menu"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="stripe-drawer_nav">
              {NAV_ITEMS.map((item) => {
                if (item.isDirectLink) {
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      className="stripe-drawer_link stripe-drawer_link--direct"
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </a>
                  );
                }

                const isExpanded = expandedId === item.id;

                return (
                  <div key={item.id} className="stripe-drawer_accordion">
                    <button
                      className={`stripe-drawer_link stripe-drawer_accordion-trigger ${
                        isExpanded ? 'stripe-drawer_accordion-trigger--open' : ''
                      }`}
                      onClick={() => toggleSection(item.id)}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        size={18}
                        className={`stripe-drawer_chevron ${
                          isExpanded ? 'stripe-drawer_chevron--rotated' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          className="stripe-drawer_accordion-content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.sections?.map((section, sIdx) => (
                            <div key={sIdx} className="stripe-drawer_sub-group">
                              <span className="stripe-drawer_sub-title">
                                {section.title}
                              </span>
                              {section.items.map((subItem, idx) => (
                                <a
                                  key={idx}
                                  href={`#${subItem.title.toLowerCase()}`}
                                  className="stripe-drawer_sub-item"
                                  onClick={closeMobileMenu}
                                >
                                  <div className="stripe-drawer_sub-item-text">
                                    <span className="stripe-drawer_sub-item-title">
                                      {subItem.title}
                                    </span>
                                    <span className="stripe-drawer_sub-item-desc">
                                      {subItem.desc}
                                    </span>
                                  </div>
                                  <ChevronRight size={14} className="stripe-drawer_sub-arrow" />
                                </a>
                              ))}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            <div className="stripe-drawer_actions">
              <a
                href="#contact-sales"
                className="stripe-drawer_btn stripe-drawer_btn--secondary"
                onClick={closeMobileMenu}
              >
                <span>Contact sales</span>
                <ChevronRight size={14} />
              </a>

              <a
                href="#sign-in"
                className="stripe-drawer_btn stripe-drawer_btn--primary"
                onClick={closeMobileMenu}
              >
                <span>Sign in</span>
                <ChevronRight size={14} />
              </a>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
