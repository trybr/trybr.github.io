"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/data";
import clsx from "clsx";

const NAV_ITEMS = [
  { id: "hero", label: "Обо мне" },
  { id: "experience", label: "Опыт" },
  { id: "stack", label: "Стек" },
  { id: "projects", label: "Проекты" },
  { id: "contact", label: "Контакты" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Sidebar() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <aside className="w-[230px] min-w-[230px] bg-surface border-r border-subtle flex flex-col py-9 sticky top-0 h-screen">
      {/* Social + availability */}
      <div className="px-6">
        <div className="flex gap-3.5 mb-5">
          <SocialLink href={siteConfig.contacts.telegramUrl} label="Telegram">
            <TelegramIcon />
          </SocialLink>
          <SocialLink
            href={`mailto:${siteConfig.contacts.email}`}
            label="Email"
          >
            <MailIcon />
          </SocialLink>
          <SocialLink href={siteConfig.contacts.githubUrl} label="GitHub">
            <GithubIcon />
          </SocialLink>
        </div>
        {siteConfig.available && (
          <div
            className="flex items-center gap-1.5 text-green text-[10px] tracking-widest"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse2 block" />
            Открыт к предложениям
          </div>
        )}
      </div>{" "}
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

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-muted hover:text-accent transition-colors duration-150 focus-visible:outline-none focus-visible:text-accent"
    >
      {children}
    </a>
  );
}

/* ── SVG icons ── */
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
function TelegramIcon() {
  return (
    <svg {...s}>
      <path d="m22 3-8.97 19.7a.45.45 0 0 1-.83.01L9 13 2.31 10.22a.45.45 0 0 1 .01-.83L22 3z" />
      <path d="M9 13 22 3" />
    </svg>
  );
}
function GithubIcon() {
  return (
    <svg {...s}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}
function HhIcon() {
  return (
    <svg {...s}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 8v8M12 12H7M17 8v8M12 12h5" />
    </svg>
  );
}
