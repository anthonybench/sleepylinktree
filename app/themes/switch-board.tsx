"use client";
import { createContext, useState, ReactNode, useContext } from "react";

// Theme Object Schema
type ThemeType = {
  displayName: string;
  codeName: string;
  type: "light" | "dark";
};

//───Themes───────────────────
export const themes: ThemeType[] = [
  { displayName: "Dracula", codeName: "dracula", type: "dark" },
  { displayName: "Nord", codeName: "nord", type: "dark" },
  { displayName: "Solarized Dark", codeName: "solarized-dark", type: "dark" },
  { displayName: "Monokai", codeName: "monokai", type: "dark" },
  { displayName: "Gruvbox Dark", codeName: "gruvbox-dark", type: "dark" },
  {
    displayName: "Solarized Light",
    codeName: "solarized-light",
    type: "light",
  },
  { displayName: "Gruvbox Light", codeName: "gruvbox-light", type: "light" },
  { displayName: "Day One", codeName: "day-one", type: "light" },
];
export const defaultTheme = "dracula"; // use codeName
//────────────────────────────

// Load Themes
async function loadThemes(themes: ThemeType[]) {
  for (const theme of themes) {
    try {
      await import(`@/app/themes/${theme.codeName}.css`);
    } catch (error) {
      console.error(`Failed to load theme ${theme}:`, error);
    }
  }
}
loadThemes(themes);

// Types
interface ThemeContextType {
  theme: string;
  setTheme: (newTheme: string) => void;
}
interface ThemeProviderProps {
  children: ReactNode;
}

// Context & Provider
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>(defaultTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Usage Hook
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// Fetch Utility
export const fetchTheme = (theme: string) => {
  const themeObj = themes.find((t) => t.codeName === theme);
  if (!themeObj) {
    throw new Error(`Theme ${theme} not found`);
  }
  return themeObj;
};
