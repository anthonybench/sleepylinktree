"use client";
import { useState } from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { useTheme } from "@/app/themes/switch-board";
import ThemeSelector from "@/app/components/theme-selector";
import ResumeModal from "../components/resume-modal";

const Header = () => {
  const theme = useTheme().theme;
  const [resumeOpen, setResumeOpen] = useState(false);
  return (
    <div className="flex flex-col justify-end w-full">
      <div className="md:flex md:justify-between">
        <span
          className={`${theme}-text-primary mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight sm:text-5xl`}
        >
          Hi, I&apos;m Isaac 👋
        </span>
        <span
          className={`${theme}-text-secondary hidden lg:inline mt-10 text-pretty font-semibold tracking-tight`}
        >
          <code>
            <SparklesIcon
              aria-hidden="true"
              className={`${theme}-text-primary size-5 inline`}
            />
            <button
              onClick={() => setResumeOpen(true)}
              className=" px-1 rounded"
            >
              <em>fetch_resume()</em>
            </button>
            <SparklesIcon
              aria-hidden="true"
              className={`${theme}-text-primary size-5 inline`}
            />
          </code>
          <ResumeModal open={resumeOpen} setOpen={setResumeOpen} />
        </span>
        <span className="mt-5 sm:w-4/12 md:w-5/12 lg:w-4/12 text-pretty font-semibold tracking-tight">
          <ThemeSelector />
        </span>
      </div>
    </div>
  );
};
export default Header;
