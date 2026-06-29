"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "@/lib/data";
import { SectionLabel } from "./ExperienceSection";
import { ExpandToggle } from "./ExpandToggle";

const VISIBLE_COUNT = 6;

export default function ProjectsSection() {
  const [expanded, setExpanded] = useState(false);
  const hasMore = projects.length > VISIBLE_COUNT;
  const visibleProjects = expanded
    ? projects
    : projects.slice(0, VISIBLE_COUNT);

  return (
    <section id="projects" aria-label="Проекты" className="scroll-mt-6">
      <SectionLabel>Проекты</SectionLabel>
      <p className="text-base text-muted mb-7 max-w-[500px] leading-[1.75]">
        Говорят, портфолио — лицо разработчика. За 7+ лет я работал во фрилансе,
        стартапах и продуктовых компаниях. Здесь — лишь некоторые проекты,
        которые показывают, как я мыслю, пишу код и решаю задачи.
      </p>
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
      {hasMore && (
        <ExpandToggle
          expanded={expanded}
          onToggle={() => setExpanded((value) => !value)}
          hiddenCount={projects.length - VISIBLE_COUNT}
        />
      )}
    </section>
  );
}
