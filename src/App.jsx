import { Header } from './layouts/Header/Header';
import { Footer } from './layouts/Footer/Footer';
import { CtaButton } from './components/ui/CtaButton';
import { SectionHeader } from './components/ui/SectionHeader';
import { GridLines } from './components/ui/GridLines';
import { MediaCard } from './components/ui/MediaCard';
import { AccentBlock } from './components/ui/AccentBlock';
import { CheckoutMockup } from './components/blocks/CheckoutMockup';
import { LogoGrid } from './components/blocks/LogoGrid';
import { ShowcaseRow } from './components/blocks/ShowcaseRow';
import { EnterpriseTabs } from './components/blocks/EnterpriseTabs';
import {
  PARTNER_LOGOS,
  MODULAR_HERO_IMAGES,
  PRODUCT_SHOWCASES,
  GLOBE_SOURCES,
  GLOBE_FALLBACK,
  GLOBAL_STATS,
  ENTERPRISE_CASES,
  GROWTH_COLUMNS,
  DEVELOPER_FEATURES,
  NO_CODE_CARDS,
  READY_CARDS,
} from './data/landingData';
import heroBackground from './assets/images/background1.png';
import rocketRides from './assets/images/rocketrides.svg';
import sec7CodeScreen from './assets/images/section7/sec7_codescreen.svg';
import './App.css';

