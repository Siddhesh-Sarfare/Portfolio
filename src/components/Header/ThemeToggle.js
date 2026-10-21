import React from "react";
import useTheme from "../../hooks/useTheme";
import Icon from "../ui/Icon";

const ThemeToggle = () => {
  const { theme, toggle } = useTheme();
  const next = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full text-muted transition-colors duration-200 hover:bg-elevated hover:text-fg md:h-9 md:w-9"
    >
      <Icon name={theme === "dark" ? "sun" : "moon"} className="h-[18px] w-[18px]" />
    </button>
  );
};

export default ThemeToggle;
