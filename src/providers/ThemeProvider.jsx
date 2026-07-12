import { useEffect, useMemo, useState } from "react";
import ThemeContext from "../context/ThemeContext";

const STORAGE_KEY = "skyvoyage-theme";

const getSystemTheme = () => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const ThemeProvider = ({ children }) => {
  // User selected theme: light | dark | system
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem(STORAGE_KEY) || "system";
  });

  // Actual theme applied to website
  const [currentTheme, setCurrentTheme] = useState("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = () => {
      const activeTheme =
        theme === "system" ? getSystemTheme() : theme;

      setCurrentTheme(activeTheme);

      document.documentElement.setAttribute(
        "data-theme",
        activeTheme
      );
    };

    applyTheme();

    const handleChange = () => {
      if (theme === "system") {
        applyTheme();
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [theme]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      currentTheme,
      setTheme,
      isDark: currentTheme === "dark",
    }),
    [theme, currentTheme]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;