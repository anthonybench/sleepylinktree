import { useTheme } from "@/app/themes/switch-board";

export default function Page() {
  const theme = useTheme().theme;
  return (
    <div
      className={`${theme}-something flex h-screen w-screen items-center justify-center bg-gray-900`}
    >
      Hello, World!
    </div>
  );
}
