export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-eyebrow">Get in touch</div>
      <h2 className="contact-heading">
        Looking for a backend or <em>smart contract developer?</em>
      </h2>
      <p className="contact-sub">
        Open to backend, smart contract and blockchain developer roles. Remote, hybrid or in-person in Johannesburg, and open to relocation.
      </p>
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
