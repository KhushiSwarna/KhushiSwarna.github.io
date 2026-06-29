import { ArrowDown, Download, Linkedin, Mail } from "lucide-react";
import { portfolio } from "../data/portfolio";

export function Hero() {
  const linkedIn = portfolio.socialLinks.find((link) => link.type === "linkedin");

  return (
    <section id="top" className="hero-section">
      <div className="hero-media" aria-hidden="true">
        <img src="/hero-engineering.png" alt="" />
      </div>
      <div className="hero-overlay" />

      <div className="container-shell relative z-10 grid min-h-screen items-center gap-12 pt-24 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="max-w-3xl">
          <p className="eyebrow">CSE student - {portfolio.location}</p>
          <h1 className="mt-5 text-balance text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
            {portfolio.name}
          </h1>
          <p className="mt-5 max-w-2xl text-xl text-mint sm:text-2xl">{portfolio.headline}</p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-mist/78">{portfolio.intro}</p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#projects" className="primary-button">
              View Projects
              <ArrowDown size={18} />
            </a>
            <a href={portfolio.resumePath} className="secondary-button" download>
              Download Resume
              <Download size={18} />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={"mailto:" + portfolio.email} className="social-pill">
              <Mail size={17} />
              Email
            </a>
            {linkedIn ? (
              <a href={linkedIn.href} className="social-pill" target="_blank" rel="noreferrer">
                <Linkedin size={17} />
                LinkedIn
              </a>
            ) : null}
          </div>
        </div>

        <div className="hero-panel" aria-label="Portfolio highlights">
          <div className="metric-row">
            <span>Focus</span>
            <strong>DSA + Full Stack</strong>
          </div>
          <div className="metric-row">
            <span>Core Stack</span>
            <strong>JavaScript, Node.js, MongoDB</strong>
          </div>
          <div className="metric-row">
            <span>Project</span>
            <strong>StudySphere</strong>
          </div>
          <div className="metric-row">
            <span>Goal</span>
            <strong>SDE Roles</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
