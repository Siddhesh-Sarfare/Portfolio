import React, { useRef, useState } from "react";
import { featuredProjects, otherProjects } from "../../data/content";
import useStackedCards from "../../hooks/useStackedCards";
import DecodeText from "../ui/DecodeText";
import Icon from "../ui/Icon";
import SectionHeading from "../ui/SectionHeading";

const StackList = ({ stack, label }) => (
  <ul className="flex flex-wrap gap-1.5" aria-label={label} data-reveal-stagger style={{ "--stagger-base": "350ms" }}>
    {stack.map((t) => (
      <li key={t} className="chip">
        {t}
      </li>
    ))}
  </ul>
);

const SourceLink = ({ href, title, className = "" }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`group/link inline-flex items-center gap-2 text-sm font-medium text-fg ${className}`}
  >
    <Icon name="github" className="h-4 w-4" />
    <span className="link-underline">View source</span>
    <span className="sr-only">for {title} on GitHub (opens in a new tab)</span>
    <Icon
      name="arrowUpRight"
      className="h-3.5 w-3.5 text-muted transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
    />
  </a>
);

/** Screenshot in a minimal browser frame; falls back to a neutral panel if the image fails. */
const Screenshot = ({ src, alt, title }) => {
  const [failed, setFailed] = useState(false);
  return (
    <div data-reveal="wipe" className="overflow-hidden rounded-xl border border-line bg-elevated">
      <div className="flex h-8 items-center gap-1.5 border-b border-line px-3" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-fg/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-fg/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-fg/15" />
      </div>
      <div className="aspect-[16/9] overflow-hidden bg-white">
        {failed ? (
          <div className="flex h-full items-center justify-center bg-elevated font-mono text-sm text-subtle">{title}</div>
        ) : (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            width="1280"
            height="720"
            onError={() => setFailed(true)}
            className="parallax-img h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        )}
      </div>
    </div>
  );
};

const FeaturedProject = ({ project, index }) => {
  const reversed = index % 2 === 1;
  return (
    <article
      data-reveal
      aria-labelledby={`${project.id}-title`}
      className="card group grid items-center gap-8 p-4 transition-colors duration-300 hover:border-line-strong sm:p-6 lg:grid-cols-12 lg:gap-12 lg:p-8"
    >
      <div className={`lg:col-span-7 ${reversed ? "lg:order-2" : ""}`}>
        <Screenshot src={project.image} alt={project.imageAlt} title={project.title} />
      </div>

      <div className={`px-1 pb-2 sm:px-0 lg:col-span-5 ${reversed ? "lg:order-1" : ""}`}>
        <p className="font-mono text-xs text-subtle">
          <span className="text-accent">0{index + 1}</span> · <DecodeText text={project.kind} delay={200} />
        </p>
        <h3 id={`${project.id}-title`} className="mt-3 text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-3 leading-relaxed text-muted">{project.summary}</p>

        <ul className="mt-6 space-y-2.5" data-reveal-stagger style={{ "--stagger-base": "150ms" }}>
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-sm leading-relaxed text-muted">
              <span aria-hidden="true" className="mt-2 h-1 w-3 shrink-0 rounded-full bg-accent/70" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <StackList stack={project.stack} label={`${project.title} technology stack`} />
        </div>

        <div className="mt-7 border-t border-line pt-5">
          <SourceLink href={project.source} title={project.title} />
        </div>
      </div>
    </article>
  );
};

const OtherProject = ({ project, delay }) => (
  <article
    data-reveal
    style={{ "--reveal-delay": `${delay}ms` }}
    className="card group relative flex flex-col p-6 transition-[border-color,transform] duration-300 ease-out hover:-translate-y-1 hover:border-line-strong"
  >
    <div className="flex items-start justify-between">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-elevated text-accent">
        <Icon name={project.icon} className="h-5 w-5" />
      </span>
      <Icon
        name="arrowUpRight"
        className="h-5 w-5 text-subtle transition-[color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
      />
    </div>
    <h3 className="mt-6 text-lg font-semibold tracking-tight text-fg">
      {/* Stretched link: the whole card is clickable, one tab stop */}
      <a
        href={project.source}
        target="_blank"
        rel="noopener noreferrer"
        className="after:absolute after:inset-0 after:rounded-2xl after:content-[''] focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-accent"
      >
        {project.title}
        <span className="sr-only"> — source on GitHub (opens in a new tab)</span>
      </a>
    </h3>
    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>
    <div className="mt-6">
      <StackList stack={project.stack} label={`${project.title} technology stack`} />
    </div>
  </article>
);

const Projects = () => {
  const stackRef = useRef(null);
  useStackedCards(stackRef);

  return (
  <section id="work" aria-labelledby="work-title" className="border-t border-line bg-surface/40 py-20 sm:py-28">
    <div className="container-page">
      <SectionHeading
        id="work-title"
        index="02"
        eyebrow="Selected work"
        title="Latest work"
        description="Websites built for real organisations, plus a few hardware experiments from along the way."
      />

      {/* Featured cards pin and stack while scrolling on large screens (see .stack-card) */}
      <div ref={stackRef} className="stack-list space-y-6 lg:space-y-8">
        {featuredProjects.map((p, i) => (
          <div key={p.id} className="stack-card relative rounded-2xl" style={{ "--stack-index": i }}>
            <FeaturedProject project={p} index={i} />
            <div aria-hidden="true" className="stack-dim" />
          </div>
        ))}
      </div>

      <h3 data-reveal className="mb-6 mt-16 font-mono text-xs uppercase tracking-[0.18em] text-subtle sm:mt-20">
        More builds
      </h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {otherProjects.map((p, i) => (
          <OtherProject key={p.id} project={p} delay={i * 80} />
        ))}
      </div>
    </div>
  </section>
  );
};

export default Projects;
