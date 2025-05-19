"use client";
import { useTheme, fetchTheme, codeFont } from "@/app/themes/switch-board";
import Header from "@/app/components/header";
import BentoGrid from "@/app/components/bento-grid";
import Image from "next/image";
import { SparklesIcon } from "@heroicons/react/24/solid";

// Image
const GithubOktocat = (themeType: string) => {
  const inverse = themeType === "dark" ? "light" : "dark";
  return (
    <Image
      src={`/sleepylinktree/github-oktocat-${inverse}.svg`}
      alt="SleepyBlog Logo"
      width={80}
      height={80}
    />
  );
};

// "See this site's source" wrapper
const SourceWrapper = () => {
  const theme = useTheme().theme;
  const themeType = fetchTheme(theme).type;
  return (
    <a
      href="https://github.com/anthonybench/sleepylinktree/blob/main/README.md"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={`flex flex-col items-center justify-center pt-8`}>
        {GithubOktocat(themeType)}
        <span className="pt-3">
          <SparklesIcon
            aria-hidden="true"
            className={`${theme}-text-secondary size-5 inline`}
          />{" "}
          <span
            className={`${codeFont.className} ${theme}-text-muted-light text-sm`}
          >
            <em>See this site&apos;s source </em>
          </span>
          <SparklesIcon
            aria-hidden="true"
            className={`${theme}-text-secondary size-5 inline`}
          />
        </span>
      </div>
    </a>
  );
};

export default function Home() {
  const theme = useTheme().theme;
  return (
    <div className={`${theme}-bg-primary py-24 sm:py-32`}>
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <Header />
        <BentoGrid />
      </div>
      <SourceWrapper />
    </div>
  );
}
