import { motion, AnimatePresence } from 'framer-motion';
import {
  CreditCard,
  Layers,
  Globe,
  FileText,
  Building2,
  TrendingUp,
  ShieldCheck,
  ShoppingBag,
  Boxes,
  Cpu,
  BookOpen,
  Terminal,
  Compass,
  HelpCircle,
} from 'lucide-react';

const ICON_MAP = {
  CreditCard,
  Layers,
  Globe,
  FileText,
  Building2,
  TrendingUp,
  ShieldCheck,
  ShoppingBag,
  Boxes,
  Cpu,
  BookOpen,
  Terminal,
  Compass,
  HelpCircle,
};

export function NavDropdown({ activeItem, onMouseEnter, onMouseLeave }) {
  if (!activeItem || !activeItem.sections) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="stripe-dropdown"
        initial={{ opacity: 0, y: 10, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 6, scale: 0.98 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="stripe-dropdown_arrow" />
        <div className="stripe-dropdown_content">
          {activeItem.sections.map((section, sIdx) => (
            <div key={sIdx} className="stripe-dropdown_section">
              <h4 className="stripe-dropdown_section-title">{section.title}</h4>
              <div className="stripe-dropdown_grid">
                {section.items.map((item, idx) => {
                  const IconComponent = ICON_MAP[item.icon] || CreditCard;
                  return (
                    <a
                      key={idx}
                      href={`#${item.title.toLowerCase()}`}
                      className="stripe-dropdown_item"
                    >
                      <div className="stripe-dropdown_icon-wrapper">
                        <IconComponent className="stripe-dropdown_icon" size={18} />
                      </div>
                      <div className="stripe-dropdown_text">
                        <div className="stripe-dropdown_item-header">
                          <span className="stripe-dropdown_item-title">
                            {item.title}
                          </span>
                          {item.badge && (
                            <span className="stripe-dropdown_badge">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className="stripe-dropdown_item-desc">{item.desc}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
