"use client";
import { useTheme } from "@/app/themes/switch-board";
import Header from "@/app/components/header";
import BentoGrid from "@/app/components/bento-grid";

export default function Home() {
  const theme = useTheme().theme;
  return (
    <div className={`${theme}-bg-primary py-24 sm:py-32`}>
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <Header />
        <BentoGrid />
      </div>
    </div>
  );
}
