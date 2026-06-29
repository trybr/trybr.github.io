"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: readonly string[]) {
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    const updateActive = () => {
      const atPageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      if (atPageBottom) {
        setActive(sectionIds[sectionIds.length - 1]);
        return;
      }

      const marker = window.innerHeight * 0.35;
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;

        if (el.getBoundingClientRect().top <= marker) {
          current = id;
        }
      }

      setActive(current);
    };

    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    updateActive();

    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [sectionIds]);

  return active;
}
