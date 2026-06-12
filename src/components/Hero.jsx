export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-eyebrow">Full Stack Blockchain Developer</div>
      <h1 className="hero-name">
        Building<br />on-chain,<br /><em>for humans.</em>
      </h1>
      <p className="hero-statement">
        Most of Web3 was built for people who already understand it. I build for the ones who don't yet.
      </p>
      <div className="hero-cta">
        <a href="#projects" className="btn-main">see my work</a>
        <a href="mailto:hopemabuzadev@gmail.com" className="btn-sec">get in touch →</a>
      </div>
      <div className="scroll-hint">
        <div className="scroll-chevron">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
        <span className="scroll-hint-label">scroll</span>
      </div>
    </section>
  );
}
