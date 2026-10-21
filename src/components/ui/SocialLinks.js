import React from "react";
import { socials } from "../../data/content";
import Icon from "./Icon";

const SocialLinks = ({ className = "" }) => (
  <ul className={`flex items-center gap-1 ${className}`}>
    {socials.map(({ label, href, icon }) => (
      <li key={label}>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${label} (opens in a new tab)`}
          title={label}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-muted transition-colors duration-200 hover:bg-elevated hover:text-fg"
        >
          <Icon name={icon} className="h-[18px] w-[18px]" />
        </a>
      </li>
    ))}
  </ul>
);

export default SocialLinks;
