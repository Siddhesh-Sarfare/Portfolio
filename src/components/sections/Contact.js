import React, { useEffect, useRef, useState } from "react";
import grain from "../../assets/hero_background.webp";
import { profile, socials } from "../../data/content";
import Button from "../ui/Button";
import DecodeText from "../ui/DecodeText";
import Icon from "../ui/Icon";

const CopyEmail = () => {
  const [status, setStatus] = useState("idle"); // idle | copied | failed
  const timer = useRef();

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setStatus("copied");
    } catch (e) {
      setStatus("failed");
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus("idle"), 2200);
  };

  return (
    <>
      <button
        type="button"
        onClick={copy}
        className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line-strong text-muted transition-colors duration-200 hover:border-accent/60 hover:text-fg"
        aria-label="Copy email address"
        title="Copy email address"
      >
        <Icon name={status === "copied" ? "check" : "copy"} className="h-4 w-4" />
      </button>
      <span role="status" aria-live="polite" className="font-mono text-xs text-accent">
        {status === "copied" && "Copied to clipboard"}
        {status === "failed" && "Couldn't copy — select the address instead"}
      </span>
    </>
  );
};

const Contact = () => (
  <section id="contact" aria-labelledby="contact-title" className="border-t border-line py-20 sm:py-28">
    <div className="container-page">
      <div data-reveal className="card relative overflow-hidden rounded-3xl px-6 py-14 sm:px-12 sm:py-20 lg:px-16">
        <img src={grain} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-[0.08] mix-blend-luminosity" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
        />

        <div className="relative grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow flex items-center gap-3">
              <span className="text-subtle">04</span>
              <span aria-hidden="true" className="h-px w-8 bg-accent/50" />
              Contact
            </p>
            <h2 id="contact-title" className="mt-5 font-mono text-display font-bold uppercase text-fg">
              <DecodeText text="Get in" delay={150} />
              <br />
              <DecodeText text="touch" delay={300} />
              <span className="text-accent">.</span>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              Have a project in mind or a question about my work? Email is the quickest way to reach me.
            </p>
          </div>

          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-subtle">Email</p>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="link-underline font-mono text-base text-fg [overflow-wrap:anywhere] sm:text-lg"
              >
                {/* Let long addresses wrap before the "@" rather than mid-word */}
                {profile.email.split("@")[0]}
                <wbr />@{profile.email.split("@")[1]}
              </a>
              <CopyEmail />
            </div>

            <div className="mt-8">
              <Button href={`mailto:${profile.email}`} icon="arrowUpRight" className="w-full sm:w-auto">
                Send me an email
              </Button>
            </div>

            <ul className="mt-10 border-t border-line">
              {socials.map(({ label, handle, href, icon }) => (
                <li key={label} className="border-b border-line">
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex min-h-[3.25rem] items-center gap-3 text-muted transition-colors hover:text-fg"
                  >
                    <Icon name={icon} className="h-4 w-4" />
                    <span className="text-sm">{label}</span>
                    <span className="ml-auto truncate font-mono text-xs text-subtle">{handle}</span>
                    <Icon
                      name="arrowUpRight"
                      className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
