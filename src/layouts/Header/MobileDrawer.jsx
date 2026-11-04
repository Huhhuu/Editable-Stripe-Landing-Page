import { useState } from 'react';
import { X, ChevronDown, ChevronRight } from 'lucide-react';
import { NAV_ITEMS } from './headerData';
import { StripeLogo } from '../../assets/icons/StripeLogo';

export function MobileDrawer({ isOpen, onClose }) {
  const [expandedId, setExpandedId] = useState(null);

  if (!isOpen) return null;

  const toggleSection = (sectionId) => {
    setExpandedId(expandedId === sectionId ? null : sectionId);
  };

  return (
    <>
      <div className="stripe-drawer_backdrop" onClick={onClose} />

      <aside className="stripe-drawer">
        <div className="stripe-drawer_header">
          <div className="stripe-drawer_logo" onClick={onClose}>
            <StripeLogo width={56} height={24} color="#0a2540" />
          </div>
          <button
            type="button"
            className="stripe-drawer_close"
            onClick={onClose}
            aria-label="Close navigation menu"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="stripe-drawer_nav">
          {NAV_ITEMS.map((navItem) => {
            if (navItem.isDirectLink) {
              return (
                <a
                  key={navItem.id}
                  href={navItem.href}
                  className="stripe-drawer_link stripe-drawer_link--direct"
                  onClick={onClose}
                >
                  {navItem.label}
                </a>
              );
            }

            const isExpanded = expandedId === navItem.id;

            return (
              <div key={navItem.id} className="stripe-drawer_accordion">
                <button
                  type="button"
                  className={`stripe-drawer_link stripe-drawer_accordion-trigger ${
                    isExpanded ? 'stripe-drawer_accordion-trigger--open' : ''
                  }`}
                  onClick={() => toggleSection(navItem.id)}
                >
                  <span>{navItem.label}</span>
                  <ChevronDown
                    size={18}
                    className={`stripe-drawer_chevron ${
                      isExpanded ? 'stripe-drawer_chevron--rotated' : ''
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="stripe-drawer_accordion-content">
                    {navItem.sections?.map((group) => (
                      <div key={group.title} className="stripe-drawer_sub-group">
                        <span className="stripe-drawer_sub-title">
                          {group.title}
                        </span>
                        {group.items.map((subItem) => (
                          <a
                            key={subItem.title}
                            href={subItem.href}
                            className="stripe-drawer_sub-item"
                            onClick={onClose}
                          >
                            <div className="stripe-drawer_sub-item-text">
                              <span className="stripe-drawer_sub-item-title">
                                {subItem.title}
                              </span>
                              <span className="stripe-drawer_sub-item-desc">
                                {subItem.desc}
                              </span>
                            </div>
                            <ChevronRight
                              size={14}
                              className="stripe-drawer_sub-arrow"
                            />
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="stripe-drawer_actions">
          <a
            href="#section-9"
            className="stripe-drawer_btn stripe-drawer_btn--secondary"
            onClick={onClose}
          >
            <span>Contact sales</span>
            <ChevronRight size={14} />
          </a>

          <a
            href="#section-9"
            className="stripe-drawer_btn stripe-drawer_btn--primary"
            onClick={onClose}
          >
            <span>Sign in</span>
            <ChevronRight size={14} />
          </a>
        </div>
      </aside>
    </>
  );
}

export default MobileDrawer;
