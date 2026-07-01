"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { projects } from "@/lib/data";
import { SectionLabel } from "./ExperienceSection";
import { ExpandToggle } from "./ExpandToggle";

const VISIBLE_COUNT = 6;

type ProjectCategory = "all" | "commercial" | "pet" | "opensource";

export default function ProjectsSection() {
  const [expanded, setExpanded] = useState(false);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  // Фильтрация проектов по категории
  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter((project) => project.type === activeCategory);
  }, [activeCategory]);

  const hasMore = filteredProjects.length > VISIBLE_COUNT;
  const visibleProjects = expanded
    ? filteredProjects
    : filteredProjects.slice(0, VISIBLE_COUNT);

  // Кнопки фильтрации
  const categories: { id: ProjectCategory; label: string }[] = [
    { id: "all", label: "Все проекты" },
    { id: "commercial", label: "Коммерческие" },
    { id: "pet", label: "Pet-проекты" },
  ];

  return (
    <section id="projects" aria-label="Проекты" className="scroll-mt-6">
      <SectionLabel>Проекты</SectionLabel>
      <p className="text-base text-muted mb-7 max-w-[500px] leading-[1.75]">
        Говорят, портфолио — лицо разработчика. За 7+ лет я работал во фрилансе,
        стартапах и продуктовых компаниях. Здесь — лишь некоторые проекты,
        которые показывают, как я мыслю, пишу код и решаю задачи.
      </p>

      {/* Фильтры */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => {
              setActiveCategory(category.id);
              setExpanded(false); // Сбрасываем раскрытие при смене фильтра
            }}
            className={`px-4 py-2 text-sm rounded-full transition-colors duration-200 ${
              activeCategory === category.id
                ? "bg-accent text-white"
                : "bg-surface border border-subtle text-muted hover:border-accent hover:text-foreground"
            }`}
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Список проектов */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {visibleProjects.map((project) => (
          <article
            key={project.name}
            className="bg-surface border border-subtle rounded-xl px-6 py-5 transition-colors duration-200 hover:border-accent group"
          >
            {project.image && (
              <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="eager"
                />
              </div>
            )}
            <div className="flex items-start justify-between gap-3 mb-2.5">
              <h3
                className="text-[16px] font-semibold text-fore group-hover:text-accent transition-colors duration-200"
                style={{ fontFamily: "var(--font-grotesk)" }}
              >
                {project.name}
              </h3>
              {/* Бейдж категории */}
              <span className="text-xs px-2 py-1 rounded-full bg-subtle/20 text-muted whitespace-nowrap">
                {project.type === "commercial" && "💼 Коммерческий"}
                {project.type === "pet" && "🐾 Pet-проект"}
                {project.type === "opensource" && "🌐 Open Source"}
              </span>
            </div>
            <p className="text-[14px] text-muted leading-[1.65]">
              {project.desc}
            </p>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-3 text-[14px] text-accent hover:underline"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Посмотреть →
              </a>
            )}
          </article>
        ))}
      </div>

      {/* Если нет проектов в выбранной категории */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12 text-muted">
          <p className="text-lg">Нет проектов в этой категории</p>
          <button
            onClick={() => setActiveCategory("all")}
            className="mt-2 text-accent hover:underline"
          >
            Показать все проекты
          </button>
        </div>
      )}

      {hasMore && (
        <ExpandToggle
          expanded={expanded}
          onToggle={() => setExpanded((value) => !value)}
          hiddenCount={filteredProjects.length - VISIBLE_COUNT}
        />
      )}
    </section>
  );
}
