import React, { useEffect, useLayoutEffect, useRef } from "react";
import useInView from "../../hooks/useInView";

const GLYPHS = "!<>-_/[]{}=+*^?#01";
const DURATION = 700; // ms for the whole string to resolve

const prefersReducedMotion = () =>
  typeof window === "undefined" || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

const scramble = (chars, resolved) =>
  chars.map((c, i) => (i < resolved || c === " " ? c : GLYPHS[(Math.random() * GLYPHS.length) | 0])).join("");

/**
 * "Decrypts" text from random glyphs, resolving left to right.
 * Intended for monospace text so the width never changes (no layout shift).
 * Screen readers get the real text via an sr-only copy; the animated copy is
 * aria-hidden and its content is managed outside React (no per-frame renders).
 */
const DecodeText = ({ text, delay = 0, trigger = "view", className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { enabled: trigger === "view" });
  const start = trigger === "mount" || inView;

  // Before first paint: final text if motion is off, otherwise a scrambled placeholder
  useLayoutEffect(() => {
    if (ref.current) ref.current.textContent = prefersReducedMotion() ? text : scramble([...text], 0);
  }, [text]);

  useEffect(() => {
    const el = ref.current;
    if (!el || !start) return undefined;
    if (prefersReducedMotion()) {
      el.textContent = text;
      return undefined;
    }

    const chars = [...text];
    let frame;
    let t0;
    const tick = (now) => {
      if (t0 === undefined) t0 = now + delay;
      const p = Math.min(1, Math.max(0, (now - t0) / DURATION));
      // ease-out so the tail of the word settles gently
      const resolved = Math.floor((1 - (1 - p) ** 2) * chars.length);
      el.textContent = p >= 1 ? text : scramble(chars, resolved);
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      el.textContent = text;
    };
  }, [start, text, delay]);

  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <span ref={ref} aria-hidden="true" />
    </span>
  );
};

export default DecodeText;
