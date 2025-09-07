import { useState, useCallback, useEffect } from "react";
import { trackThemeToggle } from "@/utils/analytics";

export type ThemeMode = "light" | "dark";

interface UseThemeModeReturn {
  mode: ThemeMode;
  toggleMode: () => void;
  setMode: (mode: ThemeMode) => void;
  isDark: boolean;
  isLight: boolean;
}

export const useThemeMode = (
  initialMode: ThemeMode = "light"
): UseThemeModeReturn => {
  const [mode, setModeState] = useState<ThemeMode>(initialMode);

  // Toggle between light and dark
  const toggleMode = useCallback(() => {
    setModeState((prevMode) => {
      const newMode = prevMode === "dark" ? "light" : "dark";
      trackThemeToggle(newMode);
      return newMode;
    });
  }, []);

  // Set specific mode
  const setMode = useCallback((newMode: ThemeMode) => {
    setModeState(newMode);
  }, []);

  // Save to localStorage whenever mode changes
  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  // Load from localStorage on initial mount
  useEffect(() => {
    const savedMode = localStorage.getItem("themeMode") as ThemeMode;
    if (savedMode && (savedMode === "light" || savedMode === "dark")) {
      setModeState(savedMode);
    } else {
      // If no saved preference, check system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setModeState(prefersDark ? "dark" : "light");
    }
  }, []);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if user hasn't manually set a preference
      const savedMode = localStorage.getItem("themeMode");
      if (!savedMode) {
        setModeState(e.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return {
    mode,
    toggleMode,
    setMode,
    isDark: mode === "dark",
    isLight: mode === "light",
  };
};
