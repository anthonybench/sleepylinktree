"use client";
import { useTheme } from "@/app/themes/switch-board";
import ThemeSelector from "@/app/components/theme-selector";

const Header = () => {
  const theme = useTheme().theme;
  return (
    <div className={``}>
      <span>Hi, I'm Isaac</span>
      <span>links...</span>
      <ThemeSelector />
    </div>
  );
};
export default Header;
