import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "theme";

const readTheme = () => document.documentElement.getAttribute("data-theme") || "dark";

/**
 * The initial theme is applied by an inline script in public/index.html
 * (stored choice, else system preference) to avoid a flash on load.
 */
const useTheme = () => {
  const [theme, setTheme] = useState(readTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "light" ? "#f7f7f5" : "#0b0d10");
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch (e) {
        /* storage unavailable (private mode) — theme still applies for this visit */
      }
      return next;
    });
  }, []);

  return { theme, toggle };
};

export default useTheme;
