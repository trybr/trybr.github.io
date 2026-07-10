"use client";

import { siteConfig } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import clsx from "clsx";

type SocialLinksProps = {
  className?: string;
  showAvailable?: boolean;
};

export default function SocialLinks({
  className,
  showAvailable = true,
}: SocialLinksProps) {
  const { t } = useLanguage();

  return (
    <div className={clsx(className)}>
      <div className="flex gap-3.5">
        <SocialLink
          href={siteConfig.contacts.telegramUrl}
          label={t.contact.telegram}
        >
          <TelegramIcon />
        </SocialLink>
        <SocialLink
          href={`mailto:${siteConfig.contacts.email}`}
          label={t.contact.email}
        >
          <MailIcon />
        </SocialLink>
        <SocialLink
          href={siteConfig.contacts.githubUrl}
          label={t.contact.github}
        >
          <GithubIcon />
        </SocialLink>
      </div>

      {/* Индикатор доступности */}
      {showAvailable && siteConfig.available && (
        <div
          className="flex items-center gap-1.5 text-green text-[10px] tracking-widest mt-3"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse2 block" />
          {t.available}
        </div>
      )}
    </div>
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
