import { availability, links } from '../content';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Looking for a backend or smart contract developer?</h2>
      <p className="contact-text">{availability}</p>
      <div className="contact-actions">
        <a href={`mailto:${links.email}`} className="btn btn-white">{links.email}</a>
        <a href={links.linkedin} target="_blank" rel="noopener" className="btn btn-outline">LinkedIn</a>
        <a href={links.github} target="_blank" rel="noopener" className="btn btn-outline">GitHub</a>
      </div>
    </section>
  );
}
