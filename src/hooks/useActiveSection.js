import { useEffect, useState } from "react";

/**
 * Returns the id of the section currently under the header,
 * for the active navigation indicator.
 */
const useActiveSection = (ids) => {
  const [active, setActive] = useState("");
  const key = ids.join(",");

  useEffect(() => {
    const sections = key
      .split(",")
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length || !("IntersectionObserver" in window)) return undefined;

    const visible = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => visible.set(e.target.id, e.isIntersecting));
        const current = sections.find((s) => visible.get(s.id));
        setActive(current ? current.id : "");
      },
      // A thin band ~35% down the viewport decides which section is "current"
      { rootMargin: "-35% 0px -60% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [key]);

  return active;
};

export default useActiveSection;
