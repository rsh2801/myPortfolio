import { useTheme } from "../../hooks/useTheme.js";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative rounded-xl p-3 transition-colors duration-200 hover:bg-primary-100 dark:hover:bg-border-dark"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <FiSun className="h-7 w-7 text-yellow-400" />
      ) : (
        <FiMoon className="h-7 w-7 text-primary-600" />
      )}
    </button>
  );
}
