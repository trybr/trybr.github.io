import { siteConfig } from "@/lib/data";
import { SectionLabel } from "./ExperienceSection";

const contactItems = [
  {
    label: "Telegram",
    value: siteConfig.contacts.telegram,
    href: siteConfig.contacts.telegramUrl,
    icon: <TelegramIcon />,
    preferred: true,
  },
  {
    label: "Email",
    value: siteConfig.contacts.email,
    href: `mailto:${siteConfig.contacts.email}`,
    icon: <MailIcon />,
  },
  {
    label: "GitHub",
    value: siteConfig.contacts.github,
    href: siteConfig.contacts.githubUrl,
    icon: <GithubIcon />,
  },
  {
    label: "Телефон",
    value: siteConfig.contacts.phone,
    href: `tel:${siteConfig.contacts.phone.replace(/\s|\(|\)|-/g, "")}`,
    icon: <PhoneIcon />,
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-label="Контакты"
      className="scroll-mt-6 max-w-2xl"
    >
      <SectionLabel>Контакты</SectionLabel>
      <p className="text-base text-muted mb-7 max-w-[500px] leading-[1.75]">
        Открыт к предложениям о работе, интересным проектам и техническим
        дискуссиям.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {contactItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={
              item.href.startsWith("http") ? "noopener noreferrer" : undefined
            }
            className="bg-surface border border-subtle rounded-xl px-5 py-4 flex items-center gap-3.5 hover:border-accent transition-colors duration-200 group"
          >
            <div className="w-9 h-9 rounded-lg bg-accent-dim flex items-center justify-center text-accent flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-200">
              {item.icon}
            </div>
            <div>
              <p
                className="text-[12px] text-muted uppercase tracking-[0.6px]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {item.label}
                {item.preferred && <span className="ml-1.5 text-accent"></span>}
              </p>
              <p
                className="text-[14px] text-fore mt-1"
                style={{ fontFamily: "var(--font-grotesk)" }}
              >
                {item.value}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
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
function TelegramIcon() {
  return (
    <svg {...s}>
      <path d="m22 3-8.97 19.7a.45.45 0 0 1-.83.01L9 13 2.31 10.22a.45.45 0 0 1 .01-.83L22 3z" />
      <path d="M9 13 22 3" />
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
function GithubIcon() {
  return (
    <svg {...s}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg {...s}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.56 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
