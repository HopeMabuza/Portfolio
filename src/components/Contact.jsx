export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-eyebrow">Get in Touch</div>
      <h2 className="contact-heading">
        Building something <em>on-chain?</em>
      </h2>
      <div className="contact-links">
        <a href="mailto:hopemabuzadev@gmail.com" className="contact-email">
          hopemabuzadev@gmail.com
        </a>
        <a
          href="https://github.com/HopeMabuza"
          target="_blank"
          rel="noopener"
          className="contact-btn"
        >
          github <span className="contact-arrow">↗</span>
        </a>
        <a
          href="https://linkedin.com/in/hope-mabuza"
          target="_blank"
          rel="noopener"
          className="contact-btn"
        >
          linkedin <span className="contact-arrow">↗</span>
        </a>
      </div>
    </section>
  );
}
