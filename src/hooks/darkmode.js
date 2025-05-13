import { useState, useEffect } from "react";

export default function useDarkMode() {
  // 1. On init, read from localStorage (or fall back to system preference)
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("darkMode");
      if (stored !== null) return JSON.parse(stored);
      // fallback: respect the user’s OS setting if no preference saved
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  // 2. Whenever darkMode changes, toggle the class + persist
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return [darkMode, setDarkMode];
}
