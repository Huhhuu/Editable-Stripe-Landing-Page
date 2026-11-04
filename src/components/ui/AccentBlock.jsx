import { CtaButton } from './CtaButton';
import './ui.css';

export function AccentBlock({
  theme = 'light',
  icon,
  iconAlt = '',
  iconSize = 'md',
  value,
  title,
  label,
  linkText,
  linkHref,
  ctaText,
  ctaHref,
  children,
  className = '',
}) {
  const linkVariant = theme === 'dark' ? 'link-cyan' : 'link';

  return (
    <div className={`accent-block accent-block--${theme} ${className}`.trim()}>
      {icon && (
        <div className={`accent-block__icon-wrap accent-block__icon-wrap--${iconSize}`}>
          <img src={icon} alt={iconAlt} className="accent-block__icon" />
        </div>
      )}

      <div className="accent-block__row">
        <div className="accent-block__bar" aria-hidden="true" />
        <div className="accent-block__body">
          {value && <span className="accent-block__value">{value}</span>}
          {title && <h3 className="accent-block__title">{title}</h3>}
          {label && (
            <p className="accent-block__label">
              {label}
              {linkText && (
                <a href={linkHref} className="accent-block__inline-link">
                  {linkText}
                </a>
              )}
            </p>
          )}
          {children}
          {ctaText && (
            <CtaButton
              href={ctaHref}
              variant={linkVariant}
              className="accent-block__cta"
            >
              {ctaText}
            </CtaButton>
          )}
        </div>
      </div>
    </div>
  );
}

export default AccentBlock;
