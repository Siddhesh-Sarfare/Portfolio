import { useEffect } from "react";

/**
 * Animates [data-reveal] elements as they enter the viewport.
 *   data-reveal         → fade + rise (default)
 *   data-reveal="wipe"  → clip-path wipe, used for screenshots
 *   data-reveal-stagger → children animate one after another (--i index)
 * Elements stay fully visible if IntersectionObserver is unsupported;
 * reduced-motion users get no movement (handled in CSS).
 */
const useReveal = () => {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return undefined;

    const root = document.documentElement;
    root.classList.add("js-reveal");

    document.querySelectorAll("[data-reveal-stagger]").forEach((group) => {
      [...group.children].forEach((child, i) => child.style.setProperty("--i", i));
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    document.querySelectorAll("[data-reveal], [data-reveal-stagger]").forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      root.classList.remove("js-reveal");
    };
  }, []);
};

export default useReveal;
