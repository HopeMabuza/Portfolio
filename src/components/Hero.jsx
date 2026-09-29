import { intro } from '../content';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <p className="hero-badge">
        <span className="hero-dot" aria-hidden="true" />
        Backend &amp; Smart Contract Developer, Johannesburg
      </p>
      <h1 className="hero-title">Building on&#8209;chain, for humans.</h1>
      <div className="hero-bottom">
        <p className="hero-intro">{intro}</p>
        <div className="hero-actions">
          <a href="#work" className="btn btn-primary">See my work</a>
          <a href="#contact" className="btn btn-light">Get in touch</a>
        </div>
      </div>
    </section>
  );
}
