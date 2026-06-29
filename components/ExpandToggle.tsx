"use client";

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
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={expanded}
      className="mt-5 text-[12px] text-accent hover:text-fore transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md border border-accent bg-accent-dim px-6 py-4"
      style={{ fontFamily: "var(--font-mono)" }}
    >
      {expanded ? "Свернуть ↑" : `Показать ещё (${hiddenCount}) ↓`}
    </button>
  );
}
