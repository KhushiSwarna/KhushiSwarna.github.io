import { Sparkles } from "lucide-react";
import { portfolio } from "../data/portfolio";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A technical foundation with a product-minded edge">
      <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="panel p-7 sm:p-8 lg:col-span-2">
          <p className="text-lg leading-8 text-mist/82">{portfolio.summary}</p>
          <p className="mt-5 text-base leading-7 text-mist/66">{portfolio.interests}</p>
        </div>

        
      </div>
    </Section>
  );
}
