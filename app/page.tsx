"use client";
import { useTheme } from "@/app/themes/switch-board";
import BentoGrid from "./components/bento-grid";
import Header from "./components/header";

export default function Home() {
  const theme = useTheme();
  return (
    <>
      <Header />
      <BentoGrid />
    </>
  );
}
