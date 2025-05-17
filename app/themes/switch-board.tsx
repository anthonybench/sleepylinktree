"use client";
import { createContext, useState, ReactNode, useContext } from "react";
import { JetBrains_Mono, Comfortaa } from "next/font/google";

// Theme Object Schema
type ThemeType = {
  displayName: string;
  codeName: string;
  type: "light" | "dark";
};

//───⚙️ CONFIG────────────────
// Color Themes
export const themes: ThemeType[] = [
  // codeName must match the file name minus the extension
  { displayName: "Nord", codeName: "nord", type: "dark" },
  { displayName: "Dracula", codeName: "dracula", type: "dark" },
  { displayName: "Solarized Dark", codeName: "solarized-dark", type: "dark" },
  { displayName: "Monokai", codeName: "monokai", type: "dark" },
  {
    displayName: "Solarized Light",
    codeName: "solarized-light",
    type: "light",
  },
  { displayName: "Gruvbox", codeName: "gruvbox", type: "light" },
  { displayName: "Day One", codeName: "day-one", type: "light" },
];
export const defaultTheme = "nord"; // use codeName

// Fonts
const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
});
const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});
const defaultFont = comfortaa;
export const codeFont = jetBrainsMono;
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
      <body
        className={`${defaultFont.className} antialiased ${theme}-bg-primary`}
      >
        {children}
      </body>
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
