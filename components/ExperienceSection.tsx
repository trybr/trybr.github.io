"use client";

import { useState } from "react";
import { experience } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import { ExpandToggle } from "./ExpandToggle";

const VISIBLE_COUNT = 2;

export default function ExperienceSection() {
  const [expanded, setExpanded] = useState(false);
  const { t } = useLanguage();
  const hasMore = experience.length > VISIBLE_COUNT;
  const visibleExperience = expanded
    ? experience
    : experience.slice(0, VISIBLE_COUNT);

  return (
    <section
      id="experience"
      aria-label={t.experience.title}
      className="scroll-mt-6"
    >
      <SectionLabel>{t.experience.title}</SectionLabel>
      <div>
        {visibleExperience.map((item, idx) => (
          <ExperienceItem key={`${item.company}-${item.period}`} item={item} />
        ))}
      </div>
      {hasMore && (
        <ExpandToggle
          expanded={expanded}
          onToggle={() => setExpanded((value) => !value)}
          hiddenCount={experience.length - VISIBLE_COUNT}
        />
      )}
    </section>
  );
}

type ExperienceItemData = (typeof experience)[number];

function ExperienceItem({ item }: { item: ExperienceItemData }) {
  const { t, language } = useLanguage();

  // Получаем переведённое название компании
  const getCompanyName = (company: string) => {
    const companies = t.experience.companies;
    if (companies && companies[company as keyof typeof companies]) {
      return companies[company as keyof typeof companies];
    }
    return company;
  };

  // Получаем переведённую роль
  const getRole = (role: string) => {
    const roles = t.experience.roles;
    if (roles && roles[role as keyof typeof roles]) {
      return roles[role as keyof typeof roles];
    }
    return role;
  };

  // Получаем переведённое описание обязанности
  const getDesc = (desc: string, index: number) => {
    const key = `${item.period}_${index}`;
    const descs = t.experience.desc;
    if (descs && descs[key as keyof typeof descs]) {
      return descs[key as keyof typeof descs];
    }
    return desc;
  };

  // Получаем переведённое достижение
  const getAch = (ach: string, index: number) => {
    // Используем год из периода для ключа
    const year = item.period.split(" — ")[0];
    const key = `${year}_${index}`;
    const achMap = t.experience.ach;
    if (achMap && achMap[key as keyof typeof achMap]) {
      return achMap[key as keyof typeof achMap];
    }
    return ach;
  };

  return (
    <div className="relative pl-5 pb-8 border-l border-subtle last:border-l-transparent last:pb-0">
      <span className="absolute -left-[5px] top-1 w-[9px] h-[9px] rounded-full bg-accent border-2 border-bg block" />
      <p
        className="text-[12px] text-muted mb-1.5 tracking-[0.6px] uppercase"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {item.period}
      </p>
      <h3
        className="text-[18px] font-semibold text-fore"
        style={{ fontFamily: "var(--font-grotesk)" }}
      >
        {getCompanyName(item.company)}
      </h3>
      <p
        className="text-[12px] text-accent mt-0.5"
        style={{ fontFamily: "var(--font-grotesk)" }}
      >
        {getRole(item.role)}
      </p>
      <div className="flex flex-col gap-1.5 mt-2.5">
        {item.desc && item.desc.length > 0 && (
          <h6 className="text-[14px] text-muted mt-2 leading-[1.65] max-w-[620px]">
            {t.experience.role}:
          </h6>
        )}
        <ul>
          {item.desc?.map((desc, index) => (
            <li
              key={desc}
              className="text-[14px] text-muted mt-2 leading-[1.65] max-w-[620px]"
            >
              — {getDesc(desc, index)}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-1.5 mt-2.5">
        {item.ach && item.ach.length > 0 && (
          <h6 className="text-[14px] text-muted mt-2 leading-[1.65] max-w-[620px]">
            {t.experience.achievements}:
          </h6>
        )}
        <ul>
          {item.ach?.map((ach, index) => (
            <li
              key={ach}
              className="text-[14px] text-muted mb-2 leading-[1.65] max-w-[620px]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              — {getAch(ach, index)}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap gap-1.5 mt-2.5">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="text-[12px] px-2 py-0.5 rounded bg-surface2 text-muted border border-subtle"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[18px] font-bold text-accent tracking-[2.5px] uppercase mb-5"
      style={{ fontFamily: "var(--font-mono)" }}
    >
      {children}
    </p>
  );
}
