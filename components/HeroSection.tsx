"use client";

import { useEffect, useState } from "react";
import { siteConfig, stats } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import AnimatedMedia from "@/components/AnimatedMedia";

export default function HeroSection() {
  const [displayed, setDisplayed] = useState("");
  const { t, language } = useLanguage();

  // Используем nameEn для английского, name для русского
  const fullName = language === "en" ? siteConfig.nameEn : siteConfig.name;

  useEffect(() => {
    let i = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(fullName.slice(0, i));
        if (i >= fullName.length) {
          clearInterval(interval);
        }
      }, 75);
      return () => clearInterval(interval);
    }, 300);
    return () => clearTimeout(timer);
  }, [fullName]);

  // Получаем локализованные тексты
  const bio = t.bio;
  const cms = t.cms;
  const additional = t.additional;
  const statsLabels = {
    years: t.stats.years,
    projects: t.stats.projects,
    technologies: t.stats.technologies,
  };

  return (
    <section
      id="hero"
      aria-label={t.nav.about}
      className="scroll-mt-6 max-w-2xl"
    >
      <h1
        className="text-[clamp(36px,5vw,52px)] font-bold leading-[1.05] tracking-[-2px] text-fore"
        style={{ fontFamily: "var(--font-grotesk)" }}
      >
        {displayed}
        <span
          className="inline-block w-[3px] h-[0.85em] bg-accent align-bottom animate-blink ml-0.5 ml-1"
          aria-hidden="true"
        />
      </h1>

      <div className="relative mt-5 w-[150px] w-[150px] rounded-2xl bg-gradient-to-br from-[#6C8CFF] via-[#5BE08C] to-[#6C8CFF] p-[1px]">
        <div className="relative w-full h-full rounded-2xl bg-[#0A0E14] flex items-center justify-center overflow-hidden">
          <AnimatedMedia
            webmSrc="/images/photo-moshed.webm"
            fallbackImage="/images/photo.jpg"
            className="w-full max-w-md rounded-xl"
          />
        </div>
      </div>

      <p className="text-base text-muted mt-5 max-w-[480px] leading-[1.75]">
        {bio}
      </p>
      <p className="text-base text-muted mt-5 max-w-[480px] leading-[1.75]">
        {cms}
      </p>
      <p className="text-base text-muted mt-5 max-w-[480px] leading-[1.75]">
        {additional}
      </p>

      <div className="flex gap-4 mt-9 flex-wrap">
        {stats.map((s, index) => {
          const labels = [
            statsLabels.years,
            statsLabels.projects,
            statsLabels.technologies,
          ];
          return (
            <div
              key={s.label}
              className="flex-1 bg-surface border border-subtle rounded-xl px-5 py-4"
            >
              <p
                className="text-[30px] font-bold text-fore leading-none"
                style={{ fontFamily: "var(--font-grotesk)" }}
              >
                {s.num.replace("+", "")}
                {s.num.includes("+") && (
                  <em className="text-accent not-italic">+</em>
                )}
              </p>
              <p
                className="text-[9px] text-muted mt-1 tracking-[0.6px] uppercase"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {labels[index] || s.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
