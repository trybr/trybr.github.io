"use client";

import clsx from "clsx";
import { useActiveSection } from "@/hooks/useActiveSection";
import SocialLinks from "@/components/SocialLinks";

const NAV_ITEMS = [
  { id: "hero", label: "Обо мне" },
  { id: "experience", label: "Опыт" },
  { id: "stack", label: "Стек" },
  { id: "projects", label: "Проекты" },
  { id: "contact", label: "Контакты" },
] as const;

const SECTION_IDS = NAV_ITEMS.map(({ id }) => id);

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function MobileNav() {
  const active = useActiveSection(SECTION_IDS);

  return (
    <div className="bg-surface border-b border-subtle">
      <nav
        className="flex gap-1 px-3 pt-3 pb-2.5 overflow-x-auto"
        aria-label="Мобильная навигация"
      >
        {NAV_ITEMS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={clsx(
              "whitespace-nowrap px-3 py-1.5 rounded-md text-[12px] font-medium transition-all duration-150 flex-shrink-0",
              active === id
                ? "bg-accent-dim text-accent"
                : "text-muted hover:text-fore"
            )}
            style={{ fontFamily: "var(--font-grotesk)" }}
          >
            {label}
          </button>
        ))}
      </nav>
    </div>
  );
}
