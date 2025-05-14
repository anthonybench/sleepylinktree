import { useTheme, fetchTheme, codeFont } from "@/app/themes/switch-board";
import Image from "next/image";

// "built with" util
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
      src={`/sleepyboy-technologist-${themeType}.png`}
      alt="SleepyBlog Logo"
      width={1100}
      height={1100}
      className="h-80 object-cover object-left"
    />
  );
};

const GithubLogo = (themeType: string) => {
  const inverse = themeType === "dark" ? "light" : "dark";
  return (
    <Image
      src={`/github-full-${inverse}.svg`}
      alt="GitHub Logo"
      width={1100}
      height={1100}
      className="h-80 object-cover object-left"
    />
  );
};

const PyPILogo = (themeType: string) => {
  // const inverse = themeType === "dark" ? "light" : "dark"; //can only find dark one...
  return (
    <Image
      src={`/pypi-full-dark.png`}
      alt="PyPI Logo"
      width={1100}
      height={1100}
      className="h-80 object-cover"
    />
  );
};

const LinkedInLogo = (themeType: string) => {
  const inverse = themeType === "dark" ? "light" : "dark";
  return (
    <Image
      src={`/linkedin-in-${inverse}.png`}
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
      {/*  */}
      <div className="flex p-px lg:col-span-4">
        <div
          className={`overflow-hidden rounded-lg ${theme}-bg-secondary ${theme}-bento-item-outline max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]`}
        >
          <a href={sleepyblogURL} target="_blank" rel="noopener noreferrer">
            {/* <img
              alt="sleepyblog logo"
              src="https://tailwindcss.com/plus-assets/img/component-images/bento-02-releases.png"
              className="h-80 object-cover object-left"
            /> */}
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
      {/*  */}
      <div className="flex p-px lg:col-span-2">
        <div
          className={`overflow-hidden rounded-lg ${theme}-bg-secondary ${theme}-bento-item-outline lg:rounded-tr-[2rem]`}
        >
          {/* <img
            alt="wtf"
            src="https://tailwindcss.com/plus-assets/img/component-images/bento-02-integrations.png"
            className="h-80 object-cover"
          /> */}
          <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
            {LinkedInLogo(themeType)}
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
      {/*  */}
      <div className="flex p-px lg:col-span-2">
        <div
          className={`overflow-hidden rounded-lg ${theme}-bg-secondary ${theme}-bento-item-outline lg:rounded-bl-[2rem]`}
        >
          {/* <img
            alt=""
            src="https://tailwindcss.com/plus-assets/img/component-images/bento-02-security.png"
            className="h-80 object-cover"
          /> */}
          <a href={pypiURL} target="_blank" rel="noopener noreferrer">
            {PyPILogo(themeType)}
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
      {/*  */}
      <div className="flex p-px lg:col-span-4">
        <div
          className={`overflow-hidden rounded-lg ${theme}-bg-secondary ${theme}-bento-item-outline max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]`}
        >
          {/* <img
            alt=""
            src="https://tailwindcss.com/plus-assets/img/component-images/bento-02-performance.png"
            className="h-80 object-cover object-left"
          /> */}
          <a href={githubURL} target="_blank" rel="noopener noreferrer">
            {GithubLogo(themeType)}
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
