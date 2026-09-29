import { experience } from '../content';
import Section from './Section';

export default function Experience() {
  return (
    <Section id="experience" title="Experience" sub="Roles, teaching, education and hackathons.">
      <div className="exp-card">
        {experience.map((e) => (
          <div className="exp-row" key={e.title}>
            <div>
              <h3 className="exp-title">{e.title}</h3>
              <p className="exp-org">{e.org}</p>
              <p className="exp-desc">{e.desc}</p>
            </div>
            <p className="exp-period">{e.period}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