function App() {
  return (
    <div className="app-layout">
      <Header />

      <main className="stripe-container">
        <section className="hero-band" id="section-1">
          <div className="hero-band__bg-wrapper">
            <img
              src={heroBackground}
              alt="Stripe colorful gradient canvas"
              className="hero-band__bg-img"
            />
          </div>

          <div className="container hero-band__content">
            <div className="hero-band__left">
              <h1 className="hero-band__title">
                <span className="hero-band__title-line">Financial</span>
                <span className="hero-band__title-line">infrastructure</span>
                <span className="hero-band__title-line">for the internet</span>
              </h1>
              <p className="hero-band__desc">
                Millions of companies of all sizes use Stripe online and in person to
                accept payments, send payouts, automate financial processes, and
                ultimately grow revenue.
              </p>
              <div className="hero-band__actions">
                <CtaButton href="#start-now" variant="dark" iconSize={15}>
                  Start now
                </CtaButton>
                <CtaButton href="#contact-sales" variant="link-dark" iconSize={15}>
                  Contact sales
                </CtaButton>
              </div>
            </div>

            <div className="hero-band__right">
              <CheckoutMockup />
              <img
                src={rocketRides}
                alt="Rocket Rides Dashboard"
                className="hero-band__dashboard-img"
              />
            </div>
          </div>
        </section>

        <section className="logos-band" id="section-2" aria-label="Customer Logos">
          <div className="logos-band__container">
            <LogoGrid logos={PARTNER_LOGOS} />
          </div>
        </section>

        <section className="products-band" id="section-3">
          <div className="products-band__container">
            <ShowcaseRow
              subtitle="Modular solutions"
              title="A fully integrated suite of financial and payments products"
              isPrimaryHeading
              desc="Reduce costs, grow revenue, and run your business more efficiently on a fully integrated platform. Use Stripe to handle all of your payments-related needs, manage revenue operations, and launch (or invent) new business models."
              mockupSources={MODULAR_HERO_IMAGES}
              mockupAlt="Modular financial solutions network diagram and card stack"
              modifier="modular"
            />

            {PRODUCT_SHOWCASES.map((product) => (
              <ShowcaseRow
                key={product.id}
                icon={product.icon}
                badgeText={product.badgeText}
                title={product.title}
                desc={product.desc}
                ctaText={product.ctaText}
                ctaLink={product.ctaLink}
                seeAlsoList={product.seeAlsoList}
                mockupImg={product.mockupImg}
                mockupAlt={product.mockupAlt}
                modifier={product.mockupModifier}
              />
            ))}
          </div>
        </section>

        <section className="globe-band" id="section-4">
          <div className="globe-band__bg" aria-hidden="true">
            <picture>
              {GLOBE_SOURCES.map((source) => (
                <source
                  key={source.media}
                  media={source.media}
                  srcSet={source.srcSet}
                />
              ))}
              <img src={GLOBE_FALLBACK} alt="" className="globe-band__img" />
            </picture>
          </div>

          <GridLines variant="dark" />

          <div className="band-container">
            <SectionHeader
              theme="dark"
              badge="Global scale"
              title="The backbone for global commerce"
              desc="Stripe makes moving money as easy and programmable as moving data. Our teams are based in offices around the world and we process hundreds of billions of dollars each year for ambitious businesses of all sizes."
              className="globe-band__header"
            />

            <div className="globe-band__stats">
              {GLOBAL_STATS.map((stat) => (
                <AccentBlock
                  key={stat.id}
                  theme="dark"
                  value={stat.value}
                  label={stat.label}
                  linkText={stat.linkText}
                  linkHref={stat.linkHref}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="enterprise-band" id="section-5">
          <div className="band-container">
            <SectionHeader
              badge="Enterprise reinvention"
              title="Bring agility to your enterprise"
              className="enterprise-band__header"
              actions={
                <CtaButton href="#contact-sales" variant="primary" iconSize={15}>
                  Contact sales
                </CtaButton>
              }
            >
              <p className="sec-header__desc">
                You can use Stripe not only to accept payments but also to quickly
                support new markets, upgrade existing systems and tools, go
                direct-to-consumer, and engage customers with subscriptions and
                marketplaces. Get expert integration guidance from our{' '}
                <a href="#services" className="sec-header__link">
                  professional services team
                </a>{' '}
                and{' '}
                <a href="#partners" className="sec-header__link">
                  certified partners
                </a>{' '}
                so you can see value with Stripe faster.
              </p>
            </SectionHeader>

            <EnterpriseTabs cases={ENTERPRISE_CASES} />
          </div>
        </section>

        <section className="growth-band" id="section-6">
          <GridLines variant="light" />

          <div className="band-container">
            <SectionHeader
              badge="Built for growth"
              title="Take your startup farther, faster"
              desc="Startups build on Stripe to launch faster, adapt as they grow, and automate workflows to do more with less. Build your own API-based integration or use our low- to no-code solutions, which are simple enough for easy implementation and powerful enough to scale as fast and as far as you need."
              className="growth-band__header"
            />

            <div className="growth-band__grid">
              {GROWTH_COLUMNS.map((column) => (
                <div
                  key={column.id}
                  className={`growth-band__col growth-band__col--${column.modifier}`}
                >
                  {column.cards.map((card) => (
                    <MediaCard
                      key={card.id}
                      size="lg"
                      image={card.image}
                      icon={card.icon}
                      badge={card.badge}
                      title={card.title}
                      desc={card.desc}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="developers-band" id="section-7">
          <div className="slant-bg slant-bg--light" aria-hidden="true">
            <div className="slant-bg__plane slant-bg__plane--dark" />
          </div>

          <GridLines variant="dark" slanted />

          <div className="band-container">
            <div className="developers-band__top">
              <SectionHeader
                theme="dark"
                badge="Designed for developers"
                title="Ship more quickly with powerful and easy-to-use APIs"
                desc="Save engineering time with unified payments functionality. We obsess over the maze of gateways, payments rails, and financial institutions that make up the global economic landscape so that your teams can build what you need on one platform."
                className="developers-band__header"
                actions={
                  <CtaButton href="#read-the-docs" variant="cyan">
                    Read the docs
                  </CtaButton>
                }
              />

              <div className="developers-band__code-wrap">
                <img
                  src={sec7CodeScreen}
                  alt="Stripe API code snippet and terminal preview"
                  className="developers-band__code-img"
                />
              </div>
            </div>

            <div className="developers-band__features">
              {DEVELOPER_FEATURES.map((feature) => (
                <AccentBlock
                  key={feature.id}
                  theme="dark"
                  icon={feature.icon}
                  iconSize="md"
                  title={feature.title}
                  label={feature.desc}
                  ctaText={feature.linkText}
                  ctaHref={feature.linkHref}
                  className="developers-band__feature-item"
                />
              ))}
            </div>
          </div>
        </section>

        <section className="nocode-band" id="section-8">
          <div className="slant-bg slant-bg--dark" aria-hidden="true">
            <div className="slant-bg__plane slant-bg__plane--white" />
            <div className="nocode-band__accents">
              <div className="nocode-band__bar-cyan" />
              <div className="nocode-band__bar-purple" />
              <div className="nocode-band__bar-blue" />
            </div>
          </div>

          <GridLines variant="light" slanted />

          <div className="band-container">
            <SectionHeader
              badge="Launch with ease"
              title="Low- and no-code options for getting started"
              desc="If you’d like to use Stripe for your business but don’t have developers on staff, no problem. We have a few options depending on your needs."
              className="nocode-band__header"
            />

            <div className="nocode-band__grid">
              {NO_CODE_CARDS.map((card) => (
                <MediaCard
                  key={card.id}
                  size="sm"
                  image={card.image}
                  title={card.title}
                  desc={card.desc}
                  segments={card.segments}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="ready-band" id="section-9">
          <GridLines variant="light" />

          <div className="band-container">
            <div className="ready-band__content">
              <SectionHeader
                title="Ready to get started?"
                className="ready-band__main"
                actions={
                  <>
                    <CtaButton href="#start-now" variant="primary" iconSize={15}>
                      Start now
                    </CtaButton>
                    <CtaButton href="#contact-sales" variant="link" iconSize={15}>
                      Contact sales
                    </CtaButton>
                  </>
                }
              >
                <p className="sec-header__desc">
                  Explore{' '}
                  <a href="#payments" className="sec-header__link">
                    Stripe Payments
                  </a>
                  , or create an account instantly and start accepting payments. You
                  can also contact us to design a custom package for your business.
                </p>
              </SectionHeader>

              {READY_CARDS.map((card) => (
                <AccentBlock
                  key={card.id}
                  icon={card.icon}
                  iconAlt={card.iconAlt}
                  iconSize="lg"
                  title={card.title}
                  label={card.desc}
                  ctaText={card.linkText}
                  ctaHref={card.linkHref}
                  className="ready-band__card"
                />
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}

export default App;
