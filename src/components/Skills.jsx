import { skills } from '../content';
import Section from './Section';

export default function Skills() {
  return (
    <Section id="skills" title="Skills" sub="What I've used in real projects.">
      <div className="skills-grid">
        {skills.map((s) => (
          <div className="skill-card" key={s.label}>
            <h3 className="skill-label">{s.label}</h3>
            <p className="skill-items">{s.items}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
