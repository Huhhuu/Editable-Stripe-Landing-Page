import box1Pic from '../../assets/images/section8/s8_box1.svg';
import box2Pic from '../../assets/images/section8/s8_box2.svg';
import box3Pic from '../../assets/images/section8/s8_box3.svg';
import './Section8.css';

const NO_CODE_CARDS = [
  {
    id: 'pre-integrated',
    image: box1Pic,
    title: 'Use a pre-integrated platform',
    desc: (
      <>
        Explore our directory to find out-of-the-box solutions that connect with Stripe, such as <a href="#squarespace" className="section8_card-link">Squarespace</a> and <a href="#lightspeed" className="section8_card-link">Lightspeed</a>.
      </>
    )
  },
  {
    id: 'certified-experts',
    image: box2Pic,
    title: 'Build with Stripe-certified experts',
    desc: 'Work with a Stripe consulting partner that can integrate and deploy Stripe solutions for you.'
  },
  {
    id: 'no-code-products',
    image: box3Pic,
    title: 'Try our no-code products',
    desc: (
      <>
        Create an <a href="#invoice" className="section8_card-link">invoice</a>, accept in-person payment with your phone, or share a <a href="#payment-link" className="section8_card-link">payment link</a> directly from your Dashboard to start generating revenue in minutes—no code required.
      </>
    )
  }
];

function Section8() {
  return (
    <section className="section8" id="section-8">
      <div className="section8_slant-bg" aria-hidden="true">
        <div className="section8_slant-white" />
        <div className="section8_accents-right">
          <div className="section8_bar-cyan" />
          <div className="section8_bar-purple" />
          <div className="section8_bar-blue" />
        </div>
      </div>

      <div className="section8_grid-lines" aria-hidden="true">
        <div className="section8_grid-line section8_grid-line--1" />
        <div className="section8_grid-line section8_grid-line--2" />
        <div className="section8_grid-line section8_grid-line--3" />
        <div className="section8_grid-line section8_grid-line--4" />
        <div className="section8_grid-line section8_grid-line--5" />
      </div>

      <div className="section8_container">
        <div className="section8_header">
          <span className="section8_badge">Launch with ease</span>
          <h2 className="section8_title">
            Low- and no-code options for getting started
          </h2>
          <p className="section8_desc">
            If you’d like to use Stripe for your business but don’t have developers on staff, no problem. We have a few options depending on your needs.
          </p>
        </div>

        <div className="section8_grid">
          {NO_CODE_CARDS.map((card) => (
            <article key={card.id} className="section8_card">
              <div className="section8_card-image-wrap">
                <img
                  src={card.image}
                  alt={card.title}
                  className="section8_card-img"
                />
              </div>
              <div className="section8_card-body">
                <h3 className="section8_card-title">{card.title}</h3>
                <p className="section8_card-desc">{card.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section8;
