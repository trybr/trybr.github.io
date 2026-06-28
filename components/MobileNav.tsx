"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

const NAV_ITEMS = [
  { id: "hero",       label: "Обо мне"  },
  { id: "experience", label: "Опыт"     },
  { id: "stack",      label: "Стек"     },
  { id: "projects",   label: "Проекты"  },
  { id: "contact",    label: "Контакты" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function MobileNav() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      className="flex gap-1 px-3 py-2.5 overflow-x-auto border-b border-subtle bg-surface"
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
  );
}
