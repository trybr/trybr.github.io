"use client";

import { useLanguage } from "@/context/LanguageContext";
import clsx from "clsx";

type LanguageToggleProps = {
  size?: "normal" | "small";
};

export default function LanguageToggle({
  size = "normal",
}: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage();

  const isSmall = size === "small";

  return (
    <div
      className={clsx(
        "inline-flex items-center gap-0.5 rounded-lg bg-surface2 border border-subtle",
        isSmall ? "p-0.5 gap-0.5" : "p-1 gap-1"
      )}
    >
      <button
        onClick={() => setLanguage("ru")}
        className={clsx(
          "rounded-md font-medium transition-all duration-150",
          language === "ru"
            ? "bg-accent text-white"
            : "text-muted hover:text-fore",
          isSmall
            ? "px-1.5 py-0.5 text-[9px] min-[380px]:px-2 min-[380px]:py-0.5 min-[380px]:text-[10px]"
            : "px-2.5 py-1 text-xs"
        )}
        aria-label="Switch to Russian"
      >
        RU
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={clsx(
          "rounded-md font-medium transition-all duration-150",
          language === "en"
            ? "bg-accent text-white"
            : "text-muted hover:text-fore",
          isSmall
            ? "px-1.5 py-0.5 text-[9px] min-[380px]:px-2 min-[380px]:py-0.5 min-[380px]:text-[10px]"
            : "px-2.5 py-1 text-xs"
        )}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}
