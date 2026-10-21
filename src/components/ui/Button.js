import React from "react";
import Icon from "./Icon";

const base =
  "group inline-flex min-h-[2.75rem] items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition-[background-color,border-color,color,transform] duration-200 ease-out active:scale-[0.98]";

const variants = {
  primary: "bg-accent text-accent-on hover:bg-accent-strong",
  secondary: "border border-line-strong text-fg hover:border-accent/60 hover:bg-elevated",
  ghost: "text-muted hover:text-fg",
};

/**
 * Anchor-styled button. Renders an <a> (all CTAs here navigate somewhere);
 * external links open in a new tab with safe rel attributes.
 */
const Button = ({ href, variant = "primary", icon, external = false, className = "", children, ...rest }) => (
  <a
    href={href}
    className={`${base} ${variants[variant]} ${className}`}
    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    {...rest}
  >
    {children}
    {icon && (
      <Icon
        name={icon}
        className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    )}
  </a>
);

export default Button;
