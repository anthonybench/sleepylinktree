import { useTheme, fetchTheme, codeFont } from "@/app/themes/switch-board";
import GithubActivityTracker from "@/app/components/github-activity-tracker";
import Image from "next/image";
import "@/app/utils/debug.css";

// Utilities
const BuiltWith = (tools: string[]) => {
  const theme = useTheme().theme;
  return (
    <em>
      Built with{" "}
      {tools.map((tool, index) => (
        <span key={tool}>
          <code className={`${theme}-text-primary ${codeFont.className}`}>
            <em>{tool}</em>
          </code>
          {index < tools.length - 1 ? ", " : ""}
        </span>
      ))}
      .
    </em>
  );
};

// Images
const SleepyBlogLogo = (themeType: string) => {
  return (
    <Image
      src={`/sleepylinktree/sleepyboy-technologist-${themeType}.png`}
      alt="SleepyBlog Logo"
      width={1100}
      height={1100}
      className="h-80 object-cover object-left"
    />
  );
};

const PyPILogo = () => {
  return (
    <Image
      src={`/sleepylinktree/pypi-logo.png`}
      alt="PyPI Logo"
      width={1100}
      height={1100}
      className="h-80 object-cover pl-1"
    />
  );
};

const LinkedInLogo = () => {
  return (
    <Image
      src={`/sleepylinktree/linkedin-in-blue.png`}
      alt="LinkedIn Logo"
      width={1100}
      height={1100}
      className="h-80 object-cover"
    />
  );
};

// Grid
const BentoGrid = () => {
  const theme = useTheme().theme;
  const themeType = fetchTheme(theme).type;

  const sleepyblogURL = "https://sleepyblog.org";
  const linkedinURL = "https://linkedin.com/in/anthonybench";
  const githubURL = "https://github.com/anthonybench";
  const pypiURL = "https://pypi.org/user/sleepyboy";
  return (
    <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
      {/* sleepyblog cell */}
      <div className="flex p-px lg:col-span-4">
        <div
          className={`overflow-hidden rounded-lg ${theme}-bg-secondary ${theme}-bento-item-outline max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]`}
        >
          <a href={sleepyblogURL} target="_blank" rel="noopener noreferrer">
            {SleepyBlogLogo(themeType)}
          </a>
          <div className="p-10">
            <h3 className={`text-sm/4 font-semibold ${theme}-text-secondary`}>
              SleepyBlog
            </h3>
            <p
              className={`mt-2 text-lg font-medium tracking-tight ${theme}-text-primary`}
            >
              My personal blog
            </p>
            <p className={`mt-2 max-w-lg text-sm/6 ${theme}-text-muted-light`}>
              My partner and I built a house on 5 acres of forest, check out our
              journey, along with my furniture gallery, software projects, and
              more!
              <br />
              {BuiltWith(["Next.js", "Tailwind", "Gray-Matter", "Remark"])}
            </p>
          </div>
        </div>
      </div>
      {/* linkedin cell */}
      <div className="flex p-px lg:col-span-2">
        <div
          className={`overflow-hidden rounded-lg ${theme}-bg-secondary ${theme}-bento-item-outline lg:rounded-tr-[2rem]`}
        >
          <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
            {LinkedInLogo()}
          </a>
          <div className="p-10">
            <h3 className={`text-sm/4 font-semibold ${theme}-text-secondary`}>
              LinkedIn
            </h3>
            <p
              className={`mt-2 text-lg font-medium tracking-tight ${theme}-text-primary`}
            >
              Join my professional network!
            </p>
            <p className={`mt-2 max-w-lg text-sm/6 ${theme}-text-muted-light`}>
              Connect with me on LinkedIn to reach out for career opportunities,
              or view my career at a glance.
            </p>
          </div>
        </div>
      </div>
      {/* pypi cell */}
      <div className="flex p-px lg:col-span-2">
        <div
          className={`overflow-hidden rounded-lg ${theme}-bg-secondary ${theme}-bento-item-outline lg:rounded-bl-[2rem]`}
        >
          <a href={pypiURL} target="_blank" rel="noopener noreferrer">
            {PyPILogo()}
          </a>
          <div className="p-10">
            <h3 className={`text-sm/4 font-semibold ${theme}-text-secondary`}>
              PyPI
            </h3>
            <p
              className={`mt-2 text-lg font-medium tracking-tight ${theme}-text-primary`}
            >
              My Python packages
            </p>
            <p className={`mt-2 max-w-lg text-sm/6 ${theme}-text-muted-light`}>
              Check out my published python utilities, including tooling to
              summarize data files and file metadata, handling Jira tickets in
              the command line and more!
            </p>
          </div>
        </div>
      </div>
      {/* github cell */}
      <div className="flex p-px lg:col-span-4">
        <div
          className={`overflow-hidden rounded-lg ${theme}-bg-secondary ${theme}-bento-item-outline max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]`}
        >
          <a
            href={githubURL}
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            {/* {GithubLogo(themeType)} */}
            {GithubActivityTracker(themeType)}
          </a>
          <div className="p-10">
            <h3 className={`text-sm/4 font-semibold ${theme}-text-secondary`}>
              GitHub
            </h3>
            <p
              className={`mt-2 text-lg font-medium tracking-tight ${theme}-text-primary`}
            >
              My GitHub profile
            </p>
            <p className={`mt-2 max-w-lg text-sm/6 ${theme}-text-muted-light`}>
              Check out my open source projects and contributions. This site is
              hosted on GitHub Pages, and built with Next.js, Tailwind CSS, and
              more!
              <br />
              {BuiltWith(["Next.js", "Tailwind"])}
            </p>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};
export default BentoGrid;
