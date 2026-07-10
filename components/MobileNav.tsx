"use client";

import clsx from "clsx";
import { useActiveSection } from "@/hooks/useActiveSection";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";

const NAV_ITEMS = [
  { id: "hero", key: "about" },
  { id: "experience", key: "experience" },
  { id: "stack", key: "stack" },
  { id: "projects", key: "projects" },
  { id: "contact", key: "contact" },
] as const;

const SECTION_IDS = NAV_ITEMS.map(({ id }) => id);

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function MobileNav() {
  const active = useActiveSection(SECTION_IDS);
  const { t } = useLanguage();

  return (
    <div className="bg-surface border-b border-subtle">
      {/* Контейнер — на широких экранах всё в строку */}
      <div className="flex items-center justify-between px-2 py-2 sm:px-3 sm:py-2.5">
        {/* Навигация — слева */}
        <nav
          className="flex gap-0.5 overflow-x-auto sm:gap-1"
          aria-label="Мобильная навигация"
        >
          {NAV_ITEMS.map(({ id, key }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={clsx(
                "whitespace-nowrap px-2 py-1 rounded-md text-[10px] font-medium transition-all duration-150 flex-shrink-0",
                "sm:px-3 sm:py-1.5 sm:text-[12px]",
                "min-[380px]:px-2.5 min-[380px]:py-1 min-[380px]:text-[11px]",
                active === id
                  ? "bg-accent-dim text-accent"
                  : "text-muted hover:text-fore"
              )}
              style={{ fontFamily: "var(--font-grotesk)" }}
            >
              {t.nav[key as keyof typeof t.nav]}
            </button>
          ))}
        </nav>

        {/* Language toggle — справа на широких экранах */}
        <div className="hidden sm:block flex-shrink-0">
          <LanguageToggle size="small" />
        </div>
      </div>

      {/* Language toggle — снизу, справа на маленьких экранах (меньше 640px) */}
      <div className="flex justify-end px-2 pb-2 sm:hidden">
        <LanguageToggle size="small" />
      </div>
    </div>
  );
}
