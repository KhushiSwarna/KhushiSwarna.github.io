import { Linkedin, Mail, MapPin } from "lucide-react";
import { portfolio } from "../data/portfolio";
import { Section } from "./Section";

export function Contact() {
  const linkedIn = portfolio.socialLinks.find((link) => link.type === "linkedin");

  return (
    <Section id="contact" eyebrow="Contact" title="Open to software engineering internship conversations">
      <div className="contact-panel">
        <div>
          <p className="max-w-2xl text-lg leading-8 text-mist/76">
            For internship opportunities, technical interviews, or project discussions, the best
            public contact path is email or LinkedIn.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={"mailto:" + portfolio.email} className="secondary-button">
              <Mail size={18} />
              Email
            </a>
            {linkedIn ? (
              <a href={linkedIn.href} className="secondary-button" target="_blank" rel="noreferrer">
                <Linkedin size={18} />
                LinkedIn
              </a>
            ) : null}
          </div>
        </div>
        <div className="contact-location">
          <MapPin size={20} />
          <span>{portfolio.location}</span>
        </div>
      </div>
    </Section>
  );
}
