import { projects, type ProjectType } from "@/lib/data";
import { SectionLabel } from "./ExperienceSection";
import clsx from "clsx";

export default function ProjectsSection() {
  return (
    <section id="projects" aria-label="Проекты" className="scroll-mt-6">
      <SectionLabel>Проекты</SectionLabel>
      <p className="text-sm text-muted mb-7 max-w-[500px] leading-[1.75]">
        Коммерческие, open source и пет-проекты — реальный код, решающий реальные задачи.
      </p>
      <div className="flex flex-col gap-3.5">
        {projects.map((project) => (
          <article key={project.name} className="bg-surface border border-subtle rounded-xl px-6 py-5 transition-colors duration-200 hover:border-accent group">
            <div className="flex items-start justify-between gap-3 mb-2.5">
              <h3 className="text-[15px] font-semibold text-fore group-hover:text-accent transition-colors duration-200" style={{ fontFamily: "var(--font-grotesk)" }}>
                {project.name}
              </h3>
              <TypeBadge type={project.type} label={project.typeLabel} />
            </div>
            <p className="text-[13px] text-muted leading-[1.65]">{project.desc}</p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {project.tags.map((tag) => (
                <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-surface2 text-muted border border-subtle" style={{ fontFamily: "var(--font-mono)" }}>
                  {tag}
                </span>
              ))}
            </div>
            {project.url && (
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-3 text-[11px] text-accent hover:underline" style={{ fontFamily: "var(--font-mono)" }}>
                GitHub →
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

function TypeBadge({ type, label }: { type: ProjectType; label: string }) {
  return (
    <span className={clsx("text-[9px] px-2 py-1 rounded border whitespace-nowrap flex-shrink-0", type === "oss" && "border-green text-green", type === "concept" && "border-muted text-muted", type === "commercial" && "border-accent text-accent")} style={{ fontFamily: "var(--font-mono)" }}>
      {label}
    </span>
  );
}
