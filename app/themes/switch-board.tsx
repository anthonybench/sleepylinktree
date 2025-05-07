"use client";
import { createContext, useState, ReactNode, useContext } from "react";

// TODO: later on (now now), find a way to switch `<theme>-card` (and so forth) to `card`, for shorter classname typing in your components

//───Themes───────────────────
export const themes = [
  { displayName: "Dracula", codeName: "dracula" },
  { displayName: "Cyberpunk", codeName: "cyberpunk" },
  { displayName: "Forest", codeName: "forest" },
];
export const defaultTheme = "dracula"; // use codeName
//────────────────────────────

// lLoad Themes
async function loadThemes(themes: { displayName: string; codeName: string }[]) {
  for (const theme of themes) {
    try {
      await import(`@/app/themes/${theme.codeName}.css`);
      console.log(`Loaded theme: ${theme.codeName}`);
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
