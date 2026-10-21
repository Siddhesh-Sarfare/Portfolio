import React from "react";
import { navLinks, profile } from "../../data/content";
import SocialLinks from "../ui/SocialLinks";

const Footer = () => (
  <footer className="border-t border-line py-10">
    <div className="container-page flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="font-mono text-sm text-fg">
          siddhesh<span className="text-accent">.</span>sarfare
        </p>
        <p className="mt-1 text-sm text-subtle">
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind CSS.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} className="text-sm text-muted transition-colors hover:text-fg">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <SocialLinks className="-mr-3" />
      </div>
    </div>
  </footer>
);

export default Footer;
