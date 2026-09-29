import growFiImg from '../../images/GrowFi.png';
import { projects } from '../content';
import Section from './Section';

const screenshots = { growfi: growFiImg };

export default function Projects() {
  return (
    <Section id="work" title="Selected work" sub="Two projects, in depth.">
      <div className="case-list">
        {projects.map((p) => (
          <article className="case" key={p.id}>
            {p.hasScreenshot && (
              <img className="case-shot" src={screenshots[p.id]} alt={`${p.title} app screenshot`} />
            )}
            <div className="case-grid">
              <div>
                <p className="case-meta">{p.meta}</p>
                <h3 className="case-title">{p.title}</h3>
                <p className="case-tagline">{p.tagline}</p>
                <p className="case-summary">{p.summary}</p>
                <div className="case-role">
                  <h4 className="case-h">My role</h4>
                  <p className="case-text">{p.role}</p>
                </div>
              </div>
              <div>
                <h4 className="case-h">{p.builtLabel}</h4>
                <ul className="case-list-items">
                  {p.built.map((b) => <li key={b}>{b}</li>)}
                </ul>
                {p.extra && (
                  <>
                    <h4 className="case-h case-h-gap">{p.extra.label}</h4>
                    <ul className="case-list-items">
                      {p.extra.items.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                  </>
                )}
                <h4 className="case-h case-h-gap">How it was tested</h4>
                <p className="case-text">{p.tested}</p>
                <div className="tags">
                  {p.stack.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
                {p.note && <p className="case-note">{p.note}</p>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
