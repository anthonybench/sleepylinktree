/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import "@/app/utils/debug.css";
import GitHubCalendar from "react-github-calendar";
import { codeFont } from "@/app/themes/switch-board";

// Utils
const selectLastHalfYear = (contributions: any) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const shownMonths = 6;

  return contributions.filter((activity: any) => {
    const date = new Date(activity.date);
    const monthOfDay = date.getMonth();

    return (
      date.getFullYear() === currentYear &&
      monthOfDay > currentMonth - shownMonths &&
      monthOfDay <= currentMonth
    );
  });
};

const selectLastQuarter = (contributions: any) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const shownMonths = 3;

  return contributions.filter((activity: any) => {
    const date = new Date(activity.date);
    const monthOfDay = date.getMonth();

    return (
      date.getFullYear() === currentYear &&
      monthOfDay > currentMonth - shownMonths &&
      monthOfDay <= currentMonth
    );
  });
};

const GithubActivityTracker = (themeType: any) => {
  const trackerColorThemes = {
    light: ["#CFD1E4", "#AFF0FE", "#68E1FB", "#21D0F5", "#08A0C0"],
    dark: ["#292B36", "#6914E0", "#924EF3", "#BC93F9", "#E8DBFE"],
  };
  const textColor = themeType === "dark" ? "#ffffff" : "#000000";
  return (
    <>
      {/* desktop */}
      <div
        className={`${codeFont.className} h-80 object-cover object-left parent grid place-items-center hidden lg:flex`}
      >
        <GitHubCalendar
          username="anthonybench"
          theme={trackerColorThemes}
          transformData={selectLastHalfYear}
          hideMonthLabels
          hideColorLegend
          colorScheme={themeType}
          blockSize={30}
          style={{
            color: textColor,
            paddingLeft: "4rem",
            paddingRight: "4rem",
          }}
          labels={{
            totalCount: "{{count}} contributions in the last 6 months",
          }}
        />
      </div>
      {/* tablet */}
      <div
        className={`${codeFont.className} h-80 object-cover object-left parent grid place-items-center hidden md:flex lg:hidden`}
      >
        <GitHubCalendar
          username="anthonybench"
          theme={trackerColorThemes}
          transformData={selectLastHalfYear}
          hideMonthLabels
          hideColorLegend
          colorScheme={themeType}
          blockSize={25}
          style={{
            color: textColor,
            paddingLeft: "1rem",
            paddingRight: "1rem",
          }}
          labels={{
            totalCount: "{{count}} contributions in the last 6 months",
          }}
        />
      </div>
      {/* phone */}
      <div
        className={`${codeFont.className} h-80 object-cover object-left parent grid place-items-center md:hidden`}
      >
        <GitHubCalendar
          username="anthonybench"
          theme={trackerColorThemes}
          transformData={selectLastQuarter}
          hideMonthLabels
          hideColorLegend
          colorScheme={themeType}
          blockSize={25}
          style={{
            color: textColor,
            paddingLeft: "1rem",
            paddingRight: "4rem",
          }}
          labels={{
            totalCount: "{{count}} contributions last quarter",
          }}
        />
      </div>
    </>
  );
};
export default GithubActivityTracker;
