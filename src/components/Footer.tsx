import { Linkedin, Mail } from "lucide-react";
import { portfolio } from "../data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();
  const linkedIn = portfolio.socialLinks.find((link) => link.type === "linkedin");

  return (
    <footer className="border-t border-white/10 py-9">
      <div className="container-shell flex flex-col gap-5 text-sm text-mist/62 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-mist">{portfolio.name}</p>
          <p className="mt-1">Building thoughtful web experiences for internship-ready software work.</p>
        </div>
        <div className="flex items-center gap-3">
          <span>{year}</span>
          <a href={"mailto:" + portfolio.email} className="icon-button" aria-label="Email Khushi">
            <Mail size={17} />
          </a>
          {linkedIn ? (
            <a href={linkedIn.href} className="icon-button" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <Linkedin size={17} />
            </a>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
