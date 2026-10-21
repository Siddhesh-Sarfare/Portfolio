import React, { useCallback, useEffect, useRef, useState } from "react";
import avatar from "../../assets/avatar.webp";
import { navLinks, profile } from "../../data/content";
import useActiveSection from "../../hooks/useActiveSection";
import DecodeText from "../ui/DecodeText";
import Icon from "../ui/Icon";
import ThemeToggle from "./ThemeToggle";

const sectionIds = navLinks.map((l) => l.id);

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);
  const menuButtonRef = useRef(null);
  const panelRef = useRef(null);

  const close = useCallback((returnFocus = false) => {
    setOpen(false);
    if (returnFocus) menuButtonRef.current?.focus();
  }, []);

  // Header gains a background once the page scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile menu: Escape / outside click / desktop resize close it; body scroll locks while open
  useEffect(() => {
    if (!open) return undefined;

    const onKey = (e) => e.key === "Escape" && close(true);
    const onPointer = (e) => {
      if (!panelRef.current?.contains(e.target) && !menuButtonRef.current?.contains(e.target)) close();
    };
    const mq = window.matchMedia?.("(min-width: 768px)");
    const onMq = (e) => e.matches && close();

    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    mq?.addEventListener?.("change", onMq);
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector("a")?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      mq?.removeEventListener?.("change", onMq);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${
        // No backdrop-filter while the menu is open: it would become the containing block for the fixed panel
        open ? "border-line bg-bg" : solid ? "border-line bg-bg/80 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      {/* Reading progress (CSS scroll-driven; hidden where unsupported) */}
      <div aria-hidden="true" className="scroll-progress absolute inset-x-0 bottom-0 h-px bg-accent" />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-sm focus:text-accent-on"
      >
        Skip to content
      </a>

      <nav aria-label="Primary" className="container-page flex h-16 items-center justify-between gap-4">
        <a href="#top" className="group flex items-center gap-3 rounded-full" aria-label={`${profile.name} — back to top`}>
          <img
            src={avatar}
            alt=""
            width="32"
            height="32"
            className="h-8 w-8 rounded-full bg-elevated object-cover ring-1 ring-line grayscale transition duration-300 group-hover:grayscale-0"
          />
          <span className="font-mono text-sm font-medium tracking-tight text-fg">
            <DecodeText text="siddhesh" trigger="mount" />
            <span className="text-accent">.</span>
            <DecodeText text="sarfare" trigger="mount" delay={120} />
          </span>
        </a>

        <div className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map(({ id, label }) => {
              const isActive = active === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    aria-current={isActive ? "location" : undefined}
                    className={`relative rounded-full px-3.5 py-2 text-sm transition-colors duration-200 ${
                      isActive ? "text-fg" : "text-muted hover:text-fg"
                    }`}
                  >
                    {label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-3.5 -bottom-px h-px origin-left bg-accent transition-transform duration-300 ease-out ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
          <span aria-hidden="true" className="mx-2 hidden h-5 w-px bg-elevated md:block" />
          <ThemeToggle />
          <a
            href="#contact"
            className="ml-2 hidden h-9 items-center rounded-full bg-fg px-4 text-sm font-medium text-bg transition-opacity duration-200 hover:opacity-85 md:inline-flex"
          >
            Get in touch
          </a>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-fg transition-colors hover:bg-elevated md:hidden"
          >
            <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto border-t border-line bg-bg md:hidden"
      >
        <ul className="container-page flex flex-col py-3">
          {navLinks.map(({ id, label }, i) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => close()}
                aria-current={active === id ? "location" : undefined}
                className={`flex min-h-[3rem] items-center justify-between border-b border-line text-lg ${
                  active === id ? "text-fg" : "text-muted"
                }`}
              >
                <span>{label}</span>
                <span className="font-mono text-xs text-subtle">0{i + 1}</span>
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a
              href="#contact"
              onClick={() => close()}
              className="flex min-h-[3rem] items-center justify-center rounded-full bg-accent font-medium text-accent-on"
            >
              Get in touch
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
