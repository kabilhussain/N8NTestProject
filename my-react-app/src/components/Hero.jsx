import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-container hero__container">
        <div className="hero-content hero__content">
          <p className="hero-eyebrow hero__eyebrow">Freshly brewed, thoughtfully made</p>

          <h1 className="hero-title hero__title" id="hero-title">
            Your daily cup,
            <br />
            <span>made special.</span>
          </h1>

          <p className="hero-description hero__description">
            Discover rich, comforting coffee crafted with care. Find your new
            favorite and make a little time for yourself.
          </p>

          <div className="hero-actions hero__actions">
            <a className="hero-button hero-button--primary" href="#menu">
              Explore our coffee
              <span aria-hidden="true">→</span>
            </a>
            <a className="hero-button hero-button--secondary" href="#about">
              Our story
            </a>
          </div>

          <p className="hero-note hero__note">
            <span aria-hidden="true">✦</span> Good coffee, good moments.
          </p>
        </div>

        <div
          className="hero-artwork hero__artwork"
          aria-hidden="true"
        >
          <div className="hero-artwork__glow" />
          <div className="hero-artwork__cup-wrap hero-artwork__cup-wrap--back cup-float-delayed">
            <span className="hero-artwork__steam hero-artwork__steam--one" />
            <span className="hero-artwork__steam hero-artwork__steam--two" />
            <div className="hero-artwork__cup hero-artwork__cup--back">
              <span className="hero-artwork__coffee" />
              <span className="hero-artwork__cup-mark">BREW</span>
            </div>
            <span className="hero-artwork__handle hero-artwork__handle--back" />
            <span className="hero-artwork__saucer hero-artwork__saucer--back" />
          </div>

          <div className="hero-artwork__cup-wrap hero-artwork__cup-wrap--front cup-float">
            <span className="hero-artwork__steam hero-artwork__steam--three" />
            <span className="hero-artwork__steam hero-artwork__steam--four" />
            <div className="hero-artwork__cup hero-artwork__cup--front">
              <span className="hero-artwork__coffee" />
              <span className="hero-artwork__cup-mark">GOOD<br />MORNING</span>
            </div>
            <span className="hero-artwork__handle hero-artwork__handle--front" />
            <span className="hero-artwork__saucer hero-artwork__saucer--front" />
          </div>

          <span className="hero-artwork__bean hero-artwork__bean--one" />
          <span className="hero-artwork__bean hero-artwork__bean--two" />
          <span className="hero-artwork__sparkle hero-artwork__sparkle--one">✦</span>
          <span className="hero-artwork__sparkle hero-artwork__sparkle--two">✧</span>
        </div>
      </div>
    </section>
  );
}