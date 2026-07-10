"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { projects } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import { SectionLabel } from "./ExperienceSection";
import { ExpandToggle } from "./ExpandToggle";

const VISIBLE_COUNT = 6;

type ProjectCategory = "all" | "commercial" | "pet" | "opensource";

export default function ProjectsSection() {
  const [expanded, setExpanded] = useState(false);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const { t } = useLanguage();

  // Получаем переведённое название проекта
  const getProjectName = (projectName: string) => {
    const names = t.projects.names;
    if (names && names[projectName as keyof typeof names]) {
      return names[projectName as keyof typeof names];
    }
    return projectName;
  };

  // Получаем переведённое описание проекта
  const getProjectDesc = (projectName: string, fallback: string) => {
    const descs = t.projects.descriptions;
    if (descs && descs[projectName as keyof typeof descs]) {
      return descs[projectName as keyof typeof descs];
    }
    return fallback;
  };

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter((project) => project.type === activeCategory);
  }, [activeCategory]);

  const hasMore = filteredProjects.length > VISIBLE_COUNT;
  const visibleProjects = expanded
    ? filteredProjects
    : filteredProjects.slice(0, VISIBLE_COUNT);

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: "all", label: t.projects.all },
    { id: "commercial", label: t.projects.commercial },
    { id: "pet", label: t.projects.openSource },
  ];

  const getTypeLabel = (type: string) => {
    if (type === "commercial") return `💼 ${t.projects.commercial}`;
    if (type === "pet") return `🐾 ${t.projects.openSource}`;
    if (type === "opensource") return "🌐 Open Source";
    return type;
  };

  return (
    <section
      id="projects"
      aria-label={t.projects.title}
      className="scroll-mt-6"
    >
      <SectionLabel>{t.projects.title}</SectionLabel>
      <p className="text-base text-muted mb-7 max-w-[500px] leading-[1.75]">
        {t.projects.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => {
              setActiveCategory(category.id);
              setExpanded(false);
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
                  alt={getProjectName(project.name)}
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
                {getProjectName(project.name)}
              </h3>
              <span className="project-type text-xs px-2 py-1 rounded-full bg-subtle/20 text-muted whitespace-nowrap xs:hidden">
                {getTypeLabel(project.type)}
              </span>
            </div>
            <p className="text-[14px] text-muted leading-[1.65]">
              {getProjectDesc(project.name, project.desc)}
            </p>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-3 text-[14px] text-accent hover:underline"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {t.projects.view}
              </a>
            )}
          </article>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12 text-muted">
          <p className="text-lg">{t.projects.empty}</p>
          <button
            onClick={() => setActiveCategory("all")}
            className="mt-2 text-accent hover:underline"
          >
            {t.projects.showAll}
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
