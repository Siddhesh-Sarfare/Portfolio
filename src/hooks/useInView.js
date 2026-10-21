import { useEffect, useState } from "react";

/**
 * One-shot visibility flag: becomes true the first time `ref` enters the
 * viewport and stays true. Without IntersectionObserver it is true at once.
 */
const useInView = (ref, { rootMargin = "0px 0px -10% 0px", enabled = true } = {}) => {
  const [inView, setInView] = useState(() => typeof window === "undefined" || !("IntersectionObserver" in window));

  useEffect(() => {
    if (!enabled || inView || !ref.current) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, rootMargin, enabled, inView]);

  return inView;
};

export default useInView;
