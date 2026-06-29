import { ExternalLink, Github } from "lucide-react";
import { portfolio } from "../data/portfolio";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Built with practical web workflows">
      <div className="grid gap-6">
        {portfolio.projects.map((project) => {
          const liveDemo = project.links?.demo;
          const displayName = project.name.split(" - ")[0].split(" \u2013 ")[0];

          return (
            <article
              className={`project-card ${liveDemo ? "project-card-clickable" : ""}`}
              key={project.name}
              role={liveDemo ? "link" : undefined}
              tabIndex={liveDemo ? 0 : undefined}
              onClick={() => {
                if (liveDemo) window.open(liveDemo, "_blank", "noopener,noreferrer");
              }}
              onKeyDown={(event) => {
                if (!liveDemo) return;
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  window.open(liveDemo, "_blank", "noopener,noreferrer");
                }
              }}
            >
              <div className={`project-visual ${project.screenshot ? "project-visual-image" : ""}`} aria-label={project.name + " screenshot preview"}>
                {project.screenshot ? (
                  <img className="project-screenshot" src={project.screenshot} alt={project.name + " screenshot"} />
                ) : (
                  <>
                    <div className="project-window">
                      <div />
                      <div />
                      <div />
                    </div>
                    <strong>{displayName}</strong>
                    <span></span>
                  </>
                )}
              </div>

              <div className="p-7 sm:p-8">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
                    <p className="mt-4 max-w-3xl leading-7 text-mist/70">{project.description}</p>
                  </div>

                  <div className="flex gap-2">
                    {project.links?.github ? (
                      <a
                        className="icon-button"
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Open project GitHub"
                        onClick={(event) => event.stopPropagation()}
                      >
                        <Github size={18} />
                      </a>
                    ) : null}
                    {project.links?.demo ? (
                      <a
                        className="icon-button"
                        href={project.links.demo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Open project demo"
                        onClick={(event) => event.stopPropagation()}
                      >
                        <ExternalLink size={18} />
                      </a>
                    ) : null}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>

                <ul className="mt-7 grid gap-3 text-mist/72">
                  {project.features.map((feature) => (
                    <li className="feature-item" key={feature}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
