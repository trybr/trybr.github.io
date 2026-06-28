import { experience } from "@/lib/data";

export default function ExperienceSection() {
  return (
    <section id="experience" aria-label="Опыт работы" className="scroll-mt-6">
      <SectionLabel>Опыт работы</SectionLabel>
      <div>
        {experience.map((item, idx) => (
          <div
            key={idx}
            className="relative pl-5 pb-8 border-l border-subtle last:border-l-transparent last:pb-0"
          >
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
              {item.company}
            </h3>
            <p
              className="text-[12px] text-accent mt-0.5"
              style={{ fontFamily: "var(--font-grotesk)" }}
            >
              {item.role}
            </p>
            <div className="flex flex-col gap-1.5 mt-2.5">
              {item.desc && (
                <h6 className="text-[14px] text-muted mt-2 leading-[1.65] max-w-[520px]">
                  Обязанности:
                </h6>
              )}
              <ul>
                {item.desc?.map((desc) => (
                  <li
                    key={desc}
                    className="text-[14px] text-muted mt-2 leading-[1.65] max-w-[520px]"
                  >
                    — {desc}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-1.5 mt-2.5">
              {item.ach && (
                <h6 className="text-[14px] text-muted mt-2 leading-[1.65] max-w-[520px]">
                  Достижения:
                </h6>
              )}
              <ul>
                {item.ach?.map((ach) => (
                  <li
                    key={ach}
                    className="text-[14px] text-muted mb-2 leading-[1.65] max-w-[520px]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    — {ach}
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
        ))}
      </div>
    </section>
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
