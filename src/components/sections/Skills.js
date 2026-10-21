import React from "react";
import { skillGroups } from "../../data/content";
import Icon from "../ui/Icon";
import SectionHeading from "../ui/SectionHeading";

const Skills = () => (
  <section id="skills" aria-labelledby="skills-title" className="border-t border-line py-20 sm:py-28">
    <div className="container-page">
      <SectionHeading
        id="skills-title"
        index="03"
        eyebrow="Skills"
        title="Tools I build with"
        description="Grouped by where I've actually used them — no made-up percentages."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {skillGroups.map((group, gi) => (
          <div
            key={group.title}
            data-reveal
            style={{ "--reveal-delay": `${gi * 70}ms` }}
            className="card flex flex-col p-6"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-elevated text-accent">
                <Icon name={group.icon} className="h-[18px] w-[18px]" />
              </span>
              <h3 className="font-semibold tracking-tight text-fg">{group.title}</h3>
            </div>
            <ul className="mt-5 flex-1" data-reveal-stagger style={{ "--stagger-base": `${gi * 70 + 200}ms` }}>
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className="group/item -mx-2 flex flex-col rounded-lg border-t border-line px-2 py-3 transition-colors first:border-t-0 hover:bg-elevated/70"
                >
                  <span className="text-[0.95rem] text-fg">{item.name}</span>
                  <span className="mt-0.5 font-mono text-[0.72rem] text-subtle transition-colors group-hover/item:text-muted">
                    {item.usedIn}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
