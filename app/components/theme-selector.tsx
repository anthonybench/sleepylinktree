"use client";
import { useTheme, themes, fetchTheme } from "@/app/themes/switch-board";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/16/solid";
import { CheckIcon, SunIcon, MoonIcon } from "@heroicons/react/20/solid";
import "@/app/utils/debug.css";

function ThemeTypeDisplay(themeType: string) {
  if (themeType === "light") {
    return (
      <span className="hidden md:inline">
        {themeType} <SunIcon aria-hidden="true" className="size-3 inline" />
      </span>
    );
  } else if (themeType === "dark") {
    return (
      <span className="hidden md:inline">
        {themeType} <MoonIcon aria-hidden="true" className="size-3 inline" />
      </span>
    );
  } else {
    return null;
  }
}

export default function ThemeSelector() {
  const { theme, setTheme } = useTheme();
  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };
  const theme_object = fetchTheme(theme);
  return (
    <Listbox value={theme} onChange={handleThemeChange}>
      <div className="relative mt-2">
        <ListboxButton
          className={`grid w-full cursor-default grid-cols-1 rounded-md py-1.5 pl-3 pr-2 text-left ${theme}-theme-selector-button`}
        >
          <span className="col-start-1 row-start-1 flex w-full gap-2 pr-6">
            <span className="truncate">{theme_object.displayName}</span>
            <span
              className={`truncate ${theme}-text-muted-${theme_object.type}`}
            >
              {ThemeTypeDisplay(theme_object.type)}
            </span>
          </span>
          <ChevronUpDownIcon
            aria-hidden="true"
            className={`col-start-1 row-start-1 size-5 self-center justify-self-end ${theme}-text-secondary sm:size-4`}
          />
        </ListboxButton>

        <ListboxOptions
          transition
          className={`absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md ${theme}-bg-secondary py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm`}
        >
          {themes.map((theme_option) => (
            <ListboxOption
              key={theme_option.codeName}
              value={theme_option.codeName}
              className={`group relative cursor-default select-none py-2 pl-3 pr-9 ${theme}-text-primary ${theme}-focus-option`}
            >
              <div className="flex">
                <span className="truncate font-normal group-data-[selected]:font-semibold">
                  {theme_option.displayName}
                </span>
                <span
                  className={`ml-2 truncate ${theme}-text-muted-${theme_option.type}`}
                >
                  {ThemeTypeDisplay(theme_option.type)}
                </span>
              </div>
              <span
                className={`absolute inset-y-0 right-0 flex items-center pr-4 ${theme}-text-secondary group-[&:not([data-selected])]:hidden`}
              >
                <CheckIcon aria-hidden="true" className="size-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
