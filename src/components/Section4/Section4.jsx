/* ==========================================================================
   SECTION 4: GLOBAL SCALE COMPONENT
   ========================================================================== */

import globe390 from '../../assets/images/section4/globe-390.png';
import globe768 from '../../assets/images/section4/globe-768.png';
import globe1024 from '../../assets/images/section4/globe-1024.png';
import globe1440 from '../../assets/images/section4/globe-1440.png';
import globe1920 from '../../assets/images/section4/globe-1920.png';
import './Section4.css';

function Section4() {
  return (
    <section className="section4" id="section-4">
      <div className="section4_globe-wrapper" aria-hidden="true">
        <picture>
          <source media="(max-width: 576px)" srcSet={globe390} />
          <source media="(max-width: 896px)" srcSet={globe768} />
          <source media="(max-width: 1199px)" srcSet={globe1024} />
          <source media="(max-width: 1599px)" srcSet={globe1440} />
          <img
            src={globe1920}
            alt=""
            className="section4_globe-img"
          />
        </picture>
      </div>

      <div className="section4_grid-lines" aria-hidden="true">
        <div className="section4_grid-line" />
        <div className="section4_grid-line" />
        <div className="section4_grid-line" />
        <div className="section4_grid-line" />
        <div className="section4_grid-line" />
      </div>

      <div className="section4_container">
        <div className="section4_header">
          <span className="section4_badge">Global scale</span>
          <h2 className="section4_title">The backbone for global commerce</h2>
          <p className="section4_desc">
            Stripe makes moving money as easy and programmable as moving data.
            Our teams are based in offices around the world and we process
            hundreds of billions of dollars each year for ambitious businesses
            of all sizes.
          </p>
        </div>

        <div className="section4_stats">
          <div className="section4_stat-item">
            <div className="section4_stat-bar" />
            <div className="section4_stat-content">
              <span className="section4_stat-number">250M+</span>
              <p className="section4_stat-label">
                API requests per day, peaking at 13,000 requests a second.
              </p>
            </div>
          </div>

          <div className="section4_stat-item">
            <div className="section4_stat-bar" />
            <div className="section4_stat-content">
              <span className="section4_stat-number">99.999%</span>
              <p className="section4_stat-label">
                historical uptime for{' '}
                <a href="#services" className="section4_link">
                  Stripe services.
                </a>
              </p>
            </div>
          </div>

          <div className="section4_stat-item">
            <div className="section4_stat-bar" />
            <div className="section4_stat-content">
              <span className="section4_stat-number">90%</span>
              <p className="section4_stat-label">
                of U.S. adults have bought from businesses using Stripe.
              </p>
            </div>
          </div>

          <div className="section4_stat-item">
            <div className="section4_stat-bar" />
            <div className="section4_stat-content">
              <span className="section4_stat-number">135+</span>
              <p className="section4_stat-label">
                currencies and payment methods supported.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4;
