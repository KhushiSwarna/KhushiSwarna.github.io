import { Download, FileText } from "lucide-react";
import { portfolio } from "../data/portfolio";
import { Section } from "./Section";

export function Resume() {
  return (
    <Section id="resume" eyebrow="Resume" title="Recruiter-ready resume access">
      <div className="resume-strip">
        <div className="flex items-center gap-4">
          <div className="icon-badge">
            <FileText size={22} />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Resume PDF</h3>
            <p className="mt-2 text-mist/64">
              Replace the placeholder file with a redacted resume PDF before publishing.
            </p>
          </div>
        </div>
        <a href={portfolio.resumePath} className="primary-button" download>
          Download
          <Download size={18} />
        </a>
      </div>
    </Section>
  );
}
