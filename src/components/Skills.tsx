import { portfolio } from "../data/portfolio";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Technical toolkit">
      <div className="skills-grid">
        {portfolio.skillGroups.map((group) => (
          <article className="panel skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span className="tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
