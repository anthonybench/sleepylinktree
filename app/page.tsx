"use client";
import { useTheme } from "@/app/themes/switch-board";
import Monolith from "./components/monolith";
// import Header from "./components/header";

export default function Home() {
  const theme = useTheme();
  return (
    <>
      <Monolith />
    </>
  );
}
