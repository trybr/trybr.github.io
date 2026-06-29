"use client";

import { useActiveSection } from "@/hooks/useActiveSection";
import SocialLinks from "@/components/SocialLinks";
import clsx from "clsx";

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

export default function Sidebar() {
  const active = useActiveSection(SECTION_IDS);

  return (
    <aside className="w-[230px] min-w-[230px] bg-surface border-r border-subtle flex flex-col py-9 sticky top-0 h-screen">
      <SocialLinks className="px-6" />
      <div className="h-px bg-subtle mx-6 mb-5 mt-5" />
      {/* Nav */}
      <nav className="flex-1 px-3" aria-label="Навигация по странице">
        {NAV_ITEMS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={clsx(
              "flex items-center gap-2.5 w-full text-left px-3.5 py-2.5 rounded-lg text-[13px] font-medium mb-0.5 transition-all duration-150",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
              active === id
                ? "bg-accent-dim text-accent"
                : "text-muted hover:bg-surface2 hover:text-fore"
            )}
            style={{ fontFamily: "var(--font-grotesk)" }}
            aria-current={active === id ? "page" : undefined}
          >
            <NavIcon id={id} />
            {label}

            {/* Active indicator bar */}
            {active === id && (
              <span
                className="ml-auto w-1.5 h-1.5 rounded-full bg-accent block"
                aria-hidden="true"
              />
            )}
          </button>
        ))}
      </nav>
    </aside>
  );
}

/* ── Nav icons ── */
function NavIcon({ id }: { id: string }) {
  const map: Record<string, React.ReactNode> = {
    hero: <UserIcon />,
    experience: <BriefcaseIcon />,
    stack: <CodeIcon />,
    projects: <RocketIcon />,
    contact: <MailIcon />,
  };
  return (
    <span
      className="w-4 h-4 flex items-center justify-center flex-shrink-0"
      aria-hidden="true"
    >
      {map[id]}
    </span>
  );
}

const s = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function UserIcon() {
  return (
    <svg {...s}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
function BriefcaseIcon() {
  return (
    <svg {...s}>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </svg>
  );
}
function CodeIcon() {
  return (
    <svg {...s}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
function RocketIcon() {
  return (
    <svg {...s}>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M9 10.35C9 7.53 11.21 4.92 14 3c2.79 1.92 5 4.53 5 7.35a5 5 0 0 1-1.12 3.17A19.91 19.91 0 0 1 13 18" />
      <circle cx="12" cy="10" r="2" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg {...s}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
