import { useEffect } from "react";

// Keep in sync with the .stack-card media query in index.css
const QUERY = "(min-width: 1024px) and (min-height: 760px) and (prefers-reduced-motion: no-preference)";

/**
 * Drives the stacking effect for sticky cards inside `containerRef`.
 * For each card, sets --stack-p (0–1): how far the next card has slid over it.
 * CSS turns that into scale + dimming. No-ops when the media query fails.
 */
const useStackedCards = (containerRef) => {
  useEffect(() => {
    const container = containerRef.current;
    const mq = window.matchMedia?.(QUERY);
    if (!container || !mq) return undefined;

    const cards = [...container.querySelectorAll(".stack-card")];
    let frame = 0;

    const update = () => {
      frame = 0;
      cards.forEach((card, i) => {
        const next = cards[i + 1];
        if (!next || !mq.matches) {
          card.style.setProperty("--stack-p", "0");
          return;
        }
        const top = parseFloat(getComputedStyle(card).top) || 0;
        const h = card.offsetHeight;
        // distance of the next card from this card's pinned position, normalised by card height
        const p = 1 - (next.getBoundingClientRect().top - top) / h;
        card.style.setProperty("--stack-p", Math.min(1, Math.max(0, p)).toFixed(3));
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    mq.addEventListener?.("change", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      mq.removeEventListener?.("change", onScroll);
    };
  }, [containerRef]);
};

export default useStackedCards;
