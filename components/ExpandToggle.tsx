"use client";

import { useLanguage } from "@/context/LanguageContext";

type ExpandToggleProps = {
  expanded: boolean;
  onToggle: () => void;
  hiddenCount: number;
};

export function ExpandToggle({
  expanded,
  onToggle,
  hiddenCount,
}: ExpandToggleProps) {
  const { t } = useLanguage();

  // Получаем переводы для кнопки
  const showMore = t.expand?.showMore || "Показать ещё";
  const showLess = t.expand?.showLess || "Свернуть";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={expanded}
      className="mt-5 text-[12px] text-accent hover:text-fore transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md border border-accent bg-accent-dim px-6 py-4"
      style={{ fontFamily: "var(--font-mono)" }}
    >
      {expanded ? `${showLess} ↑` : `${showMore} (${hiddenCount}) ↓`}
    </button>
  );
}
