"use client";
import "@/app/utils/debug.css";
import GithubActivityTracker from "@/app/components/github-activity-tracker";
import GitHubCalendar from "react-github-calendar";
import { useTheme, fetchTheme, codeFont } from "@/app/themes/switch-board";

const simulateThemeType: string = "dark";

export default function Page() {
  const bgColor = simulateThemeType === "dark" ? "bg-dark-200" : "bg-gray-300";
  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen ${bgColor}`}
    >
      {GithubActivityTracker(simulateThemeType)}
    </div>
  );
}
