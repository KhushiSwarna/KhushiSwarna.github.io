import { GraduationCap } from "lucide-react";
import { portfolio } from "../data/portfolio";
import { Section } from "./Section";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic background">
      <div className="grid gap-5 md:grid-cols-2">
        {portfolio.education.map((item) => (
          <article className="panel p-7" key={item.institution}>
            <div className="flex items-start gap-4">
              <div className="icon-badge">
                <GraduationCap size={22} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{item.institution}</h3>
                {item.program ? <p className="mt-2 text-mint">{item.program}</p> : null}
                {item.dates ? <p className="mt-2 text-sm text-mist/56">{item.dates}</p> : null}
              </div>
            </div>
            {item.details?.length ? (
              <div className="mt-5 flex flex-wrap gap-2">
                {item.details.map((detail) => (
                  <span className="tag" key={detail}>
                    {detail}
                  </span>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  );
}
