import { CtaButton } from '../ui/CtaButton';
import './blocks.css';

export function ShowcaseRow({
  subtitle,
  icon,
  badgeText,
  title,
  isPrimaryHeading = false,
  desc,
  ctaText,
  ctaLink,
  seeAlsoList,
  mockupImg,
  mockupAlt,
  mockupSources,
  modifier = 'default',
}) {
  const HeadingTag = isPrimaryHeading ? 'h2' : 'h3';

  return (
    <article className={`showcase-row showcase-row--${modifier}`}>
      <div className="showcase-row__content">
        {subtitle && <span className="showcase-row__subtitle">{subtitle}</span>}

        {badgeText && (
          <div className="showcase-row__badge">
            {icon && <img src={icon} alt="" className="showcase-row__badge-icon" />}
            <span className="showcase-row__badge-text">{badgeText}</span>
          </div>
        )}

        <HeadingTag
          className={
            isPrimaryHeading
              ? 'showcase-row__heading-primary'
              : 'showcase-row__heading-secondary'
          }
        >
          {title}
        </HeadingTag>

        <p className="showcase-row__desc">{desc}</p>

        {ctaText && (
          <CtaButton
            href={ctaLink}
            variant="primary"
            className="showcase-row__btn"
          >
            {ctaText}
          </CtaButton>
        )}

        {seeAlsoList?.length > 0 && (
          <div className="showcase-row__see-also">
            <h4 className="showcase-row__see-also-title">See also</h4>
            <ul className="showcase-row__see-also-list">
              {seeAlsoList.map((entry) => (
                <li key={entry.linkText} className="showcase-row__see-also-item">
                  <a href={entry.href} className="showcase-row__see-also-link">
                    {entry.linkText}
                  </a>{' '}
                  <span>{entry.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className={`showcase-row__mockup showcase-row__mockup--${modifier}`}>
        {mockupSources ? (
          <picture>
            <source media="(max-width: 749px)" srcSet={mockupSources.mobile} />
            <source media="(max-width: 999px)" srcSet={mockupSources.tablet} />
            <img
              src={mockupSources.desktop}
              alt={mockupAlt}
              className={`showcase-row__mockup-img showcase-row__mockup-img--${modifier}`}
            />
          </picture>
        ) : (
          <img
            src={mockupImg}
            alt={mockupAlt}
            className={`showcase-row__mockup-img showcase-row__mockup-img--${modifier}`}
          />
        )}
      </div>
    </article>
  );
}

export default ShowcaseRow;
