import { Award, BadgeCheck } from "lucide-react";
import { portfolio } from "../data/portfolio";
import { Section } from "./Section";

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Credentials" title="Achievements and certifications">
      <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <article className="panel p-7">
          <div className="flex items-center gap-3">
            <Award className="text-saffron" size={22} />
            <h3 className="text-xl font-semibold text-white">Achievement</h3>
          </div>
          <ul className="mt-5 grid gap-3 text-mist/72">
            {portfolio.achievements.map((achievement) => (
              <li className="feature-item" key={achievement}>
                {achievement}
              </li>
            ))}
          </ul>
        </article>

        <article className="panel p-7">
          <div className="flex items-center gap-3">
            <BadgeCheck className="text-mint" size={22} />
            <h3 className="text-xl font-semibold text-white">Certifications</h3>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {portfolio.certifications.map((certification) => (
              <span className="tag" key={certification}>
                {certification}
              </span>
            ))}
          </div>
        </article>
      </div>
    </Section>
  );
}
