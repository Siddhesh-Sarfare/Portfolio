import React from "react";
import grain from "../../assets/hero_background.webp";
import portrait from "../../assets/profile-cutout.webp";
import { profile } from "../../data/content";
import Button from "../ui/Button";
import DecodeText from "../ui/DecodeText";
import Icon from "../ui/Icon";
import SocialLinks from "../ui/SocialLinks";

const rise = (ms) => ({ "--rise-delay": `${ms}ms` });

const Hero = () => (
  <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
    {/* Background: faint grid + a single soft accent glow */}
    <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0" />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[56rem] max-w-[140vw] -translate-x-1/2 rounded-full bg-accent/[0.07] blur-3xl"
    />

    <div className="container-page relative grid items-center gap-12 pb-16 sm:pb-20 lg:grid-cols-12 lg:gap-10 lg:pb-28">
      <div className="lg:col-span-7">
        <p className="animate-rise eyebrow flex items-center gap-3" style={rise(0)}>
          <span
            aria-hidden="true"
            className="h-2 w-2 rounded-full bg-accent"
            style={{ animation: "pulse-dot 2.4s ease-in-out infinite" }}
          />
          {profile.role}
        </p>

        <h1 id="hero-title" className="animate-rise mt-6 font-mono text-display font-bold text-fg" style={rise(80)}>
          <DecodeText text="Siddhesh" trigger="mount" delay={250} />
          <br />
          <DecodeText text="Sarfare" trigger="mount" delay={400} className="text-muted" />
          <span className="text-accent">.</span>
        </h1>

        <p className="animate-rise mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl" style={rise(160)}>
          {profile.intro}
        </p>

        <div className="animate-rise mt-9 flex flex-wrap items-center gap-3" style={rise(240)}>
          <Button href="#work" icon="arrowDown">
            Explore my work
          </Button>
          <Button href="#contact" variant="secondary">
            Get in touch
          </Button>
        </div>

        <div className="animate-rise mt-10 flex items-center gap-4" style={rise(320)}>
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-subtle">Find me on</span>
          <span aria-hidden="true" className="h-px w-8 bg-elevated" />
          <SocialLinks />
        </div>
      </div>

      {/* Portrait — the original hero's grain backdrop and cyan band, reframed */}
      <div className="animate-rise mx-auto w-full max-w-sm sm:max-w-md lg:col-span-5 lg:max-w-none" style={rise(200)}>
        <figure className="relative">
          <div className="card relative aspect-square overflow-hidden sm:aspect-[4/5] rounded-3xl">
            <img src={grain} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-luminosity" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg/40" />
            <img
              src={portrait}
              alt={`Black-and-white portrait of ${profile.name} smiling, wearing sunglasses and a dark jacket`}
              width="720"
              height="631"
              fetchpriority="high"
              className="absolute inset-x-0 bottom-0 mx-auto w-[112%] max-w-none -translate-x-[5%] object-contain object-bottom"
            />
            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2 bg-accent" />
          </div>
          <figcaption className="mt-4 flex items-center justify-between font-mono text-xs text-subtle">
            <span>{profile.name}</span>
            <span>Frontend · Web</span>
          </figcaption>
        </figure>
      </div>
    </div>

    <div className="container-page relative hidden pb-10 lg:block">
      <a
        href="#about"
        className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-subtle transition-colors hover:text-fg"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line transition-colors group-hover:border-accent/60">
          <Icon name="arrowDown" className="h-4 w-4" />
        </span>
        Scroll to learn more
      </a>
    </div>
  </section>
);

export default Hero;
