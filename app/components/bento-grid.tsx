import { useTheme, fetchTheme } from "@/app/themes/switch-board";
import Image from "next/image";

// Images
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
  return (
    <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
      {/*  */}
      <div className="flex p-px lg:col-span-4">
        <div
          className={`overflow-hidden rounded-lg ${theme}-bg-secondary ${theme}-bento-item-outline max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]`}
        >
          <img
            alt="sleepyblog logo"
            src="https://tailwindcss.com/plus-assets/img/component-images/bento-02-releases.png"
            className="h-80 object-cover object-left"
          />
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
              Build with Next.js, Tailwind CSS, and TypeScript.
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
          {LinkedInLogo(themeType)}
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
              Connect with me on LinkedIn to peek my career and previous
              experiences.
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
          {PyPILogo(themeType)}
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
              Check out my published python utilities.
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
          {GithubLogo(themeType)}
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
              Check out my open source projects and contributions.
            </p>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};
export default BentoGrid;
