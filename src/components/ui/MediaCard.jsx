import './ui.css';

export function MediaCard({
  image,
  icon,
  badge,
  title,
  desc,
  segments,
  size = 'md',
}) {
  return (
    <article className={`media-card media-card--${size}`}>
      <div className="media-card__image-wrap">
        <img src={image} alt={title} className="media-card__img" />
      </div>
      <div className="media-card__body">
        {badge && (
          <div className="media-card__badge">
            {icon && <img src={icon} alt="" className="media-card__icon" />}
            <span className="media-card__badge-text">{badge}</span>
          </div>
        )}
        <h3 className="media-card__title">{title}</h3>
        <p className="media-card__desc">
          {segments
            ? segments.map((segment, index) =>
                segment.linkText ? (
                  <a
                    key={index}
                    href={segment.href}
                    className="media-card__link"
                  >
                    {segment.linkText}
                  </a>
                ) : (
                  segment.text
                )
              )
            : desc}
        </p>
      </div>
    </article>
  );
}

export default MediaCard;
