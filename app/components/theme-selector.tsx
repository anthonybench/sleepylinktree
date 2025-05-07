import { useTheme, themes } from "@/app/themes/switch-board";

const ThemeSelector = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <>
      <p>Current Theme: {theme}</p>
      <ul>
        {themes.map((theme) => (
          <li key={theme.codeName}>
            <button onClick={() => handleThemeChange(theme.codeName)}>
              {theme.displayName}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ThemeSelector;
