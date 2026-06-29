import { portfolio } from "../data/portfolio";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Frontend and engineering exposure">
      <div className="timeline">
        {portfolio.experience.map((item) => (
          <article className="timeline-item" key={item.organization + item.role}>
            <div className="timeline-dot" />
            <div className="panel p-6 sm:p-7">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                  <p className="mt-1 text-mint">{item.organization}</p>
                </div>
                <p className="text-sm text-mist/58">
                  {item.dates}
                  {item.location ? " - " + item.location : ""}
                </p>
              </div>
              <ul className="mt-5 grid gap-3 text-mist/70">
                {item.bullets.map((bullet) => (
                  <li className="feature-item" key={bullet}>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
