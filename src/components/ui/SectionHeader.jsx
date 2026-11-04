import './ui.css';

export function SectionHeader({
  badge,
  title,
  desc,
  children,
  actions,
  theme = 'light',
  className = '',
}) {
  return (
    <div className={`sec-header sec-header--${theme} ${className}`.trim()}>
      {badge && <span className="sec-header__badge">{badge}</span>}
      <h2 className="sec-header__title">{title}</h2>
      {desc && <p className="sec-header__desc">{desc}</p>}
      {children}
      {actions && <div className="sec-header__actions">{actions}</div>}
    </div>
  );
}

export default SectionHeader;
