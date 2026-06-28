import { stackGroups } from "@/lib/data";
import { SectionLabel } from "./ExperienceSection";
import clsx from "clsx";

export default function StackSection() {
  return (
    <section
      id="stack"
      aria-label="Технический стек"
      className="scroll-mt-6 max-w-2xl"
    >
      <SectionLabel>Технический стек</SectionLabel>
      <p className="text-base text-muted mb-7 max-w-[500px] leading-[1.75]">
        Основа — React / TypeScript / Next.js. Всё остальное применял в реальных
        проектах.
      </p>
      <div className="bg-surface border border-subtle rounded-xl pt-0 p-5">
        {stackGroups.map((group) => (
          <div key={group.title}>
            <p
              className="text-[12px] text-muted uppercase tracking-[0.8px] mb-3.5 mt-8"
              style={{ fontFamily: "var(--font-grotesk)" }}
            >
              {group.title}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className={clsx(
                    "text-[12px] px-2.5 py-1 rounded-md border",
                    group.highlight
                      ? "border-accent text-accent bg-accent-dim"
                      : "border-subtle text-fore bg-surface2"
                  )}
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
