import { ChevronRight } from 'lucide-react';
import './ui.css';

export function CtaButton({
  href,
  children,
  variant = 'primary',
  iconSize = 14,
  className = '',
}) {
  return (
    <a
      href={href}
      className={`cta-btn cta-btn--${variant} ${className}`.trim()}
    >
      <span>{children}</span>
      <ChevronRight size={iconSize} className="cta-btn__icon" />
    </a>
  );
}

export default CtaButton;
