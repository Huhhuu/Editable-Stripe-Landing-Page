import { useState } from 'react';
import { AccentBlock } from '../ui/AccentBlock';
import lucideDocIcon from '../../assets/icons/lucide.svg';
import './blocks.css';

export function EnterpriseTabs({ cases }) {
  const [activeIndex, setActiveIndex] = useState(1);
  const activeCase = cases[activeIndex];

  return (
    <div className="enterprise-tabs">
      <div className="enterprise-tabs__showcase">
        <div className="enterprise-tabs__left">
          {activeCase.stats.map((stat) => (
            <AccentBlock
              key={stat.value}
              value={stat.value}
              label={stat.label}
            />
          ))}

          <AccentBlock
            title="Products used"
            className="enterprise-tabs__products-block"
          >
            <div className="enterprise-tabs__products-list">
              {activeCase.products.map((product) => (
                <div key={product.name} className="enterprise-tabs__product-item">
                  <img
                    src={product.icon}
                    alt=""
                    className="enterprise-tabs__product-icon"
                  />
                  <span className="enterprise-tabs__product-name">
                    {product.name}
                  </span>
                </div>
              ))}
            </div>
          </AccentBlock>
        </div>

        <div className="enterprise-tabs__right">
          <article
            className="enterprise-tabs__card"
            style={{ '--card-accent': activeCase.accentColor }}
          >
            <div className="enterprise-tabs__card-bg">
              <img
                src={activeCase.cardImage}
                alt={activeCase.name}
                className="enterprise-tabs__card-bg-img"
              />
              <div className="enterprise-tabs__card-overlay" />
            </div>

            <div className="enterprise-tabs__card-top">
              <img
                src={activeCase.cardLogo || activeCase.logo}
                alt={activeCase.name}
                className={`enterprise-tabs__card-logo ${
                  activeCase.invertCardLogo
                    ? 'enterprise-tabs__card-logo--invert'
                    : ''
                }`.trim()}
              />
              <div className="enterprise-tabs__card-doc" aria-hidden="true">
                <img
                  src={lucideDocIcon}
                  alt=""
                  className="enterprise-tabs__card-doc-img"
                />
              </div>
            </div>

            <div className="enterprise-tabs__card-bottom">
              <h3 className="enterprise-tabs__card-headline">
                {activeCase.headline}
              </h3>
            </div>
          </article>

          <div
            className="enterprise-tabs__pagination"
            aria-label="Enterprise Case Studies Navigation"
          >
            {cases.map((caseStudy, index) => (
              <button
                key={caseStudy.id}
                type="button"
                className={`enterprise-tabs__dot ${
                  index === activeIndex ? 'enterprise-tabs__dot--active' : ''
                }`.trim()}
                onClick={() => setActiveIndex(index)}
                aria-label={`Select ${caseStudy.name} case study`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="enterprise-tabs__divider" aria-hidden="true">
        {cases.map((caseStudy, index) => (
          <div
            key={caseStudy.id}
            className={`enterprise-tabs__tab-line ${
              index === activeIndex ? 'enterprise-tabs__tab-line--active' : ''
            }`.trim()}
            style={{ '--tab-accent': caseStudy.accentColor }}
          />
        ))}
      </div>

      <div className="enterprise-tabs__row">
        {cases.map((caseStudy, index) => (
          <button
            key={caseStudy.id}
            type="button"
            className={`enterprise-tabs__tab-btn ${
              index === activeIndex ? 'enterprise-tabs__tab-btn--active' : ''
            }`.trim()}
            onClick={() => setActiveIndex(index)}
            aria-label={`Switch to ${caseStudy.name}`}
          >
            <img
              src={caseStudy.logo}
              alt={caseStudy.name}
              className="enterprise-tabs__tab-logo"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default EnterpriseTabs;
