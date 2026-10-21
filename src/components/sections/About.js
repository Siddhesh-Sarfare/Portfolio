import React from "react";
import { about } from "../../data/content";
import SectionHeading from "../ui/SectionHeading";

const About = () => (
  <section id="about" aria-labelledby="about-title" className="border-t border-line py-20 sm:py-28">
    <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-10">
      <div className="lg:col-span-5">
        <SectionHeading id="about-title" index="01" eyebrow="About" title="Front-end focused, comfortable across the stack." />
      </div>

      <div className="space-y-6 lg:col-span-6 lg:col-start-7 lg:pt-12">
        {about.paragraphs.map((p, i) => (
          <p
            key={i}
            data-reveal
            style={{ "--reveal-delay": `${i * 80}ms` }}
            className={i === 0 ? "text-xl leading-relaxed text-fg sm:text-2xl" : "text-base leading-relaxed text-muted sm:text-lg"}
          >
            {p}
          </p>
        ))}

        <div data-reveal className="pt-6">
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-subtle">I often work with</h3>
          <ul className="mt-4 grid grid-cols-1 border-t border-line sm:grid-cols-2" data-reveal-stagger>
            {about.audiences.map((a, i) => (
              <li
                key={a}
                className="flex items-center justify-between border-b border-line py-4 text-lg text-fg sm:odd:pr-6 sm:even:border-l sm:even:pl-6"
              >
                {a}
                <span aria-hidden="true" className="font-mono text-xs text-subtle">
                  0{i + 1}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default About;
