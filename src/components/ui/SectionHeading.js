import React from "react";
import DecodeText from "./DecodeText";

const SectionHeading = ({ index, eyebrow, title, description, id }) => (
  <div className="mb-10 max-w-2xl sm:mb-14" data-reveal>
    <p className="eyebrow flex items-center gap-3">
      <span className="text-subtle">{index}</span>
      <span aria-hidden="true" className="h-px w-8 bg-accent/50" />
      <DecodeText text={eyebrow} />
    </p>
    <h2 id={id} className="reveal-blur mt-4 text-heading font-semibold text-fg">
      {title}
    </h2>
    {description && <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{description}</p>}
  </div>
);

export default SectionHeading;
